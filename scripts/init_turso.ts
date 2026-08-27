import 'dotenv/config';
import { getTursoClient, initTursoSchema } from '../src/services/db/tursoClient';

async function main() {
  console.log('🚀 Iniciando configuración de base de datos Turso...');
  
  const client = getTursoClient();
  const dbUrl = process.env.TURSO_DATABASE_URL || 'file:local.db';
  console.log(`📡 Conectando a: ${dbUrl.startsWith('libsql://') ? dbUrl : 'Base de datos SQLite local (file:local.db)'}`);

  try {
    // 1. Inicializar esquema de tablas e índices
    await initTursoSchema(client);
    console.log('✅ Esquema e índices creados correctamente en Turso.');

    // 2. Verificar existencia de la tabla
    const tables = await client.execute(`
      SELECT name FROM sqlite_master WHERE type='table' AND name='scraped_product_media';
    `);

    if (tables.rows.length > 0) {
      console.log('✅ Tabla "scraped_product_media" verificada y lista para su uso.');
      
      const countRes = await client.execute(`SELECT COUNT(*) as count FROM scraped_product_media;`);
      console.log(`📊 Registros actuales en la base de datos: ${countRes.rows[0].count}`);
    } else {
      console.error('❌ Error: La tabla no se pudo verificar.');
    }
  } catch (error: any) {
    console.error('❌ Error al inicializar Turso:', error.message);
    process.exit(1);
  }
}

main();
