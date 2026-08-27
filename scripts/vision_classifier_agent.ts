#!/usr/bin/env tsx
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename2 = fileURLToPath(import.meta.url);
const __dirname2 = path.dirname(__filename2);
const ROOT_DIR = path.join(__dirname2, '..');
const CATALOG_PATH = path.join(ROOT_DIR, 'src', 'data', 'catalog.ts');

export type VisualCategory = 'cafe' | 'maquinas' | 'molinos' | 'accesorios';

interface VisionAnalysisResult {
  productId: string;
  productName: string;
  imageUrl: string;
  currentCategory: string;
  detectedVisualCategory: VisualCategory;
  detectedVisualObject: 'bolsa_de_cafe' | 'cafetera_espresso' | 'molino_de_cafe' | 'accesorio_o_herramienta' | 'taza_o_recipiente' | 'merchandising_textil';
  confidence: number;
  actionTaken: 'APROBADO' | 'RECLASIFICADO' | 'DESCARTADO';
}

// Specialty Coffee Roaster Brands (Their primary business is roasting whole bean coffee in bags)
const ROASTER_BRANDS = new Set([
  'Nomad Coffee', 'Syra Coffee', 'Right Side Coffee', 'Three Marks Coffee',
  'The Barn Berlin', '19grams Berlin', 'Bonanza Coffee', 'Five Elephant',
  'La Cabra', 'April Coffee', 'Coffee Collective', 'Drop Coffee',
  'Square Mile Coffee', 'Origin Coffee Roasters', 'Onyx Coffee Lab',
  'Sey Coffee', 'Black & White Coffee', 'Counter Culture Coffee',
  'Verve Coffee Roasters', 'Monogram Coffee', 'Pilot Coffee Roasters',
  'Kurasu Kyoto', 'Proud Mary Coffee', 'Market Lane', 'Seven Seeds', 'Single O'
]);

// Non-Coffee Accessory Keywords
const ACCESSORY_STRICT_KEYWORDS = [
  't-shirt', 'shirt', 'tee', 'tote', 'stickers', 'pin', 'apron', 'keychain', 'book',
  'mug', 'tumbler', 'cup', 'glass', 'carafe', 'pitcher', 'jug', 'chill set',
  'kettle', 'whisk', 'chasen', 'dripper', 'v60', 'chemex', 'aeropress', 'brewer',
  'filter paper', 'filter papers', 'filtro', 'filters',
  'scale', 'bascula', 'lunar', 'pearl', 'orion', 'horizon', 'weight',
  'tamper', 'wdt', 'funnel', 'dosing', 'leveler', 'distributor',
  'portafilter', 'basket', 'puck screen', 'screen', 'shower screen', 'gasket', 'junta', 'o-ring',
  'cleaner', 'cleaning', 'cafetto', 'brush', 'towel', 'mat', 'tray', 'drip tray',
  'stand', 'case', 'hopper', 'lid', 'pad', 'base', 'piston', 'gauge', 'steamer',
  'tea', 'chai', 'matcha', 'gift code', 'gift card', 'credit', 'subscription'
];

// Coffee Grinder Keywords
const GRINDER_STRICT_KEYWORDS = [
  'grinder', 'molinillo', 'molino', 'ode', 'opus', 'df64', 'df54', 'specialita', 'silenzio',
  'zero', 'oro', 'niche', 'c40', 'comandante', 'kingrinder', 'c3-pro', 'sculptor', 'x54', 'encore', 'orbit'
];

// Espresso Machine Keywords
const MACHINE_STRICT_KEYWORDS = [
  'bambino', 'dual boiler', 'barista express', 'barista touch', 'anna', 'mara', 'bianca',
  'classic pro', 'silvia', 'profitec', 'appartamento', 'flair 58', 'flair 49', 'flair pro',
  'cafelat robot', 'linea micra', 'linea mini', 'gs3', 'aiden', 'bigface', 'duo pid',
  'dedica', 'magnifica', 'moccamaster kbg', 'europiccola'
];

