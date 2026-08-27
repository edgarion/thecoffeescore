import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ShoppingBag, ExternalLink, Flame, MapPin, Award } from 'lucide-react';
import { useCart } from '../../context/CartContext';

import { showToast } from '../../hooks/useToast';

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
    process: "Lavado + Natural",
    altitude: "1.950 m",
    notes: ["Chocolate negro", "Ciruela madura", "Nuez pecana"],
    scaScore: 87.8,
    price: 24.50,
    weight: "500g (2x250g)",
    image: "/assets/bag.png",
    storeUrl: "https://threemarkscoffee.com/collections/coffee",
    badge: "Pack Ahorro",
    isNew: true,
  },
  {
    id: "rightside-ancizar",
    roaster: "Right Side Coffee",
    district: "Castelldefels / BCN",
    name: "Ancizar Narváez Filtro",
    origin: "Nariño · Colombia",
    process: "Lavado",
    altitude: "2.050 m",
    notes: ["Cítricos dulces", "Té negro", "Bergamota"],
    scaScore: 89.0,
    price: 21.00,
    weight: "250g",
    image: "/assets/products/nomad-shakiso.png",
    storeUrl: "https://rightsidecoffee.com/collections/coffee",
    badge: "Edición Limitada",
    isNew: true,
  },
  {
    id: "syra-yirgacheffe",
    roaster: "Syra Coffee",
    district: "Poblenou / Eixample",
    name: "Yirgacheffe Orgánico Sidamo",
    origin: "Yirgacheffe · Etiopía",
    process: "Lavado",
    altitude: "2.150 m",
    notes: ["Limoncillo", "Jazmín", "Miel de flores"],
    scaScore: 88.0,
    price: 16.00,
    weight: "250g",
    image: "/assets/products/nomad-samuel.png",
    storeUrl: "https://syra.coffee/collections/coffee",
    badge: "100% Orgánico",
    isNew: true,
  },
  {
    id: "three-marks-kenya",
    roaster: "Three Marks Coffee",
    district: "Fort Pienc",
    name: "Kenya Kirinyaga AA",
    origin: "Kirinyaga · Kenia",
    process: "Lavado Doble",
    altitude: "1.800 m",
    notes: ["Grosella negra", "Ruibarbo", "Lima kaffir"],
    scaScore: 89.5,
    price: 19.00,
    weight: "250g",
    image: "/assets/bag.png",
    storeUrl: "https://threemarkscoffee.com/collections/coffee",
    badge: "Puntuación 89.5",
    isNew: true,
  }
];

