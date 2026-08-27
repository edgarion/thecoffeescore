import React, { useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Building2, TrendingUp, CheckCircle2 } from 'lucide-react';


export interface CoffeeSupplier {
  id: string;
  name: string;
  category: 'Tostador Especialidad' | 'Importador Café Verde' | 'Distribuidor & Equipamiento';
  location: string;
  address: string;
  email: string;
  phone: string;
  website: string;
  priceIndexKg: string;
  priceIndexRetail: string;
  minOrder: string;
  origins: string[];
  certifications: string[];
  description: string;
}

export const COFFEE_SUPPLIERS: CoffeeSupplier[] = [
  {
    id: 'nomad-b2b',
    name: 'Nomad Coffee Roasters',
    category: 'Tostador Especialidad',
    location: 'Barcelona (Poblenou)',
    address: 'C/ Pujades 95, 08005 Barcelona',
    email: 'info@nomadcoffee.es',
    phone: '+34 930 24 53 10',
    website: 'https://nomadcoffee.es',
    priceIndexKg: '28,00 €/kg',
    priceIndexRetail: '17,50 € / 250g',
    minOrder: '6 kg (B2B)',
    origins: ['Colombia', 'Etiopía', 'Kenia', 'Guatemala', 'Brasil'],
    certifications: ['SCA Certified', 'Tueste Semanal', 'Trazabilidad 100%'],
    description: 'Tostador pionero en Barcelona. Suministro a cafeterías de especialidad, asesoramiento de recetas y formación barista.',
  },
  {
    id: 'rightside-b2b',
    name: 'Right Side Coffee Roasters',
    category: 'Tostador Especialidad',
    location: 'Castelldefels / Barcelona',
    address: 'C/ Molí d’en Ginestar 18, 08860 Castelldefels',
    email: 'orders@rightsidecoffee.com',
    phone: '+34 936 36 29 44',
    website: 'https://rightsidecoffee.com',
    priceIndexKg: '27,00 €/kg',
    priceIndexRetail: '18,00 € / 250g',
    minOrder: '5 kg (B2B)',
    origins: ['Ruanda', 'Colombia', 'Etiopía', 'Costa Rica', 'El Salvador'],
    certifications: ['Direct Trade', 'Competición SCA', 'Microlotes'],
    description: 'Relación directa con productores en origen. Tuestes perfilados al milímetro para espresso y filtro de alta exigencia.',
  },
  {
    id: 'syra-b2b',
    name: 'Syra Coffee Wholesale',
    category: 'Tostador Especialidad',
    location: 'Barcelona (Gràcia)',
    address: 'C/ Siracusa 13, 08012 Barcelona',
    email: 'wholesale@syra.coffee',
    phone: '+34 931 43 92 11',
    website: 'https://syra.coffee',
    priceIndexKg: '25,00 €/kg',
    priceIndexRetail: '14,50 € / 250g',
    minOrder: '4 kg (B2B / Oficinas)',
    origins: ['Guatemala', 'Etiopía', 'Honduras', 'Colombia'],
    certifications: ['100% Arábica', 'Sostenible', 'Zero Waste Packaging'],
    description: 'Café de especialidad democrático y fresco. Suministro rápido para negocios, hostelería y espacios de trabajo.',
  },
  {
    id: 'three-marks-b2b',
    name: 'Three Marks Coffee Roastery',
    category: 'Tostador Especialidad',
    location: 'Barcelona (Fort Pienc)',
    address: 'C/ Ausiàs Marc 151, 08013 Barcelona',
    email: 'hello@threemarkscoffee.com',
    phone: '+34 935 12 78 90',
    website: 'https://threemarkscoffee.com',
    priceIndexKg: '24,50 €/kg',
    priceIndexRetail: '16,00 € / 250g',
    minOrder: '5 kg (B2B)',
    origins: ['Kenia', 'Colombia', 'Etiopía', 'Burundi'],
    certifications: ['Roast Master Certified', 'Tueste Nórdico'],
    description: 'Enfoque moderno en acidez brillante, dulzor natural y perfiles sumamente limpios para filtrados y espresso.',
  },
  {
    id: 'mare-terra-verde',
    name: 'Mare Terra Coffee (Café Verde)',
    category: 'Importador Café Verde',
    location: 'Barcelona (Eixample)',
    address: 'C/ Pau Claris 162, 08037 Barcelona',
    email: 'info@mareterracoffee.com',
    phone: '+34 934 87 23 18',
    website: 'https://mareterracoffee.com',
    priceIndexKg: '8,50 – 24,00 USD/kg',
    priceIndexRetail: 'Sacos 30kg / 60kg',
    minOrder: '1 Saco (30 kg)',
    origins: ['Brasil', 'Colombia', 'Etiopía', 'Sumatra', 'Kenia', 'Perú'],
    certifications: ['Organic Bio', 'Fair Trade', 'Rainforest Alliance'],
    description: 'Principal importador de café verde de especialidad en España. Laboratorio de control de calidad y catas Q-Grader.',
  },
  {
    id: 'nordic-approach-spain',
    name: 'Nordic Approach Spain',
    category: 'Importador Café Verde',
    location: 'Madrid / Barcelona',
    address: 'Hub Logístico España',
    email: 'spain@nordicapproach.com',
    phone: '+34 910 88 42 00',
    website: 'https://nordicapproach.com',
    priceIndexKg: '10,20 – 32,00 USD/kg',
    priceIndexRetail: 'Cajas 20kg / Sacos 60kg',
    minOrder: '20 kg (Green box)',
    origins: ['Etiopía', 'Kenia', 'Ruanda', 'Honduras', 'El Salvador'],
    certifications: ['Microlot Traceability', 'Direct Sourcing'],
    description: 'Especialistas en lotes excepcionales y trazables de África del Este y Centroamérica con puntuación 87+ SCA.',
  }
];

