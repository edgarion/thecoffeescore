import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/catalog';
import { Product } from '../core/domain/Product';
import { useCart } from '../context/CartContext';
import { showToast } from '../hooks/useToast';

// Slot definitions
export type SetupSlotType = 'maquina' | 'molino' | 'bascula' | 'distribucion' | 'accesorios' | 'cafe';

interface SetupSlotConfig {
  type: SetupSlotType;
  title: string;
  subtitle: string;
  icon: string;
  categoryFilter: string[];
  subCategoryKeywords?: string[];
  recommendedBrands?: string[];
}

const SETUP_SLOTS: SetupSlotConfig[] = [
  {
    type: 'maquina',
    title: '1. Máquina o Método de Extracción',
    subtitle: 'El corazón de tu estación de café',
    icon: 'M1',
    categoryFilter: ['maquinas'],
  },
  {
    type: 'molino',
    title: '2. Molino de Café de Precisión',
    subtitle: 'La clave absoluta para la uniformidad y el sabor',
    icon: 'M2',
    categoryFilter: ['molinos'],
  },
  {
    type: 'bascula',
    title: '3. Báscula & Medición de Ratio',
    subtitle: 'Precisión decimal y cronómetro integrado',
    icon: 'M3',
    categoryFilter: ['accesorios'],
    subCategoryKeywords: ['báscula', 'scale', 'lunar', 'pearl', 'black mirror', 'arc', 'medidor', 'timer'],
  },
  {
    type: 'distribucion',
    title: '4. Distribución & Prensado (WDT / Tamper)',
    subtitle: 'Elimina canalizaciones y homogeneiza la pastilla',
    icon: 'M4',
    categoryFilter: ['accesorios'],
    subCategoryKeywords: ['wdt', 'tamper', 'prensador', 'distribuidor', 'nivelador', 'shaker', 'dosing'],
  },
  {
    type: 'accesorios',
    title: '5. Texturizado, Filtro & Servicio',
    subtitle: 'Jarras de latte art, cestas de precisión o servidores',
    icon: 'M5',
    categoryFilter: ['accesorios'],
    subCategoryKeywords: ['jarra', 'pitcher', 'motta', 'basket', 'filtro', 'cup', 'vaso', 'taza', 'servidor', 'dripper'],
  },
  {
    type: 'cafe',
    title: '6. Café de Especialidad en Grano',
    subtitle: 'Microlotes recién tostados de origen único',
    icon: 'M6',
    categoryFilter: ['cafe'],
  },
];

// Curated Setup Presets
interface SetupPreset {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  targetUser: string;
  description: string;
  productIds: {
    maquina: string;
    molino: string;
    bascula: string;
    distribucion: string;
    accesorios: string;
    cafe: string;
  };
}

