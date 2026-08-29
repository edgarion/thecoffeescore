import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/product/ProductCard';
import { useProductFilter } from '../hooks/useProductFilter';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { ScrollLoaderIndicator } from '../components/ui/ScrollLoaderIndicator';
import { PRODUCTS } from '../data/catalog';
import { SEOHead } from '../components/seo/SEOHead';
import { generateItemListSchema, generateBreadcrumbSchema } from '../utils/seoSchemas';

interface CategoryListingPageProps {
  category: 'maquinas' | 'molinos' | 'accesorios';
  title: string;
  subtitle: string;
  chips: string[];
}

export const CategoryListingPage: React.FC<CategoryListingPageProps> = ({
  category,
  title,
  subtitle,
  chips,
}) => {
  const [activeChip, setActiveChip] = useState('Todas');
  const [maxPrice, setMaxPrice] = useState(5000);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'score' | 'price_asc' | 'price_desc' | 'name' | 'newest'>('score');

  // Reset filters when changing category route
  useEffect(() => {
    setActiveChip('Todas');
    setMaxPrice(5000);
    setSelectedBrands([]);
    setSortBy('score');
  }, [category]);

  const { filteredProducts, totalCount } = useProductFilter({
    category,
    subCategoryChip: activeChip,
    maxPrice,
    selectedBrands,
    sortBy,
  });

  const { displayedItems, hasMore, isLoadingMore, sentinelRef, loadMore, displayedCount } = useInfiniteScroll({
    items: filteredProducts,
    pageSize: 24,
    initialBatch: 24,
  });

  // Extract unique brands for the current category
  const categoryBrands = useMemo(() => {
    const brands = new Set<string>();
    PRODUCTS.filter(p => p.category === category).forEach(p => {
      if (p.brand) brands.add(p.brand);
    });
    return Array.from(brands).sort();
  }, [category]);

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const resetAllFilters = () => {
    setActiveChip('Todas');
    setMaxPrice(5000);
    setSelectedBrands([]);
    setSortBy('score');
  };

  const categoryDescriptions: Record<string, string> = {
    maquinas: 'Comparativa independiente de las mejores cafeteras espresso: manuales, semiautomáticas, superautomáticas y con molinillo. Pruebas de laboratorio y puntuaciones The Coffee Score.',
    molinos: 'Análisis técnico y puntuación de los mejores molinos de café para espresso y filtro: muelas planas, cónicas, eléctricos y manuales.',
    accesorios: 'Accesorios profesionales de barismo: básculas de precisión, filtros de especialidad, herramientas WDT, jarras de latte art y métodos de filtro.',
  };

  return (
    <div>
      <SEOHead
        title={title}
        description={categoryDescriptions[category] || subtitle}
        canonical={`/${category}`}
        jsonLd={[
          generateItemListSchema(title, filteredProducts, `/${category}`),
          generateBreadcrumbSchema([
            { name: 'Inicio', url: '/' },
            { name: title, url: `/${category}` },
          ]),
        ]}
      />
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Inicio</Link>
        <span className="sep">/</span>
        <span className="current capitalize">{category}</span>
      </div>

      {/* Page Header */}
      <div className="page-head">
        <div className="page-eyebrow">
          Catálogo Evaluado
        </div>
        <h1 className="page-title">{title}</h1>
        <p className="page-sub">{subtitle}</p>
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
          <option value="score">Ordenar: Mejor Coffee Score</option>
          <option value="price_asc">Precio: menor a mayor</option>
          <option value="price_desc">Precio: mayor a menor</option>
          <option value="newest">Novedades y Recientes</option>
          <option value="name">Nombre alfabético (A - Z)</option>
        </select>
      </div>

      {/* Listing Layout: Sidebar + Grid */}
      <div className="listing-wrap">
        {/* Sidebar */}
        <aside className="filter-sidebar">
          <div className="filter-group">
            <div className="flex justify-between items-center mb-3">
              <div className="filter-group-title" style={{ margin: 0 }}>Filtros</div>
              <button
                onClick={resetAllFilters}
                className="text-xs text-editorial-blue hover:underline font-semibold"
              >
                Limpiar
              </button>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span>Presupuesto máx:</span>
                <span className="font-mono">{maxPrice} €</span>
              </div>
              <input
                type="range"
                min={20}
                max={5000}
                step={25}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-ink cursor-pointer"
              />
              <div className="range-row">
                <span>20 €</span>
                <span>5.000 €</span>
              </div>
            </div>
          </div>

          <div className="filter-group">
            <div className="filter-group-title">Marcas ({categoryBrands.length})</div>
            <div className="space-y-1 max-h-64 overflow-y-auto pr-1">
              {categoryBrands.map(brand => {
                const checked = selectedBrands.includes(brand);
                return (
                  <label key={brand} className="filter-option">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => handleBrandToggle(brand)}
                    />
                    <span>{brand}</span>
                  </label>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <main>
          <div className="results-count">
            Mostrando <strong>{displayedCount}</strong> de <strong>{totalCount}</strong> productos analizados
          </div>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 px-4 bg-white border border-[#e6e3da] rounded-xl">
              <h4 className="font-serif font-bold text-xl text-ink mb-1">No se encontraron productos</h4>
              <p className="text-xs text-[#6b6a63]">Prueba ampliando los filtros de presupuesto o marcas.</p>
            </div>
          ) : (
            <>
              <div className="listing-grid">
                {displayedItems.map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>

              {/* Scroll Sentinel for Infinite Loading */}
              <div ref={sentinelRef} className="h-4 w-full" />

              <ScrollLoaderIndicator
                isLoading={isLoadingMore}
                hasMore={hasMore}
                displayedCount={displayedCount}
                totalCount={totalCount}
                onLoadMore={loadMore}
              />
            </>
          )}
        </main>
      </div>
    </div>
  );
};