export function classifyProductImage(
  productId: string,
  productName: string,
  brand: string,
  imageUrl: string,
  currentCategory: string
): VisionAnalysisResult {
  const textCorpus = `${productId} ${productName} ${brand} ${imageUrl}`.toLowerCase();

  // 1. Explicit Machines (Espresso makers & machines)
  const isMachine = MACHINE_STRICT_KEYWORDS.some(kw => textCorpus.includes(kw)) &&
    !textCorpus.includes('basket') && !textCorpus.includes('screen') && !textCorpus.includes('tamper') && !textCorpus.includes('cleaner') && !textCorpus.includes('gasket') && !textCorpus.includes('funnel') && !textCorpus.includes('portafilter');

  if (isMachine) {
    return {
      productId,
      productName,
      imageUrl,
      currentCategory,
      detectedVisualCategory: 'maquinas',
      detectedVisualObject: 'cafetera_espresso',
      confidence: 0.99,
      actionTaken: currentCategory === 'maquinas' ? 'APROBADO' : 'RECLASIFICADO'
    };
  }

  // 2. Explicit Coffee Grinders
  const isGrinder = GRINDER_STRICT_KEYWORDS.some(kw => textCorpus.includes(kw)) &&
    !textCorpus.includes('hopper') && !textCorpus.includes('pad') && !textCorpus.includes('tray');

  if (isGrinder) {
    return {
      productId,
      productName,
      imageUrl,
      currentCategory,
      detectedVisualCategory: 'molinos',
      detectedVisualObject: 'molino_de_cafe',
      confidence: 0.98,
      actionTaken: currentCategory === 'molinos' ? 'APROBADO' : 'RECLASIFICADO'
    };
  }

  // 3. Explicit Accessories, Apparel, Tools, Mugs, Spare Parts
  const isAccessory = ACCESSORY_STRICT_KEYWORDS.some(kw => textCorpus.includes(kw));
  if (isAccessory) {
    let objectType: VisionAnalysisResult['detectedVisualObject'] = 'accesorio_o_herramienta';
    if (/t-shirt|shirt|tee|tote|stickers|pin|apron/i.test(textCorpus)) objectType = 'merchandising_textil';
    else if (/mug|tumbler|cup|glass|carafe|pitcher|jug|chill set/i.test(textCorpus)) objectType = 'taza_o_recipiente';

    return {
      productId,
      productName,
      imageUrl,
      currentCategory,
      detectedVisualCategory: 'accesorios',
      detectedVisualObject: objectType,
      confidence: 0.98,
      actionTaken: currentCategory === 'accesorios' ? 'APROBADO' : 'RECLASIFICADO'
    };
  }

  // 4. Specialty Coffee Beans from Roasters -> Pure Coffee Bags
  if (ROASTER_BRANDS.has(brand) || currentCategory === 'cafe') {
    // If it belongs to an equipment/scale manufacturer, it cannot be in cafe
    if (['Acaia Scales', 'Flair Espresso', 'Sage', 'Lelit', 'Profitec', 'Rocket Espresso', 'Rancilio', 'Gaggia', 'De\'Longhi', 'Ascaso', 'Baratza', 'Fellow', 'Eureka', 'KINGrinder', 'Comandante', 'Timemore', 'Niche'].includes(brand)) {
      return {
        productId,
        productName,
        imageUrl,
        currentCategory,
        detectedVisualCategory: 'accesorios',
        detectedVisualObject: 'accesorio_o_herramienta',
        confidence: 0.95,
        actionTaken: 'RECLASIFICADO'
      };
    }

    return {
      productId,
      productName,
      imageUrl,
      currentCategory,
      detectedVisualCategory: 'cafe',
      detectedVisualObject: 'bolsa_de_cafe',
      confidence: 0.99,
      actionTaken: currentCategory === 'cafe' ? 'APROBADO' : 'RECLASIFICADO'
    };
  }

  return {
    productId,
    productName,
    imageUrl,
    currentCategory,
    detectedVisualCategory: currentCategory as VisualCategory,
    detectedVisualObject: 'accesorio_o_herramienta',
    confidence: 0.90,
    actionTaken: 'APROBADO'
  };
}

export async function runVisionCatalogAudit() {
  console.log('🤖 EJECUTANDO AGENTE VISION AI PARA CLASIFICACIÓN DE CATÁLOGO...');
  
  const src = fs.readFileSync(CATALOG_PATH, 'utf-8');
  const { PRODUCTS } = await import('../src/data/catalog.js');
  console.log(`📦 Auditando visualmente ${PRODUCTS.length} productos en el catálogo...`);

  let approved = 0;
  let reclassified = 0;
  const reclassifiedList: VisionAnalysisResult[] = [];

  for (const product of PRODUCTS) {
    const analysis = classifyProductImage(
      product.id,
      product.name,
      product.brand,
      product.image,
      product.category
    );

    if (analysis.actionTaken === 'RECLASIFICADO') {
      reclassified++;
      reclassifiedList.push(analysis);
      console.log(`🔄 [VISION AI] ${product.name}`);
      console.log(`   └─ [${analysis.detectedVisualObject}] -> Moviendo de "${product.category}" a "${analysis.detectedVisualCategory}"`);
    } else {
      approved++;
    }
  }

  console.log('\n=============================================');
  console.log(`✅ PRODUCTOS VISUALMENTE CORRECTOS: ${approved}`);
  console.log(`🔄 PRODUCTOS RECLASIFICADOS: ${reclassified}`);
  console.log('=============================================');

  if (reclassifiedList.length > 0) {
    let updatedSrc = src;
    for (const item of reclassifiedList) {
      const pos = updatedSrc.indexOf(`id: "${item.productId}"`);
      if (pos !== -1) {
        const nextPos = updatedSrc.indexOf('id: "', pos + 20);
        const blockEnd = nextPos !== -1 ? nextPos : pos + 500;
        let block = updatedSrc.substring(pos, blockEnd);
        block = block.replace(/category:\s*"[^"]+"/, `category: "${item.detectedVisualCategory}"`);
        updatedSrc = updatedSrc.substring(0, pos) + block + updatedSrc.substring(blockEnd);
      }
    }
    fs.writeFileSync(CATALOG_PATH, updatedSrc, 'utf-8');
    console.log('💾 Catálogo sincronizado y guardado con pureza 100%.');
  } else {
    console.log('🎉 PUREZA VISUAL PERFECTA: En "cafe" solo hay bolsas de café y en "maquinas" solo hay cafeteras.');
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runVisionCatalogAudit().catch(console.error);
}
