import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDealsFilter } from '../hooks/useDealsFilter';
import { AffiliateButton } from '../components/ui/AffiliateButton';

export const DealsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');
  const { deals, count } = useDealsFilter({
    category: selectedCategory,
    minScore: 7.5,
    minDiscountPct: 10,
  });

  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Inicio</Link>
        <span className="sep">/</span>
        <span className="current">Ofertas Verificadas</span>
      </div>

      {/* Page Header */}
      <div className="page-head">
        <div className="page-eyebrow" style={{ color: 'var(--accent)' }}>
          Radar de Precios
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
      <div className="wrap" style={{ padding: '32px' }}>
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

                <div>
                  <AffiliateButton
                    stores={product.stores}
                    productName={product.name}
                    defaultPrice={currentPrice}
                    label="Ver oferta →"
                    className="btn btn-solid"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparency note */}
        <div className="trust-note" style={{ marginTop: 32 }}>
          <div className="ic">ℹ️</div>
          <div>
            <strong>Transparencia:</strong> Las ofertas se contrastan con históricos reales para evitar precios inflados previos al descuento. Si compras a través de nuestros enlaces podemos percibir una comisión de afiliación sin coste adicional para ti.
          </div>
        </div>
      </div>
    </div>
  );
};
