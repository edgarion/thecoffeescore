import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { Product } from '../core/domain/Product';
import { CompareProductsUseCase, ComparisonMatrix } from '../core/use-cases/CompareProductsUseCase';
import { PRODUCTS } from '../data/catalog';
import { showToast } from './useToast';

const STORAGE_KEY = 'tcs_compare_v2';
const DEFAULT_IDS = ['sage-bambino-plus', 'lelit-anna-pl41', 'delonghi-la-specialista'];

interface ComparatorContextType {
  selectedIds: string[];
  selectedProducts: Product[];
  matrix: ComparisonMatrix;
  addProduct: (id: string) => boolean;
  removeProduct: (id: string) => void;
  clear: () => void;
  isInCompare: (id: string) => boolean;
  canAddMore: boolean;
}

const ComparatorContext = createContext<ComparatorContextType | null>(null);

export const ComparatorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedIds, setSelectedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : DEFAULT_IDS;
    } catch {
      return DEFAULT_IDS;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedIds));
    } catch (e) {
      console.error(e);
    }
  }, [selectedIds]);

  const addProduct = useCallback((id: string): boolean => {
    if (selectedIds.includes(id)) {
      showToast('ℹ️ Este producto ya está en la comparativa');
      return false;
    }
    if (selectedIds.length >= 4) {
      showToast('⚠️ Máximo 4 productos para comparar. Elimina uno primero.', 'warning');
      return false;
    }
    const product = PRODUCTS.find(p => p.id === id);
    setSelectedIds(prev => [...prev, id]);
    showToast(`📊 Añadido al comparador (${selectedIds.length + 1}/4): ${product ? product.name : ''}`, 'success');
    return true;
  }, [selectedIds]);

  const removeProduct = useCallback((id: string) => {
    setSelectedIds(prev => prev.filter(item => item !== id));
    showToast('Producto eliminado del comparador');
  }, []);

  const clear = useCallback(() => {
    setSelectedIds([]);
    showToast('Comparador vaciado');
  }, []);

  const isInCompare = useCallback((id: string) => {
    return selectedIds.includes(id);
  }, [selectedIds]);

  const selectedProducts = useMemo(() => {
    return selectedIds
      .map(id => PRODUCTS.find(p => p.id === id))
      .filter((p): p is Product => p !== undefined);
  }, [selectedIds]);

  const matrix = useMemo(() => {
    const useCase = new CompareProductsUseCase();
    return useCase.execute(selectedProducts);
  }, [selectedProducts]);

  const value = {
    selectedIds,
    selectedProducts,
    matrix,
    addProduct,
    removeProduct,
    clear,
    isInCompare,
    canAddMore: selectedIds.length < 4,
  };

  return (
    <ComparatorContext.Provider value={value}>
      {children}
    </ComparatorContext.Provider>
  );
};

export function useComparator() {
  const context = useContext(ComparatorContext);
  if (!context) {
    throw new Error('useComparator must be used within a ComparatorProvider');
  }
  return context;
}
