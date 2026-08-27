import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GLOBAL_COFFEE_SHOPS, GLOBAL_COFFEE_CITIES } from '../data/globalCoffeeIndex';

export const GlobalCoffeeIndexPage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('Todas');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'score' | 'price' | 'name'>('score');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const filteredShops = GLOBAL_COFFEE_SHOPS.filter(shop => {
    const matchesCity = selectedCity === 'Todas' || shop.city === selectedCity;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q ||
      shop.name.toLowerCase().includes(q) ||
      shop.city.toLowerCase().includes(q) ||
      shop.country.toLowerCase().includes(q) ||
      shop.district.toLowerCase().includes(q) ||
      shop.signatureRoast.toLowerCase().includes(q) ||
      shop.gearSetup.toLowerCase().includes(q) ||
      shop.tags.some(t => t.toLowerCase().includes(q));

    return matchesCity && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'score') return b.score - a.score;
    if (sortBy === 'price') return a.priceEspresso - b.priceEspresso;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="pb-16">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Inicio</Link>
        <span className="sep">/</span>
        <span className="current">Índice Global de Cafeterías</span>
      </div>

      {/* Page Header */}
      <div className="page-head">
        <div className="page-eyebrow">
          Radar Internacional & Guía de Viaje
        </div>
        <h1 className="page-title">Índice Global del Café de Especialidad</h1>
        <p className="page-sub">
          Las cafeterías de culto y tostadores de referencia en las grandes capitales mundiales: desde los templos del tueste nórdico en <strong>Tokio, Malmö y Berlín</strong>, pasando por la vanguardia de <strong>Nueva York, Londres y Bangkok</strong>, hasta la tradición reinventada en <strong>Roma, Nápoles, Barcelona y Melbourne</strong>.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar">
        {GLOBAL_COFFEE_CITIES.map((city) => (
          <button
            key={city}
            onClick={() => setSelectedCity(city)}
            className={`filter-chip ${selectedCity === city ? 'active' : ''}`}
          >
            {city}
          </button>
        ))}

        <div className="filter-spacer" />

        <div className="flex items-center gap-2">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="sort-select"
          >
            <option value="score">Ordenar: Mayor Puntuación</option>
            <option value="price">Precio Espresso: Menor a mayor</option>
            <option value="name">Nombre alfabético</option>
          </select>

          <div className="hidden sm:flex border border-[#e6e3da] rounded-xl overflow-hidden bg-white">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 text-xs font-bold ${viewMode === 'grid' ? 'bg-ink text-white' : 'text-[#6b6a63]'}`}
            >
              Tarjetas
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`px-3 py-1.5 text-xs font-bold ${viewMode === 'table' ? 'bg-ink text-white' : 'text-[#6b6a63]'}`}
            >
              Tabla
            </button>
          </div>
        </div>
      </div>

      <div className="wrap py-8 space-y-6">
        {/* Search Input Bar */}
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="Buscar por ciudad, tostador, máquina (ej: Slayer, EK43) o café…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-[#e6e3da] focus:border-ink rounded-xl px-4 py-2 text-xs text-ink placeholder:text-[#6b6a63] outline-none shadow-xs"
          />
        </div>

        {/* Counter */}
        <div className="text-xs text-[#6b6a63]">
          Mostrando <strong>{filteredShops.length}</strong> templos del café en <strong>{selectedCity === 'Todas' ? 'el mundo' : selectedCity}</strong>
        </div>

        {/* Grid View */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredShops.map((shop) => (
              <div
                key={shop.id}
                className="bg-white border border-[#e6e3da] rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xl" title={shop.country}>{shop.flag}</span>
                      <div>
                        <div className="text-[11px] font-bold text-[#6b6a63] uppercase tracking-wider">
                          {shop.city} · {shop.district}
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#eef4ff] text-[#2f6fed] text-xs font-bold px-2.5 py-0.5 rounded-lg shrink-0">
                      <span>{shop.score}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-ink group-hover:text-[#2f6fed] transition-colors mb-2">
                    {shop.name}
                  </h3>

                  {/* Signature Drink & Roast */}
                  <div className="bg-[#f4f2ec] rounded-xl p-3 mb-3 text-xs space-y-1.5">
                    <div>
                      <span className="font-bold text-ink">Especialidad: </span>
                      <span className="text-[#333]">{shop.signatureDrink}</span>
                    </div>
                    <div>
                      <span className="font-bold text-ink">Tueste insignia: </span>
                      <span className="text-[#6b6a63]">{shop.signatureRoast}</span>
                    </div>
                  </div>

                  {/* Gear Setup */}
                  <div className="text-[11px] text-[#6b6a63] mb-3">
                    <span><strong>Setup: </strong>{shop.gearSetup}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {shop.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-[#fbfaf7] border border-[#e6e3da] px-2 py-0.5 rounded-md text-[#6b6a63]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Bar */}
                <div className="pt-3 border-t border-[#e6e3da] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-[#6b6a63]">Espresso medio: </span>
                    <span className="font-extrabold text-sm text-ink">{shop.priceEspresso.toFixed(2)} €</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={shop.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#6b6a63] hover:text-[#2f6fed] font-semibold px-2 py-1"
                      title="Abrir en Google Maps"
                    >
                      Maps
                    </a>
                    <a
                      href={shop.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline !py-1.5 !px-3 !text-xs !rounded-lg"
                    >
                      <span>Web →</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Table View */
          <div className="overflow-x-auto bg-white border border-[#e6e3da] rounded-2xl shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#e6e3da] bg-[#f4f2ec] text-[#6b6a63] font-bold uppercase tracking-wider text-[10px]">
                  <th className="py-3 px-4">Ciudad / País</th>
                  <th className="py-3 px-4">Cafetería / Tostador</th>
                  <th className="py-3 px-4">Distrito</th>
                  <th className="py-3 px-4">Bebida Insignia</th>
                  <th className="py-3 px-4">Setup Equipamiento</th>
                  <th className="py-3 px-4 text-right">Espresso</th>
                  <th className="py-3 px-4 text-center">Score</th>
                  <th className="py-3 px-4 text-right">Mapa</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e6e3da]">
                {filteredShops.map((shop) => (
                  <tr key={shop.id} className="hover:bg-[#fbfaf7] transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-ink whitespace-nowrap">
                      <span className="mr-1.5">{shop.flag}</span>
                      {shop.city}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-ink">
                      <a href={shop.websiteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#2f6fed]">
                        {shop.name} →
                      </a>
                    </td>
                    <td className="py-3.5 px-4 text-[#6b6a63]">{shop.district}</td>
                    <td className="py-3.5 px-4 text-[#333] max-w-xs truncate">{shop.signatureDrink}</td>
                    <td className="py-3.5 px-4 text-[#6b6a63] max-w-xs truncate">{shop.gearSetup}</td>
                    <td className="py-3.5 px-4 text-right font-mono font-bold text-ink">{shop.priceEspresso.toFixed(2)} €</td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="bg-[#eef4ff] text-[#2f6fed] font-bold px-2 py-0.5 rounded-full text-[11px]">
                        {shop.score}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <a
                        href={shop.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2f6fed] hover:underline font-semibold"
                      >
                        Ver mapa
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
