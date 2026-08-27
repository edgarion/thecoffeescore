#!/usr/bin/env tsx
/**
 * ═══════════════════════════════════════════════════════════════
 * THE COFFEE SCORE — AGENTE DE AUDITORÍA INTEGRAL DEL CATÁLOGO
 * ═══════════════════════════════════════════════════════════════
 * Importa directamente el catálogo TypeScript y verifica:
 *  ✓ Categoría correcta (cafe/maquinas/molinos/accesorios)
 *  ✓ Subcategoría válida para accesorios
 *  ✓ Campos obligatorios (id, name, brand, price, image, stores[0].url)
 *  ✓ Sin duplicados de id/slug
 *  ✓ Productos correctamente clasificados por keywords
 */

import { PRODUCTS } from '../src/data/catalog.ts';

const VALID_CATEGORIES = ['cafe', 'maquinas', 'molinos', 'accesorios'];

const VALID_SUBCATS_ACCESORIOS = [
  'Lifestyle',
  'Botellas & Batch',
  'Medidores & Básculas',
  'Jarras & Servidores',
  'Herramientas de barista',
];

// Sanity checks per category
const IS_GRINDER = /grinder|molino|molinillo|burr|c3\b|c5\b|c40\b|k6\b|chestnut|encore|niche|comandante|timemore|baratza|eureka|mignon|ode\s*brew|opus\s*conical|ceado|breville.*grind|pico.*grind|smart.*grind|mini\s*slim|easy\s*mode/i;
const NOT_GRINDER = /kit\b|upgrade|case\b|bag\b|filter\b|paper\b|screen\b|tamper\b|portafilter\b|basket\b|brush\b|cleaner\b/i;

const IS_MACHINE = /espresso\s*machine|coffee\s*maker|coffee\s*brewer|aeropress|moka|french\s*press|espro\b|moccamaster|linea\b|la\s*marzocco|gaggia|rocket|lelit|bezzera|jura\s*(e|x|s|z)\d|superautomat|semiautom|aiden\s*precision|alessi.*stovetop|cafetière/i;
const NOT_MACHINE_STRICT = /\bfilter\s*paper\b|\bcleaning\s*tablet\b|\bbrush\b|\bdescal/i;

const NOT_COFFEE = /\bt-shirt\b|hoodie|tote\s*bag|camiseta|gorra|bandana|cotton\s*bag|sticker|poster|bag\s*clip|\bscale\b|b[aá]scula|\bkettle\b|hervidor|tamper|grinder|molinillo|v60\s*(kit|drip)|aeropress|chemex\s*(filter|square)|cold\s*brew(er)?\s*(?!coffee\b)|subscription|gift\s*card|examen|certificado|matcha|chai(?!\s*bag)|\blatte\s*art\b|whisk|upgrade\s*kit|bottomless\s*kit|carrying\s*case|calibration\s*weight|bean\s*hopper|brew\s*stand|coaster/i;

interface Issue { field: string; message: string }

const issues: Array<{ id: string; name: string; brand: string; category: string; issues: Issue[] }> = [];
const seenIds = new Map<string, string>();
const seenSlugs = new Map<string, string>();
const stats: Record<string, number> = {};
const subStats: Record<string, number> = {};

for (const p of PRODUCTS) {
  const productIssues: Issue[] = [];
  const cat = (p as any).category as string;
  const sub = (p as any).subCategory as string;
  const stores = (p as any).stores as Array<{ url?: string; name?: string }> | undefined;
  const storeUrl = stores && stores.length > 0 ? stores[0].url : '';
  const slug = (p as any).slug as string;

  // Count
  stats[cat] = (stats[cat] || 0) + 1;
  if (cat === 'accesorios' && sub) {
    subStats[sub] = (subStats[sub] || 0) + 1;
  }

  // 1. Required fields
  if (!p.id)         productIssues.push({ field: 'id', message: 'ID vacío' });
  if (!p.name)       productIssues.push({ field: 'name', message: 'Nombre vacío' });
  if (!p.brand)      productIssues.push({ field: 'brand', message: 'Marca vacía' });
  if (!cat)          productIssues.push({ field: 'category', message: 'Categoría vacía' });
  if (!p.image)      productIssues.push({ field: 'image', message: 'Imagen vacía' });
  if (!storeUrl)     productIssues.push({ field: 'storeUrl', message: 'Sin URL de tienda' });
  if (!p.price || p.price <= 0) productIssues.push({ field: 'price', message: `Precio inválido: ${p.price}` });

  // 2. Valid category
  if (cat && !VALID_CATEGORIES.includes(cat)) {
    productIssues.push({ field: 'category', message: `Categoría desconocida: "${cat}"` });
  }

  // 3. Duplicates
  if (p.id) {
    if (seenIds.has(p.id)) {
      productIssues.push({ field: 'id', message: `ID duplicado (también: "${seenIds.get(p.id)}")` });
    } else {
      seenIds.set(p.id, p.name);
    }
  }
  if (slug) {
    if (seenSlugs.has(slug)) {
      productIssues.push({ field: 'slug', message: `Slug duplicado` });
    } else {
      seenSlugs.set(slug, p.name);
    }
  }

  // 4. Category sanity
  if (cat === 'molinos' && NOT_GRINDER.test(p.name) && !IS_GRINDER.test(p.name)) {
    productIssues.push({ field: 'category', message: `En molinos pero no parece molinillo: "${p.name}"` });
  }
  if (cat === 'cafe' && NOT_COFFEE.test(p.name)) {
    productIssues.push({ field: 'category', message: `En cafe pero no parece café: "${p.name}"` });
  }
  if (cat === 'maquinas' && NOT_MACHINE_STRICT.test(p.name)) {
    productIssues.push({ field: 'category', message: `En maquinas pero parece un accesorio: "${p.name}"` });
  }

  // 5. Subcategory for accesorios
  if (cat === 'accesorios') {
    if (!sub) {
      productIssues.push({ field: 'subCategory', message: 'Sin subcategoría (accesorios requiere una de las 5)' });
    } else if (!VALID_SUBCATS_ACCESORIOS.includes(sub)) {
      productIssues.push({ field: 'subCategory', message: `Subcategoría inválida: "${sub}"` });
    }
  }

  // 6. Image URL sanity
  if (p.image && !p.image.startsWith('http') && !p.image.startsWith('/')) {
    productIssues.push({ field: 'image', message: `URL de imagen sospechosa: "${p.image.substring(0, 60)}"` });
  }

  if (productIssues.length > 0) {
    issues.push({ id: p.id, name: p.name, brand: p.brand, category: cat, issues: productIssues });
  }
}

