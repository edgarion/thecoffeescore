import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const PRODUCTS_DIR = path.resolve(ROOT_DIR, 'public', 'assets', 'products');

interface DirectProductImage {
  filename: string;
  sourceUrls: string[];
  wikiQuery?: string;
}

const EQUIPMENT_MEDIA: DirectProductImage[] = [
  // --- SAGE / BREVILLE ---
  {
    filename: 'sage-barista-express.png',
    sourceUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Espresso_machine_%28Breville_Barista_Express%29.jpg/1200px-Espresso_machine_%28Breville_Barista_Express%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/8/87/Espresso_machine_%28Breville_Barista_Express%29.jpg',
      'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=1200&q=85',
    ],
    wikiQuery: 'Breville Barista Express',
  },
  {
    filename: 'sage-barista-touch.png',
    sourceUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Breville_Barista_Touch.jpg/1200px-Breville_Barista_Touch.jpg',
      'https://images.unsplash.com/photo-1584286595398-a59f21d313f5?w=1200&q=85',
    ],
    wikiQuery: 'Breville Touch espresso',
  },
  {
    filename: 'sage-dual-boiler.png',
    sourceUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Breville_Dual_Boiler_espresso_machine.jpg/1200px-Breville_Dual_Boiler_espresso_machine.jpg',
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=1200&q=85',
    ],
    wikiQuery: 'Breville Dual Boiler',
  },

  // --- RANCILIO ---
  {
    filename: 'rancilio-silvia.png',
    sourceUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/4/4f/RANCILIO_SILVIA_espresso_machine.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/RANCILIO_SILVIA_espresso_machine.jpg/1200px-RANCILIO_SILVIA_espresso_machine.jpg',
    ],
    wikiQuery: 'Rancilio Silvia espresso',
  },
  {
    filename: 'rancilio-silvia-pro-x.png',
    sourceUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/RANCILIO_SILVIA_espresso_machine.jpg/1200px-RANCILIO_SILVIA_espresso_machine.jpg',
    ],
    wikiQuery: 'Rancilio Silvia',
  },

  // --- GAGGIA ---
  {
    filename: 'gaggia-classic-pro.png',
    sourceUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/e/eb/GaggiaCC_Modell_2010-10.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/GaggiaCC_Modell_2010-10.JPG/1200px-GaggiaCC_Modell_2010-10.JPG',
    ],
    wikiQuery: 'Gaggia Classic',
  },

  // --- LA PAVONI ---
  {
    filename: 'la-pavoni-europiccola.png',
    sourceUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/1a/La_Pavoni_Europiccola.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/La_Pavoni_Europiccola.jpg/1200px-La_Pavoni_Europiccola.jpg',
    ],
    wikiQuery: 'La Pavoni Europiccola',
  },

  // --- LA MARZOCCO ---
  {
    filename: 'la-marzocco-linea-micra.png',
    sourceUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/La_Marzocco_GB5.jpg/1200px-La_Marzocco_GB5.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/La_Marzocco_FB70.jpg/1200px-La_Marzocco_FB70.jpg',
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=1200&q=85',
    ],
    wikiQuery: 'La Marzocco',
  },

  // --- ROCKET ESPRESSO ---
  {
    filename: 'rocket-appartamento.png',
    sourceUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/E61_espresso_machine_group.jpg/1200px-E61_espresso_machine_group.jpg',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200&q=85',
    ],
    wikiQuery: 'Rocket Espresso',
  },
  {
    filename: 'rocket-giotto-cronometro.png',
    sourceUrls: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200&q=85',
    ],
    wikiQuery: 'E61 espresso machine',
  },

  // --- LELIT ---
  {
    filename: 'lelit-mara-x.png',
    sourceUrls: [
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=1200&q=85',
    ],
    wikiQuery: 'Lelit espresso',
  },
  {
    filename: 'lelit-bianca-v3.png',
    sourceUrls: [
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=1200&q=85',
    ],
    wikiQuery: 'Dual boiler espresso machine',
  },
  {
    filename: 'lelit-victoria-pl91t.png',
    sourceUrls: [
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=1200&q=85',
    ],
  },
  {
    filename: 'lelit-glenda-pl41plus.png',
    sourceUrls: [
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=1200&q=85',
    ],
  },

  // --- PROFITEC ---
  {
    filename: 'profitec-go.png',
    sourceUrls: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200&q=85',
    ],
    wikiQuery: 'Profitec espresso machine',
  },
  {
    filename: 'profitec-drive.png',
    sourceUrls: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200&q=85',
    ],
  },

  // --- DE'LONGHI ---
  {
    filename: 'delonghi-dedica.png',
    sourceUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/DeLonghi_Dedica_EC680.jpg/1200px-DeLonghi_Dedica_EC680.jpg',
      'https://images.unsplash.com/photo-1584286595398-a59f21d313f5?w=1200&q=85',
    ],
    wikiQuery: 'DeLonghi Dedica',
  },
  {
    filename: 'delonghi-magnifica-s.png',
    sourceUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/De%27Longhi_Magnifica_S_ECAM_22.110.B.jpg/1200px-De%27Longhi_Magnifica_S_ECAM_22.110.B.jpg',
      'https://images.unsplash.com/photo-1584286595398-a59f21d313f5?w=1200&q=85',
    ],
    wikiQuery: 'DeLonghi Magnifica',
  },
  {
    filename: 'delonghi-specialista-arte.png',
    sourceUrls: [
      'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=1200&q=85',
    ],
  },

  // --- FLAIR ESPRESSO ---
  {
    filename: 'flair-58-plus.png',
    sourceUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Manual_lever_espresso_maker.jpg/1200px-Manual_lever_espresso_maker.jpg',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200&q=85',
    ],
    wikiQuery: 'Flair espresso maker',
  },
  {
    filename: 'flair-pro-2.png',
    sourceUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Manual_lever_espresso_maker.jpg/1200px-Manual_lever_espresso_maker.jpg',
    ],
  },

  // --- CAFELAT ROBOT ---
  {
    filename: 'cafelat-robot.png',
    sourceUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Manual_lever_espresso_maker.jpg/1200px-Manual_lever_espresso_maker.jpg',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200&q=85',
    ],
    wikiQuery: 'Cafelat Robot',
  },

  // --- ASCASO ---
  {
    filename: 'ascaso-steel-duo-pid.png',
    sourceUrls: [
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=1200&q=85',
    ],
    wikiQuery: 'Ascaso Steel Duo',
  },

  // --- MOCCAMASTER ---
  {
    filename: 'moccamaster-kbg-select.png',
    sourceUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/6/60/Moccamaster.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Moccamaster.JPG/1200px-Moccamaster.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/7/75/Technivorm_Moccamaster_K741.64B.jpg',
    ],
    wikiQuery: 'Technivorm Moccamaster',
  },

  // --- GRINDERS (MOLINOS) ---
  {
    filename: 'fellow-ode-gen-2.png',
    sourceUrls: [
      'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?w=1200&q=85',
    ],
    wikiQuery: 'Fellow Ode coffee grinder',
  },
  {
    filename: 'fellow-opus.png',
    sourceUrls: [
      'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?w=1200&q=85',
    ],
  },
  {
    filename: 'baratza-encore-esp.png',
    sourceUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Baratza_Encore_Coffee_Grinder.jpg/1200px-Baratza_Encore_Coffee_Grinder.jpg',
      'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?w=1200&q=85',
    ],
    wikiQuery: 'Baratza Encore',
  },
  {
    filename: 'baratza-sette-270.png',
    sourceUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Baratza_Encore_Coffee_Grinder.jpg/1200px-Baratza_Encore_Coffee_Grinder.jpg',
    ],
    wikiQuery: 'Baratza Sette',
  },
  {
    filename: 'df64-gen-2.png',
    sourceUrls: [
      'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?w=1200&q=85',
    ],
    wikiQuery: 'single dose coffee grinder',
  },
  {
    filename: 'df64v.png',
    sourceUrls: [
      'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?w=1200&q=85',
    ],
  },
  {
    filename: 'niche-zero.png',
    sourceUrls: [
      'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?w=1200&q=85',
    ],
    wikiQuery: 'Niche Zero coffee grinder',
  },
  {
    filename: 'mahlkonig-x54.png',
    sourceUrls: [
      'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?w=1200&q=85',
    ],
    wikiQuery: 'Mahlkonig grinder',
  },
  {
    filename: 'eureka-mignon-silenzio.png',
    sourceUrls: [
      'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?w=1200&q=85',
    ],
    wikiQuery: 'Eureka Mignon grinder',
  },
  {
    filename: 'eureka-mignon-zero.png',
    sourceUrls: [
      'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?w=1200&q=85',
    ],
  },
  {
    filename: 'eureka-oro-single-dose.png',
    sourceUrls: [
      'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?w=1200&q=85',
    ],
  },
  {
    filename: 'timemore-c3-pro.png',
    sourceUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Hand_coffee_grinder.jpg/1200px-Hand_coffee_grinder.jpg',
      'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?w=1200&q=85',
    ],
    wikiQuery: 'manual coffee grinder',
  },
  {
    filename: 'timemore-sculptor-078s.png',
    sourceUrls: [
      'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?w=1200&q=85',
    ],
  },
  {
    filename: '1zpresso-k-ultra.png',
    sourceUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Hand_coffee_grinder.jpg/1200px-Hand_coffee_grinder.jpg',
    ],
    wikiQuery: '1Zpresso hand grinder',
  },
];

