import { PRODUCTS } from '../src/data/catalog.js';

const machines = PRODUCTS.filter(p => p.category === 'maquinas');
const models = new Map<string, { brand: string; name: string; slug: string; currentImage: string; price: number }>();

for (const m of machines) {
  const cleanName = m.name.replace(/ Mod\.\d+/g, '');
  const cleanSlug = m.slug.replace(/-mod-\d+/g, '');
  if (!models.has(cleanName)) {
    models.set(cleanName, {
      brand: m.brand,
      name: cleanName,
      slug: cleanSlug,
      currentImage: m.image,
      price: m.price
    });
  }
}

console.log(`=== MODELOS ÚNICOS DE MÁQUINAS (${models.size}) ===`);
for (const [name, data] of models.entries()) {
  console.log(`- ${data.brand} | ${data.name} -> ${data.currentImage} (${data.price} €)`);
}
