import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const PRODUCTS_DIR = path.resolve(ROOT_DIR, 'public', 'assets', 'products');

interface SearchProduct {
  filename: string;
  name: string;
  query: string;
  backupUrls?: string[];
}

const PRODUCTS_TO_SEARCH: SearchProduct[] = [
  // Máquinas
  {
    filename: 'sage-barista-express.png',
    name: 'Sage Barista Express SES875',
    query: 'Sage Barista Express cafetera espresso',
    backupUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Espresso_machine_%28Breville_Barista_Express%29.jpg/1200px-Espresso_machine_%28Breville_Barista_Express%29.jpg'],
  },
  {
    filename: 'sage-barista-touch.png',
    name: 'Sage Barista Touch SES880',
    query: 'Sage Barista Touch cafetera espresso',
  },
  {
    filename: 'sage-dual-boiler.png',
    name: 'Sage Dual Boiler SES920',
    query: 'Sage Dual Boiler cafetera espresso',
  },
  {
    filename: 'sage-bambino.png',
    name: 'Sage Bambino Plus SES500',
    query: 'Sage Bambino Plus cafetera espresso',
  },
  {
    filename: 'lelit-bianca-v3.png',
    name: 'Lelit Bianca V3 PL162T',
    query: 'Lelit Bianca V3 espresso machine',
  },
  {
    filename: 'lelit-mara-x.png',
    name: 'Lelit Mara X PL62X',
    query: 'Lelit Mara X espresso machine',
  },
  {
    filename: 'lelit-victoria-pl91t.png',
    name: 'Lelit Victoria PL91T',
    query: 'Lelit Victoria PL91T espresso',
  },
  {
    filename: 'lelit-glenda-pl41plus.png',
    name: 'Lelit Glenda PL41PLUS',
    query: 'Lelit Glenda PL41PLUS espresso',
  },
  {
    filename: 'lelit-anna.png',
    name: 'Lelit Anna PL41TEM',
    query: 'Lelit Anna PL41TEM cafetera',
  },
  {
    filename: 'gaggia-classic-pro.png',
    name: 'Gaggia Classic Pro',
    query: 'Gaggia Classic Pro espresso',
    backupUrls: ['https://upload.wikimedia.org/wikipedia/commons/6/6b/GaggiaCC_Modell_2010-10.JPG'],
  },
  {
    filename: 'rancilio-silvia.png',
    name: 'Rancilio Silvia',
    query: 'Rancilio Silvia espresso machine',
    backupUrls: ['https://upload.wikimedia.org/wikipedia/commons/a/ae/RANCILIO_SILVIA_espresso_machine.jpg'],
  },
  {
    filename: 'rancilio-silvia-pro-x.png',
    name: 'Rancilio Silvia Pro X',
    query: 'Rancilio Silvia Pro X espresso',
    backupUrls: ['https://www.ranciliogroup.com/app/uploads/2019/09/Silvia-Pro-X.png'],
  },
  {
    filename: 'delonghi-dedica.png',
    name: "De'Longhi Dedica EC685",
    query: 'DeLonghi Dedica EC685 cafetera',
  },
  {
    filename: 'delonghi-specialista.png',
    name: "De'Longhi Specialista Prestigio",
    query: 'DeLonghi La Specialista Prestigio cafetera',
  },
  {
    filename: 'delonghi-specialista-arte.png',
    name: "De'Longhi Specialista Arte",
    query: 'DeLonghi La Specialista Arte EC9155',
  },
  {
    filename: 'delonghi-magnifica-s.png',
    name: "De'Longhi Magnifica S",
    query: 'DeLonghi Magnifica S ECAM22.110.B',
  },
  {
    filename: 'profitec-go.png',
    name: 'Profitec GO',
    query: 'Profitec GO espresso machine',
  },
  {
    filename: 'profitec-drive.png',
    name: 'Profitec Drive',
    query: 'Profitec Drive espresso machine',
  },
  {
    filename: 'rocket-appartamento.png',
    name: 'Rocket Appartamento',
    query: 'Rocket Appartamento espresso machine',
    backupUrls: ['https://upload.wikimedia.org/wikipedia/commons/b/bf/Rocket_Appartamento_espresso_machine.jpg'],
  },
  {
    filename: 'rocket-giotto-cronometro.png',
    name: 'Rocket Giotto Cronometro R',
    query: 'Rocket Giotto Cronometro R espresso',
  },
  {
    filename: 'la-marzocco-linea-micra.png',
    name: 'La Marzocco Linea Micra',
    query: 'La Marzocco Linea Micra espresso machine',
  },
  {
    filename: 'flair-58-plus.png',
    name: 'Flair 58 Plus',
    query: 'Flair 58 Plus manual espresso',
    backupUrls: ['http://flairespresso.com/cdn/shop/files/flair_58_plus_2_side_shopify.jpg'],
  },
  {
    filename: 'flair-pro-2.png',
    name: 'Flair PRO 2',
    query: 'Flair PRO 2 manual espresso',
    backupUrls: ['http://flairespresso.com/cdn/shop/files/flair_pro_3_black_white_no_bg_woo_refurb_e6aa6ff4-03c0-4286-9a29-cffea36ffbe3.png'],
  },
  {
    filename: 'cafelat-robot.png',
    name: 'Cafelat Robot Manual',
    query: 'Cafelat Robot manual espresso maker',
  },
  {
    filename: 'la-pavoni-europiccola.png',
    name: 'La Pavoni Europiccola',
    query: 'La Pavoni Europiccola cafetera',
    backupUrls: ['https://upload.wikimedia.org/wikipedia/commons/b/b0/La_Pavoni_Europiccola.jpg'],
  },
  {
    filename: 'ascaso-steel-duo-pid.png',
    name: 'Ascaso Steel Duo PID',
    query: 'Ascaso Steel Duo PID espresso machine',
  },
  {
    filename: 'moccamaster-kbg-select.png',
    name: 'Technivorm Moccamaster KBG Select',
    query: 'Technivorm Moccamaster KBG Select',
    backupUrls: ['https://upload.wikimedia.org/wikipedia/commons/8/83/Technivorm_Moccamaster_K741.64B.jpg'],
  },

  // Molinos
  {
    filename: 'eureka-specialita.png',
    name: 'Eureka Mignon Specialita',
    query: 'Eureka Mignon Specialita molinillo',
  },
  {
    filename: 'eureka-mignon-silenzio.png',
    name: 'Eureka Mignon Silenzio',
    query: 'Eureka Mignon Silenzio molinillo',
  },
  {
    filename: 'eureka-mignon-zero.png',
    name: 'Eureka Mignon Zero',
    query: 'Eureka Mignon Zero single dose molinillo',
  },
  {
    filename: 'eureka-oro-single-dose.png',
    name: 'Eureka Oro Mignon Single Dose',
    query: 'Eureka Oro Mignon Single Dose molinillo',
  },
  {
    filename: 'fellow-ode-gen-2.png',
    name: 'Fellow Ode Gen 2',
    query: 'Fellow Ode Gen 2 brew grinder',
  },
  {
    filename: 'fellow-opus.png',
    name: 'Fellow Opus Conical Burr',
    query: 'Fellow Opus Conical Burr Grinder',
    backupUrls: ['http://fellowproducts.com/cdn/shop/files/PDP_Opus2_Black_Black.png'],
  },
  {
    filename: 'baratza-encore-esp.png',
    name: 'Baratza Encore ESP',
    query: 'Baratza Encore ESP molinillo cafe',
  },
  {
    filename: 'baratza-sette-270.png',
    name: 'Baratza Sette 270',
    query: 'Baratza Sette 270 molinillo cafe',
  },
  {
    filename: 'niche-zero.png',
    name: 'Niche Zero Grinder',
    query: 'Niche Zero coffee grinder white',
    backupUrls: ['http://www.nichecoffee.co.uk/cdn/shop/files/White-63C-dark-grey-bkg-1000px.jpg'],
  },
  {
    filename: 'kingrinder-k6.png',
    name: 'KINGrinder K6',
    query: 'KINGrinder K6 manual coffee grinder',
    backupUrls: ['https://kingrinder.com/cdn/shop/files/K6_Front.png'],
  },
  {
    filename: 'comandante-c40.png',
    name: 'Comandante C40 MK4',
    query: 'Comandante C40 MK4 Nitro Blade molinillo',
  },
  {
    filename: 'timemore-c3-pro.png',
    name: 'Timemore Chestnut C3 PRO',
    query: 'Timemore Chestnut C3 PRO molinillo',
  },
  {
    filename: 'timemore-sculptor-078s.png',
    name: 'Timemore Sculptor 078s',
    query: 'Timemore Sculptor 078s electric coffee grinder',
  },
];

