import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ExternalLink, Sparkles, ChevronRight, Plus, Minus, RotateCcw } from 'lucide-react';
import { B2B_SUPPLIERS, B2BSupplier } from '../../data/b2bSuppliers';

export interface MapHub {
  id: string;
  name: string;
  flag: string;
  type: 'Exportador Verde' | 'Importador Verde' | 'Tostador B2B' | 'Hub Grano Verde & Tostado';
  lat: number;
  lng: number;
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
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});

  const [activeHubId, setActiveHubId] = useState<string>('spain');

  // ONLY Coffee bean exporters, importers and roasters (raw material & roasting hubs)
  const hubs: MapHub[] = [
    {
      id: 'spain',
      name: 'España',
      flag: '🇪🇸',
      type: 'Hub Grano Verde & Tostado',
      lat: 41.3879,
      lng: 2.1699,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'España' && s.category !== 'Fabricante de Tostadoras').length,
      highlight: 'Barcelona & Castelldefels · Importador de verde (Mare Terra) y Tostadurías B2B',
      priceSample: 'Verde: 8,50$ | Tostado: 22-34€/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'España' && s.category !== 'Fabricante de Tostadoras'),
    },
    {
      id: 'ethiopia',
      name: 'Etiopía',
      flag: '🇪🇹',
      type: 'Exportador Verde',
      lat: 9.0250,
      lng: 38.7469,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Etiopía').length,
      highlight: 'Addis Abeba, Guji & Yirgacheffe · Estaciones de lavado y sacos GrainPro',
      priceSample: 'FOB Verde: 6,80 – 26,00 $/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Etiopía'),
    },
    {
      id: 'colombia',
      name: 'Colombia',
      flag: '🇨🇴',
      type: 'Exportador Verde',
      lat: 4.5709,
      lng: -74.2973,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Colombia').length,
      highlight: 'Medellín, Huila, Nariño & Cauca · Microlotes de especialidad y Direct Trade',
      priceSample: 'FOB Verde: 8,20 – 22,00 $/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Colombia'),
    },
    {
      id: 'brazil',
      name: 'Brasil',
      flag: '🇧🇷',
      type: 'Exportador Verde',
      lat: -18.9333,
      lng: -46.9922,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Brasil').length,
      highlight: 'Cerrado Mineiro & Mogiana · Envasado al vacío PentaPack y café de finca',
      priceSample: 'FOB Verde: 7,50 – 35,00 $/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Brasil'),
    },
    {
      id: 'kenya',
      name: 'Kenia',
      flag: '🇰🇪',
      type: 'Exportador Verde',
      lat: -1.2921,
      lng: 36.8219,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Kenia').length,
      highlight: 'Nairobi, Nyeri & Kirinyaga · Sacos de grano verde Grado AA (SL28 / SL34)',
      priceSample: 'FOB Verde: 9,50 – 28,00 $/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Kenia'),
    },
    {
      id: 'thailand',
      name: 'Tailandia',
      flag: '🇹🇭',
      type: 'Exportador Verde',
      lat: 18.7883,
      lng: 98.9853,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Tailandia').length,
      highlight: 'Chiang Mai & Chiang Rai · Grano verde de altura y tueste en origen',
      priceSample: 'Verde: 7,20$ | Tostado: 14,50-32€/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Tailandia'),
    }
  ];

  const activeHub = hubs.find(h => h.id === activeHubId) || hubs[0];

  // Initialize Minimalist Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    // Create Map focused on global coffee belt & trade hubs
    const map = L.map(mapContainerRef.current, {
      center: [12, 10],
      zoom: 2.1,
      minZoom: 1.8,
      maxZoom: 9,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
    });

    // CartoDB Positron Minimalist Tile Layer (Warm gray & clean parchment)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map);

    mapInstanceRef.current = map;

    // Add Markers for raw coffee exporters, importers & roasters
    hubs.forEach((hub) => {
      const typeColor = hub.type === 'Exportador Verde' ? '#10b981' : hub.type === 'Importador Verde' ? '#f59e0b' : '#e94e2b';

      const customIcon = L.divIcon({
        className: 'custom-b2b-marker',
        html: `
          <div style="
            display: inline-flex;
            align-items: center;
            gap: 5px;
            background: #ffffff;
            border: 1.5px solid #111111;
            padding: 3px 8px;
            border-radius: 9999px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.12);
            cursor: pointer;
            font-family: inherit;
            font-size: 11px;
            font-weight: 700;
            color: #111111;
            transform: translate(-50%, -50%);
            white-space: nowrap;
            transition: all 0.2s ease;
          " class="marker-pill">
            <span style="font-size: 13px; line-height: 1;">${hub.flag}</span>
            <span>${hub.name}</span>
            <span style="
              width: 7px;
              height: 7px;
              border-radius: 50%;
              background: ${typeColor};
              display: inline-block;
            "></span>
          </div>
        `,
        iconSize: [0, 0],
        iconAnchor: [0, 0],
      });

      const marker = L.marker([hub.lat, hub.lng], { icon: customIcon }).addTo(map);

      marker.on('click', () => {
        setActiveHubId(hub.id);
        map.flyTo([hub.lat, hub.lng], Math.max(map.getZoom(), 4.2), { duration: 1 });
        if (onSelectCountry) {
          onSelectCountry(hub.name);
        }
      });

      markersRef.current[hub.id] = marker;
    });

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Sync external selectedCountry
  useEffect(() => {
    if (selectedCountry && selectedCountry !== 'Todos') {
      const match = hubs.find(h => h.name.toLowerCase() === selectedCountry.toLowerCase());
      if (match) {
        setActiveHubId(match.id);
        if (mapInstanceRef.current) {
          mapInstanceRef.current.flyTo([match.lat, match.lng], 4.2, { duration: 0.9 });
        }
      }
    }
  }, [selectedCountry]);

  const handleHubClick = (hub: MapHub) => {
    setActiveHubId(hub.id);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([hub.lat, hub.lng], 4.2, { duration: 0.9 });
    }
    if (onSelectCountry) {
      onSelectCountry(hub.name);
    }
  };

  const handleZoom = (delta: number) => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setZoom(mapInstanceRef.current.getZoom() + delta);
    }
  };

  const handleReset = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([12, 10], 2.1, { duration: 0.8 });
    }
  };

  return (
    <div className="bg-white border border-[#e6e3da] rounded-2xl p-4 sm:p-6 shadow-xs overflow-hidden">
      {/* Top Header - Minimal & Editorial */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 pb-3 border-b border-[#f0eee6]">
        <div>
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#e94e2b] uppercase tracking-wider mb-0.5">
            <Sparkles size={12} />
            <span>Mapa de Materia Prima & Tostadores</span>
          </div>
          <h2 className="font-serif font-bold text-lg sm:text-xl text-ink">
            Exportadores de café verde, importadores en sacos y tostadoras B2B
          </h2>
          <p className="text-[11px] text-stone-500 mt-0.5">
            Explora las regiones de origen de grano verde (materia prima) y los principales tostadores de café.
          </p>
        </div>

        {/* Quick Country Pills */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
          {hubs.map((hub) => (
            <button
              key={hub.id}
              onClick={() => handleHubClick(hub)}
              className={`px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1 ${
                activeHubId === hub.id
                  ? 'bg-ink text-white font-bold shadow-xs'
                  : 'bg-[#f4f2ec] text-stone-700 hover:bg-stone-200 border border-transparent'
              }`}
            >
              <span>{hub.flag}</span>
              <span>{hub.name}</span>
              <span className="text-[10px] bg-stone-300/60 px-1 py-0.1 rounded-full font-mono">
                {hub.suppliersCount}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Leaflet Real Map Container */}
      <div className="relative w-full aspect-[21/10] sm:aspect-[21/8] bg-[#f8f6f0] border border-[#e6e3da] rounded-xl overflow-hidden mb-4">
        <div ref={mapContainerRef} className="w-full h-full z-0" />

        {/* Minimal Float Controls (Zoom + Reset) */}
        <div className="absolute right-3 top-3 z-10 flex flex-col gap-1 bg-white/90 backdrop-blur-xs border border-[#e6e3da] rounded-lg p-1 shadow-sm">
          <button
            onClick={() => handleZoom(1)}
            className="w-7 h-7 flex items-center justify-center text-stone-700 hover:text-ink hover:bg-stone-100 rounded transition-colors"
            title="Acercar mapa"
            aria-label="Acercar mapa"
          >
            <Plus size={14} />
          </button>
          <button
            onClick={() => handleZoom(-1)}
            className="w-7 h-7 flex items-center justify-center text-stone-700 hover:text-ink hover:bg-stone-100 rounded transition-colors"
            title="Alejar mapa"
            aria-label="Alejar mapa"
          >
            <Minus size={14} />
          </button>
          <div className="h-px bg-[#e6e3da] my-0.5" />
          <button
            onClick={handleReset}
            className="w-7 h-7 flex items-center justify-center text-stone-700 hover:text-ink hover:bg-stone-100 rounded transition-colors"
            title="Restablecer vista"
            aria-label="Restablecer vista"
          >
            <RotateCcw size={12} />
          </button>
        </div>

        {/* Minimal Legend Tag for Raw Coffee Bean & Roasting */}
        <div className="absolute left-3 bottom-3 z-10 hidden sm:flex items-center gap-3 bg-white/90 backdrop-blur-xs border border-[#e6e3da] px-2.5 py-1 rounded-md text-[10px] text-stone-600 shadow-2xs">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Exportador Verde (Materia Prima)</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#e94e2b]" />
            <span>Tostadores B2B</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>Importador Verde (Sacos UE)</span>
          </div>
        </div>
      </div>

      {/* Selected Hub Detail Bar - Minimal Style */}
      {activeHub && (
        <div className="bg-[#fbfaf7] border border-[#ece8df] rounded-xl p-3.5 sm:p-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#ece8df] pb-3 mb-3">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">{activeHub.flag}</span>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-serif font-bold text-base text-ink">
                    {activeHub.name}
                  </h3>
                  <span className="text-[10px] font-bold bg-[#f4f2ec] text-stone-700 px-2 py-0.2 rounded-full">
                    {activeHub.type}
                  </span>
                </div>
                <p className="text-[11px] text-stone-500">
                  {activeHub.highlight}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <div className="text-right">
                <span className="text-[9px] text-stone-400 block font-medium">Índice de Precios Materia Prima</span>
                <span className="font-mono font-bold text-xs text-ink">{activeHub.priceSample}</span>
              </div>

              {onSelectCountry && (
                <button
                  onClick={() => onSelectCountry(activeHub.name)}
                  className="bg-ink hover:bg-black text-white font-bold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all shadow-2xs"
                >
                  <span>Filtrar {activeHub.name}</span>
                  <ChevronRight size={13} />
                </button>
              )}
            </div>
          </div>

          {/* List of raw coffee / roaster suppliers in this hub */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {activeHub.suppliers.map((supplier) => (
              <div
                key={supplier.id}
                className="bg-white border border-[#e6e3da] hover:border-stone-400 rounded-lg p-2.5 flex flex-col justify-between transition-colors shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <span className="text-[9px] font-bold text-[#e94e2b] uppercase tracking-wide truncate">
                      {supplier.category}
                    </span>
                    <span className="text-[9px] text-stone-400 font-mono">
                      {supplier.region.split('(')[0].trim()}
                    </span>
                  </div>
                  <h4 className="font-bold text-xs text-ink mb-1 line-clamp-1">
                    {supplier.name}
                  </h4>
                  <p className="text-[10px] text-stone-500 line-clamp-2 leading-tight mb-2">
                    {supplier.description}
                  </p>
                </div>

                <div className="pt-1.5 border-t border-[#f0eee6] flex items-center justify-between text-[10px]">
                  <span className="text-stone-700 font-mono font-bold">
                    {supplier.priceIndex.greenFobKg || supplier.priceIndex.wholesaleKg}
                  </span>
                  <a
                    href={supplier.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2f6fed] hover:underline inline-flex items-center gap-0.5 font-semibold"
                  >
                    <span>Web</span>
                    <ExternalLink size={9} />
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
