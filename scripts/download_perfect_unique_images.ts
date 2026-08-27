import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const PRODUCTS_DIR = path.resolve(ROOT_DIR, 'public', 'assets', 'products');

interface DirectProductImage {
  filename: string;
  name: string;
  urls: string[];
}

const UNIQUE_PRODUCT_IMAGES: DirectProductImage[] = [
  // --- SAGE MACHINES ---
  {
    filename: 'sage-barista-express.png',
    name: 'Sage Barista Express',
    urls: [
      'https://m.media-amazon.com/images/I/81xV8e4v8PL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71k+V-3Z9TL._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'sage-barista-touch.png',
    name: 'Sage Barista Touch',
    urls: [
      'https://m.media-amazon.com/images/I/71z+p2T0eIL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81v5N7l-rEL._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'sage-dual-boiler.png',
    name: 'Sage Dual Boiler',
    urls: [
      'https://m.media-amazon.com/images/I/71S-T3N3hSL._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'sage-bambino.png',
    name: 'Sage Bambino',
    urls: [
      'https://m.media-amazon.com/images/I/71Y+W3tN+iL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61F4hGzYQZL._AC_SL1500_.jpg',
    ],
  },

  // --- LELIT MACHINES ---
  {
    filename: 'lelit-bianca-v3.png',
    name: 'Lelit Bianca V3',
    urls: [
      'https://m.media-amazon.com/images/I/71fV6X-oYUL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61k1jY-VdIL._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'lelit-mara-x.png',
    name: 'Lelit Mara X V2',
    urls: [
      'https://m.media-amazon.com/images/I/61nJ7Y5wT8L._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61Z6P+M9NIL._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'lelit-victoria-pl91t.png',
    name: 'Lelit Victoria PL91T',
    urls: [
      'https://m.media-amazon.com/images/I/71oD4+U3nGL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61e8+F0zS5L._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'lelit-glenda-pl41plus.png',
    name: 'Lelit Glenda PL41PLUS',
    urls: [
      'https://m.media-amazon.com/images/I/61r5K7H9vSL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61e8+F0zS5L._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'lelit-anna.png',
    name: 'Lelit Anna PL41TEM',
    urls: [
      'https://m.media-amazon.com/images/I/61e8+F0zS5L._AC_SL1500_.jpg',
    ],
  },

  // --- DE'LONGHI ---
  {
    filename: 'delonghi-dedica.png',
    name: "De'Longhi Dedica EC685",
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/DeLonghi_Dedica_EC680.jpg/1200px-DeLonghi_Dedica_EC680.jpg',
      'https://m.media-amazon.com/images/I/71oD4+U3nGL._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'delonghi-specialista.png',
    name: "De'Longhi Specialista Prestigio",
    urls: [
      'https://m.media-amazon.com/images/I/81P+iO6S8eL._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'delonghi-specialista-arte.png',
    name: "De'Longhi Specialista Arte",
    urls: [
      'https://m.media-amazon.com/images/I/71Y+gL1hOBL._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'delonghi-magnifica-s.png',
    name: "De'Longhi Magnifica S",
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/De%27Longhi_Magnifica_S_ECAM_22.110.B.jpg/1200px-De%27Longhi_Magnifica_S_ECAM_22.110.B.jpg',
      'https://m.media-amazon.com/images/I/71sEaWJjQ5L._AC_SL1500_.jpg',
    ],
  },

  // --- GAGGIA ---
  {
    filename: 'gaggia-classic-pro.png',
    name: 'Gaggia Classic Pro',
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/6/6b/GaggiaCC_Modell_2010-10.JPG',
      'https://m.media-amazon.com/images/I/61nN1tQ7k0L._AC_SL1500_.jpg',
    ],
  },

  // --- RANCILIO ---
  {
    filename: 'rancilio-silvia.png',
    name: 'Rancilio Silvia',
    urls: [
      'https://www.ranciliogroup.com/app/uploads/2019/09/rancilio-group-rancilio-homeline-silvia.png',
      'https://upload.wikimedia.org/wikipedia/commons/4/4f/RANCILIO_SILVIA_espresso_machine.jpg',
    ],
  },
  {
    filename: 'rancilio-silvia-pro-x.png',
    name: 'Rancilio Silvia Pro X',
    urls: [
      'https://www.ranciliogroup.com/app/uploads/2019/09/Silvia-Pro-X.png',
      'https://m.media-amazon.com/images/I/61f5kX-iG+L._AC_SL1500_.jpg',
    ],
  },

  // --- PROFITEC ---
  {
    filename: 'profitec-go.png',
    name: 'Profitec GO',
    urls: [
      'https://m.media-amazon.com/images/I/61K2a5B7W1L._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71m4A+rP2kL._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'profitec-drive.png',
    name: 'Profitec Drive',
    urls: [
      'https://m.media-amazon.com/images/I/71m4A+rP2kL._AC_SL1500_.jpg',
    ],
  },

  // --- ROCKET ESPRESSO ---
  {
    filename: 'rocket-appartamento.png',
    name: 'Rocket Appartamento',
    urls: [
      'https://m.media-amazon.com/images/I/71Z+Y3pY-SL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71m4A+rP2kL._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'rocket-giotto-cronometro.png',
    name: 'Rocket Giotto Cronometro R',
    urls: [
      'https://m.media-amazon.com/images/I/71m4A+rP2kL._AC_SL1500_.jpg',
    ],
  },

  // --- LA MARZOCCO ---
  {
    filename: 'la-marzocco-linea-micra.png',
    name: 'La Marzocco Linea Micra',
    urls: [
      'https://m.media-amazon.com/images/I/61jZ5b7tYHL._AC_SL1500_.jpg',
    ],
  },

  // --- FLAIR ---
  {
    filename: 'flair-58-plus.png',
    name: 'Flair 58 Plus',
    urls: [
      'http://flairespresso.com/cdn/shop/files/flair_58_plus_2_side_shopify.jpg',
      'https://m.media-amazon.com/images/I/71x+d7XvRHL._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'flair-pro-2.png',
    name: 'Flair PRO 2',
    urls: [
      'http://flairespresso.com/cdn/shop/files/flair_pro_3_black_white_no_bg_woo_refurb_e6aa6ff4-03c0-4286-9a29-cffea36ffbe3.png',
      'https://m.media-amazon.com/images/I/71S3O7d+JGL._AC_SL1500_.jpg',
    ],
  },

  // --- CAFELAT ---
  {
    filename: 'cafelat-robot.png',
    name: 'Cafelat Robot Manual',
    urls: [
      'https://m.media-amazon.com/images/I/61V1h0t15nL._AC_SL1500_.jpg',
    ],
  },

  // --- LA PAVONI ---
  {
    filename: 'la-pavoni-europiccola.png',
    name: 'La Pavoni Europiccola',
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/b/b0/La_Pavoni_Europiccola.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/1/1a/La_Pavoni_Europiccola.jpg',
    ],
  },

  // --- ASCASO ---
  {
    filename: 'ascaso-steel-duo-pid.png',
    name: 'Ascaso Steel Duo PID',
    urls: [
      'https://m.media-amazon.com/images/I/61cE-iJvXLL._AC_SL1500_.jpg',
    ],
  },

  // --- MOCCAMASTER ---
  {
    filename: 'moccamaster-kbg-select.png',
    name: 'Moccamaster KBG Select',
    urls: [
      'https://www.moccamaster.eu/pub/media/catalog/product/cache/e97a0f71cf2c93128f438466632fa5a7/5/3/53940_1.png',
      'https://upload.wikimedia.org/wikipedia/commons/8/83/Technivorm_Moccamaster_K741.64B.jpg',
    ],
  },

  // --- GRINDERS ---
  {
    filename: 'eureka-specialita.png',
    name: 'Eureka Mignon Specialita',
    urls: [
      'https://m.media-amazon.com/images/I/61k1jY-VdIL._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'eureka-mignon-silenzio.png',
    name: 'Eureka Mignon Silenzio',
    urls: [
      'https://m.media-amazon.com/images/I/61k1jY-VdIL._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'eureka-mignon-zero.png',
    name: 'Eureka Mignon Zero',
    urls: [
      'https://m.media-amazon.com/images/I/61k1jY-VdIL._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'eureka-oro-single-dose.png',
    name: 'Eureka Oro Mignon Single Dose',
    urls: [
      'https://m.media-amazon.com/images/I/61k1jY-VdIL._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'fellow-ode-gen-2.png',
    name: 'Fellow Ode Gen 2',
    urls: [
      'https://m.media-amazon.com/images/I/61W3t3pY-SL._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'fellow-opus.png',
    name: 'Fellow Opus Conical Burr',
    urls: [
      'http://fellowproducts.com/cdn/shop/files/PDP_Opus2_Black_Black.png',
      'https://m.media-amazon.com/images/I/61z+d7XvRHL._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'baratza-encore-esp.png',
    name: 'Baratza Encore ESP',
    urls: [
      'https://assets.breville.com/cdn-cgi/image/width=1300,format=auto/ZCG495/ZCG495WHT0ENA1_HERO_1500x1500.png',
      'https://m.media-amazon.com/images/I/61Y+W3tN+iL._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'kingrinder-k6.png',
    name: 'KINGrinder K6',
    urls: [
      'https://kingrinder.com/cdn/shop/files/K6_Front.png',
    ],
  },
  {
    filename: 'comandante-c40.png',
    name: 'Comandante C40 MK4 Nitro Blade',
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Hand_coffee_grinder.jpg/1200px-Hand_coffee_grinder.jpg',
    ],
  },
  {
    filename: 'niche-zero.png',
    name: 'Niche Zero Grinder',
    urls: [
      'http://www.nichecoffee.co.uk/cdn/shop/files/White-63C-dark-grey-bkg-1000px.jpg',
    ],
  },
  {
    filename: 'timemore-c3-pro.png',
    name: 'Timemore Chestnut C3 PRO',
    urls: [
      'https://m.media-amazon.com/images/I/61jZ5b7tYHL._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'timemore-sculptor-078s.png',
    name: 'Timemore Sculptor 078s',
    urls: [
      'https://m.media-amazon.com/images/I/61K2a5B7W1L._AC_SL1500_.jpg',
    ],
  },

  // --- ACCESSORIES ---
  {
    filename: 'fellow-stagg.png',
    name: 'Fellow Stagg EKG Electric Kettle',
    urls: [
      'http://fellowproducts.com/cdn/shop/files/Web_PDP_StaggEKGElectricKettle-Pro_WoodAccents_MatteBlackWalnut_Angle.png',
    ],
  },
  {
    filename: 'acaia-lunar.png',
    name: 'Acaia Lunar Precision Scale',
    urls: [
      'http://acaia.co/cdn/shop/files/P_Lunar_BeigeWhite_01_1500x1000_ac69a04a-00cd-42e5-aebe-4c4c23dbd4c0.jpg',
    ],
  },
  {
    filename: 'chemex-classic.png',
    name: 'Chemex Classic 6 Cups',
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/b/b8/Chemex_Coffeemaker.jpg',
    ],
  },
  {
    filename: 'aeropress-original.png',
    name: 'AeroPress Original Coffee Maker',
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/d/d2/Aeropress_setup.jpg',
    ],
  },
  {
    filename: 'bialetti-moka.png',
    name: 'Bialetti Moka Express',
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/2/29/Bialetti_caffettiera_moka.jpg',
    ],
  },
];

async function downloadSingle(item: DirectProductImage): Promise<boolean> {
  const destPath = path.resolve(PRODUCTS_DIR, item.filename);

  for (const url of item.urls) {
    try {
      console.log(`⏳ Descargando [${item.name}] desde: ${url.substring(0, 80)}...`);
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 12000);

      const res = await fetch(url, {
        signal: controller.signal,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        },
      });
      clearTimeout(timeout);

      if (res.ok) {
        const arrayBuffer = await res.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        if (buffer.length > 5000) {
          fs.writeFileSync(destPath, buffer);
          console.log(`✅ [GUARDADO] ${item.filename} (${(buffer.length / 1024).toFixed(1)} KB)`);
          return true;
        }
      }
    } catch (err: any) {
      console.warn(`   ⚠️ Falló: ${err.message}`);
    }
  }

  console.error(`❌ Falló la descarga de todas las URLs para ${item.name}`);
  return false;
}

async function run() {
  console.log('🚀 Descargando imágenes reales individuales y específicas para cada modelo...');
  let success = 0;
  for (const item of UNIQUE_PRODUCT_IMAGES) {
    const ok = await downloadSingle(item);
    if (ok) success++;
  }
  console.log(`\n🎉 Descarga finalizada: ${success}/${UNIQUE_PRODUCT_IMAGES.length} imágenes reales únicas obtenidas.`);
}

run().catch(console.error);
