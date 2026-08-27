import type { VercelRequest, VercelResponse } from '@vercel/node';
import { ProductMediaRepository } from '../src/services/db/productMediaRepository';
import { initTursoSchema } from '../src/services/db/tursoClient';
import { CoffeeScraperService } from '../src/services/scraper/CoffeeScraperService';

/**
 * REST API Endpoint for Turso Product Media & Description Management
 * Supports:
 * - GET: Fetch/list stored media, search by URL, productId, or store
 * - POST: Scrape a purchase link and store image + description in Turso
 * - DELETE: Remove media item by ID
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Ensure table schema exists on first call
  try {
    await initTursoSchema();
  } catch (err: any) {
    console.warn('Schema check:', err.message);
  }

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Handle GET
  if (req.method === 'GET') {
    try {
      const { url, productId, store, search, limit, offset } = req.query;

      if (url && typeof url === 'string') {
        const item = await ProductMediaRepository.getMediaByUrl(url);
        if (!item) {
          return res.status(404).json({ success: false, message: 'No media found for the given URL' });
        }
        return res.status(200).json({ success: true, item });
      }

      if (productId && typeof productId === 'string') {
        const items = await ProductMediaRepository.getMediaByProductId(productId);
        return res.status(200).json({ success: true, count: items.length, items });
      }

      const result = await ProductMediaRepository.listAllMedia({
        store: typeof store === 'string' ? store : undefined,
        search: typeof search === 'string' ? search : undefined,
        limit: limit ? parseInt(limit as string, 10) : 50,
        offset: offset ? parseInt(offset as string, 10) : 0,
      });

      return res.status(200).json({
        success: true,
        total: result.total,
        count: result.items.length,
        items: result.items,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        error: error.message || 'Error querying Turso database',
      });
    }
  }

  // Handle POST (Scrape URL & save to Turso)
  if (req.method === 'POST') {
    try {
      const { url, productId, autoScrape = true, title, description, imageUrl, galleryImages, price, storeName } = req.body || {};

      if (!url || typeof url !== 'string') {
        return res.status(400).json({ success: false, error: 'A valid purchase url is required' });
      }

      let finalTitle = title || '';
      let finalDescription = description || '';
      let finalImageUrl = imageUrl || '';
      let finalGallery: string[] = Array.isArray(galleryImages) ? galleryImages : [];
      let finalPrice = typeof price === 'number' ? price : null;
      let finalStore = storeName || null;

      // Automatically scrape metadata from the purchase link if requested or missing
      if (autoScrape && (!finalImageUrl || !finalDescription)) {
        const extracted = await CoffeeScraperService.extractMetadataFromUrl(url, finalTitle);
        if (!finalTitle) finalTitle = extracted.title;
        if (!finalDescription) finalDescription = extracted.description;
        if (!finalImageUrl) finalImageUrl = extracted.imageUrl;
        if (finalGallery.length === 0) finalGallery = extracted.galleryImages;
        if (finalPrice === null) finalPrice = extracted.price;
        if (!finalStore) finalStore = extracted.storeName;
      }

      const saved = await ProductMediaRepository.upsertMedia({
        id: `media_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        productId: productId || null,
        purchaseUrl: url,
        sourceStore: finalStore,
        title: finalTitle,
        description: finalDescription,
        imageUrl: finalImageUrl,
        galleryImages: finalGallery,
        price: finalPrice,
        currency: 'EUR',
        inStock: true,
      });

      return res.status(201).json({
        success: true,
        message: 'Product media and description successfully saved to Turso',
        item: saved,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        error: error.message || 'Error saving media to Turso database',
      });
    }
  }

  // Handle DELETE
  if (req.method === 'DELETE') {
    try {
      const { id } = req.query;
      if (!id || typeof id !== 'string') {
        return res.status(400).json({ success: false, error: 'Item ID is required for deletion' });
      }

      const deleted = await ProductMediaRepository.deleteMedia(id);
      return res.status(200).json({ success: true, deleted });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        error: error.message || 'Error deleting item from Turso database',
      });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
