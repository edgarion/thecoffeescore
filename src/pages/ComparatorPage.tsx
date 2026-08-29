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

      {/* Page Header with Illustration */}
      <section className="bg-gradient-to-b from-[#f8f6f0] via-[#fcfbf9] to-[#faf8f5] border-b border-[#e6e3da] py-8 sm:py-10">
        <div className="wrap">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#eef4ff] text-[#2f6fed] text-xs font-bold px-3 py-1 rounded-full mb-3 shadow-2xs uppercase tracking-wide">
                <span>COMPARADOR TÉCNICO MULTI-PRODUCTO</span>
              </div>
              <h1 className="font-serif font-bold text-3xl sm:text-4xl text-ink leading-tight mb-3">
                Compara antes de comprar
              </h1>
              <p className="text-sm sm:text-base text-[#6b6a63] leading-relaxed mb-4">
                Pon hasta 4 productos lado a lado y descubre cuál encaja mejor con tu forma de preparar café. Datos técnicos de laboratorio, puntuaciones The Coffee Score y precios en tiempo real sin sesgo comercial.
              </p>
              <div className="flex items-center gap-4 text-xs font-semibold text-stone-600">
                <span className="flex items-center gap-1.5"><span className="text-[#2e7d32]">✓</span> Especificaciones contrastadas</span>
                <span className="flex items-center gap-1.5"><span className="text-[#2e7d32]">✓</span> Precios verificados</span>
                <span className="flex items-center gap-1.5"><span className="text-[#2e7d32]">✓</span> Cero sesgo de marca</span>
              </div>
            </div>

            {/* Illustration */}
            <div className="w-44 sm:w-56 md:w-64 shrink-0 flex items-center justify-center">
              <img
                src="/assets/comparator-people.png"
                alt="Compañeros de café comparando productos"
                className="w-full h-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-300 select-none pointer-events-none"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="wrap py-8 space-y-8">
        {/* Main Comparison Component */}
        <ComparisonTable />

        {/* Trust & Transparency Note */}
        <div className="trust-note bg-white border border-[#e6e3da] rounded-2xl p-5 shadow-2xs">
          <div className="text-xs text-stone-600 leading-relaxed">
            <strong>Criterio Independiente y Financiación:</strong> Las especificaciones técnicas son verificadas en nuestro banco de pruebas. Si compras a través de los enlaces de tienda podemos recibir una comisión sin ningún coste extra para ti, lo que sostiene nuestro laboratorio independiente.
          </div>
        </div>
      </div>
    </div>
  );
};

