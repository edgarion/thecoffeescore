import fs from 'fs';

interface GlobalStoreTarget {
  name: string;
  country: string;
  region: 'Europa' | 'Norteamérica' | 'Asia / Oceanía';
  type: 'roaster' | 'equipment';
  endpoint: string;
  domain: string;
}

const GLOBAL_STORES: GlobalStoreTarget[] = [
  // Europa
  { name: 'Nomad Coffee', country: 'España', region: 'Europa', type: 'roaster', endpoint: 'https://nomadcoffee.es/products.json?limit=10', domain: 'https://nomadcoffee.es' },
  { name: 'Syra Coffee', country: 'España', region: 'Europa', type: 'roaster', endpoint: 'https://syra.coffee/collections/all/products.json?limit=10', domain: 'https://syra.coffee' },
  { name: 'Right Side Coffee', country: 'España', region: 'Europa', type: 'roaster', endpoint: 'https://rightsidecoffee.com/collections/all/products.json?limit=10', domain: 'https://rightsidecoffee.com' },
  { name: 'Three Marks Coffee', country: 'España', region: 'Europa', type: 'roaster', endpoint: 'https://threemarkscoffee.com/collections/all/products.json?limit=10', domain: 'https://threemarkscoffee.com' },
  { name: 'The Barn Berlin', country: 'Alemania', region: 'Europa', type: 'roaster', endpoint: 'https://thebarn.de/products.json?limit=10', domain: 'https://thebarn.de' },
  { name: 'La Cabra', country: 'Dinamarca', region: 'Europa', type: 'roaster', endpoint: 'https://lacabra.dk/products.json?limit=10', domain: 'https://lacabra.dk' },
  { name: 'Dak Coffee Roasters', country: 'Países Bajos', region: 'Europa', type: 'roaster', endpoint: 'https://dakcoffeeroasters.com/products.json?limit=10', domain: 'https://dakcoffeeroasters.com' },
  { name: 'April Coffee', country: 'Dinamarca', region: 'Europa', type: 'roaster', endpoint: 'https://aprilcoffeeroasters.com/products.json?limit=10', domain: 'https://aprilcoffeeroasters.com' },

  // Norteamérica
  { name: 'Onyx Coffee Lab', country: 'Estados Unidos', region: 'Norteamérica', type: 'roaster', endpoint: 'https://onyxcoffeelab.com/products.json?limit=10', domain: 'https://onyxcoffeelab.com' },
  { name: 'Sey Coffee', country: 'Estados Unidos', region: 'Norteamérica', type: 'roaster', endpoint: 'https://seycoffee.com/products.json?limit=10', domain: 'https://seycoffee.com' },
  { name: 'Black & White Coffee', country: 'Estados Unidos', region: 'Norteamérica', type: 'roaster', endpoint: 'https://blackwhiteroasters.com/products.json?limit=10', domain: 'https://blackwhiteroasters.com' },

  // Asia / Oceanía
  { name: 'Kurasu Kyoto', country: 'Japón', region: 'Asia / Oceanía', type: 'roaster', endpoint: 'https://kurasu.kyoto/products.json?limit=10', domain: 'https://kurasu.kyoto' },
  { name: 'Proud Mary Coffee', country: 'Australia', region: 'Asia / Oceanía', type: 'roaster', endpoint: 'https://proudmarycoffee.com/products.json?limit=10', domain: 'https://proudmarycoffee.com' },
  { name: 'Market Lane', country: 'Australia', region: 'Asia / Oceanía', type: 'roaster', endpoint: 'https://marketlane.com.au/products.json?limit=10', domain: 'https://marketlane.com.au' },

  // Tiendas Globales de Equipamiento Barista
  { name: 'Fellow Products', country: 'Global / USA', region: 'Norteamérica', type: 'equipment', endpoint: 'https://fellowproducts.com/products.json?limit=10', domain: 'https://fellowproducts.com' },
  { name: 'Acaia Scales', country: 'Global', region: 'Norteamérica', type: 'equipment', endpoint: 'https://acaia.co/products.json?limit=10', domain: 'https://acaia.co' },
  { name: 'Flair Espresso', country: 'Global', region: 'Norteamérica', type: 'equipment', endpoint: 'https://flairespresso.com/products.json?limit=10', domain: 'https://flairespresso.com' },
  { name: 'Clive Coffee', country: 'Estados Unidos', region: 'Norteamérica', type: 'equipment', endpoint: 'https://clivecoffee.com/products.json?limit=10', domain: 'https://clivecoffee.com' },
];

async function testScraping() {
  console.log('🌍 Iniciando scraping de tiendas de café y equipamiento de todo el mundo...');
  console.log(`📦 Tiendas objetivo: ${GLOBAL_STORES.length}\n`);

  let totalItemsScraped = 0;

  for (const store of GLOBAL_STORES) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);

      const res = await fetch(store.endpoint, {
        signal: controller.signal,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
          'Accept': 'application/json',
        },
      });
      clearTimeout(timeout);

      if (res.ok) {
        const data = await res.json();
        const products = data.products || [];
        totalItemsScraped += products.length;

        console.log(`✅ [${store.region}] ${store.name} (${store.country}): ${products.length} productos obtenidos.`);
        if (products.length > 0) {
          const first = products[0];
          const price = first.variants?.[0]?.price || 'N/A';
          console.log(`   ➔ Ejemplo: "${first.title}" | Precio: ${price} | Img: ${first.images?.[0]?.src ? '✓ Sí' : '✗ No'}`);
        }
      } else {
        console.warn(`⚠️ [${store.region}] ${store.name}: HTTP ${res.status}`);
      }
    } catch (e: any) {
      console.warn(`⚠️ [${store.region}] ${store.name}: Error ${e.message}`);
    }
  }

  console.log(`\n🎉 Scraping global completado con éxito: ${totalItemsScraped} productos indexados en vivo.`);
}

testScraping().catch(console.error);
