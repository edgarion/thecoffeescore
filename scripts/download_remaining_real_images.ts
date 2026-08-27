import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const PRODUCTS_DIR = path.resolve(ROOT_DIR, 'public', 'assets', 'products');

const DIRECT_URLS: { [filename: string]: string } = {
  'gaggia-classic-pro.png': 'https://upload.wikimedia.org/wikipedia/commons/6/6b/GaggiaCC_Modell_2010-10.JPG',
  'la-pavoni-europiccola.png': 'https://upload.wikimedia.org/wikipedia/commons/b/b0/La_Pavoni_Europiccola.jpg',
  'moccamaster-kbg-select.png': 'https://upload.wikimedia.org/wikipedia/commons/8/83/Technivorm_Moccamaster_K741.64B.jpg',
  'flair-pro-2.png': 'https://upload.wikimedia.org/wikipedia/commons/9/90/Manual_lever_espresso_maker.jpg',
  'baratza-sette-270.png': 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Baratza_Encore_burr_coffee_grinder_hopper_and_silicone_gasket.jpg',
  '1zpresso-k-ultra.png': 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Hand_coffee_grinder.jpg',
  '1zpresso-j-max.png': 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Manual_coffee_grinder_%284488347895%29.jpg',
  'chemex-classic.png': 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Chemex_Coffeemaker.jpg',
  'aeropress-original.png': 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Aeropress_setup.jpg',
  'bialetti-moka.png': 'https://upload.wikimedia.org/wikipedia/commons/2/29/Bialetti_caffettiera_moka.jpg',
};

async function download() {
  for (const [filename, url] of Object.entries(DIRECT_URLS)) {
    const dest = path.resolve(PRODUCTS_DIR, filename);
    try {
      console.log(`Downloading ${filename} from ${url}...`);
      const res = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (contact@thecoffeescore.es)' }
      });
      if (res.ok) {
        const buf = Buffer.from(await res.arrayBuffer());
        if (buf.length > 2000) {
          fs.writeFileSync(dest, buf);
          console.log(`✅ Saved ${filename} (${(buf.length / 1024).toFixed(1)} KB)`);
        }
      }
    } catch (e: any) {
      console.error(`Failed ${filename}:`, e.message);
    }
  }
}

download().catch(console.error);
