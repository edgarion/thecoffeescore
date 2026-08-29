import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_ARTICLES } from '../data/blogArticles';
import { SEOHead } from '../components/seo/SEOHead';
import { generateBreadcrumbSchema } from '../utils/seoSchemas';

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['Todas', 'Tecnica', 'Origen', 'Equipamiento', 'Tueste', 'Cultura'];

  const filteredArticles = BLOG_ARTICLES.filter(article => {
    const matchesCat = selectedCategory === 'Todas' || article.category === selectedCategory;
    const matchesSearch = !searchQuery ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const featured = filteredArticles.filter(a => a.featured);
  const regular = filteredArticles.filter(a => !a.featured);

  return (
    <div className="pb-16">
      <SEOHead
        title="Blog del Café de Especialidad — Análisis y Noticias"
        description="Curaduría diaria de análisis técnicos de espresso, innovaciones en fermentación de origen, comparativas de equipamiento y cultura barista mundial."
        canonical="/blog"
        jsonLd={[
          generateBreadcrumbSchema([
            { name: 'Inicio', url: '/' },
            { name: 'Blog & Artículos', url: '/blog' },
          ]),
        ]}
      />
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Inicio</Link>
        <span className="sep">/</span>
        <span className="current">Blog & Artículos</span>
      </div>

      {/* Page Header */}
      <div className="page-head">
        <div className="page-eyebrow">
          Radar Editorial & Artículos
        </div>
        <h1 className="page-title">El Blog del Café de Especialidad</h1>
        <p className="page-sub">
          Curaduría diaria de los mejores análisis técnicos, innovaciones en fermentación de origen, comparativas de equipamiento y cultura barista mundial.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`filter-chip ${selectedCategory === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}

        <div className="filter-spacer" />

        {/* Search Box in Filter Bar */}
        <div className="relative min-w-[200px] sm:min-w-[240px]">
          <input
            type="text"
            placeholder="Buscar artículos…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-[#e6e3da] focus:border-ink rounded-full px-3.5 py-1.5 text-xs text-ink outline-none transition-colors"
          />
        </div>
      </div>

      <div className="wrap py-8 space-y-8">
        {/* Featured Articles (Top Grid) */}
        {featured.length > 0 && selectedCategory === 'Todas' && !searchQuery && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featured.map((article) => (
              <article
                key={article.id}
                className="bg-white border border-[#e6e3da] hover:border-stone-400 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all group"
              >
                <div>
                  {/* Photo */}
                  <div className="w-full h-56 bg-stone-100 rounded-xl mb-4 overflow-hidden">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="bg-[#fdece7] text-[#e94e2b] text-[10px] font-bold px-2.5 py-0.5 rounded-full font-mono">
                      {article.category.toUpperCase()}
                    </span>
                    <span className="text-[11px] text-stone-500">
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif font-bold text-xl sm:text-2xl text-ink group-hover:text-[#2f6fed] transition-colors leading-tight mb-3">
                    <Link to={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e6e3da] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-stone-700">
                    <span className="font-semibold text-ink">{article.author}</span>
                    <span>·</span>
                    <span className="text-stone-500">{article.source}</span>
                  </div>

                  <Link
                    to={`/blog/${article.slug}`}
                    className="font-bold text-ink group-hover:text-[#2f6fed] transition-colors flex items-center gap-1"
                  >
                    <span>Leer artículo →</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(selectedCategory !== 'Todas' || searchQuery ? filteredArticles : regular).map((article) => (
            <article
              key={article.id}
              className="bg-white border border-[#e6e3da] hover:border-stone-400 rounded-2xl p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all group"
            >
              <div>
                {/* Photo */}
                <div className="w-full h-44 bg-stone-100 rounded-xl mb-4 overflow-hidden">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="bg-[#f4f2ec] text-stone-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full font-mono">
                    {article.category}
                  </span>
                  <span className="text-[11px] text-stone-500">{article.publishDate}</span>
                </div>

                <h3 className="font-serif font-bold text-base sm:text-lg text-ink group-hover:text-[#2f6fed] transition-colors leading-snug mb-2.5">
                  <Link to={`/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {article.tags.slice(0, 2).map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-[#fbfaf7] border border-[#e6e3da] px-2 py-0.5 rounded-md text-stone-600 font-medium"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#e6e3da] flex items-center justify-between mt-auto text-xs">
                <span className="text-[11px] font-medium text-stone-500 truncate max-w-[150px]">
                  {article.author} · {article.source}
                </span>
                <Link
                  to={`/blog/${article.slug}`}
                  className="font-bold text-ink group-hover:text-[#2f6fed] transition-colors"
                >
                  Leer →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