const PRESET_SETUPS: SetupPreset[] = [
  {
    id: 'iniciacion-pro',
    name: 'Espresso Iniciación Pro',
    tagline: 'El setup de entrada definitivo para aprender y disfrutar del espresso de verdad.',
    badge: 'MEJOR VALOR CALIDAD/PRECIO',
    badgeColor: '#2e7d32',
    targetUser: 'Principiantes ambiciosos y home baristas con espacio limitado.',
    description: 'Calentamiento instantáneo ThermoJet en 3s, molinillo con microajuste de espresso y accesorios esenciales para evitar canalizaciones.',
    productIds: {
      maquina: 'sage-bambino-plus',
      molino: 'baratza-encore-esp',
      bascula: 'timemore-black-mirror-basic-plus',
      distribucion: 'normcore-wdt-tool-v2',
      accesorios: 'motta-europa-pitcher',
      cafe: 'nomad-pink-bourbon',
    },
  },
  {
    id: 'sweetspot-barista',
    name: 'El Clásico Italiano Sweetspot',
    tagline: 'Equilibrio maestro entre estabilidad térmica PID, muelas de 55 mm y precisión artesanal.',
    badge: 'FAVORITO DE LOS BARISTAS',
    badgeColor: '#2f6fed',
    targetUser: 'Entusiastas que buscan consistencia de cafetería de especialidad en casa.',
    description: 'Control PID de temperatura, grupo de 58 mm estándar comercial, molino silencioso con pantalla táctil dosificadora y báscula de alta respuesta.',
    productIds: {
      maquina: 'profitec-go',
      molino: 'eureka-mignon-specialita',
      bascula: 'timemore-black-mirror-basic-plus',
      distribucion: 'normcore-v4-tamper',
      accesorios: 'ims-precision-basket-58mm',
      cafe: 'rightside-abasambi',
    },
  },
  {
    id: 'endgame-godshot',
    name: 'Endgame God-Shot Supremo',
    tagline: 'Sin compromisos: componentes de competición, cero retención y perfilado de flujo.',
    badge: 'MÁXIMO NIVEL PROFESIONAL',
    badgeColor: '#e94e2b',
    targetUser: 'Expertos que exigen la máxima pureza de extracción y textura sedosa.',
    description: 'Doble caldera saturada con estabilidad térmica absoluta, molino Single-Dose de bajísima retención y báscula inteligente con auto-tarado instantáneo.',
    productIds: {
      maquina: 'lelit-bianca-v3',
      molino: 'niche-zero',
      bascula: 'acaia-lunar-scale',
      distribucion: 'normcore-v4-tamper',
      accesorios: 'ims-precision-basket-58mm',
      cafe: 'syra-atitlan',
    },
  },
  {
    id: 'pourover-master',
    name: 'El Ritual del Filtro & V60',
    tagline: 'La cumbre de la claridad sensorial, notas florales y extracción pour-over.',
    badge: 'PURISTAS DEL FILTRO',
    badgeColor: '#8e44ad',
    targetUser: 'Amantes del café filtrado, chemex, aeropress y microlotes de origen.',
    description: 'Hervidor de cuello de cisne con control grado a grado, muelas de acero nitro-endurecido de molienda manual y cono V60 para extracciones cristalinas.',
    productIds: {
      maquina: 'fellow-stagg-ekg',
      molino: 'comandante-c40-mk4',
      bascula: 'acaia-pearl-scale',
      distribucion: 'hario-v60-ceramic-02',
      accesorios: 'hario-range-server-600',
      cafe: 'nomad-shakiso',
    },
  },
];

