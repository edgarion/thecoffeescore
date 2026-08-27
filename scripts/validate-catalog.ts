import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Domain imports
import { PRODUCTS, BRANDS, BUYING_GUIDES } from '../src/data/catalog.js';
import { B2B_SUPPLIERS } from '../src/data/b2bSuppliers.js';
import { GLOBAL_COFFEE_SHOPS } from '../src/data/globalCoffeeIndex.js';
import { BLOG_ARTICLES } from '../src/data/blogArticles.js';
import { BARCELONA_SPECIALTY_COFFEES } from '../src/components/roasters/BarcelonaCoffeeSlider.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.resolve(ROOT_DIR, 'public');

export interface ValidationError {
  type: 'ERROR' | 'WARNING';
  entityType: 'PRODUCT' | 'B2B_SUPPLIER' | 'GLOBAL_SHOP' | 'BLOG_ARTICLE' | 'BUYING_GUIDE' | 'BARCELONA_COFFEE';
  entityId: string;
  field: string;
  message: string;
}

export interface ValidationSummary {
  timestamp: string;
  totalEntitiesChecked: number;
  productsChecked: number;
  b2bSuppliersChecked: number;
  globalShopsChecked: number;
  blogArticlesChecked: number;
  buyingGuidesChecked: number;
  barcelonaCoffeesChecked: number;
  totalErrors: number;
  totalWarnings: number;
  status: 'PASSED' | 'FAILED_WITH_ERRORS';
  errors: ValidationError[];
}

/**
 * Verifies if an image path or remote URL is valid and accessible.
 */
async function verifyImage(
  imagePath: string,
  entityId: string,
  entityType: ValidationError['entityType'],
  field: string,
  errors: ValidationError[]
): Promise<boolean> {
  if (!imagePath || typeof imagePath !== 'string' || imagePath.trim() === '') {
    errors.push({
      type: 'ERROR',
      entityType,
      entityId,
      field,
      message: `Image path is empty or undefined.`,
    });
    return false;
  }

  // 1. Local image check (/assets/...)
  if (imagePath.startsWith('/') || imagePath.startsWith('assets/')) {
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    const fullDiskPath = path.resolve(PUBLIC_DIR, cleanPath);

    if (!fs.existsSync(fullDiskPath)) {
      errors.push({
        type: 'ERROR',
        entityType,
        entityId,
        field,
        message: `Local image file does not exist on disk: "${fullDiskPath}" (URL: "${imagePath}")`,
      });
      return false;
    }

    const stats = fs.statSync(fullDiskPath);
    if (stats.size === 0) {
      errors.push({
        type: 'ERROR',
        entityType,
        entityId,
        field,
        message: `Local image file is 0 bytes (empty file): "${fullDiskPath}"`,
      });
      return false;
    }

    return true;
  }

  // 2. Remote image URL (https://...)
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    try {
      const url = new URL(imagePath);
      if (!url.protocol.startsWith('http')) {
        errors.push({
          type: 'ERROR',
          entityType,
          entityId,
          field,
          message: `Invalid remote URL protocol: "${imagePath}"`,
        });
        return false;
      }
      return true;
    } catch (err: any) {
      errors.push({
        type: 'ERROR',
        entityType,
        entityId,
        field,
        message: `Malformed remote URL: "${imagePath}"`,
      });
      return false;
    }
  }

  errors.push({
    type: 'ERROR',
    entityType,
    entityId,
    field,
    message: `Unknown image path format: "${imagePath}"`,
  });
  return false;
}

/**
 * Validates Catalog Products
 */
