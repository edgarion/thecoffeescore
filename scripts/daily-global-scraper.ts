import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CoffeeScraperService } from '../src/services/scraper/CoffeeScraperService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const REPORTS_DIR = path.resolve(ROOT_DIR, 'reports');

async function runDailyGlobalScraper() {
  console.log('======================================================');
  console.log('🌍 THE COFFEE SCORE · GLOBAL STORE SCRAPER & INDEXER');
  console.log(`🕒 Timestamp: ${new Date().toISOString()}`);
  console.log('======================================================\n');

  if (!fs.existsSync(REPORTS_DIR)) {
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
  }

  const startTime = Date.now();
  console.log('📡 Conectando con tiendas de especialidad y marcas de todo el mundo...');
  
  const scrapedProducts = await CoffeeScraperService.scrapeGlobalStores(10);
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);

  // Group by region and brand
  const byRegion: Record<string, typeof scrapedProducts> = {};
  for (const item of scrapedProducts) {
    if (!byRegion[item.region]) byRegion[item.region] = [];
    byRegion[item.region].push(item);
  }

  console.log(`\n🎉 Scraping completado en ${elapsed}s: ${scrapedProducts.length} productos indexados en vivo.`);

  // Write JSON report
  const reportPath = path.resolve(REPORTS_DIR, 'global-scraped-catalog.json');
  fs.writeFileSync(reportPath, JSON.stringify({
    timestamp: new Date().toISOString(),
    totalProducts: scrapedProducts.length,
    elapsedSeconds: parseFloat(elapsed),
    products: scrapedProducts,
  }, null, 2));

  // Write Markdown summary
  let md = `# Reporte Global de Scraping en Vivo — The Coffee Score\n\n`;
  md += `**Fecha**: ${new Date().toLocaleDateString('es-ES')} ${new Date().toLocaleTimeString('es-ES')}\n`;
  md += `**Total Productos Indexados**: ${scrapedProducts.length} productos en vivo\n`;
  md += `**Tiempo de Ejecución**: ${elapsed} segundos\n\n`;

  for (const [region, items] of Object.entries(byRegion)) {
    md += `## 🌐 Región: ${region} (${items.length} productos)\n\n`;
    md += `| Marca / Tienda | País | Producto | Precio | Stock | Imagen Oficial |\n`;
    md += `|---|---|---|---|---|---|\n`;
    for (const p of items) {
      md += `| **${p.brand}** | ${p.country} | [${p.title}](${p.storeUrl}) | ${p.price} ${p.currency} | ${p.inStock ? '🟢 En Stock' : '🔴 Agotado'} | [Ver Foto](${p.imageUrl}) |\n`;
    }
    md += `\n`;
  }

  const mdPath = path.resolve(REPORTS_DIR, 'global-scraper-summary.md');
  fs.writeFileSync(mdPath, md);

  console.log(`📄 Reporte JSON guardado en: ${reportPath}`);
  console.log(`📊 Resumen Markdown guardado en: ${mdPath}`);
  console.log('------------------------------------------------------\n');
}

runDailyGlobalScraper().catch(console.error);
