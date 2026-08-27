import React, { useState, useMemo } from 'react';
import { B2B_SUPPLIERS, B2BSupplier } from '../data/b2bSuppliers';
import { B2BWorldMap } from '../components/b2b/B2BWorldMap';
import { showToast } from '../hooks/useToast';

export const B2BSuppliersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContinent, setSelectedContinent] = useState<string>('Todos');
  const [selectedCountry, setSelectedCountry] = useState<string>('Todos');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [inquirySupplier, setInquirySupplier] = useState<B2BSupplier | null>(null);

  // Form state
  const [companyName, setCompanyName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [message, setMessage] = useState('');

  const continents = ['Todos', 'América Latina', 'África', 'Asia & Pacífico', 'Europa', 'Norteamérica & Oceanía'];
  
  const allCountries = useMemo(() => {
    const list = selectedContinent === 'Todos'
      ? B2B_SUPPLIERS
      : B2B_SUPPLIERS.filter(s => s.continent === selectedContinent);
    return ['Todos', ...Array.from(new Set(list.map(s => s.country)))];
  }, [selectedContinent]);

  const categories = ['Todos', 'Exportador Café Verde', 'Importador Café Verde', 'Tostador B2B'];

  const filteredSuppliers = useMemo(() => {
    return B2B_SUPPLIERS.filter(supplier => {
      const matchContinent = selectedContinent === 'Todos' || supplier.continent === selectedContinent;
      const matchCountry = selectedCountry === 'Todos' || supplier.country === selectedCountry;
      const matchCategory = selectedCategory === 'Todos' || supplier.category === selectedCategory;
      const matchSearch = searchQuery === '' || 
        supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        supplier.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        supplier.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
        supplier.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        supplier.originsOrCapacity.some(o => o.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchContinent && matchCountry && matchCategory && matchSearch;
    });
  }, [searchQuery, selectedContinent, selectedCountry, selectedCategory]);

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName || !contactEmail || !message) {
      showToast('Por favor completa los campos obligatorios (*)', 'warning');
      return;
    }
    showToast(`Solicitud enviada a ${inquirySupplier?.name}. El equipo comercial contactará en menos de 24h.`, 'success');
    setInquirySupplier(null);
    setCompanyName('');
    setContactEmail('');
    setContactPhone('');
    setMessage('');
  };

  return (
    <div className="pb-20 space-y-8">
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-[#f8f6f0] via-[#fbfaf7] to-white border-b border-[#e6e3da] pt-8 pb-10">
        <div className="wrap">
          <div className="inline-flex items-center bg-[#eef4ff] text-[#2f6fed] text-xs font-bold px-3.5 py-1 rounded-full mb-3 shadow-2xs">
            <span>DIRECTORIO B2B MUNDIAL & MATERIA PRIMA</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-ink leading-tight mb-4">
            Exportadores de café verde, importadores en sacos y tostadoras
          </h1>

          <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed mb-6">
            Directorio verificado con contactos directos en los 28 principales orígenes y hubs mundiales (Colombia, Etiopía, Brasil, Panamá, Kenia, España, Alemania, Japón...), precios de referencia de materia prima y cotizaciones B2B.
          </p>

          {/* Search Box */}
          <div className="relative max-w-xl">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por exportador, país (Colombia, Panamá, Kenia...), variedad (Geisha, SL28...) o tostador..."
              className="w-full bg-white border border-[#e6e3da] focus:border-ink rounded-xl px-4 py-3 text-xs sm:text-sm outline-none shadow-xs transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-ink text-xs font-bold"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE WORLD MAP WITH POINTERS */}
      <section className="wrap">
        <B2BWorldMap
          selectedCountry={selectedCountry}
          onSelectCountry={(country) => {
            setSelectedCountry(country);
            showToast(`Mostrando proveedores de ${country}`, 'info');
          }}
        />
      </section>

      {/* 3. PRICE INDEX BENCHMARK OVERVIEW */}
      <section className="wrap">
        <div className="bg-[#f4f2ec] border border-[#e6e3da] rounded-2xl p-5 sm:p-6 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-ink">
                Índice de Precios de Referencia del Mercado Mundial
              </h3>
              <p className="text-[11px] text-stone-500">
                Valores promedio FOB en origen para café verde (materia prima), importación en sacos y café tostado mayorista
              </p>
            </div>
            <span className="text-[10px] font-mono bg-white border border-[#e6e3da] text-stone-600 px-2.5 py-1 rounded-full shrink-0">
              Base: Contratos Direct Trade 2026
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div className="bg-white border border-[#e6e3da] rounded-xl p-3.5">
              <div className="text-[10px] font-bold text-[#10b981] uppercase tracking-wider mb-1">
                Café Verde en Origen (FOB)
              </div>
              <div className="text-base font-extrabold text-ink font-mono mb-1">
                6,50 – 28,00 USD / kg
              </div>
              <p className="text-[10px] text-stone-500 leading-snug">
                Etiopía (7-26 $), Colombia (8-22 $), Kenia AA (9-28 $), Brasil (6-35 $). Sacos 30kg - 60kg GrainPro.
              </p>
            </div>

            <div className="bg-white border border-[#e6e3da] rounded-xl p-3.5">
              <div className="text-[10px] font-bold text-[#e94e2b] uppercase tracking-wider mb-1">
                Café Tostado B2B Mayorista
              </div>
              <div className="text-base font-extrabold text-ink font-mono mb-1">
                18,00 – 45,00 € / kg
              </div>
              <p className="text-[10px] text-stone-500 leading-snug">
                España (22 - 34 €), Alemania/UK (28 - 44 €), Japón (~29 - 58 €). Envíos semanales bajo demanda.
              </p>
            </div>

            <div className="bg-white border border-[#e6e3da] rounded-xl p-3.5">
              <div className="text-[10px] font-bold text-[#f59e0b] uppercase tracking-wider mb-1">
                Microlotes Exclusivos & Geisha
              </div>
              <div className="text-base font-extrabold text-ink font-mono mb-1">
                35,00 – 250,00+ USD / kg
              </div>
              <p className="text-[10px] text-stone-500 leading-snug">
                Panamá Boquete BOP (35 - 250 $+), Daterra Masterpieces, Etiopía 89+ SCA, fermentaciones anaeróbicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MULTI-FILTERS */}
      <section className="wrap space-y-3">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs font-bold text-stone-400 mr-1 shrink-0">Continente:</span>
          {continents.map(cont => (
            <button
              key={cont}
              onClick={() => {
                setSelectedContinent(cont);
                setSelectedCountry('Todos');
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedContinent === cont
                  ? 'bg-ink text-white shadow-xs font-bold'
                  : 'bg-white border border-[#e6e3da] text-stone-700 hover:border-stone-400'
              }`}
            >
              {cont}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-[#e6e3da]">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold text-stone-400 mr-1 shrink-0">País ({allCountries.length - 1}):</span>
            {allCountries.map(country => (
              <button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCountry === country
                    ? 'bg-stone-900 text-white shadow-xs font-bold'
                    : 'bg-[#f4f2ec] text-stone-700 hover:bg-stone-200 border border-transparent'
                }`}
              >
                {country}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold text-stone-400 mr-1 shrink-0">Tipo:</span>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#2f6fed] text-white shadow-xs font-bold'
                    : 'bg-white border border-[#e6e3da] text-stone-700 hover:border-stone-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SUPPLIERS DIRECTORY GRID */}
      <section className="wrap">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs text-stone-500 font-medium">
            Mostrando <strong className="text-ink">{filteredSuppliers.length}</strong> proveedores e importadores verificados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSuppliers.map((supplier) => (
            <div
              key={supplier.id}
              className="bg-white border border-[#e6e3da] hover:border-stone-400 rounded-2xl p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base leading-none">{supplier.flag}</span>
                    <span className="text-[11px] font-bold text-stone-700">{supplier.country}</span>
                    <span className="text-stone-300">·</span>
                    <span className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded font-medium truncate max-w-[120px]">
                      {supplier.category}
                    </span>
                  </div>

                  {supplier.highlightBadge && (
                    <span className="bg-[#fdece7] text-[#e94e2b] text-[9px] font-bold px-2 py-0.5 rounded-full font-mono">
                      {supplier.highlightBadge}
                    </span>
                  )}
                </div>

                <h3 className="font-serif font-bold text-lg text-ink leading-snug mb-1">
                  {supplier.name}
                </h3>

                <div className="text-[11px] text-stone-500 mb-3">
                  <span className="truncate">{supplier.region}</span>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {supplier.description}
                </p>

                <div className="bg-[#fbfaf7] border border-[#ece8df] rounded-xl p-3.5 mb-4 space-y-1.5 text-xs">
                  {supplier.priceIndex.greenFobKg && (
                    <div className="flex justify-between items-center">
                      <span className="text-stone-500 font-medium">Precio FOB Café Verde:</span>
                      <span className="font-extrabold text-ink font-mono">{supplier.priceIndex.greenFobKg}</span>
                    </div>
                  )}
                  {supplier.priceIndex.wholesaleKg && (
                    <div className="flex justify-between items-center">
                      <span className="text-stone-500 font-medium">Índice Mayorista Tostado:</span>
                      <span className="font-extrabold text-ink font-mono">{supplier.priceIndex.wholesaleKg}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center pt-1 border-t border-[#f0eee6] text-[11px]">
                    <span className="text-stone-400">Pedido Mínimo:</span>
                    <span className="font-medium text-stone-700">{supplier.minOrder}</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-stone-400">Plazo de Entrega:</span>
                    <span className="font-medium text-stone-700">{supplier.leadTime}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1.5">
                    Orígenes & Lotes Principales
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {supplier.originsOrCapacity.map((orig, i) => (
                      <span key={i} className="bg-stone-100 text-stone-700 text-[10px] font-medium px-2 py-0.5 rounded-md">
                        {orig}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {supplier.certifications.map((cert, i) => (
                    <span key={i} className="bg-[#eef4ff] text-[#2f6fed] text-[9px] font-bold px-2 py-0.5 rounded-md">
                      <span>{cert}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#e6e3da] space-y-2">
                <div className="flex items-center justify-between text-xs text-stone-600">
                  <a
                    href={`mailto:${supplier.email}`}
                    className="hover:text-ink hover:underline text-[11px] font-semibold text-stone-700 truncate"
                  >
                    <span className="truncate">{supplier.email}</span>
                  </a>

                  <a
                    href={`tel:${supplier.phone.replace(/\s+/g, '')}`}
                    className="hover:text-ink text-[11px] font-semibold text-stone-700 shrink-0"
                  >
                    <span>{supplier.phone}</span>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => setInquirySupplier(supplier)}
                    className="w-full bg-ink hover:bg-black text-white font-bold text-xs py-2 px-2.5 rounded-xl flex items-center justify-center transition-all shadow-2xs"
                  >
                    <span>Cotizar B2B</span>
                  </button>

                  <a
                    href={supplier.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#f4f2ec] hover:bg-stone-200 text-ink font-bold text-xs py-2 px-2.5 rounded-xl flex items-center justify-center transition-colors border border-[#e6e3da]"
                  >
                    <span>Web Oficial →</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INQUIRY / QUOTE MODAL */}
      {inquirySupplier && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white border border-[#e6e3da] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative animate-scaleUp">
            <button
              onClick={() => setInquirySupplier(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-ink p-1 rounded-full hover:bg-stone-100 font-bold text-sm"
              aria-label="Cerrar modal"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 mb-1 text-[#2f6fed] text-xs font-bold">
              <span>{inquirySupplier.flag}</span>
              <span>{inquirySupplier.name}</span>
            </div>

            <h3 className="font-serif font-bold text-xl text-ink mb-1">
              Solicitar Cotización & Muestras B2B
            </h3>
            <p className="text-xs text-stone-500 mb-4">
              Envía una solicitud directa al departamento comercial de {inquirySupplier.name}.
            </p>

            <form onSubmit={handleSendInquiry} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Nombre de la Empresa o Cafetería *</label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Specialty Coffee Lab BCN S.L."
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full bg-[#fbfaf7] border border-[#e6e3da] focus:border-ink rounded-xl px-3.5 py-2 text-xs outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Email Profesional *</label>
                  <input
                    type="email"
                    required
                    placeholder="compras@tuempresa.com"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full bg-[#fbfaf7] border border-[#e6e3da] focus:border-ink rounded-xl px-3.5 py-2 text-xs outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Teléfono / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="+34 600 000 000"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="w-full bg-[#fbfaf7] border border-[#e6e3da] focus:border-ink rounded-xl px-3.5 py-2 text-xs outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Lotes de Interés o Consulta *</label>
                <textarea
                  required
                  rows={3}
                  placeholder={`Ej. Estamos interesados en cotización de café verde de Etiopía Guji (20 sacos) / Suministro semanal tostado (15 kg/semana) para apertura en Barcelona.`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#fbfaf7] border border-[#e6e3da] focus:border-ink rounded-xl px-3.5 py-2 text-xs outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-ink hover:bg-black text-white font-bold text-xs py-3 rounded-xl flex items-center justify-center transition-all shadow-sm"
                >
                  <span>Enviar Consulta Directa</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
