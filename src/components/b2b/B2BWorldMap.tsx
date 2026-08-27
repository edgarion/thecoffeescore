import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ExternalLink, Sparkles, ChevronRight, Plus, Minus, RotateCcw } from 'lucide-react';
import { B2B_SUPPLIERS, B2BSupplier } from '../../data/b2bSuppliers';

export interface MapHub {
  id: string;
  name: string;
  flag: string;
  continent: 'América Latina' | 'África' | 'Asia & Pacífico' | 'Europa' | 'Norteamérica & Oceanía';
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

  const [activeHubId, setActiveHubId] = useState<string>('colombia');
  const [selectedContinent, setSelectedContinent] = useState<string>('Todos');

  // Complete worldwide coffee raw material exporters, green importers, and roasters
  const hubs: MapHub[] = [
    // --- AMÉRICA LATINA ---
    {
      id: 'colombia',
      name: 'Colombia',
      flag: '🇨🇴',
      continent: 'América Latina',
      type: 'Hub Grano Verde & Tostado',
      lat: 4.5709,
      lng: -74.2973,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Colombia').length,
      highlight: 'Medellín, Huila, Nariño & Cauca · Microlotes de especialidad y Direct Trade',
      priceSample: 'FOB Verde: 8,20 – 22,00 $/kg | Tostado: 15,50-23€/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Colombia'),
    },
    {
      id: 'brazil',
      name: 'Brasil',
      flag: '🇧🇷',
      continent: 'América Latina',
      type: 'Exportador Verde',
      lat: -18.9333,
      lng: -46.9922,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Brasil').length,
      highlight: 'Cerrado Mineiro & Mogiana · Envasado al vacío PentaPack y cafés de finca D.O.',
      priceSample: 'FOB Verde: 6,20 – 35,00 $/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Brasil'),
    },
    {
      id: 'guatemala',
      name: 'Guatemala',
      flag: '🇬🇹',
      continent: 'América Latina',
      type: 'Exportador Verde',
      lat: 14.6349,
      lng: -90.5069,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Guatemala').length,
      highlight: 'Huehuetenango, Antigua & Cobán · Alturas de 1.800m+ y pequeños caficultores',
      priceSample: 'FOB Verde: 7,90 – 21,00 $/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Guatemala'),
    },
    {
      id: 'costa-rica',
      name: 'Costa Rica',
      flag: '🇨🇷',
      continent: 'América Latina',
      type: 'Exportador Verde',
      lat: 9.7489,
      lng: -83.7534,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Costa Rica').length,
      highlight: 'Tarrazú & West Valley · Pioneros en microbeneficios y procesos Honey/Anaeróbicos',
      priceSample: 'FOB Verde: 9,00 – 28,00 $/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Costa Rica'),
    },
    {
      id: 'panama',
      name: 'Panamá',
      flag: '🇵🇦',
      continent: 'América Latina',
      type: 'Exportador Verde',
      lat: 8.7833,
      lng: -82.4333,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Panamá').length,
      highlight: 'Boquete (Volcán Barú) · Cuna mundial del Geisha y lotes de subasta Best of Panama',
      priceSample: 'FOB Verde: 35,00 – 250,00+ $/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Panamá'),
    },
    {
      id: 'honduras',
      name: 'Honduras',
      flag: '🇭🇳',
      continent: 'América Latina',
      type: 'Exportador Verde',
      lat: 14.8667,
      lng: -88.0333,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Honduras').length,
      highlight: 'Santa Bárbara (Peña Blanca) · Terruño volcánico y campeones de Cup of Excellence',
      priceSample: 'FOB Verde: 7,50 – 22,00 $/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Honduras'),
    },
    {
      id: 'peru',
      name: 'Perú',
      flag: '🇵🇪',
      continent: 'América Latina',
      type: 'Exportador Verde',
      lat: -5.7000,
      lng: -78.8000,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Perú').length,
      highlight: 'Jaén, Cajamarca & San Ignacio · Cooperativas líderes en café orgánico y comercio justo',
      priceSample: 'FOB Verde: 6,50 – 16,00 $/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Perú'),
    },
    {
      id: 'mexico',
      name: 'México',
      flag: '🇲🇽',
      continent: 'América Latina',
      type: 'Exportador Verde',
      lat: 19.4500,
      lng: -96.9500,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'México').length,
      highlight: 'Veracruz (Coatepec), Oaxaca (Pluma Hidalgo) & Chiapas · Typica antigua de sombra',
      priceSample: 'FOB Verde: 7,00 – 18,50 $/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'México'),
    },

    // --- ÁFRICA ---
    {
      id: 'ethiopia',
      name: 'Etiopía',
      flag: '🇪🇹',
      continent: 'África',
      type: 'Hub Grano Verde & Tostado',
      lat: 9.0250,
      lng: 38.7469,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Etiopía').length,
      highlight: 'Addis Abeba, Guji, Yirgacheffe & Sidama · Cuna botánica y estaciones de lavado',
      priceSample: 'FOB Verde: 6,80 – 26,00 $/kg | Tostado: 15-19$/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Etiopía'),
    },
    {
      id: 'kenya',
      name: 'Kenia',
      flag: '🇰🇪',
      continent: 'África',
      type: 'Exportador Verde',
      lat: -1.2921,
      lng: 36.8219,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Kenia').length,
      highlight: 'Nairobi, Nyeri & Kirinyaga · Sacos de grano verde Grado AA (SL28 / SL34)',
      priceSample: 'FOB Verde: 9,50 – 28,00 $/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Kenia'),
    },
    {
      id: 'rwanda',
      name: 'Ruanda',
      flag: '🇷🇼',
      continent: 'África',
      type: 'Exportador Verde',
      lat: -1.9403,
      lng: 29.8739,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Ruanda').length,
      highlight: 'Lago Kivu & Huye Mountain · Cien por cien Red Bourbon lavado de altitud',
      priceSample: 'FOB Verde: 7,80 – 22,00 $/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Ruanda'),
    },
    {
      id: 'burundi',
      name: 'Burundi',
      flag: '🇧🇮',
      continent: 'África',
      type: 'Exportador Verde',
      lat: -3.3731,
      lng: 29.9189,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Burundi').length,
      highlight: 'Kayanza & Ngozi (Colinas Heza y Bukeye) · Proyectos de impacto social y cata 87+',
      priceSample: 'FOB Verde: 8,90 – 26,00 $/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Burundi'),
    },
    {
      id: 'uganda',
      name: 'Uganda',
      flag: '🇺🇬',
      continent: 'África',
      type: 'Exportador Verde',
      lat: 1.0800,
      lng: 34.1800,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Uganda').length,
      highlight: 'Monte Elgon & Montañas Rwenzori · Arábica de altura y Fine Robusta de especialidad',
      priceSample: 'FOB Verde: 5,80 – 16,00 $/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Uganda'),
    },

    // --- ASIA & PACÍFICO ---
    {
      id: 'thailand',
      name: 'Tailandia',
      flag: '🇹🇭',
      continent: 'Asia & Pacífico',
      type: 'Hub Grano Verde & Tostado',
      lat: 18.7883,
      lng: 98.9853,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Tailandia').length,
      highlight: 'Chiang Mai & Chiang Rai · Grano verde de altura, procesos con levaduras y tueste',
      priceSample: 'Verde: 7,20-15$ | Tostado: 14,50-32€/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Tailandia'),
    },
    {
      id: 'indonesia',
      name: 'Indonesia',
      flag: '🇮🇩',
      continent: 'Asia & Pacífico',
      type: 'Exportador Verde',
      lat: 2.7000,
      lng: 98.5000,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Indonesia').length,
      highlight: 'Sumatra (Lago Toba) · Proceso tradicional Wet-Hulled (Giling Basah) y microlotes',
      priceSample: 'FOB Verde: 7,00 – 24,00 $/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Indonesia'),
    },
    {
      id: 'vietnam',
      name: 'Vietnam',
      flag: '🇻🇳',
      continent: 'Asia & Pacífico',
      type: 'Hub Grano Verde & Tostado',
      lat: 11.9404,
      lng: 108.4583,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Vietnam').length,
      highlight: 'Da Lat (1.600m) · Fincas pioneras en Pacamara de especialidad y fermentaciones',
      priceSample: 'Verde: 8,50-26$ | Tostado: 17-28€/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Vietnam'),
    },
    {
      id: 'india',
      name: 'India',
      flag: '🇮🇳',
      continent: 'Asia & Pacífico',
      type: 'Exportador Verde',
      lat: 18.3333,
      lng: 82.8833,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'India').length,
      highlight: 'Valle de Araku (Ghats Orientales) · Café arábica 100% regenerativo y biodinámico',
      priceSample: 'FOB Verde: 9,00 – 24,00 $/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'India'),
    },
    {
      id: 'png',
      name: 'Papúa Nueva Guinea',
      flag: '🇵🇬',
      continent: 'Asia & Pacífico',
      type: 'Exportador Verde',
      lat: -5.8500,
      lng: 144.2300,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Papúa Nueva Guinea').length,
      highlight: 'Valle de Wahgi · Varietal Typica con linaje introducido de Jamaica Blue Mountain',
      priceSample: 'FOB Verde: 8,00 – 20,00 $/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Papúa Nueva Guinea'),
    },
    {
      id: 'japan',
      name: 'Japón',
      flag: '🇯🇵',
      continent: 'Asia & Pacífico',
      type: 'Tostador B2B',
      lat: 35.6762,
      lng: 139.6503,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Japón').length,
      highlight: 'Tokio (Sumida) · Tostadurías de culto y microtuestes limpios en máquinas vintage',
      priceSample: 'Tostado B2B: 29,00 – 58,00 €/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Japón'),
    },

    // --- EUROPA ---
    {
      id: 'spain',
      name: 'España',
      flag: '🇪🇸',
      continent: 'Europa',
      type: 'Hub Grano Verde & Tostado',
      lat: 41.3879,
      lng: 2.1699,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'España').length,
      highlight: 'Barcelona & Castelldefels · Mayor importador verde (Mare Terra) y tostadurías top',
      priceSample: 'Verde: 8,50-24$ | Tostado: 22-34€/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'España'),
    },
    {
      id: 'germany',
      name: 'Alemania',
      flag: '🇩🇪',
      continent: 'Europa',
      type: 'Hub Grano Verde & Tostado',
      lat: 53.5511,
      lng: 9.9937,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Alemania').length,
      highlight: 'Hamburgo (Puerto verde) & Berlín · Traders centenarios y tueste nórdico (The Barn)',
      priceSample: 'Verde: 7,50-30$ | Tostado: 28-42€/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Alemania'),
    },
    {
      id: 'netherlands',
      name: 'Países Bajos',
      flag: '🇳🇱',
      continent: 'Europa',
      type: 'Importador Verde',
      lat: 52.3676,
      lng: 4.9041,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Países Bajos').length,
      highlight: 'Ámsterdam & Puerto de Rotterdam · Importador verde de especialidad (Trabocca)',
      priceSample: 'Verde: 8,00 – 32,00 USD/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Países Bajos'),
    },
    {
      id: 'uk',
      name: 'Reino Unido',
      flag: '🇬🇧',
      continent: 'Europa',
      type: 'Hub Grano Verde & Tostado',
      lat: 51.5074,
      lng: -0.1278,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Reino Unido').length,
      highlight: 'Londres · DRWakefield (importador verde) y Square Mile (James Hoffmann)',
      priceSample: 'Verde: 7,50-26$ | Tostado: 28-44€/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Reino Unido'),
    },
    {
      id: 'italy',
      name: 'Italia',
      flag: '🇮🇹',
      continent: 'Europa',
      type: 'Hub Grano Verde & Tostado',
      lat: 45.6495,
      lng: 13.7768,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Italia').length,
      highlight: 'Trieste (Sandalj Trading) & Forlì · Importación puerto franco y campeón mundial Gardelli',
      priceSample: 'Verde: 7,00-35$ | Tostado: 35-80€/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Italia'),
    },
    {
      id: 'france',
      name: 'Francia',
      flag: '🇫🇷',
      continent: 'Europa',
      type: 'Importador Verde',
      lat: 44.8378,
      lng: -0.5792,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Francia').length,
      highlight: 'Burdeos / Le Havre · Importador verde líder en abastecimiento directo (Belco)',
      priceSample: 'Verde: 7,80 – 28,00 USD/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Francia'),
    },
    {
      id: 'denmark',
      name: 'Dinamarca',
      flag: '🇩🇰',
      continent: 'Europa',
      type: 'Tostador B2B',
      lat: 55.6761,
      lng: 12.5683,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Dinamarca').length,
      highlight: 'Copenhague · The Coffee Collective, transparencia total y tueste nórdico de referencia',
      priceSample: 'Tostado B2B: 29,50 – 47,00 €/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Dinamarca'),
    },

    // --- NORTEAMÉRICA & OCEANÍA ---
    {
      id: 'usa',
      name: 'Estados Unidos',
      flag: '🇺🇸',
      continent: 'Norteamérica & Oceanía',
      type: 'Hub Grano Verde & Tostado',
      lat: 44.9778,
      lng: -93.2650,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Estados Unidos').length,
      highlight: 'Minneapolis & Arkansas · Cafe Imports (importador verde) y Onyx Coffee Lab (tostador)',
      priceSample: 'Verde: 7,50-38$ | Tostado: 28-50$/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Estados Unidos'),
    },
    {
      id: 'australia',
      name: 'Australia',
      flag: '🇦🇺',
      continent: 'Norteamérica & Oceanía',
      type: 'Tostador B2B',
      lat: -35.2809,
      lng: 149.1300,
      suppliersCount: B2B_SUPPLIERS.filter(s => s.country === 'Australia').length,
      highlight: 'Canberra & Sídney · Ona Coffee (Saša Šestić) e innovación en Maceración Carbónica',
      priceSample: 'Tostado B2B: 25,00 – 45,00 €/kg',
      suppliers: B2B_SUPPLIERS.filter(s => s.country === 'Australia'),
    }
  ];

  const continents = ['Todos', 'América Latina', 'África', 'Asia & Pacífico', 'Europa', 'Norteamérica & Oceanía'];

  const displayedHubs = selectedContinent === 'Todos' 
    ? hubs 
    : hubs.filter(h => h.continent === selectedContinent);

  const activeHub = hubs.find(h => h.id === activeHubId) || hubs[0];

  const JAWG_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhIjoiYWNfOHk0bmc2YngiLCJqdGkiOiJlZTJmMGU5MiJ9.3st0oT1vhQW-IPx5KhmE4x4cak5NLVJUVR0-Eo2CL_s';
  const [mapTheme, setMapTheme] = useState<'jawg-light' | 'jawg-sunny' | 'jawg-dark' | 'jawg-streets'>('jawg-light');
  const tileLayerRef = useRef<L.TileLayer | null>(null);

  // Initialize Minimalist Leaflet Map with Jawg Maps API
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    // Create Map focused on global coffee belt & trade hubs
    const map = L.map(mapContainerRef.current, {
      center: [15, 10],
      zoom: 2.1,
      minZoom: 1.8,
      maxZoom: 12,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
    });

    // Jawg Maps API Minimalist Retina Tile Layer
    const tileLayer = L.tileLayer(`https://tile.jawg.io/${mapTheme}/{z}/{x}/{y}{r}.png?access-token=${JAWG_ACCESS_TOKEN}`, {
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map);

    tileLayerRef.current = tileLayer;
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

  // Sync theme changes with Jawg Maps API
  useEffect(() => {
    if (tileLayerRef.current) {
      tileLayerRef.current.setUrl(`https://tile.jawg.io/${mapTheme}/{z}/{x}/{y}{r}.png?access-token=${JAWG_ACCESS_TOKEN}`);
    }
  }, [mapTheme]);

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

  const handleContinentClick = (continent: string) => {
    setSelectedContinent(continent);
    if (!mapInstanceRef.current) return;

    if (continent === 'América Latina') {
      mapInstanceRef.current.flyTo([0, -75], 3.2, { duration: 1 });
    } else if (continent === 'África') {
      mapInstanceRef.current.flyTo([2, 30], 3.5, { duration: 1 });
    } else if (continent === 'Asia & Pacífico') {
      mapInstanceRef.current.flyTo([15, 105], 3.3, { duration: 1 });
    } else if (continent === 'Europa') {
      mapInstanceRef.current.flyTo([48, 10], 4.2, { duration: 1 });
    } else if (continent === 'Norteamérica & Oceanía') {
      mapInstanceRef.current.flyTo([20, -40], 2.4, { duration: 1 });
    } else {
      mapInstanceRef.current.flyTo([15, 10], 2.1, { duration: 1 });
    }
  };

  const handleZoom = (delta: number) => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setZoom(mapInstanceRef.current.getZoom() + delta);
    }
  };

  const handleReset = () => {
    setSelectedContinent('Todos');
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([15, 10], 2.1, { duration: 0.8 });
    }
  };

  return (
    <div className="bg-white border border-[#e6e3da] rounded-2xl p-4 sm:p-6 shadow-xs overflow-hidden">
      {/* Top Header - Minimal & Editorial */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 pb-3 border-b border-[#f0eee6]">
        <div>
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#e94e2b] uppercase tracking-wider mb-0.5">
            <Sparkles size={12} />
            <span>Radar Global de Materia Prima & Tostadores</span>
          </div>
          <h2 className="font-serif font-bold text-lg sm:text-xl text-ink">
            Exportadores de café verde en origen, importadores y tostadoras B2B
          </h2>
          <p className="text-[11px] text-stone-500 mt-0.5">
            {hubs.length} países clave del cinturón cafetero y centros mundiales de tueste y distribución.
          </p>
        </div>

        {/* Continents Switcher */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
          {continents.map((cont) => (
            <button
              key={cont}
              onClick={() => handleContinentClick(cont)}
              className={`px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedContinent === cont
                  ? 'bg-ink text-white font-bold shadow-xs'
                  : 'bg-[#f4f2ec] text-stone-700 hover:bg-stone-200 border border-transparent'
              }`}
            >
              {cont}
            </button>
          ))}
        </div>
      </div>

      {/* Country Pills row */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-3 scrollbar-none border-b border-[#f0eee6]">
        {displayedHubs.map((hub) => (
          <button
            key={hub.id}
            onClick={() => handleHubClick(hub)}
            className={`px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1 shrink-0 ${
              activeHubId === hub.id
                ? 'bg-stone-900 text-white font-bold'
                : 'bg-white border border-[#e6e3da] text-stone-700 hover:border-stone-400'
            }`}
          >
            <span>{hub.flag}</span>
            <span>{hub.name}</span>
            <span className="text-[9px] opacity-70 font-mono">({hub.suppliersCount})</span>
          </button>
        ))}
      </div>

      {/* Leaflet Real Map Container with Jawg Maps API */}
      <div className="relative w-full aspect-[21/10] sm:aspect-[21/8] bg-[#f8f6f0] border border-[#e6e3da] rounded-xl overflow-hidden mb-4">
        <div ref={mapContainerRef} className="w-full h-full z-0" />

        {/* Minimal Float Controls (Zoom + Reset + Jawg Style Switcher) */}
        <div className="absolute right-3 top-3 z-10 flex flex-col gap-1 bg-white/95 backdrop-blur-xs border border-[#e6e3da] rounded-lg p-1 shadow-sm">
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
          <div className="h-px bg-[#e6e3da] my-0.5" />
          {/* Map theme toggles */}
          <button
            onClick={() => setMapTheme('jawg-light')}
            className={`w-7 h-7 flex items-center justify-center rounded text-[10px] font-bold transition-colors ${
              mapTheme === 'jawg-light' ? 'bg-stone-900 text-white' : 'text-stone-600 hover:bg-stone-100'
            }`}
            title="Estilo Minimal Claro"
          >
            L
          </button>
          <button
            onClick={() => setMapTheme('jawg-sunny')}
            className={`w-7 h-7 flex items-center justify-center rounded text-[10px] font-bold transition-colors ${
              mapTheme === 'jawg-sunny' ? 'bg-amber-600 text-white' : 'text-stone-600 hover:bg-stone-100'
            }`}
            title="Estilo Cálido Soleado"
          >
            S
          </button>
          <button
            onClick={() => setMapTheme('jawg-dark')}
            className={`w-7 h-7 flex items-center justify-center rounded text-[10px] font-bold transition-colors ${
              mapTheme === 'jawg-dark' ? 'bg-black text-white' : 'text-stone-600 hover:bg-stone-100'
            }`}
            title="Estilo Oscuro Minimal"
          >
            D
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
            <span>Importador Verde (Sacos UE / USA)</span>
          </div>
        </div>

        {/* Jawg Maps API Tag */}
        <div className="absolute right-3 bottom-1.5 z-10 text-[9px] text-stone-400 opacity-80 pointer-events-none">
          © JawgMaps · © OpenStreetMap
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
                  <span className="text-[10px] text-stone-400 font-medium">
                    · {activeHub.continent}
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
                    <span className="text-[9px] text-stone-400 font-mono truncate max-w-[110px]">
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
