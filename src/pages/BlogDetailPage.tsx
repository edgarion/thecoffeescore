import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_ARTICLES } from '../data/blogArticles';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = BLOG_ARTICLES.find((a) => a.slug === slug || a.id === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  // Related articles from other categories
  const relatedArticles = BLOG_ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="pb-24">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Inicio</Link>
        <span className="sep">/</span>
        <Link to="/blog">Blog & Artículos</Link>
        <span className="sep">/</span>
        <span className="current">{article.title}</span>
      </div>

      {/* Main Editorial Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        {/* Header Metadata */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="bg-[#fdece7] text-[#e94e2b] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider font-mono">
              {article.category}
            </span>
            <span className="text-xs text-[#6b6a63] font-medium">
              {article.publishDate} · {article.readTime}
            </span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.15] tracking-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-xl text-[#6b6a63] leading-relaxed font-serif italic pt-1">
            &ldquo;{article.excerpt}&rdquo;
          </p>

          {/* Author and Source Line */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#e6e3da]">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#f4f2ec] border border-[#e6e3da] flex items-center justify-center font-bold text-xs text-stone-800 shrink-0">
                {article.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div>
                <div className="font-bold text-sm text-ink">{article.author}</div>
                <div className="text-xs text-[#e94e2b] font-medium">{article.authorRole}</div>
              </div>
            </div>

            <div className="text-xs text-[#6b6a63] flex items-center gap-1.5 bg-[#fbfaf7] border border-[#e6e3da] px-3.5 py-1.5 rounded-full">
              <span>Publicado en:</span>
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-ink hover:text-[#2f6fed] underline inline-flex items-center gap-1"
              >
                <span>{article.source}</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Hero Real Image - Full width without obstructions */}
        <div className="w-full h-72 sm:h-96 md:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-[#e6e3da] mb-10 bg-stone-100">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Full Article Content */}
        <div
          className="prose prose-stone max-w-none text-stone-800 leading-relaxed text-sm sm:text-base sm:leading-8 space-y-6 font-sans border-b border-[#e6e3da] pb-10 mb-10"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <span className="text-xs font-bold text-stone-400 uppercase tracking-wider mr-1">Temas del artículo:</span>
          {article.tags.map((tag, idx) => (
            <span key={idx} className="bg-[#f4f2ec] text-stone-700 text-xs font-semibold px-3 py-1 rounded-full border border-[#e6e3da]">
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio & Citation Card */}
        <div className="bg-[#fbfaf7] border border-[#e6e3da] rounded-2xl p-6 sm:p-8 space-y-4 mb-16 shadow-2xs">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-white border border-[#e6e3da] flex items-center justify-center font-bold text-base text-stone-800 shrink-0 shadow-2xs">
              {article.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
            <div className="space-y-1">
              <div className="text-xs text-stone-400 uppercase font-bold tracking-wider">Acerca del autor</div>
              <h3 className="font-serif font-bold text-lg text-ink">{article.author}</h3>
              <p className="text-xs text-[#e94e2b] font-semibold">{article.authorRole}</p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">
                Este artículo ha sido recopilado y adaptado como parte del radar editorial técnico de The Coffee Score. Publicación original disponible en <strong>{article.source}</strong>.
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-[#e6e3da] flex flex-wrap items-center justify-between gap-3">
            <a
              href={article.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline !text-xs !py-2 !px-4 !rounded-xl bg-white hover:bg-stone-50 font-bold inline-flex items-center gap-1.5"
            >
              <span>Leer artículo original en {article.source}</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <Link
              to="/blog"
              className="text-xs font-bold text-[#2f6fed] hover:underline"
            >
              ← Volver a todos los artículos
            </Link>
          </div>
        </div>

        {/* Bottom Related Articles Section */}
        <section className="pt-6 border-t border-[#e6e3da]">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-bold text-[#e94e2b] uppercase tracking-wider font-mono">Lecturas recomendadas</div>
              <h2 className="font-serif font-bold text-2xl text-ink">Más artículos del Radar Editorial</h2>
            </div>
            <Link to="/blog" className="text-xs font-bold text-ink hover:text-[#2f6fed]">
              Ver blog completo →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((ra) => (
              <Link
                key={ra.id}
                to={`/blog/${ra.slug}`}
                className="bg-white border border-[#e6e3da] hover:border-stone-400 rounded-2xl p-4 flex flex-col justify-between transition-all group shadow-2xs hover:shadow-md"
              >
                <div>
                  <div className="w-full h-36 rounded-xl overflow-hidden mb-3 bg-stone-100">
                    <img
                      src={ra.imageUrl}
                      alt={ra.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-[10px] font-bold text-[#e94e2b] uppercase font-mono mb-1">{ra.category}</div>
                  <h3 className="font-serif font-bold text-sm sm:text-base text-ink group-hover:text-[#2f6fed] transition-colors leading-snug line-clamp-2 mb-2">
                    {ra.title}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {ra.excerpt}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#e6e3da] flex items-center justify-between text-xs text-stone-500 mt-4">
                  <span className="truncate max-w-[140px]">{ra.author}</span>
                  <span className="font-bold text-ink group-hover:text-[#2f6fed]">Leer →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};
