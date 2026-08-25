import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GLOBAL_COFFEE_SHOPS, GlobalCoffeeShop } from '../src/data/globalCoffeeIndex';

/**
 * Global Coffee Shops and Roasters World Index API
 * Endpoints: /api/global-coffee
 * Query params: ?city=Tokio|Nueva York|Bangkok|Vietnam|Londres|Paris|Berlin|Amsterdam|Roma|Napoles|Los Angeles|Miami|Malmo|Barcelona|Melbourne
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { city, q } = req.query;

    let shops: GlobalCoffeeShop[] = [...GLOBAL_COFFEE_SHOPS];

    if (city && typeof city === 'string' && city.toLowerCase() !== 'todas') {
      shops = shops.filter(s => s.city.toLowerCase() === city.toLowerCase() || s.country.toLowerCase() === city.toLowerCase());
    }

    if (q && typeof q === 'string') {
      const queryLower = q.toLowerCase();
      shops = shops.filter(s =>
        s.name.toLowerCase().includes(queryLower) ||
        s.city.toLowerCase().includes(queryLower) ||
        s.country.toLowerCase().includes(queryLower) ||
        s.district.toLowerCase().includes(queryLower) ||
        s.signatureRoast.toLowerCase().includes(queryLower) ||
        s.gearSetup.toLowerCase().includes(queryLower)
      );
    }

    return res.status(200).json({
      success: true,
      count: shops.length,
      lastUpdated: new Date().toISOString(),
      cities: [
        "Tokio",
        "Nueva York",
        "Bangkok",
        "Vietnam (Hanoi & Saigon)",
        "Londres",
        "París",
        "Berlín",
        "Ámsterdam",
        "Roma",
        "Nápoles",
        "Los Ángeles",
        "Miami",
        "Malmö",
        "Barcelona",
        "Melbourne"
      ],
      shops,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: error.message || 'Error fetching global coffee index',
    });
  }
}
