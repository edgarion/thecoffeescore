import { useState, useEffect, useCallback } from 'react';
import { showToast } from './useToast';
import { PRODUCTS } from '../data/catalog';

const STORAGE_KEY = 'tcs_favorites_v2';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch (e) {
      console.error('Error writing to localStorage', e);
    }
  }, [favorites]);

  const toggleFavorite = useCallback((productId: string) => {
    setFavorites(prev => {
      const exists = prev.includes(productId);
      const product = PRODUCTS.find(p => p.id === productId);
      const name = product ? product.name : 'Producto';
      if (exists) {
        showToast(`Eliminado de favoritos: ${name}`);
        return prev.filter(id => id !== productId);
      } else {
        showToast(`❤️ Guardado en tus favoritos: ${name}`, 'success');
        return [...prev, productId];
      }
    });
  }, []);

  const isFavorite = useCallback((productId: string) => {
    return favorites.includes(productId);
  }, [favorites]);

  const favoriteProducts = PRODUCTS.filter(p => favorites.includes(p.id));

  return {
    favorites,
    favoriteProducts,
    toggleFavorite,
    isFavorite,
    count: favorites.length,
  };
}
