import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GitCompare, Heart, Coffee, X, Search, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { useFavorites } from '../../hooks/useFavorites';
import { useComparator } from '../../hooks/useComparator';
import { SearchModal } from './SearchModal';
import { FavoritesDrawer } from './FavoritesDrawer';

export const Header: React.FC = () => {
  const location = useLocation();
  const { count: favCount } = useFavorites();
  const { selectedIds } = useComparator();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFavOpen, setIsFavOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Comparador', path: '/comparador', badge: selectedIds.length > 0 ? selectedIds.length : null },
    { name: 'Máquinas', path: '/maquinas' },
    { name: 'Molinos', path: '/molinos' },
    { name: 'Accesorios', path: '/accesorios' },
    { name: 'Café', path: '/cafe' },
    { name: 'Ofertas', path: '/ofertas' },
    { name: 'Guías', path: '/guias' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#fbfaf7]/95 backdrop-blur-md border-b border-[#e6e3da] px-4 sm:px-8 lg:px-12 py-2.5 sm:py-3 transition-all">
        <div className="w-full flex items-center justify-between gap-2 sm:gap-6">
          {/* Logo */}
          <Link to="/" className="logo flex-shrink-0 flex items-center">
            <img
              src="/assets/logo-tagline.png"
              alt="thecoffeescore"
              className="h-8 sm:h-12 md:h-14 lg:h-16 w-auto object-contain transition-all"
            />
          </Link>

          {/* Desktop Navigation (visible on >= 1024px) */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[0.92rem]">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors py-1 flex items-center gap-1 ${
                    isActive ? 'font-bold text-ink' : 'text-[#333] hover:text-editorial-blue'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span style={{
                      marginLeft: 2,
                      background: 'var(--blue)',
                      color: '#fff',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      padding: '1px 6px',
                      borderRadius: 10,
                    }}>
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Controls */}
          <div className="flex items-center gap-2 sm:gap-3.5">
            {/* Search box desktop */}
            <div
              className="hidden md:flex items-center gap-2 border border-[#e6e3da] bg-white rounded-full px-4 py-2 text-xs text-[#6b6a63] cursor-pointer hover:border-stone-400 transition-colors min-w-[200px]"
              onClick={() => setIsSearchOpen(true)}
            >
              <span>🔍</span>
              <span className="truncate">Buscar productos…</span>
            </div>

            {/* Search button mobile */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-9 h-9 md:hidden flex items-center justify-center rounded-full hover:bg-stone-200/50 text-ink transition-colors"
              title="Buscar"
              aria-label="Buscar"
            >
              <Search size={19} />
            </button>

            {/* Comparador Icon next to Heart (ONLY ON DESKTOP - hidden on mobile/tablet) */}
            <Link
              to="/comparador"
              className="hidden lg:flex relative w-9 h-9 items-center justify-center rounded-full hover:bg-stone-200/50 text-ink transition-colors"
              title="Comparador de productos"
            >
              <GitCompare size={19} className={selectedIds.length > 0 ? 'text-editorial-blue' : ''} />
              {selectedIds.length > 0 && (
                <span style={{
                  position: 'absolute',
                  top: -2,
                  right: -2,
                  background: 'var(--blue)',
                  color: '#fff',
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {selectedIds.length}
                </span>
              )}
            </Link>

            {/* Favoritos Icon */}
            <button
              className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-stone-200/50 text-ink transition-colors"
              onClick={() => setIsFavOpen(true)}
              title="Favoritos"
              aria-label="Favoritos"
            >
              <Heart size={19} className={favCount > 0 ? 'fill-[#e94e2b] text-[#e94e2b]' : ''} />
              {favCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: -2,
                  right: -2,
                  background: 'var(--accent)',
                  color: '#fff',
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {favCount}
                </span>
              )}
            </button>

            {/* Mobile & Tablet Burger Menu Button (visible on < lg) */}
            <button
              className="lg:hidden flex items-center gap-1.5 bg-[#f4f2ec] active:scale-95 border border-[#e6e3da] px-3 py-1.5 rounded-full text-xs font-bold text-ink shadow-sm hover:bg-stone-200/70 transition-all touch-manipulation"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Abrir menú de café"
              title="Menú de navegación"
            >
              <Coffee size={16} className="text-[#e94e2b] shrink-0" />
              <span className="font-semibold text-xs">Menú</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Slide-in from Right with safe backdrop) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] lg:hidden flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity animate-fadeIn"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-full max-w-[310px] sm:max-w-sm h-full bg-[#fbfaf7] border-l border-[#e6e3da] shadow-2xl flex flex-col z-10 animate-slideUp">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#e6e3da] bg-white">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#f4f2ec] flex items-center justify-center text-[#e94e2b]">
                  <Coffee size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-ink leading-tight">thecoffeescore</span>
                  <span className="text-[10px] text-[#6b6a63]">Navegación</span>
                </div>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-[#f4f2ec] flex items-center justify-center text-ink hover:bg-stone-200 transition-colors"
                aria-label="Cerrar menú"
              >
                <X size={16} />
              </button>
            </div>

            {/* Quick Search inside Drawer */}
            <div className="p-4 pb-2">
              <div
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                className="flex items-center gap-2.5 bg-white border border-[#e6e3da] rounded-xl px-3.5 py-2.5 text-xs text-[#6b6a63] cursor-pointer hover:border-stone-400 shadow-sm"
              >
                <span>🔍</span>
                <span>Buscar cafeteras, molinos…</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 overflow-y-auto px-4 py-2 space-y-1.5">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-ink text-white shadow-sm font-bold'
                        : 'text-ink bg-white/70 hover:bg-white border border-transparent hover:border-[#e6e3da]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <div className="flex items-center gap-2">
                      {link.badge && (
                        <span style={{
                          background: isActive ? 'var(--accent)' : 'var(--blue)',
                          color: '#fff',
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          padding: '2px 7px',
                          borderRadius: 10,
                        }}>
                          {link.badge}
                        </span>
                      )}
                      <ChevronRight size={15} className={isActive ? 'text-white' : 'text-stone-400'} />
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Drawer Bottom CTA */}
            <div className="p-4 border-t border-[#e6e3da] bg-white space-y-2">
              <Link
                to="/comparador"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn btn-solid w-full justify-center !py-3 !text-xs !rounded-xl"
              >
                <SlidersHorizontal size={14} />
                <span>Abrir comparador técnico</span>
                {selectedIds.length > 0 && ` (${selectedIds.length})`}
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <FavoritesDrawer isOpen={isFavOpen} onClose={() => setIsFavOpen(false)} />
    </>
  );
};
