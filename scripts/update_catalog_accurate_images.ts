import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.resolve(ROOT_DIR, 'public');
const CATALOG_PATH = path.resolve(ROOT_DIR, 'src', 'data', 'catalog.ts');
const PRODUCTS_DIR = path.resolve(ROOT_DIR, 'public', 'assets', 'products');

// Map of keyword/slug matchers to exact authentic product image paths
const IMAGE_RULES: { pattern: RegExp; image: string }[] = [
  // Machines
  { pattern: /sage-barista-express/i, image: '/assets/products/sage-barista-express.png' },
  { pattern: /sage-barista-touch/i, image: '/assets/products/sage-barista-touch.png' },
  { pattern: /sage-dual-boiler/i, image: '/assets/products/sage-dual-boiler.png' },
  { pattern: /sage-bambino-plus/i, image: '/assets/products/sage-bambino.png' },
  { pattern: /sage-bambino/i, image: '/assets/products/sage-bambino.png' },

  { pattern: /lelit-bianca/i, image: '/assets/products/lelit-bianca-v3.png' },
  { pattern: /lelit-mara-x/i, image: '/assets/products/lelit-mara-x.png' },
  { pattern: /lelit-victoria/i, image: '/assets/products/lelit-victoria-pl91t.png' },
  { pattern: /lelit-glenda/i, image: '/assets/products/lelit-glenda-pl41plus.png' },
  { pattern: /lelit-anna/i, image: '/assets/products/lelit-anna.png' },

  { pattern: /de-longhi-dedica/i, image: '/assets/products/delonghi-dedica.png' },
  { pattern: /de-longhi-specialista-arte/i, image: '/assets/products/delonghi-specialista-arte.png' },
  { pattern: /de-longhi-specialista/i, image: '/assets/products/delonghi-specialista.png' },
  { pattern: /de-longhi-magnifica/i, image: '/assets/products/delonghi-magnifica-s.png' },

  { pattern: /gaggia-classic/i, image: '/assets/products/gaggia-classic-pro.png' },
  { pattern: /rancilio-silvia-pro-x/i, image: '/assets/products/rancilio-silvia-pro-x.png' },
  { pattern: /rancilio-silvia/i, image: '/assets/products/rancilio-silvia.png' },

  { pattern: /profitec-drive/i, image: '/assets/products/profitec-drive.png' },
  { pattern: /profitec-go/i, image: '/assets/products/profitec-go.png' },

  { pattern: /rocket-giotto/i, image: '/assets/products/rocket-giotto-cronometro.png' },
  { pattern: /rocket-appartamento/i, image: '/assets/products/rocket-appartamento.png' },

  { pattern: /la-marzocco/i, image: '/assets/products/la-marzocco-linea-micra.png' },
  { pattern: /flair-58/i, image: '/assets/products/flair-58-plus.png' },
  { pattern: /flair-pro/i, image: '/assets/products/flair-58-plus.png' },
  { pattern: /cafelat-robot/i, image: '/assets/products/cafelat-robot.png' },
  { pattern: /la-pavoni/i, image: '/assets/products/la-pavoni-europiccola.png' },
  { pattern: /ascaso-steel/i, image: '/assets/products/ascaso-steel-duo-pid.png' },
  { pattern: /moccamaster/i, image: '/assets/products/moccamaster-kbg-select.png' },

  // Grinders
  { pattern: /eureka-oro/i, image: '/assets/products/eureka-oro-single-dose.png' },
  { pattern: /eureka-mignon-silenzio/i, image: '/assets/products/eureka-mignon-silenzio.png' },
  { pattern: /eureka-mignon-zero/i, image: '/assets/products/eureka-mignon-zero.png' },
  { pattern: /eureka-mignon-specialita/i, image: '/assets/products/eureka-specialita.png' },
  { pattern: /eureka/i, image: '/assets/products/eureka-specialita.png' },

  { pattern: /comandante/i, image: '/assets/products/comandante-c40.png' },
  { pattern: /fellow-ode/i, image: '/assets/products/fellow-ode-gen-2.png' },
  { pattern: /fellow-opus/i, image: '/assets/products/fellow-opus.png' },

  { pattern: /df64v/i, image: '/assets/products/df64v.png' },
  { pattern: /df64/i, image: '/assets/products/df64-gen-2.png' },

  { pattern: /baratza-sette/i, image: '/assets/products/baratza-encore-esp.png' },
  { pattern: /baratza-encore/i, image: '/assets/products/baratza-encore-esp.png' },

  { pattern: /niche-zero/i, image: '/assets/products/niche-zero.png' },
  { pattern: /mahlk/i, image: '/assets/products/mahlkonig-x54.png' },

  { pattern: /timemore-sculptor/i, image: '/assets/products/timemore-sculptor-078s.png' },
  { pattern: /timemore-chestnut/i, image: '/assets/products/timemore-c3-pro.png' },
  { pattern: /kingrinder/i, image: '/assets/products/kingrinder-k6.png' },

  // Accessories
  { pattern: /hario-v60-paper|hario-v60-tabbed/i, image: '/assets/products/hario-filters.png' },
  { pattern: /hario-filter-in-cold-brew/i, image: '/assets/products/hario-coldbrew-bottle.png' },
  { pattern: /fellow-carter/i, image: '/assets/products/fellow-carter.png' },
  { pattern: /fellow-stagg/i, image: '/assets/products/fellow-stagg.png' },
  { pattern: /acaia-lunar/i, image: '/assets/products/acaia-lunar.png' },
  { pattern: /normcore-v4-tamper/i, image: '/assets/products/normcore-tamper.png' },
  { pattern: /normcore-wdt|wdt-distribution/i, image: '/assets/products/wdt-tool.png' },
  { pattern: /motta-europa/i, image: '/assets/products/motta-pitcher.png' },
  { pattern: /aeropress-original/i, image: '/assets/products/aeropress-original.png' },
  { pattern: /aeropress/i, image: '/assets/products/aeropress.png' },
  { pattern: /chemex-classic/i, image: '/assets/products/chemex-classic.png' },
  { pattern: /chemex/i, image: '/assets/products/chemex.png' },
  { pattern: /hario-v60/i, image: '/assets/products/hario-v60.png' },
];

