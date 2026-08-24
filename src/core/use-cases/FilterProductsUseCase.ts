import { Product } from '../domain/Product';

export interface ProductFilterCriteria {
  category?: string;
  subCategoryChip?: string;
  maxPrice?: number;
  selectedBrands?: string[];
  minScore?: number;
  searchQuery?: string;
  sortBy?: 'score' | 'price_asc' | 'price_desc' | 'name';
}

export class FilterProductsUseCase {
  public execute(products: Product[], criteria: ProductFilterCriteria): Product[] {
    let result = [...products];

    // Category filter
    if (criteria.category && criteria.category !== 'todas') {
      if (criteria.category === 'ofertas') {
        result = result.filter(p => p.isOffer);
      } else {
        result = result.filter(p => p.category === criteria.category);
      }
    }

    // Subcategory chip filter
    if (criteria.subCategoryChip && criteria.subCategoryChip.toLowerCase() !== 'todas' && criteria.subCategoryChip.toLowerCase() !== 'todos') {
      const chip = criteria.subCategoryChip.toLowerCase();
      result = result.filter(p => 
        (p.subCategory && p.subCategory.toLowerCase().includes(chip)) ||
        (p.badge && p.badge.toLowerCase().includes(chip))
      );
    }

    // Max Price filter
    if (criteria.maxPrice !== undefined && criteria.maxPrice > 0) {
      result = result.filter(p => p.price <= criteria.maxPrice!);
    }

    // Brands filter
    if (criteria.selectedBrands && criteria.selectedBrands.length > 0) {
      const brandsLower = criteria.selectedBrands.map(b => b.toLowerCase());
      result = result.filter(p => brandsLower.some(b => p.brand.toLowerCase().includes(b)));
    }

    // Min Score filter
    if (criteria.minScore !== undefined && criteria.minScore > 0) {
      result = result.filter(p => p.score.getValue() >= criteria.minScore!);
    }

    // Search query filter
    if (criteria.searchQuery && criteria.searchQuery.trim().length > 0) {
      const query = criteria.searchQuery.toLowerCase().trim();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        (p.badge && p.badge.toLowerCase().includes(query))
      );
    }

    // Sorting
    switch (criteria.sortBy) {
      case 'price_asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'score':
      default:
        result.sort((a, b) => b.score.getValue() - a.score.getValue());
        break;
    }

    return result;
  }
}
