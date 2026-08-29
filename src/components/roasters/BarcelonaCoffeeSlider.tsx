import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export interface BarcelonaCoffeeItem {
  id: string;
  roaster: string;
  district: string;
  name: string;
  origin: string;
  process: string;
  altitude?: string;
  notes: string[];
  scaScore?: number;
  price: number;
  weight: string;
  image: string;
  storeUrl: string;
  badge?: string;
  isNew?: boolean;
}

export const BARCELONA_SPECIALTY_COFFEES: BarcelonaCoffeeItem[] = [
  {
    id: "nomad-pink-bourbon",
    roaster: "Nomad Coffee",
    district: "Poblenou / Born",
    name: "Pink Bourbon Fermentado Lote #13",
    origin: "Huila · Colombia",
    process: "Fermentación Anaeróbica",
    altitude: "1.850 m",
    notes: ["Flor de Azahar", "Melocotón blanco", "Miel"],
    scaScore: 89.2,
    price: 19.50,
    weight: "250g",
    image: "/assets/products/nomad-shakiso.png",
    storeUrl: "https://nomadcoffee.es/collections/cafe",
    badge: "Microlote Exclusivo",
    isNew: true,
  },
  {
    id: "nomad-shakiso-hadeso",
    roaster: "Nomad Coffee",
    district: "Poblenou / Born",
    name: "Shakiso Hadeso Natural",
    origin: "Guji · Etiopía",
    process: "Natural",
    altitude: "2.100 m",
    notes: ["Fresa silvestre", "Jazmín", "Arándanos"],
    scaScore: 88.5,
    price: 23.00,
    weight: "250g",
    image: "/assets/products/nomad-shakiso.png",
    storeUrl: "https://nomadcoffee.es/collections/cafe",
    badge: "Top Ventas",
    isNew: true,
  },
  {
    id: "rightside-abasambi",
    roaster: "Right Side Coffee",
    district: "Castelldefels / BCN",
    name: "Abasambi Natural Espresso",
    origin: "Nyamasheke · Ruanda",
    process: "Natural Lento",
    altitude: "1.900 m",
    notes: ["Frutos del bosque", "Vainilla", "Ciruela negra"],
    scaScore: 88.0,
    price: 18.00,
    weight: "250g",
    image: "/assets/bag.png",
    storeUrl: "https://rightsidecoffee.com/collections/coffee",
    badge: "Tueste de Competición",
    isNew: true,
  },
  {
    id: "syra-atitlan",
    roaster: "Syra Coffee",
    district: "Vila de Gràcia",
    name: "Atitlán Guatemala Lote #13",
    origin: "Sololá · Guatemala",
    process: "Lavado Clásico",
    altitude: "1.700 m",
    notes: ["Manzana roja", "Panela", "Cacao 70%"],
    scaScore: 87.0,
    price: 14.50,
    weight: "250g",
    image: "/assets/products/nomad-samuel.png",
    storeUrl: "https://syra.coffee/collections/coffee",
    badge: "Tueste Diario",
    isNew: false,
  },
  {
    id: "three-marks-seasonal",
    roaster: "Three Marks Coffee",
    district: "Fort Pienc / Poblenou",
    name: "Seasonal Espresso Blend",
    origin: "Colombia & Etiopía",
    process: "Lavado & Natural",
    altitude: "1.900 m",
    notes: ["Chocolate con leche", "Albaricoque", "Cítricos"],
    scaScore: 87.5,
    price: 16.00,
    weight: "250g",
    image: "/assets/bag.png",
    storeUrl: "https://threemarkscoffee.com/shop",
    badge: "Fórmula de la Casa",
    isNew: false,
  },
  {
    id: "slowmov-el-mirador",
    roaster: "SlowMov",
    district: "Vila de Gràcia",
    name: "El Mirador Anaeróbico",
    origin: "Pitalito · Huila",
    process: "Anaeróbico 48h",
    altitude: "1.750 m",
    notes: ["Papaya", "Caña de azúcar", "Cardamomo"],
    scaScore: 88.2,
    price: 18.50,
    weight: "250g",
    image: "/assets/products/nomad-shakiso.png",
    storeUrl: "https://slowmov.com/collections/cafes",
    badge: "Tueste Sostenible",
    isNew: true,
  },
  {
    id: "onacoffee-san-rafael",
    roaster: "Ona Coffee BCN",
    district: "Eixample Esquerra",
    name: "San Rafael Carbonic Maceration",
    origin: "Tarrazú · Costa Rica",
    process: "Maceración Carbónica",
    altitude: "1.950 m",
    notes: ["Frambuesa madura", "Vino dulce", "Menta fresca"],
    scaScore: 90.0,
    price: 24.50,
    weight: "200g",
    image: "/assets/bag.png",
    storeUrl: "https://onacoffee.com",
    badge: "Edición Campeones",
    isNew: true,
  },
  {
    id: "saturn-kenya-nyeri",
    roaster: "Saturn Coffee",
    district: "Sant Antoni",
    name: "Nyeri Hill Farm AA",
    origin: "Nyeri · Kenia",
    process: "Lavado Doble",
    altitude: "1.800 m",
    notes: ["Grosella negra", "Ruibarbo", "Pomelo rosado"],
    scaScore: 88.8,
    price: 17.90,
    weight: "250g",
    image: "/assets/products/nomad-samuel.png",
    storeUrl: "https://saturncoffee.com",
    badge: "Tueste Claro Nórdico",
    isNew: true,
  }
];

