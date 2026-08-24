export interface BarcelonaRoaster {
  name: string;
  district: string;
  priceKg: number;
  origins: string;
  roastFreq: string;
  score: number;
  signature: string;
}

export interface BuyingGuide {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  image: string;
  featured: boolean;
  publishedAt?: string;
  content?: string;
}