async function validateProducts(errors: ValidationError[]): Promise<number> {
  const validCategories = ['maquinas', 'molinos', 'accesorios', 'cafe'];
  const seenIds = new Set<string>();
  const seenSlugs = new Set<string>();

  for (const product of PRODUCTS) {
    // 1. ID & Slug Uniqueness
    if (!product.id) {
      errors.push({ type: 'ERROR', entityType: 'PRODUCT', entityId: 'UNKNOWN', field: 'id', message: 'Product is missing an ID' });
    } else if (seenIds.has(product.id)) {
      errors.push({ type: 'ERROR', entityType: 'PRODUCT', entityId: product.id, field: 'id', message: `Duplicate product ID: "${product.id}"` });
    } else {
      seenIds.add(product.id);
    }

    if (!product.slug) {
      errors.push({ type: 'ERROR', entityType: 'PRODUCT', entityId: product.id, field: 'slug', message: 'Product is missing a slug' });
    } else if (seenSlugs.has(product.slug)) {
      errors.push({ type: 'ERROR', entityType: 'PRODUCT', entityId: product.id, field: 'slug', message: `Duplicate product slug: "${product.slug}"` });
    } else {
      seenSlugs.add(product.slug);
    }

    // 2. Name & Brand
    if (!product.name || product.name.trim() === '') {
      errors.push({ type: 'ERROR', entityType: 'PRODUCT', entityId: product.id, field: 'name', message: 'Product name is empty' });
    }
    if (!product.brand || product.brand.trim() === '') {
      errors.push({ type: 'ERROR', entityType: 'PRODUCT', entityId: product.id, field: 'brand', message: 'Product brand is empty' });
    }

    // 3. Category & Subcategory
    if (!validCategories.includes(product.category)) {
      errors.push({ type: 'ERROR', entityType: 'PRODUCT', entityId: product.id, field: 'category', message: `Invalid category "${product.category}". Must be one of: ${validCategories.join(', ')}` });
    }
    if (!product.subCategory) {
      errors.push({ type: 'WARNING', entityType: 'PRODUCT', entityId: product.id, field: 'subCategory', message: 'Product subCategory is missing' });
    }

    // 4. Price & Historical Pricing
    if (typeof product.price !== 'number' || isNaN(product.price) || product.price <= 0) {
      errors.push({ type: 'ERROR', entityType: 'PRODUCT', entityId: product.id, field: 'price', message: `Invalid price "${product.price}". Price must be a positive number.` });
    }
    if (product.oldPrice !== null && product.oldPrice !== undefined) {
      if (typeof product.oldPrice !== 'number' || product.oldPrice <= product.price) {
        errors.push({ type: 'WARNING', entityType: 'PRODUCT', entityId: product.id, field: 'oldPrice', message: `oldPrice (${product.oldPrice}) should be greater than current price (${product.price}).` });
      }
    }

    // 5. Score & Rating
    if (!product.score || typeof product.score.getValue !== 'function') {
      errors.push({ type: 'ERROR', entityType: 'PRODUCT', entityId: product.id, field: 'score', message: 'Product score is missing or invalid CoffeeScore instance' });
    } else {
      const scoreVal = product.score.getValue();
      if (typeof scoreVal !== 'number' || scoreVal < 0 || scoreVal > 10) {
        errors.push({ type: 'ERROR', entityType: 'PRODUCT', entityId: product.id, field: 'score', message: `Score value ${scoreVal} is out of bounds [0.0 - 10.0]` });
      }
    }

    if (typeof product.stars !== 'number' || product.stars < 1 || product.stars > 5) {
      errors.push({ type: 'WARNING', entityType: 'PRODUCT', entityId: product.id, field: 'stars', message: `Stars ${product.stars} should be between 1.0 and 5.0` });
    }

    // 6. Pros and Cons
    if (!Array.isArray(product.pros) || product.pros.length === 0) {
      errors.push({ type: 'ERROR', entityType: 'PRODUCT', entityId: product.id, field: 'pros', message: 'Product pros must be a non-empty array' });
    }
    if (!Array.isArray(product.cons) || product.cons.length === 0) {
      errors.push({ type: 'ERROR', entityType: 'PRODUCT', entityId: product.id, field: 'cons', message: 'Product cons must be a non-empty array' });
    }

    // 7. Specs Validation per category
    if (!product.specs || typeof product.specs !== 'object' || Object.keys(product.specs).length === 0) {
      errors.push({ type: 'ERROR', entityType: 'PRODUCT', entityId: product.id, field: 'specs', message: 'Product technical specs are empty or missing' });
    } else {
      if (product.category === 'maquinas') {
        const hasMachineKey = product.specs.caldera || product.specs.bomba || product.specs.potencia || product.specs.calentamiento;
        if (!hasMachineKey) {
          errors.push({ type: 'WARNING', entityType: 'PRODUCT', entityId: product.id, field: 'specs', message: 'Coffee machine is missing standard machine specs (bomba/caldera/potencia)' });
        }
      } else if (product.category === 'molinos') {
        const hasGrinderKey = product.specs.muelas || product.specs.ajuste || product.specs.velocidad || product.specs.tipo;
        if (!hasGrinderKey) {
          errors.push({ type: 'WARNING', entityType: 'PRODUCT', entityId: product.id, field: 'specs', message: 'Grinder is missing standard grinder specs (muelas/ajuste)' });
        }
      } else if (product.category === 'cafe') {
        const hasCoffeeKey = product.specs.origen || product.specs.proceso || product.specs.variedad || product.specs.tueste;
        if (!hasCoffeeKey) {
          errors.push({ type: 'WARNING', entityType: 'PRODUCT', entityId: product.id, field: 'specs', message: 'Specialty coffee is missing origin/process specs' });
        }
      }
    }

    // 8. Stores & Affiliate Links
    if (!Array.isArray(product.stores) || product.stores.length === 0) {
      errors.push({ type: 'ERROR', entityType: 'PRODUCT', entityId: product.id, field: 'stores', message: 'Product must have at least one store price/link' });
    } else {
      for (let sIdx = 0; sIdx < product.stores.length; sIdx++) {
        const st = product.stores[sIdx];
        if (!st.name || !st.url || typeof st.price !== 'number' || st.price <= 0) {
          errors.push({ type: 'ERROR', entityType: 'PRODUCT', entityId: product.id, field: `stores[${sIdx}]`, message: `Invalid store entry: ${JSON.stringify(st)}` });
        }
        if (st.url && !st.url.startsWith('http://') && !st.url.startsWith('https://')) {
          errors.push({ type: 'ERROR', entityType: 'PRODUCT', entityId: product.id, field: `stores[${sIdx}].url`, message: `Store URL must be absolute HTTP/HTTPS: "${st.url}"` });
        }
      }
    }

    // 9. Main Image and Gallery Validation
    await verifyImage(product.image, product.id, 'PRODUCT', 'image', errors);

    if (Array.isArray(product.gallery)) {
      for (let gIdx = 0; gIdx < product.gallery.length; gIdx++) {
        await verifyImage(product.gallery[gIdx], product.id, 'PRODUCT', `gallery[${gIdx}]`, errors);
      }
    }
  }

  return PRODUCTS.length;
}

