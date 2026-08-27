import React, { useState, useEffect } from 'react';
import { ExternalLink, Sparkles, ChevronRight } from 'lucide-react';
import { B2B_SUPPLIERS, B2BSupplier } from '../../data/b2bSuppliers';

export interface MapHub {
  id: string;
  name: string;
  flag: string;
  type: 'Origen Verde' | 'Tostadores B2B' | 'Fabricante Tostadoras' | 'Hub Mixto';
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  suppliersCount: number;
  highlight: string;
  priceSample: string;
  suppliers: B2BSupplier[];
}

interface B2BWorldMapProps {
  onSelectCountry?: (country: string) => void;
  selectedCountry?: string;
}

export const B2BWorldMap: React.FC<B2BWorldMapProps> = ({ onSelectCountry, selectedCountry }) => {
  const [activeHubId, setActiveHubId] = useState<string | null>('spain');


  // Map Hubs aligned with realistic Mercator/Robinson projection coordinates
  const hubs: MapHub[] = [
    {
      id: 'spain',
      name: 'España',
      flag: '🇪🇸',
      type: 'Hub Mixto',
      x: 48.2,
      y: 38.5,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'España').length,
      highlight: 'Barcelona & Castelldefels · Sacos de Verde y Tueste Semanal',
      priceSample: 'Verde: 8,50$ | Tostado: 22-34€/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'España'),
    },
    {
      id: 'ethiopia',
      name: 'Etiopía',
      flag: '🇪🇹',
      type: 'Origen Verde',
      x: 58.5,
      y: 56.5,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Etiopía').length,
      highlight: 'Addis Abeba, Guji, Yirgacheffe & Sidama · Estaciones de Lavado',
      priceSample: 'FOB Verde: 6,80 – 26,00 $/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Etiopía'),
    },
    {
      id: 'thailand',
      name: 'Tailandia',
      flag: '🇹🇭',
      type: 'Origen Verde',
      x: 76.8,
      y: 52.5,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Tailandia').length,
      highlight: 'Chiang Mai & Chiang Rai · Procesos Anaeróbicos y Comercio Justo',
      priceSample: 'Verde: 7,20$ | Tostado: 14,50-32€/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Tailandia'),
    },
    {
      id: 'germany',
      name: 'Alemania',
      flag: '🇩🇪',
      type: 'Fabricante Tostadoras',
      x: 50.8,
      y: 32.5,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Alemania').length,
      highlight: 'Emmerich am Rhein · Probat Roasters (Tambor y Plantas Industriales)',
      priceSample: 'Tostadoras desde 28.000 €',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Alemania'),
    },
    {
      id: 'netherlands',
      name: 'Países Bajos',
      flag: '🇳🇱',
      type: 'Fabricante Tostadoras',
      x: 49.5,
      y: 31.5,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Países Bajos').length,
      highlight: 'Ulft · Giesen Coffee Roasters (W1A, W6A, W15A)',
      priceSample: 'Tostadoras desde 18.500 €',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Países Bajos'),
    },
    {
      id: 'denmark',
      name: 'Dinamarca',
      flag: '🇩🇰',
      type: 'Fabricante Tostadoras',
      x: 51.5,
      y: 27.5,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Dinamarca').length,
      highlight: 'Copenhague · Aillio Bullet R1/R2 (Tostado por Inducción 1kg)',
      priceSample: 'Bullet R1: 3.499 €',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Dinamarca'),
    }
  ];

  useEffect(() => {
    if (selectedCountry && selectedCountry !== 'Todos') {
      const match = hubs.find(h => h.name.toLowerCase() === selectedCountry.toLowerCase());
      if (match) {
        setActiveHubId(match.id);
      }
    }
  }, [selectedCountry]);

  const activeHub = hubs.find(h => h.id === activeHubId) || hubs[0];


  const handleHubClick = (hub: MapHub) => {
    setActiveHubId(hub.id);
    if (onSelectCountry) {
      onSelectCountry(hub.name);
    }
  };

  return (
    <div className="bg-[#1a1918] text-white border border-[#2e2c29] rounded-3xl p-5 sm:p-7 md:p-8 shadow-xl overflow-hidden relative">
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#33312e_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none" />

      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-[#e94e2b]/20 text-[#ff7a59] text-[11px] font-bold px-3 py-1 rounded-full mb-2 border border-[#e94e2b]/30">
            <Sparkles size={12} className="shrink-0" />
            <span>RED GLOBAL DE SUMINISTRO & MAQUINARIA</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white leading-tight">
            Mapa de Puntos de Suministro B2B y Tostadoras
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-xl">
            Haz clic en los puntos interactivos para explorar tostadores, exportadores de café verde en origen y fábricas de tostadoras.
          </p>
        </div>

        {/* Quick Hub Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {hubs.map((hub) => (
            <button
              key={hub.id}
              onClick={() => handleHubClick(hub)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeHubId === hub.id
                  ? 'bg-[#e94e2b] text-white font-bold shadow-md shadow-orange-950'
                  : 'bg-[#282624] text-stone-300 hover:bg-[#383532] border border-[#3e3b37]'
              }`}
            >
              <span>{hub.flag}</span>
              <span>{hub.name}</span>
              <span className="text-[10px] bg-black/40 px-1.5 py-0.2 rounded-full font-mono">
                {hub.suppliersCount}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* World Map SVG Canvas Container */}
      <div className="relative w-full aspect-[21/10] sm:aspect-[21/9] bg-[#121110] border border-[#2e2c29] rounded-2xl overflow-hidden mb-6 flex items-center justify-center p-2">
        {/* World Map Vector Paths */}
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full object-contain opacity-40 select-none pointer-events-none"
          fill="currentColor"
        >
          {/* North America */}
          <path
            d="M140,80 Q190,70 240,90 Q290,120 270,180 Q240,210 200,220 Q160,250 140,230 Q110,180 120,130 Z"
            className="text-stone-700"
          />
          <path
            d="M200,220 Q230,260 260,290 L240,300 Q210,270 190,240 Z"
            className="text-stone-700"
          />
          {/* South America */}
          <path
            d="M260,300 Q330,310 360,360 Q340,430 300,470 Q270,440 260,380 Q240,330 260,300 Z"
            className="text-stone-700"
          />
          {/* Europe */}
          <path
            d="M460,90 Q530,80 560,120 Q540,170 480,180 Q450,150 460,90 Z"
            className="text-stone-600"
          />
          <path
            d="M470,160 Q500,160 490,195 Q465,195 470,160 Z"
            className="text-stone-600"
          />
          {/* Africa */}
          <path
            d="M470,200 Q560,200 580,260 Q600,320 570,390 Q520,430 480,380 Q450,300 460,240 Z"
            className="text-stone-700"
          />
          {/* Asia */}
          <path
            d="M560,90 Q720,70 820,130 Q880,180 840,270 Q760,300 700,260 Q630,240 580,180 Z"
            className="text-stone-700"
          />
          {/* Southeast Asia & Indonesia */}
          <path
            d="M740,270 Q790,280 770,340 Q730,330 740,270 Z"
            className="text-stone-700"
          />
          {/* Australia */}
          <path
            d="M780,360 Q860,350 870,420 Q820,460 770,430 Q750,390 780,360 Z"
            className="text-stone-800"
          />
          {/* Trade Routes / Ocean Lines */}
          <path
            d="M482,192 Q530,240 585,282"
            fill="none"
            stroke="#e94e2b"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="opacity-40"
          />
          <path
            d="M585,282 Q680,280 768,262"
            fill="none"
            stroke="#2f6fed"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="opacity-40"
          />
          <path
            d="M482,192 Q620,160 768,262"
            fill="none"
            stroke="#3fae6a"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="opacity-30"
          />
        </svg>

        {/* Interactive Hub Pins */}
        {hubs.map((hub) => {
          const isActive = activeHubId === hub.id;
          return (
            <div
              key={hub.id}
              style={{ left: `${hub.x}%`, top: `${hub.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
              onClick={() => handleHubClick(hub)}
            >
              {/* Pulse Ring */}
              <span className={`absolute -inset-2 rounded-full opacity-75 animate-ping ${
                hub.type === 'Origen Verde' ? 'bg-[#3fae6a]' : hub.type === 'Fabricante Tostadoras' ? 'bg-[#2f6fed]' : 'bg-[#e94e2b]'
              }`} />

              {/* Pin Center Button */}
              <div
                className={`relative flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold transition-all shadow-lg border ${
                  isActive
                    ? 'bg-[#e94e2b] text-white border-white scale-110 ring-2 ring-[#e94e2b]/50'
                    : 'bg-[#22201e] text-stone-200 border-[#44403c] hover:border-stone-200 hover:scale-105'
                }`}
              >
                <span className="text-sm leading-none">{hub.flag}</span>
                <span className="hidden sm:inline-block text-[11px] whitespace-nowrap">{hub.name}</span>
                <span className={`w-2 h-2 rounded-full ${
                  hub.type === 'Origen Verde' ? 'bg-emerald-400' : hub.type === 'Fabricante Tostadoras' ? 'bg-blue-400' : 'bg-orange-400'
                }`} />
              </div>

              {/* Tooltip on Hover */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:flex flex-col items-center pointer-events-none z-30">
                <div className="bg-black/90 backdrop-blur-md border border-stone-700 text-white text-[10px] rounded-lg px-2.5 py-1.5 shadow-xl whitespace-nowrap">
                  <div className="font-bold flex items-center gap-1 text-[#ff8e72]">
                    <span>{hub.flag}</span>
                    <span>{hub.name}</span>
                    <span className="text-stone-400 font-normal">({hub.type})</span>
                  </div>
                  <div className="text-stone-300 font-mono text-[9px] mt-0.5">{hub.priceSample}</div>
                </div>
                <div className="w-2 h-2 bg-black/90 rotate-45 -mt-1 border-r border-b border-stone-700" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Hub Detail Card */}
      {activeHub && (
        <div className="bg-[#242220] border border-[#383532] rounded-2xl p-4 sm:p-5 relative z-10 animate-fadeIn">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#383532] pb-4 mb-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl">{activeHub.flag}</span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
                    {activeHub.name}
                  </h3>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    activeHub.type === 'Origen Verde'
                      ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                      : activeHub.type === 'Fabricante Tostadoras'
                      ? 'bg-blue-950 text-blue-300 border border-blue-800'
                      : 'bg-orange-950 text-orange-300 border border-orange-800'
                  }`}>
                    {activeHub.type}
                  </span>
                </div>
                <p className="text-xs text-stone-400 mt-0.5">
                  {activeHub.highlight}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="bg-[#1a1918] border border-[#383532] rounded-xl px-3.5 py-2 text-right">
                <span className="text-[10px] text-stone-400 block font-medium">Referencia de Precios</span>
                <span className="font-mono font-bold text-xs text-[#ff8e72]">{activeHub.priceSample}</span>
              </div>

              {onSelectCountry && (
                <button
                  onClick={() => onSelectCountry(activeHub.name)}
                  className="bg-[#e94e2b] hover:bg-[#d8401e] text-white font-bold text-xs px-3.5 py-2.5 rounded-xl flex items-center gap-1 transition-all shadow-md"
                >
                  <span>Filtrar {activeHub.name}</span>
                  <ChevronRight size={14} />
                </button>
              )}
            </div>
          </div>

          {/* List of suppliers in this hub */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {activeHub.suppliers.map((supplier) => (
              <div
                key={supplier.id}
                className="bg-[#1a1918] border border-[#33312e] rounded-xl p-3 flex flex-col justify-between hover:border-stone-500 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] font-bold text-[#ff8e72] uppercase tracking-wide truncate">
                      {supplier.category}
                    </span>
                    <span className="text-[9px] bg-stone-800 text-stone-300 px-1.5 py-0.2 rounded font-mono">
                      {supplier.region.split('(')[0].trim()}
                    </span>
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-white mb-1 leading-tight">
                    {supplier.name}
                  </h4>
                  <p className="text-[11px] text-stone-400 line-clamp-2 leading-relaxed mb-2">
                    {supplier.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#2e2c29] flex items-center justify-between text-[11px]">
                  <span className="text-stone-300 font-mono font-semibold">
                    {supplier.priceIndex.wholesaleKg || supplier.priceIndex.greenFobKg || supplier.priceIndex.equipmentPrice}
                  </span>
                  <a
                    href={supplier.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2f6fed] hover:underline inline-flex items-center gap-0.5 font-bold"
                  >
                    <span>Ver</span>
                    <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
