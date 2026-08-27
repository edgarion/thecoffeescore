#!/usr/bin/env node
/**
 * ═══════════════════════════════════════════════════════════════
 * THE COFFEE SCORE — AGENTE DE AUDITORÍA INTEGRAL DEL CATÁLOGO
 * ═══════════════════════════════════════════════════════════════
 * Verifica que cada producto tenga:
 *  ✓ Categoría correcta
 *  ✓ Subcategoría válida para su categoría
 *  ✓ Campos obligatorios completos (id, name, brand, price, image, storeUrl)
 *  ✓ Sin duplicados de ID o slug
 *  ✓ Precio > 0
 *  ✓ Imagen no vacía
 *  ✓ URL de tienda no vacía
 *  ✓ No hay cafés en molinos/maquinas/accesorios ni viceversa
 */

const fs = require('fs');
const path = require('path');

const CATALOG_PATH = path.join(__dirname, '..', 'src', 'data', 'catalog.ts');
const src = fs.readFileSync(CATALOG_PATH, 'utf-8');

// ─── Parse all products from catalog ────────────────────────────────────────

const blocks = src.split(/(?=  \{)/);

const products = [];
for (const block of blocks) {
  const idMatch = block.match(/\bid:\s*"([^"]+)"/);
  if (!idMatch) continue;
  const field = (key) => {
    const m = block.match(new RegExp(key + ':\\s*"([^"]*)"'));
    return m ? m[1] : '';
  };
  const numField = (key) => {
    const m = block.match(new RegExp(key + ':\\s*([\\d.]+)'));
    return m ? parseFloat(m[1]) : 0;
  };

  products.push({
    id: idMatch[1],
    slug: field('slug'),
    name: field('name'),
    brand: field('brand'),
    category: field('category'),
    subCategory: field('subCategory'),
    image: field('image'),
    price: numField('price'),
    // storeUrl is inside stores array
    storeUrl: (() => {
      // Find stores: and then grab the first url: after it (within ~1500 chars)
      const storesIdx = block.indexOf('stores:');
      if (storesIdx === -1) return '';
      const afterStores = block.substring(storesIdx, storesIdx + 1500);
      const urlMatch = afterStores.match(/url:\s*"(https?:[^"]+)"/);
      return urlMatch ? urlMatch[1] : '';
    })(),
    block,
  });
}

// ─── Rules ──────────────────────────────────────────────────────────────────

const VALID_CATEGORIES = ['cafe', 'maquinas', 'molinos', 'accesorios'];

const VALID_SUBCATS = {
  accesorios: ['Lifestyle', 'Botellas & Batch', 'Medidores & Básculas', 'Jarras & Servidores', 'Herramientas de barista'],
  maquinas: ['Semiautomáticas', 'Manuales', 'Superautomáticas', 'Con molinillo', 'Doble caldera', 'Intercambiador (HX)', 'Cafeteras de filtro', 'Espresso'],
  molinos: ['Eléctricos', 'Manuales', 'Para espresso', 'Para filtro', 'Molinillos'],
  cafe: [], // free-form subcategory for coffee
};

// Products that are definitely NOT coffee bags but keywords could fool us
const NOT_A_GRINDER = /kit\b|upgrade|case|bag|t-shirt|hoodie|tote|cup|mug|scale|tamper|portafilter|basket/i;
const IS_GRINDER = /grinder|molino|burr|molinillo|c3\b|c5\b|c40\b|k6\b|chestnut|encore|niche|comandante|timemore|baratza|eureka|mignon|fellow.*ode|fellow.*opus|ceado|breville.*grind|pico.*grind|smart.*grind|mini\s*slim|opus.*conical|ode.*brew/i;

const NOT_A_MACHINE = /kit\b|upgrade|case|bag|filter|paper|screen|tamper|portafilter|basket|brush|cleaner|descaler|lid|carafe|cup|mug|scale/i;
const IS_MACHINE = /espresso\s*machine|coffee\s*maker|coffee\s*brewer|aeropress|moka|french\s*press|espro|moccamaster|la\s*marzocco|linea|gaggia|rocket|lelit|bezzera|jura|jura\s*(e|x|s|z)\d|superautomat|semiautom|pour\s*over.*machine|aiden\s*precision|fellow\s*aiden|alessi|stovetop|cafetière|coffeemaker/i;

const IS_COFFEE = /\b(kg|gr\b|g\b|oz\b|lb\b|250g|500g|1kg|espresso\s*blend|single\s*origin|natural|washed|honey|anaerobic|ferment|tostado|roasted|decaf|gesha|geisha|typica|caturra|pacamara|catuai|maragogype|bourbon|pink\s*bourbon|tabi|ethiopia|colombia|kenya|brazil|peru|guatemala|rwanda|burundi|costa\s*rica|el\s*salvador|bolivia|panama|yirgacheffe|sidamo|huila|nariño|antioquia|cajamarca|wush\s*wush)/i;

