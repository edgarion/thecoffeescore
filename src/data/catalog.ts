import { Product } from '../core/domain/Product';
import { CoffeeScore } from '../core/domain/Score';
import { BarcelonaRoaster, BuyingGuide } from '../core/domain/Roaster';

export const BRANDS: string[] = [
  "Sage", "Lelit", "De'Longhi", "Breville", "Gaggia", "Eureka", 
  "Fellow", "Comandante", "Mazzer", "DF64", "Baratza", "AeroPress", 
  "Timemore", "Normcore", "Hario", "Chemex"
];

export const PRODUCTS: Product[] = [
  // --- MÁQUINAS DE ESPRESSO ---
  {
    id: "sage-bambino-plus",
    slug: "sage-bambino-plus",
    name: "Sage Bambino Plus",
    brand: "Sage",
    category: "maquinas",
    subCategory: "Semiautomáticas",
    price: 449,
    oldPrice: 499,
    historicalAveragePrice: 489,
    isOffer: true,
    score: new CoffeeScore(8.4),
    stars: 4.5,
    badge: "Mejor para empezar",
    image: "/assets/pourover.png",
    gallery: [
      "/assets/pourover.png",
      "/assets/pouring.png",
      "/assets/tamping.png",
      "/assets/latte-hand.png"
    ],
    shortDesc: "Compacta, calentamiento en 3 segundos y vaporizador automático asistido de alta precisión.",
    subscores: {
      espresso: 8.8,
      vapor: 8.2,
      facilidad: 9.4,
      construccion: 8.1,
      precio: 8.6
    },
    pros: [
      "Calentamiento ThermoJet en 3 segundos",
      "Muy compacta para cualquier cocina o espacio reducido",
      "Vaporizador automático con 3 niveles de temperatura y textura",
      "Pre-infusión a baja presión y extracción a 9 bar reales"
    ],
    cons: [
      "Depósito de agua moderado (1.9 L)",
      "Sin control de temperatura PID personalizable por display",
      "Portafiltro con inserto interior plástico"
    ],
    specs: {
      bomba: "9 bar",
      potencia: "1560 W",
      calentamiento: "3 seg (ThermoJet)",
      pid: "Sí (Automático)",
      deposito: "1.9 L",
      vaporizador: "Automático asistido",
      molinillo: "No",
      portafiltro: "54 mm acero / plástico",
      peso: "4.6 kg",
      dimensiones: "19.5 × 32 × 31 cm",
      garantia: "2 años"
    },
    stores: [
      { name: "Amazon", price: 449, inStock: true, url: "https://amazon.es", isBest: true },
      { name: "El Corte Inglés", price: 479, inStock: true, url: "#" },
      { name: "Tienda Barista Especializada", price: 499, inStock: true, url: "#" }
    ],
    editorialReview: {
      title: "Sage Bambino Plus bajo el microscopio",
      question: "¿Merece la pena pagar por el calentamiento en 3 segundos?",
      content: `La Bambino Plus ocupa un hueco muy concreto: usuarios que quieren auténtico espresso en casa sin dedicar media hora cada mañana ni sacrificar la mitad de la encimera. El calentamiento por ThermoJet de 3 segundos no es un truco publicitario: en nuestras pruebas cronometradas, la máquina estuvo lista para la extracción antes de que termináramos de moler la dosis.\n\nEl vaporizador automático asistido es su gran ventaja competitiva: ajusta temperatura y microespuma con sensores en la bandeja de goteo, logrando una textura apta para latte art sin requerir técnica avanzada de barista.`
    }
  },
  {
    id: "sage-bambino",
    slug: "sage-bambino",
    name: "Sage Bambino",
    brand: "Sage",
    category: "maquinas",
    subCategory: "Manuales",
    price: 399,
    oldPrice: null,
    historicalAveragePrice: 399,
    isOffer: false,
    score: new CoffeeScore(8.2),
    stars: 4.2,
    badge: "Mejor entrada",
    image: "/assets/tamping.png",
    gallery: ["/assets/tamping.png", "/assets/pouring.png"],
    shortDesc: "La versión esencial de la Bambino con vaporizador manual tradicional y el mismo motor térmico rápido.",
    subscores: {
      espresso: 8.7,
      vapor: 7.6,
      facilidad: 8.8,
      construccion: 7.9,
      precio: 8.9
    },
    pros: [
      "Mismo bloque térmico de 3 segundos que el modelo Plus",
      "Control de vapor completamente manual para quien prefiere texturizar",
      "Precio más accesible"
    ],
    cons: [
      "Vaporizador con punta simple de 1 orificio",
      "Bandeja de goteo más pequeña",
      "No incluye jarra de leche de serie"
    ],
    specs: {
      bomba: "9 bar",
      potencia: "1560 W",
      calentamiento: "3 seg (ThermoJet)",
      pid: "Sí (Automático)",
      deposito: "1.4 L",
      vaporizador: "Manual clásico",
      molinillo: "No",
      portafiltro: "54 mm",
      peso: "4.1 kg",
      dimensiones: "16 × 35 × 30 cm",
      garantia: "2 años"
    },
    stores: [
      { name: "Amazon", price: 399, inStock: true, url: "#", isBest: true },
      { name: "MediaMarkt", price: 419, inStock: true, url: "#" }
    ]
  },
  {
    id: "lelit-anna-pl41",
    slug: "lelit-anna-pl41",
    name: "Lelit Anna PL41",
    brand: "Lelit",
    category: "maquinas",
    subCategory: "Semiautomáticas",
    price: 699,
    oldPrice: 749,
    historicalAveragePrice: 729,
    isOffer: true,
    score: new CoffeeScore(8.7),
    stars: 4.6,
    badge: "Mejor control",
    image: "/assets/pouring.png",
    gallery: ["/assets/pouring.png", "/assets/tamping.png"],
    shortDesc: "Caldera de latón, manómetro analógico y construcción íntegra en acero inoxidable italiano.",
    subscores: {
      espresso: 9.1,
      vapor: 8.4,
      facilidad: 7.8,
      construccion: 9.3,
      precio: 8.5
    },
    pros: [
      "Caldera de latón de 250 ml con excelente estabilidad térmica",
      "Cuerpo completo en acero inoxidable pulido",
      "Manómetro de presión en tiempo real",
      "Válvula de 3 vías profesional"
    ],
    cons: [
      "Portafiltro de 57 mm (menos accesorios universales que 58 mm)",
      "Tiempo de calentamiento de 8-10 minutos",
      "Curva de aprendizaje moderada"
    ],
    specs: {
      bomba: "15 bar (regulable a 9 bar)",
      potencia: "1150 W",
      calentamiento: "8-10 min",
      pid: "No (Versión TEM sí)",
      deposito: "2.7 L",
      vaporizador: "Manual multidireccional",
      molinillo: "No",
      portafiltro: "57 mm latón cromado",
      peso: "6.8 kg",
      dimensiones: "23 × 24 × 34 cm",
      garantia: "2 años"
    },
    stores: [
      { name: "Tienda Barista Oficial", price: 699, inStock: true, url: "#", isBest: true },
      { name: "Amazon", price: 720, inStock: false, url: "#" }
    ]
  },
  {
    id: "delonghi-la-specialista",
    slug: "delonghi-la-specialista",
    name: "De'Longhi La Specialista",
    brand: "De'Longhi",
    category: "maquinas",
    subCategory: "Con molinillo",
    price: 699,
    oldPrice: 849,
    historicalAveragePrice: 799,
    isOffer: true,
    score: new CoffeeScore(8.5),
    stars: 4.4,
    badge: "Mejor todo en uno",
    image: "/assets/latte-hand.png",
    gallery: ["/assets/latte-hand.png", "/assets/pouring.png"],
    shortDesc: "Molinillo de muelas cónicas integrado, apisonado inteligente asistido y sistema de doble calentamiento.",
    subscores: {
      espresso: 8.4,
      vapor: 8.6,
      facilidad: 9.1,
      construccion: 8.5,
      precio: 8.2
    },
    pros: [
      "Smart Tamping Station: prensado limpio sin ensuciar la encimera",
      "Doble sistema de calentamiento térmico independiente para café y leche",
      "Lanza de vapor profesional MyLatteArt"
    ],
    cons: [
      "Aparato voluminoso y pesado (9.2 kg)",
      "El molinillo integrado tiene pasos de molienda más amplios"
    ],
    specs: {
      bomba: "19 bar",
      potencia: "1450 W",
      calentamiento: "40 seg",
      pid: "Sí (3 perfiles de temperatura)",
      deposito: "2.5 L",
      vaporizador: "Manual profesional",
      molinillo: "Sí (Muelas cónicas integradas)",
      portafiltro: "51 mm",
      peso: "9.2 kg",
      dimensiones: "38 × 37 × 44.5 cm",
      garantia: "2 años"
    },
    stores: [
      { name: "Amazon", price: 699, inStock: true, url: "#", isBest: true },
      { name: "MediaMarkt", price: 749, inStock: true, url: "#" }
    ]
  },
  {
    id: "gaggia-classic-pro",
    slug: "gaggia-classic-pro",
    name: "Gaggia Classic Pro",
    brand: "Gaggia",
    category: "maquinas",
    subCategory: "Manuales",
    price: 489,
    oldPrice: null,
    historicalAveragePrice: 489,
    isOffer: false,
    score: new CoffeeScore(8.6),
    stars: 4.5,
    badge: "El icono clásico",
    image: "/assets/pourover.png",
    gallery: ["/assets/pourover.png", "/assets/tamping.png"],
    shortDesc: "El estándar dorado de iniciación con grupo y portafiltro profesional de 58 mm comercial.",
    subscores: {
      espresso: 9.2,
      vapor: 8.0,
      facilidad: 7.5,
      construccion: 9.5,
      precio: 8.8
    },
    pros: [
      "Portafiltro profesional comercial de 58 mm",
      "Construcción legendaria en acero y latón macizo",
      "Comunidad inmensa y máxima capacidad de modificaciones (PID, resortes 9 bar)"
    ],
    cons: [
      "Caldera de aluminio pequeña (requiere surf de temperatura)",
      "Tubo de vapor requiere purga previa"
    ],
    specs: {
      bomba: "15 bar (con OPV)",
      potencia: "1200 W",
      calentamiento: "5-7 min",
      pid: "No",
      deposito: "2.1 L",
      vaporizador: "Manual comercial",
      molinillo: "No",
      portafiltro: "58 mm latón macizo",
      peso: "7.3 kg",
      dimensiones: "23 × 38 × 24 cm",
      garantia: "2 años"
    },
    stores: [
      { name: "Gaggia Store", price: 489, inStock: true, url: "#", isBest: true },
      { name: "Amazon", price: 499, inStock: true, url: "#" }
    ]
  },
  {
    id: "breville-barista-touch",
    slug: "breville-barista-touch",
    name: "Breville Barista Touch",
    brand: "Breville",
    category: "maquinas",
    subCategory: "Superautomáticas",
    price: 1199,
    oldPrice: 1299,
    historicalAveragePrice: 1249,
    isOffer: true,
    score: new CoffeeScore(8.9),
    stars: 4.7,
    badge: "Máxima tecnología",
    image: "/assets/guy-small.png",
    gallery: ["/assets/guy-small.png", "/assets/pouring.png"],
    shortDesc: "Pantalla táctil intuitiva, recetas guiadas y texturizado de leche con microespuma automática.",
    subscores: {
      espresso: 8.9,
      vapor: 9.2,
      facilidad: 9.7,
      construccion: 8.8,
      precio: 7.9
    },
    pros: [
      "Pantalla táctil a color con menús preprogramados y recetas personalizadas",
      "Calentamiento ThermoJet en 3 segundos",
      "Molinillo de muelas cónicas templadas con dosificación automática"
    ],
    cons: [
      "Inversión inicial elevada",
      "Portafiltro de 54 mm"
    ],
    specs: {
      bomba: "15 bar italiana",
      potencia: "1680 W",
      calentamiento: "3 seg",
      pid: "Sí digital",
      deposito: "2.0 L",
      vaporizador: "Auto MilQ digital",
      molinillo: "Sí integrado (30 ajustes)",
      portafiltro: "54 mm acero",
      peso: "10.3 kg",
      dimensiones: "32 × 32 × 41 cm",
      garantia: "2 años"
    },
    stores: [
      { name: "Amazon", price: 1199, inStock: true, url: "#", isBest: true }
    ]
  },

  // --- MOLINOS DE CAFÉ ---
  {
    id: "eureka-mignon-specialita",
    slug: "eureka-mignon-specialita",
    name: "Eureka Mignon Specialita",
    brand: "Eureka",
    category: "molinos",
    subCategory: "Eléctricos",
    price: 369,
    oldPrice: 449,
    historicalAveragePrice: 429,
    isOffer: true,
    score: new CoffeeScore(8.8),
    stars: 4.8,
    badge: "Mejor molino eléctrico",
    image: "/assets/bag.png",
    gallery: ["/assets/bag.png", "/assets/tamping.png"],
    shortDesc: "Muelas planas de 55 mm, tecnología silenciosa y ajuste micrométrico continuo sin pasos.",
    subscores: {
      espresso: 9.5,
      vapor: 9.0,
      facilidad: 8.8,
      construccion: 9.4,
      precio: 8.7
    },
    pros: [
      "Ajuste micrométrico continuo stepless patentado por Eureka",
      "Motor sumamente silencioso con aislamiento acústico",
      "Pantalla táctil digital con temporizador para dosis simple y doble",
      "Muelas planas de acero templado de 55 mm"
    ],
    cons: [
      "Dial de ajuste pequeño para alternar con frecuencia entre filtro y espresso",
      "Retención residual leve sin accesorio de fuelle"
    ],
    specs: {
      tipoMuelas: "Planas 55 mm acero templado",
      potencia: "310 W (1350 RPM)",
      ajuste: "Micrométrico continuo stepless",
      retencion: "< 1.2 g",
      capacidadTolva: "300 g",
      peso: "5.6 kg",
      dimensiones: "12 × 18 × 35 cm",
      dosificador: "Pantalla táctil digital por tiempo",
      garantia: "2 años"
    },
    stores: [
      { name: "Café Especial Store", price: 369, inStock: true, url: "#", isBest: true },
      { name: "Amazon", price: 389, inStock: true, url: "#" }
    ]
  },
  {
    id: "comandante-c40-mk4",
    slug: "comandante-c40-mk4",
    name: "Comandante C40 MK4 Nitro Blade",
    brand: "Comandante",
    category: "molinos",
    subCategory: "Manuales",
    price: 269,
    oldPrice: 289,
    historicalAveragePrice: 279,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.9,
    badge: "Referencia mundial",
    image: "/assets/cherries.png",
    gallery: ["/assets/cherries.png", "/assets/pourover.png"],
    shortDesc: "Muelas cónicas de acero Nitro Blade martensítico de alta aleación. La cúspide de la molienda manual.",
    subscores: {
      espresso: 9.2,
      vapor: 9.9,
      facilidad: 8.6,
      construccion: 9.9,
      precio: 8.2
    },
    pros: [
      "Geometría de muelas Nitro Blade inigualable en claridad de taza",
      "Construcción indestructible con eje de doble rodamiento",
      "Cero retención real y portabilidad total",
      "Incluye dos frascos de cristal (transparente y polímero ámbar)"
    ],
    cons: [
      "Moler espresso muy fino requiere tiempo y esfuerzo muscular",
      "Para microajustes en espresso se recomienda accesorio Red Clix"
    ],
    specs: {
      tipoMuelas: "Cónicas Nitro Blade acero inox patentado",
      potencia: "Manual",
      ajuste: "Click graduado interno",
      retencion: "0.05 g (Prácticamente cero)",
      capacidadTolva: "40 g",
      peso: "740 g",
      dimensiones: "6 × 16 cm (sin manivela)",
      dosificador: "Frasco colector",
      garantia: "5 años"
    },
    stores: [
      { name: "Right Side Coffee", price: 269, inStock: true, url: "#", isBest: true },
      { name: "Nomad Coffee", price: 275, inStock: true, url: "#" }
    ]
  },
  {
    id: "df64-gen2",
    slug: "df64-gen2",
    name: "DF64 Gen 2 Single Dose",
    brand: "DF64",
    category: "molinos",
    subCategory: "Para espresso",
    price: 429,
    oldPrice: 479,
    historicalAveragePrice: 459,
    isOffer: true,
    score: new CoffeeScore(9.1),
    stars: 4.7,
    badge: "Mejor single-dose",
    image: "/assets/bag.png",
    gallery: ["/assets/bag.png", "/assets/pouring.png"],
    shortDesc: "Muelas planas de 64 mm, generador de plasma antiestático y retención prácticamente nula.",
    subscores: {
      espresso: 9.6,
      vapor: 9.4,
      facilidad: 8.7,
      construccion: 9.0,
      precio: 9.2
    },
    pros: [
      "Generador de iones de plasma que elimina la electricidad estática",
      "Compatibilidad total con muelas SSP de 64 mm",
      "Diseñado desde cero para flujo de trabajo Single Dose (dosis única)"
    ],
    cons: [
      "Motor con sonido más industrial",
      "Requiere limpiar el conducto con fuelle tras usos continuados"
    ],
    specs: {
      tipoMuelas: "Planas 64 mm acero DLC",
      potencia: "250 W",
      ajuste: "Stepless graduado frontal",
      retencion: "< 0.2 g con fuelle",
      capacidadTolva: "Single dose (50 g)",
      peso: "6.8 kg",
      dimensiones: "13 × 22 × 30 cm",
      dosificador: "Vaso dosificador de aluminio 58 mm",
      garantia: "2 años"
    },
    stores: [
      { name: "Barista Lab", price: 429, inStock: true, url: "#", isBest: true }
    ]
  },
  {
    id: "fellow-ode-gen2",
    slug: "fellow-ode-gen2",
    name: "Fellow Ode Gen 2",
    brand: "Fellow",
    category: "molinos",
    subCategory: "Para filtro",
    price: 349,
    oldPrice: null,
    historicalAveragePrice: 349,
    isOffer: false,
    score: new CoffeeScore(9.0),
    stars: 4.8,
    badge: "Rey del filtro y pour-over",
    image: "/assets/cherries.png",
    gallery: ["/assets/cherries.png", "/assets/pourover.png"],
    shortDesc: "Muelas de 64 mm de nueva generación optimizadas para Chemex, V60, Batch Brew y AeroPress.",
    subscores: {
      espresso: 5.0,
      vapor: 9.5,
      facilidad: 9.8,
      construccion: 9.3,
      precio: 8.6
    },
    pros: [
      "Claridad sensorial extraordinaria en métodos de filtro",
      "Parada automática inteligente al terminar de moler",
      "Tecnología antiestática y aldaba mecánica de expulsión de café"
    ],
    cons: [
      "No muele fino para espresso (diseño específico de filtro)",
      "Tolva pensada estrictamente para dosis unitaria (dosis máxima 100 g)"
    ],
    specs: {
      tipoMuelas: "Planas 64 mm Gen 2 Burrs",
      potencia: "140 W con PID de motor",
      ajuste: "31 pasos graduados frontales",
      retencion: "< 0.3 g",
      capacidadTolva: "100 g",
      peso: "4.5 kg",
      dimensiones: "12 × 24 × 24 cm",
      dosificador: "Vaso magnético con aletas",
      garantia: "2 años"
    },
    stores: [
      { name: "Fellow Official", price: 349, inStock: true, url: "#", isBest: true },
      { name: "Amazon", price: 359, inStock: true, url: "#" }
    ]
  },

  // --- ACCESORIOS ---
  {
    id: "aeropress-original",
    slug: "aeropress-original",
    name: "AeroPress Original Coffee Maker",
    brand: "AeroPress",
    category: "accesorios",
    subCategory: "Cafeteras manuales",
    price: 42,
    oldPrice: 48,
    historicalAveragePrice: 46,
    isOffer: true,
    score: new CoffeeScore(9.5),
    stars: 4.9,
    badge: "Indispensable",
    image: "/assets/walking.png",
    gallery: ["/assets/walking.png", "/assets/pouring.png"],
    shortDesc: "La cafetera manual más versátil y duradera del mundo. Extrae por inmersión y presión suave.",
    subscores: {
      espresso: 8.5,
      vapor: 9.0,
      facilidad: 9.9,
      construccion: 9.8,
      precio: 9.8
    },
    pros: [
      "Prácticamente indestructible y ultraligera para viajes",
      "Limpieza en menos de 10 segundos",
      "Infinidad de recetas y técnicas de extracción"
    ],
    cons: [
      "Capacidad limitada a 1 o 2 tazas por tanda",
      "Requiere microfiltros de papel o filtro metálico opcional"
    ],
    specs: {
      material: "Copolíester libre de BPA / Tritan",
      capacidad: "250 ml",
      peso: "226 g",
      garantia: "1 año"
    },
    stores: [
      { name: "Amazon", price: 42, inStock: true, url: "#", isBest: true }
    ]
  },
  {
    id: "fellow-stagg-ekg",
    slug: "fellow-stagg-ekg",
    name: "Fellow Stagg EKG Hervidor Eléctrico",
    brand: "Fellow",
    category: "accesorios",
    subCategory: "Hervidores",
    price: 169,
    oldPrice: 189,
    historicalAveragePrice: 185,
    isOffer: true,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Mejor hervidor pour-over",
    image: "/assets/pourover.png",
    gallery: ["/assets/pourover.png", "/assets/pouring.png"],
    shortDesc: "Cuello de cisne balanceado, control de temperatura grado a grado y pantalla LCD discreta.",
    subscores: {
      espresso: 9.0,
      vapor: 9.0,
      facilidad: 9.6,
      construccion: 9.5,
      precio: 8.0
    },
    pros: [
      "Flujo de vertido continuo y ultrapreciso",
      "Mantiene la temperatura deseada durante 60 minutos (modo Hold)",
      "Cronómetro de extracción integrado"
    ],
    cons: [
      "Precio elevado para un hervidor",
      "Capacidad útil de 900 ml"
    ],
    specs: {
      material: "Acero inox 304 y base plástica mate",
      capacidad: "900 ml",
      potencia: "1200 W",
      peso: "1.2 kg",
      garantia: "2 años"
    },
    stores: [
      { name: "Fellow", price: 169, inStock: true, url: "#", isBest: true }
    ]
  },
  {
    id: "normcore-v4-tamper",
    slug: "normcore-v4-tamper",
    name: "Normcore V4 Tamper Dinamométrico 58.5mm",
    brand: "Normcore",
    category: "accesorios",
    subCategory: "Herramientas de barista",
    price: 49,
    oldPrice: null,
    historicalAveragePrice: 49,
    isOffer: false,
    score: new CoffeeScore(9.2),
    stars: 4.7,
    badge: "Prensado perfecto",
    image: "/assets/tamping.png",
    gallery: ["/assets/tamping.png"],
    shortDesc: "Guía de nivelación autonivelante y resortes intercambiables de 15lb, 25lb y 30lb.",
    subscores: {
      espresso: 9.7,
      vapor: 9.0,
      facilidad: 9.8,
      construccion: 9.4,
      precio: 9.0
    },
    pros: [
      "Elimina por completo el error humano de prensar torcido",
      "Incluye 3 resortes calibrados intercambiables",
      "Base de 58.5 mm que cubre todo el perímetro del filtro"
    ],
    cons: [
      "Diseñado solo para filtros de 58mm"
    ],
    specs: {
      material: "Acero inox y aluminio anodizado",
      peso: "380 g",
      resortes: "15 lb, 25 lb, 30 lb incluidos"
    },
    stores: [
      { name: "Amazon", price: 49, inStock: true, url: "#", isBest: true }
    ]
  },

  // --- CAFÉ EN GRANO Y TOSTADORES ---
  {
    id: "nomad-challenger-blend",
    slug: "nomad-challenger-blend",
    name: "Nomad Coffee — Challenger Espresso Blend",
    brand: "Nomad Coffee",
    category: "cafe",
    subCategory: "Espresso",
    price: 13.50,
    oldPrice: null,
    historicalAveragePrice: 13.50,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.9,
    badge: "Favorito Barcelona",
    image: "/assets/cherries.png",
    gallery: ["/assets/cherries.png", "/assets/latte-hand.png"],
    shortDesc: "Notas a chocolate con leche, avellana tostada y caramelo cremoso. Perfecto para espresso y flat whites.",
    subscores: {
      espresso: 9.6,
      vapor: 9.2,
      facilidad: 9.4,
      construccion: 9.0,
      precio: 9.1
    },
    pros: [
      "Perfil balanceado, dulce y con acidez muy amable",
      "Extremadamente consistente y fácil de calibrar en molino",
      "Tostado semanalmente en Poblenou, Barcelona"
    ],
    cons: [
      "Bolsa estándar de 250 g se termina rápido"
    ],
    specs: {
      origen: "Brasil & Colombia",
      proceso: "Lavado / Natural",
      tueste: "Medio espresso",
      notas: "Chocolate negro, caramelo, frutos secos"
    },
    stores: [
      { name: "Nomad Web Oficial", price: 13.50, inStock: true, url: "#", isBest: true }
    ]
  },
  {
    id: "rightside-ethiopia-kercha",
    slug: "rightside-ethiopia-kercha",
    name: "Right Side Coffee — Ethiopia Guji Kercha",
    brand: "Right Side",
    category: "cafe",
    subCategory: "Filtro",
    price: 15.00,
    oldPrice: null,
    historicalAveragePrice: 15.00,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 5.0,
    badge: "Top Origen Único",
    image: "/assets/bag.png",
    gallery: ["/assets/bag.png", "/assets/pourover.png"],
    shortDesc: "Explosión floral con notas a jazmín, melocotón blanco y bergamota. Tueste para filtro y pour-over.",
    subscores: {
      espresso: 8.8,
      vapor: 9.0,
      facilidad: 9.2,
      construccion: 9.6,
      precio: 8.9
    },
    pros: [
      "Increíble complejidad aromática y floral",
      "Puntuación SCA superior a 88 puntos",
      "Tostado por Joaquín Parra (Castelldefels / BCN)"
    ],
    cons: [
      "Requiere agua de mineralización débil para brillar"
    ],
    specs: {
      origen: "Guji, Etiopía (2.100 m)",
      proceso: "Lavado tradicional",
      tueste: "Ligero / Filtro",
      notas: "Jazmín, melocotón, té negro earl grey"
    },
    stores: [
      { name: "Right Side Web", price: 15.00, inStock: true, url: "#", isBest: true }
    ]
  }
];

