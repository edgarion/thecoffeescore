import 'dotenv/config';
import { initTursoSchema } from '../src/services/db/tursoClient';
import { ProductMediaRepository } from '../src/services/db/productMediaRepository';
import { CoffeeScraperService } from '../src/services/scraper/CoffeeScraperService';

async function main() {
  console.log('🔄 Iniciando sincronización de imágenes, descripciones y enlaces a Turso...');

  try {
    // 1. Asegurar esquema
    await initTursoSchema();

    // 2. Sincronizar catálogo principal
    console.log('📦 Sincronizando productos del catálogo con sus enlaces de compra...');
    const catalogCount = await CoffeeScraperService.syncCatalogToTurso();
    console.log(`✅ ${catalogCount} registros del catálogo guardados/actualizados.`);

    // 3. Sincronizar tostadores en vivo
    console.log('☕ Scrapeando tostadores de especialidad (Nomad, Syra, Right Side, Three Marks)...');
    const roasterCount = await CoffeeScraperService.syncLiveRoastersToTurso();
    console.log(`✅ ${roasterCount} productos de tostadores guardados en Turso.`);

    // 4. Conteo total
    const { total, items } = await ProductMediaRepository.listAllMedia({ limit: 5 });
    console.log(`\n🎉 Sincronización completada con éxito! Total de registros en Turso: ${total}`);
    console.log('Muestra de registros guardados:');
    items.forEach((item, i) => {
      console.log(`  [${i + 1}] [${item.sourceStore || 'N/A'}] ${item.title}`);
      console.log(`      🖼️ Imagen: ${item.imageUrl.substring(0, 70)}...`);
      console.log(`      📝 Descripción: ${item.description.substring(0, 80)}...`);
      console.log(`      🔗 URL: ${item.purchaseUrl.substring(0, 70)}...`);
    });
  } catch (error: any) {
    console.error('❌ Error durante la sincronización:', error);
    process.exit(1);
  }
}

main();
