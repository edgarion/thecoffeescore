import type { VercelRequest, VercelResponse } from '@vercel/node';
import { CoffeeScraperService } from '../src/services/scraper/CoffeeScraperService';

/**
 * Comparator API Endpoint
 * Accepts ?ids=id1,id2,id3 or POST { ids: [...] }
 * Returns comparative metrics, scores, winner per category, and specs matrix.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    let ids: string[] = [];

    if (req.method === 'POST' && req.body && Array.isArray(req.body.ids)) {
      ids = req.body.ids;
    } else if (req.query.ids) {
      ids = (req.query.ids as string).split(',').map(s => s.trim());
    }

    if (ids.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Please provide at least one product ID via ?ids=id1,id2 or POST { ids: [...] }',
      });
    }

    const comparison = CoffeeScraperService.compareProducts(ids);

    return res.status(200).json({
      success: true,
      comparison,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: error.message || 'Error processing comparator request',
    });
  }
}