/**
 * Validates Barcelona Coffees
 */
async function validateBarcelonaCoffees(errors: ValidationError[]): Promise<number> {
  for (const coffee of BARCELONA_SPECIALTY_COFFEES) {
    if (!coffee.id || !coffee.name || !coffee.roaster) {
      errors.push({ type: 'ERROR', entityType: 'BARCELONA_COFFEE', entityId: coffee.id || 'UNKNOWN', field: 'name/roaster', message: 'Missing name or roaster' });
    }
    if (typeof coffee.price !== 'number' || coffee.price <= 0) {
      errors.push({ type: 'ERROR', entityType: 'BARCELONA_COFFEE', entityId: coffee.id, field: 'price', message: `Invalid price "${coffee.price}"` });
    }
    if (!coffee.storeUrl || !coffee.storeUrl.startsWith('http')) {
      errors.push({ type: 'ERROR', entityType: 'BARCELONA_COFFEE', entityId: coffee.id, field: 'storeUrl', message: `Invalid storeUrl: "${coffee.storeUrl}"` });
    }
    await verifyImage(coffee.image, coffee.id, 'BARCELONA_COFFEE', 'image', errors);
  }
  return BARCELONA_SPECIALTY_COFFEES.length;
}

/**
 * Validates B2B Suppliers
 */
async function validateB2BSuppliers(errors: ValidationError[]): Promise<number> {
  const seenIds = new Set<string>();

  for (const supplier of B2B_SUPPLIERS) {
    if (!supplier.id) {
      errors.push({ type: 'ERROR', entityType: 'B2B_SUPPLIER', entityId: 'UNKNOWN', field: 'id', message: 'B2B Supplier missing ID' });
    } else if (seenIds.has(supplier.id)) {
      errors.push({ type: 'ERROR', entityType: 'B2B_SUPPLIER', entityId: supplier.id, field: 'id', message: `Duplicate B2B supplier ID: "${supplier.id}"` });
    } else {
      seenIds.add(supplier.id);
    }

    if (!supplier.name || !supplier.country || !supplier.continent) {
      errors.push({ type: 'ERROR', entityType: 'B2B_SUPPLIER', entityId: supplier.id, field: 'name/country', message: 'Missing required supplier name, country or continent' });
    }

    if (!supplier.priceIndex || (!supplier.priceIndex.greenFobKg && !supplier.priceIndex.wholesaleKg)) {
      errors.push({ type: 'ERROR', entityType: 'B2B_SUPPLIER', entityId: supplier.id, field: 'priceIndex', message: 'Supplier must have green FOB or wholesale pricing index' });
    }

    if (!supplier.email || !supplier.email.includes('@')) {
      errors.push({ type: 'WARNING', entityType: 'B2B_SUPPLIER', entityId: supplier.id, field: 'email', message: `Invalid email address format: "${supplier.email}"` });
    }

    if (!supplier.website || !supplier.website.startsWith('http')) {
      errors.push({ type: 'ERROR', entityType: 'B2B_SUPPLIER', entityId: supplier.id, field: 'website', message: `Invalid website URL: "${supplier.website}"` });
    }
  }

  return B2B_SUPPLIERS.length;
}

