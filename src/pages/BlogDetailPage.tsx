import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_ARTICLES } from '../data/blogArticles';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = BLOG_ARTICLES.find((a) => a.slug === slug || a.id === slug);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  // Related articles from same or similar category
  const relatedArticles = BLOG_ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="pb-20">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Inicio</Link>
        <span className="sep">/</span>
        <Link to="/blog">Blog & Artículos</Link>
        <span className="sep">/</span>
        <span className="current">{article.title}</span>
      </div>

      {/* Hero Article Header */}
      <header className="wrap py-8 sm:py-12 border-b border-[#e6e3da]">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="bg-[#fdece7] text-[#e94e2b] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider font-mono">
              {article.category}
            </span>
            <span className="text-xs text-stone-500 font-medium">
              {article.publishDate} · {article.readTime}
            </span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight mb-4">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-6">
            {article.excerpt}
          </p>

          {/* Author & Source Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#e6e3da]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#f4f2ec] border border-[#e6e3da] flex items-center justify-center font-bold text-xs text-stone-700">
                {article.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div>
                <div className="font-bold text-sm text-ink">{article.author}</div>
                <div className="text-xs text-stone-500">{article.authorRole}</div>
              </div>
            </div>

            <div className="text-xs text-stone-500 flex items-center gap-1.5">
              <span>Fuente original:</span>
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-ink hover:text-[#2f6fed] underline flex items-center gap-1"
              >
                <span>{article.source}</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Article Body */}
      <div className="wrap py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Article Column */}
          <article className="lg:col-span-8 space-y-8 text-stone-800 leading-relaxed text-sm sm:text-base">
            {/* Featured Image */}
            <div className="w-full bg-[#fbfaf7] border border-[#e6e3da] rounded-2xl p-6 sm:p-10 flex items-center justify-center overflow-hidden">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="max-h-80 w-auto object-contain drop-shadow-md"
              />
            </div>

            {/* Content Body */}
            <div
              className="prose max-w-none space-y-6 text-stone-700 leading-relaxed font-sans"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            <div className="pt-6 border-t border-[#e6e3da] flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider mr-1">Temas:</span>
              {article.tags.map((tag, idx) => (
                <span key={idx} className="bg-[#f4f2ec] text-stone-700 text-xs font-semibold px-3 py-1 rounded-full border border-[#e6e3da]">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Source Attribution Box */}
            <div className="bg-[#fcfbf9] border border-[#e6e3da] p-5 rounded-2xl text-xs text-stone-600 space-y-2">
              <div className="font-bold text-ink text-sm">Cita Editorial & Acreditación</div>
              <p>
                Este artículo forma parte del Radar Editorial de The Coffee Score. El análisis original ha sido elaborado por <strong>{article.author}</strong> ({article.authorRole}) y publicado en <strong>{article.source}</strong>.
              </p>
              <div>
                <a
                  href={article.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline !text-xs !py-2 !px-4 !rounded-xl bg-white hover:bg-stone-50 font-bold inline-flex items-center gap-1.5"
                >
                  <span>Visitar publicación original en {article.source}</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Author Box */}
            <div className="bg-white border border-[#e6e3da] rounded-2xl p-5 shadow-2xs">
              <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-3">Sobre el Autor</div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-[#f4f2ec] border border-[#e6e3da] flex items-center justify-center font-bold text-sm text-stone-800">
                  {article.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <div className="font-bold text-base text-ink">{article.author}</div>
                  <div className="text-xs text-[#e94e2b] font-semibold">{article.authorRole}</div>
                </div>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Referente internacional en la investigación sensorial, física de extracción y cultura de café de especialidad.
              </p>
            </div>

            {/* Related Articles */}
            <div className="bg-white border border-[#e6e3da] rounded-2xl p-5 shadow-2xs">
              <h4 className="font-serif font-bold text-base text-ink mb-4 pb-2 border-b border-[#e6e3da]">
                Artículos relacionados
              </h4>
              <div className="space-y-4">
                {relatedArticles.map((ra) => (
                  <Link key={ra.id} to={`/blog/${ra.slug}`} className="group block space-y-1">
                    <div className="text-[10px] font-bold text-[#e94e2b] uppercase font-mono">{ra.category}</div>
                    <h5 className="font-bold text-xs sm:text-sm text-ink group-hover:text-[#2f6fed] transition-colors leading-snug">
                      {ra.title}
                    </h5>
                    <div className="text-[11px] text-stone-500">{ra.author} · {ra.readTime}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Setup Configurator Box */}
            <div className="bg-gradient-to-br from-[#21201c] to-[#2c2924] text-white p-5 rounded-2xl shadow-md space-y-3">
              <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Herramienta Interactiva</div>
              <h4 className="font-serif font-bold text-lg text-white leading-tight">Configura tu estación de café</h4>
              <p className="text-stone-300 text-xs leading-relaxed">
                Aplica la teoría de extracción con el equipo exacto. Diseña y calcula tu setup en tiempo real.
              </p>
              <Link to="/configurador" className="btn btn-solid !bg-[#e94e2b] hover:!bg-[#d43d1a] !border-none !text-white font-bold text-xs !py-2.5 w-full justify-center rounded-xl">
                Abrir Configurador →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
