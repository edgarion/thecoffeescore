import { PRODUCTS } from '../src/data/catalog.js';

let totalProducts = PRODUCTS.length;
let withStores = 0;
let emptyStores = 0;

for (const p of PRODUCTS) {
  if (p.stores && p.stores.length > 0) {
    withStores++;
  } else {
    emptyStores++;
  }
}

console.log(`Total products: ${totalProducts}`);
console.log(`Products with stores: ${withStores}`);
console.log(`Products without stores: ${emptyStores}`);

// Sample store of first 5 products
for (const p of PRODUCTS.slice(0, 5)) {
  console.log(`\nProduct: ${p.name} (${p.price} €)`);
  console.log('Stores:', JSON.stringify(p.stores, null, 2));
}
