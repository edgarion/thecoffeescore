import type { VercelRequest, VercelResponse } from '@vercel/node';
import { PRODUCTS } from '../src/data/catalog';
import { CoffeeScraperService } from '../src/services/scraper/CoffeeScraperService';

/**
 * Products API Endpoint
 * Supports filtering by category, brand, isOffer, and searchQuery.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { category, brand, isOffer, q } = req.query;

    let results = [...PRODUCTS];

    if (category && typeof category === 'string') {
      results = results.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    if (brand && typeof brand === 'string') {
      results = results.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
    }

    if (isOffer === 'true') {
      results = results.filter(p => p.isOffer);
    }

    if (q && typeof q === 'string') {
      const searchLower = q.toLowerCase();
      results = results.filter(p =>
        p.name.toLowerCase().includes(searchLower) ||
        p.brand.toLowerCase().includes(searchLower) ||
        p.shortDesc.toLowerCase().includes(searchLower)
      );
    }

    // Enrich products with live working store links
    const enriched = results.map(p => ({
      ...p,
      stores: CoffeeScraperService.getLiveStoresForProduct(p),
    }));

    return res.status(200).json({
      success: true,
      count: enriched.length,
      products: enriched,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: error.message || 'Error fetching products',
    });
  }
}
