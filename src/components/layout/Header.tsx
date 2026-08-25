import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GitCompare, Heart, Coffee, X, ChevronRight, SlidersHorizontal } from 'lucide-react';
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

  // Close mobile menu on route change
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

  // Keyboard shortcut (Escape to close menu)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsSearchOpen(false);
        setIsFavOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Comparador', path: '/comparador', badge: selectedIds.length > 0 ? selectedIds.length : null },
    { name: 'Máquinas', path: '/maquinas' },
    { name: 'Molinos', path: '/molinos' },
    { name: 'Accesorios', path: '/accesorios' },
    { name: 'Café', path: '/cafe' },
    { name: 'Ofertas', path: '/ofertas' },
    { name: 'Guías', path: '/guias' },
    { name: 'Blog', path: '/blog' },
    { name: 'Índice Global', path: '/indice-global' },
  ];

  return (
    <>
      <header
        role="banner"
        className="sticky top-0 z-40 bg-[#fbfaf7]/95 backdrop-blur-md border-b border-[#e6e3da] px-4 sm:px-8 lg:px-12 py-2 sm:py-2.5 transition-all"
      >
        <div className="w-full flex items-center justify-between gap-3 sm:gap-6">
          {/* Logo - Proportional and Harmonious */}
          <Link
            to="/"
            className="logo flex-shrink-0 flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink rounded-lg p-0.5"
            aria-label="thecoffeescore - Inicio"
          >
            <img
              src="/assets/logo-tagline.png"
              alt="thecoffeescore"
              className="h-7 sm:h-9 md:h-11 lg:h-12 w-auto object-contain transition-all"
            />
          </Link>

          {/* Desktop Navigation (>= 1024px) */}
          <nav
            role="navigation"
            aria-label="Navegación principal"
            className="hidden lg:flex items-center gap-4 xl:gap-7 text-[0.9rem]"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors py-1 px-1 rounded flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink ${
                    isActive
                      ? 'font-bold text-ink border-b-2 border-ink -mb-[2px]'
                      : 'text-[#333] hover:text-editorial-blue'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span style={{
                      marginLeft: 2,
                      background: 'var(--blue)',
                      color: '#fff',
                      fontSize: '0.62rem',
                      fontWeight: 700,
                      padding: '1px 5px',
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
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search box desktop (NO magnifying glass icon) */}
            <div
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setIsSearchOpen(true)}
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:flex items-center border border-[#e6e3da] bg-white rounded-full px-4 py-1.5 text-xs text-[#6b6a63] cursor-pointer hover:border-stone-400 hover:text-ink transition-colors min-w-[170px] select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
              aria-label="Buscar productos y marcas"
            >
              <span className="truncate">Buscar productos…</span>
            </div>

            {/* Search button mobile & tablet (NO magnifying glass icon) */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="md:hidden text-xs font-semibold text-[#6b6a63] hover:text-ink px-2.5 py-1 rounded-full border border-[#e6e3da] bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
              aria-label="Abrir buscador"
            >
              Buscar
            </button>

            {/* Comparador Icon next to Heart (ONLY ON DESKTOP - hidden on mobile/tablet) */}
            <Link
              to="/comparador"
              className="hidden lg:flex relative w-8 h-8 items-center justify-center rounded-full hover:bg-stone-200/50 text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
              title="Comparador de productos"
              aria-label="Ver comparador de productos"
            >
              <GitCompare size={18} className={selectedIds.length > 0 ? 'text-editorial-blue' : ''} />
              {selectedIds.length > 0 && (
                <span style={{
                  position: 'absolute',
                  top: -2,
                  right: -2,
                  background: 'var(--blue)',
                  color: '#fff',
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  width: 15,
                  height: 15,
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
              className="relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-200/50 text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
              onClick={() => setIsFavOpen(true)}
              title="Favoritos"
              aria-label={`Favoritos (${favCount})`}
            >
              <Heart size={18} className={favCount > 0 ? 'fill-[#e94e2b] text-[#e94e2b]' : ''} />
              {favCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: -2,
                  right: -2,
                  background: 'var(--accent)',
                  color: '#fff',
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  width: 15,
                  height: 15,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {favCount}
                </span>
              )}
            </button>

            {/* Mobile & Tablet Burger Menu Button (< 1024px) */}
            <button
              className="lg:hidden flex items-center gap-1.5 bg-[#f4f2ec] active:scale-95 border border-[#e6e3da] px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-bold text-ink shadow-sm hover:bg-stone-200/70 transition-all touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              aria-expanded={isMobileMenuOpen}
            >
              <Coffee size={15} className="text-[#e94e2b] shrink-0" />
              <span className="font-semibold text-xs">Menú</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Drawer (< 1024px) */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[9999] lg:hidden flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label="Menú móvil"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity animate-fadeIn"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-full max-w-[300px] sm:max-w-xs h-full bg-[#fbfaf7] border-l border-[#e6e3da] shadow-2xl flex flex-col z-10 animate-slideUp">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#e6e3da] bg-white">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#f4f2ec] flex items-center justify-center text-[#e94e2b]">
                  <Coffee size={16} />
                </div>
                <span className="font-bold text-sm text-ink leading-tight">thecoffeescore</span>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-7 h-7 rounded-full bg-[#f4f2ec] flex items-center justify-center text-ink hover:bg-stone-200 transition-colors"
                aria-label="Cerrar menú"
              >
                <X size={15} />
              </button>
            </div>

            {/* Quick Search inside Drawer (NO magnifying glass) */}
            <div className="p-3.5 pb-1.5">
              <div
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                className="flex items-center bg-white border border-[#e6e3da] rounded-xl px-3.5 py-2.5 text-xs text-[#6b6a63] cursor-pointer hover:border-stone-400 shadow-sm"
              >
                <span className="truncate">Buscar cafeteras, molinos…</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 overflow-y-auto px-3.5 py-2 space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
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
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          padding: '1px 6px',
                          borderRadius: 10,
                        }}>
                          {link.badge}
                        </span>
                      )}
                      <ChevronRight size={14} className={isActive ? 'text-white' : 'text-stone-400'} />
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Drawer Bottom CTA */}
            <div className="p-3.5 border-t border-[#e6e3da] bg-white space-y-2">
              <Link
                to="/comparador"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn btn-solid w-full justify-center !py-2.5 !text-xs !rounded-xl"
              >
                <SlidersHorizontal size={13} />
                <span>Abrir comparador</span>
                {selectedIds.length > 0 && ` (${selectedIds.length})`}
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Global Modals */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <FavoritesDrawer isOpen={isFavOpen} onClose={() => setIsFavOpen(false)} />
    </>
  );
};