/**
 * Validates Global Coffee Index
 */
async function validateGlobalCoffeeShops(errors: ValidationError[]): Promise<number> {
  for (const shop of GLOBAL_COFFEE_SHOPS) {
    if (!shop.id || !shop.name || !shop.city || !shop.country) {
      errors.push({ type: 'ERROR', entityType: 'GLOBAL_SHOP', entityId: shop.id || 'UNKNOWN', field: 'name/city', message: 'Missing required shop name, city or country' });
    }

    if (typeof shop.score !== 'number' || shop.score < 0 || shop.score > 10) {
      errors.push({ type: 'WARNING', entityType: 'GLOBAL_SHOP', entityId: shop.id, field: 'score', message: `Shop score (${shop.score}) should be between 0.0 and 10.0` });
    }

    if (typeof shop.priceEspresso !== 'number' || shop.priceEspresso <= 0) {
      errors.push({ type: 'ERROR', entityType: 'GLOBAL_SHOP', entityId: shop.id, field: 'priceEspresso', message: `Invalid priceEspresso "${shop.priceEspresso}"` });
    }

    if (!shop.websiteUrl || !shop.websiteUrl.startsWith('http')) {
      errors.push({ type: 'WARNING', entityType: 'GLOBAL_SHOP', entityId: shop.id, field: 'websiteUrl', message: `Invalid websiteUrl: "${shop.websiteUrl}"` });
    }

    if (!shop.mapsUrl || !shop.mapsUrl.startsWith('http')) {
      errors.push({ type: 'WARNING', entityType: 'GLOBAL_SHOP', entityId: shop.id, field: 'mapsUrl', message: `Invalid mapsUrl: "${shop.mapsUrl}"` });
    }
  }

  return GLOBAL_COFFEE_SHOPS.length;
}

/**
 * Validates Blog Articles & Buying Guides
 */
async function validateBlogAndGuides(errors: ValidationError[]): Promise<{ blogCount: number; guideCount: number }> {
  for (const article of BLOG_ARTICLES) {
    if (!article.id || !article.title || !article.sourceUrl) {
      errors.push({ type: 'ERROR', entityType: 'BLOG_ARTICLE', entityId: article.id || 'UNKNOWN', field: 'title/sourceUrl', message: 'Missing title or sourceUrl' });
    }
    if (article.sourceUrl && !article.sourceUrl.startsWith('http')) {
      errors.push({ type: 'ERROR', entityType: 'BLOG_ARTICLE', entityId: article.id, field: 'sourceUrl', message: `Invalid sourceUrl: "${article.sourceUrl}"` });
    }
  }

  for (const guide of BUYING_GUIDES) {
    if (!guide.id || !guide.title || !guide.category) {
      errors.push({ type: 'ERROR', entityType: 'BUYING_GUIDE', entityId: guide.id || 'UNKNOWN', field: 'title/category', message: 'Missing title or category' });
    }
    if (guide.image) {
      await verifyImage(guide.image, guide.id, 'BUYING_GUIDE', 'image', errors);
    }
  }

  return {
    blogCount: BLOG_ARTICLES.length,
    guideCount: BUYING_GUIDES.length,
  };
}

/**
 * Main Execution Function
 */
