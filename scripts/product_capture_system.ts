import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const PRODUCTS_DIR = path.resolve(ROOT_DIR, 'public', 'assets', 'products');

export interface ProductCaptureTarget {
  id: string;
  category: 'maquinas' | 'molinos' | 'accesorios' | 'cafe';
  brand: string;
  model: string;
  filename: string;
  officialWebUrl?: string;
  verifiedUrls: string[];
  wikiQuery?: string;
}

export const CAPTURE_TARGETS: ProductCaptureTarget[] = [
  // ==========================================
  // 1. MÁQUINAS DE CAFÉ (ESPRESSO Y MANUALES)
  // ==========================================
  {
    id: 'sage-barista-express',
    category: 'maquinas',
    brand: 'Sage',
    model: 'Sage Barista Express',
    filename: 'sage-barista-express.png',
    officialWebUrl: 'https://www.sageappliances.com/en-es/product/ses875',
    verifiedUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Espresso_machine_%28Breville_Barista_Express%29.jpg/1200px-Espresso_machine_%28Breville_Barista_Express%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/8/87/Espresso_machine_%28Breville_Barista_Express%29.jpg',
      'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=1200&q=85',
    ],
    wikiQuery: 'Breville Barista Express',
  },
  {
    id: 'sage-barista-touch',
    category: 'maquinas',
    brand: 'Sage',
    model: 'Sage Barista Touch',
    filename: 'sage-barista-touch.png',
    officialWebUrl: 'https://www.sageappliances.com/en-es/product/ses880',
    verifiedUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Breville_Barista_Touch.jpg/1200px-Breville_Barista_Touch.jpg',
      'https://images.unsplash.com/photo-1584286595398-a59f21d313f5?w=1200&q=85',
    ],
    wikiQuery: 'Breville Touch espresso',
  },
  {
    id: 'sage-dual-boiler',
    category: 'maquinas',
    brand: 'Sage',
    model: 'Sage Dual Boiler',
    filename: 'sage-dual-boiler.png',
    officialWebUrl: 'https://www.sageappliances.com/en-es/product/ses920',
    verifiedUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Breville_Dual_Boiler_espresso_machine.jpg/1200px-Breville_Dual_Boiler_espresso_machine.jpg',
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=1200&q=85',
    ],
    wikiQuery: 'Breville Dual Boiler',
  },
  {
    id: 'sage-bambino-plus',
    category: 'maquinas',
    brand: 'Sage',
    model: 'Sage Bambino Plus',
    filename: 'sage-bambino.png',
    officialWebUrl: 'https://www.sageappliances.com/en-es/product/ses500',
    verifiedUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Espresso_machine_%28Breville_Barista_Express%29.jpg/1200px-Espresso_machine_%28Breville_Barista_Express%29.jpg',
    ],
  },
  {
    id: 'sage-bambino',
    category: 'maquinas',
    brand: 'Sage',
    model: 'Sage Bambino',
    filename: 'sage-bambino.png',
    officialWebUrl: 'https://www.sageappliances.com/en-es/product/ses450',
    verifiedUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Espresso_machine_%28Breville_Barista_Express%29.jpg/1200px-Espresso_machine_%28Breville_Barista_Express%29.jpg',
    ],
  },
  {
    id: 'lelit-bianca-v3',
    category: 'maquinas',
    brand: 'Lelit',
    model: 'Lelit Bianca V3',
    filename: 'lelit-bianca-v3.png',
    officialWebUrl: 'https://lelit.com/product/bianca-pl162t/',
    verifiedUrls: [
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=1200&q=85',
    ],
    wikiQuery: 'Lelit Bianca espresso',
  },
  {
    id: 'lelit-mara-x',
    category: 'maquinas',
    brand: 'Lelit',
    model: 'Lelit Mara X V2',
    filename: 'lelit-mara-x.png',
    officialWebUrl: 'https://lelit.com/product/marax-pl62x/',
    verifiedUrls: [
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=1200&q=85',
    ],
    wikiQuery: 'Lelit Mara espresso',
  },
  {
    id: 'lelit-victoria-pl91t',
    category: 'maquinas',
    brand: 'Lelit',
    model: 'Lelit Victoria PL91T',
    filename: 'lelit-victoria-pl91t.png',
    officialWebUrl: 'https://lelit.com/product/victoria-pl91t/',
    verifiedUrls: [
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=1200&q=85',
    ],
  },
  {
    id: 'lelit-glenda-pl41plus',
    category: 'maquinas',
    brand: 'Lelit',
    model: 'Lelit Glenda PL41PLUS',
    filename: 'lelit-glenda-pl41plus.png',
    officialWebUrl: 'https://lelit.com/product/glenda-pl41plus/',
    verifiedUrls: [
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=1200&q=85',
    ],
  },
  {
    id: 'lelit-anna-pl41tem',
    category: 'maquinas',
    brand: 'Lelit',
    model: 'Lelit Anna PL41TEM',
    filename: 'lelit-anna.png',
    officialWebUrl: 'https://lelit.com/product/anna-pl41tem/',
    verifiedUrls: [
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=1200&q=85',
    ],
  },
  {
    id: 'delonghi-dedica-ec685',
    category: 'maquinas',
    brand: "De'Longhi",
    model: "De'Longhi Dedica EC685",
    filename: 'delonghi-dedica.png',
    officialWebUrl: 'https://www.delonghi.com/es-es/productos/cafe/cafeteras-de-bomba-tradicionales/dedica-style-ec-685-m/p/EC685.M',
    verifiedUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/DeLonghi_Dedica_EC680.jpg/1200px-DeLonghi_Dedica_EC680.jpg',
      'https://images.unsplash.com/photo-1584286595398-a59f21d313f5?w=1200&q=85',
    ],
    wikiQuery: 'DeLonghi Dedica',
  },
  {
    id: 'delonghi-specialista-prestigio',
    category: 'maquinas',
    brand: "De'Longhi",
    model: "De'Longhi Specialista Prestigio",
    filename: 'delonghi-specialista.png',
    officialWebUrl: 'https://www.delonghi.com/es-es/productos/cafe/cafeteras-de-bomba-tradicionales/la-specialista-prestigio-ec9355-m/p/EC9355.M',
    verifiedUrls: [
      'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=1200&q=85',
    ],
  },
  {
    id: 'delonghi-specialista-arte',
    category: 'maquinas',
    brand: "De'Longhi",
    model: "De'Longhi Specialista Arte",
    filename: 'delonghi-specialista-arte.png',
    officialWebUrl: 'https://www.delonghi.com/es-es/productos/cafe/cafeteras-de-bomba-tradicionales/la-specialista-arte-ec9155-mb/p/EC9155.MB',
    verifiedUrls: [
      'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=1200&q=85',
    ],
  },
  {
    id: 'delonghi-magnifica-s',
    category: 'maquinas',
    brand: "De'Longhi",
    model: "De'Longhi Magnifica S",
    filename: 'delonghi-magnifica-s.png',
    officialWebUrl: 'https://www.delonghi.com/es-es/productos/cafe/cafeteras-superautomaticas/magnifica-s-ecam22-110-b/p/ECAM22.110.B',
    verifiedUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/De%27Longhi_Magnifica_S_ECAM_22.110.B.jpg/1200px-De%27Longhi_Magnifica_S_ECAM_22.110.B.jpg',
      'https://images.unsplash.com/photo-1584286595398-a59f21d313f5?w=1200&q=85',
    ],
    wikiQuery: 'DeLonghi Magnifica',
  },
  {
    id: 'gaggia-classic-pro',
    category: 'maquinas',
    brand: 'Gaggia',
    model: 'Gaggia Classic Pro',
    filename: 'gaggia-classic-pro.png',
    officialWebUrl: 'https://www.gaggia.com/manual-machines/classic-evo-pro/',
    verifiedUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/6/6b/GaggiaCC_Modell_2010-10.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/GaggiaCC_Modell_2010-10.JPG/1200px-GaggiaCC_Modell_2010-10.JPG',
    ],
    wikiQuery: 'Gaggia Classic',
  },
  {
    id: 'rancilio-silvia',
    category: 'maquinas',
    brand: 'Rancilio',
    model: 'Rancilio Silvia',
    filename: 'rancilio-silvia.png',
    officialWebUrl: 'https://www.ranciliogroup.com/rancilio/silvia/',
    verifiedUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/4/4f/RANCILIO_SILVIA_espresso_machine.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/RANCILIO_SILVIA_espresso_machine.jpg/1200px-RANCILIO_SILVIA_espresso_machine.jpg',
    ],
    wikiQuery: 'Rancilio Silvia espresso',
  },
  {
    id: 'rancilio-silvia-pro-x',
    category: 'maquinas',
    brand: 'Rancilio',
    model: 'Rancilio Silvia Pro X',
    filename: 'rancilio-silvia-pro-x.png',
    officialWebUrl: 'https://www.ranciliogroup.com/rancilio/silvia-pro-x/',
    verifiedUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/RANCILIO_SILVIA_espresso_machine.jpg/1200px-RANCILIO_SILVIA_espresso_machine.jpg',
    ],
    wikiQuery: 'Rancilio Silvia',
  },
  {
    id: 'profitec-go',
    category: 'maquinas',
    brand: 'Profitec',
    model: 'Profitec GO',
    filename: 'profitec-go.png',
    officialWebUrl: 'https://www.profitec-espresso.com/en/products/go',
    verifiedUrls: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200&q=85',
    ],
  },
  {
    id: 'profitec-drive',
    category: 'maquinas',
    brand: 'Profitec',
    model: 'Profitec Drive',
    filename: 'profitec-drive.png',
    officialWebUrl: 'https://www.profitec-espresso.com/en/products/drive',
    verifiedUrls: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200&q=85',
    ],
  },
  {
    id: 'rocket-appartamento',
    category: 'maquinas',
    brand: 'Rocket Espresso',
    model: 'Rocket Appartamento',
    filename: 'rocket-appartamento.png',
    officialWebUrl: 'https://rocket-espresso.com/appartamento.html',
    verifiedUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/E61_espresso_machine_group.jpg/1200px-E61_espresso_machine_group.jpg',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200&q=85',
    ],
  },
  {
    id: 'rocket-giotto-cronometro',
    category: 'maquinas',
    brand: 'Rocket Espresso',
    model: 'Rocket Giotto Cronometro R',
    filename: 'rocket-giotto-cronometro.png',
    officialWebUrl: 'https://rocket-espresso.com/giotto-cronometro.html',
    verifiedUrls: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200&q=85',
    ],
  },
  {
    id: 'la-marzocco-linea-micra',
    category: 'maquinas',
    brand: 'La Marzocco',
    model: 'La Marzocco Linea Micra',
    filename: 'la-marzocco-linea-micra.png',
    officialWebUrl: 'https://international.lamarzoccohome.com/en/linea-micra/',
    verifiedUrls: [
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=1200&q=85',
      'https://upload.wikimedia.org/wikipedia/commons/3/31/La_Marzocco_Factory_%288665646362%29.jpg',
    ],
  },
  {
    id: 'flair-58-plus',
    category: 'maquinas',
    brand: 'Flair Espresso',
    model: 'Flair 58 Plus',
    filename: 'flair-58-plus.png',
    officialWebUrl: 'https://flairespresso.com/product/flair-58-plus/',
    verifiedUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Manual_lever_espresso_maker.jpg/1200px-Manual_lever_espresso_maker.jpg',
    ],
  },
  {
    id: 'flair-pro-2',
    category: 'maquinas',
    brand: 'Flair Espresso',
    model: 'Flair PRO 2',
    filename: 'flair-pro-2.png',
    officialWebUrl: 'https://flairespresso.com/product/pro-2/',
    verifiedUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/9/90/Manual_lever_espresso_maker.jpg',
    ],
  },
  {
    id: 'cafelat-robot',
    category: 'maquinas',
    brand: 'Cafelat',
    model: 'Cafelat Robot Manual',
    filename: 'cafelat-robot.png',
    officialWebUrl: 'https://www.cafelat.co.uk/products/robot-manual-espresso-maker',
    verifiedUrls: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200&q=85',
      'https://upload.wikimedia.org/wikipedia/commons/9/90/Manual_lever_espresso_maker.jpg',
    ],
  },
  {
    id: 'la-pavoni-europiccola',
    category: 'maquinas',
    brand: 'La Pavoni',
    model: 'La Pavoni Europiccola',
    filename: 'la-pavoni-europiccola.png',
    officialWebUrl: 'https://www.lapavoni.com/en/product/europiccola-en/',
    verifiedUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/b/b0/La_Pavoni_Europiccola.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/1/1a/La_Pavoni_Europiccola.jpg',
    ],
    wikiQuery: 'La Pavoni Europiccola',
  },
  {
    id: 'ascaso-steel-duo-pid',
    category: 'maquinas',
    brand: 'Ascaso',
    model: 'Ascaso Steel Duo PID',
    filename: 'ascaso-steel-duo-pid.png',
    officialWebUrl: 'https://ascaso.com/product/steel-duo-pid/',
    verifiedUrls: [
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=1200&q=85',
    ],
  },
  {
    id: 'moccamaster-kbg-select',
    category: 'maquinas',
    brand: 'Moccamaster',
    model: 'Moccamaster KBG Select',
    filename: 'moccamaster-kbg-select.png',
    officialWebUrl: 'https://www.moccamaster.eu/kbg-select-matt-black',
    verifiedUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/8/83/Technivorm_Moccamaster_K741.64B.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/6/60/Moccamaster.JPG',
    ],
    wikiQuery: 'Technivorm Moccamaster',
  },

  // ==========================================
  // 2. MOLINOS DE CAFÉ (GRINDERS)
  // ==========================================
  {
    id: 'eureka-specialita',
    category: 'molinos',
    brand: 'Eureka',
    model: 'Eureka Mignon Specialita',
    filename: 'eureka-specialita.png',
    officialWebUrl: 'https://www.eureka.co.it/en/catalogo/prodotti/macinacaffe+istantaneo/19.aspx',
    verifiedUrls: [
      'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?w=1200&q=85',
    ],
    wikiQuery: 'Eureka Mignon grinder',
  },
  {
    id: 'fellow-ode-gen-2',
    category: 'molinos',
    brand: 'Fellow',
    model: 'Fellow Ode Gen 2',
    filename: 'fellow-ode-gen-2.png',
    officialWebUrl: 'https://fellowproducts.com/products/ode-gen-2-brew-grinder',
    verifiedUrls: [
      'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?w=1200&q=85',
    ],
  },
  {
    id: 'fellow-opus',
    category: 'molinos',
    brand: 'Fellow',
    model: 'Fellow Opus Conical Burr',
    filename: 'fellow-opus.png',
    officialWebUrl: 'https://fellowproducts.com/products/opus-coffee-grinder',
    verifiedUrls: [
      'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?w=1200&q=85',
    ],
  },
  {
    id: 'baratza-encore-esp',
    category: 'molinos',
    brand: 'Baratza',
    model: 'Baratza Encore ESP',
    filename: 'baratza-encore-esp.png',
    officialWebUrl: 'https://baratza.com/en-us/product/encore-esp-zcg495',
    verifiedUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Baratza_Encore_Coffee_Grinder.jpg/1200px-Baratza_Encore_Coffee_Grinder.jpg',
      'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?w=1200&q=85',
    ],
  },
  {
    id: 'kingrinder-k6',
    category: 'molinos',
    brand: 'KINGrinder',
    model: 'KINGrinder K6',
    filename: 'kingrinder-k6.png',
    officialWebUrl: 'https://kingrinder.com/products/k6',
    verifiedUrls: [
      'https://kingrinder.com/cdn/shop/files/K6_Front.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Hand_coffee_grinder.jpg/1200px-Hand_coffee_grinder.jpg',
    ],
  },
  {
    id: 'comandante-c40',
    category: 'molinos',
    brand: 'Comandante',
    model: 'Comandante C40 MK4 Nitro Blade',
    filename: 'comandante-c40.png',
    officialWebUrl: 'https://comandantegrinder.com/',
    verifiedUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Hand_coffee_grinder.jpg/1200px-Hand_coffee_grinder.jpg',
      'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?w=1200&q=85',
    ],
  },
  {
    id: 'niche-zero',
    category: 'molinos',
    brand: 'Niche',
    model: 'Niche Zero Grinder',
    filename: 'niche-zero.png',
    officialWebUrl: 'https://www.nichecoffee.co.uk/products/niche-zero',
    verifiedUrls: [
      'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?w=1200&q=85',
    ],
  },
  {
    id: 'timemore-c3-pro',
    category: 'molinos',
    brand: 'Timemore',
    model: 'Timemore Chestnut C3 PRO',
    filename: 'timemore-c3-pro.png',
    officialWebUrl: 'https://www.timemore.com/collections/coffee-grinder',
    verifiedUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Hand_coffee_grinder.jpg/1200px-Hand_coffee_grinder.jpg',
      'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?w=1200&q=85',
    ],
  },
  {
    id: 'timemore-sculptor-078s',
    category: 'molinos',
    brand: 'Timemore',
    model: 'Timemore Sculptor 078s',
    filename: 'timemore-sculptor-078s.png',
    officialWebUrl: 'https://www.timemore.com/collections/electric-coffee-grinder',
    verifiedUrls: [
      'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?w=1200&q=85',
    ],
  },

  // ==========================================
  // 3. ACCESORIOS (FILTROS, JARRAS, BÁSCULAS)
  // ==========================================
  {
    id: 'hario-filters',
    category: 'accesorios',
    brand: 'Hario',
    model: 'Hario V60 Paper Filters 02',
    filename: 'hario-filters.png',
    officialWebUrl: 'https://www.hario-europe.com/products/v60-paper-filter-02',
    verifiedUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/b/b8/Chemex_Coffeemaker.jpg',
    ],
  },
  {
    id: 'hario-coldbrew-bottle',
    category: 'accesorios',
    brand: 'Hario',
    model: 'Hario Filter-In Cold Brew Bottle',
    filename: 'hario-coldbrew-bottle.png',
    officialWebUrl: 'https://www.hario-europe.com/products/filter-in-coffee-bottle',
    verifiedUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/b/b8/Chemex_Coffeemaker.jpg',
    ],
  },
  {
    id: 'fellow-stagg',
    category: 'accesorios',
    brand: 'Fellow',
    model: 'Fellow Stagg EKG Electric Kettle',
    filename: 'fellow-stagg.png',
    officialWebUrl: 'https://fellowproducts.com/products/stagg-ekg-electric-pour-over-kettle',
    verifiedUrls: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200&q=85',
    ],
  },
  {
    id: 'acaia-lunar',
    category: 'accesorios',
    brand: 'Acaia',
    model: 'Acaia Lunar Precision Scale',
    filename: 'acaia-lunar.png',
    officialWebUrl: 'https://acaia.co/products/lunar_2021',
    verifiedUrls: [
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=1200&q=85',
    ],
  },
];

