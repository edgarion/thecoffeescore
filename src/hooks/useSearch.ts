import { useState, useMemo } from 'react';
import { PRODUCTS, BUYING_GUIDES, BARCELONA_ROASTERS } from '../data/catalog';
import { sanitizeSearchQuery } from '../utils/security';

export function useSearch() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = sanitizeSearchQuery(query).toLowerCase();
    if (!q) {
      return {
        products: PRODUCTS.slice(0, 4),
        guides: BUYING_GUIDES.slice(0, 3),
        roasters: BARCELONA_ROASTERS.slice(0, 3),
      };
    }

    const products = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.badge && p.badge.toLowerCase().includes(q))
    );

    const guides = BUYING_GUIDES.filter(g =>
      g.title.toLowerCase().includes(q) ||
      g.subtitle.toLowerCase().includes(q) ||
      g.category.toLowerCase().includes(q)
    );

    const roasters = BARCELONA_ROASTERS.filter(r =>
      r.name.toLowerCase().includes(q) ||
      r.district.toLowerCase().includes(q) ||
      r.origins.toLowerCase().includes(q)
    );

    return { products, guides, roasters };
  }, [query]);

  return {
    query,
    setQuery,
    results,
    hasResults: results.products.length > 0 || results.guides.length > 0 || results.roasters.length > 0,
  };
}
