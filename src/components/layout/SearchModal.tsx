import React from 'react';
import { useSearch } from '../../hooks/useSearch';
import { Link } from 'react-router-dom';
import { ScoreBadge } from '../ui/ScoreBadge';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const { query, setQuery, results, hasResults } = useSearch();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4">
      <div className="fixed inset-0 bg-ink/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white rounded-editorial border border-stone-200 shadow-2xl p-6 z-10 max-h-[80vh] flex flex-col">
        <div className="flex items-center gap-3 border-b border-stone-200 pb-3.5 mb-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Escribe el nombre de la máquina, molino, marca (Sage, Eureka, Anna) o categoría..."
            className="w-full text-base font-sans outline-none bg-transparent placeholder:text-ink-muted/60"
            autoFocus
          />
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-paper-secondary flex items-center justify-center text-ink font-bold text-xs hover:bg-stone-200"
            aria-label="Cerrar búsqueda"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-6 pr-1">
          {!hasResults ? (
            <div className="text-center py-10 text-ink-muted text-sm">
              <p className="font-serif text-lg text-ink mb-1">Sin resultados para "{query}"</p>
              <p>Prueba con "Sage Bambino", "Molinillo", "Filtro" o "Barcelona".</p>
            </div>
          ) : (
            <>
              {results.products.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold text-ink-muted uppercase tracking-wider mb-2 font-mono">
                    Productos ({results.products.length})
                  </h4>
                  <div className="space-y-1.5">
                    {results.products.map(p => (
                      <Link
                        key={p.id}
                        to={`/producto/${p.slug}`}
                        onClick={onClose}
                        className="flex items-center gap-3 p-2.5 rounded-editorial hover:bg-paper-secondary transition-colors group"
                      >
                        <div className="w-11 h-11 bg-paper-secondary rounded-editorial flex items-center justify-center p-1 shrink-0 border border-stone-200/50">
                          <img src={p.image} alt={p.name} className="max-h-full object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-ink text-sm group-hover:text-editorial-blue transition-colors truncate">
                            {p.name}
                          </div>
                          <div className="text-xs text-ink-muted">
                            {p.brand} · <span className="font-mono">{p.price} €</span> · {p.badge || p.category}
                          </div>
                        </div>
                        <ScoreBadge score={p.score} size="sm" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {results.guides.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold text-ink-muted uppercase tracking-wider mb-2 font-mono">
                    Guías & Análisis ({results.guides.length})
                  </h4>
                  <div className="space-y-1.5">
                    {results.guides.map(g => (
                      <Link
                        key={g.id}
                        to="/guias"
                        onClick={onClose}
                        className="flex items-center justify-between p-2.5 rounded-editorial hover:bg-paper-secondary transition-colors group"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-ink text-sm group-hover:text-editorial-blue transition-colors truncate">
                            {g.title}
                          </div>
                          <div className="text-xs text-ink-muted">{g.category} · {g.readTime} lectura</div>
                        </div>
                        <span className="text-xs text-ink-muted group-hover:text-ink">Leer →</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {results.roasters.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold text-ink-muted uppercase tracking-wider mb-2 font-mono">
                    Tostadores de Barcelona ({results.roasters.length})
                  </h4>
                  <div className="space-y-1.5">
                    {results.roasters.map(r => (
                      <Link
                        key={r.name}
                        to="/cafe"
                        onClick={onClose}
                        className="flex items-center justify-between p-2.5 rounded-editorial hover:bg-paper-secondary transition-colors group"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-ink text-sm group-hover:text-editorial-blue transition-colors">
                            {r.name} ({r.district})
                          </div>
                          <div className="text-xs text-ink-muted">
                            Precio medio: <span className="font-mono font-bold">{r.priceKg} €/kg</span> · Score: {r.score}
                          </div>
                        </div>
                        <span className="text-xs text-editorial-blue font-semibold">Ver índice →</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
