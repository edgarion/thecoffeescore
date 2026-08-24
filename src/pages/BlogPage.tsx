import React, { useState } from 'react';
import { ExternalLink, Clock, BookOpen, Tag } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/blogArticles';

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
    <div className="py-8 sm:py-12">
      <div className="wrap space-y-8">
        {/* Page Header */}
        <div className="border-b border-[#e6e3da] pb-8">
          <div className="inline-flex items-center gap-1.5 bg-[#eef4ff] text-[#2f6fed] text-xs font-bold px-3 py-1 rounded-full mb-3">
            <BookOpen size={13} />
            <span>RADAR EDITORIAL & ARTÍCULOS</span>
          </div>
          <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight mb-4">
            El Blog del Café de Especialidad
          </h1>
          <p className="text-sm sm:text-base text-[#6b6a63] max-w-2xl leading-relaxed">
            Curaduría diaria de los mejores análisis técnicos, innovaciones en fermentación de origen, comparativas de equipamiento y cultura barista mundial.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-ink text-white shadow-sm font-bold'
                    : 'bg-white border border-[#e6e3da] text-[#333] hover:border-stone-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[220px]">
            <input
              type="text"
              placeholder="Buscar artículos…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#e6e3da] rounded-full px-4 py-1.5 text-xs text-ink placeholder:text-[#6b6a63] outline-none focus:border-ink"
            />
          </div>
        </div>

        {/* Featured Articles (Top Grid) */}
        {featured.length > 0 && selectedCategory === 'Todas' && !searchQuery && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featured.map((article) => (
              <article
                key={article.id}
                className="bg-white border border-[#e6e3da] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="bg-[#fdece7] text-[#e94e2b] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                      {article.category.toUpperCase()}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-[#6b6a63]">
                      <Clock size={12} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h2 className="font-serif font-bold text-xl sm:text-2xl text-ink group-hover:text-[#2f6fed] transition-colors leading-tight mb-3">
                    <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer">
                      {article.title}
                    </a>
                  </h2>

                  <p className="text-xs sm:text-sm text-[#6b6a63] leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e6e3da] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-[#333]">
                    <span className="font-semibold">{article.source}</span>
                    <span>·</span>
                    <span className="text-[#6b6a63]">{article.author}</span>
                  </div>

                  <a
                    href={article.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-ink group-hover:text-[#2f6fed] transition-colors"
                  >
                    <span>Leer artículo</span>
                    <ExternalLink size={13} />
                  </a>
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
              className="bg-white border border-[#e6e3da] rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="bg-[#f4f2ec] text-[#6b6a63] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-[11px] text-[#6b6a63]">{article.publishDate}</span>
                </div>

                <h3 className="font-serif font-bold text-base sm:text-lg text-ink group-hover:text-[#2f6fed] transition-colors leading-tight mb-2.5">
                  <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                </h3>

                <p className="text-xs text-[#6b6a63] leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {article.tags.slice(0, 2).map((t, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-[10px] bg-[#fbfaf7] border border-[#e6e3da] px-2 py-0.5 rounded-md text-[#6b6a63]"
                    >
                      <Tag size={10} />
                      <span>{t}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#e6e3da] flex items-center justify-between mt-auto">
                <span className="text-[11px] font-medium text-[#6b6a63] truncate max-w-[150px]">
                  {article.source}
                </span>
                <a
                  href={article.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-ink hover:text-[#2f6fed] transition-colors"
                >
                  <span>Leer</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
