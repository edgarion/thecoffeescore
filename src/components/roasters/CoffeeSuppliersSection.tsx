import React from 'react';
import { Link } from 'react-router-dom';

export const CoffeeSuppliersSection: React.FC = () => {
  return (
    <section className="wrap py-4">
      <div className="bg-gradient-to-br from-[#f8f6f0] via-[#fbfaf7] to-[#f4f2ec] border border-[#e6e3da] rounded-2xl p-5 sm:p-7 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Left: Info */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-[#eef4ff] text-[#2f6fed] text-[11px] font-bold px-3 py-1 rounded-full mb-2.5">
              <span>DIRECTORIO B2B & IMPORTACIÓN INTERNACIONAL</span>
            </div>

            <h2 className="font-serif font-bold text-xl sm:text-2xl text-ink leading-tight mb-2">
              Proveedores de café, café verde y fabricantes de tostadoras
            </h2>

            <p className="text-xs sm:text-sm text-[#6b6a63] leading-relaxed mb-4">
              Directorio internacional con índices de precios FOB de café verde en saco, tarifas mayoristas para cafeterías y contactos directos en <strong>España, Etiopía, Tailandia, Alemania y Países Bajos</strong>.
            </p>

            {/* Micro Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              <div className="flex items-center text-stone-700 bg-white border border-[#e6e3da] rounded-lg px-2.5 py-1.5">
                <span className="truncate text-[11px] font-medium">Precios FOB verificados</span>
              </div>
              <div className="flex items-center text-stone-700 bg-white border border-[#e6e3da] rounded-lg px-2.5 py-1.5">
                <span className="truncate text-[11px] font-medium">Contactos comerciales directos</span>
              </div>
              <div className="hidden sm:flex items-center text-stone-700 bg-white border border-[#e6e3da] rounded-lg px-2.5 py-1.5">
                <span className="truncate text-[11px] font-medium">Tostadoras Probat & Giesen</span>
              </div>
            </div>
          </div>

          {/* Right: Action Card */}
          <div className="bg-white border border-[#e6e3da] rounded-xl p-4 sm:p-5 flex flex-col justify-between shrink-0 lg:w-72 shadow-2xs">
            <div className="mb-3">
              <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">
                Portal de Proveedores
              </div>
              <div className="font-serif font-bold text-base text-ink leading-snug">
                Acceso al Directorio B2B y Cotizaciones
              </div>
              <p className="text-[11px] text-stone-500 mt-1">
                Compara precios por kg, orígenes, pedidos mínimos y solicita muestras sin intermediarios.
              </p>
            </div>

            <Link
              to="/b2b"
              className="btn btn-solid w-full justify-center !py-2.5 !text-xs !rounded-xl"
            >
              <span>Ver Directorio B2B →</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
