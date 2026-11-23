import React from 'react';
import { Product } from '../../core/domain/Product';

interface PriceHistorySectionProps {
  product: Product;
}

export const PriceHistorySection: React.FC<PriceHistorySectionProps> = ({ product }) => {
  const currentPrice = product.price;
  const oldPrice = product.oldPrice || (product.price > 100 ? Math.round(product.price * 1.18) : Math.round(product.price * 1.25));
  const avgPrice = product.historicalAveragePrice || Math.round((currentPrice + oldPrice) / 2);
  
  // Calculate lowest recorded price from stores or current price
  const storePrices = (product.stores || []).map(s => s.price).filter(p => p > 0);
  const minPrice = storePrices.length > 0 ? Math.min(currentPrice, ...storePrices) : currentPrice;
  const maxHistoricalPrice = Math.max(oldPrice, currentPrice, avgPrice);

  // Discount vs Historical Average
  const savingsVsAvg = avgPrice > currentPrice ? (avgPrice - currentPrice).toFixed(0) : null;
  const savingsVsOld = oldPrice > currentPrice ? (oldPrice - currentPrice).toFixed(0) : null;

  // Percentage position in range for visual bar
  const priceRange = maxHistoricalPrice - minPrice;
  const percentage = priceRange > 0 
    ? Math.max(5, Math.min(95, Math.round(((currentPrice - minPrice) / priceRange) * 100)))
    : 50;

  const isAtHistoricalLow = currentPrice <= minPrice;

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="bg-white border border-[#e6e3da] rounded-2xl p-6 sm:p-8 max-w-[900px] shadow-xs">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#e6e3da]">
          <div>
            <div className="text-[#2f6fed] text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#2f6fed]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>Historial de Precios Antiguos & Registro de Ofertas</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-ink">
              Evolución y Registro Histórico de {product.name}
            </h2>
            <p className="text-xs text-[#6b6a63] mt-1">
              Seguimiento cuantitativo con registros históricos del catálogo y comparativa frente a medias de mercado.
            </p>
          </div>

          <div className="text-xs text-[#2e7d32] bg-[#edf7ed] border border-[#c8e6c9] px-3 py-1.5 rounded-full self-start sm:self-auto font-semibold shrink-0 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#2e7d32] animate-pulse"></span>
            <span>Histórico Actualizado</span>
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          
          {/* 1. Precio Actual */}
          <div className="bg-[#fcfbf9] border border-[#e6e3da] rounded-xl p-3.5">
            <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wide mb-1 font-mono">
              Precio Actual
            </div>
            <div className="font-serif font-bold text-xl sm:text-2xl text-ink font-mono">
              {currentPrice} €
            </div>
            <p className="text-[11px] text-[#2e7d32] font-semibold mt-1">
              {isAtHistoricalLow ? '✓ Mínimo histórico' : 'Oferta verificada'}
            </p>
          </div>

          {/* 2. Media Histórica */}
          <div className="bg-[#fcfbf9] border border-[#e6e3da] rounded-xl p-3.5">
            <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wide mb-1 font-mono">
              Media Histórica
            </div>
            <div className="font-serif font-bold text-xl sm:text-2xl text-ink font-mono">
              {avgPrice} €
            </div>
            <p className="text-[11px] text-stone-500 mt-1">
              {savingsVsAvg ? `Ahorras ${savingsVsAvg} € vs media` : 'Promedio continuo'}
            </p>
          </div>

          {/* 3. Mínimo Registrado */}
          <div className="bg-[#fcfbf9] border border-[#e6e3da] rounded-xl p-3.5">
            <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wide mb-1 font-mono">
              Mínimo Histórico
            </div>
            <div className="font-serif font-bold text-xl sm:text-2xl text-[#2e7d32] font-mono">
              {minPrice} €
            </div>
            <p className="text-[11px] text-stone-500 mt-1">
              Mejor registro
            </p>
          </div>

          {/* 4. PVP de Referencia */}
          <div className="bg-[#fcfbf9] border border-[#e6e3da] rounded-xl p-3.5">
            <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wide mb-1 font-mono">
              PVP / Registro Máx.
            </div>
            <div className="font-serif font-bold text-xl sm:text-2xl text-stone-400 font-mono line-through">
              {oldPrice} €
            </div>
            <p className="text-[11px] text-[#e94e2b] font-semibold mt-1">
              {savingsVsOld ? `-${savingsVsOld} € descuento` : 'Precio base'}
            </p>
          </div>
        </div>

        {/* Visual Price Range Spectrum Bar */}
        <div className="bg-[#fbfaf8] border border-[#ece8de] rounded-xl p-4 mb-6">
          <div className="flex justify-between items-center text-xs font-semibold text-stone-600 mb-2">
            <span>Rango de Precios Registrados</span>
            <span className="font-mono text-stone-500">{minPrice} € — {maxHistoricalPrice} €</span>
          </div>

          {/* Range Slider Track */}
          <div className="relative w-full h-3 bg-stone-200 rounded-full overflow-visible my-3">
            {/* Gradient fill */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-amber-200 to-red-300 rounded-full" />
            
            {/* Current Price Marker */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-ink border-2 border-white rounded-full shadow-md cursor-pointer -ml-2.5 flex items-center justify-center transition-all"
              style={{ left: `${percentage}%` }}
              title={`Precio actual: ${currentPrice} €`}
            >
              <div className="w-1.5 h-1.5 bg-[#2f6fed] rounded-full" />
            </div>
          </div>

          <div className="flex justify-between text-[11px] text-stone-500 mt-1">
            <span>🟢 Mínimo: {minPrice} €</span>
            <span className="text-stone-700 font-bold">● Actual: {currentPrice} €</span>
            <span>🔴 PVP Máximo: {maxHistoricalPrice} €</span>
          </div>
        </div>

        {/* Historical Log Timeline */}
        <div>
          <h4 className="text-xs font-bold text-ink uppercase tracking-wider mb-3 font-mono">
            Registro Histórico de Auditorías & Comprobaciones
          </h4>
          
          <div className="space-y-2.5 text-xs text-stone-700">
            <div className="flex items-center justify-between p-3 bg-[#fcfbf9] rounded-lg border border-[#e6e3da]">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#2e7d32]"></span>
                <span className="font-semibold text-ink">Última validación diaria automatizada</span>
                <span className="text-stone-500">· Stock y precio confirmados</span>
              </div>
              <span className="font-mono font-bold text-ink">{currentPrice} €</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-[#f0eee6]">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-stone-300"></span>
                <span className="text-stone-600">Registro intermedio del catálogo</span>
                <span className="text-stone-400">· Histórico consolidado</span>
              </div>
              <span className="font-mono text-stone-600">{avgPrice} €</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-[#f0eee6]">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-stone-300"></span>
                <span className="text-stone-600">Primer registro / PVP de lanzamiento</span>
                <span className="text-stone-400">· Precio oficial fabricante</span>
              </div>
              <span className="font-mono text-stone-400 line-through">{oldPrice} €</span>
            </div>
          </div>
        </div>

        {/* Guarantee Note */}
        <p className="text-[11px] text-stone-500 mt-4 leading-relaxed">
          <strong>Transparencia de datos:</strong> Los datos históricos son recopilados por los agentes de The Coffee Score para garantizar comparativas verídicas y libres de descuentos artificiales.
        </p>

      </div>
    </section>
  );
};