async function fetchFromWiki(query: string): Promise<string | null> {
  try {
    const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=6&srlimit=3&format=json`;
    const res = await fetch(searchUrl, {
      headers: { 'User-Agent': 'TheCoffeeScore-App/1.0 (contact@thecoffeescore.es)' },
    });
    const data = await res.json();
    if (data.query?.search && data.query.search.length > 0) {
      const title = data.query.search[0].title;
      const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&format=json`;
      const infoRes = await fetch(infoUrl, {
        headers: { 'User-Agent': 'TheCoffeeScore-App/1.0 (contact@thecoffeescore.es)' },
      });
      const infoData = await infoRes.json();
      const pages = infoData.query?.pages;
      if (pages) {
        const key = Object.keys(pages)[0];
        return pages[key]?.imageinfo?.[0]?.url || null;
      }
    }
  } catch (err) {
    // Ignore and fallback
  }
  return null;
}

async function downloadSingleImage(target: DirectProductImage): Promise<boolean> {
  const destPath = path.resolve(PRODUCTS_DIR, target.filename);

  const candidateUrls = [...target.sourceUrls];
  if (target.wikiQuery) {
    const wikiUrl = await fetchFromWiki(target.wikiQuery);
    if (wikiUrl) candidateUrls.unshift(wikiUrl);
  }

  for (const url of candidateUrls) {
    try {
      console.log(`⏳ Descargando [${target.filename}] desde: ${url.substring(0, 80)}...`);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);

      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        },
      });
      clearTimeout(timeoutId);

      if (response.ok) {
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        if (buffer.length > 4000) {
          fs.writeFileSync(destPath, buffer);
          console.log(`✅ [GUARDADO REAL] ${target.filename} (${(buffer.length / 1024).toFixed(1)} KB)`);
          return true;
        }
      }
    } catch (err: any) {
      console.warn(`   ⚠️ Falló descarga de ${url}: ${err.message}`);
    }
  }

  console.error(`❌ Falló la descarga de todas las fuentes para ${target.filename}`);
  return false;
}

async function run() {
  console.log('🚀 Iniciando adquisición de fotos reales de máquinas y molinos...');
  let count = 0;
  for (const target of EQUIPMENT_MEDIA) {
    const ok = await downloadSingleImage(target);
    if (ok) count++;
  }
  console.log(`\n🎉 PROCESO COMPLETADO: ${count}/${EQUIPMENT_MEDIA.length} imágenes reales descargadas y guardadas en public/assets/products/`);
}

run().catch(console.error);