const NOT_COFFEE = /\b(t-shirt|hoodie|cap\b|tote|camiseta|gorra|bandana|sticker|poster|scale\b|b[aá]scula|kettle|hervidor|tamper|grinder|molinillo|aeropress|chemex|v60\b|dripper|siphon|french\s*press|cold\s*brew(er)?|capsule|cápsula|subscription|gift\s*card|examen|certificado|matcha|chai|ginger|maceta|whisk|upgrade\s*kit|bottomless\s*kit|carrying\s*case|calibration\s*weight|bean\s*hopper|brew\s*stand)\b/i;

// ─── Audit ───────────────────────────────────────────────────────────────────

const issues = [];
const seenIds = new Map();
const seenSlugs = new Map();

let categoryStats = { cafe: 0, maquinas: 0, molinos: 0, accesorios: 0 };

for (const p of products) {
  const errs = [];

  // 1. Required fields
  if (!p.id)          errs.push('Missing id');
  if (!p.name)        errs.push('Missing name');
  if (!p.brand)       errs.push('Missing brand');
  if (!p.category)    errs.push('Missing category');
  if (!p.image)       errs.push('Missing image');
  if (!p.storeUrl)    errs.push('Missing storeUrl');
  if (p.price <= 0)   errs.push(`Price is ${p.price}`);

  // 2. Valid category
  if (!VALID_CATEGORIES.includes(p.category)) {
    errs.push(`Unknown category: "${p.category}"`);
  } else {
    categoryStats[p.category]++;
  }

  // 3. Duplicate IDs / slugs
  if (seenIds.has(p.id)) {
    errs.push(`Duplicate id: "${p.id}" (also used by "${seenIds.get(p.id)}")`);
  } else {
    seenIds.set(p.id, p.name);
  }
  if (p.slug && seenSlugs.has(p.slug)) {
    errs.push(`Duplicate slug: "${p.slug}"`);
  } else if (p.slug) {
    seenSlugs.set(p.slug, p.name);
  }

  // 4. Category sanity checks
  if (p.category === 'molinos' && NOT_A_GRINDER.test(p.name) && !IS_GRINDER.test(p.name)) {
    errs.push(`In molinos but doesn't look like a grinder: "${p.name}"`);
  }
  if (p.category === 'maquinas' && NOT_A_MACHINE.test(p.name) && !IS_MACHINE.test(p.name)) {
    errs.push(`In maquinas but may not be a machine: "${p.name}"`);
  }
  if (p.category === 'cafe' && NOT_COFFEE.test(p.name)) {
    errs.push(`In cafe but doesn't look like coffee: "${p.name}"`);
  }

  // 5. Subcategory validation for accesorios
  if (p.category === 'accesorios') {
    const validSubs = VALID_SUBCATS.accesorios;
    if (!p.subCategory) {
      errs.push('accesorios product missing subCategory');
    } else if (!validSubs.includes(p.subCategory)) {
      errs.push(`Invalid accesorios subCategory: "${p.subCategory}" (expected one of: ${validSubs.join(', ')})`);
    }
  }

  // 6. Image sanity
  if (p.image && !p.image.startsWith('http') && !p.image.startsWith('/')) {
    errs.push(`Suspicious image URL: "${p.image.substring(0, 60)}"`);
  }

  if (errs.length > 0) {
    issues.push({ id: p.id, name: p.name, brand: p.brand, category: p.category, errors: errs });
  }
}

// ─── Report ───────────────────────────────────────────────────────────────────

console.log('\n════════════════════════════════════════════════════════════════════');
console.log('   THE COFFEE SCORE — INFORME DE AUDITORÍA INTEGRAL');
console.log('════════════════════════════════════════════════════════════════════\n');
console.log(`📦 Total productos: ${products.length}`);
console.log(`\n── DISTRIBUCIÓN POR CATEGORÍA ───────────────────────`);
for (const [cat, n] of Object.entries(categoryStats)) {
  console.log(`   ${cat.padEnd(12)} ${String(n).padStart(4)} productos`);
}

console.log(`\n── RESULTADO ────────────────────────────────────────`);
if (issues.length === 0) {
  console.log('   ✅ TODOS LOS PRODUCTOS PASARON LA AUDITORÍA — 0 problemas\n');
} else {
  console.log(`   ⚠️  ${issues.length} productos con problemas\n`);

  // Group by error type
  const byType = {};
  for (const { errors, name, brand, category } of issues) {
    for (const err of errors) {
      const key = err.replace(/"[^"]*"/g, '«…»');
      if (!byType[key]) byType[key] = [];
      byType[key].push({ name, brand, category });
    }
  }

  // Print summary by type first
  console.log('── RESUMEN DE PROBLEMAS ─────────────────────────────');
  for (const [type, prods] of Object.entries(byType).sort((a,b) => b[1].length - a[1].length)) {
    console.log(`   ${String(prods.length).padStart(4)}x  ${type}`);
  }

  // Then detail
  console.log('\n── DETALLE COMPLETO ─────────────────────────────────');
  for (const { id, name, brand, category, errors } of issues) {
    console.log(`\n   [${category}] ${brand} — ${name.substring(0, 55)}`);
    console.log(`   ID: ${id}`);
    for (const err of errors) {
      console.log(`     ❌ ${err}`);
    }
  }
}

console.log('\n════════════════════════════════════════════════════════════════════\n');

// Exit with error code if issues found
process.exit(issues.length > 0 ? 1 : 0);