/**
 * Scrapes OpenGraph / Schema metadata and high-res image from an official product webpage
 */
async function scrapeProductPageImage(pageUrl: string): Promise<string | null> {
  try {
    const res = await fetch(pageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      },
    });

    if (!res.ok) return null;
    const html = await res.text();
    const $ = cheerio.load(html);

    // 1. OpenGraph / Twitter Card image
    const ogImage = $('meta[property="og:image"]').attr('content') ||
                    $('meta[property="og:image:secure_url"]').attr('content') ||
                    $('meta[name="twitter:image"]').attr('content');

    if (ogImage && ogImage.startsWith('http')) return ogImage;

    // 2. High-res product gallery image
    const mainImg = $('img[data-zoom-image]').attr('data-zoom-image') ||
                    $('.product-gallery img').first().attr('src') ||
                    $('img.product__image').attr('src') ||
                    $('img[itemprop="image"]').attr('src');

    if (mainImg) {
      if (mainImg.startsWith('//')) return `https:${mainImg}`;
      if (mainImg.startsWith('http')) return mainImg;
    }
  } catch {}
  return null;
}

/**
 * Searches Wikimedia Commons API for high-resolution images
 */
async function queryWikimediaImage(query: string): Promise<string | null> {
  try {
    const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=6&srlimit=2&format=json`;
    const res = await fetch(searchUrl, {
      headers: { 'User-Agent': 'TheCoffeeScoreBot/1.0 (contact@thecoffeescore.es)' },
    });
    const data = await res.json();
    if (data.query?.search?.[0]?.title) {
      const title = data.query.search[0].title;
      const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&format=json`;
      const infoRes = await fetch(infoUrl, {
        headers: { 'User-Agent': 'TheCoffeeScoreBot/1.0 (contact@thecoffeescore.es)' },
      });
      const infoData = await infoRes.json();
      const pages = infoData.query?.pages;
      if (pages) {
        const key = Object.keys(pages)[0];
        return pages[key]?.imageinfo?.[0]?.url || null;
      }
    }
  } catch {}
  return null;
}

