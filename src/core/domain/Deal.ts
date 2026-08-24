import { Product } from './Product';

export class Deal {
  constructor(
    public readonly product: Product,
    public readonly currentPrice: number,
    public readonly originalPrice: number,
    public readonly discountPercentage: number,
    public readonly isVerified: boolean = true
  ) {}

  public static createFromProduct(product: Product): Deal | null {
    if (!product.oldPrice || product.oldPrice <= product.price) {
      return null;
    }
    const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
    return new Deal(product, product.price, product.oldPrice, discount, true);
  }
}
