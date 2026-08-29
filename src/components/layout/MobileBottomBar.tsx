import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useComparator } from '../../hooks/useComparator';
import { useCart } from '../../context/CartContext';

export const MobileBottomBar: React.FC = () => {
  const location = useLocation();
  const { selectedIds } = useComparator();
  const { totalCount: cartCount, openCart } = useCart();

  const navItems = [
    {
      ariaLabel: 'Inicio',
      path: '/',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      ariaLabel: 'Catálogo',
      path: '/maquinas',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
    {
      ariaLabel: 'Comparar',
      path: '/comparador',
      badge: selectedIds.length > 0 ? selectedIds.length : null,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
    {
      ariaLabel: 'Configurador de Setup',
      path: '/configurador',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      ariaLabel: 'Cesta de compra',
      isCart: true,
      badge: cartCount > 0 ? cartCount : null,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
  ];

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#fbfaf7]/95 backdrop-blur-md border-t border-[#e6e3da] px-3 py-2 shadow-[0_-2px_10px_rgba(0,0,0,0.03)]"
      aria-label="Navegación rápida móvil"
    >
      <div className="flex items-center justify-between max-w-sm mx-auto">
        {navItems.map((item, idx) => {
          const isActive = !item.isCart && location.pathname === item.path;

          if (item.isCart) {
            return (
              <button
                key={idx}
                onClick={openCart}
                className="relative w-11 h-11 rounded-2xl flex items-center justify-center text-stone-500 hover:text-stone-800 hover:bg-stone-100 active:scale-95 transition-all focus:outline-hidden"
                aria-label={item.ariaLabel}
                title={item.ariaLabel}
              >
                <div className="relative">
                  {item.icon}
                  {item.badge !== null && item.badge !== undefined && (
                    <span className="absolute -top-1.5 -right-2 bg-stone-700 text-white text-[8px] font-bold px-1.5 py-0.2 rounded-full font-mono">
                      {item.badge}
                    </span>
                  )}
                </div>
              </button>
            );
          }

          return (
            <Link
              key={idx}
              to={item.path!}
              className={`relative w-11 h-11 rounded-2xl flex items-center justify-center transition-all active:scale-95 focus:outline-hidden ${
                isActive
                  ? 'bg-stone-200/80 text-stone-900 shadow-2xs'
                  : 'text-stone-400 hover:text-stone-700 hover:bg-stone-100'
              }`}
              aria-label={item.ariaLabel}
              title={item.ariaLabel}
            >
              <div className="relative">
                {item.icon}
                {item.badge !== null && item.badge !== undefined && (
                  <span className="absolute -top-1.5 -right-2 bg-stone-700 text-white text-[8px] font-bold px-1.5 py-0.2 rounded-full font-mono">
                    {item.badge}
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