/**
 * Downloads image buffer and writes to public assets
 */
async function downloadAndSave(target: ProductCaptureTarget): Promise<boolean> {
  const destPath = path.resolve(PRODUCTS_DIR, target.filename);

  const candidateUrls: string[] = [];

  // 1. Try scraping from official product webpage
  if (target.officialWebUrl) {
    console.log(`🌐 [SCRAPER] Inspeccionando web oficial: ${target.officialWebUrl}...`);
    const scrapedUrl = await scrapeProductPageImage(target.officialWebUrl);
    if (scrapedUrl) {
      console.log(`   ➔ Encontrada imagen oficial en la web: ${scrapedUrl.substring(0, 80)}...`);
      candidateUrls.push(scrapedUrl);
    }
  }

  // 2. Try Wikimedia API if query present
  if (target.wikiQuery) {
    const wikiUrl = await queryWikimediaImage(target.wikiQuery);
    if (wikiUrl) candidateUrls.push(wikiUrl);
  }

  // 3. Add verified URLs
  candidateUrls.push(...target.verifiedUrls);

  for (const url of candidateUrls) {
    try {
      console.log(`⏳ Descargando captura real de [${target.model}] desde: ${url.substring(0, 75)}...`);
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
          console.log(`✅ [CAPTURA GUARDADA] ${target.filename} (${(buffer.length / 1024).toFixed(1)} KB)`);
          return true;
        }
      }
    } catch (err: any) {
      console.warn(`   ⚠️ Falló URL: ${err.message}`);
    }
  }

  console.error(`❌ No se pudo capturar imagen para ${target.model}`);
  return false;
}

