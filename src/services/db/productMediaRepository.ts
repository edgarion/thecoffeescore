import { getTursoClient } from './tursoClient';
import { InStatement } from '@libsql/client';

export interface ScrapedProductMedia {
  id: string;
  productId?: string | null;
  purchaseUrl: string;
  sourceStore?: string | null;
  title: string;
  description: string;
  imageUrl: string;
  galleryImages?: string[];
  price?: number | null;
  currency?: string;
  inStock?: boolean;
  rawMetadata?: Record<string, any> | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface ListMediaFilters {
  store?: string;
  productId?: string;
  limit?: number;
  offset?: number;
  search?: string;
}

export class ProductMediaRepository {
  /**
   * Helper to map a raw database row to a typed ScrapedProductMedia entity
   */
  private static mapRowToEntity(row: any): ScrapedProductMedia {
    let galleryImages: string[] = [];
    if (row.gallery_images) {
      try {
        galleryImages = JSON.parse(row.gallery_images as string);
      } catch {
        galleryImages = [];
      }
    }

    let rawMetadata: Record<string, any> | null = null;
    if (row.raw_metadata) {
      try {
        rawMetadata = JSON.parse(row.raw_metadata as string);
      } catch {
        rawMetadata = null;
      }
    }

    return {
      id: row.id as string,
      productId: (row.product_id as string) || null,
      purchaseUrl: row.purchase_url as string,
      sourceStore: (row.source_store as string) || null,
      title: (row.title as string) || '',
      description: (row.description as string) || '',
      imageUrl: (row.image_url as string) || '',
      galleryImages,
      price: row.price !== null && row.price !== undefined ? Number(row.price) : null,
      currency: (row.currency as string) || 'EUR',
      inStock: Boolean(row.in_stock),
      rawMetadata,
      createdAt: row.created_at as string,
      updatedAt: row.updated_at as string,
    };
  }

  /**
   * Inserts or updates a scraped product media entry based on purchase_url / id
   */
  public static async upsertMedia(item: ScrapedProductMedia): Promise<ScrapedProductMedia> {
    const db = getTursoClient();
    const id = item.id || `media_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    const galleryJson = JSON.stringify(item.galleryImages || []);
    const metadataJson = item.rawMetadata ? JSON.stringify(item.rawMetadata) : null;
    const inStockInt = item.inStock === false ? 0 : 1;
    const now = new Date().toISOString();

    await db.execute({
      sql: `
        INSERT OR REPLACE INTO scraped_product_media (
          id, product_id, purchase_url, source_store, title, description,
          image_url, gallery_images, price, currency, in_stock, raw_metadata,
          created_at, updated_at
        ) VALUES (
          ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
        );
      `,
      args: [
        id,
        item.productId || null,
        item.purchaseUrl,
        item.sourceStore || null,
        item.title || '',
        item.description || '',
        item.imageUrl || '',
        galleryJson,
        item.price !== undefined ? item.price : null,
        item.currency || 'EUR',
        inStockInt,
        metadataJson,
        item.createdAt || now,
        now,
      ],
    });

    const saved = await this.getMediaByUrl(item.purchaseUrl);
    return saved || item;
  }

  /**
   * Batch upsert multiple media records inside transactions (chunked to 50 items for network reliability)
   */
  public static async batchUpsertMedia(items: ScrapedProductMedia[], chunkSize: number = 50): Promise<number> {
    if (items.length === 0) return 0;
    const db = getTursoClient();
    const now = new Date().toISOString();

    const statements: InStatement[] = items.map(item => {
      const id = item.id || `media_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
      const galleryJson = JSON.stringify(item.galleryImages || []);
      const metadataJson = item.rawMetadata ? JSON.stringify(item.rawMetadata) : null;
      const inStockInt = item.inStock === false ? 0 : 1;

      return {
        sql: `
          INSERT OR REPLACE INTO scraped_product_media (
            id, product_id, purchase_url, source_store, title, description,
            image_url, gallery_images, price, currency, in_stock, raw_metadata,
            created_at, updated_at
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `,
        args: [
          id,
          item.productId || null,
          item.purchaseUrl,
          item.sourceStore || null,
          item.title || '',
          item.description || '',
          item.imageUrl || '',
          galleryJson,
          item.price !== undefined ? item.price : null,
          item.currency || 'EUR',
          inStockInt,
          metadataJson,
          item.createdAt || now,
          now,
        ],
      };
    });

    // Execute in chunks
    for (let i = 0; i < statements.length; i += chunkSize) {
      const chunk = statements.slice(i, i + chunkSize);
      await db.batch(chunk, 'write');
    }

    return items.length;
  }

  /**
   * Retrieves a single entry by its unique purchase URL
   */
  public static async getMediaByUrl(url: string): Promise<ScrapedProductMedia | null> {
    const db = getTursoClient();
    const result = await db.execute({
      sql: `SELECT * FROM scraped_product_media WHERE purchase_url = ? LIMIT 1;`,
      args: [url],
    });

    if (result.rows.length === 0) return null;
    return this.mapRowToEntity(result.rows[0]);
  }

  /**
   * Retrieves all media entries associated with a specific catalog product ID
   */
  public static async getMediaByProductId(productId: string): Promise<ScrapedProductMedia[]> {
    const db = getTursoClient();
    const result = await db.execute({
      sql: `SELECT * FROM scraped_product_media WHERE product_id = ? ORDER BY updated_at DESC;`,
      args: [productId],
    });

    return result.rows.map(row => this.mapRowToEntity(row));
  }

  /**
   * Lists scraped media with pagination and filters
   */
  public static async listAllMedia(filters: ListMediaFilters = {}): Promise<{ total: number; items: ScrapedProductMedia[] }> {
    const db = getTursoClient();
    const conditions: string[] = [];
    const args: any[] = [];

    if (filters.store) {
      conditions.push(`source_store LIKE ?`);
      args.push(`%${filters.store}%`);
    }

    if (filters.productId) {
      conditions.push(`product_id = ?`);
      args.push(filters.productId);
    }

    if (filters.search) {
      conditions.push(`(title LIKE ? OR description LIKE ? OR purchase_url LIKE ?)`);
      const term = `%${filters.search}%`;
      args.push(term, term, term);
    }

    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

    // Count query
    const countResult = await db.execute({
      sql: `SELECT COUNT(*) as count FROM scraped_product_media ${whereClause};`,
      args,
    });
    const total = Number(countResult.rows[0]?.count || 0);

    // Items query
    const limit = filters.limit || 50;
    const offset = filters.offset || 0;
    const itemsResult = await db.execute({
      sql: `SELECT * FROM scraped_product_media ${whereClause} ORDER BY updated_at DESC LIMIT ? OFFSET ?;`,
      args: [...args, limit, offset],
    });

    const items = itemsResult.rows.map(row => this.mapRowToEntity(row));

    return { total, items };
  }

  /**
   * Deletes a scraped media entry by ID
   */
  public static async deleteMedia(id: string): Promise<boolean> {
    const db = getTursoClient();
    const result = await db.execute({
      sql: `DELETE FROM scraped_product_media WHERE id = ?;`,
      args: [id],
    });

    return (result.rowsAffected || 0) > 0;
  }
}
