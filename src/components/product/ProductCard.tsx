import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, GitCompare } from 'lucide-react';
import { Product } from '../../core/domain/Product';
import { useFavorites } from '../../hooks/useFavorites';
import { useComparator } from '../../hooks/useComparator';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const { addProduct, removeProduct, isInCompare } = useComparator();

  const isFav = isFavorite(product.id);
  const inComp = isInCompare(product.id);

  const handleCompareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inComp) {
      removeProduct(product.id);
    } else {
      addProduct(product.id);
    }
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product.id);
  };

  return (
    <div className={`product-card bg-white border border-[#e6e3da] rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:shadow-lg transition-all ${className}`}>
      <div>
        {/* Top Badge */}
        <div className="flex items-center justify-between gap-2 mb-2">
          {product.badge ? (
            <div className="inline-flex items-center gap-1.5 bg-[#eef4ff] text-[#2f6fed] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2f6fed]"></span>
              <span>{product.badge}</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 bg-stone-100 text-stone-600 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
              <span>{product.brand}</span>
            </div>
          )}

          {/* Quick Actions */}
          <div className="flex items-center gap-1">
            <button
              onClick={handleCompareClick}
              className={`p-1 rounded-full text-xs transition-colors ${
                inComp ? 'text-[#2f6fed] bg-blue-50' : 'text-[#6b6a63] hover:text-ink'
              }`}
              title={inComp ? "Quitar de comparar" : "Comparar"}
            >
              <GitCompare size={15} />
            </button>
            <button
              onClick={handleFavoriteClick}
              className={`p-1 rounded-full text-xs transition-colors ${
                isFav ? 'text-[#e94e2b]' : 'text-[#6b6a63] hover:text-[#e94e2b]'
              }`}
              title={isFav ? "Quitar de favoritos" : "Guardar en favoritos"}
            >
              <Heart size={15} className={isFav ? 'fill-[#e94e2b]' : ''} />
            </button>
          </div>
        </div>

        {/* Product Photo */}
        <Link to={`/producto/${product.slug}`} className="w-full h-36 sm:h-40 bg-white rounded-xl flex items-center justify-center p-2 mb-3 overflow-hidden group">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Product Top */}
        <div className="flex items-start justify-between gap-2 mb-1">
          <Link
            to={`/producto/${product.slug}`}
            className="font-bold text-sm sm:text-base text-ink hover:text-[#2f6fed] transition-colors line-clamp-1"
          >
            {product.name}
          </Link>
          <span
            className="bg-[#2f6fed] text-white font-bold text-xs px-2 py-0.5 rounded-lg shrink-0"
            title={`The Coffee Score: ${product.score.getFormatted()}/10`}
          >
            {product.score.getFormatted()}
          </span>
        </div>

        {/* Stars */}
        <div className="text-[#f5b642] text-xs mb-3 tracking-wider">
          {'★'.repeat(Math.floor(product.stars || 4.5))}
          {'☆'.repeat(5 - Math.floor(product.stars || 4.5))}
        </div>
      </div>

      {/* Product Bottom */}
      <div className="pt-3 border-t border-[#e6e3da] flex items-center justify-between mt-auto">
        <div className="flex items-baseline gap-1.5">
          <span className="font-extrabold text-base sm:text-lg text-ink">{product.price} €</span>
          {product.oldPrice && (
            <span className="text-xs text-[#6b6a63] line-through">
              {product.oldPrice} €
            </span>
          )}
        </div>
        <Link
          to={`/producto/${product.slug}`}
          className="border border-ink hover:bg-[#f4f2ec] text-ink text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
};
