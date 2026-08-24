import React from 'react';
import { Link } from 'react-router-dom';
import { openCookieSettings } from '../legal/CookieConsentBanner';
import { Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="wrap flex flex-col items-center text-center">
        <Link to="/" style={{ display: 'inline-block', marginBottom: 16 }}>
          <img
            src="/assets/logo.png"
            alt="thecoffeescore"
            style={{ height: 50, width: 'auto', margin: '0 auto' }}
          />
        </Link>

        <p style={{ marginBottom: 10, fontSize: '0.85rem' }}>
          <strong>thecoffeescore.com</strong> — Comparativa independiente y datos técnicos de café. Todos los derechos reservados.
        </p>

        {/* Primary Navigation Links */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 20, fontSize: '0.82rem', marginBottom: 14 }}>
          <Link to="/maquinas" className="hover:underline">Máquinas</Link>
          <Link to="/molinos" className="hover:underline">Molinos</Link>
          <Link to="/accesorios" className="hover:underline">Accesorios</Link>
          <Link to="/cafe" className="hover:underline">Café de Especialidad</Link>
          <Link to="/ofertas" className="hover:underline">Ofertas</Link>
          <Link to="/guias" className="hover:underline">Guías de Compra</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/comparador" className="hover:underline">Comparador</Link>
        </div>

        {/* Legal & Compliance Links */}
        <div className="flex items-center justify-center flex-wrap gap-4 text-xs text-[#6b6a63] pt-3 border-t border-[#e6e3da]/80 w-full max-w-xl">
          <button
            onClick={openCookieSettings}
            className="hover:text-ink underline transition-colors cursor-pointer flex items-center gap-1"
          >
            <Shield size={12} />
            <span>Configurar cookies</span>
          </button>
          <span>·</span>
          <span>Privacidad RGPD & LSSI</span>
          <span>·</span>
          <span>Divulgación de Afiliados</span>
          <span>·</span>
          <span>SSL 256-bit Seguro</span>
        </div>
      </div>
    </footer>
  );
};