export const BARCELONA_ROASTERS: BarcelonaRoaster[] = [
  { name: "Nomad Coffee", district: "Poblenou / Born", priceKg: 28.00, origins: "Colombia, Etiopía, Brasil, Guatemala", roastFreq: "Semanal (Lun/Jue)", score: 9.6, signature: "Challenger & Frutas" },
  { name: "Right Side Coffee", district: "Castelldefels / Eixample", priceKg: 27.00, origins: "Etiopía, Kenia, Honduras, El Salvador", roastFreq: "Semanal", score: 9.5, signature: "Guji Natural & Fincas" },
  { name: "Three Marks Coffee", district: "Fort Pienc / Poblenou", priceKg: 24.50, origins: "Ruanda, Colombia, Costa Rica", roastFreq: "Martes / Viernes", score: 9.2, signature: "Filter Roast Series" },
  { name: "Satan's Coffee Corner", district: "Barrio Gótico", priceKg: 26.50, origins: "Sumatra, Etiopía, Brasil", roastFreq: "Semanal", score: 9.0, signature: "Cold Brew & Darker Espresso" },
  { name: "Syra Coffee", district: "Gràcia / Múltiples", priceKg: 25.00, origins: "Perú, Colombia, Kenia", roastFreq: "Diario", score: 8.7, signature: "House Espresso Single Origin" },
  { name: "SlowMov", district: "Gràcia", priceKg: 29.00, origins: "Honduras, Brasil, Ruanda", roastFreq: "Bajo demanda", score: 9.3, signature: "Microlotes sostenibles" },
  { name: "Hidden Coffee Roasters", district: "Les Corts / El Born", priceKg: 26.00, origins: "Nicaragua, Etiopía, Colombia", roastFreq: "Bi-semanal", score: 9.1, signature: "Volcano Blend" }
];

