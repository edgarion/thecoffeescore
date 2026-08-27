#!/usr/bin/env tsx
/**
 * Image Fix Script — finds products with missing/empty images and
 * patches them using a curated fallback map.
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename2 = fileURLToPath(import.meta.url);
const __dirname2 = path.dirname(__filename2);
const CATALOG_PATH = path.join(__dirname2, '..', 'src', 'data', 'catalog.ts');

let src = fs.readFileSync(CATALOG_PATH, 'utf-8');

// ─── Regex helpers ────────────────────────────────────────────────────────────

// Extract all products as raw blocks
const productBlockRe = /\{\s*id:\s*"([^"]+)"([\s\S]*?)\}/g;

interface Prod {
  id: string;
  name: string;
  brand: string;
  category: string;
  image: string;
}

function extractProducts(source: string): Prod[] {
  const results: Prod[] = [];
  // Simple field extractors
  const field = (block: string, key: string) => {
    const m = block.match(new RegExp(`${key}:\\s*"([^"]*)"`, 's'));
    return m ? m[1] : '';
  };
  // Split by product object boundaries
  const objectRe = /\{\s*id:\s*"[^"]+",[\s\S]*?\n\s*\}/g;
  let m: RegExpExecArray | null;
  while ((m = objectRe.exec(source)) !== null) {
    const block = m[0];
    results.push({
      id: field(block, 'id'),
      name: field(block, 'name'),
      brand: field(block, 'brand'),
      category: field(block, 'category'),
      image: field(block, 'image'),
    });
  }
  return results;
}

const products = extractProducts(src);
console.log(`\n📦 Total products: ${products.length}`);

// ─── Categorise images ────────────────────────────────────────────────────────

const empty: Prod[] = [];
const local: Prod[] = [];
const external: Prod[] = [];

for (const p of products) {
  if (!p.image || p.image.trim() === '') {
    empty.push(p);
  } else if (p.image.startsWith('/')) {
    local.push(p);
  } else {
    external.push(p);
  }
}

console.log(`  Local:    ${local.length}`);
console.log(`  External: ${external.length}`);
console.log(`  Empty:    ${empty.length}`);

// ─── Fallback image map ───────────────────────────────────────────────────────
// Curated image URLs per brand/keyword. These are reliable CDN sources.

const BRAND_FALLBACK: Record<string, string> = {
  'Nomad Coffee': 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
  'Nomad': 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
  'Flair Espresso': 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=400&q=80',
  'Fellow Products': 'https://images.unsplash.com/photo-1572119865084-43c285814d63?w=400&q=80',
  'Acaia': 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
  'Hario': 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
  'Single O': 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80',
  'Market Lane': 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80',
  'Seven Seeds': 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80',
  'Proud Mary Coffee': 'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?w=400&q=80',
};

const CATEGORY_FALLBACK: Record<string, string> = {
  cafe: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=400&q=80',
  maquinas: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=400&q=80',
  molinos: 'https://images.unsplash.com/photo-1520970014086-2208d157c9e2?w=400&q=80',
  accesorios: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
};

// Keyword overrides
const KEYWORD_FALLBACK: Array<[RegExp, string]> = [
  [/espresso\s*machine|la\s*marzocco|linea|gaggia|rocket/i, 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=400&q=80'],
  [/grinder|molino|comandante|timemore|baratza|niche/i, 'https://images.unsplash.com/photo-1520970014086-2208d157c9e2?w=400&q=80'],
  [/aeropress|moka|pour.over|chemex|v60|dripper|siphon|french\s*press|aiden|moccamaster/i, 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80'],
  [/scale|balanza|báscula/i, 'https://images.unsplash.com/photo-1612899440403-32e9c91d54e8?w=400&q=80'],
  [/kettle|hervidor|gooseneck/i, 'https://images.unsplash.com/photo-1572119865084-43c285814d63?w=400&q=80'],
  [/subscription|suscripci|gift|regalo/i, 'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?w=400&q=80'],
  [/hoodie|cap|tote|bag|bolsa|wear|apparel|ropa/i, 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80'],
  [/poster|print/i, 'https://images.unsplash.com/photo-1524275539700-cf51138f679b?w=400&q=80'],
  [/book|libro/i, 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80'],
  [/tamper|distributor|WDT|needle|funnel/i, 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=400&q=80'],
  [/mug|cup|taza|vaso|glass/i, 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80'],
  [/cleaner|cleaning|limpieza|descaler|detergent|cafiza/i, 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&q=80'],
  [/portafilter|basket|puck\s*screen/i, 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=400&q=80'],
];

function getFallbackImage(p: Prod): string {
  // 1. Name keyword
  for (const [re, url] of KEYWORD_FALLBACK) {
    if (re.test(p.name)) return url;
  }
  // 2. Brand
  for (const [brand, url] of Object.entries(BRAND_FALLBACK)) {
    if (p.brand.includes(brand)) return url;
  }
  // 3. Category
  return CATEGORY_FALLBACK[p.category] ?? CATEGORY_FALLBACK['cafe'];
}

// ─── Apply fixes ──────────────────────────────────────────────────────────────

if (empty.length === 0) {
  console.log('\n✅ No products with missing images found!');
} else {
  console.log(`\n🔧 Filling ${empty.length} empty images...`);
  let fixed = 0;

  for (const p of empty) {
    const fallback = getFallbackImage(p);
    // Find the product block by id and replace its image field
    // Matches: image: "" or image: '' inside the product
    const patchRe = new RegExp(
      `(id:\\s*"${p.id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?image:\\s*)"([^"]*)"`,
      'm'
    );
    if (patchRe.test(src)) {
      src = src.replace(patchRe, `$1"${fallback}"`);
      fixed++;
    }
  }

  fs.writeFileSync(CATALOG_PATH, src, 'utf-8');
  console.log(`✅ Fixed ${fixed} empty image fields.`);
}

// ─── Stats on external domains ───────────────────────────────────────────────

const domainCount: Record<string, number> = {};
for (const p of external) {
  try {
    const url = new URL(p.image);
    const d = url.hostname.replace('www.', '');
    domainCount[d] = (domainCount[d] || 0) + 1;
  } catch { /* skip */ }
}

console.log('\n── TOP IMAGE DOMAINS ─────────────────────────────');
for (const [d, n] of Object.entries(domainCount).sort((a, b) => b[1] - a[1]).slice(0, 15)) {
  console.log(`  ${String(n).padStart(4)}  ${d}`);
}

// ─── Detect products with placeholder/generic images ─────────────────────────
// Reparse after fixes
const srcAfter = fs.readFileSync(CATALOG_PATH, 'utf-8');
const afterProducts = extractProducts(srcAfter);
const stillEmpty = afterProducts.filter(p => !p.image || p.image.trim() === '');
console.log(`\n── REMAINING EMPTY: ${stillEmpty.length} ───────────────────────`);
if (stillEmpty.length > 0) {
  for (const p of stillEmpty.slice(0, 20)) {
    console.log(`  [${p.category}] ${p.brand} — ${p.name}`);
  }
}

console.log('\n══════════════════════════════════════════════════════════════════\n');
