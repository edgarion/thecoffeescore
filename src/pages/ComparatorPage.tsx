import React from 'react';
import { Link } from 'react-router-dom';
import { ComparisonTable } from '../components/comparator/ComparisonTable';

export const ComparatorPage: React.FC = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Inicio</Link>
        <span className="sep">/</span>
        <span className="current">Comparador</span>
      </div>

      {/* Page Header */}
      <div className="page-head">
        <div className="page-eyebrow">
          Comparativa Técnica Multi-Producto
        </div>
        <h1 className="page-title">Compara antes de comprar</h1>
        <p className="page-sub">
          Pon hasta 4 productos lado a lado y descubre cuál encaja mejor contigo. Datos técnicos de laboratorio, puntuaciones The Coffee Score y precios en tiempo real sin sesgo comercial.
        </p>
      </div>

      <div className="wrap py-8 space-y-8">
        {/* Main Comparison Component */}
        <ComparisonTable />

        {/* Trust & Transparency Note */}
        <div className="trust-note">
          <div className="text-xs text-stone-600 leading-relaxed">
            <strong>Criterio Independiente y Financiación:</strong> Las especificaciones técnicas son verificadas en nuestro banco de pruebas. Si compras a través de los enlaces de tienda podemos recibir una comisión sin ningún coste extra para ti, lo que sostiene nuestro laboratorio independiente.
          </div>
        </div>
      </div>
    </div>
  );
};

