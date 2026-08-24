import { Product } from '../domain/Product';
import { Deal } from '../domain/Deal';

export interface DealFilterCriteria {
  minScore?: number;        // Default 7.5
  minDiscountPct?: number;  // Default 10%
  category?: string;
}

export class DetectValuableDealsUseCase {
  public execute(products: Product[], criteria: DealFilterCriteria = {}): Deal[] {
    const minScore = criteria.minScore ?? 7.5;
    const minDiscount = criteria.minDiscountPct ?? 10;

    const deals: Deal[] = [];

    products.forEach(product => {
      if (criteria.category && criteria.category !== 'todas' && product.category !== criteria.category) {
        return;
      }

      if (product.score.getValue() < minScore) {
        return;
      }

      const deal = Deal.createFromProduct(product);
      if (deal && deal.discountPercentage >= minDiscount) {
        deals.push(deal);
      }
    });

    // Sort by highest discount percentage descending
    deals.sort((a, b) => b.discountPercentage - a.discountPercentage);

    return deals;
  }
}