interface BarcelonaCoffeeSliderProps {
  inline?: boolean;
}

export const BarcelonaCoffeeSlider: React.FC<BarcelonaCoffeeSliderProps> = ({ inline = false }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<string>('Todos');

  const filters = ['Todos', 'Nomad Coffee', 'Right Side', 'Syra Coffee', 'Three Marks', 'SlowMov', 'Ona Coffee'];

  const filteredCoffees = activeFilter === 'Todos'
    ? BARCELONA_SPECIALTY_COFFEES
    : BARCELONA_SPECIALTY_COFFEES.filter(c => c.roaster.toLowerCase().includes(activeFilter.toLowerCase()));

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 280;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const inner = (
    <div className="w-full max-w-full min-w-0 overflow-hidden bg-[#fcfbf9] border border-[#e6e3da] rounded-2xl p-4 sm:p-6 shadow-xs flex flex-col">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-[#ece8df]">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center bg-[#fdece7] text-[#e94e2b] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                <span>TUESTE BCN</span>
              </span>
              <h2 className="font-serif font-bold text-lg sm:text-2xl text-ink">
                Nuevos cafés de especialidad de Barcelona
              </h2>
            </div>
            <p className="text-xs text-[#6b6a63] mt-1">
              Microlotes recién tostados en Barcelona · Precios oficiales verificados
            </p>
          </div>

          {/* Controls & See All */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              to="/cafe"
              className="text-xs font-bold text-[#2f6fed] hover:underline hidden md:inline-flex items-center gap-0.5"
            >
              <span>Ver todo el café →</span>
            </Link>

            <div className="flex items-center gap-1 bg-white border border-[#e6e3da] rounded-full p-1 shadow-2xs">
              <button
                onClick={() => handleScroll('left')}
                className="w-7 h-7 rounded-full flex items-center justify-center text-ink hover:bg-stone-100 transition-colors font-bold text-sm"
                aria-label="Anterior café"
              >
                ←
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="w-7 h-7 rounded-full flex items-center justify-center text-ink hover:bg-stone-100 transition-colors font-bold text-sm"
                aria-label="Siguiente café"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="w-full min-w-0 max-w-full flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 scrollbar-none text-xs">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeFilter === filter
                  ? 'bg-ink text-white shadow-xs font-bold'
                  : 'bg-white border border-[#e6e3da] text-stone-700 hover:border-stone-400'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Slider Carousel Container - 100% Full Width & Zero Overflow */}
        <div
          ref={scrollRef}
          className="w-full min-w-0 max-w-full flex gap-3.5 overflow-x-auto pb-2 pt-0.5 snap-x snap-mandatory scrollbar-none"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {filteredCoffees.map((coffee) => (
            <div
              key={coffee.id}
              className="snap-start shrink-0 w-[200px] sm:w-[220px] bg-white border border-[#e6e3da] hover:border-stone-400 rounded-xl p-3 flex flex-col justify-between shadow-2xs hover:shadow-sm transition-all group"
            >
              <div>
                {/* Coffee Bag Image */}
                <div className="w-full h-24 sm:h-28 bg-[#fbfaf7] border border-[#f0eee6] rounded-lg mb-2 flex items-center justify-center p-2 overflow-hidden relative group-hover:bg-[#f5f2e9] transition-colors">
                  {coffee.scaScore && (
                    <div className="absolute top-1.5 left-1.5 bg-black/80 text-white text-[9px] font-bold px-1.5 py-0.5 rounded font-mono">
                      <span>SCA {coffee.scaScore}</span>
                    </div>
                  )}
                  <img
                    src={coffee.image}
                    alt={coffee.name}
                    className="max-h-full object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>

                {/* Roaster Brand */}
                <div className="text-[10px] font-bold text-[#e94e2b] uppercase tracking-wide">
                  {coffee.roaster}
                </div>

                {/* Coffee Title */}
                <h3 className="font-bold text-xs text-ink line-clamp-1 mb-1">
                  {coffee.name}
                </h3>

                {/* Origin & Process */}
                <p className="text-[10px] text-stone-500 truncate">
                  {coffee.origin} · {coffee.process}
                </p>
              </div>

              {/* Bottom Price & Link */}
              <div className="pt-2 border-t border-[#f0eee6] mt-2 flex items-baseline justify-between">
                <span className="font-extrabold text-sm text-ink font-mono">{coffee.price.toFixed(2)} €</span>
                <a
                  href={coffee.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#2f6fed] hover:underline"
                >
                  Comprar →
                </a>
              </div>
            </div>
          ))}
        </div>
    </div>
  );

  if (inline) return inner;
  return <section className="wrap w-full max-w-full min-w-0 overflow-hidden py-1">{inner}</section>;
};
