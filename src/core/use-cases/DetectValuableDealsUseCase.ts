import { Product } from '../domain/Product';
import { Deal } from '../domain/Deal';

export interface DealFilterCriteria {
  minScore?: number;        // Default 7.5
  minDiscountPct?: number;  // Default 10%
  category?: string;
  sortBy?: 'discount' | 'price_asc' | 'price_desc' | 'newest';
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

    // Sorting
    switch (criteria.sortBy) {
      case 'price_asc':
        deals.sort((a, b) => a.currentPrice - b.currentPrice);
        break;
      case 'price_desc':
        deals.sort((a, b) => b.currentPrice - a.currentPrice);
        break;
      case 'newest':
        deals.reverse();
        break;
      case 'discount':
      default:
        deals.sort((a, b) => b.discountPercentage - a.discountPercentage);
        break;
    }

    return deals;
  }
}
