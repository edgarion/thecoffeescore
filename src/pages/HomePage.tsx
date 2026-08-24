import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/catalog';
import { ProductCard } from '../components/product/ProductCard';
import { TrustBar } from '../components/layout/TrustBar';
import { showToast } from '../hooks/useToast';

export const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'maquinas' | 'molinos' | 'accesorios' | 'cafe'>('maquinas');
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const tabProducts = PRODUCTS.filter(p => p.category === activeTab).slice(0, 3);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      showToast('✉️ ¡Te has suscrito con éxito a El radar del café!', 'success');
      setNewsletterEmail('');
    } else {
      showToast('Introduce un correo electrónico válido', 'warning');
    }
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              <span>COMPARA · ELIGE · DISFRUTA</span>
            </div>
            <h1 className="hero-title">
              Máquinas, <span className="thin">molinos</span><br className="hidden sm:inline" />
              {' '}y accesorios de café.<br className="hidden sm:inline" />
              {' '}<span className="thin">Comparados de verdad.</span>
            </h1>
            <p className="hero-sub">
              Analizamos, comparamos y recomendamos productos con datos reales, pruebas de uso y criterio independiente. Para que hagas un mejor café en casa, en la oficina o en tu negocio.
            </p>
            <div className="cta-row">
              <Link className="btn btn-solid" to="/comparador">Ir al comparador →</Link>
              <Link className="btn btn-outline" to="/guias">Ver análisis</Link>
            </div>
            <div className="trust-row">
              <span><span className="check">✓</span> Datos técnicos</span>
              <span><span className="check">✓</span> Precios actualizados</span>
              <span><span className="check">✓</span> Opinión experta</span>
            </div>
          </div>

          <div className="hero-illustration">
            <img src="/assets/hero.png" alt="Chico tomando café con la Sagrada Familia de fondo" />
            <div className="featured-card">
              <div className="featured-label">Producto destacado</div>
              <div className="badge-best">● MEJOR COMPRA</div>
              <div className="featured-photo"><img src="/assets/pourover.png" alt="Cafetera" /></div>
              <div className="featured-name">Sage Bambino Plus</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: 8 }}>Compacta, rápida y sorprendentemente capaz.</div>
              <span className="score-pill">8.4/10</span>
              <div className="featured-price">449 €</div>
              <Link className="btn-mini" to="/producto/sage-bambino-plus">Ver análisis →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND LOGOS */}
      <TrustBar />

      {/* SECTION DISCOVERY */}
      <section className="section">
        <h2 className="section-title">Encuentra tu próxima compra</h2>
        <div className="tabs">
          <button
            type="button"
            onClick={() => setActiveTab('maquinas')}
            className={`tab ${activeTab === 'maquinas' ? 'active' : ''}`}
          >
            Máquinas
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('molinos')}
            className={`tab ${activeTab === 'molinos' ? 'active' : ''}`}
          >
            Molinos
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('accesorios')}
            className={`tab ${activeTab === 'accesorios' ? 'active' : ''}`}
          >
            Accesorios
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('cafe')}
            className={`tab ${activeTab === 'cafe' ? 'active' : ''}`}
          >
            Café
          </button>
        </div>
        <div className="product-grid">
          {tabProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* THREE-COL (COMPARE + OFFERS) */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="three-col">
          <div className="compare-box">
            <div>
              <h3 style={{ fontSize: '1.4rem' }}>Compara hasta<br className="hidden sm:inline" /> 4 productos</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.88rem', marginTop: 8 }}>Ve las diferencias clave lado a lado.</p>
              <ul className="compare-features">
                <li>Especificaciones técnicas</li>
                <li>Puntuaciones por categoría</li>
                <li>Precios en tiempo real</li>
              </ul>
              <Link className="btn btn-solid" to="/comparador">Abrir comparador →</Link>
            </div>
            <div className="compare-illust"><img src="/assets/tamping.png" alt="Comparador de molinos" /></div>
          </div>

          <div className="offer-box">
            <div className="offer-title">Ofertas destacadas</div>
            <p style={{ color: 'var(--muted)', fontSize: '0.82rem', marginBottom: 14 }}>Las mejores oportunidades en máquinas y accesorios.</p>
            <div className="offer-card">
              <span className="discount-badge">-18%</span>
              <div className="offer-photo"><img src="/assets/bag.png" alt="Eureka Mignon Specialita" /></div>
              <div>
                <div className="offer-name">Eureka Mignon Specialita</div>
                <div><span className="price-old">449 €</span><span className="price-new">369 €</span></div>
              </div>
            </div>
            <Link className="offer-btn" to="/ofertas">Ver oferta →</Link>
          </div>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="content-grid">
          <div className="content-card">
            <div className="eyebrow-red">Análisis destacado</div>
            <h3 className="content-heading">Sage Bambino Plus bajo el microscopio</h3>
            <p className="content-sub">¿Merece la pena pagar por el calentamiento en 3 segundos?</p>
            <div className="content-photo"><img src="/assets/pouring.png" alt="Análisis Sage Bambino Plus" /></div>
            <Link className="link-arrow" to="/producto/sage-bambino-plus">Leer análisis →</Link>
          </div>
          <div className="content-card">
            <h3 className="content-heading" style={{ fontSize: '1.15rem' }}>Índice global del café</h3>
            <p className="content-sub" style={{ marginBottom: 8 }}>Precio medio por origen (USD/kg)</p>
            <div className="mini-chart"></div>
            <div className="index-row"><span>Panamá Geisha</span><span>102.50 <span className="index-change">+2.1%</span></span></div>
            <div className="index-row"><span>Etiopía Yirgacheffe</span><span>34.80 <span className="index-change">+1.2%</span></span></div>
            <div className="index-row"><span>Colombia Anaerobio</span><span>28.60 <span className="index-change">+0.5%</span></span></div>
            <div className="index-row"><span>Indonesia Mandheling</span><span>18.90 <span className="index-change down">-0.3%</span></span></div>
            <Link className="link-arrow" to="/cafe" style={{ display: 'block', marginTop: 12 }}>Ver índice completo →</Link>
          </div>
          <div className="content-card">
            <h3 className="content-heading" style={{ fontSize: '1.15rem' }}>Barcelona Roasters Index</h3>
            <div className="roast-row"><span>Nomad Coffee</span><span className="roast-price">28,00 €/kg</span></div>
            <div className="roast-row"><span>Right Side Coffee</span><span className="roast-price">27,00 €/kg</span></div>
            <div className="roast-row"><span>Satan's Coffee Corner</span><span className="roast-price">26,50 €/kg</span></div>
            <div className="roast-row"><span>Syra Coffee</span><span className="roast-price">25,00 €/kg</span></div>
            <div className="roast-row"><span>Three Marks Coffee</span><span className="roast-price">24,50 €/kg</span></div>
            <Link className="link-arrow" to="/cafe" style={{ display: 'block', marginTop: 12 }}>Ver todos →</Link>
          </div>
        </div>
      </section>

      {/* FOOTER BLOCKS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="footer-grid">
          <div className="fb">
            <h3 className="fb-title">El radar del café, cada semana.</h3>
            <p className="fb-sub">Noticias, análisis, ofertas y nuevas guías. Sin spam. Solo lo importante.</p>
            <form onSubmit={handleSubscribe} className="subscribe-row">
              <input
                type="email"
                placeholder="Tu email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <button type="submit">Suscribirme</button>
            </form>
          </div>
          <div className="fb">
            <h3 className="fb-title" style={{ marginBottom: 14 }}>Últimas guías</h3>
            <div className="guide-list">
              <div className="guide-card">
                <div className="guide-photo"><img src="/assets/cherries.png" alt="Guía molino" /></div>
                <div>
                  <div className="guide-name">Cómo elegir un molino de café</div>
                  <Link className="link-arrow" to="/guias" style={{ fontSize: '0.78rem' }}>Leer guía →</Link>
                </div>
              </div>
              <div className="guide-card">
                <div className="guide-photo"><img src="/assets/pourover.png" alt="Guía accesorios" /></div>
                <div>
                  <div className="guide-name">Amentadores y accesorios</div>
                  <Link className="link-arrow" to="/guias" style={{ fontSize: '0.78rem' }}>Leer guía →</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="fb">
            <h3 className="fb-title">Nuestras valoraciones</h3>
            <div className="rating-icons">
              <div className="rating-icon"><div className="rating-circle" style={{ background: '#2f6fed' }}></div>Espresso</div>
              <div className="rating-icon"><div className="rating-circle" style={{ background: '#e94e2b' }}></div>Vapor</div>
              <div className="rating-icon"><div className="rating-circle" style={{ background: '#f5b642' }}></div>Facilidad</div>
              <div className="rating-icon"><div className="rating-circle" style={{ background: '#9c9a90' }}></div>Construcción</div>
              <div className="rating-icon"><div className="rating-circle" style={{ background: '#3fae6a' }}></div>Precio</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
