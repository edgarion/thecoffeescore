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
    <div className={`product-card ${className}`}>
      <div>
        {/* Product Photo */}
        <Link to={`/producto/${product.slug}`} className="product-photo">
          <img src={product.image} alt={product.name} loading="lazy" />
        </Link>

        {/* Tag / Badge */}
        {product.badge ? (
          <div className="product-tag">
            {product.badge.toUpperCase()}
          </div>
        ) : (
          <div className="product-tag">
            {product.brand.toUpperCase()}
          </div>
        )}

        {/* Product Top */}
        <div className="product-top">
          <Link to={`/producto/${product.slug}`} className="product-name hover:text-editorial-blue transition-colors">
            {product.name}
          </Link>
          <span className="score-badge" title={`The Coffee Score: ${product.score.getFormatted()}/10`}>
            {product.score.getFormatted()}
          </span>
        </div>

        {/* Stars */}
        <div className="stars">
          ★★★★★
        </div>

        <p className="text-xs text-[#6b6a63] line-clamp-2 leading-relaxed mb-2">
          {product.shortDesc}
        </p>
      </div>

      {/* Product Bottom */}
      <div>
        <div className="product-bottom">
          <div>
            <span className="price">{product.price} €</span>
            {product.oldPrice && (
              <span className="text-xs text-[#6b6a63] line-through ml-2 font-mono">
                {product.oldPrice} €
              </span>
            )}
          </div>
          <Link to={`/producto/${product.slug}`} className="btn-outline-sm">
            Ver análisis
          </Link>
        </div>

        {/* Quick action icons */}
        <div className="flex items-center gap-2 mt-3 pt-2 border-t border-[#e6e3da]">
          <button
            onClick={handleCompareClick}
            className={`flex-1 text-xs font-semibold py-1.5 px-2.5 rounded-md border flex items-center justify-center gap-1.5 transition-all ${
              inComp
                ? 'bg-editorial-blue/10 text-editorial-blue border-editorial-blue/40 font-bold'
                : 'bg-cream hover:bg-stone-200 text-[#6b6a63] hover:text-ink border-[#e6e3da]'
            }`}
          >
            <GitCompare size={13} />
            <span>{inComp ? 'En comparador' : '+ Comparar'}</span>
          </button>

          <button
            onClick={handleFavoriteClick}
            className={`w-8 h-8 rounded-md border flex items-center justify-center transition-all ${
              isFav
                ? 'bg-[#fdece7] border-accent/40 text-accent'
                : 'bg-white hover:bg-cream border-[#e6e3da] text-stone-400 hover:text-accent'
            }`}
            title={isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}
            aria-label="Favorito"
          >
            <Heart size={14} className={isFav ? 'fill-accent' : ''} />
          </button>
        </div>
      </div>
    </div>
  );
};

export const ProductGrid: React.FC<{ products: Product[]; className?: string }> = ({
  products,
  className = '',
}) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-white border border-[#e6e3da] rounded-xl">
        <h4 className="font-serif font-bold text-xl text-ink mb-1">No se encontraron productos</h4>
        <p className="text-xs text-[#6b6a63] max-w-sm mx-auto">
          Prueba ampliando los filtros de precio o desmarcando marcas para ver más opciones disponibles.
        </p>
      </div>
    );
  }

  return (
    <div className={`product-grid ${className}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
