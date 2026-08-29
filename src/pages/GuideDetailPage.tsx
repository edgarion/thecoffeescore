import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BUYING_GUIDES, PRODUCTS } from '../data/catalog';
import { SEOHead } from '../components/seo/SEOHead';
import { generateBreadcrumbSchema } from '../utils/seoSchemas';

export const GuideDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const guide = BUYING_GUIDES.find((g) => g.slug === slug || g.id === slug);

  if (!guide) {
    return <Navigate to="/guias" replace />;
  }

  // Related guides
  const relatedGuides = BUYING_GUIDES.filter((g) => g.id !== guide.id).slice(0, 3);

  // Relevant products linked by category or keywords
  const relevantProducts = PRODUCTS.filter((p) => {
    if (guide.category.toLowerCase().includes('molino') || guide.title.toLowerCase().includes('molino') || guide.title.toLowerCase().includes('molinillo')) {
      return p.category === 'molinos';
    }
    if (guide.title.toLowerCase().includes('delonghi') || guide.title.toLowerCase().includes('bambino') || guide.category.toLowerCase().includes('espresso')) {
      return p.category === 'maquinas';
    }
    return p.category === 'accesorios';
  }).slice(0, 4);

  return (
    <div className="pb-20">
      <SEOHead
        title={guide.title}
        description={guide.subtitle || `Guía de compra y análisis técnico: ${guide.title}. Criterio editorial independiente The Coffee Score.`}
        canonical={`/guia/${guide.slug}`}
        image={guide.image}
        type="article"
        jsonLd={[
          generateBreadcrumbSchema([
            { name: 'Inicio', url: '/' },
            { name: 'Guías de Compra', url: '/guias' },
            { name: guide.title, url: `/guia/${guide.slug}` },
          ]),
        ]}
      />
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Inicio</Link>
        <span className="sep">/</span>
        <Link to="/guias">Guías de Compra</Link>
        <span className="sep">/</span>
        <span className="current">{guide.title}</span>
      </div>

      {/* Hero Article Header */}
      <header className="wrap py-8 sm:py-12 border-b border-[#e6e3da]">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#f4f2ec] text-stone-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {guide.category}
            </span>
            <span className="text-xs text-stone-500 font-medium">
              {guide.readTime} · Publicado el {guide.publishedAt || '2026-08-20'}
            </span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight mb-4">
            {guide.title}
          </h1>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            {guide.subtitle}
          </p>
        </div>
      </header>

      {/* Main Article Content & Sidebar */}
      <div className="wrap py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Article Column */}
          <article className="lg:col-span-8 space-y-8 text-stone-800 leading-relaxed text-sm sm:text-base">
            {/* Featured Image */}
            <div className="w-full bg-[#fbfaf7] border border-[#e6e3da] rounded-2xl p-6 sm:p-10 flex items-center justify-center overflow-hidden">
              <img
                src={guide.image}
                alt={guide.title}
                className="max-h-72 w-auto object-contain drop-shadow-md"
              />
            </div>

            {/* Guide Content */}
            {guide.content ? (
              <div
                className="prose max-w-none space-y-6 text-stone-700 leading-relaxed font-sans"
                dangerouslySetInnerHTML={{ __html: guide.content }}
              />
            ) : (
              <div className="space-y-6">
                <section>
                  <h2 className="font-serif font-bold text-2xl text-ink mb-3">1. Fundamentos y criterios técnicos de elección</h2>
                  <p className="mb-4">
                    Cuando nos adentramos en el mundo del café de especialidad, la inversión en equipamiento suele estar plagada de reclamos de marketing que no se traducen en calidad en taza. En The Coffee Score analizamos cada componente basándonos en variables físicas y termodinámicas medibles: estabilidad de temperatura (PID), tolerancia granulométrica de las muelas, presión regulada a 9 bar mediante válvula de sobrepresión (OPV) y ergonomía de uso diario.
                  </p>
                  <p>
                    Comprar el equipo adecuado desde el primer momento evita el ciclo común de adquirir una cafetera de gama baja que genera canalizaciones constantes y obliga a una renovación temprana a los pocos meses.
                  </p>
                </section>

                <section className="bg-[#f8f6f0] border border-[#e6e3da] p-6 rounded-2xl">
                  <h3 className="font-serif font-bold text-lg text-ink mb-2">Claves imprescindibles a tener en cuenta:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-stone-700 text-xs sm:text-sm">
                    <li><strong>Molienda uniforme:</strong> Un molino con muelas de acero calibradas aporta más claridad y extracción que cualquier cafetera de alta gama con café premolido.</li>
                    <li><strong>Diámetro de portafiltro:</strong> Los formatos de 58 mm estándar comercial ofrecen la mayor compatibilidad de cestas de precisión (IMS / VST), niveladores y filtros puck screen.</li>
                    <li><strong>Control de temperatura constante:</strong> Las calderas o bloques térmicos con controlador PID eliminan fluctuaciones térmicas durante la extracción de microlotes con tueste claro o medio.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif font-bold text-2xl text-ink mb-3">2. Recomendaciones contrastadas por nuestro laboratorio</h2>
                  <p className="mb-4">
                    Hemos evaluado decenas de combinaciones en banco de pruebas. A continuación se detallan los productos con mejor equilibrio en relación calidad/precio actualmente disponibles:
                  </p>
                </section>
              </div>
            )}

            {/* In-Article Recommendation Grid */}
            <div className="border-t border-[#e6e3da] pt-8">
              <h3 className="font-serif font-bold text-xl text-ink mb-4">Productos recomendados en este análisis</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relevantProducts.map((p) => (
                  <div key={p.id} className="bg-white border border-[#e6e3da] hover:border-stone-400 rounded-xl p-4 flex gap-3.5 items-center transition-all">
                    <div className="w-16 h-16 bg-[#fbfaf7] border border-[#f0eee6] rounded-lg p-1.5 shrink-0 flex items-center justify-center overflow-hidden">
                      <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-bold text-[#e94e2b] uppercase">{p.brand}</div>
                      <Link to={`/producto/${p.slug}`} className="font-bold text-xs sm:text-sm text-ink truncate block hover:text-[#2f6fed]">
                        {p.name}
                      </Link>
                      <div className="flex items-center justify-between mt-1">
                        <span className="font-extrabold text-sm text-ink font-mono">{p.price} €</span>
                        <Link to={`/producto/${p.slug}`} className="text-xs font-bold text-[#2f6fed] hover:underline">
                          Ver análisis →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Setup Configurator CTA */}
            <div className="bg-gradient-to-r from-[#21201c] to-[#2c2924] rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md mt-10">
              <div>
                <h3 className="font-serif font-bold text-xl mb-1 text-white">¿Quieres armar tu estación de café a medida?</h3>
                <p className="text-stone-300 text-xs sm:text-sm">
                  Utiliza nuestro Configurador de Setup para verificar compatibilidades, evitar cuellos de botella y calcular el presupuesto exacto.
                </p>
              </div>
              <Link to="/configurador" className="btn btn-solid !bg-[#e94e2b] hover:!bg-[#d43d1a] !border-none !text-white font-bold text-xs !py-3 !px-6 rounded-xl shrink-0">
                Abrir Configurador →
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Author Box */}
            <div className="bg-[#fcfbf9] border border-[#e6e3da] rounded-2xl p-5">
              <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-3">Equipo Editorial</div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-stone-200 border border-stone-300 flex items-center justify-center font-bold text-xs text-stone-700">
                  TCS
                </div>
                <div>
                  <div className="font-bold text-sm text-ink">Laboratorio The Coffee Score</div>
                  <div className="text-xs text-stone-500">Baristas certificados SCA</div>
                </div>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Todas nuestras guías están contrastadas con refractometría de extracción (TDS), pruebas sensoriales a ciegas y medición instrumental independiente.
              </p>
            </div>

            {/* More Guides */}
            <div className="bg-white border border-[#e6e3da] rounded-2xl p-5">
              <h4 className="font-serif font-bold text-base text-ink mb-4 pb-2 border-b border-[#e6e3da]">
                Otras guías recomendadas
              </h4>
              <div className="space-y-4">
                {relatedGuides.map((rg) => (
                  <Link key={rg.id} to={`/guia/${rg.slug}`} className="group block space-y-1">
                    <div className="text-[10px] font-bold text-stone-400 uppercase">{rg.category}</div>
                    <h5 className="font-bold text-xs sm:text-sm text-ink group-hover:text-[#2f6fed] transition-colors leading-snug">
                      {rg.title}
                    </h5>
                    <div className="text-[11px] text-stone-500">{rg.readTime}</div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