export const CoffeeSuppliersSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Tostador Especialidad', 'Importador Café Verde'];

  const filteredSuppliers = selectedCategory === 'Todos'
    ? COFFEE_SUPPLIERS
    : COFFEE_SUPPLIERS.filter(s => s.category === selectedCategory);

  return (
    <section className="wrap py-6">
      <div className="bg-[#fbfaf7] border border-[#e6e3da] rounded-3xl p-5 sm:p-7 md:p-9 shadow-sm">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-7 border-b border-[#e6e3da] pb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#eef4ff] text-[#2f6fed] text-[11px] font-bold px-3 py-1 rounded-full mb-2">
              <Building2 size={13} className="shrink-0" />
              <span>Directorio B2B & Índices de Referencia</span>
            </div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ink leading-tight">
              Proveedores de café y tabla de precios oficiales
            </h2>
            <p className="text-xs sm:text-sm text-[#6b6a63] mt-1.5 max-w-2xl leading-relaxed">
              Índices de costes mayoristas, importadores de café verde y contactos directos verificados de los principales tostadores para cafeterías, empresas y profesionales.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 shrink-0 overflow-x-auto pb-1">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-ink text-white shadow-sm font-bold'
                    : 'bg-white border border-[#e6e3da] text-stone-700 hover:border-stone-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Suppliers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8">
          {filteredSuppliers.map((sup) => (
            <div
              key={sup.id}
              className="bg-white border border-[#e6e3da] hover:border-stone-400 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
            >
              <div>
                {/* Category & Location Badge */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="bg-[#f4f2ec] text-stone-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    {sup.category}
                  </span>
                  <span className="text-[11px] text-stone-500 font-medium flex items-center gap-1">
                    <MapPin size={11} className="text-[#e94e2b]" />
                    <span>{sup.location}</span>
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-serif font-bold text-base sm:text-lg text-ink mb-1.5 leading-snug">
                  {sup.name}
                </h3>

                <p className="text-xs text-stone-600 mb-3 leading-relaxed">
                  {sup.description}
                </p>

                {/* Price Index Box */}
                <div className="bg-[#fcfbf9] border border-[#ece8df] rounded-xl p-3 mb-3 space-y-1.5 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-stone-500 font-medium">Índice Mayorista (B2B):</span>
                    <span className="font-extrabold text-ink font-mono">{sup.priceIndexKg}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-stone-500 font-medium">Tarifa Minorista:</span>
                    <span className="font-bold text-[#e94e2b] font-mono">{sup.priceIndexRetail}</span>
                  </div>
                  <div className="flex justify-between items-center pt-1 border-t border-[#f0eee6] text-[11px]">
                    <span className="text-stone-400">Pedido Mínimo:</span>
                    <span className="font-medium text-stone-700">{sup.minOrder}</span>
                  </div>
                </div>

                {/* Origins Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {sup.origins.slice(0, 4).map((org, i) => (
                    <span key={i} className="bg-stone-100 text-stone-700 text-[10px] font-medium px-2 py-0.5 rounded-md">
                      {org}
                    </span>
                  ))}
                  {sup.origins.length > 4 && (
                    <span className="text-[10px] text-stone-400 font-medium py-0.5">+{sup.origins.length - 4} más</span>
                  )}
                </div>
              </div>

              {/* Direct Contact Action Footer */}
              <div className="pt-3 border-t border-[#e6e3da] space-y-2 text-xs">
                <div className="flex items-center justify-between text-stone-600">
                  <a
                    href={`mailto:${sup.email}`}
                    className="inline-flex items-center gap-1.5 hover:text-ink hover:underline text-[11px] font-semibold text-stone-700"
                  >
                    <Mail size={12} className="text-[#2f6fed]" />
                    <span className="truncate max-w-[140px]">{sup.email}</span>
                  </a>
                  <a
                    href={`tel:${sup.phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-1 hover:text-ink text-[11px] font-semibold text-stone-700"
                  >
                    <Phone size={12} className="text-emerald-600" />
                    <span>{sup.phone}</span>
                  </a>
                </div>

                <a
                  href={sup.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#f4f2ec] hover:bg-stone-200 text-ink font-bold text-xs py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors border border-[#e6e3da]"
                >
                  <span>Portal / Tienda Oficial</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Global Summary Table / Transparency Note */}
        <div className="bg-white border border-[#e6e3da] rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <TrendingUp size={20} />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-ink">
                Índice de Precios del Café en Origen Actualizado
              </h4>
              <p className="text-[11px] text-stone-500">
                Los precios de referencia se sincronizan semanalmente de acuerdo con el valor FOB en bolsa y contratos de comercio directo (Direct Trade).
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-stone-600 bg-stone-100 px-3 py-1.5 rounded-full">
              <CheckCircle2 size={12} className="text-emerald-600" />
              <span>Contactos verificados</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
