import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const CATALOG_PATH = path.resolve(ROOT_DIR, 'src', 'data', 'catalog.ts');

function generateStores(p: any) {
  const query = `${p.brand} ${p.name}`.trim();
  const encoded = encodeURIComponent(query);
  const basePrice = p.price;

  if (p.category === 'cafe') {
    let officialUrl = `https://www.google.com/search?q=${encoded}+comprar+online`;
    const brandLower = (p.brand || '').toLowerCase();
    if (brandLower.includes('nomad')) officialUrl = `https://nomadcoffee.es/search?q=${encoded}`;
    else if (brandLower.includes('syra')) officialUrl = `https://syra.coffee/search?q=${encoded}`;
    else if (brandLower.includes('right side')) officialUrl = `https://rightsidecoffee.com/search?q=${encoded}`;
    else if (brandLower.includes('three marks')) officialUrl = `https://threemarkscoffee.com/search?q=${encoded}`;

    return [
      {
        name: `${p.brand} (Tostador Oficial)`,
        price: basePrice,
        inStock: true,
        url: officialUrl,
        isBest: true,
      },
      {
        name: 'Tienda Barista Especializada',
        price: Math.round(basePrice * 1.05 * 100) / 100,
        inStock: true,
        url: `https://tiendabarista.es/search?q=${encoded}`,
        isBest: false,
      },
      {
        name: 'Amazon Especialidad',
        price: Math.round(basePrice * 1.08 * 100) / 100,
        inStock: true,
        url: `https://www.amazon.es/s?k=${encoded}&tag=thecoffeescore-21`,
        isBest: false,
      },
    ];
  }

  if (p.category === 'maquinas') {
    return [
      {
        name: 'Amazon',
        price: basePrice,
        inStock: true,
        url: `https://www.amazon.es/s?k=${encoded}&tag=thecoffeescore-21`,
        isBest: true,
      },
      {
        name: 'El Corte Inglés',
        price: p.oldPrice ? p.oldPrice : Math.round(basePrice * 1.06),
        inStock: true,
        url: `https://www.elcorteingles.es/search/?s=${encoded}`,
        isBest: false,
      },
      {
        name: 'MediaMarkt',
        price: basePrice + 10,
        inStock: true,
        url: `https://www.mediamarkt.es/es/search.html?query=${encoded}`,
        isBest: false,
      },
      {
        name: 'Tienda Barista Especializada',
        price: basePrice + 15,
        inStock: true,
        url: `https://tiendabarista.es/search?q=${encoded}`,
        isBest: false,
      },
      {
        name: 'Distribuidor Oficial Autorizado',
        price: basePrice + 20,
        inStock: true,
        url: `https://www.espressocoffeeshop.com/en/search?search_query=${encoded}`,
        isBest: false,
      },
    ];
  }

  if (p.category === 'molinos') {
    return [
      {
        name: 'Amazon',
        price: basePrice,
        inStock: true,
        url: `https://www.amazon.es/s?k=${encoded}&tag=thecoffeescore-21`,
        isBest: true,
      },
      {
        name: 'Tienda Barista Especializada',
        price: Math.round(basePrice * 1.04),
        inStock: true,
        url: `https://tiendabarista.es/search?q=${encoded}`,
        isBest: false,
      },
      {
        name: 'El Corte Inglés',
        price: p.oldPrice ? p.oldPrice : Math.round(basePrice * 1.06),
        inStock: true,
        url: `https://www.elcorteingles.es/search/?s=${encoded}`,
        isBest: false,
      },
      {
        name: 'Distribuidor Oficial Autorizado',
        price: basePrice + 10,
        inStock: true,
        url: `https://www.espressocoffeeshop.com/en/search?search_query=${encoded}`,
        isBest: false,
      },
    ];
  }

  // accesorios
  return [
    {
      name: 'Amazon',
      price: basePrice,
      inStock: true,
      url: `https://www.amazon.es/s?k=${encoded}&tag=thecoffeescore-21`,
      isBest: true,
    },
    {
      name: 'Tienda Barista Especializada',
      price: Math.round(basePrice * 1.05 * 100) / 100,
      inStock: true,
      url: `https://tiendabarista.es/search?q=${encoded}`,
      isBest: false,
    },
    {
      name: 'El Corte Inglés',
      price: Math.round(basePrice * 1.08 * 100) / 100,
      inStock: true,
      url: `https://www.elcorteingles.es/search/?s=${encoded}`,
      isBest: false,
    },
  ];
}

async function run() {
  console.log('📖 Leyendo productos para enriquecer tiendas y enlaces de compra...');
  const { PRODUCTS } = await import('../src/data/catalog.js');

  let content = fs.readFileSync(CATALOG_PATH, 'utf-8');

  for (const p of PRODUCTS) {
    const stores = generateStores(p);
    const jsonStores = JSON.stringify(stores);

    // Replace stores in product block
    // Match the product by id
    const escapedId = p.id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(id:\\s*"${escapedId}"[\\s\\S]*?stores:\\s*)\\[[\\s\\S]*?\\]`, 'm');
    
    if (regex.test(content)) {
      content = content.replace(regex, `$1${jsonStores}`);
    }
  }

  fs.writeFileSync(CATALOG_PATH, content, 'utf-8');
  console.log('✅ Tiendas y enlaces directos enriquecidos con éxito en todo el catálogo.');
}

run().catch(console.error);
