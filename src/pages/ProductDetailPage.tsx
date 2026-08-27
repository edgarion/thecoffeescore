import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/catalog';
import { AffiliateButton } from '../components/ui/AffiliateButton';
import { useComparator } from '../hooks/useComparator';
import { useFavorites } from '../hooks/useFavorites';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/product/ProductCard';
import { CalculateScoreUseCase } from '../core/use-cases/CalculateScoreUseCase';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find(p => p.slug === slug || p.id === slug) || PRODUCTS[0];
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);

  const { addProduct, removeProduct, isInCompare } = useComparator();
  const { toggleFavorite, isFavorite } = useFavorites();
  const { addItem } = useCart();

  const inComp = isInCompare(product.id);
  const isFav = isFavorite(product.id);

  // Strategy metric labels
  const useCase = new CalculateScoreUseCase();
  const strategy = useCase.getStrategyForCategory(product.category);
  const metricNames = strategy.getMetricNames();

  const subscoresList = [
    { label: metricNames.espresso || 'Extracción', value: product.subscores.espresso ?? 9.0 },
    { label: metricNames.vapor || 'Vapor / Retención', value: product.subscores.vapor ?? 9.0 },
    { label: metricNames.facilidad || 'Facilidad de uso', value: product.subscores.facilidad ?? 9.0 },
    { label: metricNames.construccion || 'Construcción', value: product.subscores.construccion ?? 9.0 },
    { label: metricNames.precio || 'Relación Calidad/Precio', value: product.subscores.precio ?? 9.0 },
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
            <img
              src={activeImage}
              alt={product.name}
              onError={(e) => {
                const target = e.currentTarget;
                target.onerror = null;
                target.src = '/assets/products/sage-bambino.png';
              }}
            />
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
                  <img
                    src={img}
                    alt={`${product.name} ${idx + 1}`}
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.onerror = null;
                      target.src = '/assets/products/sage-bambino.png';
                    }}
                  />
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
          <div className="price-note mb-4">Precio actualizado y verificado hoy en tiendas oficiales</div>

          {/* Quick Direct Store Buttons */}
          {product.stores && product.stores.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {product.stores.map((st, idx) => (
                <a
                  key={idx}
                  href={st.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    st.isBest
                      ? 'bg-[#2f6fed] hover:bg-[#2055be] text-white shadow-sm hover:-translate-y-0.5'
                      : 'bg-white hover:bg-stone-100 text-ink border border-[#e6e3da]'
                  }`}
                  title={`Comprar en ${st.name} por ${st.price} €`}
                >
                  <span>Comprar en {st.name} ({st.price} €) →</span>
                </a>
              ))}
            </div>
          )}

          {/* CTAs */}
          <div className="detail-cta-row flex flex-wrap gap-2.5 items-center">
            {product.stores && product.stores.length > 0 && (
              <a
                href={product.stores[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-solid flex items-center justify-center !bg-[#2f6fed] hover:!bg-[#2055be] !border-none font-bold text-xs !text-white"
              >
                <span>Comprar ahora en {product.stores[0].name.split(' ')[0]} →</span>
              </a>
            )}

            <button
              onClick={() => addItem({
                productId: product.id,
                productName: `${product.brand} ${product.name}`,
                productImage: product.image,
                selectedStore: product.stores?.[0]?.name || product.brand,
                storeUrl: product.stores?.[0]?.url,
                unitPrice: product.price,
                quantity: 1,
              })}
              className="btn btn-solid flex items-center justify-center !bg-[#e94e2b] hover:!bg-[#d43d1a] !border-none font-bold text-xs"
            >
              <span>Añadir a la Cesta</span>
            </button>

            <AffiliateButton
              stores={product.stores}
              productName={product.name}
              defaultPrice={product.price}
              label="Ver todas las tiendas →"
              className="btn btn-outline text-xs font-semibold"
            />

            <button
              onClick={() => inComp ? removeProduct(product.id) : addProduct(product.id)}
              className="btn btn-outline"
            >
              <span>{inComp ? 'En comparador' : '+ Comparar'}</span>
            </button>

            <button
              onClick={() => toggleFavorite(product.id)}
              className="btn btn-outline"
              style={{ padding: '14px 18px' }}
              title={isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}
            >
              <span>{isFav ? 'Guardado' : 'Guardar'}</span>
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

      {/* Dónde Comprar al Mejor Precio: Tiendas, Precios y Enlaces Directos */}
      {product.stores && product.stores.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="bg-white border border-[#e6e3da] rounded-2xl p-6 sm:p-8 max-w-[900px]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#e6e3da]">
              <div>
                <div className="text-[#e94e2b] text-xs font-bold uppercase tracking-wider mb-1">
                  Comparativa de Tiendas & Disponibilidad
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-ink">
                  Dónde comprar {product.name} al mejor precio
                </h2>
              </div>
              <div className="text-xs text-[#6b6a63] bg-[#f4f2ec] px-3 py-1.5 rounded-full self-start sm:self-auto font-medium">
                Precios verificados hoy
              </div>
            </div>

            <div className="space-y-3">
              {product.stores.map((store, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border transition-all gap-3 ${
                    store.isBest
                      ? 'border-[#2f6fed] bg-[#f8fbff] ring-1 ring-[#2f6fed]/30'
                      : 'border-[#e6e3da] bg-white hover:border-[#2f6fed]/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#f4f2ec] flex items-center justify-center font-bold text-xs text-ink shrink-0 font-mono">
                      {store.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-ink text-sm sm:text-base">{store.name}</span>
                        {store.isBest && (
                          <span className="bg-[#2f6fed] text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
                            Mejor Precio
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-[#6b6a63] mt-0.5">
                        {store.inStock ? 'En stock · Entrega 24/48h' : 'Bajo pedido'}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 mt-2 sm:mt-0">
                    <div className="text-right">
                      <span className="font-extrabold text-lg sm:text-xl text-ink font-mono">{store.price} €</span>
                      {store.isBest && product.oldPrice && product.oldPrice > store.price && (
                        <div className="text-[11px] text-[#2e7d32] font-semibold">
                          Ahorras {(product.oldPrice - store.price)} €
                        </div>
                      )}
                    </div>
                    <a
                      href={store.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all shrink-0 ${
                        store.isBest
                          ? 'bg-[#2f6fed] hover:bg-[#2055be] text-white shadow-sm hover:-translate-y-0.5'
                          : 'bg-ink hover:bg-black text-white'
                      }`}
                    >
                      Comprar en {store.name.split(' ')[0]} →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-xs text-[#6b6a63] leading-relaxed bg-[#fbfaf8] p-3 rounded-lg border border-[#e6e3da]">
              <strong>Transparencia e Independencia:</strong> Monitorizamos diariamente los precios de venta en Amazon, tiendas especializadas de café y distribuidores oficiales autorizados. Si compras a través de estos enlaces, podemos recibir una comisión sin coste adicional para ti.
            </div>
          </div>
        </section>
      )}

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