export const BarcelonaCoffeeSlider: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCart();
  const [activeFilter, setActiveFilter] = useState<string>('Todos');

  const filters = ['Todos', 'Nomad Coffee', 'Right Side Coffee', 'Syra Coffee', 'Three Marks Coffee'];

  const filteredCoffees = activeFilter === 'Todos'
    ? BARCELONA_SPECIALTY_COFFEES
    : BARCELONA_SPECIALTY_COFFEES.filter(c => c.roaster === activeFilter);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleAddToCart = (coffee: BarcelonaCoffeeItem) => {
    addItem({
      productId: coffee.id,
      productName: `${coffee.roaster} — ${coffee.name}`,
      productImage: coffee.image,
      selectedStore: `${coffee.roaster} (Oficial BCN)`,
      storeUrl: coffee.storeUrl,
      unitPrice: coffee.price,
      quantity: 1,
    });
    showToast(`☕ ${coffee.name} añadido a tu cesta`, 'success');
  };

  return (
    <section className="wrap py-2">
      <div className="bg-gradient-to-br from-[#f8f6f0] via-[#fbfaf7] to-[#f4f1ea] border border-[#e6e3da] rounded-3xl p-5 sm:p-7 md:p-8 shadow-sm">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#fdece7] text-[#e94e2b] text-[11px] font-bold px-3 py-1 rounded-full mb-2 shadow-sm">
              <Flame size={13} className="shrink-0" />
              <span>Tueste Fresco Semanal en Barcelona</span>
            </div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ink leading-tight">
              Nuevos cafés de cafeterías de especialidad de Barcelona
            </h2>
            <p className="text-xs sm:text-sm text-[#6b6a63] mt-1.5 max-w-2xl leading-relaxed">
              Selección de microlotes recién tostados por los mejores tostadores artesanos de Barcelona. Precios oficiales verificados y notas de cata SCA.
            </p>
          </div>

          {/* Controls & See All */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/cafe"
              className="text-xs font-bold text-[#2f6fed] hover:underline hidden sm:inline-flex items-center gap-1"
            >
              <span>Ver catálogo completo</span>
              <span>→</span>
            </Link>

            <div className="flex items-center gap-1.5 bg-white border border-[#e6e3da] rounded-full p-1 shadow-sm">
              <button
                onClick={() => handleScroll('left')}
                className="w-8 h-8 rounded-full flex items-center justify-center text-ink hover:bg-stone-100 transition-colors"
                aria-label="Anterior café"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="w-8 h-8 rounded-full flex items-center justify-center text-ink hover:bg-stone-100 transition-colors"
                aria-label="Siguiente café"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-4 scrollbar-none">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeFilter === filter
                  ? 'bg-ink text-white shadow-sm font-bold'
                  : 'bg-white border border-[#e6e3da] text-stone-700 hover:border-stone-400'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Slider Carousel Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {filteredCoffees.map((coffee) => (
            <div
              key={coffee.id}
              className="snap-start shrink-0 w-[270px] sm:w-[290px] md:w-[310px] bg-white border border-[#e6e3da] hover:border-stone-400 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group"
            >
              <div>
                {/* Top Badge & Roaster */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-1 text-[11px] font-bold text-stone-700 truncate">
                    <MapPin size={12} className="text-[#e94e2b] shrink-0" />
                    <span className="truncate">{coffee.district}</span>
                  </div>

                  {coffee.badge ? (
                    <span className="bg-[#eef4ff] text-[#2f6fed] text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 font-mono">
                      {coffee.badge}
                    </span>
                  ) : coffee.isNew ? (
                    <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
                      Novedad
                    </span>
                  ) : null}
                </div>

                {/* Coffee Bag Image */}
                <div className="w-full h-36 bg-[#fbfaf7] border border-[#f0eee6] rounded-xl mb-3 flex items-center justify-center p-3 overflow-hidden relative group-hover:bg-[#f5f2e9] transition-colors">
                  {coffee.scaScore && (
                    <div className="absolute top-2 left-2 bg-black/80 backdrop-blur-xs text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-sm font-mono">
                      <Award size={11} className="text-amber-400" />
                      <span>{coffee.scaScore} SCA</span>
                    </div>
                  )}
                  <img
                    src={coffee.image}
                    alt={coffee.name}
                    className="max-h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                  />
                </div>

                {/* Roaster Brand */}
                <div className="text-[11px] font-bold text-[#e94e2b] uppercase tracking-wider mb-0.5">
                  {coffee.roaster}
                </div>

                {/* Coffee Title */}
                <h3 className="font-bold text-sm sm:text-base text-ink line-clamp-1 mb-1 leading-snug">
                  {coffee.name}
                </h3>

                {/* Origin & Process */}
                <p className="text-xs text-stone-500 mb-2.5 flex items-center gap-1">
                  <span>{coffee.origin}</span>
                  <span>·</span>
                  <span className="font-medium text-stone-700">{coffee.process}</span>
                </p>

                {/* Tasting Notes Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {coffee.notes.map((note, idx) => (
                    <span
                      key={idx}
                      className="bg-[#f4f2ec] text-stone-700 text-[10px] font-medium px-2 py-0.5 rounded-md border border-[#e6e3da]/60"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Price & Add to Cart Action */}
              <div className="pt-3 border-t border-[#e6e3da] mt-auto">
                <div className="flex items-baseline justify-between mb-2.5">
                  <div className="flex items-baseline gap-1">
                    <span className="font-extrabold text-lg text-ink font-mono">{coffee.price.toFixed(2)} €</span>
                    <span className="text-[11px] text-stone-500 font-medium">/ {coffee.weight}</span>
                  </div>
                  <a
                    href={coffee.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-[#2f6fed] hover:underline inline-flex items-center gap-0.5"
                    title={`Ver en tienda de ${coffee.roaster}`}
                  >
                    <span>Tienda oficial</span>
                    <ExternalLink size={10} />
                  </a>
                </div>

                <button
                  onClick={() => handleAddToCart(coffee)}
                  className="w-full bg-ink hover:bg-black text-white font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-98"
                >
                  <ShoppingBag size={14} className="text-[#e94e2b]" />
                  <span>Añadir a la Cesta</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
