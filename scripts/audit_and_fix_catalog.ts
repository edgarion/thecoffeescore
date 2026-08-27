#!/usr/bin/env tsx
/**
 * Catalog Audit & Fix Script v2
 * Smart category reclassification with priority-based keyword matching.
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename2 = fileURLToPath(import.meta.url);
const __dirname2 = path.dirname(__filename2);
const CATALOG_PATH = path.join(__dirname2, '..', 'src', 'data', 'catalog.ts');
const catalogSrc = fs.readFileSync(CATALOG_PATH, 'utf-8');

// ─── DEFINITIVE CATEGORY RULES ──────────────────────────────────────────────────
// These are STRONG signals that override brand-based guesses

// MUST be 'maquinas' — espresso machines, brewers, coffee makers
const MACHINE_PATTERNS = [
  /\bcafetera\b/i, /\bespresso\s*machine\b/i, /\bcoffee\s*maker\b/i,
  /\bbambino\b/i, /\bbarista\s*(express|touch|pro)\b/i, /\blinea\s*(mini|micra)\b/i,
  /\bgaggia\s*classic\b/i, /\bsilvia\b/i, /\bla\s*pavoni\b/i,
  /\bprofitec\b/i, /\brocket\s*(espresso|appartamento|giotto|mozzafiato)\b/i,
  /\bascaso\b/i, /\bmoccamaster\b/i, /\baeropress\b/i,
  /\bfrench\s*press\b/i, /\bchemex\b/i, /\bclever\s*dripper\b/i,
  /\bmoka\b/i, /\bbialetti\b/i, /\bv60\s*dripper\b/i, /\bsiphon\b/i,
  /\bflair\s*(58|49|classic|neo|pro|signature)\b/i,
  /\bdual\s*boiler\b/i, /\bsingle\s*boiler\b/i, /\bheat\s*exchanger\b/i,
  /\bluxe\s*brewer\b/i, /\baiden\b/i, /\bcold\s*brew\s*maker\b/i,
  /\bglenda\b/i, /\bvictoria\s*pl/i, /\bmara\s*x\b/i, /\bbianca\b/i,
  /\bde.?longhi\b/i, /\bphilips\s*\d/i,
  /\bspecialista\b/i,
];

// MUST be 'molinos' — coffee grinders
const GRINDER_PATTERNS = [
  /\bmolino\b/i, /\bmolinillo\b/i, /\bgrinder\b/i,
  /\bmignon\b/i, /\bniche\s*zero\b/i, /\bkingrinder\b/i,
  /\bcomandante\b/i, /\btimemore\s*(c2|c3|chestnut|slim)\b/i,
  /\bbaratza\b/i, /\bfellow\s*(ode|opus|shimmy)\b/i,
  /\bdf64\b/i, /\bmazzer\b/i, /\bmahlkoenig\b/i,
  /\blagom\b/i, /\b1zpresso\b/i, /\bjx-?pro\b/i, /\bc40\b/i,
  /\bgrinder\s*kit\b/i, /\bkm5\b/i,
];

// MUST be 'accesorios' — merchandise, tools, accessories, non-consumables
const ACCESSORY_PATTERNS = [
  /\bcamiseta\b/i, /\bt-?shirt\b/i, /\bshirt\b/i, /\bhoodie\b/i,
  /\btote\s*bag\b/i, /\btotebag\b/i, /\bcap\b/i, /\bgorra\b/i,
  /\bapron\b/i, /\bdelantal\b/i, /\bsticker\b/i, /\bpegatina\b/i,
  /\bposter\b/i, /\bgift\s*card\b/i, /\btarjeta\s*regalo\b/i,
  /\bcurso\b/i, /\bcourse\b/i, /\bworkshop\b/i, /\btaller\b/i,
  /\bclase\b/i, /\bbarista\s*(esencial|fundamental|intermedio|profesional|básico)\b/i,
  /\bbrew\s*(fundament|intermedio|profesional)\b/i,
  /\bmerch\b/i, /\bbanda\s*reflectante\b/i,
  /\ba\s*medida\b/i, // custom blending service
  /\bsuscripci[oó]n\b/i, /\bsubscription\b/i,
  /\bregalo\b/i, /\bgift\b/i,
];

// ACCESSORY EQUIPMENT — things sold by roasters that are clearly equipment accessories (not coffee)
const ACCESSORY_EQUIP_PATTERNS = [
  /\btamper\b/i, /\bdistribui?dor\b/i, /\bportafilter\b/i,
  /\bbasket\b/i, /\bpuck\s*screen\b/i, /\bdosing\s*(cup|ring)\b/i,
  /\bwdt\b/i, /\bneedle\b/i, /\bfunnel\b/i, /\bdosificador\b/i,
  /\bbalanza\b/i, /\bscale\b/i, /\bbáscula\b/i,
  /\bthermometer\b/i, /\btermómetro\b/i,
  /\bpitcher\b/i, /\bjarra\b/i, /\bmilk\s*jug\b/i,
  /\bknock\s*box\b/i, /\bcajón\s*posos\b/i,
  /\btaza\b/i, /\bcup\b/i, /\bmug\b/i, /\bglass\b/i, /\bvaso\b/i,
  /\bcarafe\b/i, /\bserver\b/i, /\bdecanter\b/i,
  /\bcleaning\b/i, /\blimpieza\b/i, /\bdetergent\b/i, /\bdescaler\b/i,
  /\bcepillo\b/i, /\bbrush\b/i, /\bcleaner\b/i,
  /\bgooseneck\b/i, /\bkettle\b/i, /\bhervidor\b/i,
  /\bbotella\b/i, /\bbottle\b/i, /\bflask\b/i, /\btravel\s*mug\b/i,
  /\bconcentrados\s*minerales\b/i, /\bapax\b/i,
  /\bfiltros?\s*(de\s*papel|para|aeropress)\b/i, /\bpaper\s*filter/i,
  /\bfilter\s*papers?\b/i, /\bmicro\s*filters?\b/i, /\bbrew\s*filters?\b/i,
  /\bstagg\s*filter/i, /\baiden\s*filter/i,
  /\bshower\s*head\b/i, /\bwater\s*tank\b/i, /\bplumb-?in\s*kit\b/i,
  /\bdial\b/i, /\bthermal\s*carafe\b/i, /\blid\b/i,
  /\bdrain\s*tray\b/i, /\bsteam\s*wand\b/i, /\bcafiza\b/i,
  /\bportafilter\b/i,
];

// COFFEE indicators — weight patterns, origins, processes
const COFFEE_WEIGHT_PATTERN = /\b(250g|340g|200g|500g|1kg|1000g|12oz|8oz)\b/i;
const COFFEE_ORIGIN_PATTERN = /\b(ethiopia|etiopía|colombia|kenya|kenia|guatemala|costa\s*rica|honduras|rwanda|ruanda|burundi|brazil|brasil|peru|perú|panama|panamá|mexico|méxico|indonesia|uganda|tanzania|el\s*salvador|nicaragua|congo|yemen)\b/i;
const COFFEE_PROCESS_PATTERN = /\b(natural|washed|lavado|honey|anaeróbic|anaerobic|carbonic|ferment|gesha|geisha|bourbon|caturra|typica|sl28|sl34|yirgacheffe|sidamo|guji|huila|nariño|cauca|nyeri)\b/i;

function classifyProductV2(name: string, brand: string, currentCat: string): string {
  const text = `${name}`.toLowerCase();

  // 1. HIGHEST PRIORITY: Merchandise / courses / subscriptions — always accessories
  for (const p of ACCESSORY_PATTERNS) {
    if (p.test(text)) return 'accesorios';
  }

  // 2. Equipment accessories (scales, tampers, cups, kettles, filters, cleaning)
  //    Must run BEFORE machine/grinder patterns because items like "Flair 58 Tamper" or
  //    "Aeropress Filter Papers" should be accessories, not machines
  for (const p of ACCESSORY_EQUIP_PATTERNS) {
    if (p.test(text)) return 'accesorios';
  }

  // 3. Only classify as machine if NOT already caught as accessory
  //    But skip if it's just a component part (portafilter, basket, funnel, etc.)
  for (const p of MACHINE_PATTERNS) {
    if (p.test(text)) return 'maquinas';
  }

  // 4. Grinders
  for (const p of GRINDER_PATTERNS) {
    if (p.test(text)) return 'molinos';
  }

  // 5. If it has coffee-like signals (origin, weight, process), it's coffee
  if (COFFEE_WEIGHT_PATTERN.test(text)) return 'cafe';
  if (COFFEE_ORIGIN_PATTERN.test(text)) return 'cafe';
  if (COFFEE_PROCESS_PATTERN.test(text)) return 'cafe';

  // 6. Keep original
  return currentCat;
}

// ─── PARSE PRODUCTS ────────────────────────────────────────────────────────────

interface ProductInfo {
  id: string;
  name: string;
  brand: string;
  category: string;
  image: string;
}

function parseProducts(src: string): ProductInfo[] {
  const products: ProductInfo[] = [];
  // Match product blocks by finding id + name + brand + category patterns
  const regex = /id:\s*"([^"]+)"[\s\S]*?name:\s*"([^"]+)"[\s\S]*?brand:\s*"([^"]+)"[\s\S]*?category:\s*"(\w+)"[\s\S]*?image:\s*"([^"]*)"/g;
  let m;
  while ((m = regex.exec(src)) !== null) {
    products.push({ id: m[1], name: m[2], brand: m[3], category: m[4], image: m[5] });
  }
  return products;
}

// ─── MAIN ──────────────────────────────────────────────────────────────────────

console.log('');
console.log('══════════════════════════════════════════════════════════════════');
console.log('🔍 THE COFFEE SCORE · AUDITORÍA INTEGRAL V2');
console.log('══════════════════════════════════════════════════════════════════');

const products = parseProducts(catalogSrc);
console.log(`\n📦 Total de productos: ${products.length}`);

// Count current distribution
const currentCounts: Record<string, number> = {};
const fixedCounts: Record<string, number> = {};
const fixes: { id: string; name: string; oldCat: string; newCat: string }[] = [];

for (const p of products) {
  currentCounts[p.category] = (currentCounts[p.category] || 0) + 1;

  const newCat = classifyProductV2(p.name, p.brand, p.category);
  fixedCounts[newCat] = (fixedCounts[newCat] || 0) + 1;

  if (newCat !== p.category) {
    fixes.push({ id: p.id, name: p.name, oldCat: p.category, newCat: newCat });
  }
}

console.log('\n── DISTRIBUCIÓN ACTUAL ────────────────────────');
for (const [cat, count] of Object.entries(currentCounts).sort()) {
  console.log(`  ${cat.padEnd(14)} ${count}`);
}

console.log('\n── DISTRIBUCIÓN CORREGIDA ─────────────────────');
for (const [cat, count] of Object.entries(fixedCounts).sort()) {
  const delta = count - (currentCounts[cat] || 0);
  const deltaStr = delta !== 0 ? (delta > 0 ? ` (+${delta})` : ` (${delta})`) : '';
  console.log(`  ${cat.padEnd(14)} ${count}${deltaStr}`);
}

console.log(`\n── CAMBIOS: ${fixes.length} productos a reclasificar ──────────────`);
for (const f of fixes) {
  console.log(`  ${f.oldCat.padEnd(12)} → ${f.newCat.padEnd(12)} | ${f.name}`);
}

// ─── APPLY FIXES ───────────────────────────────────────────────────────────────

if (fixes.length > 0) {
  console.log(`\n🔧 Aplicando ${fixes.length} correcciones...`);
  let src = catalogSrc;
  let applied = 0;

  for (const fix of fixes) {
    // Find the product by its unique id and change its category
    const idStr = `id: "${fix.id}"`;
    const pos = src.indexOf(idStr);
    if (pos === -1) continue;

    // Search for category within the next 600 chars of this product
    const chunk = src.substring(pos, pos + 600);
    const catMatch = chunk.match(/category:\s*"(\w+)"/);
    if (catMatch && catMatch[1] === fix.oldCat) {
      const absPos = pos + chunk.indexOf(catMatch[0]);
      const replacement = `category: "${fix.newCat}"`;
      src = src.substring(0, absPos) + replacement + src.substring(absPos + catMatch[0].length);
      applied++;
    }
  }

  // Update CATEGORIES count values
  const finalCounts: Record<string, number> = {};
  const allCats = src.matchAll(/category:\s*"(\w+)"/g);
  for (const m of allCats) {
    finalCounts[m[1]] = (finalCounts[m[1]] || 0) + 1;
  }
  for (const [cat, count] of Object.entries(finalCounts)) {
    const regex = new RegExp(`(id: '${cat}',\\s*name: '[^']+',\\s*icon: '[^']*',\\s*count: )\\d+`);
    src = src.replace(regex, `$1${count}`);
  }

  fs.writeFileSync(CATALOG_PATH, src, 'utf-8');
  console.log(`✅ ${applied} categorías corregidas y guardadas.`);

  console.log('\n── DISTRIBUCIÓN FINAL ─────────────────────────');
  for (const [cat, count] of Object.entries(finalCounts).sort()) {
    console.log(`  ${cat.padEnd(14)} ${count}`);
  }
}

console.log('\n══════════════════════════════════════════════════════════════════\n');
