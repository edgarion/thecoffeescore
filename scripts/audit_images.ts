#!/usr/bin/env tsx
/**
 * Image Audit Script — Checks every product image URL is valid.
 * For broken/missing images, outputs the product info for manual fixing.
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename2 = fileURLToPath(import.meta.url);
const __dirname2 = path.dirname(__filename2);
const CATALOG_PATH = path.join(__dirname2, '..', 'src', 'data', 'catalog.ts');
const catalogSrc = fs.readFileSync(CATALOG_PATH, 'utf-8');

interface ProductImage {
  id: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  storeUrl: string;
}

function parseProducts(src: string): ProductImage[] {
  const products: ProductImage[] = [];
  const regex = /id:\s*"([^"]+)"[\s\S]*?name:\s*"([^"]+)"[\s\S]*?brand:\s*"([^"]+)"[\s\S]*?category:\s*"(\w+)"[\s\S]*?image:\s*"([^"]*)"[\s\S]*?(?:storeUrl|url):\s*"([^"]*)"/g;
  let m;
  while ((m = regex.exec(src)) !== null) {
    products.push({ id: m[1], name: m[2], brand: m[3], category: m[4], image: m[5], storeUrl: m[6] });
  }
  return products;
}

const products = parseProducts(catalogSrc);

console.log(`\n📦 Total products: ${products.length}\n`);

// Check for missing / placeholder images
const issues: ProductImage[] = [];
const localImages: ProductImage[] = [];
const externalImages: ProductImage[] = [];
const emptyImages: ProductImage[] = [];

for (const p of products) {
  if (!p.image || p.image.trim() === '') {
    emptyImages.push(p);
    issues.push(p);
  } else if (p.image.startsWith('/assets/')) {
    // Check if local file exists
    const filePath = path.join(__dirname2, '..', 'public', p.image);
    if (!fs.existsSync(filePath)) {
      issues.push(p);
    }
    localImages.push(p);
  } else if (p.image.startsWith('http')) {
    externalImages.push(p);
  }
}

console.log(`  Local images (/assets/): ${localImages.length}`);
console.log(`  External images (http): ${externalImages.length}`);
console.log(`  Empty/missing images: ${emptyImages.length}`);
console.log(`  Issues found: ${issues.length}`);

// Group external images by domain
const domains: Record<string, number> = {};
for (const p of externalImages) {
  try {
    const url = new URL(p.image);
    const domain = url.hostname;
    domains[domain] = (domains[domain] || 0) + 1;
  } catch {
    // invalid URL
  }
}

console.log('\n── DOMINIOS DE IMÁGENES ──────────────────');
for (const [domain, count] of Object.entries(domains).sort((a, b) => b[1] - a[1]).slice(0, 20)) {
  console.log(`  ${domain.padEnd(45)} ${count}`);
}

// Check a sample of external images for reachability
console.log('\n── VERIFICANDO MUESTRA DE IMÁGENES EXTERNAS ──────────');
const sampleSize = 30;
const sample = externalImages.sort(() => Math.random() - 0.5).slice(0, sampleSize);

let working = 0;
let broken = 0;
const brokenProducts: ProductImage[] = [];

for (const p of sample) {
  try {
    const res = await fetch(p.image, { method: 'HEAD', signal: AbortSignal.timeout(5000) });
    if (res.ok) {
      working++;
    } else {
      broken++;
      brokenProducts.push(p);
      console.log(`  ❌ ${res.status} | ${p.name} → ${p.image.substring(0, 80)}...`);
    }
  } catch (e: any) {
    broken++;
    brokenProducts.push(p);
    console.log(`  ❌ ERR | ${p.name} → ${p.image.substring(0, 80)}...`);
  }
}

console.log(`\n  Resultado muestra: ${working}/${sampleSize} OK, ${broken}/${sampleSize} rotas`);

if (emptyImages.length > 0) {
  console.log('\n── PRODUCTOS SIN IMAGEN ──────────────────');
  for (const p of emptyImages.slice(0, 30)) {
    console.log(`  ${p.category.padEnd(12)} | ${p.name}`);
  }
}

// Look for products with duplicate/generic images
console.log('\n── IMÁGENES DUPLICADAS (misma URL en múltiples productos) ──');
const imageCount: Record<string, string[]> = {};
for (const p of products) {
  if (!p.image) continue;
  if (!imageCount[p.image]) imageCount[p.image] = [];
  imageCount[p.image].push(p.name);
}
const dupes = Object.entries(imageCount).filter(([_, names]) => names.length > 3).sort((a, b) => b[1].length - a[1].length);
for (const [url, names] of dupes.slice(0, 10)) {
  console.log(`  ${names.length}x misma imagen: ${url.substring(0, 70)}...`);
  console.log(`      → ${names.slice(0, 3).join(', ')}...`);
}

console.log('\n══════════════════════════════════════════════════════════════════\n');
