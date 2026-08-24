import type { VercelRequest, VercelResponse } from '@vercel/node';
import { BLOG_ARTICLES, BlogArticle } from '../src/data/blogArticles';

/**
 * Specialty Coffee Blog & Articles API Endpoint
 * Provides daily curated articles from top specialty coffee publications
 * (James Hoffmann, Perfect Daily Grind, Sprudge, European Coffee Trip, Barista Magazine, Nomad Journal)
 * Supports query params: ?category=Tecnica|Origen|Equipamiento|Tueste|Cultura and ?q=search
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { category, q, featured } = req.query;

    let articles: BlogArticle[] = [...BLOG_ARTICLES];

    if (category && typeof category === 'string' && category !== 'Todas') {
      articles = articles.filter(a => a.category.toLowerCase() === category.toLowerCase());
    }

    if (featured === 'true') {
      articles = articles.filter(a => a.featured);
    }

    if (q && typeof q === 'string') {
      const queryLower = q.toLowerCase();
      articles = articles.filter(a =>
        a.title.toLowerCase().includes(queryLower) ||
        a.excerpt.toLowerCase().includes(queryLower) ||
        a.source.toLowerCase().includes(queryLower) ||
        a.author.toLowerCase().includes(queryLower) ||
        a.tags.some(t => t.toLowerCase().includes(queryLower))
      );
    }

    const timestamp = new Date().toISOString();

    return res.status(200).json({
      success: true,
      count: articles.length,
      lastUpdated: timestamp,
      sources: [
        "The World Atlas of Coffee / James Hoffmann",
        "Perfect Daily Grind",
        "European Coffee Trip",
        "Sprudge",
        "Barista Magazine",
        "Nomad Coffee Journal"
      ],
      articles,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: error.message || 'Error fetching blog articles',
    });
  }
}
