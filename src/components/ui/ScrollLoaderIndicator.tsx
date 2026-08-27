import React from 'react';

interface ScrollLoaderIndicatorProps {
  isLoading: boolean;
  hasMore: boolean;
  displayedCount: number;
  totalCount: number;
  onLoadMore?: () => void;
}

export const ScrollLoaderIndicator: React.FC<ScrollLoaderIndicatorProps> = ({
  isLoading,
  hasMore,
  displayedCount,
  totalCount,
  onLoadMore,
}) => {
  if (totalCount <= 24) return null;

  return (
    <div className="w-full py-8 flex flex-col items-center justify-center text-center">
      {isLoading ? (
        <div className="flex flex-col items-center gap-3 bg-white border border-[#e6e3da] px-6 py-4 rounded-2xl shadow-sm animate-pulse">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2f6fed] animate-bounce [animation-delay:-0.3s]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2f6fed] animate-bounce [animation-delay:-0.15s]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2f6fed] animate-bounce" />
          </div>
          <p className="text-xs font-medium text-[#6b6a63]">
            Cargando más productos del catálogo ({displayedCount} de {totalCount})...
          </p>
        </div>
      ) : hasMore ? (
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-[#6b6a63] font-medium">
            Mostrando {displayedCount} de {totalCount} productos
          </span>
          {onLoadMore && (
            <button
              onClick={onLoadMore}
              className="text-xs font-bold text-[#2f6fed] hover:underline bg-[#eef4ff] px-4 py-1.5 rounded-full border border-blue-100 transition-colors"
            >
              Cargar más resultados ↓
            </button>
          )}
        </div>
      ) : (
        <div className="text-xs text-[#6b6a63] font-medium bg-stone-50 border border-stone-200 px-5 py-2 rounded-full">
          ✓ Has visto los {totalCount} productos evaluados
        </div>
      )}
    </div>
  );
};
