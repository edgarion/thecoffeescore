import type { VercelRequest, VercelResponse } from '@vercel/node';
import { CartRepository } from '../src/services/db/cartRepository';
import { initTursoSchema } from '../src/services/db/tursoClient';

/**
 * Shopping Cart API Endpoint for TheCoffeeScore
 * Actions:
 * - GET /api/cart?userId=...: Get items in cart
 * - POST /api/cart: Add item or merge guest cart
 * - PUT /api/cart: Update item quantity
 * - DELETE /api/cart?userId=...&itemId=...: Remove item / clear cart
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    await initTursoSchema();
  } catch (err: any) {
    console.warn('Schema check warning:', err.message);
  }

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // GET Cart
  if (req.method === 'GET') {
    try {
      const { userId } = req.query;
      if (!userId || typeof userId !== 'string') {
        return res.status(400).json({ success: false, error: 'Se requiere userId' });
      }

      const items = await CartRepository.getCartForUser(userId);
      const totalAmount = Math.round(items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0) * 100) / 100;
      const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

      return res.status(200).json({
        success: true,
        items,
        totalCount,
        totalAmount,
      });
    } catch (err: any) {
      return res.status(500).json({ success: false, error: err.message || 'Error al obtener la cesta' });
    }
  }

  // POST Add Item or Merge Cart
  if (req.method === 'POST') {
    try {
      const { action, userId, guestId, item } = req.body || {};

      if (!userId) {
        return res.status(400).json({ success: false, error: 'Se requiere userId' });
      }

      // Merge guest cart into authenticated user
      if (action === 'merge' && guestId) {
        await CartRepository.mergeGuestCart(guestId, userId);
        const updated = await CartRepository.getCartForUser(userId);
        return res.status(200).json({ success: true, message: 'Cesta combinada', items: updated });
      }

      if (!item || !item.productId || typeof item.unitPrice !== 'number') {
        return res.status(400).json({ success: false, error: 'Datos de producto inválidos' });
      }

      const savedItem = await CartRepository.addItem(userId, {
        productId: item.productId,
        productName: item.productName || 'Producto de café',
        productImage: item.productImage || '',
        selectedStore: item.selectedStore || 'Tienda Oficial',
        storeUrl: item.storeUrl || '#',
        unitPrice: item.unitPrice,
        quantity: item.quantity || 1,
      });

      const allItems = await CartRepository.getCartForUser(userId);
      const totalAmount = Math.round(allItems.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0) * 100) / 100;
      const totalCount = allItems.reduce((sum, i) => sum + i.quantity, 0);

      return res.status(201).json({
        success: true,
        message: 'Producto añadido a la cesta',
        item: savedItem,
        items: allItems,
        totalCount,
        totalAmount,
      });
    } catch (err: any) {
      return res.status(500).json({ success: false, error: err.message || 'Error al añadir a la cesta' });
    }
  }

  // PUT Update Quantity
  if (req.method === 'PUT') {
    try {
      const { userId, itemId, quantity } = req.body || {};
      if (!userId || !itemId || typeof quantity !== 'number') {
        return res.status(400).json({ success: false, error: 'Parámetros incompletos' });
      }

      await CartRepository.updateQuantity(userId, itemId, quantity);
      const items = await CartRepository.getCartForUser(userId);
      const totalAmount = Math.round(items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0) * 100) / 100;
      const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);

      return res.status(200).json({
        success: true,
        items,
        totalCount,
        totalAmount,
      });
    } catch (err: any) {
      return res.status(500).json({ success: false, error: err.message || 'Error al actualizar cantidad' });
    }
  }

  // DELETE Remove Item or Clear Cart
  if (req.method === 'DELETE') {
    try {
      const { userId, itemId, clear } = req.query;
      if (!userId || typeof userId !== 'string') {
        return res.status(400).json({ success: false, error: 'Se requiere userId' });
      }

      if (clear === 'true') {
        await CartRepository.clearCart(userId);
        return res.status(200).json({ success: true, message: 'Cesta vaciada', items: [], totalCount: 0, totalAmount: 0 });
      }

      if (itemId && typeof itemId === 'string') {
        await CartRepository.removeItem(userId, itemId);
        const items = await CartRepository.getCartForUser(userId);
        const totalAmount = Math.round(items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0) * 100) / 100;
        const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);

        return res.status(200).json({
          success: true,
          message: 'Producto eliminado de la cesta',
          items,
          totalCount,
          totalAmount,
        });
      }

      return res.status(400).json({ success: false, error: 'Especifique itemId o clear=true' });
    } catch (err: any) {
      return res.status(500).json({ success: false, error: err.message || 'Error al eliminar de la cesta' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
