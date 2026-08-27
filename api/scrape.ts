import type { VercelRequest, VercelResponse } from '@vercel/node';
import { PRODUCTS } from '../src/data/catalog';
import { CoffeeScraperService } from '../src/services/scraper/CoffeeScraperService';

/**
 * Scheduled Cron Scraper Endpoint
 * Triggers automatically at 09:00 AM UTC every day via Vercel Cron.
 * Scrapes prices, live deals, roaster catalogs (Nomad, Syra, Right Side), authentic images, and affiliate links.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Cybersecurity: Verify Cron Secret if configured in environment
  const authHeader = req.headers['authorization'];
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({
      success: false,
      error: 'Unauthorized. Invalid or missing security authorization token.',
    });
  }

  try {
    // 1. Scrape live specialty coffee products directly from roasters
    const liveRoasters = await CoffeeScraperService.scrapeLiveRoasters();

    // 2. Scrape deals across all catalog items
    const deals = await CoffeeScraperService.scrapeAllDeals();

    // 3. Persist live scraped items to Turso DB
    let syncedToTurso = 0;
    try {
      syncedToTurso = await CoffeeScraperService.syncLiveRoastersToTurso();
    } catch (dbErr: any) {
      console.warn('Turso sync warning during cron:', dbErr.message);
    }

    const timestamp = new Date().toISOString();

    return res.status(200).json({
      success: true,
      message: 'Scraping and price synchronization completed successfully.',
      schedule: '0 9 * * * (Daily at 09:00 AM)',
      timestamp,
      totalCatalogProducts: PRODUCTS.length,
      activeOffersFound: deals.length,
      liveScrapedRoasterItems: liveRoasters.length,
      tursoSyncedItems: syncedToTurso,
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

