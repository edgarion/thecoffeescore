import { useMemo } from 'react';
import { DetectValuableDealsUseCase, DealFilterCriteria } from '../core/use-cases/DetectValuableDealsUseCase';
import { PRODUCTS } from '../data/catalog';

export function useDealsFilter(criteria: DealFilterCriteria = {}) {
  const deals = useMemo(() => {
    const useCase = new DetectValuableDealsUseCase();
    return useCase.execute(PRODUCTS, criteria);
  }, [criteria.category, criteria.minScore, criteria.minDiscountPct]);

  return { deals, count: deals.length };
}
