#!/usr/bin/env tsx
/**
 * Assign correct subCategory to ALL accessory products.
 * Maps product names to one of the 5 subcategories:
 *   - Botellas & Batch
 *   - Medidores & Básculas
 *   - Jarras & Servidores
 *   - Herramientas de barista
 *   - Lifestyle
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename2 = fileURLToPath(import.meta.url);
const __dirname2 = path.dirname(__filename2);
const CATALOG_PATH = path.join(__dirname2, '..', 'src', 'data', 'catalog.ts');

let src = fs.readFileSync(CATALOG_PATH, 'utf-8');

// ─── Subcategory rule sets (ordered: first match wins) ───────────────────────

type SubCat =
  | 'Lifestyle'
  | 'Botellas & Batch'
  | 'Medidores & Básculas'
  | 'Jarras & Servidores'
  | 'Herramientas de barista';

const RULES: Array<{ patterns: RegExp[]; sub: SubCat }> = [
  // LIFESTYLE: apparel, merchandise, gift cards, bags, posters, chai, subscriptions, books
  {
    patterns: [
      /hoodie|t-shirt|cap|tote\s*bag|market\s*lane\s*tote|apparel|ropa|camiseta|gorra|bolsa\s*(de\s*tela)?|wrap|banda\s*reflectante/i,
      /poster|print|sticker|gift\s*card|tarjeta\s*regalo|in-store\s*gift|gift\s*wrap/i,
      /subscription|suscripci|a\s*medida|barista\s*esencial|barista\s*intermedio|barista\s*profesional|apax/i,
      /chai\s*(bottle|botella)|fly\s*high\s*chai/i,
      /brother\s*baba|seven\s*seeds.*cap|seven\s*seeds.*hoodie|acaia\s*tote/i,
      /\bbook\b|\blibro\b/i,
    ],
    sub: 'Lifestyle',
  },
  // BOTELLAS & BATCH: cold brew vessels, water bottles, insulated bottles, batch brewers
  {
    patterns: [
      /cold\s*brew|cold-?brew/i,
      /insulated\s*(water\s*)?bottle|bloom\s*where\s*you\s*pour.*bottle|acaia.*bottle/i,
      /flask|travel\s*mug|thermos|termo|botella\s*(de\s*agua|térmica|termo)/i,
      /batch\s*(brew|coffee|brewer)/i,
      /hario\s*.*\s*(cold|batch)|mizudashi/i,
    ],
    sub: 'Botellas & Batch',
  },
  // MEDIDORES & BÁSCULAS: scales, timers, thermometers, refractometers, dials
  {
    patterns: [
      /scale|bàscula|báscula|balanza/i,
      /thermometer|termómetro|temperatura/i,
      /timer|cronómetro/i,
      /refractometer|refractómetro/i,
      /\bdial\b/i,
      /water\s*tank|deposito\s*agua/i,
    ],
    sub: 'Medidores & Básculas',
  },
  // JARRAS & SERVIDORES: pitchers, carafes, decanters, servers, cups, mugs, glasses
  {
    patterns: [
      /pitcher|jarra\s*(de\s*leche)?|milk\s*jug|leche/i,
      /carafe|server|decanter|servidor|jarra\s*(de\s*café)?/i,
      /cup|mug|taza|vaso|glass|bol\b/i,
      /\blid\b|tapa/i,
      /360\s*sip|carter.*lid|atmos\s*lid/i,
    ],
    sub: 'Jarras & Servidores',
  },
  // HERRAMIENTAS DE BARISTA: everything else for preparation/extraction
  {
    patterns: [
      /tamper|distributor|leveler|wdt|needle|funnel|dosing|dosificador|vertedor|ramping/i,
      /portafilter|basket|puck\s*screen|shower\s*head|grouphead/i,
      /kettle|hervidor|gooseneck/i,
      /filter.*paper|paper.*filter|micro.*filter|brew.*filter|stagg\s*filter|aiden\s*filter|filtro\s*de\s*papel/i,
      /cleaning|limpieza|detergent|descaler|cleaner|cafiza|cafetto|cleandrip|cepillo|brush/i,
      /steam\s*wand|portafilter|drain\s*tray|plumb.?in/i,
      /aeropress|moka|french\s*press|espro|hario\s*v60|chemex|v60|dripper|siphon|kalita|origami|tricolate|melodrip|april/i,
      /knock\s*box|cajón\s*posos|puck\s*container/i,
      /apron|barista.*kit|herramienta/i,
      /concentrados\s*minerales|third\s*wave\s*water|water\s*mineral/i,
    ],
    sub: 'Herramientas de barista',
  },
];

// ─── Parse + patch each accessory product ────────────────────────────────────

// Extract accessory product blocks with their name
const blockRe = /(\{\s*id:\s*"[^"]+",[\s\S]*?(?:category:\s*"accesorios"|subCategory:\s*"[^"]*")[\s\S]*?\n\s*\})/g;

// Simpler approach: parse id + name + current subCategory + category inline
interface Prod { id: string; name: string; category: string; currentSub: string; start: number; end: number }

function classifyBySub(name: string, brand: string): SubCat {
  const text = `${name} ${brand}`;
  for (const rule of RULES) {
    for (const pat of rule.patterns) {
      if (pat.test(text)) return rule.sub;
    }
  }
  return 'Herramientas de barista'; // default for accesorios
}

// Find all product objects in catalog and patch subCategory for accesorios
let changes = 0;
const stats: Record<string, number> = {};

// We'll iterate through all product blocks and patch the subCategory for accesorios ones
// Strategy: find each product, check if category=accesorios, determine correct subCategory, replace
const productRe = /id:\s*"([^"]+)"([\s\S]*?)(?=\n\s*\{?\s*id:|$)/g;

// Actually easier: process line by line in product blocks
// Use simpler regex to find pattern: look for objects with category: "accesorios"

// Find every product that has category: "accesorios" 
// We'll scan via line windows

const lines = src.split('\n');
let i = 0;
const output: string[] = [];
let inProduct = false;
let productLines: string[] = [];
let productStart = -1;

function processProductBlock(block: string[]): string[] {
  const joined = block.join('\n');
  const catMatch = joined.match(/category:\s*"(\w+)"/);
  if (!catMatch || catMatch[1] !== 'accesorios') return block;

  const nameMatch = joined.match(/name:\s*"([^"]+)"/);
  const brandMatch = joined.match(/brand:\s*"([^"]+)"/);
  const name = nameMatch ? nameMatch[1] : '';
  const brand = brandMatch ? brandMatch[1] : '';

  const correctSub = classifyBySub(name, brand);
  stats[correctSub] = (stats[correctSub] || 0) + 1;

  // Check current subCategory
  const subMatch = joined.match(/subCategory:\s*"([^"]*)"/);
  const currentSub = subMatch ? subMatch[1] : '';

  if (currentSub === correctSub) return block;

  // Patch
  changes++;
  const newJoined = subMatch
    ? joined.replace(/subCategory:\s*"[^"]*"/, `subCategory: "${correctSub}"`)
    : joined.replace(/(category:\s*"accesorios")/, `$1,\n    subCategory: "${correctSub}"`);

  return newJoined.split('\n');
}

// Process using a state machine over lines
let depth = 0;
let blockLines: string[] = [];
let blockStart = 0;
const resultLines: string[] = [];

for (let li = 0; li < lines.length; li++) {
  const line = lines[li];
  const opens = (line.match(/\{/g) || []).length;
  const closes = (line.match(/\}/g) || []).length;

  if (depth === 0 && opens > 0) {
    // Start of a top-level product block
    blockStart = li;
    blockLines = [line];
    depth += opens - closes;
    if (depth <= 0) {
      // Single-line block, unlikely but handle
      const processed = processProductBlock(blockLines);
      resultLines.push(...processed);
      blockLines = [];
      depth = 0;
    }
  } else if (depth > 0) {
    blockLines.push(line);
    depth += opens - closes;
    if (depth <= 0) {
      const processed = processProductBlock(blockLines);
      resultLines.push(...processed);
      blockLines = [];
      depth = 0;
    }
  } else {
    resultLines.push(line);
  }
}

// Flush any remaining
if (blockLines.length > 0) {
  resultLines.push(...processProductBlock(blockLines));
}

const newSrc = resultLines.join('\n');
fs.writeFileSync(CATALOG_PATH, newSrc, 'utf-8');

console.log('\n══════════════════════════════════════════════════════════════════');
console.log('🎨 SUBCATEGORÍAS DE ACCESORIOS — ASIGNACIÓN COMPLETA');
console.log('══════════════════════════════════════════════════════════════════\n');
console.log(`✅ ${changes} productos modificados\n`);
console.log('── DISTRIBUCIÓN ─────────────────────────────');
for (const [sub, count] of Object.entries(stats).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${String(count).padStart(4)}  ${sub}`);
}
console.log('\n══════════════════════════════════════════════════════════════════\n');