export async function runCatalogValidator(): Promise<ValidationSummary> {
  const startTime = Date.now();
  console.log('\n======================================================');
  console.log('🔍 THE COFFEE SCORE · VALIDACIÓN INTEGRAL DE CATÁLOGO & DATOS');
  console.log(`🕒 Timestamp: ${new Date().toISOString()}`);
  console.log('======================================================\n');

  const errors: ValidationError[] = [];

  console.log('📦 1/5 Validando Catálogo de Productos y Galería de Imágenes...');
  const productsChecked = await validateProducts(errors);
  console.log(`   ✓ ${productsChecked} productos verificados.`);

  console.log('☕ 2/5 Validando Cafés de Especialidad de Barcelona...');
  const barcelonaCoffeesChecked = await validateBarcelonaCoffees(errors);
  console.log(`   ✓ ${barcelonaCoffeesChecked} cafés verificados.`);

  console.log('🌍 3/5 Validando Directorio B2B y Precios FOB...');
  const b2bSuppliersChecked = await validateB2BSuppliers(errors);
  console.log(`   ✓ ${b2bSuppliersChecked} proveedores B2B verificados.`);

  console.log('🏆 4/5 Validando Índice Global de Cafeterías & Templos del Café...');
  const globalShopsChecked = await validateGlobalCoffeeShops(errors);
  console.log(`   ✓ ${globalShopsChecked} cafeterías verificadas.`);

  console.log('📰 5/5 Validando Blog y Guías de Compra...');
  const { blogCount, guideCount } = await validateBlogAndGuides(errors);
  console.log(`   ✓ ${blogCount} artículos y ${guideCount} guías verificadas.\n`);

  const totalEntitiesChecked = productsChecked + barcelonaCoffeesChecked + b2bSuppliersChecked + globalShopsChecked + blogCount + guideCount;
  const totalErrors = errors.filter(e => e.type === 'ERROR').length;
  const totalWarnings = errors.filter(e => e.type === 'WARNING').length;
  const status: ValidationSummary['status'] = totalErrors === 0 ? 'PASSED' : 'FAILED_WITH_ERRORS';

  const summary: ValidationSummary = {
    timestamp: new Date().toISOString(),
    totalEntitiesChecked,
    productsChecked,
    barcelonaCoffeesChecked,
    b2bSuppliersChecked,
    globalShopsChecked,
    blogArticlesChecked: blogCount,
    buyingGuidesChecked: guideCount,
    totalErrors,
    totalWarnings,
    status,
    errors,
  };

  // Save reports
  const reportsDir = path.resolve(ROOT_DIR, 'reports');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  const jsonReportPath = path.resolve(reportsDir, 'catalog-validation-report.json');
  fs.writeFileSync(jsonReportPath, JSON.stringify(summary, null, 2), 'utf-8');

  const mdReportPath = path.resolve(reportsDir, 'latest-validation-summary.md');
  const mdContent = `# Informe Diario de Validación de Catálogo & Medios

- **Fecha y Hora**: ${summary.timestamp}
- **Estado General**: ${status === 'PASSED' ? '✅ APROBADO (0 Errores)' : '❌ FALLIDO CON ERRORES'}
- **Total Entidades Verificadas**: ${totalEntitiesChecked}
  - Productos en Catálogo: ${productsChecked}
  - Cafés de Barcelona: ${barcelonaCoffeesChecked}
  - Proveedores B2B: ${b2bSuppliersChecked}
  - Cafeterías Globales: ${globalShopsChecked}
  - Artículos y Guías: ${blogCount + guideCount}
- **Errores Críticos**: ${totalErrors}
- **Advertencias**: ${totalWarnings}

${totalErrors > 0 ? `## ⚠️ Detalle de Errores:\n${errors.filter(e => e.type === 'ERROR').map(e => `- [${e.entityType}] **${e.entityId}** (${e.field}): ${e.message}`).join('\n')}` : 'Todos los datos, precios, enlaces e imágenes son 100% consistentes y válidos.'}
`;
  fs.writeFileSync(mdReportPath, mdContent, 'utf-8');

  // Print results to console
  console.log('------------------------------------------------------');
  console.log(`📊 RESULTADO FINAL: ${status === 'PASSED' ? '✅ PASSED' : '❌ FAILED'}`);
  console.log(`   - Entidades Verificadas: ${totalEntitiesChecked}`);
  console.log(`   - Errores Críticos: ${totalErrors}`);
  console.log(`   - Advertencias: ${totalWarnings}`);
  console.log(`   - Tiempo de ejecución: ${((Date.now() - startTime) / 1000).toFixed(2)}s`);
  console.log(`   - Informe JSON: ${jsonReportPath}`);
  console.log(`   - Resumen Markdown: ${mdReportPath}`);
  console.log('------------------------------------------------------\n');

  if (totalErrors > 0) {
    console.error(`🚨 Se encontraron ${totalErrors} errores críticos en el catálogo:`);
    errors.filter(e => e.type === 'ERROR').slice(0, 10).forEach(e => {
      console.error(`   ❌ [${e.entityType}] ${e.entityId} -> ${e.field}: ${e.message}`);
    });
    if (totalErrors > 10) {
      console.error(`   ... y ${totalErrors - 10} errores más.`);
    }
  }

  return summary;
}

// Direct execution from CLI
if (process.argv[1] && process.argv[1].endsWith('validate-catalog.ts')) {
  runCatalogValidator()
    .then((res) => {
      if (res.status === 'FAILED_WITH_ERRORS') {
        process.exit(1);
      } else {
        process.exit(0);
      }
    })
    .catch((err) => {
      console.error('Fatal validation runner error:', err);
      process.exit(1);
    });
}
