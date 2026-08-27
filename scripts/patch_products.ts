#!/usr/bin/env tsx
/**
 * Patch specific products: move to 'accesorios' with the right subCategory.
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename2 = fileURLToPath(import.meta.url);
const __dirname2 = path.dirname(__filename2);
const CATALOG_PATH = path.join(__dirname2, '..', 'src', 'data', 'catalog.ts');
let src = fs.readFileSync(CATALOG_PATH, 'utf-8');

// id → new category + subcategory
const PATCHES: Record<string, { category: string; sub: string }> = {
  'flair-espresso-espresso-anywhere-space-t':   { category: 'accesorios', sub: 'Lifestyle' },
  'flair-espresso-espresso-anywhere-camp-t':    { category: 'accesorios', sub: 'Lifestyle' },
  'flair-espresso-dual-chamber-case-pro-classic':{ category: 'accesorios', sub: 'Herramientas de barista' },
  'flair-espresso-dual-chamber-case-neo-flex':  { category: 'accesorios', sub: 'Herramientas de barista' },
  'flair-espresso-black-piston-gauge-kit':      { category: 'accesorios', sub: 'Herramientas de barista' },
  'flair-espresso-adapter-ring-pro-classic':    { category: 'accesorios', sub: 'Herramientas de barista' },
  'acaia-scales-orion-nano':                    { category: 'accesorios', sub: 'Medidores & Básculas' },
  'acaia-scales-orion-mini':                    { category: 'accesorios', sub: 'Medidores & Básculas' },
  'acaia-scales-orion':                         { category: 'accesorios', sub: 'Medidores & Básculas' },
  'acaia-scales-organic-star-valley-decaf-10-5-oz': { category: 'accesorios', sub: 'Lifestyle' },
};

const lines = src.split('\n');
let depth = 0;
let blockLines: string[] = [];
const resultLines: string[] = [];
let changes = 0;

function patchBlock(block: string[]): string[] {
  const joined = block.join('\n');
  const idMatch = joined.match(/id:\s*"([^"]+)"/);
  if (!idMatch) return block;
  const id = idMatch[1];
  const patch = PATCHES[id];
  if (!patch) return block;

  let modified = joined;

  // Update category
  modified = modified.replace(/category:\s*"\w+"/, `category: "${patch.category}"`);

  // Update or insert subCategory
  if (/subCategory:\s*"[^"]*"/.test(modified)) {
    modified = modified.replace(/subCategory:\s*"[^"]*"/, `subCategory: "${patch.sub}"`);
  } else {
    modified = modified.replace(
      `category: "${patch.category}"`,
      `category: "${patch.category}",\n    subCategory: "${patch.sub}"`
    );
  }

  changes++;
  console.log(`  ✅ ${id} → ${patch.category} / ${patch.sub}`);
  return modified.split('\n');
}

for (let li = 0; li < lines.length; li++) {
  const line = lines[li];
  const opens = (line.match(/\{/g) || []).length;
  const closes = (line.match(/\}/g) || []).length;

  if (depth === 0 && opens > 0) {
    blockLines = [line];
    depth += opens - closes;
    if (depth <= 0) {
      resultLines.push(...patchBlock(blockLines));
      blockLines = [];
      depth = 0;
    }
  } else if (depth > 0) {
    blockLines.push(line);
    depth += opens - closes;
    if (depth <= 0) {
      resultLines.push(...patchBlock(blockLines));
      blockLines = [];
      depth = 0;
    }
  } else {
    resultLines.push(line);
  }
}
if (blockLines.length > 0) resultLines.push(...patchBlock(blockLines));

fs.writeFileSync(CATALOG_PATH, resultLines.join('\n'), 'utf-8');
console.log(`\n✅ Total: ${changes} productos movidos a accesorios.\n`);