export const BUYING_GUIDES: BuyingGuide[] = [
  {
    id: "guia-mejores-cafeteras-espresso-casa",
    slug: "mejores-cafeteras-espresso-casa",
    title: "Las mejores cafeteras espresso para casa en 2026",
    subtitle: "De 300 € a 1.500 €: comparamos estabilidad térmica, presión real y facilidad de uso.",
    category: "Guías de compra",
    readTime: "8 min",
    image: "/assets/woman-coffee.png",
    featured: true
  },
  {
    id: "como-elegir-un-molino-de-cafe",
    slug: "como-elegir-un-molino-de-cafe",
    title: "Cómo elegir un molino de café: muelas planas vs cónicas",
    subtitle: "Por qué el molino influye más en el sabor que la propia máquina y en qué debes fijarte.",
    category: "Técnica y equipo",
    readTime: "10 min",
    image: "/assets/cherries.png",
    featured: true
  },
  {
    id: "bambino-plus-vs-gaggia-classic-pro",
    slug: "bambino-plus-vs-gaggia-classic-pro",
    title: "Sage Bambino Plus vs Gaggia Classic Pro",
    subtitle: "Tecnología moderna y rapidez contra el estándar clásico de 58 mm comercial.",
    category: "Cara a cara",
    readTime: "6 min",
    image: "/assets/tamping.png",
    featured: false
  },
  {
    id: "mejores-molinos-menos-500-euros",
    slug: "mejores-molinos-menos-500-euros",
    title: "Los mejores molinos por menos de 500 €",
    subtitle: "Probamos los líderes del mercado en retención, uniformidad y nivel sonoro.",
    category: "Rankings",
    readTime: "7 min",
    image: "/assets/bag.png",
    featured: false
  },
  {
    id: "guia-presupuesto-cafe-especialidad",
    slug: "guia-presupuesto-cafe-especialidad",
    title: "Qué cafetera comprar según tu presupuesto real",
    subtitle: "Configuraciones recomendadas para 250 €, 600 €, 1.200 € y más de 2.000 €.",
    category: "Presupuestos",
    readTime: "9 min",
    image: "/assets/walking.png",
    featured: false
  }
];
