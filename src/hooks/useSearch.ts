import { useState, useMemo, useEffect, useCallback } from 'react';
import { PRODUCTS, BUYING_GUIDES, BARCELONA_ROASTERS } from '../data/catalog';
import { sanitizeSearchQuery } from '../utils/security';

export interface SearchHistoryItem {
  id: string;
  query: string;
  timestamp: number;
  resultCount?: number;
}

const HISTORY_STORAGE_KEY = 'thecoffeescore_search_history';
const MAX_HISTORY_ITEMS = 12;

// Default initial searches if user has never searched before
const DEFAULT_INITIAL_HISTORY: SearchHistoryItem[] = [
  { id: 'h-1', query: 'Sage Bambino Plus', timestamp: Date.now() - 1000 * 60 * 45, resultCount: 3 },
  { id: 'h-2', query: 'Eureka Mignon Specialita', timestamp: Date.now() - 1000 * 60 * 60 * 4, resultCount: 2 },
  { id: 'h-3', query: 'Café de especialidad Barcelona', timestamp: Date.now() - 1000 * 60 * 60 * 24, resultCount: 8 },
];

export const POPULAR_SUGGESTIONS = [
  'Sage Bambino',
  'Eureka Mignon',
  'Varia VS3',
  'Café de Especialidad',
  'Fellow Ode',
  'Aeropress',
  'Timemore Sculptor',
  'Nomad Coffee',
];

export function useSearch() {
  const [query, setQuery] = useState('');
  const [history, setHistory] = useState<SearchHistoryItem[]>(() => {
    try {
      const stored = localStorage.getItem(HISTORY_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Error reading search history from localStorage:', e);
    }
    return DEFAULT_INITIAL_HISTORY;
  });

  // Save history on change
  useEffect(() => {
    try {
      localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(history));
    } catch (e) {
      console.warn('Error writing search history to localStorage:', e);
    }
  }, [history]);

  const addToHistory = useCallback((term: string, count?: number) => {
    const trimmed = term.trim();
    if (!trimmed || trimmed.length < 2) return;

    setHistory((prev) => {
      // Remove previous duplicate if exists (case-insensitive)
      const filtered = prev.filter(
        (item) => item.query.toLowerCase() !== trimmed.toLowerCase()
      );
      const newItem: SearchHistoryItem = {
        id: `sh-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        query: trimmed,
        timestamp: Date.now(),
        resultCount: count,
      };
      return [newItem, ...filtered].slice(0, MAX_HISTORY_ITEMS);
    });
  }, []);

  const removeFromHistory = useCallback((idOrQuery: string) => {
    setHistory((prev) =>
      prev.filter(
        (item) =>
          item.id !== idOrQuery &&
          item.query.toLowerCase() !== idOrQuery.toLowerCase()
      )
    );
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
    try {
      localStorage.removeItem(HISTORY_STORAGE_KEY);
    } catch (e) {
      console.warn('Error clearing search history:', e);
    }
  }, []);

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

  const totalResultsCount =
    results.products.length + results.guides.length + results.roasters.length;

  return {
    query,
    setQuery,
    results,
    hasResults: totalResultsCount > 0,
    totalResultsCount,
    history,
    addToHistory,
    removeFromHistory,
    clearHistory,
    popularSuggestions: POPULAR_SUGGESTIONS,
  };
}
