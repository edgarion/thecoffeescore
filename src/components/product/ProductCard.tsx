import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../core/domain/Product';
import { useFavorites } from '../../hooks/useFavorites';
import { useComparator } from '../../hooks/useComparator';
import { OptimizedImage } from '../ui/OptimizedImage';

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
              className={`px-2 py-0.5 rounded-full text-[11px] font-semibold transition-colors border ${
                inComp ? 'text-[#2f6fed] bg-blue-50 border-blue-200' : 'text-[#6b6a63] hover:text-ink border-[#e6e3da] bg-white'
              }`}
              title={inComp ? "Quitar de comparar" : "Comparar"}
            >
              {inComp ? 'Comparando' : '+ Comparar'}
            </button>
            <button
              onClick={handleFavoriteClick}
              className={`px-2 py-0.5 rounded-full text-[11px] font-semibold transition-colors border ${
                isFav ? 'text-[#e94e2b] bg-orange-50 border-orange-200 font-bold' : 'text-[#6b6a63] hover:text-[#e94e2b] border-[#e6e3da] bg-white'
              }`}
              title={isFav ? "Quitar de favoritos" : "Guardar en favoritos"}
            >
              {isFav ? 'Guardado' : 'Guardar'}
            </button>
          </div>
        </div>

        {/* Product Photo */}
        <Link to={`/producto/${product.slug}`} className="w-full h-36 sm:h-40 bg-white rounded-xl flex items-center justify-center p-2 mb-3 overflow-hidden group">
          <OptimizedImage
            src={product.image}
            alt={product.name}
            wrapperClassName="w-full h-full"
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

        {/* Stars & Store count preview */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="text-[#f5b642] text-xs tracking-wider">
            {'★'.repeat(Math.floor(product.stars || 4.5))}
            {'☆'.repeat(5 - Math.floor(product.stars || 4.5))}
          </div>
          {product.stores && product.stores.length > 0 && (
            <span className="text-[11px] text-[#6b6a63] font-medium">
              {product.stores.length} tiendas
            </span>
          )}
        </div>

        {/* Stores mini preview */}
        {product.stores && product.stores.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-1">
            {product.stores.slice(0, 3).map((st, i) => (
              <a
                key={i}
                href={st.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`text-[10px] px-2 py-0.5 rounded border transition-colors ${
                  st.isBest
                    ? 'bg-[#eef4ff] text-[#2f6fed] border-blue-200 font-bold hover:bg-blue-100'
                    : 'bg-[#f4f2ec] text-[#6b6a63] border-[#e6e3da] hover:bg-stone-200 hover:text-ink'
                }`}
                title={`Ver en ${st.name} por ${st.price} €`}
              >
                {st.name.split(' ')[0]}: {st.price}€
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Product Bottom */}
      <div className="pt-3 border-t border-[#e6e3da] flex items-center justify-between gap-2 mt-auto">
        {(() => {
          const isAvailable = product.stores?.some(s => s.inStock) && product.specs?.['Disponibilidad'] !== 'Agotado';
          return (
            <>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-extrabold text-base sm:text-lg text-ink font-mono">{product.price} €</span>
                  {product.oldPrice && (
                    <span className="text-xs text-[#6b6a63] line-through font-mono">
                      {product.oldPrice} €
                    </span>
                  )}
                </div>
                {isAvailable ? (
                  <span className="text-[10px] text-[#2e7d32] font-semibold">
                    {product.stores?.[0]?.isBest ? 'Mejor precio online' : 'En stock'}
                  </span>
                ) : (
                  <span className="text-[10px] text-[#d97706] font-semibold">
                    Agotado de temporada
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5">
                {product.stores && product.stores.length > 0 && (
                  <a
                    href={product.stores[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all shadow-sm ${
                      isAvailable
                        ? 'bg-[#2f6fed] hover:bg-[#2055be] text-white'
                        : 'bg-stone-800 hover:bg-black text-white'
                    }`}
                    title={`Ver en ${product.stores[0].name}`}
                  >
                    {isAvailable ? 'Comprar →' : 'Ver tienda ↗'}
                  </a>
                )}
                <Link
                  to={`/producto/${product.slug}`}
                  className="border border-[#e6e3da] hover:bg-[#f4f2ec] text-ink text-xs font-semibold px-2.5 py-1.5 rounded-lg transition-colors"
                >
                  Ficha
                </Link>
              </div>
            </>
          );
        })()}
      </div>
    </div>
  );
};
