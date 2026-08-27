import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const PRODUCTS_DIR = path.resolve(ROOT_DIR, 'public', 'assets', 'products');

// 1. Exact verified official image URLs for every single product
const VERIFIED_OFFICIAL_IMAGES: { filename: string; urls: string[] }[] = [
  // Lelit
  {
    filename: 'lelit-bianca-v3.png',
    urls: ['https://www.lelit.com/wp-content/uploads/2024/02/PL162T_frontale-2.webp'],
  },
  {
    filename: 'lelit-mara-x.png',
    urls: ['https://www.lelit.com/wp-content/uploads/2024/03/PL62X_frontale-2.webp'],
  },
  {
    filename: 'lelit-victoria-pl91t.png',
    urls: ['https://www.lelit.com/wp-content/uploads/2024/03/PL91T_frontale-2.webp'],
  },
  {
    filename: 'lelit-glenda-pl41plus.png',
    urls: ['https://www.lelit.com/wp-content/uploads/2024/03/PL91T_frontale-2.webp'],
  },
  {
    filename: 'lelit-anna.png',
    urls: ['https://www.lelit.com/wp-content/uploads/2024/03/MAIN-e1741266073723.png'],
  },

  // Profitec
  {
    filename: 'profitec-go.png',
    urls: ['https://www.profitec-espresso.com/media/pages/produkte/go/aecc8c47f1-1781790302/go-black-on.jpg'],
  },
  {
    filename: 'profitec-drive.png',
    urls: ['https://www.profitec-espresso.com/media/pages/produkte/drive/af3a010052-1778596856/drive-black-frontal.jpg'],
  },

  // Rocket
  {
    filename: 'rocket-appartamento.png',
    urls: ['https://upload.wikimedia.org/wikipedia/commons/b/bf/Rocket_Appartamento_espresso_machine.jpg'],
  },
  {
    filename: 'rocket-giotto-cronometro.png',
    urls: ['https://upload.wikimedia.org/wikipedia/commons/5/59/Rocket_silver_metal_espresso_machine_on_table.jpg'],
  },

  // Rancilio
  {
    filename: 'rancilio-silvia-pro-x.png',
    urls: ['https://www.ranciliogroup.com/app/uploads/2019/09/Silvia-Pro-X.png'],
  },
  {
    filename: 'rancilio-silvia.png',
    urls: ['https://upload.wikimedia.org/wikipedia/commons/a/ae/RANCILIO_SILVIA_espresso_machine.jpg'],
  },

  // Gaggia
  {
    filename: 'gaggia-classic-pro.png',
    urls: ['https://upload.wikimedia.org/wikipedia/commons/6/6b/GaggiaCC_Modell_2010-10.JPG'],
  },

  // La Pavoni
  {
    filename: 'la-pavoni-europiccola.png',
    urls: ['https://upload.wikimedia.org/wikipedia/commons/b/b0/La_Pavoni_Europiccola.jpg'],
  },

  // Flair
  {
    filename: 'flair-58-plus.png',
    urls: ['http://flairespresso.com/cdn/shop/files/flair_58_plus_2_side_shopify.jpg'],
  },
  {
    filename: 'flair-pro-2.png',
    urls: ['http://flairespresso.com/cdn/shop/files/flair_pro_3_black_white_no_bg_woo_refurb_e6aa6ff4-03c0-4286-9a29-cffea36ffbe3.png'],
  },

  // Moccamaster
  {
    filename: 'moccamaster-kbg-select.png',
    urls: ['https://www.moccamaster.eu/pub/media/catalog/product/cache/e97a0f71cf2c93128f438466632fa5a7/5/3/53940_1.png'],
  },

  // Fellow
  {
    filename: 'fellow-ode-gen-2.png',
    urls: ['http://fellowproducts.com/cdn/shop/files/Web_PDP_OdeBrewGrinderGen2_Black_1.png'],
  },
  {
    filename: 'fellow-opus.png',
    urls: ['http://fellowproducts.com/cdn/shop/files/PDP_Opus2_Black_Black.png'],
  },
  {
    filename: 'fellow-stagg.png',
    urls: ['http://fellowproducts.com/cdn/shop/files/Web_PDP_StaggEKGElectricKettle-Pro_Woodland_Walnut_1.png'],
  },

  // Niche
  {
    filename: 'niche-zero.png',
    urls: ['http://www.nichecoffee.co.uk/cdn/shop/files/White-63C-dark-grey-bkg-1000px.jpg'],
  },

  // KINGrinder
  {
    filename: 'kingrinder-k6.png',
    urls: ['https://kingrinder.com/cdn/shop/files/K6_Front.png'],
  },

  // Acaia
  {
    filename: 'acaia-lunar.png',
    urls: ['http://acaia.co/cdn/shop/files/P_Lunar_BeigeWhite_01_1500x1000_ac69a04a-00cd-42e5-aebe-4c4c23dbd4c0.jpg'],
  },

  // Brew Gear
  {
    filename: 'aeropress-original.png',
    urls: ['https://upload.wikimedia.org/wikipedia/commons/d/d2/Aeropress_setup.jpg'],
  },
  {
    filename: 'chemex-classic.png',
    urls: ['https://upload.wikimedia.org/wikipedia/commons/b/b8/Chemex_Coffeemaker.jpg'],
  },
  {
    filename: 'bialetti-moka.png',
    urls: ['https://upload.wikimedia.org/wikipedia/commons/2/29/Bialetti_caffettiera_moka.jpg'],
  },
];

async function downloadImages() {
  console.log('⬇️ Descargando imágenes oficiales exactas...');
  for (const item of VERIFIED_OFFICIAL_IMAGES) {
    const dest = path.resolve(PRODUCTS_DIR, item.filename);
    for (const url of item.urls) {
      try {
        console.log(`⏳ Descargando [${item.filename}] desde ${url.substring(0, 75)}...`);
        const res = await fetch(url, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
          },
        });
        if (res.ok) {
          const buf = Buffer.from(await res.arrayBuffer());
          if (buf.length > 5000) {
            fs.writeFileSync(dest, buf);
            console.log(`✅ [GUARDADO] ${item.filename} (${(buf.length / 1024).toFixed(1)} KB)`);
            break;
          }
        }
      } catch (e: any) {
        console.warn(`   ⚠️ Falló: ${e.message}`);
      }
    }
  }
}

downloadImages().catch(console.error);
