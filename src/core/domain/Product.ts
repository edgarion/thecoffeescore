import { CoffeeScore } from './Score';
import { TechnicalSpecs } from './TechnicalSpecs';

export type ProductCategory = 'maquinas' | 'molinos' | 'accesorios' | 'cafe' | 'ofertas';

export interface StoreOffer {
  name: string;
  price: number;
  inStock: boolean;
  url: string;
  isBest?: boolean;
}

export interface EditorialReview {
  title: string;
  question: string;
  content: string;
}

export interface ProductSubscores {
  espresso?: number;
  vapor?: number;      // Or retention for grinders
  facilidad?: number;
  construccion?: number;
  precio?: number;
  [key: string]: number | undefined;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: ProductCategory;
  subCategory?: string;
  price: number;
  oldPrice?: number | null;
  historicalAveragePrice?: number;
  isOffer: boolean;
  score: CoffeeScore;
  stars: number;
  badge?: string;
  image: string;
  gallery: string[];
  shortDesc: string;
  subscores: ProductSubscores;
  pros: string[];
  cons: string[];
  specs: TechnicalSpecs;
  stores: StoreOffer[];
  editorialReview?: EditorialReview;
}
