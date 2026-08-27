import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';


import { useFavorites } from '../../hooks/useFavorites';
import { useComparator } from '../../hooks/useComparator';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { SearchModal } from './SearchModal';
import { FavoritesDrawer } from './FavoritesDrawer';

export const Header: React.FC = () => {
  const location = useLocation();
  const { count: favCount } = useFavorites();
  const { selectedIds } = useComparator();
  const { user, isAuthenticated, openAuthModal, logout } = useAuth();
  const { totalCount: cartCount, openCart } = useCart();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFavOpen, setIsFavOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const userMenuRef = useRef<HTMLDivElement>(null);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setIsMoreMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile & dropdown menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsUserMenuOpen(false);
    setIsMoreMenuOpen(false);
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

  // Global Keyboard shortcuts (Escape, Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsSearchOpen(false);
        setIsFavOpen(false);
        setIsUserMenuOpen(false);
        setIsMoreMenuOpen(false);
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Primary categories
  const primaryLinks = [
    { name: 'Máquinas', path: '/maquinas' },
    { name: 'Molinos', path: '/molinos' },
    { name: 'Café', path: '/cafe' },
    { name: 'Accesorios', path: '/accesorios' },
    { name: 'Ofertas', path: '/ofertas', highlight: true },
    { name: 'Comparador', path: '/comparador', badge: selectedIds.length > 0 ? selectedIds.length : null },
  ];

  // Secondary links grouped in "Explorar" dropdown
  const secondaryLinks = [
    { name: 'Proveedores & B2B', path: '/b2b', desc: 'Café verde, tostadores e importadores' },
    { name: 'Guías de Compra', path: '/guias', desc: 'Consejos y análisis paso a paso' },
    { name: 'Blog Especializado', path: '/blog', desc: 'Técnicas de extracción y novedades' },
    { name: 'Índice Global', path: '/indice-global', desc: 'Mejores cafeterías del mundo' },
  ];

  return (
    <>
      <header
        role="banner"
        className="sticky top-0 z-40 bg-[#fbfaf7]/95 backdrop-blur-md border-b border-[#e6e3da] px-3 sm:px-6 lg:px-8 py-1.5 sm:py-2 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
      >
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo - Compact & Sharp */}
          <Link
            to="/"
            className="logo flex-shrink-0 flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink rounded-lg p-0.5"
            aria-label="thecoffeescore - Inicio"
          >
            <img
              src="/assets/logo-tagline.png"
              alt="thecoffeescore"
              className="h-6 sm:h-7 md:h-8 w-auto object-contain transition-all"
            />
          </Link>

          {/* Desktop Navigation (>= 1024px) - Compact and clear */}
          <nav
            role="navigation"
            aria-label="Navegación principal"
            className="hidden lg:flex items-center gap-1 xl:gap-2 text-[0.84rem]"
          >
            {primaryLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-2.5 py-1 rounded-lg flex items-center gap-1 transition-all ${
                    isActive
                      ? 'font-bold text-ink bg-stone-200/60'
                      : link.highlight
                      ? 'text-[#e94e2b] font-bold hover:bg-orange-50'
                      : 'text-[#444] hover:text-ink hover:bg-stone-100/70 font-medium'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="ml-0.5 bg-[#2f6fed] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full font-mono">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}

            {/* Explorar / Más Dropdown */}
            <div className="relative" ref={moreMenuRef}>
              <button
                onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                className={`px-2.5 py-1 rounded-lg flex items-center gap-1 transition-all text-[#555] hover:text-ink hover:bg-stone-100/70 font-medium ${
                  isMoreMenuOpen || ['/guias', '/blog', '/indice-global', '/b2b', '/proveedores'].includes(location.pathname)
                    ? 'font-bold text-ink bg-stone-200/60'
                    : ''
                }`}
              >
                <span>Explorar</span>
                <span className="text-[10px] text-stone-400">▾</span>
              </button>

              {isMoreMenuOpen && (
                <div className="absolute left-0 top-full mt-1.5 w-60 bg-white border border-[#e6e3da] rounded-2xl shadow-xl p-1.5 z-50 animate-scaleUp">
                  {secondaryLinks.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsMoreMenuOpen(false)}
                        className={`flex flex-col p-2.5 rounded-xl transition-colors ${
                          isActive ? 'bg-[#f4f2ec] text-ink font-bold' : 'hover:bg-[#fbfaf7] text-stone-700'
                        }`}
                      >
                        <p className="text-xs font-semibold text-ink leading-tight">{item.name}</p>
                        <p className="text-[10px] text-stone-500 leading-tight mt-0.5">{item.desc}</p>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Right Header Controls - Clean Pill Style */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Search Box with Shortcut Badge */}
            <div
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setIsSearchOpen(true)}
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:flex items-center justify-between border border-[#e6e3da] bg-white rounded-full pl-3 pr-2 py-1 text-xs text-[#6b6a63] cursor-pointer hover:border-stone-400 hover:text-ink transition-all w-36 lg:w-44 select-none shadow-sm"
              aria-label="Buscar productos y marcas"
            >
              <span className="truncate text-[11px]">Buscar...</span>
              <kbd className="hidden lg:inline-block bg-stone-100 border border-stone-300/70 text-[9px] font-mono px-1.5 py-0.2 rounded text-stone-500">
                ⌘K
              </kbd>
            </div>

            {/* Search button mobile */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="md:hidden text-xs font-semibold text-[#6b6a63] hover:text-ink px-2.5 py-1 rounded-full border border-[#e6e3da] bg-white transition-colors"
              aria-label="Abrir buscador"
            >
              Buscar
            </button>

            {/* Comparador Link (Desktop only) */}
            <Link
              to="/comparador"
              className="hidden lg:flex items-center text-xs font-semibold px-2.5 py-1 rounded-full border border-[#e6e3da] bg-white hover:bg-stone-100 text-ink transition-colors"
              title="Comparador de productos"
            >
              <span>Comparar</span>
              {selectedIds.length > 0 && (
                <span className="ml-1 bg-[#2f6fed] text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full font-mono">
                  {selectedIds.length}
                </span>
              )}
            </Link>

            {/* Favoritos Button */}
            <button
              className="flex items-center text-xs font-semibold px-2.5 py-1 rounded-full border border-[#e6e3da] bg-white hover:bg-stone-100 text-ink transition-colors"
              onClick={() => setIsFavOpen(true)}
              title="Favoritos"
              aria-label={`Favoritos (${favCount})`}
            >
              <span>Favoritos</span>
              {favCount > 0 && (
                <span className="ml-1 bg-[#e94e2b] text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full font-mono">
                  {favCount}
                </span>
              )}
            </button>

            {/* Cesta de Compra Button */}
            <button
              className="flex items-center text-xs font-semibold px-2.5 py-1 rounded-full border border-[#e6e3da] bg-white hover:bg-stone-100 text-ink transition-colors"
              onClick={openCart}
              title="Cesta de compra"
              aria-label={`Cesta (${cartCount})`}
            >
              <span>Cesta</span>
              {cartCount > 0 && (
                <span className="ml-1 bg-[#e94e2b] text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full font-mono">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User Profile / Auth Button Desktop */}
            <div className="relative hidden sm:block ml-1" ref={userMenuRef}>
              {isAuthenticated && user ? (
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-1.5 border border-[#e6e3da] bg-white hover:border-stone-400 rounded-full pl-1 pr-2 py-0.5 text-xs text-ink transition-all shadow-sm"
                  aria-label="Perfil de usuario"
                >
                  <img
                    src={user.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${user.email}`}
                    alt={user.name}
                    className="w-5 h-5 rounded-full object-cover bg-stone-100"
                  />
                  <span className="font-bold max-w-[70px] truncate text-[11px]">{user.name.split(' ')[0]}</span>
                </button>
              ) : (
                <button
                  onClick={() => openAuthModal('login')}
                  className="flex items-center bg-ink hover:bg-black text-white text-[11px] font-bold px-3 py-1 rounded-full transition-all shadow-sm"
                >
                  <span>Entrar</span>
                </button>
              )}

              {/* User Dropdown */}
              {isUserMenuOpen && isAuthenticated && user && (
                <div className="absolute right-0 top-full mt-1.5 w-52 bg-white border border-[#e6e3da] rounded-2xl shadow-xl p-1.5 z-50 animate-scaleUp">
                  <div className="px-2.5 py-2 border-b border-[#f0eee6]">
                    <p className="font-bold text-xs text-ink">{user.name}</p>
                    <p className="text-[10px] text-stone-500 truncate">{user.email}</p>
                  </div>
                  <div className="py-1 space-y-0.5">
                    <button
                      onClick={() => {
                        setIsUserMenuOpen(false);
                        openCart();
                      }}
                      className="w-full flex items-center justify-between px-2.5 py-1.5 text-xs text-stone-700 hover:bg-[#fbfaf7] rounded-lg transition-colors"
                    >
                      <span>Mi Cesta</span>
                      {cartCount > 0 && (
                        <span className="bg-[#e94e2b] text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full">
                          {cartCount}
                        </span>
                      )}
                    </button>
                    <button
                      onClick={() => {
                        setIsUserMenuOpen(false);
                        setIsFavOpen(true);
                      }}
                      className="w-full flex items-center justify-between px-2.5 py-1.5 text-xs text-stone-700 hover:bg-[#fbfaf7] rounded-lg transition-colors"
                    >
                      <span>Mis Favoritos</span>
                      {favCount > 0 && (
                        <span className="bg-stone-200 text-stone-700 text-[9px] font-bold px-1.5 py-0.2 rounded-full">
                          {favCount}
                        </span>
                      )}
                    </button>
                  </div>
                  <div className="pt-1 border-t border-[#f0eee6]">
                    <button
                      onClick={() => {
                        setIsUserMenuOpen(false);
                        logout();
                      }}
                      className="w-full flex items-center px-2.5 py-1.5 text-xs text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium"
                    >
                      <span>Cerrar Sesión</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Burger Menu Button */}
            <button
              className="lg:hidden flex items-center bg-[#f4f2ec] active:scale-95 border border-[#e6e3da] px-3 py-1 rounded-full text-xs font-bold text-ink shadow-sm hover:bg-stone-200/70 transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
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
              <span className="font-bold text-sm text-ink leading-tight">thecoffeescore</span>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-7 h-7 rounded-full bg-[#f4f2ec] flex items-center justify-center text-ink hover:bg-stone-200 transition-colors font-bold text-xs"
                aria-label="Cerrar menú"
              >
                ✕
              </button>
            </div>

            {/* Quick Search inside Drawer */}
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
              <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400 px-3 py-1">
                Catálogo
              </div>
              {primaryLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-ink text-white shadow-sm font-bold'
                        : link.highlight
                        ? 'text-[#e94e2b] bg-orange-50/70 hover:bg-orange-100/70 font-bold'
                        : 'text-ink bg-white/70 hover:bg-white border border-transparent hover:border-[#e6e3da]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full font-mono ${isActive ? 'bg-[#e94e2b] text-white' : 'bg-[#2f6fed] text-white'}`}>
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}

              <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400 px-3 pt-3 pb-1">
                Explorar & Guías
              </div>
              {secondaryLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-ink text-white shadow-sm font-bold'
                        : 'text-ink bg-white/70 hover:bg-white border border-transparent hover:border-[#e6e3da]'
                    }`}
                  >
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* User & Cart in Mobile Drawer */}
            <div className="p-3.5 border-t border-[#e6e3da] bg-[#f4f2ec] space-y-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openCart();
                }}
                className="w-full flex items-center justify-between px-3.5 py-2.5 bg-white border border-[#e6e3da] rounded-xl text-xs font-bold text-ink shadow-sm"
              >
                <span>Mi Cesta de Compra</span>
                <span className="bg-ink text-white text-[11px] font-bold px-2 py-0.5 rounded-full font-mono">
                  {cartCount}
                </span>
              </button>

              {isAuthenticated && user ? (
                <div className="flex items-center justify-between bg-white border border-[#e6e3da] rounded-xl p-2.5 shadow-sm">
                  <div className="flex items-center gap-2 min-w-0">
                    <img
                      src={user.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${user.email}`}
                      alt={user.name}
                      className="w-7 h-7 rounded-full object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="font-bold text-xs text-ink truncate">{user.name}</p>
                      <p className="text-[10px] text-stone-500 truncate">{user.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      logout();
                    }}
                    className="text-xs text-stone-500 hover:text-red-600 font-semibold px-2 py-1"
                    title="Cerrar sesión"
                  >
                    Salir
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openAuthModal('login');
                  }}
                  className="w-full flex items-center justify-center bg-ink hover:bg-black text-white font-bold text-xs py-2.5 rounded-xl shadow-sm transition-all"
                >
                  <span>Iniciar Sesión / Registro</span>
                </button>
              )}
            </div>

            {/* Drawer Bottom CTA */}
            <div className="p-3.5 border-t border-[#e6e3da] bg-white space-y-2">
              <Link
                to="/comparador"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn btn-solid w-full justify-center !py-2.5 !text-xs !rounded-xl"
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
