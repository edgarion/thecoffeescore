import { useMemo, useState } from 'react';
import { FilterProductsUseCase, ProductFilterCriteria } from '../core/use-cases/FilterProductsUseCase';
import { PRODUCTS } from '../data/catalog';

export function useProductFilter(initialCriteria: ProductFilterCriteria = {}) {
  const [criteria, setCriteria] = useState<ProductFilterCriteria>(initialCriteria);

  const filteredProducts = useMemo(() => {
    const useCase = new FilterProductsUseCase();
    return useCase.execute(PRODUCTS, criteria);
  }, [criteria]);

  const updateCriteria = (newCriteria: Partial<ProductFilterCriteria>) => {
    setCriteria(prev => ({ ...prev, ...newCriteria }));
  };

  const resetCriteria = () => {
    setCriteria(initialCriteria);
  };

  return {
    criteria,
    filteredProducts,
    totalCount: filteredProducts.length,
    updateCriteria,
    resetCriteria,
  };
}
