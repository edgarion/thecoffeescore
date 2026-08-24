import type { VercelRequest, VercelResponse } from '@vercel/node';
import { PRODUCTS } from '../src/data/catalog';
import { CoffeeScraperService } from '../src/services/scraper/CoffeeScraperService';

/**
 * Scheduled Cron Scraper Endpoint
 * Triggers automatically at 09:00 AM UTC every day via Vercel Cron.
 * Scrapes prices, live deals, roaster catalogs (Nomad, Syra, Right Side), authentic images, and affiliate links.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // 1. Scrape live specialty coffee products directly from roasters
    const liveRoasters = await CoffeeScraperService.scrapeLiveRoasters();

    // 2. Scrape deals across all catalog items
    const deals = await CoffeeScraperService.scrapeAllDeals();

    const timestamp = new Date().toISOString();

    return res.status(200).json({
      success: true,
      message: 'Scraping and price synchronization completed successfully.',
      schedule: '0 9 * * * (Daily at 09:00 AM)',
      timestamp,
      totalCatalogProducts: PRODUCTS.length,
      activeOffersFound: deals.length,
      liveScrapedRoasterItems: liveRoasters.length,
      roasterSamples: liveRoasters.slice(0, 10),
      deals,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: error.message || 'Error executing scraping routine.',
    });
  }
}
