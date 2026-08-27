import { PRODUCTS } from '../src/data/catalog.js';

const machineProducts = PRODUCTS.filter(p => p.category === 'maquinas');
console.log(`Total machines: ${machineProducts.length}`);

// Group by brand
const byBrand: { [key: string]: typeof machineProducts } = {};
for (const p of machineProducts) {
  if (!byBrand[p.brand]) byBrand[p.brand] = [];
  byBrand[p.brand].push(p);
}

for (const [brand, items] of Object.entries(byBrand)) {
  console.log(`\n--- ${brand} (${items.length}) ---`);
  for (const item of items) {
    console.log(`- ${item.id} | "${item.name}" -> ${item.image}`);
  }
}
