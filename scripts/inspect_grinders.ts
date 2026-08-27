import { PRODUCTS } from '../src/data/catalog.js';

const grinders = PRODUCTS.filter(p => p.category === 'molinos');
console.log(`\n=== GRINDERS (${grinders.length}) ===`);
const grinderBrands: { [k: string]: typeof grinders } = {};
for (const g of grinders) {
  if (!grinderBrands[g.brand]) grinderBrands[g.brand] = [];
  grinderBrands[g.brand].push(g);
}
for (const [b, items] of Object.entries(grinderBrands)) {
  console.log(`\n--- ${b} (${items.length}) ---`);
  for (const item of items) {
    console.log(`- ${item.id} | "${item.name}" -> ${item.image}`);
  }
}
