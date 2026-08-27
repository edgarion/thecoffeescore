import React from 'react';
import { useFavorites } from '../../hooks/useFavorites';
import { useComparator } from '../../hooks/useComparator';
import { Link } from 'react-router-dom';
import { ScoreBadge } from '../ui/ScoreBadge';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({ isOpen, onClose }) => {
  const { favoriteProducts, toggleFavorite, count } = useFavorites();
  const { addProduct, isInCompare } = useComparator();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="fixed inset-0 bg-ink/40 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-stone-200 shadow-2xl p-6 flex flex-col">
          <div className="flex items-center justify-between pb-4 border-b border-stone-200">
            <div>
              <h3 className="font-serif font-bold text-xl text-ink">Tus Favoritos</h3>
              <p className="text-xs text-ink-muted mt-0.5">{count} productos guardados</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-paper-secondary flex items-center justify-center text-ink font-bold text-xs hover:bg-stone-200 transition-colors"
              aria-label="Cerrar favoritos"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4 space-y-3">
            {favoriteProducts.length === 0 ? (
              <div className="text-center py-16 text-ink-muted">
                <p className="font-serif text-lg text-ink">Tu lista de guardados está vacía</p>
                <p className="text-xs mt-1 max-w-xs mx-auto">
                  Guarda productos haciendo clic en Guardar en cualquier ficha para revisarlos o compararlos después.
                </p>
              </div>
            ) : (
              favoriteProducts.map(p => (
                <div
                  key={p.id}
                  className="flex items-center gap-3 p-3 rounded-editorial border border-stone-200 hover:border-stone-300 transition-all bg-white"
                >
                  <div className="w-14 h-14 bg-paper-secondary rounded-editorial flex items-center justify-center p-1 shrink-0 border border-stone-100">
                    <img src={p.image} alt={p.name} className="max-h-full object-contain" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/producto/${p.slug}`}
                      onClick={onClose}
                      className="font-bold text-ink text-sm hover:text-editorial-blue transition-colors truncate block"
                    >
                      {p.name}
                    </Link>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-mono font-bold text-xs text-ink">{p.price} €</span>
                      <ScoreBadge score={p.score} size="sm" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 shrink-0">
                    <button
                      onClick={() => addProduct(p.id)}
                      disabled={isInCompare(p.id)}
                      className={`text-[11px] font-semibold px-2 py-1 rounded-editorial border transition-colors ${
                        isInCompare(p.id)
                          ? 'bg-editorial-blue/10 text-editorial-blue border-editorial-blue/30'
                          : 'bg-paper-secondary hover:bg-stone-200 text-ink border-stone-200'
                      }`}
                    >
                      {isInCompare(p.id) ? 'En comparador' : '+ Comparar'}
                    </button>
                    <button
                      onClick={() => toggleFavorite(p.id)}
                      className="text-stone-400 hover:text-red-600 text-xs p-1 text-center transition-colors font-medium"
                      title="Eliminar de favoritos"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="pt-4 border-t border-stone-200 space-y-2">
            <Link
              to="/comparador"
              onClick={onClose}
              className="w-full inline-flex items-center justify-center bg-ink hover:bg-black text-white font-semibold text-sm py-3 rounded-editorial transition-colors shadow-sm"
            >
              <span>Ir al comparador</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
