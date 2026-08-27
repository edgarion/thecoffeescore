#!/usr/bin/env tsx
/**
 * Force-normalize all old subCategory values in accesorios products.
 * Replaces legacy subcategory strings with the canonical 5-option set.
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename2 = fileURLToPath(import.meta.url);
const __dirname2 = path.dirname(__filename2);
const CATALOG_PATH = path.join(__dirname2, '..', 'src', 'data', 'catalog.ts');

let src = fs.readFileSync(CATALOG_PATH, 'utf-8');

type SubCat =
  | 'Lifestyle'
  | 'Botellas & Batch'
  | 'Medidores & Básculas'
  | 'Jarras & Servidores'
  | 'Herramientas de barista';

const RULES: Array<{ patterns: RegExp[]; sub: SubCat }> = [
  {
    patterns: [
      /hoodie|t-shirt|cap|tote\s*bag|apparel|camiseta|gorra|bolsa|wrap|banda\s*reflectante/i,
      /poster|print|sticker|gift\s*card|tarjeta\s*regalo|in-store\s*gift|gift\s*wrap/i,
      /subscription|suscripci|a\s*medida|barista\s*esencial|barista\s*intermedio|barista\s*profesional/i,
      /chai\s*(bottle|botella)|fly\s*high\s*chai/i,
      /brother\s*baba|seven\s*seeds.*cap|seven\s*seeds.*hoodie|acaia\s*tote|acaia.*t-shirt|cosmic\s*t-shirt/i,
      /\bbook\b|\blibro\b|cupping\s*event|public\s*cupping/i,
      /blendrunner\s*subscription|clockwork\s*origins|killerbee.*subscription|collider.*subscription/i,
      /gift\s*(12|3|6)\s*month|month.*gift|prepaid.*subscription|on\s*repeat.*subscription/i,
      /ongoing.*subscription|monthly.*subscription|b2b.*subscription/i,
    ],
    sub: 'Lifestyle',
  },
  {
    patterns: [
      /cold\s*brew|cold-?brew|mizudashi/i,
      /insulated\s*(water\s*)?bottle|bloom\s*where\s*you\s*pour.*bottle/i,
      /travel\s*mug|flask|thermos/i,
      /batch\s*(brew|coffee|brewer)|stainless.*batch/i,
      /\b30\s*oz\b.*malt|malt.*cup.*batch/i,
      /filter\s*in\s*cold\s*brew|hario.*cold/i,
    ],
    sub: 'Botellas & Batch',
  },
  {
    patterns: [
      /scale|b[aá]scula|balanza|báscula/i,
      /thermometer|termómetro/i,
      /timer|cronómetro/i,
      /refractometer|refractómetro/i,
      /\bdial\b/i,
      /water\s*tank/i,
      /precision\s*scale|digital\s*scale|timemore.*black\s*mirror|acaia.*scale|pearl.*scale/i,
    ],
    sub: 'Medidores & Básculas',
  },
  {
    patterns: [
      /pitcher|jarra\s*(de\s*leche)?|milk\s*jug/i,
      /carafe|server|decanter/i,
      /\bcup\b|\bmug\b|\btaza\b|\bvaso\b|\bglass\b|\bbol\b|\bdemitasse\b|\blatte\b/i,
      /\blid\b|tapa/i,
      /360\s*sip|carter.*lid|atmos\s*lid/i,
      /cupping\s*spoon|cupping\s*l[oö]ffel/i,
    ],
    sub: 'Jarras & Servidores',
  },
];

function classifyBySub(name: string, brand: string): SubCat {
  const text = `${name} ${brand}`;
  for (const rule of RULES) {
    for (const pat of rule.patterns) {
      if (pat.test(text)) return rule.sub;
    }
  }
  return 'Herramientas de barista';
}

// ─── Find products with old/wrong subcategory and fix them ────────────────────

const OLD_SUBCATS = [
  'Café de Especialidad',
  'Herramientas Barista',
  'Máquinas de Café',
  'Básculas de Precisión',
  'Cafeteras Manuales',
  'Hervidores Cuello de Cisne',
];

// We'll process the file chunk by chunk for each product block with category=accesorios

// Split into product object chunks
// Find all product start positions
const productStartRe = /(\s*\{[\s\S]*?category:\s*"accesorios"[\s\S]*?\})/g;

// Alternative: process line by line
const lines = src.split('\n');
let changes = 0;
const stats: Record<string, number> = {};

// State machine to collect product blocks
let depth = 0;
let blockLines: string[] = [];
const resultLines: string[] = [];

function processBlock(block: string[]): string[] {
  const joined = block.join('\n');
  
  // Only process accesorios
  if (!joined.includes('category: "accesorios"')) return block;
  
  // Check if it has an old subcategory
  const subMatch = joined.match(/subCategory:\s*"([^"]+)"/);
  const currentSub = subMatch ? subMatch[1] : '';
  
  // If already in the new canonical set, re-classify to ensure correctness
  const canonicalSubs: SubCat[] = [
    'Lifestyle', 'Botellas & Batch', 'Medidores & Básculas',
    'Jarras & Servidores', 'Herramientas de barista'
  ];
  
  // Skip if already correct (to avoid re-processing things already done)
  // But DO re-process old ones
  const isOld = currentSub === '' || OLD_SUBCATS.includes(currentSub);
  if (!isOld) {
    // Already in canonical set — still count it
    if (canonicalSubs.includes(currentSub as SubCat)) {
      stats[currentSub] = (stats[currentSub] || 0) + 1;
    }
    return block;
  }
  
  const nameMatch = joined.match(/name:\s*"([^"]+)"/);
  const brandMatch = joined.match(/brand:\s*"([^"]+)"/);
  const name = nameMatch ? nameMatch[1] : '';
  const brand = brandMatch ? brandMatch[1] : '';
  
  const correctSub = classifyBySub(name, brand);
  stats[correctSub] = (stats[correctSub] || 0) + 1;
  
  if (currentSub === correctSub) return block;
  
  changes++;
  const newJoined = subMatch
    ? joined.replace(/subCategory:\s*"[^"]*"/, `subCategory: "${correctSub}"`)
    : joined.replace(/(category:\s*"accesorios")/, `$1,\n    subCategory: "${correctSub}"`);
  
  return newJoined.split('\n');
}

for (let li = 0; li < lines.length; li++) {
  const line = lines[li];
  const opens = (line.match(/\{/g) || []).length;
  const closes = (line.match(/\}/g) || []).length;
  
  if (depth === 0 && opens > 0) {
    blockLines = [line];
    depth += opens - closes;
    if (depth <= 0) {
      resultLines.push(...processBlock(blockLines));
      blockLines = [];
      depth = 0;
    }
  } else if (depth > 0) {
    blockLines.push(line);
    depth += opens - closes;
    if (depth <= 0) {
      resultLines.push(...processBlock(blockLines));
      blockLines = [];
      depth = 0;
    }
  } else {
    resultLines.push(line);
  }
}

if (blockLines.length > 0) resultLines.push(...processBlock(blockLines));

const newSrc = resultLines.join('\n');
fs.writeFileSync(CATALOG_PATH, newSrc, 'utf-8');

console.log('\n══════════════════════════════════════════════════════════════════');
console.log('🔧 NORMALIZACIÓN DE SUBCATEGORÍAS ANTIGUAS');
console.log('══════════════════════════════════════════════════════════════════\n');
console.log(`✅ ${changes} productos corregidos\n`);
console.log('── DISTRIBUCIÓN FINAL ───────────────────────');
const total = Object.values(stats).reduce((a, b) => a + b, 0);
for (const [sub, count] of Object.entries(stats).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${String(count).padStart(4)}  ${sub}`);
}
console.log(`  ────  ─────────────────────────`);
console.log(`  ${String(total).padStart(4)}  TOTAL`);
console.log('\n══════════════════════════════════════════════════════════════════\n');
