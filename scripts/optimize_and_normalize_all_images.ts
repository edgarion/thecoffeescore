import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PRODUCTS_DIR = path.resolve('public/assets/products');

async function processAllImages() {
  console.log('🔄 Optimizando y normalizando todas las imágenes en public/assets/products...');
  const files = fs.readdirSync(PRODUCTS_DIR);

  for (const filename of files) {
    if (!filename.endsWith('.png') && !filename.endsWith('.jpg') && !filename.endsWith('.webp')) continue;

    const filePath = path.join(PRODUCTS_DIR, filename);
    const tempPath = path.join(PRODUCTS_DIR, `temp_${filename}`);

    try {
      const buffer = fs.readFileSync(filePath);
      
      // Use sharp to decode whatever input (JPEG, WEBP, PNG, TIFF, AVIF) and output clean standard PNG
      const optimizedBuffer = await sharp(buffer)
        .resize(800, 800, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .png({ quality: 85, compressionLevel: 8 })
        .toBuffer();

      fs.writeFileSync(filePath, optimizedBuffer);
      console.log(`✅ [OPTIMIZADO] ${filename.padEnd(30)} -> ${(optimizedBuffer.length / 1024).toFixed(1)} KB (PNG válido)`);
    } catch (err: any) {
      console.error(`❌ Error procesando ${filename}: ${err.message}`);
    }
  }

  console.log('🎉 Todas las imágenes han sido normalizadas a PNGs estándares de alta velocidad.');
}

processAllImages().catch(console.error);
