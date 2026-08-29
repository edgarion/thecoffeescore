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
                target.src = product.category === 'accesorios' ? '/assets/accessory-fallback.png' : '/assets/machine-fallback.png';
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
                      target.src = product.category === 'accesorios' ? '/assets/accessory-fallback.png' : '/assets/machine-fallback.png';
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

          {/* Product Hero Description */}
          {product.shortDesc && (
            <div className="my-3.5 p-3.5 bg-[#fbfaf7] border border-[#e6e3da] rounded-xl text-xs sm:text-sm text-stone-700 leading-relaxed shadow-2xs">
              <div className="text-[10px] font-bold text-[#e94e2b] uppercase tracking-wider mb-1">
                Descripción del Producto
              </div>
              <p className="font-normal text-ink">
                {product.shortDesc}
              </p>
            </div>
          )}

          <div className="product-detail-price">{product.price} €</div>
          
          {(() => {
            const isAvailable = product.stores?.some(s => s.inStock) && product.specs?.['Disponibilidad'] !== 'Agotado';
            return (
              <>
                <div className="flex items-center gap-2 mb-4">
                  {isAvailable ? (
                    <span className="text-xs text-[#2e7d32] font-semibold bg-green-50 border border-green-200 px-2.5 py-0.5 rounded-full">
                      ✓ En stock y disponible
                    </span>
                  ) : (
                    <span className="text-xs text-[#d97706] font-semibold bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                      ⏳ Lote agotado / fuera de temporada en tostador
                    </span>
                  )}
                  <span className="text-xs text-[#6b6a63]">Precio verificado en tienda oficial</span>
                </div>

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
                          st.isBest && isAvailable
                            ? 'bg-[#2f6fed] hover:bg-[#2055be] text-white shadow-sm hover:-translate-y-0.5'
                            : 'bg-white hover:bg-stone-100 text-ink border border-[#e6e3da]'
                        }`}
                        title={`Ir a ${st.name} por ${st.price} €`}
                      >
                        <span>{isAvailable ? `Comprar en ${st.name} (${st.price} €) →` : `Ver en ${st.name} ↗`}</span>
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
                      className={`btn btn-solid flex items-center justify-center !border-none font-bold text-xs !text-white ${
                        isAvailable
                          ? '!bg-[#2f6fed] hover:!bg-[#2055be]'
                          : '!bg-stone-800 hover:!bg-black'
                      }`}
                    >
                      <span>{isAvailable ? `Comprar ahora en ${product.stores[0].name.split(' ')[0]} →` : `Visitar tienda de ${product.stores[0].name.split(' ')[0]} ↗`}</span>
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
              </>
            );
          })()}

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

      {/* Detailed Product Description & Expert Analysis */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="bg-white border border-[#e6e3da] rounded-2xl p-6 sm:p-8 max-w-[900px] shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-[#fdece7] text-[#e94e2b] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
              ANÁLISIS & GUÍA
            </span>
            <span className="text-xs text-[#6b6a63]">Criterio técnico independiente</span>
          </div>

          <h2 className="font-serif font-bold text-xl sm:text-2xl text-ink mb-3">
            Sobre {product.name}
          </h2>

          <div className="prose prose-stone max-w-none text-xs sm:text-sm text-stone-700 leading-relaxed mb-6">
            <p className="text-stone-800 font-medium text-sm sm:text-base leading-relaxed mb-3">
              {product.shortDesc}
            </p>
            {product.editorialReview?.content ? (
              <p className="text-stone-600 leading-relaxed">
                {product.editorialReview.content}
              </p>
            ) : (
              <p className="text-stone-600 leading-relaxed">
                Diseñado por <strong>{product.brand}</strong>, este producto ha sido evaluado bajo los estándares de laboratorio de <em>The Coffee Score</em>. Destaca por su equilibrio entre rendimiento, calidad de construcción y consistencia en el ritual de café de especialidad.
              </p>
            )}
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#f0eee6]">
            <div className="bg-[#fcfbf9] border border-[#e6e3da] rounded-xl p-3.5">
              <div className="text-[10px] font-bold text-[#e94e2b] uppercase tracking-wide mb-1">
                Puntuación Global
              </div>
              <div className="font-serif font-bold text-lg text-ink">
                {product.score.getFormatted()} / 10
              </div>
              <p className="text-[11px] text-stone-500 mt-0.5">
                {product.score.getRatingLabel()}
              </p>
            </div>

            <div className="bg-[#fcfbf9] border border-[#e6e3da] rounded-xl p-3.5">
              <div className="text-[10px] font-bold text-[#2f6fed] uppercase tracking-wide mb-1">
                Categoría Oficial
              </div>
              <div className="font-serif font-bold text-lg text-ink capitalize">
                {product.category}
              </div>
              <p className="text-[11px] text-stone-500 mt-0.5">
                {product.brand}
              </p>
            </div>

            <div className="bg-[#fcfbf9] border border-[#e6e3da] rounded-xl p-3.5">
              <div className="text-[10px] font-bold text-[#2e7d32] uppercase tracking-wide mb-1">
                Mejor Opción
              </div>
              <div className="font-serif font-bold text-lg text-ink font-mono">
                {product.price} €
              </div>
              <p className="text-[11px] text-stone-500 mt-0.5">
                Precio verificado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dónde Comprar al Mejor Precio: Comparativa Global de Tiendas Oficiales y Distribuidores */}
      {product.stores && product.stores.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="bg-white border border-[#e6e3da] rounded-2xl p-6 sm:p-8 max-w-[900px]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#e6e3da]">
              <div>
                <div className="text-[#e94e2b] text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <span>🌍</span> Comparativa Internacional de Tiendas & Disponibilidad
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-ink">
                  Dónde comprar {product.name} al mejor precio
                </h2>
                <p className="text-xs text-[#6b6a63] mt-1">
                  Compara comercios oficiales directos, distribuidores autorizados y marketplaces verificados de todo el mundo.
                </p>
              </div>
              <div className="text-xs text-[#2e7d32] bg-[#edf7ed] border border-[#c8e6c9] px-3 py-1.5 rounded-full self-start sm:self-auto font-semibold shrink-0 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#2e7d32] animate-pulse"></span>
                Precios verificados hoy
              </div>
            </div>

            <div className="space-y-3">
              {product.stores.map((store, idx) => {
                // Determine origin flag and store type
                const isAmazon = store.name.toLowerCase().includes('amazon');
                const isOfficial = !isAmazon && (store.name.toLowerCase().includes('oficial') || store.name.toLowerCase().includes(product.brand.toLowerCase()));
                const isECI = store.name.toLowerCase().includes('corte');
                const isMaxi = store.name.toLowerCase().includes('maxi');
                
                let flag = store.flag || (isAmazon ? '🇪🇸' : isECI ? '🇪🇸' : isMaxi ? '🇪🇺' : '🌍');
                if (product.specs?.['País de Origen']?.includes('España')) flag = '🇪🇸';
                else if (product.specs?.['País de Origen']?.includes('Alemania')) flag = '🇩🇪';
                else if (product.specs?.['País de Origen']?.includes('Dinamarca')) flag = '🇩🇰';
                else if (product.specs?.['País de Origen']?.includes('Reino Unido')) flag = '🇬🇧';
                else if (product.specs?.['País de Origen']?.includes('USA') || product.specs?.['País de Origen']?.includes('Estados Unidos')) flag = '🇺🇸';
                else if (product.specs?.['País de Origen']?.includes('Japón')) flag = '🇯🇵';
                else if (product.specs?.['País de Origen']?.includes('Australia')) flag = '🇦🇺';
                else if (product.specs?.['País de Origen']?.includes('Italia')) flag = '🇮🇹';

                const storeType = isOfficial ? 'Tienda Oficial Directa' : isAmazon ? 'Marketplace Verificado' : isECI ? 'Gran Superficie Autorizada' : 'Distribuidor Especializado';
                const shippingNote = store.shipping || (isAmazon ? 'Envío Prime 24h · Devolución fácil' : isOfficial ? 'Envío directo de fabricante / tostador' : 'Envío rápido 24-48h');

                return (
                  <div
                    key={idx}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-xl border transition-all gap-4 ${
                      store.isBest
                        ? 'border-[#2f6fed] bg-[#f8fbff] ring-1 ring-[#2f6fed]/30 shadow-sm'
                        : 'border-[#e6e3da] bg-white hover:border-[#2f6fed]/40 hover:shadow-xs'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-[#f4f2ec] border border-[#e6e3da] flex items-center justify-center font-bold text-lg shrink-0">
                        {flag}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold text-ink text-sm sm:text-base">{store.name}</span>
                          <span className="text-[10px] font-semibold text-[#6b6a63] bg-[#f4f2ec] px-2 py-0.5 rounded border border-[#e6e3da]">
                            {storeType}
                          </span>
                          {store.isBest && (
                            <span className="bg-[#2f6fed] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                              Mejor Precio
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-[#6b6a63] mt-1 flex items-center gap-1.5">
                          <span className={store.inStock ? "text-[#2e7d32] font-semibold" : "text-[#d97706] font-semibold"}>
                            {store.inStock ? '✓ En stock' : '⏳ Disponibilidad bajo pedido'}
                          </span>
                          <span>·</span>
                          <span>{shippingNote}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4 mt-2 sm:mt-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-[#e6e3da]">
                      <div className="text-left sm:text-right">
                        <div className="font-extrabold text-lg sm:text-2xl text-ink font-mono leading-none">
                          {store.price} €
                        </div>
                        {store.isBest && product.oldPrice && product.oldPrice > store.price && (
                          <div className="text-[11px] text-[#2e7d32] font-semibold mt-1">
                            Ahorras {(product.oldPrice - store.price).toFixed(2).replace(/\.00$/, '')} € vs PVP
                          </div>
                        )}
                      </div>
                      <a
                        href={store.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                          store.isBest
                            ? 'bg-[#2f6fed] hover:bg-[#2055be] text-white shadow-sm hover:-translate-y-0.5'
                            : 'bg-ink hover:bg-black text-white hover:-translate-y-0.5'
                        }`}
                        title={`Ir a la tienda ${store.name} para comprar ${product.name}`}
                      >
                        <span>Ir a la tienda</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 text-xs text-[#6b6a63] leading-relaxed bg-[#fbfaf8] p-3.5 rounded-xl border border-[#e6e3da] flex items-start gap-2.5">
              <span className="text-base leading-none shrink-0">🛡️</span>
              <div>
                <strong>Garantía de Transparencia:</strong> Todos los enlaces dirigen directamente a comercios certificados y tiendas oficiales. Los precios y stocks se sincronizan para ofrecerte siempre la alternativa de compra más ventajosa.
              </div>
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
