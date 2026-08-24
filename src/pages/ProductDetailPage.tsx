import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/catalog';
import { AffiliateButton } from '../components/ui/AffiliateButton';
import { useComparator } from '../hooks/useComparator';
import { useFavorites } from '../hooks/useFavorites';
import { ProductCard } from '../components/product/ProductCard';
import { GitCompare, Heart } from 'lucide-react';
import { CalculateScoreUseCase } from '../core/use-cases/CalculateScoreUseCase';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find(p => p.slug === slug || p.id === slug) || PRODUCTS[0];
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);

  const { addProduct, removeProduct, isInCompare } = useComparator();
  const { toggleFavorite, isFavorite } = useFavorites();

  const inComp = isInCompare(product.id);
  const isFav = isFavorite(product.id);

  // Strategy metric labels
  const useCase = new CalculateScoreUseCase();
  const strategy = useCase.getStrategyForCategory(product.category);
  const metricNames = strategy.getMetricNames();

  const subscoresList = [
    { label: metricNames.espresso || 'Extracción', value: product.subscores.espresso },
    { label: metricNames.vapor || 'Vapor / Retención', value: product.subscores.vapor },
    { label: metricNames.facilidad || 'Facilidad de uso', value: product.subscores.facilidad },
    { label: metricNames.construccion || 'Construcción', value: product.subscores.construccion },
    { label: metricNames.precio || 'Relación Calidad/Precio', value: product.subscores.precio },
  ];

  const specRows = [
    { k: 'Presión de bomba', v: product.specs.bomba },
    { k: 'Potencia del motor / caldera', v: product.specs.potencia },
    { k: 'Tiempo de calentamiento', v: product.specs.calentamiento },
    { k: 'Control PID de temperatura', v: product.specs.pid },
    { k: 'Capacidad del depósito', v: product.specs.deposito },
    { k: 'Vaporizador', v: product.specs.vaporizador },
    { k: 'Molinillo integrado', v: product.specs.molinillo },
    { k: 'Tipo y diámetro portafiltro', v: product.specs.portafiltro },
    { k: 'Tipo y tamaño de muelas', v: product.specs.tipoMuelas },
    { k: 'Ajuste de molienda', v: product.specs.ajuste },
    { k: 'Retención de café', v: product.specs.retencion },
    { k: 'Dimensiones (An × Prof × Al)', v: product.specs.dimensiones },
    { k: 'Peso neto', v: product.specs.peso },
    { k: 'Garantía oficial', v: product.specs.garantia || '2 años' },
  ].filter(r => Boolean(r.v));

  const relatedProducts = PRODUCTS.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const activeImage = product.gallery[selectedImgIdx] || product.image;

  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Inicio</Link>
        <span className="sep">/</span>
        <Link to={`/${product.category}`} className="capitalize">{product.category}</Link>
        <span className="sep">/</span>
        <span className="current">{product.name}</span>
      </div>

      {/* Product Hero */}
      <section className="product-hero">
        {/* Left: Gallery */}
        <div>
          <div className="gallery-main">
            <img src={activeImage} alt={product.name} />
          </div>
          {product.gallery.length > 1 && (
            <div className="gallery-thumbs">
              {product.gallery.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImgIdx(idx)}
                  className="gallery-thumb"
                  style={{ borderColor: selectedImgIdx === idx ? 'var(--blue)' : 'var(--line)' }}
                >
                  <img src={img} alt={`${product.name} ${idx + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right: Info */}
        <div>
          <div className="product-brand-eyebrow">
            {product.brand} · {product.category.toUpperCase()}
          </div>
          <h1 className="product-detail-title">{product.name}</h1>

          {/* Big Score Row */}
          <div className="score-row-big">
            <div className="score-circle-big">
              <div className="num">{product.score.getFormatted()}</div>
              <div className="out">/ 10</div>
            </div>
            <div className="score-context">
              <strong style={{ color: 'var(--ink)', fontSize: '0.95rem', display: 'block' }}>
                The Coffee Score: {product.score.getRatingLabel()}
              </strong>
              Basado en pruebas cuantitativas de laboratorio independientes.
            </div>
          </div>

          <div className="product-detail-price">{product.price} €</div>
          <div className="price-note">Precio actualizado y verificado hoy en tiendas oficiales</div>

          {/* CTAs */}
          <div className="detail-cta-row">
            <AffiliateButton
              stores={product.stores}
              productName={product.name}
              defaultPrice={product.price}
              label="Comprobar precio en tiendas →"
              className="btn btn-solid"
            />

            <button
              onClick={() => inComp ? removeProduct(product.id) : addProduct(product.id)}
              className="btn btn-outline"
            >
              <GitCompare size={15} />
              <span>{inComp ? 'En comparador' : '+ Comparar'}</span>
            </button>

            <button
              onClick={() => toggleFavorite(product.id)}
              className="btn btn-outline"
              style={{ padding: '14px 16px' }}
              title={isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}
            >
              <Heart size={16} className={isFav ? 'fill-accent text-accent' : ''} />
            </button>
          </div>

          {/* Subscores Grid */}
          <div className="subscore-grid">
            {subscoresList.map((item, idx) => (
              <div key={idx} className="subscore-item">
                <div className="subscore-top">
                  <span style={{ fontWeight: 600 }}>{item.label}</span>
                  <span style={{ fontWeight: 700 }}>{item.value.toFixed(1)}</span>
                </div>
                <div className="subscore-bar">
                  <div className="subscore-fill" style={{ width: `${Math.min(100, item.value * 10)}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Pros & Cons */}
          <div className="pros-cons">
            <div className="pc-box pros">
              <div className="pc-title" style={{ color: 'var(--green)' }}>A Favor</div>
              <ul>
                {product.pros.map((pro, i) => (
                  <li key={i}>{pro}</li>
                ))}
              </ul>
            </div>

            <div className="pc-box cons">
              <div className="pc-title" style={{ color: 'var(--accent)' }}>En Contra</div>
              <ul>
                {product.cons.map((con, i) => (
                  <li key={i}>{con}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Body */}
      {product.editorialReview && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="fb" style={{ maxWidth: 900 }}>
            <div className="eyebrow-red">Bajo el Microscopio</div>
            <h2 style={{ fontSize: '1.85rem', marginBottom: 12 }}>{product.editorialReview.title}</h2>
            <p style={{ fontStyle: 'italic', color: 'var(--muted)', marginBottom: 20 }}>
              {product.editorialReview.question}
            </p>
            <div className="editorial-body">
              <p>{product.editorialReview.content}</p>
            </div>
          </div>
        </section>
      )}

      {/* Specs Table */}
      <section className="section" style={{ paddingTop: 0 }}>
        <h2 className="section-title">Especificaciones Técnicas</h2>
        <div className="spec-table-wrap" style={{ maxWidth: 900 }}>
          {specRows.map((row, idx) => (
            <div key={idx} className="spec-row">
              <span className="k">{row.k}</span>
              <span className="v">{row.v}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <h2 className="section-title">Alternativas a considerar</h2>
          <div className="related-strip">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
