import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/product/ProductCard';
import { BarcelonaIndexTable } from '../components/roasters/BarcelonaIndexTable';
import { PRODUCTS } from '../data/catalog';

export const CoffeePage: React.FC = () => {
  const coffeeProducts = PRODUCTS.filter(p => p.category === 'cafe');

  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Inicio</Link>
        <span className="sep">/</span>
        <span className="current">Café de Especialidad</span>
      </div>

      {/* Page Header */}
      <div className="page-head">
        <div className="page-eyebrow">
          Microtuestes & Orígenes
        </div>
        <h1 className="page-title">Café de especialidad en grano</h1>
        <p className="page-sub">
          Catamos y evaluamos lotes de tueste fresco, variedades arábicas puras, perfiles sensoriales y trazabilidad de origen.
        </p>
      </div>

      <div className="wrap" style={{ padding: '32px' }}>
        {/* Products */}
        <h2 className="section-title" style={{ fontSize: '1.6rem' }}>Cafés analizados</h2>
        <div className="product-grid" style={{ marginBottom: 48 }}>
          {coffeeProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* Barcelona Index */}
        <div className="page-head" style={{ padding: '0 0 20px 0' }}>
          <div className="page-eyebrow" style={{ color: 'var(--accent)' }}>
            Índice Local de Referencia
          </div>
          <h2 className="page-title" style={{ fontSize: '1.9rem' }}>Barcelona Roasters Index</h2>
          <p className="page-sub">
            Monitorización continua de precios por kilogramo, orígenes directos y frecuencias de tueste en tostadores de Barcelona.
          </p>
        </div>

        <BarcelonaIndexTable />
      </div>
    </div>
  );
};
