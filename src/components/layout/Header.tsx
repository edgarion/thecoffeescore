import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GitCompare, Heart, Coffee, X, Search, ChevronRight } from 'lucide-react';
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
      <header>
        {/* Logo */}
        <Link to="/" className="logo shrink-0">
          <img src="/assets/logo-tagline.png" alt="thecoffeescore - Better coffee. Better choices." />
        </Link>

        {/* Desktop Navigation (visible on >= 1024px) */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8 text-[0.92rem]">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={isActive ? 'active font-bold text-ink' : ''}
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span style={{
                    marginLeft: 4,
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
        <div className="header-right">
          {/* Search box desktop */}
          <div
            className="search-box hidden md:flex"
            onClick={() => setIsSearchOpen(true)}
          >
            <span>🔍</span>
            <span className="truncate">Buscar productos, marcas…</span>
          </div>

          {/* Search button mobile & tablet */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="icon-btn md:hidden"
            title="Buscar"
          >
            <Search size={20} />
          </button>

          {/* Comparador Icon next to Heart (ONLY ON DESKTOP - hidden on mobile/tablet) */}
          <Link
            to="/comparador"
            className="icon-btn relative cursor-pointer hidden lg:flex items-center justify-center"
            title="Comparador de productos"
          >
            <GitCompare size={20} className={selectedIds.length > 0 ? 'text-editorial-blue' : ''} />
            {selectedIds.length > 0 && (
              <span style={{
                position: 'absolute',
                top: -6,
                right: -8,
                background: 'var(--blue)',
                color: '#fff',
                fontSize: '0.65rem',
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
            className="icon-btn relative cursor-pointer"
            onClick={() => setIsFavOpen(true)}
            title="Favoritos"
          >
            <Heart size={20} className={favCount > 0 ? 'fill-accent text-accent' : ''} />
            {favCount > 0 && (
              <span style={{
                position: 'absolute',
                top: -6,
                right: -8,
                background: 'var(--accent)',
                color: '#fff',
                fontSize: '0.65rem',
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

          {/* Mobile & Tablet Burger Menu (visible on < lg / <1024px) */}
          <button
            className="lg:hidden cursor-pointer flex items-center justify-center rounded-full transition-all touch-manipulation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menú de café"
            title="Menú de navegación"
          >
            {isMobileMenuOpen ? (
              <div className="flex items-center gap-1.5 bg-ink text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-sm">
                <X size={16} />
                <span>Cerrar</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 bg-cream border border-[#e6e3da] px-3 py-1.5 rounded-full text-xs font-bold text-ink shadow-sm hover:bg-stone-200/60 transition-colors">
                <Coffee size={17} className="text-accent shrink-0" />
                <span>Menú</span>
              </div>
            )}
          </button>
        </div>
      </header>

      {/* Mobile & Tablet Drawer Navigation (Slide-in) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#fbfaf7] border-l border-[#e6e3da] shadow-2xl p-6 flex flex-col z-10 animate-slideUp">
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#e6e3da] mb-4">
              <div className="flex items-center gap-2">
                <Coffee size={22} className="text-accent" />
                <span className="font-bold text-sm tracking-tight">Menú thecoffeescore</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-ink hover:bg-stone-200"
              >
                <X size={16} />
              </button>
            </div>

            {/* Quick Search inside Drawer */}
            <div
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsSearchOpen(true);
              }}
              className="flex items-center gap-2 bg-white border border-[#e6e3da] rounded-xl px-3.5 py-2.5 text-xs text-muted mb-4 cursor-pointer"
            >
              <span>🔍</span>
              <span>Buscar máquinas, marcas…</span>
            </div>

            {/* Nav Links List */}
            <div className="flex-1 overflow-y-auto space-y-1 py-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-ink text-white shadow-sm font-bold'
                        : 'text-ink hover:bg-cream'
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

            {/* Drawer Footer CTA */}
            <div className="pt-4 border-t border-[#e6e3da] space-y-2">
              <Link
                to="/comparador"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn btn-solid w-full justify-center !py-3 !text-xs"
              >
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
