import type { VercelRequest, VercelResponse } from '@vercel/node';
import { CoffeeScraperService } from '../src/services/scraper/CoffeeScraperService';

/**
 * Deals API Endpoint
 * Returns today's active scraped deals, discounts, and real purchase links.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const deals = await CoffeeScraperService.scrapeAllDeals();

    return res.status(200).json({
      success: true,
      count: deals.length,
      deals,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: error.message || 'Error fetching active deals',
    });
  }
}