export const SetupConfiguratorPage: React.FC = () => {
  const { addItem } = useCart();

  // Selected products for Current Setup (Setup A)
  const [selectedItems, setSelectedItems] = useState<Record<SetupSlotType, Product | null>>({
    maquina: PRODUCTS.find(p => p.id === 'sage-bambino-plus') || PRODUCTS[0],
    molino: PRODUCTS.find(p => p.id === 'eureka-specialita' || p.id === 'eureka-mignon-specialita') || PRODUCTS[1],
    bascula: PRODUCTS.find(p => p.name.toLowerCase().includes('timemore') || p.name.toLowerCase().includes('acaia')) || PRODUCTS[2],
    distribucion: PRODUCTS.find(p => p.name.toLowerCase().includes('tamper') || p.name.toLowerCase().includes('wdt')) || PRODUCTS[3],
    accesorios: PRODUCTS.find(p => p.name.toLowerCase().includes('jarra') || p.name.toLowerCase().includes('pitcher')) || PRODUCTS[4],
    cafe: PRODUCTS.find(p => p.category === 'cafe') || PRODUCTS[5],
  });

  // Comparison Setup (Setup B)
  const [compareItems, setCompareItems] = useState<Record<SetupSlotType, Product | null>>({
    maquina: PRODUCTS.find(p => p.id === 'profitec-go' || p.id === 'lelit-mara-x') || PRODUCTS[0],
    molino: PRODUCTS.find(p => p.id === 'df64-gen-2' || p.id === 'niche-zero') || PRODUCTS[1],
    bascula: PRODUCTS.find(p => p.name.toLowerCase().includes('acaia')) || PRODUCTS[2],
    distribucion: PRODUCTS.find(p => p.name.toLowerCase().includes('tamper')) || PRODUCTS[3],
    accesorios: PRODUCTS.find(p => p.name.toLowerCase().includes('basket') || p.name.toLowerCase().includes('motta')) || PRODUCTS[4],
    cafe: PRODUCTS.find(p => p.name.toLowerCase().includes('right side') || p.category === 'cafe') || PRODUCTS[5],
  });

  const [isComparing, setIsComparing] = useState(false);
  const [activeSlotModal, setActiveSlotModal] = useState<SetupSlotType | null>(null);
  const [modalTarget, setModalTarget] = useState<'current' | 'compare'>('current');
  const [searchQuery, setSearchQuery] = useState('');

  // Apply Preset
  const handleLoadPreset = (preset: SetupPreset, target: 'current' | 'compare' = 'current') => {
    const newItems: Record<SetupSlotType, Product | null> = {
      maquina: PRODUCTS.find(p => p.id === preset.productIds.maquina || p.slug === preset.productIds.maquina) || null,
      molino: PRODUCTS.find(p => p.id === preset.productIds.molino || p.slug === preset.productIds.molino) || null,
      bascula: PRODUCTS.find(p => p.id === preset.productIds.bascula || p.name.toLowerCase().includes('scale') || p.name.toLowerCase().includes('báscula')) || null,
      distribucion: PRODUCTS.find(p => p.id === preset.productIds.distribucion || p.name.toLowerCase().includes('tamper') || p.name.toLowerCase().includes('wdt')) || null,
      accesorios: PRODUCTS.find(p => p.id === preset.productIds.accesorios || p.name.toLowerCase().includes('pitcher') || p.name.toLowerCase().includes('basket')) || null,
      cafe: PRODUCTS.find(p => p.id === preset.productIds.cafe || p.category === 'cafe') || null,
    };

    if (target === 'current') {
      setSelectedItems(newItems);
      showToast(`Setup cargado: "${preset.name}"`, 'success');
    } else {
      setCompareItems(newItems);
      showToast(`Setup B actualizado con "${preset.name}"`, 'success');
    }
  };

  // Helper calculations for a setup
  const calculateSetupMetrics = (items: Record<SetupSlotType, Product | null>) => {
    const list = Object.values(items).filter(Boolean) as Product[];
    const totalPrice = list.reduce((sum, p) => sum + (p.price || 0), 0);
    const totalOldPrice = list.reduce((sum, p) => sum + (p.oldPrice || p.price || 0), 0);
    const savings = Math.max(0, totalOldPrice - totalPrice);

    const scores = list.map(p => p.score?.getValue?.() || 8.5);
    const avgScore = scores.length > 0 ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1) : '8.5';

    const completedSlots = Object.values(items).filter(Boolean).length;
    const completionPercent = Math.round((completedSlots / SETUP_SLOTS.length) * 100);

    // Diagnostics & Balance Analysis
    let balanceNote = 'Setup equilibrado y armónico';
    let balanceStatus: 'optimal' | 'warning' | 'pro' = 'optimal';

    const maquinaPrice = items.maquina?.price || 0;
    const molinoPrice = items.molino?.price || 0;

    if (maquinaPrice > 1200 && molinoPrice < 300 && items.molino) {
      balanceNote = 'Aviso de molienda: Tu máquina de gama alta sacaría mucho más partido con un molino de muelas de 64 mm.';
      balanceStatus = 'warning';
    } else if (maquinaPrice < 400 && molinoPrice > 700) {
      balanceNote = 'Molino superior: Extraerás el 100% de la cafetera, con opción de actualizar la máquina más adelante.';
      balanceStatus = 'pro';
    } else if (completedSlots === 6) {
      balanceNote = 'Setup Completo: Estación de barista integral equilibrada y optimizada para elaborar café de especialidad.';
      balanceStatus = 'optimal';
    } else {
      balanceNote = `Faltan ${6 - completedSlots} componentes para completar la estación de barista.`;
      balanceStatus = 'warning';
    }

    return {
      list,
      totalPrice,
      savings,
      avgScore,
      completedSlots,
      completionPercent,
      balanceNote,
      balanceStatus,
    };
  };

  const metricsA = useMemo(() => calculateSetupMetrics(selectedItems), [selectedItems]);
  const metricsB = useMemo(() => calculateSetupMetrics(compareItems), [compareItems]);

  // Handle Add All to Cart
  const handleAddAllToCart = (items: Record<SetupSlotType, Product | null>) => {
    const list = Object.values(items).filter(Boolean) as Product[];
    list.forEach(p => {
      addItem({
        productId: p.id,
        productName: `${p.brand} ${p.name}`,
        productImage: p.image,
        selectedStore: p.stores?.[0]?.name || p.brand,
        storeUrl: p.stores?.[0]?.url,
        unitPrice: p.price,
        quantity: 1,
      });
    });
    showToast(`¡Se han añadido los ${list.length} productos del setup a tu cesta!`, 'success');
  };

  // Filter products for the modal selector
  const availableSlotProducts = useMemo(() => {
    if (!activeSlotModal) return [];
    const config = SETUP_SLOTS.find(s => s.type === activeSlotModal);
    if (!config) return [];

    let filtered = PRODUCTS.filter(p => config.categoryFilter.includes(p.category));

    if (config.subCategoryKeywords && config.subCategoryKeywords.length > 0 && activeSlotModal !== 'maquina' && activeSlotModal !== 'molino' && activeSlotModal !== 'cafe') {
      filtered = filtered.filter(p => {
        const fullText = `${p.name} ${p.shortDesc} ${p.subCategory || ''}`.toLowerCase();
        return config.subCategoryKeywords?.some(k => fullText.includes(k.toLowerCase()));
      });
      // If keyword filter is too strict, fallback to broader category
      if (filtered.length < 3) {
        filtered = PRODUCTS.filter(p => config.categoryFilter.includes(p.category));
      }
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.shortDesc?.toLowerCase().includes(q)
      );
    }

    return filtered.slice(0, 30);
  }, [activeSlotModal, searchQuery]);

  const handleSelectProductForSlot = (product: Product) => {
    if (!activeSlotModal) return;
    if (modalTarget === 'current') {
      setSelectedItems(prev => ({ ...prev, [activeSlotModal]: product }));
      showToast(`${product.name} asignado al setup`, 'success');
    } else {
      setCompareItems(prev => ({ ...prev, [activeSlotModal]: product }));
      showToast(`${product.name} asignado al Setup B`, 'success');
    }
    setActiveSlotModal(null);
    setSearchQuery('');
  };

  const handleRemoveSlotItem = (slotType: SetupSlotType, target: 'current' | 'compare') => {
    if (target === 'current') {
      setSelectedItems(prev => ({ ...prev, [slotType]: null }));
    } else {
      setCompareItems(prev => ({ ...prev, [slotType]: null }));
    }
  };

  return (
    <div className="space-y-10 pb-16">
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-[#f8f6f0] via-[#fcfbf9] to-[#faf8f5] border-b border-[#e6e3da] py-8 sm:py-12">
        <div className="wrap">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#fdece7] text-[#e94e2b] text-xs font-bold px-3 py-1 rounded-full mb-3 shadow-2xs uppercase tracking-wide">
              <span>ESTACIÓN DE CAFÉ PERSONALIZADA</span>
            </div>
            <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight mb-3">
              Configurador y Comparador de Setups de Café
            </h1>
            <p className="text-sm sm:text-base text-[#6b6a63] leading-relaxed mb-6">
              Arma tu estación barista ideal paso a paso, verifica la compatibilidad de cada pieza, calcula el presupuesto total en tiempo real y compara configuraciones lado a lado.
            </p>

            {/* Quick Actions / Mode Toggle */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsComparing(!isComparing)}
                className={`btn !py-2.5 !px-4 text-xs font-bold transition-all rounded-xl ${
                  isComparing
                    ? 'btn-solid !bg-[#2f6fed] hover:!bg-[#2055be]'
                    : 'btn-outline bg-white hover:bg-stone-50'
                }`}
              >
                <span>{isComparing ? 'Modo Comparativa Activo' : 'Comparar 2 Setups Lado a Lado'}</span>
              </button>

              <button
                onClick={() => handleAddAllToCart(selectedItems)}
                className="btn btn-solid !bg-[#e94e2b] hover:!bg-[#d43d1a] !border-none !py-2.5 !px-4 text-xs font-bold rounded-xl"
              >
                <span>Añadir Setup Completo a la Cesta ({metricsA.totalPrice.toFixed(2)} €)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRESETS ROW (INSPIRACIÓN LISTA PARA CARGAR) */}
      <section className="wrap">
        <div className="mb-4">
          <div className="text-[11px] font-bold text-[#e94e2b] uppercase tracking-wider mb-1">
            Plantillas & Setups Recomendados
          </div>
          <h2 className="font-serif font-bold text-xl sm:text-2xl text-ink">
            Configuraciones probadas por expertos
          </h2>
          <p className="text-xs text-[#6b6a63] mt-0.5">
            Carga un setup equilibrado con un solo clic para usarlo como punto de partida o personalizarlo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRESET_SETUPS.map((preset) => (
            <div
              key={preset.id}
              className="bg-white border border-[#e6e3da] hover:border-[#2f6fed] rounded-2xl p-4.5 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all group"
            >
              <div>
                <span
                  className="inline-block text-[9px] font-bold px-2 py-0.5 rounded-full mb-2 font-mono text-white"
                  style={{ backgroundColor: preset.badgeColor }}
                >
                  {preset.badge}
                </span>
                <h3 className="font-bold text-base text-ink mb-1 group-hover:text-[#2f6fed] transition-colors">
                  {preset.name}
                </h3>
                <p className="text-xs text-stone-600 line-clamp-2 mb-3">
                  {preset.tagline}
                </p>
                <div className="text-[11px] text-[#6b6a63] bg-[#fbfaf7] p-2 rounded-lg border border-[#f0eee6] mb-3">
                  <strong>Ideal para:</strong> {preset.targetUser}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#f0eee6]">
                <button
                  onClick={() => handleLoadPreset(preset, 'current')}
                  className="btn btn-solid w-full justify-center !py-2 !text-xs !rounded-xl !bg-ink hover:!bg-black"
                >
                  <span>Cargar en Setup A →</span>
                </button>
                {isComparing && (
                  <button
                    onClick={() => handleLoadPreset(preset, 'compare')}
                    className="btn btn-outline w-full justify-center !py-1.5 !text-[11px] !rounded-xl bg-white hover:bg-stone-50"
                  >
                    <span>Cargar en Setup B</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MAIN CONFIGURATOR CANVAS */}
      <section className="wrap">
        <div className={`grid gap-6 ${isComparing ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
          {/* SETUP A COLUMN */}
          <div className="bg-[#fcfbf9] border border-[#e6e3da] rounded-2xl p-5 sm:p-7 shadow-xs">
            {/* Setup Header Summary */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#ece8df] mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#2e7d32]"></span>
                  <h2 className="font-serif font-bold text-xl sm:text-2xl text-ink">
                    {isComparing ? 'Setup A (Principal)' : 'Tu Coffee Setup Personalizado'}
                  </h2>
                </div>
                <p className="text-xs text-[#6b6a63] mt-1">
                  {metricsA.completedSlots} de 6 componentes seleccionados ({metricsA.completionPercent}% completado)
                </p>
              </div>

              {/* Price & Score Tag */}
              <div className="flex items-center gap-3">
                <div className="bg-white border border-[#e6e3da] rounded-xl px-3 py-1.5 text-right shadow-2xs">
                  <div className="text-[10px] text-stone-500 font-bold uppercase">Puntuación Media</div>
                  <div className="font-serif font-extrabold text-base text-[#2f6fed]">{metricsA.avgScore} / 10</div>
                </div>
                <div className="bg-white border border-[#e6e3da] rounded-xl px-3.5 py-1.5 text-right shadow-2xs">
                  <div className="text-[10px] text-stone-500 font-bold uppercase">Inversión Total</div>
                  <div className="font-extrabold text-lg text-ink font-mono">{metricsA.totalPrice.toFixed(2)} €</div>
                </div>
              </div>
            </div>

            {/* Diagnostic Alert Box */}
            <div className={`p-3.5 rounded-xl border mb-6 text-xs flex items-start gap-2.5 ${
              metricsA.balanceStatus === 'optimal'
                ? 'bg-[#edf7ed] border-[#c8e6c9] text-[#2e7d32]'
                : metricsA.balanceStatus === 'pro'
                ? 'bg-[#eef4ff] border-[#c2d6ff] text-[#2f6fed]'
                : 'bg-[#fff8e1] border-[#ffe082] text-[#b78103]'
            }`}>
              <span className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-current"></span>
              <div>
                <strong>Diagnóstico de Barista:</strong> {metricsA.balanceNote}
              </div>
            </div>

            {/* Slots List */}
            <div className="space-y-3.5">
              {SETUP_SLOTS.map((slot, idx) => {
                const item = selectedItems[slot.type];
                return (
                  <div
                    key={slot.type}
                    className={`rounded-xl border transition-all p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 ${
                      item
                        ? 'bg-white border-[#e6e3da] shadow-2xs hover:border-stone-400'
                        : 'bg-[#f8f6f0] border-dashed border-[#d4cfc3]'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      {/* Item Thumbnail / Slot Index */}
                      <div className="w-14 h-14 rounded-xl bg-[#fbfaf7] border border-[#f0eee6] flex items-center justify-center p-1 shrink-0 overflow-hidden relative">
                        {item ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="max-h-full max-w-full object-contain"
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.onerror = null;
                              target.src = slot.type === 'accesorios' ? '/assets/accessory-fallback.png' : '/assets/machine-fallback.png';
                            }}
                          />
                        ) : (
                          <span className="text-xs font-mono font-bold text-stone-400">0{idx + 1}</span>
                        )}
                      </div>

                      {/* Item Info */}
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] font-bold text-[#e94e2b] uppercase tracking-wide">
                          {slot.title}
                        </div>
                        {item ? (
                          <>
                            <h4 className="font-bold text-sm text-ink truncate">
                              {item.name}
                            </h4>
                            <p className="text-xs text-[#6b6a63] truncate">
                              {item.brand} · {item.shortDesc}
                            </p>
                          </>
                        ) : (
                          <>
                            <div className="text-xs text-stone-500 font-semibold italic">
                              Vacío — Ningún producto asignado
                            </div>
                            <div className="text-[11px] text-stone-400">
                              {slot.subtitle}
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Price & Slot Action */}
                    <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#f0eee6] shrink-0">
                      {item && (
                        <div className="text-right">
                          <div className="font-extrabold text-sm sm:text-base text-ink font-mono leading-tight">
                            {item.price.toFixed(2)} €
                          </div>
                          <div className="text-[10px] text-[#2e7d32] font-semibold">
                            Score: {item.score?.getFormatted?.() || '8.5'}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => {
                            setActiveSlotModal(slot.type);
                            setModalTarget('current');
                          }}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                            item
                              ? 'bg-stone-100 hover:bg-stone-200 text-stone-800'
                              : 'btn-solid !bg-[#2f6fed] hover:!bg-[#2055be] text-white shadow-2xs'
                          }`}
                        >
                          <span>{item ? 'Cambiar ↺' : '+ Elegir'}</span>
                        </button>

                        {item && (
                          <button
                            onClick={() => handleRemoveSlotItem(slot.type, 'current')}
                            className="w-7 h-7 rounded-xl bg-stone-100 hover:bg-red-50 hover:text-red-600 text-stone-500 flex items-center justify-center text-xs transition-colors"
                            title="Quitar del setup"
                          >
                            ✕
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SETUP B COLUMN (WHEN COMPARISON MODE IS ACTIVE) */}
          {isComparing && (
            <div className="bg-[#f8fbff] border border-[#c2d6ff] rounded-2xl p-5 sm:p-7 shadow-xs">
              {/* Setup B Header Summary */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#d8e5ff] mb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#2f6fed]"></span>
                    <h2 className="font-serif font-bold text-xl sm:text-2xl text-ink">
                      Setup B (Alternativa)
                    </h2>
                  </div>
                  <p className="text-xs text-[#6b6a63] mt-1">
                    {metricsB.completedSlots} de 6 componentes seleccionados ({metricsB.completionPercent}% completado)
                  </p>
                </div>

                {/* Price & Score Tag */}
                <div className="flex items-center gap-3">
                  <div className="bg-white border border-[#c2d6ff] rounded-xl px-3 py-1.5 text-right shadow-2xs">
                    <div className="text-[10px] text-stone-500 font-bold uppercase">Puntuación Media</div>
                    <div className="font-serif font-extrabold text-base text-[#2f6fed]">{metricsB.avgScore} / 10</div>
                  </div>
                  <div className="bg-white border border-[#c2d6ff] rounded-xl px-3.5 py-1.5 text-right shadow-2xs">
                    <div className="text-[10px] text-stone-500 font-bold uppercase">Inversión Total</div>
                    <div className="font-extrabold text-lg text-ink font-mono">{metricsB.totalPrice.toFixed(2)} €</div>
                  </div>
                </div>
              </div>

              {/* Difference Delta Banner */}
              <div className="p-3.5 rounded-xl border bg-white border-[#c2d6ff] mb-6 text-xs flex items-center justify-between">
                <div>
                  <strong className="text-ink">Diferencia de Presupuesto:</strong>{' '}
                  <span className={`font-bold font-mono ${metricsB.totalPrice >= metricsA.totalPrice ? 'text-[#e94e2b]' : 'text-[#2e7d32]'}`}>
                    {metricsB.totalPrice >= metricsA.totalPrice ? '+' : ''}{(metricsB.totalPrice - metricsA.totalPrice).toFixed(2)} €
                  </span>
                </div>
                <div>
                  <strong className="text-ink">Delta Score:</strong>{' '}
                  <span className="font-bold text-[#2f6fed]">
                    {(parseFloat(metricsB.avgScore) - parseFloat(metricsA.avgScore)).toFixed(1)} pts
                  </span>
                </div>
              </div>

              {/* Slots List for Setup B */}
              <div className="space-y-3.5">
                {SETUP_SLOTS.map((slot, idx) => {
                  const item = compareItems[slot.type];
                  return (
                    <div
                      key={slot.type}
                      className={`rounded-xl border transition-all p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 ${
                        item
                          ? 'bg-white border-[#c2d6ff] shadow-2xs hover:border-[#2f6fed]'
                          : 'bg-[#f0f5ff] border-dashed border-[#b3ccff]'
                      }`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        {/* Item Thumbnail */}
                        <div className="w-14 h-14 rounded-xl bg-[#fbfaf7] border border-[#f0eee6] flex items-center justify-center p-1 shrink-0 overflow-hidden relative">
                          {item ? (
                            <img
                              src={item.image}
                              alt={item.name}
                              className="max-h-full max-w-full object-contain"
                              onError={(e) => {
                                const target = e.currentTarget;
                                target.onerror = null;
                                target.src = slot.type === 'accesorios' ? '/assets/accessory-fallback.png' : '/assets/machine-fallback.png';
                              }}
                            />
                          ) : (
                            <span className="text-xs font-mono font-bold text-stone-400">0{idx + 1}</span>
                          )}
                        </div>

                        {/* Item Info */}
                        <div className="min-w-0 flex-1">
                          <div className="text-[10px] font-bold text-[#2f6fed] uppercase tracking-wide">
                            {slot.title}
                          </div>
                          {item ? (
                            <>
                              <h4 className="font-bold text-sm text-ink truncate">
                                {item.name}
                              </h4>
                              <p className="text-xs text-[#6b6a63] truncate">
                                {item.brand} · {item.shortDesc}
                              </p>
                            </>
                          ) : (
                            <>
                              <div className="text-xs text-stone-500 font-semibold italic">
                                Vacío — Ningún producto asignado
                              </div>
                              <div className="text-[11px] text-stone-400">
                                {slot.subtitle}
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Price & Slot Action */}
                      <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#f0eee6] shrink-0">
                        {item && (
                          <div className="text-right">
                            <div className="font-extrabold text-sm sm:text-base text-ink font-mono leading-tight">
                              {item.price.toFixed(2)} €
                            </div>
                            <div className="text-[10px] text-[#2f6fed] font-semibold">
                              Score: {item.score?.getFormatted?.() || '8.5'}
                            </div>
                          </div>
                        )}

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => {
                              setActiveSlotModal(slot.type);
                              setModalTarget('compare');
                            }}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                              item
                                ? 'bg-stone-100 hover:bg-stone-200 text-stone-800'
                                : 'btn-solid !bg-[#2f6fed] hover:!bg-[#2055be] text-white shadow-2xs'
                            }`}
                          >
                            <span>{item ? 'Cambiar ↺' : '+ Elegir'}</span>
                          </button>

                          {item && (
                            <button
                              onClick={() => handleRemoveSlotItem(slot.type, 'compare')}
                              className="w-7 h-7 rounded-xl bg-stone-100 hover:bg-red-50 hover:text-red-600 text-stone-500 flex items-center justify-center text-xs transition-colors"
                              title="Quitar del setup"
                            >
                              ✕
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. MODAL: PRODUCT SELECTION DRAWER */}
      {activeSlotModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-[#e6e3da] rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#e6e3da] flex items-center justify-between gap-3 bg-[#fcfbf9]">
              <div>
                <div className="text-[11px] font-bold text-[#e94e2b] uppercase tracking-wide">
                  Seleccionar Componente para {modalTarget === 'current' ? 'Setup A' : 'Setup B'}
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-ink">
                  {SETUP_SLOTS.find(s => s.type === activeSlotModal)?.title}
                </h3>
              </div>
              <button
                onClick={() => {
                  setActiveSlotModal(null);
                  setSearchQuery('');
                }}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 font-bold"
              >
                ✕
              </button>
            </div>

            {/* Search Input */}
            <div className="p-3.5 border-b border-[#f0eee6] bg-white">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por modelo, marca o característica..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#e6e3da] bg-[#fbfaf7] text-xs sm:text-sm focus:outline-hidden focus:border-[#2f6fed]"
                autoFocus
              />
            </div>

            {/* Products List */}
            <div className="p-4 overflow-y-auto space-y-2.5 flex-1 divide-y divide-[#f0eee6]">
              {availableSlotProducts.map((product) => (
                <div
                  key={product.id}
                  className="pt-2.5 first:pt-0 flex items-center justify-between gap-3.5 hover:bg-[#fbfaf7] p-2 rounded-xl transition-colors cursor-pointer"
                  onClick={() => handleSelectProductForSlot(product)}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-12 h-12 rounded-lg bg-white border border-[#e6e3da] flex items-center justify-center p-1 shrink-0 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.onerror = null;
                          target.src = product.category === 'accesorios' ? '/assets/accessory-fallback.png' : '/assets/machine-fallback.png';
                        }}
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold text-stone-500 uppercase">
                        {product.brand}
                      </div>
                      <h4 className="font-bold text-xs sm:text-sm text-ink truncate">
                        {product.name}
                      </h4>
                      <p className="text-[11px] text-[#6b6a63] line-clamp-1">
                        {product.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="text-right">
                      <div className="font-extrabold text-sm text-ink font-mono">
                        {product.price} €
                      </div>
                      <div className="text-[10px] text-[#2f6fed] font-bold">
                        Score: {product.score?.getFormatted?.() || '8.5'}
                      </div>
                    </div>
                    <button className="btn btn-solid !py-1.5 !px-3 !text-xs !bg-[#2f6fed] text-white rounded-lg">
                      Elegir
                    </button>
                  </div>
                </div>
              ))}

              {availableSlotProducts.length === 0 && (
                <div className="text-center py-10 text-stone-500 text-xs">
                  No se encontraron productos que coincidan con la búsqueda.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
