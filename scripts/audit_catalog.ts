import { PRODUCTS } from '../src/data/catalog.js';

console.log(`Total PRODUCTS: ${PRODUCTS.length}`);
const realProducts = PRODUCTS.filter(p => !p.id.includes('-mod-') && !p.id.match(/-v\d+$/));
console.log(`Real unique products count: ${realProducts.length}`);

for (const p of realProducts) {
  console.log(`- [${p.category}] ${p.id} | "${p.brand} - ${p.name}" | img: ${p.image} | price: ${p.price}€`);
}
