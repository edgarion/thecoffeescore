import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/product/ProductCard';
import { BarcelonaIndexTable } from '../components/roasters/BarcelonaIndexTable';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { ScrollLoaderIndicator } from '../components/ui/ScrollLoaderIndicator';
import { PRODUCTS } from '../data/catalog';

export const CoffeePage: React.FC = () => {
  const [activeChip, setActiveChip] = useState('Todos');
  const [sortBy, setSortBy] = useState<'score' | 'price_asc' | 'price_desc' | 'name' | 'newest'>('newest');

  const chips = ['Todos', 'Espresso', 'Filtro', 'Colombia', 'Etiopía', 'Microlotes'];

  const allCoffee = useMemo(() => {
    return PRODUCTS.filter(p => p.category === 'cafe');
  }, []);

  const filteredProducts = useMemo(() => {
    let list = [...allCoffee];

    if (activeChip !== 'Todos') {
      const chipLow = activeChip.toLowerCase();
      list = list.filter(p => 
        (p.subCategory && p.subCategory.toLowerCase().includes(chipLow)) ||
        (p.name && p.name.toLowerCase().includes(chipLow)) ||
        (p.specs?.origen && p.specs.origen.toLowerCase().includes(chipLow)) ||
        (p.badge && p.badge.toLowerCase().includes(chipLow))
      );
    }

    if (sortBy === 'newest') {
      list.reverse();
    } else if (sortBy === 'score') {
      list.sort((a, b) => b.score.getValue() - a.score.getValue());
    } else if (sortBy === 'price_asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price_desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [allCoffee, activeChip, sortBy]);

  const { displayedItems, hasMore, isLoadingMore, sentinelRef, loadMore, displayedCount } = useInfiniteScroll({
    items: filteredProducts,
    pageSize: 28,
    initialBatch: 28,
  });

  return (
    <div className="pb-16">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Inicio</Link>
        <span className="sep">/</span>
        <span className="current">Café de Especialidad</span>
      </div>

      {/* Page Header */}
      <div className="page-head">
        <div className="page-eyebrow">
          Microtuestes & Orígenes Puros
        </div>
        <h1 className="page-title">Café de especialidad en grano</h1>
        <p className="page-sub">
          Catamos y evaluamos lotes de tueste fresco, variedades arábicas puras, perfiles sensoriales y trazabilidad de origen de los mejores tostadores del mundo.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar">
        {chips.map(chip => (
          <button
            key={chip}
            onClick={() => setActiveChip(chip)}
            className={`filter-chip ${activeChip === chip ? 'active' : ''}`}
          >
            {chip}
          </button>
        ))}

        <div className="filter-spacer" />

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as any)}
          className="sort-select"
        >
          <option value="newest">Novedades y Últimos Tuestes</option>
          <option value="price_asc">Precio: menor a mayor</option>
          <option value="price_desc">Precio: mayor a menor</option>
          <option value="score">Mejor Coffee Score</option>
          <option value="name">Nombre alfabético (A - Z)</option>
        </select>
      </div>

      {/* Main Content Wrap */}
      <div className="wrap py-8 space-y-12">
        {/* Products Section */}
        <div>
          <div className="results-count mb-4">
            Mostrando <strong>{displayedCount}</strong> de <strong>{filteredProducts.length}</strong> cafés de especialidad evaluados
          </div>

          <div className="listing-grid">
            {displayedItems.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          {/* Scroll Sentinel */}
          <div ref={sentinelRef} className="h-4 w-full" />

          <ScrollLoaderIndicator
            isLoading={isLoadingMore}
            hasMore={hasMore}
            displayedCount={displayedCount}
            totalCount={filteredProducts.length}
            onLoadMore={loadMore}
          />
        </div>

        {/* Barcelona Index Section */}
        <div className="pt-6 border-t border-[#e6e3da]">
          <div className="mb-6">
            <div className="inline-flex items-center bg-[#fdece7] text-[#e94e2b] text-xs font-bold px-3 py-1 rounded-full mb-2">
              <span>Índice Local de Referencia</span>
            </div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ink">
              Barcelona Roasters Index
            </h2>
            <p className="text-xs sm:text-sm text-[#6b6a63] mt-1 max-w-2xl">
              Monitorización continua de precios por kilogramo, orígenes directos y frecuencias de tueste en los tostadores de referencia de Barcelona.
            </p>
          </div>

          <BarcelonaIndexTable />
        </div>
      </div>
    </div>
  );
};
