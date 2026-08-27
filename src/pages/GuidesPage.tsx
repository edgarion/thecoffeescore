import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BUYING_GUIDES } from '../data/catalog';

export const GuidesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todas');

  const categories = ['Todas', 'Espresso', 'Molinos', 'Accesorios', 'Café'];

  const filteredGuides = BUYING_GUIDES.filter(guide => {
    if (activeCategory === 'Todas') return true;
    return guide.category.toLowerCase().includes(activeCategory.toLowerCase());
  });

  return (
    <div className="pb-16">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Inicio</Link>
        <span className="sep">/</span>
        <span className="current">Guías de Compra</span>
      </div>

      {/* Page Header */}
      <div className="page-head">
        <div className="page-eyebrow">
          Criterio Editorial & Pruebas Reales
        </div>
        <h1 className="page-title">Guías de compra y análisis técnico</h1>
        <p className="page-sub">
          Artículos en profundidad redactados por expertos en café de especialidad y tecnología de extracción para guiar tu inversión según tu presupuesto real.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Guides Grid */}
      <div className="wrap py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map((guide) => (
            <article
              key={guide.id}
              className="bg-white border border-[#e6e3da] hover:border-stone-400 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all group"
            >
              <div>
                {/* Photo */}
                <div className="w-full h-44 bg-[#fbfaf7] border border-[#f0eee6] rounded-xl mb-4 flex items-center justify-center p-4 overflow-hidden group-hover:bg-[#f5f2e9] transition-colors">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="max-h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                  />
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="bg-[#f4f2ec] text-stone-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    {guide.category}
                  </span>
                  <span className="text-[11px] text-stone-500">
                    <span>{guide.readTime}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif font-bold text-lg text-ink group-hover:text-[#2f6fed] transition-colors leading-snug mb-2">
                  {guide.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {guide.subtitle}
                </p>
              </div>

              {/* Bottom Action */}
              <div className="pt-3 border-t border-[#e6e3da] flex items-center justify-between">
                <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                  Guía completa
                </span>
                <span className="text-xs font-bold text-ink group-hover:text-[#2f6fed] transition-colors">
                  Leer guía →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
