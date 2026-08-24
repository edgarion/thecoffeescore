import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/catalog';
import { ProductCard } from '../components/product/ProductCard';
import { TrustBar } from '../components/layout/TrustBar';
import { showToast } from '../hooks/useToast';
import {
  Search,
  BarChart2,
  Tag,
  Coffee,
  Flame,
  Sliders,
  Wrench,
  Euro,
  Send,
  ArrowRight
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'maquinas' | 'molinos' | 'accesorios' | 'cafe'>('maquinas');
  const [newsletterEmail, setNewsletterEmail] = useState('');

  // Selected top 3 products for the active tab (Sage Bambino, Lelit Anna, DeLonghi Specialista)
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
    <div className="space-y-10 pb-12">
      {/* 1. HERO SECTION */}
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
              <div className="featured-photo">
                <img src="/assets/products/sage-bambino.png" alt="Sage Bambino Plus" />
              </div>
              <div className="featured-name">Sage Bambino Plus</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: 8 }}>Compacta, rápida y sorprendentemente capaz.</div>
              <span className="score-pill">8.4/10</span>
              <div className="featured-price">449 €</div>
              <Link className="btn-mini" to="/producto/sage-bambino-plus">Ver análisis →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRANDS TICKER */}
      <TrustBar />

      {/* 3. TOP DISCOVERY ROW (ENCUENTRA TU PRÓXIMA COMPRA + COMPARA HASTA 4 + OFERTAS DESTACADAS) */}
      <section className="wrap">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-stretch">
          {/* Main Discovery Catalog (7 cols) */}
          <div className="xl:col-span-7 flex flex-col justify-between space-y-4">
            <div>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ink mb-3">
                Encuentra tu próxima compra
              </h2>
              
              {/* Category Tabs */}
              <div className="inline-flex p-1 bg-[#f4f2ec] border border-[#e6e3da] rounded-xl gap-1 mb-4 overflow-x-auto max-w-full">
                <button
                  type="button"
                  onClick={() => setActiveTab('maquinas')}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    activeTab === 'maquinas'
                      ? 'bg-ink text-white shadow-sm font-bold'
                      : 'text-[#333] hover:text-ink'
                  }`}
                >
                  Máquinas
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('molinos')}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    activeTab === 'molinos'
                      ? 'bg-ink text-white shadow-sm font-bold'
                      : 'text-[#333] hover:text-ink'
                  }`}
                >
                  Molinos
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('accesorios')}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    activeTab === 'accesorios'
                      ? 'bg-ink text-white shadow-sm font-bold'
                      : 'text-[#333] hover:text-ink'
                  }`}
                >
                  Accesorios
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('cafe')}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    activeTab === 'cafe'
                      ? 'bg-ink text-white shadow-sm font-bold'
                      : 'text-[#333] hover:text-ink'
                  }`}
                >
                  Café
                </button>
              </div>
            </div>

            {/* 3 Product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {tabProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Middle Box: Compara hasta 4 productos (3 cols) */}
          <div className="xl:col-span-3 bg-[#f4f2ec] border border-[#e6e3da] rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-ink leading-tight">
                Compara hasta<br />4 productos
              </h3>
              <p className="text-xs text-[#6b6a63] mt-1.5 mb-5">
                Ve las diferencias clave lado a lado.
              </p>

              <ul className="space-y-3.5 text-xs font-semibold text-[#333] mb-6">
                <li className="flex items-center gap-2.5">
                  <Search size={15} className="text-[#2f6fed] shrink-0" />
                  <span>Especificaciones técnicas</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <BarChart2 size={15} className="text-[#2f6fed] shrink-0" />
                  <span>Puntuaciones por categoría</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Tag size={15} className="text-[#2f6fed] shrink-0" />
                  <span>Precios en tiempo real</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="w-full h-32 flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/coffee-grinders-compare.png"
                  alt="Comparador de molinos y cafeteras"
                  className="max-h-full object-contain drop-shadow-sm"
                />
              </div>
              <Link
                to="/comparador"
                className="btn btn-solid w-full justify-center !py-3 !text-xs !rounded-xl"
              >
                <span>Abrir comparador →</span>
              </Link>
            </div>
          </div>

          {/* Right Box: Ofertas destacadas (2 cols) */}
          <div className="xl:col-span-2 bg-[#f4f2ec] border border-[#e6e3da] rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-ink leading-tight">
                Ofertas<br />destacadas
              </h3>
              <p className="text-xs text-[#6b6a63] mt-1.5 mb-4">
                Las mejores oportunidades en máquinas y accesorios.
              </p>

              {/* Deal Card */}
              <div className="bg-white border border-[#e6e3da] rounded-xl p-3.5 relative mb-4 shadow-sm">
                <span className="absolute top-2 right-2 bg-[#e94e2b] text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-md">
                  -18%
                </span>
                <div className="w-full h-28 flex items-center justify-center p-1 mb-2">
                  <img
                    src="/assets/products/eureka-specialita.png"
                    alt="Eureka Mignon Specialita"
                    className="max-h-full object-contain"
                  />
                </div>
                <h4 className="font-bold text-xs text-ink line-clamp-1">
                  Eureka Mignon Specialita
                </h4>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="text-xs text-[#6b6a63] line-through">449 €</span>
                  <span className="font-extrabold text-sm text-[#e94e2b]">369 €</span>
                </div>
              </div>
            </div>

            <Link
              to="/ofertas"
              className="btn btn-solid w-full justify-center !py-3 !text-xs !rounded-xl"
            >
              <span>Ver oferta →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. MIDDLE SECTION: 3 CARDS ROW (EDITORIAL + GLOBAL INDEX + BARCELONA INDEX) */}
      <section className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Card 1: Análisis Destacado */}
          <div className="bg-white border border-[#e6e3da] rounded-2xl p-6 flex flex-col justify-between shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-[11px] font-bold text-[#e94e2b] uppercase tracking-wider mb-1">
                  Análisis destacado
                </div>
                <h3 className="font-serif font-bold text-xl text-ink leading-tight mb-2">
                  Sage Bambino Plus<br />bajo el microscopio
                </h3>
                <p className="text-xs text-[#6b6a63] leading-relaxed mb-4">
                  ¿Merece la pena pagar por el calentamiento en 3 segundos?
                </p>
                <Link
                  to="/producto/sage-bambino-plus"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2f6fed] hover:underline"
                >
                  <span>Leer análisis →</span>
                </Link>
              </div>
              <div className="w-28 sm:w-32 h-28 sm:h-32 shrink-0 flex items-center justify-center">
                <img
                  src="/assets/pouring.png"
                  alt="Análisis Sage Bambino Plus"
                  className="max-h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Card 2: Índice Global del Café */}
          <div className="bg-white border border-[#e6e3da] rounded-2xl p-6 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="font-serif font-bold text-lg text-ink">
                Índice global del café
              </h3>
              <p className="text-xs text-[#6b6a63] mb-3">
                Precio medio por origen (USD/kg)
              </p>

              <div className="grid grid-cols-12 gap-3 items-center mb-3">
                {/* Line Chart SVG */}
                <div className="col-span-5 h-24 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 100 60" fill="none">
                    {/* Grid lines */}
                    <line x1="0" y1="15" x2="100" y2="15" stroke="#f0ede6" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1="0" y1="30" x2="100" y2="30" stroke="#f0ede6" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1="0" y1="45" x2="100" y2="45" stroke="#f0ede6" strokeWidth="1" strokeDasharray="2 2" />
                    
                    {/* Line 1: Orange/Red */}
                    <path d="M5 25 Q 30 18, 50 12 T 95 8" stroke="#e94e2b" strokeWidth="2.5" fill="none" />
                    <circle cx="5" cy="25" r="2.5" fill="#e94e2b" />
                    <circle cx="50" cy="12" r="2.5" fill="#e94e2b" />
                    <circle cx="95" cy="8" r="2.5" fill="#e94e2b" />

                    {/* Line 2: Blue */}
                    <path d="M5 38 Q 35 34, 60 28 T 95 22" stroke="#2f6fed" strokeWidth="2.5" fill="none" />
                    <circle cx="5" cy="38" r="2.5" fill="#2f6fed" />
                    <circle cx="60" cy="28" r="2.5" fill="#2f6fed" />
                    <circle cx="95" cy="22" r="2.5" fill="#2f6fed" />

                    {/* Line 3: Green */}
                    <path d="M5 48 Q 40 45, 65 42 T 95 40" stroke="#3fae6a" strokeWidth="2.5" fill="none" />
                    <circle cx="5" cy="48" r="2.5" fill="#3fae6a" />
                    <circle cx="65" cy="42" r="2.5" fill="#3fae6a" />
                    <circle cx="95" cy="40" r="2.5" fill="#3fae6a" />
                  </svg>
                </div>

                {/* Data Rows */}
                <div className="col-span-7 space-y-1.5 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-ink">Panamá Geisha</span>
                    <span className="font-bold text-[#e94e2b]">102.50 +2.1%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-ink">Etiopía Yirgacheffe</span>
                    <span className="font-bold text-[#e94e2b]">34.80 +1.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-ink">Colombia Anaeróbico</span>
                    <span className="font-bold text-[#3fae6a]">28.60 +0.1%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-ink">Indonesia Mandheling</span>
                    <span className="font-bold text-[#e94e2b]">18.90 -0.9%</span>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/cafe"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2f6fed] hover:underline pt-2 border-t border-[#e6e3da]"
            >
              <span>Ver índice completo →</span>
            </Link>
          </div>

          {/* Card 3: Barcelona Roasters Index */}
          <div className="bg-white border border-[#e6e3da] rounded-2xl p-6 flex flex-col justify-between shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="font-serif font-bold text-lg text-ink mb-3">
                  Barcelona Roasters Index
                </h3>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between items-center py-0.5">
                    <span className="font-semibold text-ink">Nomad Coffee</span>
                    <span className="font-bold text-ink">28,00 €/kg</span>
                  </div>
                  <div className="flex justify-between items-center py-0.5">
                    <span className="font-semibold text-ink">Right Side Coffee</span>
                    <span className="font-bold text-ink">27,00 €/kg</span>
                  </div>
                  <div className="flex justify-between items-center py-0.5">
                    <span className="font-semibold text-ink">Satan's Coffee Corner</span>
                    <span className="font-bold text-ink">26,50 €/kg</span>
                  </div>
                  <div className="flex justify-between items-center py-0.5">
                    <span className="font-semibold text-ink">Syra Coffee</span>
                    <span className="font-bold text-ink">25,00 €/kg</span>
                  </div>
                  <div className="flex justify-between items-center py-0.5">
                    <span className="font-semibold text-ink">Three Marks Coffee</span>
                    <span className="font-bold text-ink">24,50 €/kg</span>
                  </div>
                </div>
              </div>

              <div className="w-24 h-28 shrink-0 flex items-center justify-center">
                <img
                  src="/assets/bag.png"
                  alt="Nomad Coffee Bolsa"
                  className="max-h-full object-contain"
                />
              </div>
            </div>

            <Link
              to="/cafe"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2f6fed] hover:underline pt-2 border-t border-[#e6e3da]"
            >
              <span>Ver todos →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM SECTION: 3 CARDS ROW (NEWSLETTER + GUIDES + RATINGS) */}
      <section className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Bottom Card 1: Newsletter */}
          <div className="bg-[#f4f2ec] border border-[#e6e3da] rounded-2xl p-6 flex flex-col justify-between">
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-ink mb-2 leading-tight">
                  El radar del café,<br />cada semana.
                </h3>
                <p className="text-xs text-[#6b6a63] leading-relaxed">
                  Noticias, análisis, ofertas y nuevas guías. Sin spam. Solo lo importante.
                </p>
              </div>
              <div className="w-12 h-12 shrink-0 flex items-center justify-center text-ink opacity-75">
                <Send size={28} />
              </div>
            </div>

            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Tu email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 bg-white border border-[#e6e3da] rounded-xl px-3.5 py-2.5 text-xs outline-none focus:border-ink"
              />
              <button
                type="submit"
                className="btn btn-solid !py-2.5 !px-4 !text-xs !rounded-xl shrink-0"
              >
                Suscribirme
              </button>
            </form>
          </div>

          {/* Bottom Card 2: Últimas Guías */}
          <div className="bg-white border border-[#e6e3da] rounded-2xl p-6 flex flex-col justify-between shadow-sm">
            <h3 className="font-serif font-bold text-lg text-ink mb-3">
              Últimas guías
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {/* Guide 1 */}
              <div className="border border-[#e6e3da] rounded-xl p-3 bg-[#fbfaf7] flex flex-col justify-between">
                <div>
                  <h4 className="font-serif font-bold text-xs sm:text-sm text-ink leading-tight mb-2">
                    Cómo elegir<br />un molino de café
                  </h4>
                  <Link
                    to="/guias"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-ink hover:text-[#2f6fed]"
                  >
                    <span>Leer guía</span>
                    <ArrowRight size={11} />
                  </Link>
                </div>
                <div className="w-full h-14 flex items-center justify-center mt-2">
                  <img
                    src="/assets/cherries.png"
                    alt="Molino de café"
                    className="max-h-full object-contain"
                  />
                </div>
              </div>

              {/* Guide 2 */}
              <div className="border border-[#e6e3da] rounded-xl p-3 bg-[#fbfaf7] flex flex-col justify-between">
                <div>
                  <h4 className="font-serif font-bold text-xs sm:text-sm text-ink leading-tight mb-2">
                    Ambientadores<br />y accesorios
                  </h4>
                  <Link
                    to="/guias"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-ink hover:text-[#2f6fed]"
                  >
                    <span>Leer guía</span>
                    <ArrowRight size={11} />
                  </Link>
                </div>
                <div className="w-full h-14 flex items-center justify-center mt-2">
                  <img
                    src="/assets/pourover.png"
                    alt="Accesorios"
                    className="max-h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Card 3: Nuestras Valoraciones */}
          <div className="bg-white border border-[#e6e3da] rounded-2xl p-6 flex flex-col justify-between shadow-sm">
            <h3 className="font-serif font-bold text-lg text-ink mb-4">
              Nuestras valoraciones
            </h3>

            <div className="grid grid-cols-5 gap-2 text-center py-2">
              {/* 1. Espresso */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#2f6fed] text-white flex items-center justify-center shadow-sm">
                  <Coffee size={18} />
                </div>
                <span className="text-[11px] font-medium text-[#6b6a63]">Espresso</span>
              </div>

              {/* 2. Vapor */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#e94e2b] text-white flex items-center justify-center shadow-sm">
                  <Flame size={18} />
                </div>
                <span className="text-[11px] font-medium text-[#6b6a63]">Vapor</span>
              </div>

              {/* 3. Facilidad */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#f5b642] text-white flex items-center justify-center shadow-sm">
                  <Sliders size={18} />
                </div>
                <span className="text-[11px] font-medium text-[#6b6a63]">Facilidad</span>
              </div>

              {/* 4. Construcción */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#9c9a90] text-white flex items-center justify-center shadow-sm">
                  <Wrench size={18} />
                </div>
                <span className="text-[11px] font-medium text-[#6b6a63]">Construcción</span>
              </div>

              {/* 5. Precio */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#3fae6a] text-white flex items-center justify-center shadow-sm">
                  <Euro size={18} />
                </div>
                <span className="text-[11px] font-medium text-[#6b6a63]">Precio</span>
              </div>
            </div>

            <div className="pt-2"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
