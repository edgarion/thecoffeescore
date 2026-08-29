import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  fetchSampleApisDrinks,
  fetchRoastDbData,
  fetchCoffeeDbRoasters,
  fetchCoffeeCloudTelemetry,
  fetchIcoDatabasePrices,
  SampleApiDrink,
  RoastDbBean,
  CoffeeDbRoaster,
  CoffeeCloudMachine,
  IcoGlobalMarketStats
} from '../services/api/externalCoffeeApis';

export const RecipesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'hot' | 'iced' | 'roastdb' | 'coffeedb' | 'coffeecloud' | 'ico'>('all');
  const [drinks, setDrinks] = useState<SampleApiDrink[]>([]);
  const [beans, setBeans] = useState<RoastDbBean[]>([]);
  const [roasters, setRoasters] = useState<CoffeeDbRoaster[]>([]);
  const [machines, setMachines] = useState<CoffeeCloudMachine[]>([]);
  const [icoData, setIcoData] = useState<IcoGlobalMarketStats | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDrink, setSelectedDrink] = useState<SampleApiDrink | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const [drinksData, beansData, roastersData, machinesData, icoStats] = await Promise.all([
        fetchSampleApisDrinks(),
        fetchRoastDbData(),
        fetchCoffeeDbRoasters(),
        fetchCoffeeCloudTelemetry(),
        fetchIcoDatabasePrices()
      ]);
      setDrinks(drinksData);
      setBeans(beansData);
      setRoasters(roastersData);
      setMachines(machinesData);
      setIcoData(icoStats);
      setLoading(false);
    }
    loadData();
  }, []);

  const filteredDrinks = drinks.filter((d) => {
    const matchesTab = activeTab === 'all' || (activeTab === 'hot' && d.type === 'hot') || (activeTab === 'iced' && d.type === 'iced');
    const matchesSearch = !searchQuery ||
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.ingredients.some((i) => i.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  const filteredBeans = beans.filter((b) =>
    !searchQuery ||
    b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.roaster.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.variety.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.tastingNotes.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredRoasters = roasters.filter((r) =>
    !searchQuery ||
    r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.specialties.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredMachines = machines.filter((m) =>
    !searchQuery ||
    m.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.serialNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pb-20">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Inicio</Link>
        <span className="sep">/</span>
        <span className="current">Recetas, Telemetría & APIs Globales</span>
      </div>

      {/* Page Header */}
      <div className="page-head">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="bg-[#fdece7] text-[#e94e2b] text-[11px] font-bold px-3 py-0.5 rounded-full font-mono">
            5 APIS EN VIVO
          </span>
          <span className="text-xs text-stone-500">
            SampleAPIs · RoastDB · coffeeDB · Scanomat CoffeeCloud · ICO Database (db.ico.org)
          </span>
        </div>
        <h1 className="page-title">Centro de Inteligencia & APIs de Café</h1>
        <p className="page-sub">
          Recetas calibradas, radar de tueste, directorio de tostadores, telemetría IoT de máquinas TopBrewer y cotizaciones oficiales de la International Coffee Organization.
        </p>
      </div>

      {/* Navigation Filter Bar */}
      <div className="filter-bar">
        <button
          onClick={() => setActiveTab('all')}
          className={`filter-chip ${activeTab === 'all' ? 'active' : ''}`}
        >
          Todas las Bebidas ({drinks.length})
        </button>
        <button
          onClick={() => setActiveTab('hot')}
          className={`filter-chip ${activeTab === 'hot' ? 'active' : ''}`}
        >
          Calientes (Hot)
        </button>
        <button
          onClick={() => setActiveTab('iced')}
          className={`filter-chip ${activeTab === 'iced' ? 'active' : ''}`}
        >
          Frías & Iced
        </button>
        <button
          onClick={() => setActiveTab('roastdb')}
          className={`filter-chip ${activeTab === 'roastdb' ? 'active' : ''}`}
        >
          Granos (RoastDB)
        </button>
        <button
          onClick={() => setActiveTab('coffeedb')}
          className={`filter-chip ${activeTab === 'coffeedb' ? 'active' : ''}`}
        >
          Tostadores (coffeeDB)
        </button>
        <button
          onClick={() => setActiveTab('coffeecloud')}
          className={`filter-chip ${activeTab === 'coffeecloud' ? 'active' : ''}`}
        >
          IoT Telemetría (CoffeeCloud)
        </button>
        <button
          onClick={() => setActiveTab('ico')}
          className={`filter-chip ${activeTab === 'ico' ? 'active' : ''}`}
        >
          Precios ICO (db.ico.org)
        </button>

        <div className="filter-spacer" />

        {/* Search Input */}
        <div className="relative min-w-[200px] sm:min-w-[240px]">
          <input
            type="text"
            placeholder="Buscar recetas, telemetría, origen…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-[#e6e3da] focus:border-ink rounded-full px-3.5 py-1.5 text-xs text-ink outline-none transition-colors"
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="wrap py-8 space-y-12">
        {/* VIEW 1: DRINKS / RECIPES (SampleAPIs) */}
        {(activeTab === 'all' || activeTab === 'hot' || activeTab === 'iced') && (
          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="font-serif font-bold text-xl sm:text-2xl text-ink">
                  Recetario y Fórmulas Barista
                </h2>
                <p className="text-xs text-stone-500">
                  Fuente: <strong>SampleAPIs Coffee REST API</strong> con ratios calibrados por The Coffee Score.
                </p>
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div key={n} className="h-80 bg-stone-100 rounded-2xl border border-stone-200" />
                ))}
              </div>
            ) : filteredDrinks.length === 0 ? (
              <div className="bg-white border border-[#e6e3da] rounded-2xl p-12 text-center text-stone-500 text-sm">
                No se encontraron bebidas que coincidan con &ldquo;{searchQuery}&rdquo;.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDrinks.map((drink) => (
                  <div
                    key={drink.id}
                    className="bg-white border border-[#e6e3da] hover:border-stone-400 rounded-2xl p-5 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all group"
                  >
                    <div>
                      {/* Drink Image */}
                      <div className="w-full h-48 bg-[#fbfaf7] border border-[#f0eee6] rounded-xl mb-4 flex items-center justify-center p-2 overflow-hidden">
                        <img
                          src={drink.image}
                          alt={drink.title}
                          className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>

                      {/* Header Badge & Timing */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full font-mono ${
                          drink.type === 'hot' ? 'bg-[#fdece7] text-[#e94e2b]' : 'bg-[#e8f2fc] text-[#2f6fed]'
                        }`}>
                          {drink.type === 'hot' ? 'CALIENTE' : 'FRÍA / ICED'}
                        </span>
                        <span className="text-[11px] text-stone-500 font-mono">
                          {drink.brewTime || '2-3 min'}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif font-bold text-lg sm:text-xl text-ink group-hover:text-[#2f6fed] transition-colors leading-snug mb-2">
                        {drink.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-stone-600 leading-relaxed mb-4 line-clamp-3">
                        {drink.description}
                      </p>

                      {/* Ingredients */}
                      <div className="bg-[#fbfaf7] border border-[#e6e3da] p-3 rounded-xl mb-4">
                        <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1.5">
                          Ingredientes ({drink.ingredients.length})
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {drink.ingredients.map((ing, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] bg-white border border-[#e6e3da] px-2 py-0.5 rounded-md text-stone-700 font-medium"
                            >
                              {ing}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer Action */}
                    <div className="pt-3 border-t border-[#e6e3da] flex items-center justify-between text-xs mt-auto">
                      <span className="text-[11px] text-stone-500 font-medium">
                        Ratio: <strong>{drink.ratio || '1:2'}</strong>
                      </span>
                      <button
                        onClick={() => setSelectedDrink(drink)}
                        className="btn btn-outline !text-xs !py-1.5 !px-3 !rounded-lg font-bold hover:bg-stone-50"
                      >
                        Ver receta →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* VIEW 2: SCANOMAT COFFEECLOUD IOT TELEMETRY */}
        {(activeTab === 'all' || activeTab === 'coffeecloud') && (
          <div className="pt-6 border-t border-[#e6e3da]">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <div className="text-[#059669] text-xs font-bold uppercase tracking-wider mb-1 font-mono">
                  IOT CLOUD · SCANOMAT COFFEECLOUD API
                </div>
                <h2 className="font-serif font-bold text-xl sm:text-2xl text-ink">
                  Telemetría y Estado de Flota TopBrewer (Scanomat)
                </h2>
                <p className="text-xs text-stone-500">
                  Monitorización en vivo de extracciones diarias, tolvas de café, temperatura de leche y ciclos de mantenimiento preventivo.
                </p>
              </div>
              <a
                href="https://scanomat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline !text-xs !py-2 !px-3 !rounded-xl font-bold hidden sm:inline-flex items-center gap-1.5"
              >
                <span>Scanomat Cloud Portal</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {filteredMachines.map((m) => (
                <div
                  key={m.id}
                  className="bg-white border border-[#e6e3da] hover:border-stone-400 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold font-mono bg-stone-100 text-stone-700 px-2 py-0.5 rounded-md">
                        {m.serialNumber}
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] font-bold text-[#059669]">
                        <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse"></span>
                        ONLINE
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-base text-ink mb-0.5">{m.model}</h3>
                    <div className="text-xs text-stone-500 mb-4">{m.location}</div>

                    {/* IoT Metrics Bars */}
                    <div className="space-y-2.5 bg-[#fbfaf7] border border-[#e6e3da] p-3 rounded-xl mb-4 text-xs">
                      <div>
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="text-stone-500">Nivel de Tolva de Café</span>
                          <span className="font-bold text-ink font-mono">{m.beanHopperPct}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
                          <div className="h-full bg-[#e94e2b] rounded-full" style={{ width: `${m.beanHopperPct}%` }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="text-stone-500">Filtro de Agua Brita</span>
                          <span className="font-bold text-ink font-mono">{m.waterFilterPct}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
                          <div className="h-full bg-[#2f6fed] rounded-full" style={{ width: `${m.waterFilterPct}%` }}></div>
                        </div>
                      </div>

                      <div className="flex justify-between pt-1 border-t border-[#e6e3da] text-[11px]">
                        <span className="text-stone-500">Temp. Nevera Leche:</span>
                        <span className="font-bold text-stone-800 font-mono">{m.milkTempC}°C</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#e6e3da] flex items-center justify-between text-xs mt-auto">
                    <div>
                      <div className="text-[10px] text-stone-400 uppercase">Hoy</div>
                      <div className="font-bold text-ink font-mono">{m.drinksToday} cafés</div>
                    </div>
                    <span className="text-[11px] text-stone-400 font-mono">{m.cloudSyncTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 3: ICO DATABASE (db.ico.org) GLOBAL MARKET BENCHMARK */}
        {(activeTab === 'all' || activeTab === 'ico') && icoData && (
          <div className="pt-6 border-t border-[#e6e3da]">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <div className="text-[#2f6fed] text-xs font-bold uppercase tracking-wider mb-1 font-mono">
                  BENCHMARK GLOBAL · INTERNATIONAL COFFEE ORGANIZATION (ICO)
                </div>
                <h2 className="font-serif font-bold text-xl sm:text-2xl text-ink">
                  Cotizaciones y Estadísticas Mundiales (db.ico.org)
                </h2>
                <p className="text-xs text-stone-500">
                  Precios oficiales del ICO Composite Indicator Price (I-CIP), diferenciales por grupos y volumen de exportaciones mundiales.
                </p>
              </div>
              <a
                href="https://db.ico.org"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline !text-xs !py-2 !px-3 !rounded-xl font-bold hidden sm:inline-flex items-center gap-1.5"
              >
                <span>Acceder a db.ico.org</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Composite Highlight Card */}
            <div className="bg-gradient-to-br from-[#21201c] to-[#2c2924] text-white p-6 sm:p-8 rounded-3xl mb-6 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                <div className="md:col-span-2">
                  <span className="text-[10px] font-bold tracking-widest text-[#e94e2b] uppercase font-mono">
                    BENCHMARK DE REFERENCIA MUNDIAL
                  </span>
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white mt-1 mb-2">
                    {icoData.compositePrice.indicator}
                  </h3>
                  <p className="text-stone-400 text-xs leading-relaxed">
                    Precio promedio ponderado de los principales tipos de café verde comercializados en los mercados de Nueva York (ICE) y Londres (Euronext).
                  </p>
                </div>

                <div className="bg-white/10 border border-white/15 p-4 rounded-2xl text-center">
                  <div className="text-xs text-stone-300 font-mono">Precio en Céntimos USD / Libra</div>
                  <div className="font-mono font-bold text-3xl text-white my-1">
                    {icoData.compositePrice.priceCentsPerLb} <span className="text-xs text-stone-400">¢/lb</span>
                  </div>
                  <div className="text-xs text-emerald-400 font-bold">
                    ▲ +{icoData.compositePrice.dailyChangePct}% hoy
                  </div>
                </div>

                <div className="bg-white/10 border border-white/15 p-4 rounded-2xl text-center">
                  <div className="text-xs text-stone-300 font-mono">Equivalente en USD / Kg</div>
                  <div className="font-mono font-bold text-3xl text-[#e94e2b] my-1">
                    ${icoData.compositePrice.priceUsdPerKg} <span className="text-xs text-stone-400">/kg</span>
                  </div>
                  <div className="text-xs text-stone-400">
                    Media mensual: {icoData.compositePrice.monthlyAverage} ¢/lb
                  </div>
                </div>
              </div>
            </div>

            {/* Group Indicators Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {icoData.groupPrices.map((gp) => (
                <div
                  key={gp.code}
                  className="bg-white border border-[#e6e3da] rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold font-mono bg-[#f4f2ec] text-stone-700 px-2 py-0.5 rounded-md">
                        {gp.code}
                      </span>
                      <span className={`text-xs font-bold font-mono ${gp.dailyChangePct >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {gp.dailyChangePct >= 0 ? `▲ +${gp.dailyChangePct}%` : `▼ ${gp.dailyChangePct}%`}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-sm text-ink mb-3 leading-snug">
                      {gp.indicator}
                    </h4>

                    <div className="bg-[#fbfaf7] border border-[#e6e3da] p-3 rounded-xl mb-3">
                      <div className="text-[10px] text-stone-400 uppercase">Cotización</div>
                      <div className="font-mono font-bold text-xl text-ink">
                        {gp.priceCentsPerLb} <span className="text-xs text-stone-500 font-normal">¢/lb</span>
                      </div>
                      <div className="text-xs text-stone-500 font-mono mt-0.5">
                        ${gp.priceUsdPerKg} USD/kg
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#e6e3da] flex justify-between text-xs text-stone-500">
                    <span>Cuota de mercado:</span>
                    <span className="font-bold text-ink font-mono">{gp.marketSharePct}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 4: ROASTDB BEANS & ROAST RADAR */}
        {(activeTab === 'all' || activeTab === 'roastdb') && (
          <div className="pt-6 border-t border-[#e6e3da]">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <div className="text-[#e94e2b] text-xs font-bold uppercase tracking-wider mb-1 font-mono">
                  DATABASE · ROASTDB AGGREGATOR
                </div>
                <h2 className="font-serif font-bold text-xl sm:text-2xl text-ink">
                  Radar de Granos & Perfiles de Tueste (RoastDB)
                </h2>
                <p className="text-xs text-stone-500">
                  Índice de microlotes con altitud, varietales botánicos y notas de cata normalizadas.
                </p>
              </div>
              <a
                href="https://roastdb.com/data"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline !text-xs !py-2 !px-3 !rounded-xl font-bold hidden sm:inline-flex items-center gap-1.5"
              >
                <span>Explorar en RoastDB.com</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBeans.map((bean) => (
                <div
                  key={bean.id}
                  className="bg-white border border-[#e6e3da] hover:border-stone-400 rounded-2xl p-5 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="bg-[#f4f2ec] text-stone-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full font-mono">
                        {bean.origin.toUpperCase()} · {bean.process}
                      </span>
                      {bean.cupScore && (
                        <span className="text-xs font-bold text-[#e94e2b] bg-[#fdece7] px-2 py-0.5 rounded-md font-mono">
                          {bean.cupScore} SCA
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif font-bold text-base sm:text-lg text-ink leading-snug mb-1">
                      {bean.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#2f6fed] mb-3">
                      Tostador: {bean.roaster}
                    </div>

                    {/* Metadata Specs Grid */}
                    <div className="grid grid-cols-2 gap-2 text-xs bg-[#fbfaf7] border border-[#e6e3da] p-3 rounded-xl mb-4">
                      <div>
                        <span className="text-[10px] text-stone-400 uppercase block">Región</span>
                        <span className="font-medium text-stone-800 truncate block">{bean.region}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-stone-400 uppercase block">Altitud</span>
                        <span className="font-medium text-stone-800 truncate block">{bean.altitude}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-stone-400 uppercase block">Variedad</span>
                        <span className="font-medium text-stone-800 truncate block">{bean.variety}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-stone-400 uppercase block">Tueste</span>
                        <span className="font-medium text-stone-800 truncate block">{bean.roastLevel}</span>
                      </div>
                    </div>

                    {/* Tasting Notes */}
                    <div className="mb-4">
                      <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1.5">
                        Notas de Cata
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {bean.tastingNotes.map((note, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] bg-white border border-[#e6e3da] text-stone-700 px-2 py-0.5 rounded-full font-medium"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#e6e3da] flex items-center justify-between text-xs mt-auto">
                    <span className="text-stone-500 text-[11px]">Direct Trade</span>
                    <Link to="/cafe" className="font-bold text-ink hover:text-[#2f6fed] transition-colors">
                      Ver café similar →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 5: COFFEEDB API ROASTERS */}
        {(activeTab === 'all' || activeTab === 'coffeedb') && (
          <div className="pt-6 border-t border-[#e6e3da]">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <div className="text-[#2f6fed] text-xs font-bold uppercase tracking-wider mb-1 font-mono">
                  REST API · COFFEEDB.PRO
                </div>
                <h2 className="font-serif font-bold text-xl sm:text-2xl text-ink">
                  Directorio de Tostadores de Especialidad (coffeeDB API)
                </h2>
                <p className="text-xs text-stone-500">
                  Conectado a los endpoints de <code>https://www.coffeedb.pro/api/v1/roasters</code>.
                </p>
              </div>
              <a
                href="https://www.coffeedb.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline !text-xs !py-2 !px-3 !rounded-xl font-bold hidden sm:inline-flex items-center gap-1.5"
              >
                <span>coffeeDB API Docs</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRoasters.map((roaster) => (
                <div
                  key={roaster.id}
                  className="bg-white border border-[#e6e3da] hover:border-stone-400 rounded-2xl p-5 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="bg-[#f4f2ec] text-stone-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full font-mono">
                        {roaster.country.toUpperCase()} · {roaster.city}
                      </span>
                      <span className="text-xs font-bold text-stone-700 font-mono">
                        ★ {roaster.rating}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-lg text-ink leading-tight mb-1">
                      {roaster.name}
                    </h3>
                    <div className="text-xs text-stone-500 mb-3">
                      Fundado en {roaster.founded} · {roaster.totalLots} microlotes activos
                    </div>

                    {/* Specialties */}
                    <div className="space-y-2 mb-4">
                      <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                        Especialidades
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {roaster.specialties.map((spec, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] bg-[#fbfaf7] border border-[#e6e3da] text-stone-700 px-2 py-0.5 rounded-md font-medium"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#e6e3da] flex items-center justify-between text-xs mt-auto">
                    <span className="text-stone-500 text-[11px]">{roaster.certifications[0]}</span>
                    <a
                      href={roaster.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-ink hover:text-[#2f6fed] transition-colors flex items-center gap-1"
                    >
                      <span>Web oficial →</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* RECIPE DETAIL MODAL */}
      {selectedDrink && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-[#e6e3da] space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full font-mono ${
                  selectedDrink.type === 'hot' ? 'bg-[#fdece7] text-[#e94e2b]' : 'bg-[#e8f2fc] text-[#2f6fed]'
                }`}>
                  {selectedDrink.type === 'hot' ? 'BEBIDA CALIENTE' : 'BEBIDA FRÍA / ICED'}
                </span>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ink mt-1">
                  {selectedDrink.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedDrink(null)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 font-bold transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="w-full h-56 rounded-2xl overflow-hidden bg-stone-100">
              <img
                src={selectedDrink.image}
                alt={selectedDrink.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {selectedDrink.description}
            </p>

            <div className="grid grid-cols-3 gap-3 bg-[#fbfaf7] border border-[#e6e3da] p-4 rounded-2xl text-center">
              <div>
                <div className="text-[10px] text-stone-400 uppercase font-bold">Ratio</div>
                <div className="font-mono font-bold text-xs sm:text-sm text-ink">{selectedDrink.ratio || '1:2'}</div>
              </div>
              <div>
                <div className="text-[10px] text-stone-400 uppercase font-bold">Tiempo</div>
                <div className="font-mono font-bold text-xs sm:text-sm text-ink">{selectedDrink.brewTime || '2 min'}</div>
              </div>
              <div>
                <div className="text-[10px] text-stone-400 uppercase font-bold">Dificultad</div>
                <div className="font-bold text-xs sm:text-sm text-[#e94e2b]">{selectedDrink.difficulty || 'Fácil'}</div>
              </div>
            </div>

            <div>
              <h4 className="font-serif font-bold text-base text-ink mb-2">Ingredientes Requeridos:</h4>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-stone-700">
                {selectedDrink.ingredients.map((ing, idx) => (
                  <li key={idx}><strong>{ing}</strong></li>
                ))}
              </ul>
            </div>

            {selectedDrink.recommendedGear && (
              <div className="bg-[#f4f2ec] border border-[#e6e3da] p-4 rounded-2xl">
                <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1">
                  Equipamiento Recomendado The Coffee Score
                </div>
                <div className="font-bold text-xs sm:text-sm text-ink">
                  {selectedDrink.recommendedGear}
                </div>
              </div>
            )}

            <div className="flex gap-3 pt-2">
              <Link
                to="/configurador"
                onClick={() => setSelectedDrink(null)}
                className="btn btn-solid !bg-[#e94e2b] hover:!bg-[#d43d1a] !border-none !text-white flex-1 justify-center !py-3 !rounded-xl font-bold text-xs"
              >
                Configurar Setup para esta receta →
              </Link>
              <button
                onClick={() => setSelectedDrink(null)}
                className="btn btn-outline !py-3 !px-5 !rounded-xl font-bold text-xs"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
