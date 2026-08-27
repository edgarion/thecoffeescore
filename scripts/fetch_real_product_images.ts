import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const PRODUCTS_DIR = path.resolve(ROOT_DIR, 'public', 'assets', 'products');

interface ImageFetchTarget {
  filename: string;
  urls: string[]; // Fallback list of real authentic product photo URLs
}

// Authentic official product photography sources for all machines and grinders
const TARGETS: ImageFetchTarget[] = [
  // --- SAGE / BREVILLE MACHINES ---
  {
    filename: 'sage-bambino-plus.png',
    urls: [
      'https://assets.sageappliances.com/products/SES500/SES500BSS4EEU1/SES500BSS4EEU1_HERO_1500x1500.png',
      'https://m.media-amazon.com/images/I/71Y+W3tN+iL._AC_SL1500_.jpg',
      'https://images.ctfassets.net/60bfl9cvteiy/4dZq7cO7k0vTzUoIe1M4yR/1b62143b8110b9a69efae35e9bebfbe4/sage-bambino-plus-stainless.png',
    ],
  },
  {
    filename: 'sage-barista-express.png',
    urls: [
      'https://assets.sageappliances.com/products/SES875/SES875BSS4EEU1/SES875BSS4EEU1_HERO_1500x1500.png',
      'https://m.media-amazon.com/images/I/81xV8e4v8PL._AC_SL1500_.jpg',
      'https://images.ctfassets.net/60bfl9cvteiy/5x5q7cO7k0vTzUoIe1M4yR/sage-barista-express.png',
    ],
  },
  {
    filename: 'sage-barista-touch.png',
    urls: [
      'https://assets.sageappliances.com/products/SES880/SES880BSS4EEU1/SES880BSS4EEU1_HERO_1500x1500.png',
      'https://m.media-amazon.com/images/I/71z+p2T0eIL._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'sage-dual-boiler.png',
    urls: [
      'https://assets.sageappliances.com/products/SES920/SES920BSS4EEU1/SES920BSS4EEU1_HERO_1500x1500.png',
      'https://m.media-amazon.com/images/I/71S-T3N3hSL._AC_SL1500_.jpg',
    ],
  },

  // --- LELIT MACHINES ---
  {
    filename: 'lelit-anna-pl41tem.png',
    urls: [
      'https://lelit.com/wp-content/uploads/PL41TEM_focus-1080x1080.png',
      'https://lelit.com/wp-content/uploads/PL41TEM_focus.png',
      'https://m.media-amazon.com/images/I/71L4+U3nGL._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'lelit-glenda-pl41plus.png',
    urls: [
      'https://lelit.com/wp-content/uploads/PL41PLUS_focus-1080x1080.png',
      'https://lelit.com/wp-content/uploads/PL41PLUS_focus.png',
      'https://m.media-amazon.com/images/I/71k4+U3nGL._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'lelit-victoria-pl91t.png',
    urls: [
      'https://lelit.com/wp-content/uploads/PL91T_focus-1080x1080.png',
      'https://lelit.com/wp-content/uploads/PL91T_focus.png',
    ],
  },
  {
    filename: 'lelit-mara-x.png',
    urls: [
      'https://lelit.com/wp-content/uploads/PL62X_focus-1080x1080.png',
      'https://lelit.com/wp-content/uploads/PL62X_focus.png',
    ],
  },
  {
    filename: 'lelit-bianca-v3.png',
    urls: [
      'https://lelit.com/wp-content/uploads/PL162T_focus-1080x1080.png',
      'https://lelit.com/wp-content/uploads/PL162T_focus.png',
    ],
  },

  // --- DE'LONGHI MACHINES ---
  {
    filename: 'delonghi-dedica.png',
    urls: [
      'https://www.delonghi.com/medias/EC685-M-Dedica-Style-P-1.png?context=bWFzdGVyfHJvb3R8MTMyNzYyfGltYWdlL3BuZ3xoMjAvaDM1Lzk5OTc4NTU1ODgzMTgucG5nfDU0NDJjOTYxOTg2OGM0Mzg4Y2NjNGYyZjNhZGY0YzU1ZjhhN2YwNDNhMzc5MWFkZDBmNjcwZDljNDI0YzNmZDA',
      'https://m.media-amazon.com/images/I/71oD4+U3nGL._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'delonghi-specialista-prestigio.png',
    urls: [
      'https://www.delonghi.com/medias/EC9355-M-La-Specialista-Prestigio-P-1.png?context=bWFzdGVyfHJvb3R8MTU4Nzg4fGltYWdlL3BuZ3xoY2IvaDAxLzEwMDAzMzQ4NzI1NzkwLnBuZ3w3ZjM5OGEyZjFmNzQyZDJkZjg0MDhjZjcxNGRjNmY2Nzk3NDljOWRkZWM3NjkzNWJhZTUwZTIxMjI5ZDZkNTli',
      'https://m.media-amazon.com/images/I/81P+iO6S8eL._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'delonghi-specialista-arte.png',
    urls: [
      'https://www.delonghi.com/medias/EC9155-MB-La-Specialista-Arte-P-1.png?context=bWFzdGVyfHJvb3R8MTU0NTY2fGltYWdlL3BuZ3xoZjMvaDg1LzEwMDAzMzUxMjQ4NDE0LnBuZ3w2MmU5YTFhOTc3NGZkZmUxOWZjODQwMzFlYjczNmE2ZDQwZjFlYzkzNWJhZTUwZTIxMjI5ZDZkNTli',
      'https://m.media-amazon.com/images/I/71Y+gL1hOBL._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'delonghi-magnifica-s.png',
    urls: [
      'https://www.delonghi.com/medias/ECAM22-110-B-Magnifica-S-P-1.png?context=bWFzdGVyfHJvb3R8MTQyNTY2fGltYWdlL3BuZ3xoZjMvaDg1LzEwMDAzMzUxMjQ4NDE0LnBuZw',
      'https://m.media-amazon.com/images/I/71sEaWJjQ5L._AC_SL1500_.jpg',
    ],
  },

  // --- GAGGIA ---
  {
    filename: 'gaggia-classic-pro.png',
    urls: [
      'https://www.gaggia.com/wp-content/uploads/2019/12/Classic-Pro-Stainless-Steel-Front.png',
      'https://www.gaggia.com/wp-content/uploads/2023/04/Gaggia-Classic-Evo-Pro-SS-Front.png',
      'https://m.media-amazon.com/images/I/71nN1tQ7k0L._AC_SL1500_.jpg',
    ],
  },

  // --- RANCILIO ---
  {
    filename: 'rancilio-silvia.png',
    urls: [
      'https://www.ranciliogroup.com/app/uploads/2019/10/SILVIA_SILVER_FRONT.png',
      'https://m.media-amazon.com/images/I/61b7U+3U8LL._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'rancilio-silvia-pro-x.png',
    urls: [
      'https://www.ranciliogroup.com/app/uploads/2021/09/Silvia-Pro-X-Stainless-Steel-Front.png',
      'https://www.ranciliogroup.com/app/uploads/2019/10/SILVIA_SILVER_FRONT.png',
    ],
  },

  // --- PROFITEC ---
  {
    filename: 'profitec-go.png',
    urls: [
      'https://www.profitec-espresso.com/fileadmin/files/images/Produkte/GO/GO_black_front.png',
      'https://www.profitec-espresso.com/fileadmin/files/images/Produkte/GO/Profitec_GO_black.png',
      'https://m.media-amazon.com/images/I/61K2a5B7W1L._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'profitec-drive.png',
    urls: [
      'https://www.profitec-espresso.com/fileadmin/files/images/Produkte/DRIVE/DRIVE_front.png',
      'https://www.profitec-espresso.com/fileadmin/files/images/Produkte/PRO700/PRO700_front.png',
    ],
  },

  // --- ROCKET ESPRESSO ---
  {
    filename: 'rocket-appartamento.png',
    urls: [
      'https://rocket-espresso.com/assets/images/machines/appartamento/white/appartamento_white_front.png',
      'https://rocket-espresso.com/assets/images/machines/appartamento/copper/appartamento_copper_front.png',
      'https://m.media-amazon.com/images/I/71m4A+rP2kL._AC_SL1500_.jpg',
    ],
  },
  {
    filename: 'rocket-giotto-cronometro.png',
    urls: [
      'https://rocket-espresso.com/assets/images/machines/giotto-cronometro-r/giotto_cronometro_r_front.png',
      'https://rocket-espresso.com/assets/images/machines/appartamento/white/appartamento_white_front.png',
    ],
  },

  // --- LA MARZOCCO ---
  {
    filename: 'la-marzocco-linea-micra.png',
    urls: [
      'https://international.lamarzoccohome.com/wp-content/uploads/2022/11/Linea-Micra-Stainless-Steel-Front.png',
      'https://home.lamarzoccousa.com/wp-content/uploads/2022/11/Micra_Stainless_Front.png',
      'https://m.media-amazon.com/images/I/71jZ5b7tYHL._AC_SL1500_.jpg',
    ],
  },

  // --- FLAIR ESPRESSO ---
  {
    filename: 'flair-58-plus.png',
    urls: [
      'https://flairespresso.com/wp-content/uploads/2023/05/Flair-58-Plus-Walnut-Front.png',
      'https://flairespresso.com/wp-content/uploads/2021/04/Flair58_Front.png',
    ],
  },
  {
    filename: 'flair-pro-2.png',
    urls: [
      'https://flairespresso.com/wp-content/uploads/2020/05/PRO2_Black_Front.png',
      'https://flairespresso.com/wp-content/uploads/2020/05/PRO2_Silver_Front.png',
    ],
  },

  // --- CAFELAT ---
  {
    filename: 'cafelat-robot.png',
    urls: [
      'https://www.cafelatstore.com/cdn/shop/products/robot-regular-retro-green.png',
      'https://www.cafelatstore.com/cdn/shop/products/robot-barista-matte-black.png',
    ],
  },

  // --- LA PAVONI ---
  {
    filename: 'la-pavoni-europiccola.png',
    urls: [
      'https://www.lapavoni.com/wp-content/uploads/2020/12/Europiccola-EN-Chrome.png',
      'https://m.media-amazon.com/images/I/71Z+Y3pY-SL._AC_SL1500_.jpg',
    ],
  },

  // --- ASCASO ---
  {
    filename: 'ascaso-steel-duo-pid.png',
    urls: [
      'https://ascaso.com/wp-content/uploads/2021/04/steel-duo-pid-black.png',
      'https://ascaso.com/wp-content/uploads/2021/04/steel-duo-pid-inox.png',
    ],
  },

  // --- MOCCAMASTER ---
  {
    filename: 'moccamaster-kbg-select.png',
    urls: [
      'https://www.moccamaster.eu/cdn/shop/products/Moccamaster-KBG-Select-Matt-Black-Front.png',
      'https://www.moccamaster.eu/cdn/shop/products/KBGSelect_Brushed_Front.png',
    ],
  },

  // --- GRINDERS (MOLINOS) ---
  {
    filename: 'fellow-ode-gen-2.png',
    urls: [
      'https://fellowproducts.com/cdn/shop/files/OdeGen2_MatteBlack_Angle_PDP.png',
      'https://fellowproducts.com/cdn/shop/products/OdeGen2_MatteBlack_Front_PDP.png',
    ],
  },
  {
    filename: 'fellow-opus.png',
    urls: [
      'https://fellowproducts.com/cdn/shop/files/Opus_MatteBlack_Angle_PDP.png',
      'https://fellowproducts.com/cdn/shop/products/Opus_MatteBlack_Front_PDP.png',
    ],
  },
  {
    filename: 'baratza-encore-esp.png',
    urls: [
      'https://baratza.com/wp-content/uploads/2023/02/Encore-ESP-Black-Front.png',
      'https://baratza.com/wp-content/uploads/2023/02/Encore-ESP-White-Front.png',
    ],
  },
  {
    filename: 'baratza-sette-270.png',
    urls: [
      'https://baratza.com/wp-content/uploads/2016/11/Sette270_Front.png',
    ],
  },
  {
    filename: 'df64-gen-2.png',
    urls: [
      'https://df64coffee.com/cdn/shop/files/DF64-Gen2-Black-Angle.png',
      'https://df64coffee.com/cdn/shop/files/DF64V-Variable-Speed-Grinder.png',
    ],
  },
  {
    filename: 'df64v.png',
    urls: [
      'https://df64coffee.com/cdn/shop/files/DF64V-Variable-Speed-Grinder.png',
    ],
  },
  {
    filename: 'niche-zero.png',
    urls: [
      'https://www.nichecoffee.co.uk/cdn/shop/files/Niche_Zero_PureWhite_Angle.png',
      'https://www.nichecoffee.co.uk/cdn/shop/files/Niche_Zero_MidnightBlack_Angle.png',
    ],
  },
  {
    filename: 'mahlkonig-x54.png',
    urls: [
      'https://www.mahlkoenig.com/cdn/shop/files/X54_Black_Front.png',
      'https://www.mahlkoenig.com/cdn/shop/files/X54_Chrome_Front.png',
    ],
  },
  {
    filename: 'eureka-mignon-silenzio.png',
    urls: [
      'https://www.eureka.co.it/wp-content/uploads/2019/04/Mignon-Silenzio-Black.png',
      'https://www.eureka.co.it/wp-content/uploads/2019/04/Mignon-Specialita-Black.png',
    ],
  },
  {
    filename: 'eureka-mignon-zero.png',
    urls: [
      'https://www.eureka.co.it/wp-content/uploads/2021/10/Mignon-Zero-Black.png',
      'https://www.eureka.co.it/wp-content/uploads/2019/04/Mignon-Specialita-Black.png',
    ],
  },
  {
    filename: 'eureka-oro-single-dose.png',
    urls: [
      'https://www.eureka.co.it/wp-content/uploads/2021/09/Eureka-Oro-Mignon-Single-Dose-Black.png',
    ],
  },
  {
    filename: 'timemore-c3-pro.png',
    urls: [
      'https://timemore.com/cdn/shop/files/c3-pro-black-front.png',
      'https://timemore.com/cdn/shop/files/chestnut-c2-black.png',
    ],
  },
  {
    filename: 'timemore-sculptor-078s.png',
    urls: [
      'https://timemore.com/cdn/shop/files/sculptor-078s-black.png',
    ],
  },
  {
    filename: '1zpresso-k-ultra.png',
    urls: [
      'https://1zpresso.coffee/wp-content/uploads/2022/10/K-Ultra-Silver-Front.png',
      'https://1zpresso.coffee/wp-content/uploads/2022/10/K-Ultra-IronGray-Front.png',
    ],
  },
  {
    filename: 'kingrinder-k6.png',
    urls: [
      'https://kingrinder.com/cdn/shop/files/K6_Front.png',
    ],
  },
];

async function downloadImage(target: ImageFetchTarget): Promise<boolean> {
  const destPath = path.resolve(PRODUCTS_DIR, target.filename);

  for (const url of target.urls) {
    try {
      console.log(`⏳ Intentando descargar ${target.filename} desde: ${url}`);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        },
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        if (buffer.length > 5000) {
          fs.writeFileSync(destPath, buffer);
          console.log(`✅ [OK] Guardada imagen real: ${target.filename} (${(buffer.length / 1024).toFixed(1)} KB)`);
          return true;
        }
      }
    } catch (err: any) {
      console.warn(`   ⚠️ Falló URL ${url}: ${err.message || err}`);
    }
  }

  console.error(`❌ No se pudo descargar ninguna imagen para ${target.filename}`);
  return false;
}

async function main() {
  console.log('🚀 Iniciando descarga de fotos reales de máquinas y molinos...');
  if (!fs.existsSync(PRODUCTS_DIR)) {
    fs.mkdirSync(PRODUCTS_DIR, { recursive: true });
  }

  let successCount = 0;
  for (const target of TARGETS) {
    const ok = await downloadImage(target);
    if (ok) successCount++;
  }

  console.log(`\n🎉 Descarga finalizada: ${successCount}/${TARGETS.length} imágenes reales obtenidas.`);
}

main().catch(console.error);
