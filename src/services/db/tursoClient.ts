import { createClient, Client } from '@libsql/client';

let cachedClient: Client | null = null;

/**
 * Returns a configured Turso/LibSQL Client instance.
 * Automatically falls back to a local SQLite database file ('file:local.db')
 * if remote Turso environment variables are not yet specified.
 */
export function getTursoClient(): Client {
  if (cachedClient) {
    return cachedClient;
  }

  const url = process.env.TURSO_DATABASE_URL || (typeof import.meta !== 'undefined' && (import.meta as any).env?.TURSO_DATABASE_URL) || 'file:local.db';
  const authToken = process.env.TURSO_AUTH_TOKEN || (typeof import.meta !== 'undefined' && (import.meta as any).env?.TURSO_AUTH_TOKEN) || undefined;

  cachedClient = createClient({
    url,
    authToken,
  });

  return cachedClient;
}

/**
 * Initializes the required tables and indexes in Turso.
 */
export async function initTursoSchema(client?: Client): Promise<void> {
  const db = client || getTursoClient();

  // Create table for scraped product media & descriptions
  await db.execute(`
    CREATE TABLE IF NOT EXISTS scraped_product_media (
      id TEXT PRIMARY KEY,
      product_id TEXT,
      purchase_url TEXT UNIQUE NOT NULL,
      source_store TEXT,
      title TEXT,
      description TEXT,
      image_url TEXT,
      gallery_images TEXT,
      price REAL,
      currency TEXT DEFAULT 'EUR',
      in_stock INTEGER DEFAULT 1,
      raw_metadata TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Create search & lookup indexes
  await db.execute(`
    CREATE INDEX IF NOT EXISTS idx_scraped_media_url 
    ON scraped_product_media(purchase_url);
  `);

  await db.execute(`
    CREATE INDEX IF NOT EXISTS idx_scraped_media_product_id 
    ON scraped_product_media(product_id);
  `);

  await db.execute(`
    CREATE INDEX IF NOT EXISTS idx_scraped_media_store 
    ON scraped_product_media(source_store);
  `);
}
