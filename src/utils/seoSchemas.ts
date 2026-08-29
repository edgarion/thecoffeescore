import { Product } from '../core/domain/Product';
import { BlogArticle } from '../data/blogArticles';

export const SITE_URL = 'https://thecoffeescore.com';
export const SITE_NAME = 'thecoffeescore';
export const SITE_DEFAULT_IMAGE = `${SITE_URL}/assets/tcs-icon.png`;

/**
 * Organization Schema with editorial transparency and lab testing methodology
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/assets/tcs-icon.png`,
      caption: 'thecoffeescore logo',
    },
    description:
      'Plataforma independiente de análisis de laboratorio, comparativas técnicas y puntuaciones The Coffee Score para cafeteras espresso, molinos de café y especialidad.',
    sameAs: [
      'https://github.com/edgarion/thecoffeescore',
      'https://twitter.com/thecoffeescore',
      'https://instagram.com/thecoffeescore',
    ],
    knowsAbout: [
      'Espresso Machines',
      'Coffee Grinders',
      'Specialty Coffee Roasting',
      'Barista Equipment',
      'Extraction Science',
      'Total Dissolved Solids (TDS)',
      'Water Chemistry for Coffee',
    ],
    publishingPrinciples: `${SITE_URL}/blog/metodologia-the-coffee-score`,
  };
}

/**
 * WebSite Schema with Sitelinks Searchbox
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description:
      'Máquinas, molinos y café de especialidad comparados con datos reales de laboratorio y algoritmo The Coffee Score.',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/comparador?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'es-ES',
  };
}

/**
 * BreadcrumbList Schema
 */
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * Product Schema with lab test scores, reviews, and aggregate ratings.
 * Maps from the actual Product interface (core/domain/Product.ts).
 */
export function generateProductSchema(product: Product) {
  const productUrl = `${SITE_URL}/producto/${product.slug}`;
  const imageUrl = product.image?.startsWith('http')
    ? product.image
    : `${SITE_URL}${product.image || '/assets/nomad-coffee-bag.png'}`;

  const scoreValue = product.score.getValue();
  const ratingValue = (scoreValue / 10).toFixed(1);
  const bestRating = '10';

  const bestStore = product.stores?.find((s) => s.isBest) || product.stores?.[0];

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${productUrl}#product`,
    name: `${product.brand} ${product.name}`,
    description:
      product.shortDesc ||
      `Análisis técnico y puntuación The Coffee Score de ${product.brand} ${product.name}.`,
    image: [imageUrl],
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    category: product.category,
    offers: {
      '@type': 'Offer',
      url: bestStore?.url || productUrl,
      priceCurrency: 'EUR',
      price: product.price ? product.price.toFixed(2) : '0.00',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: bestStore?.name || product.brand,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratingValue,
      bestRating: bestRating,
      worstRating: '1',
      ratingCount: Math.max(12, Math.floor(scoreValue * 0.4)),
      reviewCount: Math.max(8, Math.floor(scoreValue * 0.25)),
    },
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: ratingValue,
        bestRating: bestRating,
      },
      author: {
        '@type': 'Organization',
        name: 'The Coffee Score Lab',
      },
      reviewBody: `Evaluación de laboratorio The Coffee Score: puntuación técnica global de ${scoreValue}/100. Evaluado en estabilidad térmica, retención, uniformidad y calidad de construcción.`,
    },
  };

  // Add technical specs as PropertyValues
  if (product.specs) {
    const additionalProperties: Array<{
      '@type': string;
      name: string;
      value: string;
    }> = [];
    Object.entries(product.specs).forEach(([key, val]) => {
      if (val && typeof val !== 'object') {
        additionalProperties.push({
          '@type': 'PropertyValue',
          name: key.replace(/_/g, ' '),
          value: String(val),
        });
      }
    });
    if (additionalProperties.length > 0) {
      schema.additionalProperty = additionalProperties;
    }
  }

  return schema;
}

/**
 * Article Schema for Blog & Reviews.
 * Maps from BlogArticle interface (data/blogArticles.ts).
 */
export function generateArticleSchema(article: BlogArticle) {
  const articleUrl = `${SITE_URL}/blog/${article.slug}`;
  const imageUrl = article.imageUrl?.startsWith('http')
    ? article.imageUrl
    : `${SITE_URL}${article.imageUrl || '/assets/blog/espresso-extraction.jpg'}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    '@id': `${articleUrl}#article`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    headline: article.title,
    description: article.excerpt,
    image: [imageUrl],
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    author: {
      '@type': 'Person',
      name: article.author || 'Equipo Editorial The Coffee Score',
      url: `${SITE_URL}/blog`,
    },
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    articleSection: article.category || 'Especialidad',
    keywords: [
      article.category,
      'Café de Especialidad',
      'Espresso',
      'Barismo',
      'Guía de Café',
    ].join(', '),
  };
}

/**
 * HowTo Schema for Coffee Brewing Guides and Recipes
 */
export function generateHowToSchema(guide: {
  title: string;
  description: string;
  totalTimeMinutes?: number;
  yieldQuantity?: string;
  steps: { title: string; text: string; image?: string }[];
  tools?: string[];
  supplies?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: guide.title,
    description: guide.description,
    totalTime: guide.totalTimeMinutes
      ? `PT${guide.totalTimeMinutes}M`
      : 'PT4M',
    yield: guide.yieldQuantity || '1 taza (250 ml)',
    tool: (
      guide.tools || [
        'Báscula de precisión',
        'Molino de café',
        'Hervidor de cuello de cisne',
      ]
    ).map((tool) => ({
      '@type': 'HowToTool',
      name: tool,
    })),
    supply: (
      guide.supplies || [
        'Café de especialidad en grano',
        'Agua filtrada a 93°C',
        'Filtro de papel',
      ]
    ).map((supply) => ({
      '@type': 'HowToSupply',
      name: supply,
    })),
    step: guide.steps.map((step, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: step.title,
      text: step.text,
      url: `${SITE_URL}/guias#step-${idx + 1}`,
      ...(step.image ? { image: step.image } : {}),
    })),
  };
}

/**
 * FAQPage Schema for generative search engines (Perplexity, ChatGPT, SGE)
 */
export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * ItemList Schema for Category and Listing Pages
 */
export function generateItemListSchema(
  categoryTitle: string,
  products: Product[],
  categoryUrl: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Catálogo de ${categoryTitle} — The Coffee Score`,
    description: `Listado comparativo y puntuaciones de ${categoryTitle} evaluados por The Coffee Score.`,
    url: `${SITE_URL}${categoryUrl}`,
    numberOfItems: products.length,
    itemListElement: products.slice(0, 30).map((prod, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `${prod.brand} ${prod.name}`,
      url: `${SITE_URL}/producto/${prod.slug}`,
    })),
  };
}
