import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDealsFilter } from '../hooks/useDealsFilter';
import { AffiliateButton } from '../components/ui/AffiliateButton';
import { useCart } from '../context/CartContext';
import { showToast } from '../hooks/useToast';

export const DealsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');
  const [sortBy, setSortBy] = useState<'discount' | 'price_asc' | 'price_desc' | 'newest'>('discount');
  const { addItem } = useCart();

  const chipsCategory = [
    { id: 'todas', label: 'Todas las ofertas' },
    { id: 'maquinas', label: 'Máquinas' },
    { id: 'molinos', label: 'Molinos' },
    { id: 'accesorios', label: 'Accesorios' },
    { id: 'cafe', label: 'Café de especialidad' },
  ];

  const { deals, count } = useDealsFilter({
    category: selectedCategory,
    minScore: 7.5,
    minDiscountPct: 10,
    sortBy,
  });

  const handleAddToCart = (product: any, currentPrice: number) => {
    addItem({
      productId: product.id,
      productName: product.name,
      productImage: product.image,
      selectedStore: product.stores?.[0]?.name || 'Amazon',
      storeUrl: product.stores?.[0]?.url || 'https://amazon.es',
      unitPrice: currentPrice,
      quantity: 1,
    });
    showToast(`${product.name} añadido a la cesta`, 'success');
  };

  return (
    <div className="pb-16">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Inicio</Link>
        <span className="sep">/</span>
        <span className="current">Ofertas Verificadas</span>
      </div>

      {/* Page Header */}
      <div className="page-head">
        <div className="page-eyebrow">
          Radar de Precios & Oportunidades
        </div>
        <h1 className="page-title">Ofertas que merecen la pena</h1>
        <p className="page-sub">
          Monitorizamos el histórico de precios para descartar falsas rebajas. Solo publicamos descuentos verificados (mínimo -10%) en productos con The Coffee Score superior a 7.5/10.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar">
        {chipsCategory.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`filter-chip ${selectedCategory === cat.id ? 'active' : ''}`}
          >
            {cat.label}
          </button>
        ))}

        <div className="filter-spacer" />

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as any)}
          className="sort-select"
        >
          <option value="discount">Mayor descuento %</option>
          <option value="price_asc">Precio: menor a mayor</option>
          <option value="price_desc">Precio: mayor a menor</option>
          <option value="newest">Novedades y Recientes</option>
        </select>
      </div>

      {/* Deals List */}
      <div className="wrap py-8 space-y-6">
        <div className="results-count">
          Mostrando <strong>{count}</strong> ofertas verificadas activas hoy
        </div>

        <div className="space-y-3">
          {deals.map(deal => {
            const { product, currentPrice, originalPrice, discountPercentage } = deal;
            return (
              <div key={product.id} className="offer-row-card">
                <Link to={`/producto/${product.slug}`} className="offer-row-photo">
                  <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.onerror = null;
                      target.src = '/assets/machine-fallback.png';
                    }}
                  />
                </Link>

                <div className="offer-row-mid">
                  <div className="offer-row-cat">
                    {product.brand} · {product.category}
                  </div>
                  <Link to={`/producto/${product.slug}`} className="offer-row-name hover:text-editorial-blue transition-colors">
                    {product.name}
                  </Link>
                  <div className="offer-row-score">
                    The Coffee Score: <strong className="text-ink font-mono">{product.score.getFormatted()}</strong> ({product.score.getRatingLabel()})
                  </div>
                </div>

                <div className="offer-row-price">
                  <span className="offer-row-old">{originalPrice} €</span>
                  <span className="offer-row-new">{currentPrice} €</span>
                  <span className="offer-row-pct">-{discountPercentage}%</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleAddToCart(product, currentPrice)}
                    className="px-3 py-2.5 rounded-xl bg-[#f4f2ec] hover:bg-stone-200 text-ink text-xs font-semibold transition-colors border border-[#e6e3da]"
                    title="Añadir a la cesta"
                  >
                    + Cesta
                  </button>

                  <AffiliateButton
                    stores={product.stores}
                    productName={product.name}
                    defaultPrice={currentPrice}
                    label="Ver oferta →"
                    className="btn btn-solid !py-2.5 !text-xs !rounded-xl"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparency note */}
        <div className="trust-note mt-8">
          <div className="text-xs text-stone-600 leading-relaxed">
            <strong>Transparencia de Precios:</strong> Las ofertas se contrastan con registros históricos reales para evitar precios inflados previos al descuento. Si compras a través de nuestros enlaces podemos percibir una comisión de afiliación sin coste adicional para ti.
          </div>
        </div>
      </div>
    </div>
  );
};
