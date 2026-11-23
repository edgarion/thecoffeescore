import React, { useState } from 'react';
import { useSearch } from '../../hooks/useSearch';
import { Link } from 'react-router-dom';
import { ScoreBadge } from '../ui/ScoreBadge';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function formatRelativeTime(timestamp: number): string {
  const diffSec = Math.floor((Date.now() - timestamp) / 1000);
  if (diffSec < 60) return 'Hace un momento';
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `Hace ${diffMin} min`;
  const diffHours = Math.floor(diffMin / 60);
  if (diffHours < 24) return `Hace ${diffHours} h`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays === 1) return 'Ayer';
  if (diffDays < 7) return `Hace ${diffDays} días`;
  return new Date(timestamp).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const {
    query,
    setQuery,
    results,
    hasResults,
    totalResultsCount,
    history,
    addToHistory,
    removeFromHistory,
    clearHistory,
    popularSuggestions,
  } = useSearch();

  const [activeTab, setActiveTab] = useState<'all' | 'products' | 'guides' | 'roasters'>('all');

  if (!isOpen) return null;

  const handleSelectQuery = (term: string) => {
    setQuery(term);
    addToHistory(term);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query.trim()) {
      addToHistory(query.trim(), totalResultsCount);
    }
  };

  const handleItemClick = () => {
    if (query.trim()) {
      addToHistory(query.trim(), totalResultsCount);
    }
    onClose();
  };

  const isQueryEmpty = !query.trim();

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 p-3 sm:p-4 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-stone-200 shadow-2xl p-4 sm:p-6 z-10 max-h-[85vh] flex flex-col overflow-hidden">
        
        {/* Search Header Bar (Google Search Control style) */}
        <div className="flex items-center gap-2.5 sm:gap-3 border-b border-stone-200 pb-3 mb-3">
          {/* Magnifying Glass Icon */}
          <div className="text-stone-400 pl-1 shrink-0">
            <svg className="w-5 h-5 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Buscar por marca, modelo, café o guía (ej. Sage Bambino, Eureka)..."
            className="w-full text-sm sm:text-base font-sans outline-none bg-transparent placeholder:text-stone-400 text-ink"
            autoFocus
          />

          {/* Clear text button */}
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-stone-400 hover:text-stone-700 p-1 text-xs font-bold transition-colors"
              title="Borrar texto"
            >
              ✕
            </button>
          )}

          {/* Close button */}
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-700 font-bold text-xs transition-colors shrink-0"
            aria-label="Cerrar búsqueda"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto space-y-5 pr-1 text-ink">
          
          {/* CASE 1: Query is empty -> SHOW HISTORIAL ANTIGUO & SUGERENCIAS */}
          {isQueryEmpty ? (
            <div className="space-y-5">
              
              {/* HISTORIAL ANTIGUO DE BÚSQUEDAS */}
              {history.length > 0 && (
                <div className="bg-[#fbfaf7] border border-[#ece8de] rounded-xl p-3.5 sm:p-4">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#ece8de]">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-ink uppercase tracking-wider font-mono">
                      <svg className="w-4 h-4 text-[#e94e2b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Historial de búsquedas recientes y antiguas ({history.length})</span>
                    </div>

                    <button
                      onClick={clearHistory}
                      className="text-[11px] font-semibold text-stone-500 hover:text-[#e94e2b] transition-colors flex items-center gap-1"
                      title="Eliminar todo el historial"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      <span>Borrar historial</span>
                    </button>
                  </div>

                  <div className="divide-y divide-[#ece8de]/60">
                    {history.map((item) => (
                      <div
                        key={item.id}
                        className="group flex items-center justify-between py-2 px-1 hover:bg-stone-200/40 rounded-lg transition-colors cursor-pointer"
                        onClick={() => handleSelectQuery(item.query)}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <svg className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#2f6fed] transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-xs sm:text-sm font-medium text-stone-800 group-hover:text-ink truncate">
                            {item.query}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-[10px] text-stone-400 font-mono">
                            {formatRelativeTime(item.timestamp)}
                          </span>

                          {/* Delete single item */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFromHistory(item.id);
                            }}
                            className="w-5 h-5 rounded-full hover:bg-stone-300/60 flex items-center justify-center text-stone-400 hover:text-stone-700 transition-colors text-xs"
                            title="Quitar del historial"
                            aria-label={`Quitar "${item.query}" del historial`}
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* POPULAR SUGGESTIONS CHIPS */}
              <div>
                <h4 className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Búsquedas Populares Recomendadas</span>
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {popularSuggestions.map((sug) => (
                    <button
                      key={sug}
                      onClick={() => handleSelectQuery(sug)}
                      className="px-2.5 py-1 text-xs rounded-full bg-stone-100 hover:bg-[#eef4ff] text-stone-700 hover:text-[#2f6fed] border border-stone-200 hover:border-[#2f6fed]/30 transition-all font-medium"
                    >
                      {sug}
                    </button>
                  ))}
                </div>
              </div>

              {/* DESTACADOS INICIALES */}
              <div>
                <h4 className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-2 font-mono">
                  Destacados del Laboratorio
                </h4>
                <div className="space-y-1.5">
                  {results.products.slice(0, 3).map((p) => (
                    <Link
                      key={p.id}
                      to={`/producto/${p.slug}`}
                      onClick={handleItemClick}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-stone-50 transition-colors group border border-stone-100"
                    >
                      <div className="w-10 h-10 bg-[#fbfaf7] rounded-lg flex items-center justify-center p-1 shrink-0 border border-stone-200/60">
                        <img src={p.image} alt={p.name} className="max-h-full object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-ink text-xs sm:text-sm group-hover:text-[#2f6fed] transition-colors truncate">
                          {p.brand} {p.name}
                        </div>
                        <div className="text-[11px] text-stone-500 font-mono">
                          {p.price} € · <span className="capitalize">{p.category}</span>
                        </div>
                      </div>
                      <ScoreBadge score={p.score} size="sm" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* CASE 2: Query has text -> SHOW RESULTS */
            <div>
              {!hasResults ? (
                <div className="text-center py-10 text-stone-500 text-sm">
                  <p className="font-serif text-lg text-ink mb-1">Sin resultados para "{query}"</p>
                  <p className="text-xs">Prueba con "Sage", "Eureka", "Molinillo", "Espresso" o un tostador.</p>
                </div>
              ) : (
                <div className="space-y-5">
                  {/* Category Filter Pills */}
                  <div className="flex gap-1.5 border-b border-stone-100 pb-2">
                    <button
                      onClick={() => setActiveTab('all')}
                      className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                        activeTab === 'all' ? 'bg-ink text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                      }`}
                    >
                      Todos ({totalResultsCount})
                    </button>
                    {results.products.length > 0 && (
                      <button
                        onClick={() => setActiveTab('products')}
                        className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                          activeTab === 'products' ? 'bg-ink text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                        }`}
                      >
                        Productos ({results.products.length})
                      </button>
                    )}
                    {results.guides.length > 0 && (
                      <button
                        onClick={() => setActiveTab('guides')}
                        className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                          activeTab === 'guides' ? 'bg-ink text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                        }`}
                      >
                        Guías ({results.guides.length})
                      </button>
                    )}
                    {results.roasters.length > 0 && (
                      <button
                        onClick={() => setActiveTab('roasters')}
                        className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                          activeTab === 'roasters' ? 'bg-ink text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                        }`}
                      >
                        Tostadores ({results.roasters.length})
                      </button>
                    )}
                  </div>

                  {/* Products */}
                  {(activeTab === 'all' || activeTab === 'products') && results.products.length > 0 && (
                    <div>
                      <h4 className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-2 font-mono">
                        Productos ({results.products.length})
                      </h4>
                      <div className="space-y-1.5">
                        {results.products.map((p) => (
                          <Link
                            key={p.id}
                            to={`/producto/${p.slug}`}
                            onClick={handleItemClick}
                            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-stone-50 transition-colors group border border-stone-100"
                          >
                            <div className="w-11 h-11 bg-[#fbfaf7] rounded-lg flex items-center justify-center p-1 shrink-0 border border-stone-200/60">
                              <img src={p.image} alt={p.name} className="max-h-full object-contain" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-bold text-ink text-sm group-hover:text-[#2f6fed] transition-colors truncate">
                                {p.brand} {p.name}
                              </div>
                              <div className="text-xs text-stone-500">
                                <span className="font-mono font-bold text-ink">{p.price} €</span> · {p.badge || p.category}
                              </div>
                            </div>
                            <ScoreBadge score={p.score} size="sm" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Guides */}
                  {(activeTab === 'all' || activeTab === 'guides') && results.guides.length > 0 && (
                    <div>
                      <h4 className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-2 font-mono">
                        Guías & Análisis ({results.guides.length})
                      </h4>
                      <div className="space-y-1.5">
                        {results.guides.map((g) => (
                          <Link
                            key={g.id}
                            to="/guias"
                            onClick={handleItemClick}
                            className="flex items-center justify-between p-2.5 rounded-xl hover:bg-stone-50 transition-colors group border border-stone-100"
                          >
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-ink text-sm group-hover:text-[#2f6fed] transition-colors truncate">
                                {g.title}
                              </div>
                              <div className="text-xs text-stone-500">{g.category} · {g.readTime} lectura</div>
                            </div>
                            <span className="text-xs text-stone-400 group-hover:text-ink font-semibold">Leer →</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Roasters */}
                  {(activeTab === 'all' || activeTab === 'roasters') && results.roasters.length > 0 && (
                    <div>
                      <h4 className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-2 font-mono">
                        Tostadores de Barcelona ({results.roasters.length})
                      </h4>
                      <div className="space-y-1.5">
                        {results.roasters.map((r) => (
                          <Link
                            key={r.name}
                            to="/cafe"
                            onClick={handleItemClick}
                            className="flex items-center justify-between p-2.5 rounded-xl hover:bg-stone-50 transition-colors group border border-stone-100"
                          >
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-ink text-sm group-hover:text-[#2f6fed] transition-colors">
                                {r.name} ({r.district})
                              </div>
                              <div className="text-xs text-stone-500">
                                Precio medio: <span className="font-mono font-bold text-ink">{r.priceKg} €/kg</span> · Score: {r.score}
                              </div>
                            </div>
                            <span className="text-xs text-[#2f6fed] font-semibold">Ver índice →</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

        </div>

        {/* Footer tip */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
          <span>Pulsa <kbd className="bg-stone-100 px-1 py-0.5 rounded border border-stone-200 font-mono text-[10px]">Enter</kbd> para guardar en historial</span>
          <span><kbd className="bg-stone-100 px-1 py-0.5 rounded border border-stone-200 font-mono text-[10px]">Esc</kbd> para cerrar</span>
        </div>

      </div>
    </div>
  );
};