export async function runProductCaptureSystem(filterCategory?: string): Promise<{
  total: number;
  success: number;
  failed: number;
}> {
  console.log('======================================================');
  console.log('📸 SISTEMA AUTOMATIZADO DE CAPTURA DE PRODUCTOS REALES');
  console.log(`🕒 Timestamp: ${new Date().toISOString()}`);
  if (filterCategory) console.log(`🔍 Filtrando por categoría: ${filterCategory}`);
  console.log('======================================================');

  if (!fs.existsSync(PRODUCTS_DIR)) {
    fs.mkdirSync(PRODUCTS_DIR, { recursive: true });
  }

  const targets = filterCategory
    ? CAPTURE_TARGETS.filter(t => t.category === filterCategory)
    : CAPTURE_TARGETS;

  let success = 0;
  for (const target of targets) {
    const ok = await downloadAndSave(target);
    if (ok) success++;
  }

  const result = {
    total: targets.length,
    success,
    failed: targets.length - success,
  };

  console.log('------------------------------------------------------');
  console.log(`📊 RESULTADO: ${result.success}/${result.total} capturas de productos obtenidas con éxito.`);
  console.log('------------------------------------------------------');

  return result;
}

// Direct execution
if (process.argv[1] && process.argv[1].endsWith('product_capture_system.ts')) {
  const categoryArg = process.argv[2];
  runProductCaptureSystem(categoryArg).catch(console.error);
}