async function findImageFromSearch(query: string): Promise<string | null> {
  try {
    const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query + ' product white background')}`;
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    });

    if (!res.ok) return null;
    const html = await res.text();
    const $ = cheerio.load(html);

    // Look for image thumbnails in results
    const images: string[] = [];
    $('img').each((_, el) => {
      const src = $(el).attr('src') || $(el).attr('data-src');
      if (src && (src.startsWith('http') || src.startsWith('//'))) {
        images.push(src.startsWith('//') ? `https:${src}` : src);
      }
    });

    for (const img of images) {
      if (!img.includes('duckduckgo.com/assets') && !img.includes('favicon')) {
        return img;
      }
    }
  } catch {}
  return null;
}

async function downloadUrl(url: string, destPath: string): Promise<boolean> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
      },
    });
    clearTimeout(timeout);

    if (res.ok) {
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length > 5000) {
        fs.writeFileSync(destPath, buf);
        console.log(`✅ [GUARDADO] ${path.basename(destPath)} (${(buf.length / 1024).toFixed(1)} KB)`);
        return true;
      }
    }
  } catch (err: any) {
    console.warn(`   ⚠️ Falló descarga desde ${url}: ${err.message}`);
  }
  return false;
}

async function run() {
  console.log('🚀 Iniciando búsqueda e indexación de fotos reales de alta fidelidad...');
  let successCount = 0;

  for (const item of PRODUCTS_TO_SEARCH) {
    const destPath = path.resolve(PRODUCTS_DIR, item.filename);
    console.log(`\n🔍 Buscando foto real para: ${item.name}...`);

    let downloaded = false;

    // 1. Try backup direct verified URLs first if present
    if (item.backupUrls) {
      for (const backupUrl of item.backupUrls) {
        downloaded = await downloadUrl(backupUrl, destPath);
        if (downloaded) break;
      }
    }

    // 2. Try search if not downloaded yet
    if (!downloaded) {
      const searchUrl = await findImageFromSearch(item.query);
      if (searchUrl) {
        console.log(`   ➔ Encontrada imagen vía búsqueda: ${searchUrl.substring(0, 70)}...`);
        downloaded = await downloadUrl(searchUrl, destPath);
      }
    }

    if (downloaded) {
      successCount++;
    } else {
      console.error(`❌ No se encontró imagen adecuada para ${item.name}`);
    }
  }

  console.log(`\n📊 Total procesados: ${successCount}/${PRODUCTS_TO_SEARCH.length} imágenes obtenidas.`);
}

run().catch(console.error);
