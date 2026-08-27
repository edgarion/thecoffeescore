import fs from 'fs';
import path from 'path';

const PRODUCTS_DIR = path.resolve('public/assets/products');

const SAGE_DELONGHI_ASSETS: { filename: string; urls: string[] }[] = [
  {
    filename: 'sage-barista-express.png',
    urls: [
      'https://assets.breville.com/cdn-cgi/image/width=1200,format=auto/BES875/BES875BSS4EEU1_HERO_1500x1500.png',
      'https://assets.breville.com/cdn-cgi/image/width=1200,format=auto/BES875/BES875BSS1BCA1_HERO_1500x1500.png',
    ],
  },
  {
    filename: 'sage-barista-touch.png',
    urls: [
      'https://assets.breville.com/cdn-cgi/image/width=1200,format=auto/SES880/SES880BSS4EEU1_HERO_1500x1500.png',
      'https://assets.breville.com/cdn-cgi/image/width=1200,format=auto/BES880/BES880BSS1BCA1_HERO_1500x1500.png',
    ],
  },
  {
    filename: 'sage-dual-boiler.png',
    urls: [
      'https://assets.breville.com/cdn-cgi/image/width=1200,format=auto/SES920/SES920BSS4EEU1_HERO_1500x1500.png',
      'https://assets.breville.com/cdn-cgi/image/width=1200,format=auto/BES920/BES920XL_HERO_1500x1500.png',
    ],
  },
  {
    filename: 'sage-bambino.png',
    urls: [
      'https://assets.breville.com/cdn-cgi/image/width=1200,format=auto/SES500/SES500BSS4EEU1_HERO_1500x1500.png',
      'https://assets.breville.com/cdn-cgi/image/width=1200,format=auto/SES450/SES450BSS4EEU1_HERO_1500x1500.png',
    ],
  },
  {
    filename: 'baratza-encore-esp.png',
    urls: [
      'https://assets.breville.com/cdn-cgi/image/width=1200,format=auto/ZCG495/ZCG495BLK0EEU1_HERO_1500x1500.png',
      'https://assets.breville.com/cdn-cgi/image/width=1200,format=auto/ZCG495/ZCG495WHT0ENA1_HERO_1500x1500.png',
    ],
  },
  {
    filename: 'rocket-appartamento.png',
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Rocket_Appartamento_espresso_machine.jpg/1200px-Rocket_Appartamento_espresso_machine.jpg',
    ],
  },
  {
    filename: 'rancilio-silvia.png',
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/RANCILIO_SILVIA_espresso_machine.jpg/1200px-RANCILIO_SILVIA_espresso_machine.jpg',
    ],
  },
];

async function run() {
  for (const item of SAGE_DELONGHI_ASSETS) {
    const dest = path.join(PRODUCTS_DIR, item.filename);
    for (const url of item.urls) {
      try {
        console.log(`Descargando ${item.filename} desde ${url}...`);
        const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        if (res.ok) {
          const buf = Buffer.from(await res.arrayBuffer());
          if (buf.length > 5000) {
            fs.writeFileSync(dest, buf);
            console.log(`✅ [GUARDADO] ${item.filename} (${(buf.length / 1024).toFixed(1)} KB)`);
            break;
          }
        }
      } catch (e: any) {
        console.warn(`  ⚠️ ${e.message}`);
      }
    }
  }
}

run();