function updateCatalogImages() {
  console.log('📖 Leyendo src/data/catalog.ts...');
  let catalogContent = fs.readFileSync(CATALOG_PATH, 'utf-8');

  // Let's parse each product block and update image
  let updatedCount = 0;

  for (const rule of IMAGE_RULES) {
    // Check if the image file exists on disk
    const diskPath = path.resolve(PUBLIC_DIR, rule.image.startsWith('/') ? rule.image.slice(1) : rule.image);
    if (!fs.existsSync(diskPath)) {
      console.warn(`⚠️ Warning: Image file not found on disk: ${diskPath}`);
      continue;
    }
  }

  // Regex to match product blocks with id: "..." and image: "..."
  const productRegex = /\{\s*id:\s*"([^"]+)",[\s\S]*?image:\s*"([^"]+)",/g;
  
  catalogContent = catalogContent.replace(productRegex, (match, id, oldImage) => {
    // Find matching rule for id
    for (const rule of IMAGE_RULES) {
      if (rule.pattern.test(id)) {
        if (oldImage !== rule.image) {
          updatedCount++;
          return match.replace(`image: "${oldImage}"`, `image: "${rule.image}"`);
        }
      }
    }
    return match;
  });

  fs.writeFileSync(CATALOG_PATH, catalogContent, 'utf-8');
  console.log(`✅ Catálogo actualizado con éxito. ${updatedCount} productos ahora apuntan a sus imágenes reales exactas.`);
}

updateCatalogImages();
