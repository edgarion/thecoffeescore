import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDealsFilter } from '../hooks/useDealsFilter';
import { AffiliateButton } from '../components/ui/AffiliateButton';
import { Info, ShoppingBag } from 'lucide-react';

import { useCart } from '../context/CartContext';
import { showToast } from '../hooks/useToast';

export const DealsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');
  const { addItem } = useCart();

  const { deals, count } = useDealsFilter({
    category: selectedCategory,
    minScore: 7.5,
    minDiscountPct: 10,
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
    showToast(`🛒 ${product.name} añadido a la cesta`, 'success');
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
        {[
          { id: 'todas', label: 'Todas las ofertas' },
          { id: 'maquinas', label: 'Máquinas' },
          { id: 'molinos', label: 'Molinos' },
          { id: 'accesorios', label: 'Accesorios' },
          { id: 'cafe', label: 'Café de especialidad' },
        ].map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`filter-chip ${selectedCategory === cat.id ? 'active' : ''}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Deals List */}
      <div className="wrap py-8 space-y-6">
        <div className="results-count">
          <strong>{count}</strong> ofertas verificadas activas hoy
        </div>

        <div className="space-y-3">
          {deals.map(deal => {
            const { product, currentPrice, originalPrice, discountPercentage } = deal;
            return (
              <div key={product.id} className="offer-row-card">
                <Link to={`/producto/${product.slug}`} className="offer-row-photo">
                  <img src={product.image} alt={product.name} />
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
                    className="w-9 h-9 rounded-xl bg-[#f4f2ec] hover:bg-stone-200 text-ink flex items-center justify-center transition-colors border border-[#e6e3da]"
                    title="Añadir a la cesta"
                    aria-label="Añadir a la cesta"
                  >
                    <ShoppingBag size={16} className="text-[#e94e2b]" />
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
          <Info size={16} className="text-stone-400 shrink-0 mt-0.5" />
          <div className="text-xs text-stone-600 leading-relaxed">
            <strong>Transparencia de Precios:</strong> Las ofertas se contrastan con registros históricos reales para evitar precios inflados previos al descuento. Si compras a través de nuestros enlaces podemos percibir una comisión de afiliación sin coste adicional para ti.
          </div>
        </div>
      </div>
    </div>
  );
};