// ─── Report ───────────────────────────────────────────────────────────────────

console.log('\n════════════════════════════════════════════════════════════════════');
console.log('   THE COFFEE SCORE — INFORME DE AUDITORÍA INTEGRAL');
console.log('════════════════════════════════════════════════════════════════════\n');
console.log(`📦 Total productos analizados: ${PRODUCTS.length}`);
console.log('\n── DISTRIBUCIÓN POR CATEGORÍA ───────────────────────────────');
for (const [cat, n] of Object.entries(stats).sort((a,b) => b[1]-a[1])) {
  console.log(`   ${cat.padEnd(14)} ${String(n).padStart(4)} productos`);
}
console.log('\n── SUBCATEGORÍAS DE ACCESORIOS ──────────────────────────────');
for (const [sub, n] of Object.entries(subStats).sort((a,b) => b[1]-a[1])) {
  console.log(`   ${sub.padEnd(28)} ${String(n).padStart(4)}`);
}

const totalProblemsCount = issues.reduce((acc, i) => acc + i.issues.length, 0);
console.log(`\n── RESULTADO ────────────────────────────────────────────────`);

if (issues.length === 0) {
  console.log('   ✅ TODOS LOS PRODUCTOS PASARON — 0 problemas encontrados\n');
  process.exit(0);
}

// Summarize by issue type
const byType: Record<string, number> = {};
for (const { issues: iss } of issues) {
  for (const { message } of iss) {
    const key = message.replace(/"[^"]+"/g, '«…»');
    byType[key] = (byType[key] || 0) + 1;
  }
}

console.log(`   ⚠️  ${issues.length} productos con ${totalProblemsCount} problemas\n`);
console.log('── RESUMEN POR TIPO ─────────────────────────────────────────');
for (const [type, count] of Object.entries(byType).sort((a,b) => b[1]-a[1])) {
  console.log(`   ${String(count).padStart(4)}x  ${type}`);
}

// Only show non-storeUrl issues in detail (storeUrl issues need to be checked differently)
const storeUrlCount = byType['Sin URL de tienda'] || 0;
const otherIssues = issues.filter(i => i.issues.some(e => e.message !== 'Sin URL de tienda'));

if (otherIssues.length > 0) {
  console.log('\n── PROBLEMAS DE CATEGORÍA/ESTRUCTURA ───────────────────────');
  for (const { id, name, brand, category, issues: iss } of otherIssues) {
    const nonUrlIssues = iss.filter(e => e.message !== 'Sin URL de tienda');
    if (nonUrlIssues.length === 0) continue;
    console.log(`\n   [${category}] ${brand} — ${name.substring(0, 55)}`);
    for (const { field, message } of nonUrlIssues) {
      console.log(`     ❌ [${field}] ${message}`);
    }
  }
}

if (storeUrlCount > 0) {
  const storeUrlProds = issues.filter(i => i.issues.some(e => e.message === 'Sin URL de tienda'));
  console.log(`\n── PRODUCTOS SIN URL DE TIENDA (${storeUrlCount}) ──────────────────`);
  for (const { id, name, brand, category } of storeUrlProds) {
    console.log(`   [${category}] ${brand} — ${name.substring(0, 50)}`);
  }
}

console.log('\n════════════════════════════════════════════════════════════════════\n');
process.exit(issues.length > 0 ? 1 : 0);
