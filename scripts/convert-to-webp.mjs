// scripts/convert-to-webp.mjs
// Converts all PNG/JPG in public/assets to WebP (quality 82) keeping originals.
// Also resizes product images to max 800px wide (they're displayed at ~250px).

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = join(__dirname, '..', 'public', 'assets');

// Product images displayed at ≤300px on screen — cap at 800px for 2x retina
const PRODUCT_MAX_WIDTH = 800;
const DEFAULT_QUALITY = 82;

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) files.push(...await getFiles(full));
    else files.push(full);
  }
  return files;
}

async function convert(src) {
  const ext = extname(src).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;

  const dest = src.replace(/\.(png|jpe?g)$/i, '.webp');
  const isProduct = src.includes('products');

  try {
    const srcStat = await stat(src);
    let pipeline = sharp(src);

    if (isProduct) {
      // Resize product images to max PRODUCT_MAX_WIDTH, keep aspect ratio
      pipeline = pipeline.resize({ width: PRODUCT_MAX_WIDTH, withoutEnlargement: true });
    }

    const info = await pipeline
      .webp({ quality: DEFAULT_QUALITY, effort: 4 })
      .toFile(dest);

    const saving = ((srcStat.size - info.size) / srcStat.size * 100).toFixed(1);
    console.log(
      `✓ ${basename(src).padEnd(45)} ${(srcStat.size/1024).toFixed(0).padStart(5)} KB → ${(info.size/1024).toFixed(0).padStart(5)} KB  (-${saving}%)`
    );
  } catch (err) {
    console.error(`✗ ${basename(src)}: ${err.message}`);
  }
}

const files = await getFiles(ASSETS_DIR);
const images = files.filter(f => /\.(png|jpe?g)$/i.test(f));
console.log(`Converting ${images.length} images in ${ASSETS_DIR}...\n`);

await Promise.all(images.map(convert));
console.log('\nDone! WebP files written alongside originals.');
