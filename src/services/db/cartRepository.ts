import { getTursoClient } from './tursoClient';

export interface CartItem {
  id: string;
  userId: string;
  productId: string;
  productName: string;
  productImage: string;
  selectedStore: string;
  storeUrl: string;
  unitPrice: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
}

export class CartRepository {
  private static mapRowToCartItem(row: any): CartItem {
    return {
      id: row.id as string,
      userId: row.user_id as string,
      productId: row.product_id as string,
      productName: row.product_name as string,
      productImage: (row.product_image as string) || '',
      selectedStore: (row.selected_store as string) || 'Amazon',
      storeUrl: (row.store_url as string) || '#',
      unitPrice: Number(row.unit_price) || 0,
      quantity: Number(row.quantity) || 1,
      createdAt: row.created_at as string,
      updatedAt: row.updated_at as string,
    };
  }

  /**
   * Retrieves all items in a user's cart
   */
  public static async getCartForUser(userId: string): Promise<CartItem[]> {
    const db = getTursoClient();
    const result = await db.execute({
      sql: `SELECT * FROM cart_items WHERE user_id = ? ORDER BY created_at DESC;`,
      args: [userId],
    });

    return result.rows.map(row => this.mapRowToCartItem(row));
  }

  /**
   * Adds an item to the cart or increments its quantity if it already exists
   */
  public static async addItem(
    userId: string,
    item: {
      productId: string;
      productName: string;
      productImage?: string;
      selectedStore?: string;
      storeUrl?: string;
      unitPrice: number;
      quantity?: number;
    }
  ): Promise<CartItem> {
    const db = getTursoClient();
    const now = new Date().toISOString();
    const addQty = item.quantity || 1;
    const store = item.selectedStore || 'Tienda Oficial';
    const storeUrl = item.storeUrl || '#';

    // Check if the item from this same store already exists in the user's cart
    const existingResult = await db.execute({
      sql: `SELECT * FROM cart_items WHERE user_id = ? AND product_id = ? AND selected_store = ? LIMIT 1;`,
      args: [userId, item.productId, store],
    });

    if (existingResult.rows.length > 0) {
      const existing = existingResult.rows[0];
      const newQuantity = Number(existing.quantity) + addQty;

      await db.execute({
        sql: `UPDATE cart_items SET quantity = ?, unit_price = ?, updated_at = ? WHERE id = ?;`,
        args: [newQuantity, item.unitPrice, now, existing.id],
      });

      return {
        ...this.mapRowToCartItem(existing),
        quantity: newQuantity,
        unitPrice: item.unitPrice,
        updatedAt: now,
      };
    }

    // Insert new cart item
    const id = `cart_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    await db.execute({
      sql: `
        INSERT INTO cart_items (
          id, user_id, product_id, product_name, product_image,
          selected_store, store_url, unit_price, quantity, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
      `,
      args: [
        id,
        userId,
        item.productId,
        item.productName,
        item.productImage || '',
        store,
        storeUrl,
        item.unitPrice,
        addQty,
        now,
        now,
      ],
    });

    return {
      id,
      userId,
      productId: item.productId,
      productName: item.productName,
      productImage: item.productImage || '',
      selectedStore: store,
      storeUrl,
      unitPrice: item.unitPrice,
      quantity: addQty,
      createdAt: now,
      updatedAt: now,
    };
  }

  /**
   * Updates the quantity of a cart item
   */
  public static async updateQuantity(userId: string, cartItemId: string, quantity: number): Promise<boolean> {
    const db = getTursoClient();

    if (quantity <= 0) {
      return await this.removeItem(userId, cartItemId);
    }

    const now = new Date().toISOString();
    const result = await db.execute({
      sql: `UPDATE cart_items SET quantity = ?, updated_at = ? WHERE id = ? AND user_id = ?;`,
      args: [quantity, now, cartItemId, userId],
    });

    return (result.rowsAffected || 0) > 0;
  }

  /**
   * Removes an item from the cart
   */
  public static async removeItem(userId: string, cartItemId: string): Promise<boolean> {
    const db = getTursoClient();
    const result = await db.execute({
      sql: `DELETE FROM cart_items WHERE id = ? AND user_id = ?;`,
      args: [cartItemId, userId],
    });

    return (result.rowsAffected || 0) > 0;
  }

  /**
   * Clears all items in a user's cart
   */
  public static async clearCart(userId: string): Promise<boolean> {
    const db = getTursoClient();
    await db.execute({
      sql: `DELETE FROM cart_items WHERE user_id = ?;`,
      args: [userId],
    });

    return true;
  }

  /**
   * Merges guest items into an authenticated user's cart upon login
   */
  public static async mergeGuestCart(guestId: string, authenticatedUserId: string): Promise<void> {
    if (!guestId || guestId === authenticatedUserId) return;
    const guestItems = await this.getCartForUser(guestId);

    for (const item of guestItems) {
      await this.addItem(authenticatedUserId, {
        productId: item.productId,
        productName: item.productName,
        productImage: item.productImage,
        selectedStore: item.selectedStore,
        storeUrl: item.storeUrl,
        unitPrice: item.unitPrice,
        quantity: item.quantity,
      });
    }

    await this.clearCart(guestId);
  }
}
