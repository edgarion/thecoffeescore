import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="wrap flex flex-col items-center">
        <Link to="/" style={{ display: 'inline-block', marginBottom: 16 }}>
          <img
            src="/assets/logo.png"
            alt="thecoffeescore"
            style={{ height: 60, width: 'auto', margin: '0 auto' }}
          />
        </Link>

        <p style={{ marginBottom: 12 }}>
          <strong>thecoffeescore.com</strong> — Comparativa independiente de café. Todos los derechos reservados.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 24, fontSize: '0.78rem' }}>
          <Link to="/maquinas">Máquinas</Link>
          <Link to="/molinos">Molinos</Link>
          <Link to="/accesorios">Accesorios</Link>
          <Link to="/cafe">Café</Link>
          <Link to="/ofertas">Ofertas</Link>
          <Link to="/guias">Guías</Link>
          <Link to="/comparador">Comparador</Link>
        </div>
      </div>
    </footer>
  );
};
