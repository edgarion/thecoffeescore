import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useComparator } from '../../hooks/useComparator';

export const ComparisonDrawer: React.FC = () => {
  const { selectedProducts, removeProduct, clear } = useComparator();
  const location = useLocation();

  // Don't show floating drawer if already on /comparador page or if 0 items
  if (selectedProducts.length === 0 || location.pathname === '/comparador') {
    return null;
  }

  return (
    <div
      className="fixed bottom-4 sm:bottom-6 left-3 right-3 sm:left-1/2 sm:-translate-x-1/2 z-40 bg-white border border-[#111111] rounded-full shadow-2xl px-4 sm:px-5 py-2.5 flex items-center justify-between gap-3 sm:gap-4 max-w-lg mx-auto animate-slideUp"
    >
      <div className="flex items-center gap-2 shrink-0">
        <span className="font-bold text-xs sm:text-sm text-ink whitespace-nowrap">
          Comparando ({selectedProducts.length}/4)
        </span>
      </div>

      <div className="hidden md:flex items-center gap-1.5 overflow-x-auto">
        {selectedProducts.map(p => (
          <div
            key={p.id}
            className="flex items-center gap-1 bg-[#f4f2ec] rounded-full px-2.5 py-1 text-xs font-semibold border border-[#e6e3da]"
          >
            <span className="max-w-[80px] truncate">{p.name}</span>
            <button
              onClick={() => removeProduct(p.id)}
              className="text-[#6b6a63] hover:text-[#e94e2b] text-[10px] font-bold px-1"
              title="Quitar"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 shrink-0 ml-auto">
        <Link
          to="/comparador"
          className="btn btn-solid !py-1.5 !px-3.5 !text-xs !rounded-full whitespace-nowrap"
        >
          <span>Ver tabla →</span>
        </Link>
        <button
          onClick={clear}
          className="text-[#6b6a63] hover:text-ink text-xs font-bold px-1"
          title="Vaciar comparador"
        >
          ✕
        </button>
      </div>
    </div>
  );
};
