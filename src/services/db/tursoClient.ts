import { createClient, Client } from '@libsql/client';

let cachedClient: Client | null = null;

function getEnv(key: string, fallback: string = ''): string {

  try {
    if (typeof process !== 'undefined' && process.env && process.env[key]) {
      return process.env[key] as string;
    }
  } catch {}
  try {
    if (typeof import.meta !== 'undefined' && (import.meta as any).env && (import.meta as any).env[key]) {
      return (import.meta as any).env[key];
    }
  } catch {}
  return fallback;
}

/**
 * Returns a configured Turso/LibSQL Client instance.
 * Automatically falls back to a local SQLite database file ('file:local.db')
 * if remote Turso environment variables are not yet specified.
 */
export function getTursoClient(): Client {
  if (cachedClient) {
    return cachedClient;
  }

  const defaultRemoteUrl = 'libsql://thecoffeescore-thecoffeescore.aws-eu-west-1.turso.io';
  const url = getEnv('TURSO_DATABASE_URL', defaultRemoteUrl);
  const authToken = getEnv('TURSO_AUTH_TOKEN', 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3ODc4MzYwOTYsImlkIjoiMDFhMDQzNTUtYTIwMS03ZGI5LWI1OWEtN2JhMDI5NDEwZGJjIiwia2lkIjoibFRUai1ndXhNWTdQZ2I1YVZobGdNMi1MZ3lCdjZScDVHQnZYUWJ4MUVWUSIsInJpZCI6Ijc2M2MyYWU0LWU0ODctNDU3Mi05Mzc4LWJkNjMyYTdlOTkwZCJ9.Mjn9ea79E0dnNOxCsW-fPuObJCjjGuTbJ9q5_isbQ3g5qJXdrhXzV_riR4WGwtQFoDaqMy5Ao63Hl5VMM19qBw') || undefined;

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

  // Create table for registered users
  await db.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      name TEXT NOT NULL,
      avatar TEXT,
      preferences TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  await db.execute(`
    CREATE INDEX IF NOT EXISTS idx_users_email 
    ON users(email);
  `);

  // Create table for cart items (supports both authenticated users and guest sessions)
  await db.execute(`
    CREATE TABLE IF NOT EXISTS cart_items (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      product_id TEXT NOT NULL,
      product_name TEXT NOT NULL,
      product_image TEXT,
      selected_store TEXT,
      store_url TEXT,
      unit_price REAL NOT NULL,
      quantity INTEGER NOT NULL DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  await db.execute(`
    CREATE INDEX IF NOT EXISTS idx_cart_user_id 
    ON cart_items(user_id);
  `);

  await db.execute(`
    CREATE INDEX IF NOT EXISTS idx_cart_user_product 
    ON cart_items(user_id, product_id, selected_store);
  `);
}

