import { useMemo, useState, useEffect } from 'react';
import { FilterProductsUseCase, ProductFilterCriteria } from '../core/use-cases/FilterProductsUseCase';
import { PRODUCTS } from '../data/catalog';

export function useProductFilter(dynamicCriteria: ProductFilterCriteria = {}) {
  const [criteria, setCriteria] = useState<ProductFilterCriteria>(dynamicCriteria);

  // Keep criteria synced with incoming props (category changes, chip clicks, price updates)
  useEffect(() => {
    setCriteria(dynamicCriteria);
  }, [
    dynamicCriteria.category,
    dynamicCriteria.subCategoryChip,
    dynamicCriteria.maxPrice,
    dynamicCriteria.searchQuery,
    dynamicCriteria.sortBy,
    JSON.stringify(dynamicCriteria.selectedBrands || []),
  ]);

  const filteredProducts = useMemo(() => {
    const useCase = new FilterProductsUseCase();
    return useCase.execute(PRODUCTS, criteria);
  }, [criteria]);

  const updateCriteria = (newCriteria: Partial<ProductFilterCriteria>) => {
    setCriteria(prev => ({ ...prev, ...newCriteria }));
  };

  const resetCriteria = () => {
    setCriteria(dynamicCriteria);
  };

  return {
    criteria,
    filteredProducts,
    totalCount: filteredProducts.length,
    updateCriteria,
    resetCriteria,
  };
}
