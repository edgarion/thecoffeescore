/**
 * Sitemap Generator for The Coffee Score
 * Generates public/sitemap.xml from the catalog, blog articles, guides, and static routes.
 * Run: npx tsx scripts/generate_sitemap.ts
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// We can't directly import .tsx catalog files, so we'll dynamically require
// the data via a simple pattern scan approach
const SITE_URL = 'https://thecoffeescore.com';
const TODAY = new Date().toISOString().split('T')[0];

interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

async function main() {
  const entries: SitemapEntry[] = [];

  // 1. Static pages
  const staticPages: { path: string; priority: string; changefreq: string }[] = [
    { path: '/', priority: '1.0', changefreq: 'daily' },
    { path: '/maquinas', priority: '0.9', changefreq: 'weekly' },
    { path: '/molinos', priority: '0.9', changefreq: 'weekly' },
    { path: '/accesorios', priority: '0.9', changefreq: 'weekly' },
    { path: '/cafe', priority: '0.9', changefreq: 'weekly' },
    { path: '/comparador', priority: '0.8', changefreq: 'weekly' },
    { path: '/guias', priority: '0.8', changefreq: 'weekly' },
    { path: '/blog', priority: '0.8', changefreq: 'daily' },
    { path: '/ofertas', priority: '0.7', changefreq: 'daily' },
    { path: '/recetas', priority: '0.7', changefreq: 'weekly' },
    { path: '/configurador', priority: '0.7', changefreq: 'monthly' },
    { path: '/indice-global', priority: '0.6', changefreq: 'monthly' },
    { path: '/b2b', priority: '0.5', changefreq: 'monthly' },
  ];

  for (const page of staticPages) {
    entries.push({
      loc: `${SITE_URL}${page.path}`,
      lastmod: TODAY,
      changefreq: page.changefreq,
      priority: page.priority,
    });
  }

  // 2. Extract product slugs from catalog.ts
  const catalogPath = path.resolve(__dirname, '../src/data/catalog.ts');
  const catalogContent = fs.readFileSync(catalogPath, 'utf-8');

  // Extract product slugs via regex
  const slugRegex = /slug:\s*['"`]([^'"`]+)['"`]/g;
  let match;
  const productSlugs = new Set<string>();
  while ((match = slugRegex.exec(catalogContent)) !== null) {
    productSlugs.add(match[1]);
  }

  for (const slug of productSlugs) {
    entries.push({
      loc: `${SITE_URL}/producto/${escapeXml(slug)}`,
      lastmod: TODAY,
      changefreq: 'weekly',
      priority: '0.7',
    });
  }

  // 3. Extract blog article slugs
  const blogPath = path.resolve(__dirname, '../src/data/blogArticles.ts');
  if (fs.existsSync(blogPath)) {
    const blogContent = fs.readFileSync(blogPath, 'utf-8');
    const blogSlugRegex = /slug:\s*['"`]([^'"`]+)['"`]/g;
    const blogSlugs = new Set<string>();
    while ((match = blogSlugRegex.exec(blogContent)) !== null) {
      blogSlugs.add(match[1]);
    }
    for (const slug of blogSlugs) {
      entries.push({
        loc: `${SITE_URL}/blog/${escapeXml(slug)}`,
        lastmod: TODAY,
        changefreq: 'weekly',
        priority: '0.6',
      });
    }
  }

  // 4. Extract guide slugs from catalog.ts (BUYING_GUIDES)
  const guideSlugRegex = /slug:\s*['"`]([^'"`]+)['"`]/g;
  // Look for guides in the catalog content after BUYING_GUIDES marker
  const guidesSection = catalogContent.split('BUYING_GUIDES')[1] || '';
  while ((match = guideSlugRegex.exec(guidesSection)) !== null) {
    entries.push({
      loc: `${SITE_URL}/guia/${escapeXml(match[1])}`,
      lastmod: TODAY,
      changefreq: 'monthly',
      priority: '0.6',
    });
  }

  // 5. Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${entries
  .map(
    (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf-8');

  console.log(`✅ Sitemap generado con ${entries.length} URLs → ${outputPath}`);
  console.log(`   - Páginas estáticas: ${staticPages.length}`);
  console.log(`   - Productos: ${productSlugs.size}`);
  console.log(`   - Blog: ${entries.filter(e => e.loc.includes('/blog/')).length}`);
  console.log(`   - Guías: ${entries.filter(e => e.loc.includes('/guia/')).length}`);
}

main().catch(console.error);
