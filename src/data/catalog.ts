import { Product, ProductCategory } from '../core/domain/Product';
import { BuyingGuide } from '../core/domain/Roaster';
import { CoffeeScore } from '../core/domain/Score';

export interface BarcelonaRoaster {
  name: string;
  district: string;
  priceKg: number;
  origins: string;
  roastFreq: string;
  score: number;
  signature: string;
}

export const CATEGORIES: { id: ProductCategory; name: string; icon: string; count: number }[] = [
  { id: 'maquinas', name: 'Máquinas de Café', icon: '', count: 42 },
  { id: 'molinos', name: 'Molinos de Café', icon: '', count: 16 },
  { id: 'accesorios', name: 'Accesorios Barista', icon: '', count: 57 },
  { id: 'cafe', name: 'Café de Especialidad', icon: '', count: 280 }
];

export const BRANDS = [
  'Sage',
  'Lelit',
  "De'Longhi",
  'Gaggia',
  'Rancilio',
  'Profitec',
  'Rocket Espresso',
  'Flair Espresso',
  'La Pavoni',
  'Moccamaster',
  'Ascaso',
  'Eureka',
  'Fellow',
  'Niche',
  'KINGrinder',
  'Comandante',
  'Timemore',
  'Baratza',
  'AeroPress',
  'Chemex',
  'Bialetti',
  'Nomad Coffee',
  'Syra Coffee',
  'Right Side Coffee',
  'Three Marks Coffee',
  'The Barn Berlin',
  'La Cabra',
  'April Coffee',
  'Onyx Coffee Lab',
  'Sey Coffee',
  'Black & White Coffee',
  'Kurasu Kyoto',
  'Proud Mary Coffee',
  'Market Lane'
];

export const PRODUCTS: Product[] = [
  {
    id: "sage-bambino-plus",
    slug: "sage-bambino-plus",
    name: "Sage Bambino Plus",
    brand: "Sage",
    category: "maquinas",
    subCategory: "Semiautomáticas",
    price: 449,
    oldPrice: 499,
    historicalAveragePrice: 471,
    isOffer: true,
    score: new CoffeeScore(8.4),
    stars: 4.8,
    badge: "Mejor para empezar",
    image: "/assets/products/sage-bambino.png",
    gallery: ["/assets/products/sage-bambino.png"],
    shortDesc: "Compacta, calentamiento ThermoJet en 3 segundos y vaporizador automático asistido con sensor de temperatura.",
    subscores: {"espresso":8.3,"vapor":8.5,"facilidad":9.4,"construccion":8.2,"precio":8.8},
    pros: ["Calentamiento instantáneo en 3s","Vaporización automática de calidad microespuma","Tamaño ultra-compacto"],
    cons: ["Portafiltro de 54mm en vez de 58mm","Bandeja de goteo pequeña"],
    specs: {"Caldera / Calentamiento":"ThermoJet (3 segundos)","Portafiltro":"54 mm acero inoxidable","Presión":"15 bar (OPV a 9 bar)","Vaporizador":"Automático con 3 temperaturas y texturas","Capacidad Agua":"1.9 L","Dimensiones":"19.5 x 32 x 31 cm","Peso":"4.95 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 449,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sage%20Sage%20Bambino%20Plus&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 467,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sage%20Sage%20Bambino%20Plus+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 485,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sage%20Sage%20Bambino%20Plus&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "sage-bambino",
    slug: "sage-bambino",
    name: "Sage Bambino",
    brand: "Sage",
    category: "maquinas",
    subCategory: "Manuales",
    price: 349,
    oldPrice: 399,
    historicalAveragePrice: 366,
    isOffer: true,
    score: new CoffeeScore(8.2),
    stars: 4.8,
    badge: "Mejor compacta",
    image: "/assets/products/sage-bambino.png",
    gallery: ["/assets/products/sage-bambino.png"],
    shortDesc: "La versión pura de la Bambino con vaporizador manual tradicional y extracción con preinfusión a baja presión.",
    subscores: {"espresso":8.1,"vapor":8,"facilidad":8.9,"construccion":8,"precio":9.1},
    pros: ["Excelente relación calidad/precio","Calentamiento instantáneo","Vaporizador manual con buena potencia"],
    cons: ["Sin sensor de temperatura automático","Carcasa ligera"],
    specs: {"Caldera / Calentamiento":"ThermoJet (3s)","Portafiltro":"54 mm","Presión":"15 bar regulada","Vaporizador":"Manual profesional","Capacidad Agua":"1.4 L","Dimensiones":"16 x 31 x 30 cm","Peso":"4.5 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 349,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sage%20Sage%20Bambino&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 363,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sage%20Sage%20Bambino+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 377,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sage%20Sage%20Bambino&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "sage-barista-express",
    slug: "sage-barista-express",
    name: "Sage Barista Express",
    brand: "Sage",
    category: "maquinas",
    subCategory: "Con molinillo",
    price: 629,
    oldPrice: 699,
    historicalAveragePrice: 660,
    isOffer: true,
    score: new CoffeeScore(8.6),
    stars: 4.8,
    badge: "Todo en uno",
    image: "/assets/products/sage-barista-express.png",
    gallery: ["/assets/products/sage-barista-express.png"],
    shortDesc: "La cafetera todo en uno más vendida del mundo: molinillo cónico de precisión integrado con control digital PID y manómetro.",
    subscores: {"espresso":8.5,"vapor":8.3,"facilidad":8.8,"construccion":8.7,"precio":8.9},
    pros: ["Setup completo en un solo aparato","Control de temperatura PID preciso","Manómetro de extracción en tiempo real"],
    cons: ["El molinillo integrado tiene saltos entre puntos","Requiere limpieza frecuente del molino"],
    specs: {"Molinillo":"Muelas cónicas acero inox (18 ajustes)","Calentamiento":"Thermocoil 1600W con PID","Portafiltro":"54 mm acero inox","Manómetro":"Analógico de presión de extracción","Capacidad Grano":"250 g","Capacidad Agua":"2.0 L","Peso":"10.6 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 629,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sage%20Sage%20Barista%20Express&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 654,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sage%20Sage%20Barista%20Express+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 679,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sage%20Sage%20Barista%20Express&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "sage-barista-touch",
    slug: "sage-barista-touch",
    name: "Sage Barista Touch",
    brand: "Sage",
    category: "maquinas",
    subCategory: "Con molinillo",
    price: 999,
    oldPrice: 1199,
    historicalAveragePrice: 1049,
    isOffer: true,
    score: new CoffeeScore(8.8),
    stars: 4.8,
    badge: "Pantalla táctil",
    image: "/assets/products/sage-barista-touch.png",
    gallery: ["/assets/products/sage-barista-touch.png"],
    shortDesc: "Pantalla táctil interactiva a color con recetas preconfiguradas y personalizables, sistema ThermoJet y espumado automático.",
    subscores: {"espresso":8.7,"vapor":8.8,"facilidad":9.6,"construccion":8.6,"precio":8.3},
    pros: ["Interfaz intuitiva con guardado de perfiles","Calentamiento en 3 segundos","Texturizado de leche automático"],
    cons: ["Precio más elevado","Ajuste de molido por pasos"],
    specs: {"Pantalla":"Táctil a color interactiva","Molinillo":"Muelas cónicas integradas","Calentamiento":"ThermoJet 3 segundos","Vapor":"Automático Auto MilQ","Capacidad Agua":"2.0 L","Peso":"10.3 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 999,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sage%20Sage%20Barista%20Touch&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 1039,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sage%20Sage%20Barista%20Touch+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 1079,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sage%20Sage%20Barista%20Touch&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "sage-dual-boiler",
    slug: "sage-dual-boiler",
    name: "Sage Dual Boiler",
    brand: "Sage",
    category: "maquinas",
    subCategory: "Doble caldera",
    price: 1299,
    oldPrice: 1499,
    historicalAveragePrice: 1364,
    isOffer: true,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Doble caldera",
    image: "/assets/products/sage-dual-boiler.png",
    gallery: ["/assets/products/sage-dual-boiler.png"],
    shortDesc: "Doble caldera de acero inoxidable con doble control PID digital, grupo comercial de 58 mm saturado y válvula OPV regulable.",
    subscores: {"espresso":9.6,"vapor":9.3,"facilidad":8.7,"construccion":8.9,"precio":9.4},
    pros: ["Estabilidad térmica insuperable a este precio","Extracción y vapor simultáneos","Portafiltro estándar de 58mm"],
    cons: ["Estética de electrodoméstico","Mantenimiento de juntas periódicas"],
    specs: {"Calderas":"Doble caldera inox (Café 0.3L + Vapor 0.95L)","Grupo":"58 mm comercial con resistencia activa","Control":"Doble PID digital regulable grado a grado","Válvula":"OPV a 9 bar regulable","Capacidad Agua":"2.5 L","Peso":"13.6 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 1299,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sage%20Sage%20Dual%20Boiler&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 1351,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sage%20Sage%20Dual%20Boiler+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 1403,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sage%20Sage%20Dual%20Boiler&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "lelit-anna-pl41tem",
    slug: "lelit-anna-pl41tem",
    name: "Lelit Anna PL41TEM",
    brand: "Lelit",
    category: "maquinas",
    subCategory: "Semiautomáticas",
    price: 549,
    oldPrice: 599,
    historicalAveragePrice: 576,
    isOffer: true,
    score: new CoffeeScore(8.7),
    stars: 4.8,
    badge: "Mejor control PID",
    image: "/assets/products/lelit-anna.png",
    gallery: ["/assets/products/lelit-anna.png"],
    shortDesc: "Fabricada en Italia con caldera de latón de 250 ml, control digital PID de temperatura y manómetro analógico retroiluminado.",
    subscores: {"espresso":8.8,"vapor":8.2,"facilidad":8.4,"construccion":9,"precio":9.2},
    pros: ["Control PID preciso","Caldera de latón con gran inercia térmica","Construcción robusta en acero"],
    cons: ["Medida de portafiltro de 57mm","Tiempo de calentamiento ~10 min"],
    specs: {"Caldera":"Latón 250 ml","Grupo":"57 mm Lelit","Control":"PID digital integrado","Manómetro":"Sí, presión bomba","Cuerpo":"Acero inoxidable pulido","Depósito":"2.7 L","Peso":"7.2 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 549,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Lelit%20Lelit%20Anna%20PL41TEM&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 571,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Lelit%20Lelit%20Anna%20PL41TEM+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 593,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Lelit%20Lelit%20Anna%20PL41TEM&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "lelit-glenda-pl41plus",
    slug: "lelit-glenda-pl41plus",
    name: "Lelit Glenda PL41PLUS",
    brand: "Lelit",
    category: "maquinas",
    subCategory: "Semiautomáticas",
    price: 699,
    oldPrice: 749,
    historicalAveragePrice: 734,
    isOffer: true,
    score: new CoffeeScore(8.8),
    stars: 4.8,
    badge: "Grupo 58mm",
    image: "/assets/products/lelit-glenda-pl41plus.png",
    gallery: ["/assets/products/lelit-glenda-pl41plus.png"],
    shortDesc: "Grupo profesional estándar de 58 mm comercial con caldera de latón de 300 ml y control digital de temperatura PID.",
    subscores: {"espresso":9,"vapor":8.4,"facilidad":8.5,"construccion":9.1,"precio":9},
    pros: ["Grupo estándar comercial de 58mm","Mayor caldera para estabilidad","PID integrado"],
    cons: ["Monocaldera (espera entre café y vapor)","Diseño sobrio"],
    specs: {"Caldera":"Latón 300 ml","Grupo":"58 mm estándar comercial","Control":"PID electrónico","Válvula":"Solenoide 3 vías","Depósito":"2.7 L","Peso":"9.0 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 699,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Lelit%20Lelit%20Glenda%20PL41PLUS&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 727,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Lelit%20Lelit%20Glenda%20PL41PLUS+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 755,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Lelit%20Lelit%20Glenda%20PL41PLUS&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "lelit-victoria-pl91t",
    slug: "lelit-victoria-pl91t",
    name: "Lelit Victoria PL91T",
    brand: "Lelit",
    category: "maquinas",
    subCategory: "Semiautomáticas",
    price: 899,
    oldPrice: 999,
    historicalAveragePrice: 944,
    isOffer: true,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Centro de control LCC",
    image: "/assets/products/lelit-victoria-pl91t.png",
    gallery: ["/assets/products/lelit-victoria-pl91t.png"],
    shortDesc: "Línea VIP con display gráfico LCC OLED: preinfusión programable, shot timer, caldera de latón de 300 ml y portafiltro de 58 mm.",
    subscores: {"espresso":9.3,"vapor":8.6,"facilidad":9.1,"construccion":9.2,"precio":9.1},
    pros: ["Centro de control LCC muy completo","Preinfusión configurable","Shot timer automático al extraer"],
    cons: ["Monocaldera","Bandeja de goteo superficial"],
    specs: {"Caldera":"Latón 300 ml","Grupo":"58 mm VIP","Display":"LCC gráfico multifunción","Preinfusión":"Programable digitalmente","Shot Timer":"Integrado en pantalla","Peso":"9.2 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 899,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Lelit%20Lelit%20Victoria%20PL91T&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 935,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Lelit%20Lelit%20Victoria%20PL91T+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 971,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Lelit%20Lelit%20Victoria%20PL91T&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "lelit-mara-x-v2",
    slug: "lelit-mara-x-v2",
    name: "Lelit Mara X V2",
    brand: "Lelit",
    category: "maquinas",
    subCategory: "Intercambiador (HX)",
    price: 1199,
    oldPrice: 1299,
    historicalAveragePrice: 1259,
    isOffer: true,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Reina del HX",
    image: "/assets/products/lelit-mara-x.png",
    gallery: ["/assets/products/lelit-mara-x.png"],
    shortDesc: "La máquina HX más silenciosa y estable del mercado con legendario grupo E61, doble sonda de temperatura y selector de perfil.",
    subscores: {"espresso":9.5,"vapor":9.5,"facilidad":8.8,"construccion":9.6,"precio":9.5},
    pros: ["No requiere purgas de enfriamiento (cooling flush)","Extracción y vapor potente simultáneo","Bomba casi inaudible"],
    cons: ["Requiere 20-25 min de calentamiento del grupo E61","Peso elevado"],
    specs: {"Sistema":"Intercambiador de calor (HX) prioritario café","Grupo":"E61 termosifónico","Bomba":"Vibratoria ultra-silenciosa con soporte patentado","Caldera":"Acero inox 1.8 L","Dimensiones":"22 x 41 x 35 cm","Peso":"18.8 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 1199,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Lelit%20Lelit%20Mara%20X%20V2&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 1247,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Lelit%20Lelit%20Mara%20X%20V2+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 1295,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Lelit%20Lelit%20Mara%20X%20V2&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "lelit-bianca-v3",
    slug: "lelit-bianca-v3",
    name: "Lelit Bianca V3",
    brand: "Lelit",
    category: "maquinas",
    subCategory: "Doble caldera",
    price: 2199,
    oldPrice: 2399,
    historicalAveragePrice: 2309,
    isOffer: true,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Referencia Prosumer",
    image: "/assets/products/lelit-bianca-v3.png",
    gallery: ["/assets/products/lelit-bianca-v3.png"],
    shortDesc: "Doble caldera independiente de acero inox, bomba rotativa silenciosa y paleta (paddle) de madera para perfilado de flujo manual.",
    subscores: {"espresso":9.8,"vapor":9.8,"facilidad":8.6,"construccion":9.7,"precio":9.6},
    pros: ["Control total de caudal y presión en tiempo real","Bomba rotativa silenciosa con conexión directa a red","Detalles en madera noble de nogal"],
    cons: ["Tamaño y peso considerable","Curva de aprendizaje para dominar el perfilado"],
    specs: {"Calderas":"Doble caldera inox (Café 0.8L + Vapor 1.5L)","Grupo":"E61 modificado con válvula de flujo","Perfilado":"Paddle mecánico manual 0-12 bar","Bomba":"Rotativa comercial (conexión a red o depósito)","Depósito":"Reposicionable en 3 lados","Peso":"26.5 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 2199,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Lelit%20Lelit%20Bianca%20V3&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 2287,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Lelit%20Lelit%20Bianca%20V3+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 2375,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Lelit%20Lelit%20Bianca%20V3&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "gaggia-classic-pro",
    slug: "gaggia-classic-pro",
    name: "Gaggia Classic Pro",
    brand: "Gaggia",
    category: "maquinas",
    subCategory: "Semiautomáticas",
    price: 429,
    oldPrice: 479,
    historicalAveragePrice: 450,
    isOffer: true,
    score: new CoffeeScore(8.5),
    stars: 4.8,
    badge: "Clásico italiano",
    image: "/assets/products/gaggia-classic-pro.png",
    gallery: ["/assets/products/gaggia-classic-pro.png"],
    shortDesc: "El icono del espresso casero desde 1991: grupo comercial de 58 mm, electroválvula de 3 vías y vaporizador profesional.",
    subscores: {"espresso":8,"vapor":8.3,"facilidad":8.2,"construccion":9,"precio":9},
    pros: ["Enorme comunidad y facilidad de modificación","Chasis indestructible","Grupo de 58mm comercial"],
    cons: ["Sin PID de fábrica (termostato bimétalico)","Capacidad de caldera pequeña"],
    specs: {"Caldera":"Aluminio tradicional 100 ml","Grupo":"58 mm comercial latón cromado","Electroválvula":"3 vías para pastilla seca","Vapor":"Lanza profesional de dos orificios","Carcasa":"Acero inoxidable cepillado","Peso":"7.3 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 429,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Gaggia%20Gaggia%20Classic%20Pro&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 446,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Gaggia%20Gaggia%20Classic%20Pro+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 463,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Gaggia%20Gaggia%20Classic%20Pro&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "rancilio-silvia",
    slug: "rancilio-silvia",
    name: "Rancilio Silvia",
    brand: "Rancilio",
    category: "maquinas",
    subCategory: "Semiautomáticas",
    price: 599,
    oldPrice: 649,
    historicalAveragePrice: 629,
    isOffer: true,
    score: new CoffeeScore(8.6),
    stars: 4.8,
    badge: "Robusta de latón",
    image: "/assets/products/rancilio-silvia.png",
    gallery: ["/assets/products/rancilio-silvia.png"],
    shortDesc: "Diseño industrial indestructible con caldera de latón marino de 300 ml, grupo comercial de 58 mm y marco de acero.",
    subscores: {"espresso":8.4,"vapor":9.1,"facilidad":7.9,"construccion":9.7,"precio":8.8},
    pros: ["Construcción de nivel comercial para durar décadas","Potencia de vapor referente en monocaldera","Grupo 58mm estándar"],
    cons: ["Requiere técnica de temp-surfing sin PID","Tiempo de calentamiento ~15 min"],
    specs: {"Caldera":"Latón marino 300 ml aislada","Grupo":"58 mm latón forjado","Vapor":"Lanza comercial multidireccional","Chasis":"Hierro y acero inoxidable","Depósito":"2.0 L","Peso":"14.0 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 599,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Rancilio%20Rancilio%20Silvia&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 623,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Rancilio%20Rancilio%20Silvia+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 647,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Rancilio%20Rancilio%20Silvia&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "rancilio-silvia-pro-x",
    slug: "rancilio-silvia-pro-x",
    name: "Rancilio Silvia Pro X",
    brand: "Rancilio",
    category: "maquinas",
    subCategory: "Doble caldera",
    price: 1549,
    oldPrice: 1699,
    historicalAveragePrice: 1626,
    isOffer: true,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Doble caldera con PID",
    image: "/assets/products/rancilio-silvia-pro-x.png",
    gallery: ["/assets/products/rancilio-silvia-pro-x.png"],
    shortDesc: "Doble caldera independiente de latón con doble control PID digital, preinfusión suave programable (Soft Infusion) y manómetro.",
    subscores: {"espresso":9.7,"vapor":9.6,"facilidad":8.9,"construccion":9.6,"precio":9.4},
    pros: ["Estabilidad térmica de precisión quirúrgica","Preinfusión suave que previene la canalización","Potencia de vapor continua"],
    cons: ["Estética industrial austera","Sin opción de conexión directa a red"],
    specs: {"Calderas":"Doble caldera (Café latón 0.3L + Vapor inox 1.0L)","Control":"Doble PID digital regulable","Preinfusión":"Soft Infusion a baja presión","Grupo":"58 mm profesional","Manómetro":"Analógico frontal","Peso":"20.0 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 1549,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Rancilio%20Rancilio%20Silvia%20Pro%20X&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 1611,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Rancilio%20Rancilio%20Silvia%20Pro%20X+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 1673,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Rancilio%20Rancilio%20Silvia%20Pro%20X&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "profitec-go",
    slug: "profitec-go",
    name: "Profitec GO",
    brand: "Profitec",
    category: "maquinas",
    subCategory: "Semiautomáticas",
    price: 899,
    oldPrice: 949,
    historicalAveragePrice: 944,
    isOffer: true,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Diseño alemán",
    image: "/assets/products/profitec-go.png",
    gallery: ["/assets/products/profitec-go.png"],
    shortDesc: "Ingeniería alemana compacta con caldera de latón de 400 ml, calentamiento rápido Fast Heat-Up, pantalla OLED PID y manómetro.",
    subscores: {"espresso":9.4,"vapor":8.8,"facilidad":9.2,"construccion":9.6,"precio":9.3},
    pros: ["Calentamiento rápido en menos de 7 minutos","Válvula OPV regulable desde el exterior","Pantalla OLED con temporizador integrado"],
    cons: ["Monocaldera (espera para vapor)","Bandeja de goteo algo justa"],
    specs: {"Caldera":"Latón 0.4 L","Grupo":"58 mm comercial con campana de latón","Control":"PID frontal con shot timer","Calentamiento":"Fast Heat-Up (~5-7 min)","OPV":"Regulable externamente","Peso":"12.9 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 899,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Profitec%20Profitec%20GO&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 935,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Profitec%20Profitec%20GO+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 971,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Profitec%20Profitec%20GO&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "profitec-drive",
    slug: "profitec-drive",
    name: "Profitec Drive",
    brand: "Profitec",
    category: "maquinas",
    subCategory: "Doble caldera",
    price: 2699,
    oldPrice: 2899,
    historicalAveragePrice: 2834,
    isOffer: true,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Tope de gama",
    image: "/assets/products/profitec-drive.png",
    gallery: ["/assets/products/profitec-drive.png"],
    shortDesc: "El buque insignia con doble caldera de acero inox, grupo E61 con perfilado de flujo activo, bomba rotativa y encendido programable.",
    subscores: {"espresso":9.9,"vapor":9.9,"facilidad":8.8,"construccion":9.9,"precio":9.3},
    pros: ["Construcción suprema de precisión alemana","Caldera de vapor descomunal de 2.0L","Perfilado de flujo y preinfusión activa"],
    cons: ["Inversión de alto presupuesto","Peso de 31 kg"],
    specs: {"Calderas":"Doble caldera inox (Café 0.75L + Vapor 2.0L)","Grupo":"E61 con Flow Control integrado","Bomba":"Rotativa comercial ultra-silenciosa","Display":"OLED discreto con múltiples menús","Auto-On":"Programador semanal de encendido","Peso":"31.0 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 2699,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Profitec%20Profitec%20Drive&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 2807,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Profitec%20Profitec%20Drive+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 2915,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Profitec%20Profitec%20Drive&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "rocket-appartamento",
    slug: "rocket-appartamento",
    name: "Rocket Appartamento",
    brand: "Rocket Espresso",
    category: "maquinas",
    subCategory: "Intercambiador (HX)",
    price: 1399,
    oldPrice: 1499,
    historicalAveragePrice: 1469,
    isOffer: true,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Estética icónica",
    image: "/assets/products/rocket-appartamento.png",
    gallery: ["/assets/products/rocket-appartamento.png"],
    shortDesc: "Diseño icónico de Milán con paneles circulares troquelados, legendario grupo E61 y caldera de cobre de 1.8 L con intercambiador.",
    subscores: {"espresso":8.9,"vapor":9.6,"facilidad":8.4,"construccion":9.7,"precio":8.9},
    pros: ["Estética que enamora en cualquier cocina","Potencia de vapor impecable","Chasis y grupo E61 de máxima robustez"],
    cons: ["Sin control PID digital de fábrica","Requiere purga de enfriamiento ocasional"],
    specs: {"Caldera":"Cobre 1.8 L con intercambiador termosifónico","Grupo":"E61 macizo de latón","Presostato":"Sirai / Mater de alta durabilidad","Lanzas":"Anti-quemaduras (Cool Touch)","Dimensiones":"27.4 x 42.5 x 36 cm","Peso":"20.0 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 1399,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Rocket%20Espresso%20Rocket%20Appartamento&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 1455,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Rocket%20Espresso%20Rocket%20Appartamento+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 1511,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Rocket%20Espresso%20Rocket%20Appartamento&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "flair-58-plus",
    slug: "flair-58-plus",
    name: "Flair 58 Plus",
    brand: "Flair Espresso",
    category: "maquinas",
    subCategory: "Manuales",
    price: 649,
    oldPrice: 699,
    historicalAveragePrice: 681,
    isOffer: true,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Palanca manual",
    image: "/assets/products/flair-58-plus.png",
    gallery: ["/assets/products/flair-58-plus.png"],
    shortDesc: "Extracción manual pura de palanca con portafiltro estándar de 58 mm comercial, precalentamiento eléctrico activo y manómetro.",
    subscores: {"espresso":9.6,"vapor":6,"facilidad":8.2,"construccion":9.6,"precio":9.6},
    pros: ["Perfilado de presión manual absoluto","Precalentamiento eléctrico que elimina la pérdida térmica","Portafiltro de 58mm compatible con cestas de competición"],
    cons: ["No tiene vaporizador de leche","Totalmente manual shot a shot"],
    specs: {"Cámara":"Acero inox con calentador eléctrico integrado (3 niveles)","Portafiltro":"58 mm comercial con mango de nogal","Presión":"Manual directa hasta 12 bar","Manómetro":"Analógico en vástago de émbolo","Peso":"5.5 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 649,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Flair%20Espresso%20Flair%2058%20Plus&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 675,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Flair%20Espresso%20Flair%2058%20Plus+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 701,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Flair%20Espresso%20Flair%2058%20Plus&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "la-pavoni-europiccola",
    slug: "la-pavoni-europiccola",
    name: "La Pavoni Europiccola",
    brand: "La Pavoni",
    category: "maquinas",
    subCategory: "Manuales",
    price: 749,
    oldPrice: 829,
    historicalAveragePrice: 786,
    isOffer: true,
    score: new CoffeeScore(8.9),
    stars: 4.8,
    badge: "Patrimonio histórico",
    image: "/assets/products/la-pavoni-europiccola.png",
    gallery: ["/assets/products/la-pavoni-europiccola.png"],
    shortDesc: "Pieza de museo del diseño industrial italiano desde 1961: caldera de latón macizo y palanca mecánica de pistón directo.",
    subscores: {"espresso":8,"vapor":8.9,"facilidad":7.5,"construccion":9.8,"precio":8.9},
    pros: ["Diseño eterno y reparabilidad de por vida","Extracción manual auténtica con gran crema","Vapor potente e instantáneo"],
    cons: ["Curva de aprendizaje empinada","Se sobrecalienta tras varios cafés consecutivos"],
    specs: {"Caldera":"Latón cromado 0.8 L (8 tazas)","Grupo":"Palanca mecánica de latón 51 mm","Vapor":"Lanza de vapor continua desde caldera","Base":"Acero cromado","Peso":"5.5 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 749,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=La%20Pavoni%20La%20Pavoni%20Europiccola&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 779,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=La%20Pavoni%20La%20Pavoni%20Europiccola+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 809,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=La%20Pavoni%20La%20Pavoni%20Europiccola&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "technivorm-moccamaster-kbg-select",
    slug: "technivorm-moccamaster-kbg-select",
    name: "Technivorm Moccamaster KBG Select",
    brand: "Moccamaster",
    category: "maquinas",
    subCategory: "Filtro / Goteo",
    price: 249,
    oldPrice: 289,
    historicalAveragePrice: 261,
    isOffer: true,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Referencia en Filtro",
    image: "/assets/products/moccamaster-kbg-select.png",
    gallery: ["/assets/products/moccamaster-kbg-select.png"],
    shortDesc: "Fabricada a mano en Holanda con certificación ECBC y SCA: elemento calefactor de cobre que mantiene los 92-96 °C exactos.",
    subscores: {"espresso":9.9,"vapor":5,"facilidad":9.8,"construccion":9.8,"precio":9.5},
    pros: ["La mejor cafetera de filtro por goteo del mundo","Temperatura y tiempo de contacto de agua certificados SCA","Garantía de 5 años del fabricante"],
    cons: ["Solo para café de filtro (no espresso)","Jarra de cristal requiere cuidado"],
    specs: {"Capacidad":"1.25 L (10 tazas)","Elemento":"Cobre puro de doble resistencia","Temperatura":"92 °C - 96 °C constante","Selector":"Jarra completa o media jarra con flujo adaptado","Placa":"Térmica con auto-apagado tras 40 min","Peso":"2.8 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 249,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Moccamaster%20Technivorm%20Moccamaster%20KBG%20Select&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 259,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Moccamaster%20Technivorm%20Moccamaster%20KBG%20Select+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 269,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Moccamaster%20Technivorm%20Moccamaster%20KBG%20Select&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "de-longhi-dedica-ec685",
    slug: "de-longhi-dedica-ec685",
    name: "De'Longhi Dedica EC685",
    brand: "De'Longhi",
    category: "maquinas",
    subCategory: "Manuales",
    price: 169,
    oldPrice: 219,
    historicalAveragePrice: 177,
    isOffer: true,
    score: new CoffeeScore(7.9),
    stars: 4.8,
    badge: "Económica",
    image: "/assets/products/delonghi-dedica.png",
    gallery: ["/assets/products/delonghi-dedica.png"],
    shortDesc: "Supercompacta de 15 cm de ancho con calentamiento rápido Thermoblock y portafiltro presurizado de fácil uso.",
    subscores: {"espresso":7.5,"vapor":7.2,"facilidad":9,"construccion":7.6,"precio":9.4},
    pros: ["Muy compacta","Calentamiento rápido","Precio muy asequible"],
    cons: ["Portafiltro presurizado de serie","Vaporizador básico"],
    specs: {"Sistema":"Thermoblock","Presión":"15 bar","Ancho":"15 cm","Depósito":"1.1 L","Peso":"4.2 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 169,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=De'Longhi%20De'Longhi%20Dedica%20EC685&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 176,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=De'Longhi%20De'Longhi%20Dedica%20EC685+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 183,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=De'Longhi%20De'Longhi%20Dedica%20EC685&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "de-longhi-specialista-prestigio",
    slug: "de-longhi-specialista-prestigio",
    name: "De'Longhi Specialista Prestigio",
    brand: "De'Longhi",
    category: "maquinas",
    subCategory: "Con molinillo",
    price: 699,
    oldPrice: 799,
    historicalAveragePrice: 734,
    isOffer: true,
    score: new CoffeeScore(8.5),
    stars: 4.8,
    badge: "Smart Tamping",
    image: "/assets/products/delonghi-specialista.png",
    gallery: ["/assets/products/delonghi-specialista.png"],
    shortDesc: "Estación de prensado asistido Smart Tamping con sensor de dosis óptima y vaporizador profesional My LatteArt.",
    subscores: {"espresso":8.4,"vapor":8.6,"facilidad":9.2,"construccion":8.5,"precio":8.7},
    pros: ["Prensado limpio sin derrames","Doble termobloque para café y vapor sin esperas","Kit completo"],
    cons: ["Ajuste de molino por pasos amplios","Tamaño generoso"],
    specs: {"Molinillo":"Sensor Grinding con 8 ajustes","Prensado":"Smart Tamping Station","Calentamiento":"Doble Thermoblock","Peso":"13.0 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 699,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=De'Longhi%20De'Longhi%20Specialista%20Prestigio&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 727,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=De'Longhi%20De'Longhi%20Specialista%20Prestigio+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 755,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=De'Longhi%20De'Longhi%20Specialista%20Prestigio&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "de-longhi-magnifica-s",
    slug: "de-longhi-magnifica-s",
    name: "De'Longhi Magnifica S",
    brand: "De'Longhi",
    category: "maquinas",
    subCategory: "Superautomáticas",
    price: 299,
    oldPrice: 399,
    historicalAveragePrice: 314,
    isOffer: true,
    score: new CoffeeScore(8.1),
    stars: 4.8,
    badge: "Superautomática top",
    image: "/assets/products/delonghi-magnifica-s.png",
    gallery: ["/assets/products/delonghi-magnifica-s.png"],
    shortDesc: "Muele y extrae café en grano al pulsar un botón con selector de intensidad y vaporizador Cappuccino System.",
    subscores: {"espresso":7.8,"vapor":7,"facilidad":9.8,"construccion":7.9,"precio":9.5},
    pros: ["Café recién molido al pulsar un botón","Fácil limpieza con grupo extraíble","Excelente relación calidad/precio"],
    cons: ["Menor cuerpo y crema que una manual","Vaporizador manual lento"],
    specs: {"Molinillo":"Cónico de acero con 13 ajustes","Presión":"15 bar","Depósito":"1.8 L","Capacidad Grano":"250 g","Peso":"9.0 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 299,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=De'Longhi%20De'Longhi%20Magnifica%20S&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 311,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=De'Longhi%20De'Longhi%20Magnifica%20S+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 323,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=De'Longhi%20De'Longhi%20Magnifica%20S&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "ascaso-steel-duo-pid",
    slug: "ascaso-steel-duo-pid",
    name: "Ascaso Steel Duo PID",
    brand: "Ascaso",
    category: "maquinas",
    subCategory: "Semiautomáticas",
    price: 1699,
    oldPrice: 1799,
    historicalAveragePrice: 1784,
    isOffer: true,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Doble termobloque",
    image: "/assets/products/ascaso-steel-duo-pid.png",
    gallery: ["/assets/products/ascaso-steel-duo-pid.png"],
    shortDesc: "Doble termobloque de circuito inox continuo con PID, control volumétrico programable y luces LED de trabajo.",
    subscores: {"espresso":9.4,"vapor":9.3,"facilidad":9.1,"construccion":9.5,"precio":9},
    pros: ["Calentamiento en 3 minutos","Agua siempre fresca sin estancamiento en caldera","Diseño barcelonés elegante"],
    cons: ["Precio premium en gama de termobloque"],
    specs: {"Calentamiento":"Doble Termobloque Acero Inox","Control":"PID digital con display","Grupo":"58 mm comercial","Preinfusión":"1 a 5 segundos programable","Peso":"15.0 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 1699,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Ascaso%20Ascaso%20Steel%20Duo%20PID&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 1767,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Ascaso%20Ascaso%20Steel%20Duo%20PID+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 1835,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Ascaso%20Ascaso%20Steel%20Duo%20PID&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "fellow-ode-gen-2",
    slug: "fellow-ode-gen-2",
    name: "Fellow Ode Gen 2",
    brand: "Fellow",
    category: "molinos",
    subCategory: "Eléctricos",
    price: 399,
    oldPrice: 449,
    historicalAveragePrice: 419,
    isOffer: true,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Rey del Filtro",
    image: "/assets/products/fellow-ode-gen-2.png",
    gallery: ["/assets/products/fellow-ode-gen-2.png"],
    shortDesc: "Muelas planas Gen 2 de 64 mm de acero inoxidable optimizadas para café de filtro, tecnología antiestática ionizada y parada automática.",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.6,"construccion":9.5,"precio":9.3},
    pros: ["Claridad y separación de sabores suprema en filtro","Cero estática gracias a los iones","Parada automática al terminar"],
    cons: ["Diseñado exclusivamente para filtro","Tolva de tamaño single dose"],
    specs: {"Muelas":"Planas 64 mm acero inoxidable Gen 2","Ajuste":"31 pasos micrométricos","Retención":"Tecnología ionizadora antiestática (<0.1g)","Motor":"Accionamiento directo con PID y parada auto","Capacidad":"100 g","Peso":"4.5 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 399,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Fellow%20Fellow%20Ode%20Gen%202&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 415,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Fellow%20Fellow%20Ode%20Gen%202+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 431,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Fellow%20Fellow%20Ode%20Gen%202&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "fellow-opus-conical-burr",
    slug: "fellow-opus-conical-burr",
    name: "Fellow Opus Conical Burr",
    brand: "Fellow",
    category: "molinos",
    subCategory: "Eléctricos",
    price: 199,
    oldPrice: 229,
    historicalAveragePrice: 209,
    isOffer: true,
    score: new CoffeeScore(8.8),
    stars: 4.8,
    badge: "Todo terreno",
    image: "/assets/products/fellow-opus.png",
    gallery: ["/assets/products/fellow-opus.png"],
    shortDesc: "Muelas cónicas C-Mill de 40 mm y 6 aspas para moler desde espresso fino hasta Cold Brew grueso con ajuste micrométrico interno.",
    subscores: {"espresso":8.5,"vapor":5,"facilidad":8.7,"construccion":8.6,"precio":9.2},
    pros: ["Capacidad real de moler para espresso y filtro","Tecnología antiestática limpia","Diseño Fellow moderno y compacto"],
    cons: ["Ajuste fino interno requiere consultar la guía","Carcasa exterior plástica"],
    specs: {"Muelas":"Cónicas 40 mm acero al carbono","Ajuste":"41 pasos exteriores + micro-ajuste interno","Rango":"Espresso, Moka, Filtro, Prensa francesa, Cold Brew","Tecnología":"Antiestática integrada","Peso":"2.3 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 199,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Fellow%20Fellow%20Opus%20Conical%20Burr&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 207,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Fellow%20Fellow%20Opus%20Conical%20Burr+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 215,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Fellow%20Fellow%20Opus%20Conical%20Burr&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "niche-zero-grinder",
    slug: "niche-zero-grinder",
    name: "Niche Zero Grinder",
    brand: "Niche",
    category: "molinos",
    subCategory: "Eléctricos Single Dose",
    price: 599,
    oldPrice: 649,
    historicalAveragePrice: 629,
    isOffer: true,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Cero Retención",
    image: "/assets/products/niche-zero.png",
    gallery: ["/assets/products/niche-zero.png"],
    shortDesc: "El molinillo single dose que revolucionó el espresso casero: muelas cónicas comerciales Mazzer de 63 mm y flujo directo sin retención.",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.8,"construccion":9.7,"precio":9.4},
    pros: ["Retención cero sin necesidad de fuelles","Muelas Mazzer 63mm con cuerpo y dulzura excepcionales","Motor ultra silencioso"],
    cons: ["Importación y disponibilidad limitada","Enfocado 90% a espresso"],
    specs: {"Muelas":"Cónicas Mazzer 63 mm acero endurecido","Ajuste":"Continuo sin pasos (stepless) con esfera grabada","Retención":"Menor a 0.1 g garantizada","Motor":"Baja velocidad 330 RPM silencioso","Peso":"4.1 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 599,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Niche%20Niche%20Zero%20Grinder&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 623,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Niche%20Niche%20Zero%20Grinder+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 647,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Niche%20Niche%20Zero%20Grinder&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "eureka-mignon-specialita",
    slug: "eureka-mignon-specialita",
    name: "Eureka Mignon Specialita",
    brand: "Eureka",
    category: "molinos",
    subCategory: "Eléctricos",
    price: 419,
    oldPrice: 479,
    historicalAveragePrice: 440,
    isOffer: true,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Silencioso & Táctil",
    image: "/assets/products/eureka-specialita.png",
    gallery: ["/assets/products/eureka-specialita.png"],
    shortDesc: "Muelas planas de 55 mm de acero templado, pantalla táctil con temporizador de dosificación y tecnología silenciosa Silent Technology.",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.5,"precio":9.2},
    pros: ["Motor silencioso con amortiguación acústica","Molienda esponjosa y sin grumos","Regulación micrométrica suave"],
    cons: ["Dificultad para cambiar rápidamente entre espresso y filtro"],
    specs: {"Muelas":"Planas 55 mm acero endurecido","Ajuste":"Micrométrico continuo patentado","Pantalla":"Táctil digital con dosis simple/doble","RPM":"1350","Peso":"5.6 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 419,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Eureka%20Eureka%20Mignon%20Specialita&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 436,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Eureka%20Eureka%20Mignon%20Specialita+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 453,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Eureka%20Eureka%20Mignon%20Specialita&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "eureka-mignon-silenzio",
    slug: "eureka-mignon-silenzio",
    name: "Eureka Mignon Silenzio",
    brand: "Eureka",
    category: "molinos",
    subCategory: "Eléctricos",
    price: 349,
    oldPrice: 389,
    historicalAveragePrice: 366,
    isOffer: true,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Silencioso Esencial",
    image: "/assets/products/eureka-mignon-silenzio.png",
    gallery: ["/assets/products/eureka-mignon-silenzio.png"],
    shortDesc: "Muelas planas de 50 mm con sistema silencioso anti-vibración y temporizador analógico lateral.",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9,"construccion":9.4,"precio":9.3},
    pros: ["Silencioso","Construcción en aluminio macizo","Ajuste micrométrico"],
    cons: ["Sin pantalla digital"],
    specs: {"Muelas":"Planas 50 mm acero","Ajuste":"Micrométrico stepless","Temporizador":"Analógico regulable","Peso":"5.6 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 349,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Eureka%20Eureka%20Mignon%20Silenzio&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 363,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Eureka%20Eureka%20Mignon%20Silenzio+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 377,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Eureka%20Eureka%20Mignon%20Silenzio&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "eureka-mignon-zero",
    slug: "eureka-mignon-zero",
    name: "Eureka Mignon Zero",
    brand: "Eureka",
    category: "molinos",
    subCategory: "Eléctricos Single Dose",
    price: 399,
    oldPrice: 439,
    historicalAveragePrice: 419,
    isOffer: true,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Single Dose",
    image: "/assets/products/eureka-mignon-zero.png",
    gallery: ["/assets/products/eureka-mignon-zero.png"],
    shortDesc: "Diseñado para dosis única con fuelle Blow-Up, tolva inclinada Mignon Zero y vaso dosificador de acero inoxidable.",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.2,"construccion":9.5,"precio":9.3},
    pros: ["Retención cercana a cero con el fuelle","Muelas de 55mm rápidas","Vaso dosificador incluido"],
    cons: ["Requiere bombear el fuelle tras cada molienda"],
    specs: {"Muelas":"Planas 55 mm","Fuelle":"Blow Up Cleaning","Vaso":"Dosing cup inox 45g","Peso":"5.6 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 399,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Eureka%20Eureka%20Mignon%20Zero&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 415,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Eureka%20Eureka%20Mignon%20Zero+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 431,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Eureka%20Eureka%20Mignon%20Zero&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "kingrinder-k6",
    slug: "kingrinder-k6",
    name: "KINGrinder K6",
    brand: "KINGrinder",
    category: "molinos",
    subCategory: "Manuales",
    price: 119,
    oldPrice: 139,
    historicalAveragePrice: 125,
    isOffer: true,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Mejor Calidad / Precio",
    image: "/assets/products/kingrinder-k6.png",
    gallery: ["/assets/products/kingrinder-k6.png"],
    shortDesc: "Molinillo manual con muelas heptagonales de 48 mm y anillo exterior de micro-ajuste de 16 micras por clic.",
    subscores: {"espresso":9,"vapor":5,"facilidad":8.9,"construccion":9.3,"precio":9.8},
    pros: ["Ajuste exterior comodísimo sin abrir el depósito","Velocidad de molienda rápida para espresso","Calidad de molienda al nivel de molinos de 400€"],
    cons: ["Molienda manual","Grip requiere fuerza para tuestes claros"],
    specs: {"Muelas":"Heptagonales 48 mm acero inox","Ajuste":"Exterior con 60 clics por vuelta (16 µm por clic)","Compatibilidad":"Espresso y Filtro","Capacidad":"35 g","Cuerpo":"Aluminio anodizado","Peso":"630 g"},
    stores: [
          {
                "name": "Amazon",
                "price": 119,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=KINGrinder%20KINGrinder%20K6&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 124,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=KINGrinder%20KINGrinder%20K6+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 129,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=KINGrinder%20KINGrinder%20K6&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "comandante-c40-mk4-nitro-blade",
    slug: "comandante-c40-mk4-nitro-blade",
    name: "Comandante C40 MK4 Nitro Blade",
    brand: "Comandante",
    category: "molinos",
    subCategory: "Manuales",
    price: 269,
    oldPrice: 299,
    historicalAveragePrice: 282,
    isOffer: true,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Referente Alemán",
    image: "/assets/products/comandante-c40.png",
    gallery: ["/assets/products/comandante-c40.png"],
    shortDesc: "El patrón oro de la molienda manual: muelas patentadas Nitro Blade de acero martensítico con alto contenido de nitrógeno.",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.2,"construccion":9.9,"precio":9.2},
    pros: ["Uniformidad geométrica de partículas insuperable","Construcción artesanal en la Selva Negra","Durabilidad legendaria"],
    cons: ["Ajuste interior por clics","Precio alto para un molino manual"],
    specs: {"Muelas":"Nitro Blade acero inoxidable de alto nitrógeno","Ajuste":"Clics internos Click-System","Eje":"Doble rodamiento de bolas de acero","Cuerpo":"Madera noble de roble y acero inox","Peso":"740 g"},
    stores: [
          {
                "name": "Amazon",
                "price": 269,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Comandante%20Comandante%20C40%20MK4%20Nitro%20Blade&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 280,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Comandante%20Comandante%20C40%20MK4%20Nitro%20Blade+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 291,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Comandante%20Comandante%20C40%20MK4%20Nitro%20Blade&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "timemore-chestnut-c3-pro",
    slug: "timemore-chestnut-c3-pro",
    name: "Timemore Chestnut C3 PRO",
    brand: "Timemore",
    category: "molinos",
    subCategory: "Manuales",
    price: 89,
    oldPrice: 109,
    historicalAveragePrice: 93,
    isOffer: true,
    score: new CoffeeScore(8.9),
    stars: 4.8,
    badge: "Compacto & Plegable",
    image: "/assets/products/timemore-c3-pro.png",
    gallery: ["/assets/products/timemore-c3-pro.png"],
    shortDesc: "Muelas cónicas Spike-to-Cut (S2C 660) patentadas con manivela plegable y cuerpo de aleación de aluminio texturizado.",
    subscores: {"espresso":8.4,"vapor":5,"facilidad":9.4,"construccion":9.1,"precio":9.6},
    pros: ["Manivela plegable para transporte","Muelas S2C que cortan antes de moler","Precio accesible"],
    cons: ["Menos pasos en rango espresso que KINGrinder"],
    specs: {"Muelas":"S2C 660 38 mm acero SUS420","Manivela":"Plegable con resorte patentado","Cuerpo":"Aluminio con grabado diamante","Capacidad":"25 g","Peso":"473 g"},
    stores: [
          {
                "name": "Amazon",
                "price": 89,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Timemore%20Timemore%20Chestnut%20C3%20PRO&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 93,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Timemore%20Timemore%20Chestnut%20C3%20PRO+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 96,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Timemore%20Timemore%20Chestnut%20C3%20PRO&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "baratza-encore-esp",
    slug: "baratza-encore-esp",
    name: "Baratza Encore ESP",
    brand: "Baratza",
    category: "molinos",
    subCategory: "Eléctricos",
    price: 199,
    oldPrice: 229,
    historicalAveragePrice: 209,
    isOffer: true,
    score: new CoffeeScore(8.7),
    stars: 4.8,
    badge: "Iniciación al Espresso",
    image: "/assets/products/baratza-encore-esp.png",
    gallery: ["/assets/products/baratza-encore-esp.png"],
    shortDesc: "El clásico Encore reinventado: muelas cónicas M2 de 40 mm con micro-ajuste de 20 pasos de alta resolución para espresso.",
    subscores: {"espresso":8.5,"vapor":5,"facilidad":9.2,"construccion":8.3,"precio":9.3},
    pros: ["Facilidad de calibración para espresso","Repuestos económicos y disponibles","Vaso dosificador incluido"],
    cons: ["Carcasa de plástico","Nivel sonoro medio"],
    specs: {"Muelas":"Cónicas M2 40 mm acero","Ajustes":"40 (1-20 micro-ajuste espresso, 21-40 macro filtro)","Tolva":"230 g","Vaso":"Dosing cup 54mm incluido","Peso":"3.1 kg"},
    stores: [
          {
                "name": "Amazon",
                "price": 199,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Baratza%20Baratza%20Encore%20ESP&tag=thecoffeescore-21",
                "isBest": true
          },
          {
                "name": "Tienda Barista Especializada",
                "price": 207,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Baratza%20Baratza%20Encore%20ESP+barista&tag=thecoffeescore-21"
          },
          {
                "name": "El Corte Inglés",
                "price": 215,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Baratza%20Baratza%20Encore%20ESP&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "nomad-coffee-karimiuki",
    slug: "nomad-coffee-karimiuki",
    name: "Nomad Coffee — Karimiuki",
    brand: "Nomad Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 23.5,
    oldPrice: null,
    historicalAveragePrice: 24.91,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0772/5485/2893/files/karimikui-filtro-cafe-de-especialidad-de-kenia-tostado-en-barcelona-por-nomad-coffee-1.webp?v=1787761139",
    gallery: ["https://cdn.shopify.com/s/files/1/0772/5485/2893/files/karimikui-filtro-cafe-de-especialidad-de-kenia-tostado-en-barcelona-por-nomad-coffee-1.webp?v=1787761139","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/karimikui-filtro-cafe-de-especialidad-de-kenia-tostado-en-barcelona-por-nomad-coffee-2.webp?v=1787761141","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/karimikui-filtro-cafe-de-especialidad-de-kenia-tostado-en-barcelona-por-nomad-coffee-3.webp?v=1787761524"],
    shortDesc: "Uno de los cafés con más cuerpo e intensidad que hemos tenido en el menú de NOMAD. Su fragancia nos recuerda a la fruta de hueso, a la miel y a la panela. En cuerpo es intenso...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Nomad Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Nomad Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://nomadcoffee.es","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Nomad Coffee (España)",
                "price": 23.5,
                "inStock": true,
                "url": "https://nomadcoffee.es/products/karimiuki",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 24.68,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Nomad%20Coffee%20Karimiuki&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "nomad-coffee-bombe-natural",
    slug: "nomad-coffee-bombe-natural",
    name: "Nomad Coffee — Bombe Natural",
    brand: "Nomad Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 23,
    oldPrice: null,
    historicalAveragePrice: 24.38,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0772/5485/2893/files/bombe-natural-espresso-cafe-de-especialidad-de-etiopia-tostado-en-barcelona-por-nomad-coffee-1.webp?v=1787761117",
    gallery: ["https://cdn.shopify.com/s/files/1/0772/5485/2893/files/bombe-natural-espresso-cafe-de-especialidad-de-etiopia-tostado-en-barcelona-por-nomad-coffee-1.webp?v=1787761117","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/bombe-natural-espresso-cafe-de-especialidad-de-etiopia-tostado-en-barcelona-por-nomad-coffee-2.webp?v=1787761119","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/bombe-natural-espresso-cafe-de-especialidad-de-etiopia-tostado-en-barcelona-por-nomad-coffee-3.webp?v=1787761119"],
    shortDesc: "En los cafés de proceso natural de Etiopía es muy característico encontrar notas a arándanos, chocolate con leche y dátil. Y este lote tiene todo eso y un poquito más. Hemos e...",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Nomad Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Nomad Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://nomadcoffee.es","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Nomad Coffee (España)",
                "price": 23,
                "inStock": true,
                "url": "https://nomadcoffee.es/products/bombe-natural-espresso",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 24.15,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Nomad%20Coffee%20Bombe%20Natural&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "nomad-coffee-acacia-hills-gesha",
    slug: "nomad-coffee-acacia-hills-gesha",
    name: "Nomad Coffee — Acacia Hills Gesha",
    brand: "Nomad Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 35,
    oldPrice: null,
    historicalAveragePrice: 37.1,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0772/5485/2893/files/acacia-hills-gesha-cafe-de-especialidad-de-tanzania-tostado-en-barcelona-por-nomad-coffee-1.webp?v=1787761573",
    gallery: ["https://cdn.shopify.com/s/files/1/0772/5485/2893/files/acacia-hills-gesha-cafe-de-especialidad-de-tanzania-tostado-en-barcelona-por-nomad-coffee-1.webp?v=1787761573","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/acacia-hills-gesha-cafe-de-especialidad-de-tanzania-tostado-en-barcelona-por-nomad-coffee-2.webp?v=1787761572"],
    shortDesc: "Nos encanta este Geisha de Tanzania por su perfil afrutado y floral. En fragancia resaltan las notas florales y herbales que nos recuerdan al té Oolong junto a notas a frutas ...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Nomad Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Nomad Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://nomadcoffee.es","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Nomad Coffee (España)",
                "price": 35,
                "inStock": true,
                "url": "https://nomadcoffee.es/products/acacia-hills-gesha",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 36.75,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Nomad%20Coffee%20Acacia%20Hills%20Gesha&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "nomad-coffee-shakiso-hadeso",
    slug: "nomad-coffee-shakiso-hadeso",
    name: "Nomad Coffee — Shakiso Hadeso",
    brand: "Nomad Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 23,
    oldPrice: null,
    historicalAveragePrice: 24.38,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0772/5485/2893/files/shakiso-hadeso-espresso-cafe-de-especialidad-de-etiopia-tostado-en-barcelona-por-nomad-coffee-1.webp?v=1787746544",
    gallery: ["https://cdn.shopify.com/s/files/1/0772/5485/2893/files/shakiso-hadeso-espresso-cafe-de-especialidad-de-etiopia-tostado-en-barcelona-por-nomad-coffee-1.webp?v=1787746544","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/shakiso-hadeso-espresso-cafe-de-especialidad-de-etiopia-tostado-en-barcelona-por-nomad-coffee-2.webp?v=1787746546","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/shakiso-hadeso-espresso-cafe-de-especialidad-de-etiopia-tostado-en-barcelona-por-nomad-coffee-3.webp?v=1787746546","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/shakiso-hadeso-espresso-cafe-de-especialidad-de-etiopia-tostado-en-barcelona-por-nomad-coffee-4.webp?v=1787746546"],
    shortDesc: "Un café con una fragancia muy dulce y con notas florales que nos recuerdan al lemongrass y a la flor del almendro. También encontramos notas herbales como té blanco. En boca e...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Nomad Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Nomad Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://nomadcoffee.es","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Nomad Coffee (España)",
                "price": 23,
                "inStock": true,
                "url": "https://nomadcoffee.es/products/shakiso-hadeso-espresso",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 24.15,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Nomad%20Coffee%20Shakiso%20Hadeso&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "nomad-coffee-jarra-translucida-fellow",
    slug: "nomad-coffee-jarra-translucida-fellow",
    name: "Nomad Coffee — Jarra Translucida Fellow",
    brand: "Nomad Coffee",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 29.95,
    oldPrice: null,
    historicalAveragePrice: 31.75,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0772/5485/2893/files/fellowjarra.png?v=1787646731",
    gallery: ["https://cdn.shopify.com/s/files/1/0772/5485/2893/files/fellowjarra.png?v=1787646731"],
    shortDesc: "La Jarra Translúcida de Fellow es el complemento perfecto para tu ritual de café de filtro: soplada a mano en vidrio borosilicato, combina ligereza y resistencia con marca de ...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Nomad Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Nomad Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://nomadcoffee.es","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Nomad Coffee (España)",
                "price": 29.95,
                "inStock": true,
                "url": "https://nomadcoffee.es/products/jarra-translucida",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 31.45,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Nomad%20Coffee%20Jarra%20Translucida%20Fellow&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "nomad-coffee-barista-hustle-distribuidor-the-comb",
    slug: "nomad-coffee-barista-hustle-distribuidor-the-comb",
    name: "Nomad Coffee — Barista Hustle Distribuidor The Comb",
    brand: "Nomad Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 31,
    oldPrice: null,
    historicalAveragePrice: 32.86,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0772/5485/2893/files/thecomb1.png?v=1787645679",
    gallery: ["https://cdn.shopify.com/s/files/1/0772/5485/2893/files/thecomb1.png?v=1787645679","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/the_comb.png?v=1787645692"],
    shortDesc: "The Comb de Barista Hustle es la herramienta de referencia para aplicar la técnica WDT antes de cada extracción de espresso. Sus 30 agujas de punta redondeada rompen grumos de...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Nomad Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Nomad Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://nomadcoffee.es","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Nomad Coffee (España)",
                "price": 31,
                "inStock": true,
                "url": "https://nomadcoffee.es/products/barista-hustle-distribuidor-the-comb",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 32.55,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Nomad%20Coffee%20Barista%20Hustle%20Distribuidor%20The%20Comb&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "nomad-coffee-motta-picamarro-acero-inoxidable",
    slug: "nomad-coffee-motta-picamarro-acero-inoxidable",
    name: "Nomad Coffee — Motta Picamarro Acero Inoxidable",
    brand: "Nomad Coffee",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 39.5,
    oldPrice: null,
    historicalAveragePrice: 41.87,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0772/5485/2893/files/motta.png?v=1787645282",
    gallery: ["https://cdn.shopify.com/s/files/1/0772/5485/2893/files/motta.png?v=1787645282"],
    shortDesc: "El picamarro Motta es un básico de cualquier barra de café: fabricado en acero inoxidable robusto, permite vaciar la pastilla usada del portafiltro de un solo golpe, limpio y ...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Nomad Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Nomad Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://nomadcoffee.es","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Nomad Coffee (España)",
                "price": 39.5,
                "inStock": true,
                "url": "https://nomadcoffee.es/products/motta-picamarro-acero-inoxidable",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 41.48,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Nomad%20Coffee%20Motta%20Picamarro%20Acero%20Inoxidable&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "nomad-coffee-acaia-balanza-lunar",
    slug: "nomad-coffee-acaia-balanza-lunar",
    name: "Nomad Coffee — Acaia Balanza Lunar",
    brand: "Nomad Coffee",
    category: "accesorios",
    subCategory: "Básculas de Precisión",
    price: 280,
    oldPrice: null,
    historicalAveragePrice: 296.8,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0772/5485/2893/files/acaialunar_c39d3e28-c298-49e9-af49-10b2479e6e50.png?v=1787644703",
    gallery: ["https://cdn.shopify.com/s/files/1/0772/5485/2893/files/acaialunar_c39d3e28-c298-49e9-af49-10b2479e6e50.png?v=1787644703"],
    shortDesc: "La Acaia Lunar está pensada específicamente para espresso: su plato compacto encaja bajo cualquier portafiltro y su algoritmo mide peso y flujo de extracción en tiempo real, p...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Nomad Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Nomad Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://nomadcoffee.es","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Nomad Coffee (España)",
                "price": 280,
                "inStock": true,
                "url": "https://nomadcoffee.es/products/acaia-balanza-lunar-para-espresso-negro",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 294,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Nomad%20Coffee%20Acaia%20Balanza%20Lunar&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "nomad-coffee-acaia-balanza-pearl",
    slug: "nomad-coffee-acaia-balanza-pearl",
    name: "Nomad Coffee — Acaia Balanza Pearl",
    brand: "Nomad Coffee",
    category: "accesorios",
    subCategory: "Básculas de Precisión",
    price: 196,
    oldPrice: null,
    historicalAveragePrice: 207.76,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0772/5485/2893/files/acaiapearl_7daf44a6-3df9-4323-b213-2b57223ecc26.png?v=1787644413",
    gallery: ["https://cdn.shopify.com/s/files/1/0772/5485/2893/files/acaiapearl_7daf44a6-3df9-4323-b213-2b57223ecc26.png?v=1787644413"],
    shortDesc: "La Acaia Pearl es la báscula de precisión de referencia para el café de filtro: pesa hasta 2 kg con resolución de 0,1 g y se estabiliza en menos de un segundo, para vertidos e...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Nomad Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Nomad Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://nomadcoffee.es","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Nomad Coffee (España)",
                "price": 196,
                "inStock": true,
                "url": "https://nomadcoffee.es/products/acaia-balanza-pearl",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 205.8,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Nomad%20Coffee%20Acaia%20Balanza%20Pearl&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "nomad-coffee-mhw-3bomber-juego-de-tubos-energy",
    slug: "nomad-coffee-mhw-3bomber-juego-de-tubos-energy",
    name: "Nomad Coffee — MHW-3BOMBER Juego de Tubos Energy",
    brand: "Nomad Coffee",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 75,
    oldPrice: null,
    historicalAveragePrice: 79.5,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0772/5485/2893/files/tubo3.png?v=1787641441",
    gallery: ["https://cdn.shopify.com/s/files/1/0772/5485/2893/files/tubo3.png?v=1787641441","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/tubo2.png?v=1787641441","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/tubo4.png?v=1787641441","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/tubo1.png?v=1787641468"],
    shortDesc: "El Juego de Tubos Energy de MHW-3BOMBER lleva el single dosing a otro nivel: cada tubo conserva tu café recién tostado en dosis individual, lista para verter directamente en e...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Nomad Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Nomad Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://nomadcoffee.es","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Nomad Coffee (España)",
                "price": 75,
                "inStock": true,
                "url": "https://nomadcoffee.es/products/mhw-3bomber-juego-de-tubos-energy-8-uds",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 78.75,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Nomad%20Coffee%20MHW-3BOMBER%20Juego%20de%20Tubos%20Energy&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "nomad-coffee-llavero-nomad-athome",
    slug: "nomad-coffee-llavero-nomad-athome",
    name: "Nomad Coffee — Llavero Nomad atHome",
    brand: "Nomad Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0772/5485/2893/files/llavero_73d59a53-f9fe-48ef-8c8e-e54db2b095ce.png?v=1785935788",
    gallery: ["https://cdn.shopify.com/s/files/1/0772/5485/2893/files/llavero_73d59a53-f9fe-48ef-8c8e-e54db2b095ce.png?v=1785935788","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/llavero_nomad_coffee.png?v=1786011683"],
    shortDesc: "Nuestro llavero NOMAD atHome es un pequeño objeto de diario para quienes llevan el café consigo a todas partes. Su diseño con el relieve atHome y su anilla de cable de acero l...",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Nomad Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Nomad Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://nomadcoffee.es","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Nomad Coffee (España)",
                "price": 12,
                "inStock": true,
                "url": "https://nomadcoffee.es/products/llavero-nomad-athome",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Nomad%20Coffee%20Llavero%20Nomad%20atHome&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "nomad-coffee-samuel-tunisisa",
    slug: "nomad-coffee-samuel-tunisisa",
    name: "Nomad Coffee — Samuel Tunisisa",
    brand: "Nomad Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 17.5,
    oldPrice: null,
    historicalAveragePrice: 18.55,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0772/5485/2893/files/E.ET.SAMU_1.png?v=1778678533",
    gallery: ["https://cdn.shopify.com/s/files/1/0772/5485/2893/files/E.ET.SAMU_1.png?v=1778678533","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/E.ET.SAMU_2.png?v=1778678535","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/E.ET.SAMU_3.png?v=1778678537"],
    shortDesc: "En fragancia y aroma es intenso y muy dulce. Podemos encontrar notas de naranja confitada y chocolate 70%. Nos recuerda a algún dulce típico de Navidad con chocolate y frutas ...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Nomad Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Nomad Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://nomadcoffee.es","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Nomad Coffee (España)",
                "price": 17.5,
                "inStock": false,
                "url": "https://nomadcoffee.es/products/samuel-tunisisa",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 18.38,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Nomad%20Coffee%20Samuel%20Tunisisa&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "nomad-coffee-pink-bourbon-fellow-farm",
    slug: "nomad-coffee-pink-bourbon-fellow-farm",
    name: "Nomad Coffee — Pink Bourbon Fellow Farm",
    brand: "Nomad Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 32.5,
    oldPrice: null,
    historicalAveragePrice: 34.45,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0772/5485/2893/files/C.CO.GESHA_FELLOW_FARM_1_dbd06138-bfbf-4c75-bfed-fc3172bc3203.png?v=1784734454",
    gallery: ["https://cdn.shopify.com/s/files/1/0772/5485/2893/files/C.CO.GESHA_FELLOW_FARM_1_dbd06138-bfbf-4c75-bfed-fc3172bc3203.png?v=1784734454","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/C.CO.GESHA_FELLOW_FARM_2_c1dd0ac5-84cd-4b03-82c8-e67b3fb33f16.png?v=1784734453","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/C.CO.GESHA_FELLOW_FARM_3_69a386a6-824e-446c-ab1f-5c6c1613fe41.png?v=1784734456","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/C.CO.GESHA_FELLOW_FARM_4_78e35cf1-be46-46f6-a697-10d63fec51c1.png?v=1784734454"],
    shortDesc: "Un microlote lavado del proyecto Fellows Farms de La Inmaculada que nos da notas florales en fragancia junto con notas tropicales. Physalis y flor de sauco son las notas flora...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Nomad Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Nomad Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://nomadcoffee.es","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Nomad Coffee (España)",
                "price": 32.5,
                "inStock": true,
                "url": "https://nomadcoffee.es/products/pink-bourbon-fellow-farm",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 34.13,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Nomad%20Coffee%20Pink%20Bourbon%20Fellow%20Farm&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "nomad-coffee-exfoliante-corporal-de-cafe-nomad",
    slug: "nomad-coffee-exfoliante-corporal-de-cafe-nomad",
    name: "Nomad Coffee — Exfoliante Corporal de café NOMAD",
    brand: "Nomad Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 34,
    oldPrice: null,
    historicalAveragePrice: 36.04,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0772/5485/2893/files/NC_W_OBJECTS_TASSA_CRISTAL_ANTIGUO_3.png?v=1784634714",
    gallery: ["https://cdn.shopify.com/s/files/1/0772/5485/2893/files/NC_W_OBJECTS_TASSA_CRISTAL_ANTIGUO_3.png?v=1784634714","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/NC_W_COLABORACIONES_MAMITA_2.png?v=1783342277","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/NC_W_COLABORACIONES_MAMITA_3.png?v=1783342276","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/NC_W_COLABORACIONES_MAMITA_4.png?v=1783342275"],
    shortDesc: "En colaboración con MAMITA BOTANICAL hemos formulado un exfoliante corporal nutritivo con posos de café reciclados, transformando un residuo en un nuevo activo para la piel. S...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Nomad Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Nomad Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://nomadcoffee.es","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Nomad Coffee (España)",
                "price": 34,
                "inStock": true,
                "url": "https://nomadcoffee.es/products/exfoliante-corporal-de-cafe-nomad",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 35.7,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Nomad%20Coffee%20Exfoliante%20Corporal%20de%20caf%C3%A9%20NOMAD&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "nomad-coffee-camiseta-serveis-de-cafe",
    slug: "nomad-coffee-camiseta-serveis-de-cafe",
    name: "Nomad Coffee — Camiseta Serveis de Café",
    brand: "Nomad Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 40,
    oldPrice: null,
    historicalAveragePrice: 42.4,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0772/5485/2893/files/Captura_de_pantalla_2026-07-08_a_las_11.19.26.png?v=1783502560",
    gallery: ["https://cdn.shopify.com/s/files/1/0772/5485/2893/files/Captura_de_pantalla_2026-07-08_a_las_11.19.26.png?v=1783502560","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/Captura_de_pantalla_2026-07-08_a_las_11.19.12.png?v=1783502385","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/NC_W_APPAREL_SERVEISDECAFE_1.webp?v=1782202616","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/NC_W_APPAREL_SERVEISDECAFE_4.webp?v=1782202616"],
    shortDesc: "Serveis de Cafè es el nombre que damos a los momentos en que NOMAD sale de sus espacios habituales para llevar su manera de entender el café a otros contextos. Confeccionada e...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Nomad Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Nomad Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://nomadcoffee.es","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Nomad Coffee (España)",
                "price": 40,
                "inStock": false,
                "url": "https://nomadcoffee.es/products/camiseta-serveis-de-cafe",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 42,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Nomad%20Coffee%20Camiseta%20Serveis%20de%20Caf%C3%A9&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "nomad-coffee-camiseta-ice-manga-corta",
    slug: "nomad-coffee-camiseta-ice-manga-corta",
    name: "Nomad Coffee — Camiseta ICE - Manga corta",
    brand: "Nomad Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 35,
    oldPrice: null,
    historicalAveragePrice: 37.1,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0772/5485/2893/files/camiseta-ice-blanca-manga-corta-nomad-coffee-1_1.png?v=1751549584",
    gallery: ["https://cdn.shopify.com/s/files/1/0772/5485/2893/files/camiseta-ice-blanca-manga-corta-nomad-coffee-1_1.png?v=1751549584","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/Captura_de_pantalla_2026-05-20_a_las_13.51.54.png?v=1779277929","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/Foto_2-7-25_12_49_19_1.png?v=1779277644","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/NC_W_APPAREL_CAMISETA_ICE_3.png?v=1779277644"],
    shortDesc: "La Camiseta ICE - Manga Corta es una edición especial diseñada por Nomad Coffee en colaboración con el ilustrador Joan Manel, conocido por su estilo gráfico con guiños a la es...",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Nomad Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Nomad Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://nomadcoffee.es","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Nomad Coffee (España)",
                "price": 35,
                "inStock": false,
                "url": "https://nomadcoffee.es/products/camiseta-blanca-iced-coffee-manga-corta",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 36.75,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Nomad%20Coffee%20Camiseta%20ICE%20-%20Manga%20corta&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "nomad-coffee-tote-bag-22kg-heavyweight",
    slug: "nomad-coffee-tote-bag-22kg-heavyweight",
    name: "Nomad Coffee — Tote Bag 22KG Heavyweight",
    brand: "Nomad Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 38,
    oldPrice: null,
    historicalAveragePrice: 40.28,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0772/5485/2893/files/NC_W_APPAREL_BOSSA_22KG_GRIS_1_0ff3a44f-7be1-461d-bb1b-7c0fbef5e607.png?v=1783502092",
    gallery: ["https://cdn.shopify.com/s/files/1/0772/5485/2893/files/NC_W_APPAREL_BOSSA_22KG_GRIS_1_0ff3a44f-7be1-461d-bb1b-7c0fbef5e607.png?v=1783502092","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/NC_W_APPAREL_BOSSA_22KG_GRIS_2_66cca680-3d8a-43df-bb9b-6f50bfd75f11.png?v=1783502093"],
    shortDesc: "Una bolsa versátil para el día a día con dos capacidades de carga. La parte superior puede doblarse hacia el interior para adaptar su volumen manteniendo un tamaño compacto. D...",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Nomad Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Nomad Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://nomadcoffee.es","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Nomad Coffee (España)",
                "price": 38,
                "inStock": true,
                "url": "https://nomadcoffee.es/products/nomad-tote-bag",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 39.9,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Nomad%20Coffee%20Tote%20Bag%2022KG%20Heavyweight&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "nomad-coffee-play-and-brew-con-dara-santana",
    slug: "nomad-coffee-play-and-brew-con-dara-santana",
    name: "Nomad Coffee — PLAY AND BREW CON DARA SANTANA",
    brand: "Nomad Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 95,
    oldPrice: null,
    historicalAveragePrice: 100.7,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0772/5485/2893/files/DARA_2000x2000px_01.10.png?v=1780405964",
    gallery: ["https://cdn.shopify.com/s/files/1/0772/5485/2893/files/DARA_2000x2000px_01.10.png?v=1780405964","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/DSCF0810_VSCO.jpg?v=1780405688","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/DSCF0888_VSCO.jpg?v=1780405688","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/DSCF0825_VSCO.jpg?v=1780405688"],
    shortDesc: "Tras el éxito de la primera edición, volvemos con una nueva oportunidad para aprender, compartir y explorar el café desde una perspectiva diferente. La primera edición reunió ...",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Nomad Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Nomad Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://nomadcoffee.es","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Nomad Coffee (España)",
                "price": 95,
                "inStock": true,
                "url": "https://nomadcoffee.es/products/masterclass-orea",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 99.75,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Nomad%20Coffee%20PLAY%20AND%20BREW%20CON%20DARA%20SANTANA&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "nomad-coffee-entre-rios",
    slug: "nomad-coffee-entre-rios",
    name: "Nomad Coffee — Entre Ríos",
    brand: "Nomad Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 13.5,
    oldPrice: null,
    historicalAveragePrice: 14.31,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0772/5485/2893/files/E.CR.ERW_1.png?v=1782734384",
    gallery: ["https://cdn.shopify.com/s/files/1/0772/5485/2893/files/E.CR.ERW_1.png?v=1782734384","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/E.CR.ERW_2.png?v=1782734386","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/E.CR.ERW_5.png?v=1782734388","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/Captura_de_pantalla_2026-06-29_a_las_13.59.58.png?v=1782734417"],
    shortDesc: "Cada año esperamos impacientes a que lleguen los cafés de Aquiares, Costa Rica. Y este es nuestro buque insignia, Entre Ríos. Con esta taza disfrutamos de un cuerpo muy redond...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Nomad Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Nomad Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://nomadcoffee.es","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Nomad Coffee (España)",
                "price": 13.5,
                "inStock": true,
                "url": "https://nomadcoffee.es/products/entre-rios",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 14.18,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Nomad%20Coffee%20Entre%20R%C3%ADos&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "nomad-coffee-geisha-timbuyaku",
    slug: "nomad-coffee-geisha-timbuyaku",
    name: "Nomad Coffee — Geisha Timbuyaku",
    brand: "Nomad Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 28.5,
    oldPrice: null,
    historicalAveragePrice: 30.21,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0772/5485/2893/files/COMPETICION_GEISHATIMBUYACO_1.png?v=1782735142",
    gallery: ["https://cdn.shopify.com/s/files/1/0772/5485/2893/files/COMPETICION_GEISHATIMBUYACO_1.png?v=1782735142","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/COMPETICION_GEISHATIMBUYACO_2.png?v=1782735144","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/COMPETICION_GEISHATIMBUYACO_3.png?v=1782735144","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/COMPETICION_GEISHATIMBUYACO_4.png?v=1782735144"],
    shortDesc: "Un café muy floral, típico de la variedad Geisha. Podemos encontrar notas a té blanco y flor de saúco junto a notas afrutadas que nos puede recordar a la nectarine y a la ciru...",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Nomad Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Nomad Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://nomadcoffee.es","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Nomad Coffee (España)",
                "price": 28.5,
                "inStock": true,
                "url": "https://nomadcoffee.es/products/geisha-timbuyaku",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 29.93,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Nomad%20Coffee%20Geisha%20Timbuyaku&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "nomad-coffee-juan-pinto",
    slug: "nomad-coffee-juan-pinto",
    name: "Nomad Coffee — Juan Pinto",
    brand: "Nomad Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 23.5,
    oldPrice: null,
    historicalAveragePrice: 24.91,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0772/5485/2893/files/F.BO.JUAN_1_26fad277-20dc-48f7-b7f5-382f391aa6ea.png?v=1782735003",
    gallery: ["https://cdn.shopify.com/s/files/1/0772/5485/2893/files/F.BO.JUAN_1_26fad277-20dc-48f7-b7f5-382f391aa6ea.png?v=1782735003","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/F.BO.JUAN_2_db6b212b-26ba-43d3-8211-1c303c604665.png?v=1782735005","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/F.BO.JUAN_3_453a331a-a2a7-42cf-ba0d-7c8076d6c5a5.png?v=1782735006","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/F.BO.JUAN_4_000a82be-caec-4eb2-ab82-42f6816c0831.png?v=1782735009"],
    shortDesc: "En fragancia podemos encontrar notas a frutos secos como la nuez de macadamia y anacardos. Es también muy dulce con notas que nos recuerdan a chocolate con leche, cacao en pol...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Nomad Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Nomad Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://nomadcoffee.es","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Nomad Coffee (España)",
                "price": 23.5,
                "inStock": true,
                "url": "https://nomadcoffee.es/products/juan-pinto",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 24.68,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Nomad%20Coffee%20Juan%20Pinto&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "nomad-coffee-kafipamba",
    slug: "nomad-coffee-kafipamba",
    name: "Nomad Coffee — Kafipamba",
    brand: "Nomad Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 22.5,
    oldPrice: null,
    historicalAveragePrice: 23.85,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0772/5485/2893/files/E.EC.KAFI_1_69dcf032-9077-483e-941e-fbe3aa4039a3.png?v=1782734931",
    gallery: ["https://cdn.shopify.com/s/files/1/0772/5485/2893/files/E.EC.KAFI_1_69dcf032-9077-483e-941e-fbe3aa4039a3.png?v=1782734931","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/E.EC.KAFI_2_897312c3-074a-460f-9223-ae10f2d24197.png?v=1782734933","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/E.EC.KAFI_3_b368441f-fa9e-43a7-b8c5-d4134aa0d04c.png?v=1782734935"],
    shortDesc: "Cada año Jhon y Nelly nos traen un café mejor y más complejo. Este año, este sidra de Kafipamba nos da notas tropicales que nos recuerdan al melón, además de tener muchas nota...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Nomad Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Nomad Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://nomadcoffee.es","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Nomad Coffee (España)",
                "price": 22.5,
                "inStock": true,
                "url": "https://nomadcoffee.es/products/kafipamba",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 23.63,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Nomad%20Coffee%20Kafipamba&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "nomad-coffee-cuchara-de-cata-x-nomad",
    slug: "nomad-coffee-cuchara-de-cata-x-nomad",
    name: "Nomad Coffee — Cuchara de cata x Nomad",
    brand: "Nomad Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 15,
    oldPrice: null,
    historicalAveragePrice: 15.9,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0772/5485/2893/files/cullera-cata-nomad.1_06659784-faf8-4a88-ac2e-e39e74aa1180.jpg?v=1764591362",
    gallery: ["https://cdn.shopify.com/s/files/1/0772/5485/2893/files/cullera-cata-nomad.1_06659784-faf8-4a88-ac2e-e39e74aa1180.jpg?v=1764591362","https://cdn.shopify.com/s/files/1/0772/5485/2893/files/Captura_de_pantalla_2024-09-24_a_las_13.42.54_13_904873db-2789-4cc6-8d9e-a1fb51d4b9bd.png?v=1782816463"],
    shortDesc: "Nuestra cuchara de cata NOMAD está diseñada para quienes viven el café a través de cada matiz. Hecha en acero inoxidable de alta calidad, ofrece el peso, la profundidad y la c...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Nomad Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Nomad Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://nomadcoffee.es","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Nomad Coffee (España)",
                "price": 15,
                "inStock": true,
                "url": "https://nomadcoffee.es/products/cuchara-de-cata-x-nomad",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 15.75,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Nomad%20Coffee%20Cuchara%20de%20cata%20x%20Nomad&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "syra-coffee-8am-t-shirt",
    slug: "syra-coffee-8am-t-shirt",
    name: "Syra Coffee — 8AM T-Shirt",
    brand: "Syra Coffee",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 19,
    oldPrice: null,
    historicalAveragePrice: 20.14,
    isOffer: false,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0299/2046/0884/files/BackTShirtFin.png?v=1732786440",
    gallery: ["https://cdn.shopify.com/s/files/1/0299/2046/0884/files/BackTShirtFin.png?v=1732786440","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/CamisetaFront2_1x1_00047a89-01ef-4b2d-a756-ff2fcb2d66ad.png?v=1732786440","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/CamisetaBack2_1x1_e2408aea-5369-4f0b-a005-00bf6068d9e2.png?v=1732786440","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/FrontTShirtFin.png?v=1732786442"],
    shortDesc: "8 AM, esta es la hora en la que nuestras puertas se abren en las ciudades de España. El momento en que llega el primer cliente y se sirve la primera taza de café, una taza pre...",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Syra Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Syra Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://syra.coffee","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Syra Coffee (España)",
                "price": 19,
                "inStock": true,
                "url": "https://syra.coffee/products/8am-t-shirt",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 19.95,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Syra%20Coffee%208AM%20T-Shirt&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "syra-coffee-aeropress",
    slug: "syra-coffee-aeropress",
    name: "Syra Coffee — Aeropress",
    brand: "Syra Coffee",
    category: "accesorios",
    subCategory: "Cafeteras Manuales",
    price: 34,
    oldPrice: null,
    historicalAveragePrice: 36.04,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0299/2046/0884/files/aeropress_2.png?v=1758014689",
    gallery: ["https://cdn.shopify.com/s/files/1/0299/2046/0884/files/aeropress_2.png?v=1758014689","https://cdn.shopify.com/s/files/1/0299/2046/0884/products/Capturadepantalla2021-07-13alas16.46.51.png?v=1758014689","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/image2_926b38f0-387c-437b-897c-4aad42f34b56.png?v=1768577512"],
    shortDesc: "La empresa Aeropress fue fundada en 1984 por Alan Adler, un reconocido inventor e instructor de ingeniería jubilado de la Universidad de Stanford. En 2004, Alan comenzó a estu...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Syra Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Syra Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://syra.coffee","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Syra Coffee (España)",
                "price": 34,
                "inStock": true,
                "url": "https://syra.coffee/products/aeropress",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 35.7,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Syra%20Coffee%20Aeropress&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "syra-coffee-aeropress-clear",
    slug: "syra-coffee-aeropress-clear",
    name: "Syra Coffee — Aeropress Clear",
    brand: "Syra Coffee",
    category: "accesorios",
    subCategory: "Cafeteras Manuales",
    price: 49,
    oldPrice: null,
    historicalAveragePrice: 51.94,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0299/2046/0884/files/AC-V_92e7895b-c8fb-4975-a42a-6a869172569d.png?v=1761047070",
    gallery: ["https://cdn.shopify.com/s/files/1/0299/2046/0884/files/AC-V_92e7895b-c8fb-4975-a42a-6a869172569d.png?v=1761047070","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/AC-W_5bc252ef-b39e-4d1c-9bda-26faf7be420c.png?v=1761047070","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/AC-A_16f391fe-ce03-4013-94f0-005b6e68ca82.png?v=1761047011","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/AC-R_73fa5eb4-e133-4cd8-8e0c-6e2e30429800.png?v=1761047011"],
    shortDesc: "AeroPress Clear es la evolución de la clásica AeroPress, compartiendo el mismo funcionamiento, versatilidad y calidad. Está fabricada con policarbonato Tritan™, combina durabi...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Syra Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Syra Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://syra.coffee","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Syra Coffee (España)",
                "price": 49,
                "inStock": true,
                "url": "https://syra.coffee/products/aeropress-clear",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 51.45,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Syra%20Coffee%20Aeropress%20Clear&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "syra-coffee-aeropress-go",
    slug: "syra-coffee-aeropress-go",
    name: "Syra Coffee — Aeropress GO",
    brand: "Syra Coffee",
    category: "accesorios",
    subCategory: "Cafeteras Manuales",
    price: 41,
    oldPrice: null,
    historicalAveragePrice: 43.46,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0299/2046/0884/files/Aeropress-GO.png?v=1695289243",
    gallery: ["https://cdn.shopify.com/s/files/1/0299/2046/0884/files/Aeropress-GO.png?v=1695289243","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/aeropress_go.jpg?v=1697618864","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/aeropress_4.jpg?v=1697618864","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/aeropress_go_2.jpg?v=1697618864"],
    shortDesc: "El Aeropress Go combina las ventajas de la Prensa Francesa, método de filtro y una cafetera tradicional, lo que hace que la preparación del café sea realmente sencilla y rápid...",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Syra Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Syra Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://syra.coffee","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Syra Coffee (España)",
                "price": 41,
                "inStock": true,
                "url": "https://syra.coffee/products/aeropress-go",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 43.05,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Syra%20Coffee%20Aeropress%20GO&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "syra-coffee-aeropress-reusable-filter",
    slug: "syra-coffee-aeropress-reusable-filter",
    name: "Syra Coffee — Aeropress Reusable Filter",
    brand: "Syra Coffee",
    category: "accesorios",
    subCategory: "Cafeteras Manuales",
    price: 19,
    oldPrice: null,
    historicalAveragePrice: 20.14,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0299/2046/0884/files/aeropress-filtro-metalico-reutilizable.png?v=1757678933",
    gallery: ["https://cdn.shopify.com/s/files/1/0299/2046/0884/files/aeropress-filtro-metalico-reutilizable.png?v=1757678933","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/Filtro_reusable_aeropress.png?v=1757678933","https://cdn.shopify.com/s/files/1/0299/2046/0884/products/Completo.png?v=1757678933"],
    shortDesc: "El filtro de café Aeropress es un filtro reutilizable diseñado para ser utilizado con la cafetera AeroPress ® . Permite obtener más aceites y una taza de café con más cuerpo c...",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Syra Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Syra Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://syra.coffee","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Syra Coffee (España)",
                "price": 19,
                "inStock": true,
                "url": "https://syra.coffee/products/aeropress-reusable-filter-able",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 19.95,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Syra%20Coffee%20Aeropress%20Reusable%20Filter&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "syra-coffee-atitlan",
    slug: "syra-coffee-atitlan",
    name: "Syra Coffee — Atitlán",
    brand: "Syra Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 13.5,
    oldPrice: null,
    historicalAveragePrice: 14.31,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0299/2046/0884/files/250GR_MOCKUP_ATITLAN.png?v=1781012004",
    gallery: ["https://cdn.shopify.com/s/files/1/0299/2046/0884/files/250GR_MOCKUP_ATITLAN.png?v=1781012004","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/Atitlan-1x1.jpg?v=1781182552","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/DSC00779_JPG.jpg?v=1781012005","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/DSC00747_JPG.jpg?v=1781012035"],
    shortDesc: "Atitlán nace en San Juan La Laguna, en el corazón del departamento de Sololá (Guatemala), entre 1.200 y 1.400 metros sobre el nivel del mar. Esta zona, enclavada entre tres vo...",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Syra Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Syra Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://syra.coffee","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Syra Coffee (España)",
                "price": 13.5,
                "inStock": true,
                "url": "https://syra.coffee/products/atitlan",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 14.18,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Syra%20Coffee%20Atitl%C3%A1n&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "syra-coffee-b2b-monthly-subscription",
    slug: "syra-coffee-b2b-monthly-subscription",
    name: "Syra Coffee — B2B Monthly Subscription",
    brand: "Syra Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 125,
    oldPrice: null,
    historicalAveragePrice: 132.5,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0299/2046/0884/products/B2Bsub.png?v=1629807378",
    gallery: ["https://cdn.shopify.com/s/files/1/0299/2046/0884/products/B2Bsub.png?v=1629807378","https://cdn.shopify.com/s/files/1/0299/2046/0884/products/Mockup_frontal_Gishyita_b02b4f77-fca1-4044-87a9-f92edfc6c51b.png?v=1647003700","https://cdn.shopify.com/s/files/1/0299/2046/0884/products/Seasonal-Photoshoot_Gishyita_1x1_28450648-a694-4e1e-99c3-0d30dd77b785.png?v=1647003700"],
    shortDesc: "The easiest way to have Syra Coffee at your office. Get your favourite coffee, shipped right to your office door. Our B2B coffee subscription service is a way of receiving goo...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Syra Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Syra Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://syra.coffee","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Syra Coffee (España)",
                "price": 125,
                "inStock": true,
                "url": "https://syra.coffee/products/specialty-coffee-business-subscription",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 131.25,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Syra%20Coffee%20B2B%20Monthly%20Subscription&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "syra-coffee-bahire",
    slug: "syra-coffee-bahire",
    name: "Syra Coffee — Bahire",
    brand: "Syra Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 16,
    oldPrice: null,
    historicalAveragePrice: 16.96,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0299/2046/0884/files/250GR.png?v=1783505137",
    gallery: ["https://cdn.shopify.com/s/files/1/0299/2046/0884/files/250GR.png?v=1783505137","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/Bahire-1x1_2.png?v=1783505642","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/Bahire_JNPCoffee_1.jpg?v=1783506365","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/Bahire_JNPCoffee_3.jpg?v=1783506365"],
    shortDesc: "Bahire nace en la región de Ngozi, en el norte de Burundi, a 1.800 metros sobre el nivel del mar. En estas laderas de suelo volcánico, donde la altitud y las lluvias favorecen...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Syra Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Syra Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://syra.coffee","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Syra Coffee (España)",
                "price": 16,
                "inStock": true,
                "url": "https://syra.coffee/products/bahire",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 16.8,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Syra%20Coffee%20Bahire&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "syra-coffee-bascula-acaia-pearl",
    slug: "syra-coffee-bascula-acaia-pearl",
    name: "Syra Coffee — Báscula Acaia Pearl",
    brand: "Syra Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 196,
    oldPrice: null,
    historicalAveragePrice: 207.76,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0299/2046/0884/files/acaia-balanza-pearl-negro-mate_ps.webp?v=1750403678",
    gallery: ["https://cdn.shopify.com/s/files/1/0299/2046/0884/files/acaia-balanza-pearl-negro-mate_ps.webp?v=1750403678","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/acaia-pearl-blanco_ps.png?v=1750403678","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/acaia-pearl-blanco3_ps.png?v=1750071931","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/acaia-pearl-blanco2.png?v=1750071931"],
    shortDesc: "*Este producto serà entregado entre 7 y 10 días hábiles después de hacer el pedido.* La Acaia Pearl es la balanza de referencia para los baristas y entusiastas del café que bu...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Syra Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Syra Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://syra.coffee","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Syra Coffee (España)",
                "price": 196,
                "inStock": true,
                "url": "https://syra.coffee/products/bascula-acaia-pearl",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 205.8,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Syra%20Coffee%20B%C3%A1scula%20Acaia%20Pearl&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "syra-coffee-bascula-acaia-pearl-s",
    slug: "syra-coffee-bascula-acaia-pearl-s",
    name: "Syra Coffee — Báscula Acaia Pearl S",
    brand: "Syra Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 245,
    oldPrice: null,
    historicalAveragePrice: 259.7,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0299/2046/0884/files/PS_acaia-balanza-pearl-s-negro.webp?v=1750403630",
    gallery: ["https://cdn.shopify.com/s/files/1/0299/2046/0884/files/PS_acaia-balanza-pearl-s-negro.webp?v=1750403630","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/Pearl_S_2022_05.png?v=1750411201","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/Pearl_S_2022_04.png?v=1750411201","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/Pearl_S_2022_02.png?v=1750411201"],
    shortDesc: "*Este producto serà entregado entre 7 y 10 días hábiles después de hacer el pedido.* La Acaia Pearl S es una balanza inteligente profesional que mejora la precisión y consiste...",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Syra Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Syra Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://syra.coffee","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Syra Coffee (España)",
                "price": 245,
                "inStock": true,
                "url": "https://syra.coffee/products/bascula-acaia-pearl-s",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 257.25,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Syra%20Coffee%20B%C3%A1scula%20Acaia%20Pearl%20S&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "syra-coffee-bascula-v60-drip-hario",
    slug: "syra-coffee-bascula-v60-drip-hario",
    name: "Syra Coffee — Báscula V60 Drip - Hario",
    brand: "Syra Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 55,
    oldPrice: null,
    historicalAveragePrice: 58.3,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0299/2046/0884/files/bascula_hario_negra.png?v=1695294981",
    gallery: ["https://cdn.shopify.com/s/files/1/0299/2046/0884/files/bascula_hario_negra.png?v=1695294981","https://cdn.shopify.com/s/files/1/0299/2046/0884/products/1X0A1010.jpg?v=1695294981"],
    shortDesc: "Diseñada teniendo en cuenta la sensibilidad de las recetas de café en mente, la báscula Drip Scale Hario V60 te ofrece un tamaño compacto junto con una ingeniería de calidad y...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Syra Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Syra Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://syra.coffee","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Syra Coffee (España)",
                "price": 55,
                "inStock": true,
                "url": "https://syra.coffee/products/v60-drip-scale-hario",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 57.75,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Syra%20Coffee%20B%C3%A1scula%20V60%20Drip%20-%20Hario&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "syra-coffee-bascula-v60-metal-drip-hario",
    slug: "syra-coffee-bascula-v60-metal-drip-hario",
    name: "Syra Coffee — Báscula V60 Metal Drip - Hario",
    brand: "Syra Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 99.5,
    oldPrice: null,
    historicalAveragePrice: 105.47,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0299/2046/0884/files/Bascula_hario_metalic.png?v=1695293577",
    gallery: ["https://cdn.shopify.com/s/files/1/0299/2046/0884/files/Bascula_hario_metalic.png?v=1695293577","https://cdn.shopify.com/s/files/1/0299/2046/0884/products/vstm_ph06.png?v=1695293577"],
    shortDesc: "Una báscula con temporizador para todos los métodos de café de filtro. Esta báscula mide tanto la cantidad de café que se ha filtrado como el tiempo que ha transcurrido para e...",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Syra Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Syra Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://syra.coffee","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Syra Coffee (España)",
                "price": 99.5,
                "inStock": true,
                "url": "https://syra.coffee/products/v60-metal-drip-scale-hario",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 104.48,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Syra%20Coffee%20B%C3%A1scula%20V60%20Metal%20Drip%20-%20Hario&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "syra-coffee-bukonzo-ana",
    slug: "syra-coffee-bukonzo-ana",
    name: "Syra Coffee — Bukonzo Ana.",
    brand: "Syra Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 17.5,
    oldPrice: null,
    historicalAveragePrice: 18.55,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0299/2046/0884/files/OK-bukonzo-ana-250gr.png?v=1778759983",
    gallery: ["https://cdn.shopify.com/s/files/1/0299/2046/0884/files/OK-bukonzo-ana-250gr.png?v=1778759983","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/bukonzo_ana_ok.png?v=1778834398","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/Red_cherries_close_up_1_30b49632-5207-46d7-98ef-caba2014a300.jpg?v=1778662741","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/wqew_ee4ae1d4-4cdb-4b97-b0ca-3465476c8780.jpg?v=1778662325"],
    shortDesc: "Bukonzo Ana. nace en las Montañas Rwenzori, una cordillera al oeste de Uganda conocida también como las \"Montañas de la Luna\" por sus picos nevados a apenas 30 km del ecuador....",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Syra Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Syra Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://syra.coffee","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Syra Coffee (España)",
                "price": 17.5,
                "inStock": true,
                "url": "https://syra.coffee/products/bukonzo-ana",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 18.38,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Syra%20Coffee%20Bukonzo%20Ana.&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "syra-coffee-cafetera-automatica-philips-5500",
    slug: "syra-coffee-cafetera-automatica-philips-5500",
    name: "Syra Coffee — Cafetera Automática Philips 5500",
    brand: "Syra Coffee",
    category: "maquinas",
    subCategory: "Máquinas de Café",
    price: 699.99,
    oldPrice: null,
    historicalAveragePrice: 741.99,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0299/2046/0884/files/PF1.png?v=1750411281",
    gallery: ["https://cdn.shopify.com/s/files/1/0299/2046/0884/files/PF1.png?v=1750411281","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/vrs_0ed15179e32ec84475f3bd040714de9c2b3292cf.webp?v=1750411281","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/PF.png?v=1750411281"],
    shortDesc: "Con la Philips Serie 5500, preparar café de especialidad en casa es más fácil que nunca. Esta cafetera superautomática extrae espresso con solo pulsar un botón, manteniendo un...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Syra Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Syra Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://syra.coffee","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Syra Coffee (España)",
                "price": 699.99,
                "inStock": true,
                "url": "https://syra.coffee/products/cafetera-espresso-automatica-philips-serie-5500",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 734.99,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Syra%20Coffee%20Cafetera%20Autom%C3%A1tica%20Philips%205500&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "syra-coffee-caspulas-brasil",
    slug: "syra-coffee-caspulas-brasil",
    name: "Syra Coffee — Cáspulas Brasil",
    brand: "Syra Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0299/2046/0884/files/8436048727234_C1.png?v=1784812064",
    gallery: ["https://cdn.shopify.com/s/files/1/0299/2046/0884/files/8436048727234_C1.png?v=1784812064","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/3.3_BrasilCapsules_1x1_75848446-0601-4278-852c-e99e845f3cce.png?v=1784535675","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/3.3_Capsules_Brasil-1x1.jpg?v=1784553839"],
    shortDesc: "El café de especialidad, ahora en cápsula. Cultivado a 900 metros en las alturas de Minas Gerais, este café de variedades Bourbon Amarillo, Arara Amarillo, Mundo Novo y Catuaí...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Syra Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Syra Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://syra.coffee","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Syra Coffee (España)",
                "price": 12,
                "inStock": true,
                "url": "https://syra.coffee/products/caspulas-brasil",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Syra%20Coffee%20C%C3%A1spulas%20Brasil&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "syra-coffee-caspulas-colombia",
    slug: "syra-coffee-caspulas-colombia",
    name: "Syra Coffee — Cáspulas Colombia",
    brand: "Syra Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0299/2046/0884/files/8436048727241_C1.png?v=1784812034",
    gallery: ["https://cdn.shopify.com/s/files/1/0299/2046/0884/files/8436048727241_C1.png?v=1784812034","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/2.3_ColombiaCapsules_1x1_7bc8b04f-7a7b-4863-9f0b-c741d3f36641.jpg?v=1784537459","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/3.2_Capsules_Colombia-1x1.jpg?v=1784553695"],
    shortDesc: "El café de especialidad, ahora en cápsula. Cultivado a 1.630 metros en la región de Huila, este café de variedades Castillo, Caturra y Colombia llega en formato cápsula compat...",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Syra Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Syra Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://syra.coffee","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Syra Coffee (España)",
                "price": 12,
                "inStock": true,
                "url": "https://syra.coffee/products/caspulas-colombia",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Syra%20Coffee%20C%C3%A1spulas%20Colombia&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "syra-coffee-caspulas-etiopia",
    slug: "syra-coffee-caspulas-etiopia",
    name: "Syra Coffee — Cáspulas Etiopía",
    brand: "Syra Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0299/2046/0884/files/8436048727258_C1.png?v=1784811966",
    gallery: ["https://cdn.shopify.com/s/files/1/0299/2046/0884/files/8436048727258_C1.png?v=1784811966","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/1.3_EtiopiaCapsules_1x1_d6b24924-3847-40a9-af35-ab37ba810924.jpg?v=1784537125","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/3.1_Capsules_Etiopia-1x1.jpg?v=1784553952"],
    shortDesc: "El café de especialidad, ahora en cápsula. Cultivado entre 1.800 y 1.900 metros en la región de Sidama, este café natural llega en formato cápsula compatible con máquinas Nesp...",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Syra Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Syra Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://syra.coffee","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Syra Coffee (España)",
                "price": 12,
                "inStock": true,
                "url": "https://syra.coffee/products/caspulas-etiopia",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Syra%20Coffee%20C%C3%A1spulas%20Etiop%C3%ADa&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "syra-coffee-chemex-classic",
    slug: "syra-coffee-chemex-classic",
    name: "Syra Coffee — Chemex Classic",
    brand: "Syra Coffee",
    category: "accesorios",
    subCategory: "Cafeteras Manuales",
    price: 55,
    oldPrice: null,
    historicalAveragePrice: 58.3,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0299/2046/0884/files/Chemex_4dfa6b63-7a7d-49bc-82f6-01abec572588.png?v=1695281768",
    gallery: ["https://cdn.shopify.com/s/files/1/0299/2046/0884/files/Chemex_4dfa6b63-7a7d-49bc-82f6-01abec572588.png?v=1695281768","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/Capturadepantalla2024-01-25135901_a01a8c6a-8a29-4e4d-af16-be4f777a2700.png?v=1706192021","https://cdn.shopify.com/s/files/1/0299/2046/0884/products/01c7ac6dd0fd8199f4a634a05d529513_8b90e446-632c-4049-a3fe-e48f0e06e7de-thumbnail-2000x2000-80.jpg?v=1706192021","https://cdn.shopify.com/s/files/1/0299/2046/0884/products/coffeemaker-classic-three-detail_7_copy_864x_a6f3fd83-eaa2-4b75-9cac-bf835fa9769d-thumbnail-2000x2000.png?v=1706192021"],
    shortDesc: "La Chemex Clásica, utilizada junto con los filtros CHEMEX®, científicamente diseñados y patentados, garantiza que la preparación del café resulte en una taza de café perfecta,...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Syra Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Syra Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://syra.coffee","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Syra Coffee (España)",
                "price": 55,
                "inStock": true,
                "url": "https://syra.coffee/products/chemex-classic",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 57.75,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Syra%20Coffee%20Chemex%20Classic&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "syra-coffee-chemex-filters",
    slug: "syra-coffee-chemex-filters",
    name: "Syra Coffee — Chemex Filters",
    brand: "Syra Coffee",
    category: "accesorios",
    subCategory: "Cafeteras Manuales",
    price: 12.5,
    oldPrice: null,
    historicalAveragePrice: 13.25,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0299/2046/0884/files/FiltrosChemex.png?v=1695282347",
    gallery: ["https://cdn.shopify.com/s/files/1/0299/2046/0884/files/FiltrosChemex.png?v=1695282347","https://cdn.shopify.com/s/files/1/0299/2046/0884/products/01c7ac6dd0fd8199f4a634a05d529513_66de32b8-595d-4147-895c-786289dc8791.jpg?v=1695282347","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/chemexfiltro3.png?v=1695282347"],
    shortDesc: "100 filtros Chemex para la cafetera Chemex . Al permitir que sólo pasen los aceites aromáticos del café y la cafeína, el filtro de papel garantiza un café de sabor limpio sin ...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Syra Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Syra Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://syra.coffee","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Syra Coffee (España)",
                "price": 12.5,
                "inStock": true,
                "url": "https://syra.coffee/products/chemex-filters",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 13.13,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Syra%20Coffee%20Chemex%20Filters&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "syra-coffee-clever-dripper",
    slug: "syra-coffee-clever-dripper",
    name: "Syra Coffee — Clever Dripper",
    brand: "Syra Coffee",
    category: "accesorios",
    subCategory: "Cafeteras Manuales",
    price: 33,
    oldPrice: null,
    historicalAveragePrice: 34.98,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0299/2046/0884/files/clever_dripper.png?v=1695296347",
    gallery: ["https://cdn.shopify.com/s/files/1/0299/2046/0884/files/clever_dripper.png?v=1695296347","https://cdn.shopify.com/s/files/1/0299/2046/0884/products/CleverDrippe.jpg?v=1695296346"],
    shortDesc: "El Clever Dripper constituye una combinación de las mejores características de una prensa francesa y un V60. Su diseño especial ayuda a controlar el tiempo de infusión y extra...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Syra Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Syra Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://syra.coffee","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Syra Coffee (España)",
                "price": 33,
                "inStock": true,
                "url": "https://syra.coffee/products/clever-dripped",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 34.65,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Syra%20Coffee%20Clever%20Dripper&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "syra-coffee-cold-brewer-hario",
    slug: "syra-coffee-cold-brewer-hario",
    name: "Syra Coffee — Cold Brewer - Hario",
    brand: "Syra Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 31,
    oldPrice: null,
    historicalAveragePrice: 32.86,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0299/2046/0884/files/1coldbreworiginal.png?v=1699607156",
    gallery: ["https://cdn.shopify.com/s/files/1/0299/2046/0884/files/1coldbreworiginal.png?v=1699607156","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/230624_syra_summer_at_home-11.jpg?v=1699607156","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/230624_syra_summer_at_home-4.jpg?v=1699607156","https://cdn.shopify.com/s/files/1/0299/2046/0884/products/d067534f0f0d327039c51fe115e26f5e.png?v=1699607156"],
    shortDesc: "La botella de Cold Brew de Hario, está equipada con un fino filtro de plástico que permite obtener una bebida libre de posos y toda ella es de fácil mantenimiento. El café pre...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Syra Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Syra Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://syra.coffee","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Syra Coffee (España)",
                "price": 31,
                "inStock": false,
                "url": "https://syra.coffee/products/cold-brewer",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 32.55,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Syra%20Coffee%20Cold%20Brewer%20-%20Hario&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "syra-coffee-comandante-molinillo-c40-mk4-nitro-blade",
    slug: "syra-coffee-comandante-molinillo-c40-mk4-nitro-blade",
    name: "Syra Coffee — Comandante Molinillo C40 MK4 Nitro Blade",
    brand: "Syra Coffee",
    category: "molinos",
    subCategory: "Molinillos",
    price: 275,
    oldPrice: null,
    historicalAveragePrice: 291.5,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0299/2046/0884/files/COM003_01.png?v=1750425583",
    gallery: ["https://cdn.shopify.com/s/files/1/0299/2046/0884/files/COM003_01.png?v=1750425583","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/comandante-molinillo-mk4-american-cherry.png?v=1750425583","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/COM003_02_a896b3ac-9b42-4360-95c8-fbdabb405c67.png?v=1750425583","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/COM003_04.png?v=1750425583"],
    shortDesc: "*Este producto serà entregado entre 7 y 10 días hábiles después de hacer el pedido.* El Molino C40 MK4 Nitro Blade de Comandante es la herramienta definitiva para los entusias...",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Syra Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Syra Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://syra.coffee","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Syra Coffee (España)",
                "price": 275,
                "inStock": true,
                "url": "https://syra.coffee/products/comandante-molinillo-c40-mk4-nitro-blade",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 288.75,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Syra%20Coffee%20Comandante%20Molinillo%20C40%20MK4%20Nitro%20Blade&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "syra-coffee-daniso-horsa",
    slug: "syra-coffee-daniso-horsa",
    name: "Syra Coffee — Daniso Horsa",
    brand: "Syra Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 16,
    oldPrice: null,
    historicalAveragePrice: 16.96,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0299/2046/0884/files/250GR_DANISO.png?v=1776261798",
    gallery: ["https://cdn.shopify.com/s/files/1/0299/2046/0884/files/250GR_DANISO.png?v=1776261798","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/Daniso-1x1.jpg?v=1776262485","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/Ethi1.jpg?v=1776412920","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/Ethi3_7d64b063-0c6c-4db2-b646-ac9ad15815f8.jpg?v=1776412920"],
    shortDesc: "Daniso Horsa nace en la región de Sidama, en el distrito de Bensa (Etiopía), a 2.226 metros sobre el nivel del mar. En esta altitud, donde los cafés se desarrollan lentamente ...",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Syra Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Syra Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://syra.coffee","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Syra Coffee (España)",
                "price": 16,
                "inStock": true,
                "url": "https://syra.coffee/products/daniso-horsa",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 16.8,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Syra%20Coffee%20Daniso%20Horsa&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "syra-coffee-decaf-pack",
    slug: "syra-coffee-decaf-pack",
    name: "Syra Coffee — Decaf Pack",
    brand: "Syra Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 45,
    oldPrice: null,
    historicalAveragePrice: 47.7,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0299/2046/0884/files/Decaf_To-Go_0819d806-ff89-4f90-80b3-e08cb508b67a.png?v=1768924371",
    gallery: ["https://cdn.shopify.com/s/files/1/0299/2046/0884/files/Decaf_To-Go_0819d806-ff89-4f90-80b3-e08cb508b67a.png?v=1768924371","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/Decaf_To-Go_1_3f397b8f-6ca3-4c9c-a0ec-b172babf3863.png?v=1768924371","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/Decaf_To-Go_2_062668aa-deef-403a-a512-c292496ad934.png?v=1768924371","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/Decaf_To-Go_3_4b9a3dd5-692e-4389-94b4-21c2342bcba7.png?v=1768924371"],
    shortDesc: "El café descafeinado también puede ser una experiencia completa. Este pack incluye 2x Tumbaga Decaf 250g , un descafeinado de origen colombiano que conserva toda la complejida...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Syra Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Syra Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://syra.coffee","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Syra Coffee (España)",
                "price": 45,
                "inStock": false,
                "url": "https://syra.coffee/products/decaf-pack",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 47.25,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Syra%20Coffee%20Decaf%20Pack&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "syra-coffee-discovery-kit",
    slug: "syra-coffee-discovery-kit",
    name: "Syra Coffee — Discovery Kit",
    brand: "Syra Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 34,
    oldPrice: null,
    historicalAveragePrice: 36.04,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0299/2046/0884/files/Top.png?v=1750863850",
    gallery: ["https://cdn.shopify.com/s/files/1/0299/2046/0884/files/Top.png?v=1750863850","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/SyraXmas25_23.jpg?v=1765790094","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/SyraXmas25_25.jpg?v=1765790094","https://cdn.shopify.com/s/files/1/0299/2046/0884/files/style3.jpg?v=1765790094"],
    shortDesc: "Buen café para todo el mundo. Esa es la idea, y este kit es la forma de ponerla en práctica. El Discovery Kit incluye 6 muestras aleatorias de café (60 g cada una), selecciona...",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Syra Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Syra Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://syra.coffee","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Syra Coffee (España)",
                "price": 34,
                "inStock": true,
                "url": "https://syra.coffee/products/discovery-kit",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 35.7,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Syra%20Coffee%20Discovery%20Kit&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "right-side-coffee-abasambi-natural-espresso",
    slug: "right-side-coffee-abasambi-natural-espresso",
    name: "Right Side Coffee — Abasambi Natural Espresso",
    brand: "Right Side Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 11.25,
    oldPrice: null,
    historicalAveragePrice: 11.93,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0858/2801/0328/files/AbasambiNatural_E.png?v=1755781727",
    gallery: ["https://cdn.shopify.com/s/files/1/0858/2801/0328/files/AbasambiNatural_E.png?v=1755781727","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/MohammedSambiandhisson-3_369ee788-19cd-425b-8d87-03617675a2a2.jpg?v=1755781726","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/MohammedSambi-1_2116ddf9-c8bd-4444-8b47-5d4aff9b9ca6.jpg?v=1755781730"],
    shortDesc: "Nueva relación con este productor de Jimma que cultiva variedades 74110 y Melo. Notas a mora, ciruela, chocolate y almendras tostadas.",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Right Side Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Right Side Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://rightsidecoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Right Side Coffee (España)",
                "price": 11.25,
                "inStock": false,
                "url": "https://rightsidecoffee.com/products/abasambi-natural-espresso",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 11.81,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Right%20Side%20Coffee%20Abasambi%20Natural%20Espresso&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "right-side-coffee-abrar-keno-natural-espresso",
    slug: "right-side-coffee-abrar-keno-natural-espresso",
    name: "Right Side Coffee — Abrar Keno Natural Espresso",
    brand: "Right Side Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 11.25,
    oldPrice: null,
    historicalAveragePrice: 11.93,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0858/2801/0328/files/abrar_keno_e.png?v=1763378869",
    gallery: ["https://cdn.shopify.com/s/files/1/0858/2801/0328/files/abrar_keno_e.png?v=1763378869","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/Abrar_Keno-1.png?v=1763378869","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/Abrar_Keno-6.png?v=1763378869"],
    shortDesc: "Abrar Keno nos deleita con esta variedad 74110, muy jugoso con notas a frambuesa, dulzor de cereza y caramelo.",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Right Side Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Right Side Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://rightsidecoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Right Side Coffee (España)",
                "price": 11.25,
                "inStock": false,
                "url": "https://rightsidecoffee.com/products/abrar-keno-natural",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 11.81,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Right%20Side%20Coffee%20Abrar%20Keno%20Natural%20Espresso&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "right-side-coffee-aeropress",
    slug: "right-side-coffee-aeropress",
    name: "Right Side Coffee — AeroPress",
    brand: "Right Side Coffee",
    category: "accesorios",
    subCategory: "Cafeteras Manuales",
    price: 35.5,
    oldPrice: null,
    historicalAveragePrice: 37.63,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0858/2801/0328/files/Aeropress.png?v=1740502548",
    gallery: ["https://cdn.shopify.com/s/files/1/0858/2801/0328/files/Aeropress.png?v=1740502548"],
    shortDesc: "Aeropress es una de las cafeteras de filtro mas famosas del mundo que tiene capacidad de elaborar entre 1 y 3 tazas en solo 2 minutos. Su funcionamiento es simple, ya que grac...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Right Side Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Right Side Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://rightsidecoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Right Side Coffee (España)",
                "price": 35.5,
                "inStock": true,
                "url": "https://rightsidecoffee.com/products/aeropress",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 37.28,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Right%20Side%20Coffee%20AeroPress&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "right-side-coffee-aeropress-go",
    slug: "right-side-coffee-aeropress-go",
    name: "Right Side Coffee — AeroPress Go",
    brand: "Right Side Coffee",
    category: "accesorios",
    subCategory: "Cafeteras Manuales",
    price: 38.5,
    oldPrice: null,
    historicalAveragePrice: 40.81,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0858/2801/0328/files/AeropressGo.png?v=1740502509",
    gallery: ["https://cdn.shopify.com/s/files/1/0858/2801/0328/files/AeropressGo.png?v=1740502509"],
    shortDesc: "Café delicioso y rápido en cualquier lugar: optimizada para viajar, acampar y navegar. La cafetera de viaje AeroPress Go está diseñada para impulsar un estilo de vida activo, ...",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Right Side Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Right Side Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://rightsidecoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Right Side Coffee (España)",
                "price": 38.5,
                "inStock": true,
                "url": "https://rightsidecoffee.com/products/aeropress-go",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 40.43,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Right%20Side%20Coffee%20AeroPress%20Go&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "right-side-coffee-alessi-moka",
    slug: "right-side-coffee-alessi-moka",
    name: "Right Side Coffee — Alessi Moka",
    brand: "Right Side Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 48,
    oldPrice: null,
    historicalAveragePrice: 50.88,
    isOffer: false,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0858/2801/0328/files/AlessiMoka.png?v=1740502584",
    gallery: ["https://cdn.shopify.com/s/files/1/0858/2801/0328/files/AlessiMoka.png?v=1740502584"],
    shortDesc: "Inventada a comienzos de los años 30, la cafetera moka (o también conocida como cafetera italiana) revolucionó la forma de preparar café en casa. En 2019 el arquitecto David C...",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Right Side Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Right Side Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://rightsidecoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Right Side Coffee (España)",
                "price": 48,
                "inStock": true,
                "url": "https://rightsidecoffee.com/products/alessi-moka",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 50.4,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Right%20Side%20Coffee%20Alessi%20Moka&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "right-side-coffee-alfredo-ordonez-maragogype-filtro",
    slug: "right-side-coffee-alfredo-ordonez-maragogype-filtro",
    name: "Right Side Coffee — Alfredo Ordoñez Maragogype Filtro",
    brand: "Right Side Coffee",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 18,
    oldPrice: null,
    historicalAveragePrice: 19.08,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0858/2801/0328/files/alfredo_ordonez_f_1.png?v=1779181053",
    gallery: ["https://cdn.shopify.com/s/files/1/0858/2801/0328/files/alfredo_ordonez_f_1.png?v=1779181053","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/alfredo_ord_2.jpg?v=1771859844","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/alfredo_ord_3.jpg?v=1771859844","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/alfredo_ord.jpg?v=1771859844"],
    shortDesc: "Una interesante variedad Maragogype con proceso Natural que destaca por sus notas a vino naranja, clavo y hoja de higuera.",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Right Side Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Right Side Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://rightsidecoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Right Side Coffee (España)",
                "price": 18,
                "inStock": false,
                "url": "https://rightsidecoffee.com/products/alfredo-ordonez-maragogype",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 18.9,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Right%20Side%20Coffee%20Alfredo%20Ordo%C3%B1ez%20Maragogype%20Filtro&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "right-side-coffee-ananias-silvestre-filtro",
    slug: "right-side-coffee-ananias-silvestre-filtro",
    name: "Right Side Coffee — Ananías Silvestre Filtro",
    brand: "Right Side Coffee",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 13.5,
    oldPrice: null,
    historicalAveragePrice: 14.31,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0858/2801/0328/files/AnaniasSilvestre_F.png?v=1750319695",
    gallery: ["https://cdn.shopify.com/s/files/1/0858/2801/0328/files/AnaniasSilvestre_F.png?v=1750319695","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/IMG_20211013_145239_1.jpg?v=1750320159","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/Ananias.jpg?v=1750320159"],
    shortDesc: "Esta variedad Caturra, procesada de forma tradicional por Ananías, sorprende por su jugosidad con notas a piña, manzana y té verde.",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Right Side Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Right Side Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://rightsidecoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Right Side Coffee (España)",
                "price": 13.5,
                "inStock": false,
                "url": "https://rightsidecoffee.com/products/ananias-silvestre",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 14.18,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Right%20Side%20Coffee%20Anan%C3%ADas%20Silvestre%20Filtro&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "right-side-coffee-ancizar-narvaez-filtro",
    slug: "right-side-coffee-ancizar-narvaez-filtro",
    name: "Right Side Coffee — Ancizar Narváez Filtro",
    brand: "Right Side Coffee",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 15.75,
    oldPrice: null,
    historicalAveragePrice: 16.7,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0858/2801/0328/files/Ancizar_Narvaez.png?v=1785765264",
    gallery: ["https://cdn.shopify.com/s/files/1/0858/2801/0328/files/Ancizar_Narvaez.png?v=1785765264","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/Anzidar_colombia_2.jpg?v=1784641831","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/Anzidar_colombia.jpg?v=1784641831"],
    shortDesc: "Este Bourbon Rosado, láctico y de cuerpo cremoso, nos da notas de flores blancas, albaricoque y frambuesa.",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Right Side Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Right Side Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://rightsidecoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Right Side Coffee (España)",
                "price": 15.75,
                "inStock": true,
                "url": "https://rightsidecoffee.com/products/anzidar-narvaez-filtro",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 16.54,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Right%20Side%20Coffee%20Ancizar%20Narv%C3%A1ez%20Filtro&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "right-side-coffee-andres-torres-geisha-natural-espresso",
    slug: "right-side-coffee-andres-torres-geisha-natural-espresso",
    name: "Right Side Coffee — Andrés Torres Geisha Natural Espresso",
    brand: "Right Side Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 30,
    oldPrice: null,
    historicalAveragePrice: 31.8,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0858/2801/0328/files/AndresTorresGeishaNatural_E.png?v=1753189381",
    gallery: ["https://cdn.shopify.com/s/files/1/0858/2801/0328/files/AndresTorresGeishaNatural_E.png?v=1753189381","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/DSC00428-2.jpg?v=1753189381","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/DSC00432-2.jpg?v=1753189381"],
    shortDesc: "Esta variedad Geisha es una oda a su origen y proceso natural, con jazmines, cítricos y sutiles notas de frambuesa.",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Right Side Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Right Side Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://rightsidecoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Right Side Coffee (España)",
                "price": 30,
                "inStock": false,
                "url": "https://rightsidecoffee.com/products/andres-torres-geisha-natural-filtro-copy",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 31.5,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Right%20Side%20Coffee%20Andr%C3%A9s%20Torres%20Geisha%20Natural%20Espresso&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "right-side-coffee-andres-torres-geisha-natural-filtro",
    slug: "right-side-coffee-andres-torres-geisha-natural-filtro",
    name: "Right Side Coffee — Andrés Torres Geisha Natural Filtro",
    brand: "Right Side Coffee",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 30,
    oldPrice: null,
    historicalAveragePrice: 31.8,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0858/2801/0328/files/AndresTorresGeishaNatural_F.png?v=1746447003",
    gallery: ["https://cdn.shopify.com/s/files/1/0858/2801/0328/files/AndresTorresGeishaNatural_F.png?v=1746447003","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/DSC00428-2.jpg?v=1753189381","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/DSC00432-2.jpg?v=1753189381"],
    shortDesc: "Esta variedad Geisha es una oda a su origen y proceso natural, con jazmines, cítricos y sutiles notas de frambuesa.",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Right Side Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Right Side Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://rightsidecoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Right Side Coffee (España)",
                "price": 30,
                "inStock": false,
                "url": "https://rightsidecoffee.com/products/andres-torres-geisha-natural-filtro",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 31.5,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Right%20Side%20Coffee%20Andr%C3%A9s%20Torres%20Geisha%20Natural%20Filtro&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "right-side-coffee-arturo-aviles-espresso",
    slug: "right-side-coffee-arturo-aviles-espresso",
    name: "Right Side Coffee — Arturo Avilés Espresso",
    brand: "Right Side Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 13.5,
    oldPrice: null,
    historicalAveragePrice: 14.31,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0858/2801/0328/files/arturo_aviles_e.png?v=1758805479",
    gallery: ["https://cdn.shopify.com/s/files/1/0858/2801/0328/files/arturo_aviles_e.png?v=1758805479","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/IMG_5236.jpg?v=1758805479"],
    shortDesc: "Esta variedad Castillo cultivada por Arturo Avilés ofrece un perfil denso, equilibrado y jugoso, con notas a ciruela, cacao, vainilla y final a almendra.",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Right Side Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Right Side Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://rightsidecoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Right Side Coffee (España)",
                "price": 13.5,
                "inStock": false,
                "url": "https://rightsidecoffee.com/products/arturo-aviles-espresso",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 14.18,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Right%20Side%20Coffee%20Arturo%20Avil%C3%A9s%20Espresso&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "right-side-coffee-arturo-aviles-filtro",
    slug: "right-side-coffee-arturo-aviles-filtro",
    name: "Right Side Coffee — Arturo Avilés Filtro",
    brand: "Right Side Coffee",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 13.5,
    oldPrice: null,
    historicalAveragePrice: 14.31,
    isOffer: false,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0858/2801/0328/files/arturo_aviles_f.png?v=1759413708",
    gallery: ["https://cdn.shopify.com/s/files/1/0858/2801/0328/files/arturo_aviles_f.png?v=1759413708","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/IMG_5236_d1e267f7-b5ff-4651-a47b-2137dd310f36.jpg?v=1759413708"],
    shortDesc: "Esta variedad Castillo cultivada por Arturo Avilés ofrece un perfil denso, equilibrado y jugoso, con notas a ciruela, cacao, vainilla y final a almendra.",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Right Side Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Right Side Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://rightsidecoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Right Side Coffee (España)",
                "price": 13.5,
                "inStock": false,
                "url": "https://rightsidecoffee.com/products/arturo-aviles-filtro",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 14.18,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Right%20Side%20Coffee%20Arturo%20Avil%C3%A9s%20Filtro&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "right-side-coffee-arturo-paz-geisha-natural-dr-filtro",
    slug: "right-side-coffee-arturo-paz-geisha-natural-dr-filtro",
    name: "Right Side Coffee — Arturo Paz Geisha Natural DR Filtro",
    brand: "Right Side Coffee",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 24,
    oldPrice: null,
    historicalAveragePrice: 25.44,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0858/2801/0328/files/arturo_paz_geisha_ed_limitada.jpg?v=1781166359",
    gallery: ["https://cdn.shopify.com/s/files/1/0858/2801/0328/files/arturo_paz_geisha_ed_limitada.jpg?v=1781166359","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/arturo_paz.jpg?v=1781011916","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/arturo_paz_cerezas.jpg?v=1781012011","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/arturo_paz_joaquin.jpg?v=1781012101"],
    shortDesc: "Arturo Paz presenta este Geisha natural secado en cuarto oscuro por primera vez. Notas a jazmín, melocotón y toffee.",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Right Side Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Right Side Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://rightsidecoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Right Side Coffee (España)",
                "price": 24,
                "inStock": false,
                "url": "https://rightsidecoffee.com/products/arturo-paz-geisha-natural-dr",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 25.2,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Right%20Side%20Coffee%20Arturo%20Paz%20Geisha%20Natural%20DR%20Filtro&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "right-side-coffee-arturo-paz-maracaturra-espresso",
    slug: "right-side-coffee-arturo-paz-maracaturra-espresso",
    name: "Right Side Coffee — Arturo Paz Maracaturra Espresso",
    brand: "Right Side Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 15.75,
    oldPrice: null,
    historicalAveragePrice: 16.7,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0858/2801/0328/files/ArturoPazMaracaturra_E.png?v=1748860958",
    gallery: ["https://cdn.shopify.com/s/files/1/0858/2801/0328/files/ArturoPazMaracaturra_E.png?v=1748860958","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/IMG_4451_6811bf85-ef76-4aaf-b9ad-d84c4fe0b1a0.jpg?v=1753709139"],
    shortDesc: "Este Maracaturra lavado de Arturo Paz sorprende con notas a frutos del bosque, miel, chocolate, vainilla y almendra.",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Right Side Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Right Side Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://rightsidecoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Right Side Coffee (España)",
                "price": 15.75,
                "inStock": false,
                "url": "https://rightsidecoffee.com/products/arturo-paz-maracaturra-espresso",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 16.54,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Right%20Side%20Coffee%20Arturo%20Paz%20Maracaturra%20Espresso&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "right-side-coffee-ausberto-oblitas-filtro",
    slug: "right-side-coffee-ausberto-oblitas-filtro",
    name: "Right Side Coffee — Ausberto Oblitas Filtro",
    brand: "Right Side Coffee",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 13.5,
    oldPrice: null,
    historicalAveragePrice: 14.31,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0858/2801/0328/files/AusbertooblidasF.png?v=1774945294",
    gallery: ["https://cdn.shopify.com/s/files/1/0858/2801/0328/files/AusbertooblidasF.png?v=1774945294","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/ausberto_oblitas_peru.jpg?v=1779350482"],
    shortDesc: "Este Caturra lavado de Ausberto Oblitas destaca por su perfil vivo y expresivo, con notas a lavanda, fresa e hibisco.",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Right Side Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Right Side Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://rightsidecoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Right Side Coffee (España)",
                "price": 13.5,
                "inStock": false,
                "url": "https://rightsidecoffee.com/products/ausberto-oblitas-espresso-filtro",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 14.18,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Right%20Side%20Coffee%20Ausberto%20Oblitas%20Filtro&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "right-side-coffee-bascula-timemore-black-mirror-basic-2",
    slug: "right-side-coffee-bascula-timemore-black-mirror-basic-2",
    name: "Right Side Coffee — Báscula Timemore Black Mirror Basic 2",
    brand: "Right Side Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 65,
    oldPrice: null,
    historicalAveragePrice: 68.9,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0858/2801/0328/files/Timemore-Black-Mirror-Basic-2_e1f2b70d-d904-4fbd-b841-78cce54d5a68.png?v=1740511883",
    gallery: ["https://cdn.shopify.com/s/files/1/0858/2801/0328/files/Timemore-Black-Mirror-Basic-2_e1f2b70d-d904-4fbd-b841-78cce54d5a68.png?v=1740511883"],
    shortDesc: "La báscula Black Mirror Basic de Timemore es una herramienta diseñada para mejorar tus recetas de café de manera fácil y precisa gracias a su sensor de alta precisión. Su dise...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Right Side Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Right Side Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://rightsidecoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Right Side Coffee (España)",
                "price": 65,
                "inStock": true,
                "url": "https://rightsidecoffee.com/products/bascula-timemore-black-mirror-basic-2",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 68.25,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Right%20Side%20Coffee%20B%C3%A1scula%20Timemore%20Black%20Mirror%20Basic%202&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "right-side-coffee-bascula-timemore-black-mirror-nano",
    slug: "right-side-coffee-bascula-timemore-black-mirror-nano",
    name: "Right Side Coffee — Báscula Timemore Black Mirror Nano",
    brand: "Right Side Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 105,
    oldPrice: null,
    historicalAveragePrice: 111.3,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0858/2801/0328/files/basculaTimemoreblackmirror.png?v=1740502663",
    gallery: ["https://cdn.shopify.com/s/files/1/0858/2801/0328/files/basculaTimemoreblackmirror.png?v=1740502663","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/image_60.jpg?v=1740502663","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/image_61.jpg?v=1740502663"],
    shortDesc: "La báscula Black Mirror Nano de Timemore es un indispensable en tus preparaciones de café. Es una báscula digital con diseño minimalista, ultracompacta y precisa pensada para ...",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Right Side Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Right Side Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://rightsidecoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Right Side Coffee (España)",
                "price": 105,
                "inStock": true,
                "url": "https://rightsidecoffee.com/products/bascula-timemore-black-mirror-nano",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 110.25,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Right%20Side%20Coffee%20B%C3%A1scula%20Timemore%20Black%20Mirror%20Nano&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "right-side-coffee-base-para-tamper-motta",
    slug: "right-side-coffee-base-para-tamper-motta",
    name: "Right Side Coffee — Base para tamper Motta",
    brand: "Right Side Coffee",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 22.49,
    oldPrice: null,
    historicalAveragePrice: 23.84,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0858/2801/0328/files/Baseparatampermotta.png?v=1740502711",
    gallery: ["https://cdn.shopify.com/s/files/1/0858/2801/0328/files/Baseparatampermotta.png?v=1740502711"],
    shortDesc: "Sencilla y resistente, esta base para tamper de Motta protege tus superficies y cuenta con un lado plegado para una mejor adaptación, permitiendo que el porta-filtros quede pe...",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Right Side Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Right Side Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://rightsidecoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Right Side Coffee (España)",
                "price": 22.49,
                "inStock": true,
                "url": "https://rightsidecoffee.com/products/base-para-tamper-motta",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 23.61,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Right%20Side%20Coffee%20Base%20para%20tamper%20Motta&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "right-side-coffee-bayetas-de-microfibra-sb",
    slug: "right-side-coffee-bayetas-de-microfibra-sb",
    name: "Right Side Coffee — Bayetas de microfibra SB",
    brand: "Right Side Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 17.5,
    oldPrice: null,
    historicalAveragePrice: 18.55,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0858/2801/0328/files/BayetasdemicrofibraSB.png?v=1740511425",
    gallery: ["https://cdn.shopify.com/s/files/1/0858/2801/0328/files/BayetasdemicrofibraSB.png?v=1740511425"],
    shortDesc: "Bayetas de microfibra para mantener tu espacio de trabajo más limpio que una patena.",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Right Side Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Right Side Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://rightsidecoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Right Side Coffee (España)",
                "price": 17.5,
                "inStock": true,
                "url": "https://rightsidecoffee.com/products/bayetas-de-microfibra-sb",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 18.38,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Right%20Side%20Coffee%20Bayetas%20de%20microfibra%20SB&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "right-side-coffee-benjamin-paz-espresso",
    slug: "right-side-coffee-benjamin-paz-espresso",
    name: "Right Side Coffee — Benjamín Paz Espresso",
    brand: "Right Side Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 13.5,
    oldPrice: null,
    historicalAveragePrice: 14.31,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0858/2801/0328/files/Benjam.png?v=1774349423",
    gallery: ["https://cdn.shopify.com/s/files/1/0858/2801/0328/files/Benjam.png?v=1774349423","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/WhatsAppImage2023-06-15at15.58.45.jpg?v=1774349423","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/WhatsAppImage2024-01-12at19.13.09_79262bd6-3e55-4c84-9e8f-c6d543be917a.jpg?v=1774349423"],
    shortDesc: "Variedad Pacas y proceso Lavado desarrollados a la perfección por un productor bicampeón de la Cup of Excellence. Notas a piña, albaricoque y toffee.",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Right Side Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Right Side Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://rightsidecoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Right Side Coffee (España)",
                "price": 13.5,
                "inStock": false,
                "url": "https://rightsidecoffee.com/products/benjamin-paz-espresso",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 14.18,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Right%20Side%20Coffee%20Benjam%C3%ADn%20Paz%20Espresso&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "right-side-coffee-benjamin-paz-filtro",
    slug: "right-side-coffee-benjamin-paz-filtro",
    name: "Right Side Coffee — Benjamín Paz Filtro",
    brand: "Right Side Coffee",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 15.75,
    oldPrice: null,
    historicalAveragePrice: 16.7,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0858/2801/0328/files/BenjaminPaz_F.png?v=1746444078",
    gallery: ["https://cdn.shopify.com/s/files/1/0858/2801/0328/files/BenjaminPaz_F.png?v=1746444078","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/WhatsAppImage2023-06-15at15.58.45.jpg?v=1774349423","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/WhatsAppImage2024-01-12at19.13.09_79262bd6-3e55-4c84-9e8f-c6d543be917a.jpg?v=1774349423"],
    shortDesc: "Variedad Pacas y proceso Lavado desarrollados a la perfección por un productor bicampeón de la Cup of Excellence. Notas a piña, albaricoque y toffee.",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Right Side Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Right Side Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://rightsidecoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Right Side Coffee (España)",
                "price": 15.75,
                "inStock": false,
                "url": "https://rightsidecoffee.com/products/benjamin-paz",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 16.54,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Right%20Side%20Coffee%20Benjam%C3%ADn%20Paz%20Filtro&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "right-side-coffee-benjamin-paz-honey-filtro",
    slug: "right-side-coffee-benjamin-paz-honey-filtro",
    name: "Right Side Coffee — Benjamín Paz Honey Filtro",
    brand: "Right Side Coffee",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 61,
    oldPrice: null,
    historicalAveragePrice: 64.66,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0858/2801/0328/files/benjamin_paz_honey_f.png?v=1766485287",
    gallery: ["https://cdn.shopify.com/s/files/1/0858/2801/0328/files/benjamin_paz_honey_f.png?v=1766485287","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/WhatsAppImage2024-01-12at19.13.09_79262bd6-3e55-4c84-9e8f-c6d543be917a.jpg?v=1774349423","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/WhatsAppImage2024-01-12at19.13.10_2.jpg?v=1746439122"],
    shortDesc: "Benjamín sorprende con este Pacas fermentado anaeróbicamente y secado como Honey. Notas a vino naranja y albaricoque.",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Right Side Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Right Side Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://rightsidecoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Right Side Coffee (España)",
                "price": 61,
                "inStock": false,
                "url": "https://rightsidecoffee.com/products/benjamin-paz-honey-filtro",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 64.05,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Right%20Side%20Coffee%20Benjam%C3%ADn%20Paz%20Honey%20Filtro&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "right-side-coffee-bernardo-floriano-espresso",
    slug: "right-side-coffee-bernardo-floriano-espresso",
    name: "Right Side Coffee — Bernardo Floriano Espresso",
    brand: "Right Side Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 11.25,
    oldPrice: null,
    historicalAveragePrice: 11.93,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0858/2801/0328/files/bernardo_e.png?v=1760699642",
    gallery: ["https://cdn.shopify.com/s/files/1/0858/2801/0328/files/bernardo_e.png?v=1760699642","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/fernando.jpg?v=1750321986"],
    shortDesc: "Bernardo es un nuevo fichaje de la región de Huila que cultiva variedad Caturra. Perfil jugoso y balanceado con notas a mora, vainilla y cítricos.",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Right Side Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Right Side Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://rightsidecoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Right Side Coffee (España)",
                "price": 11.25,
                "inStock": false,
                "url": "https://rightsidecoffee.com/products/bernardo-floriano",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 11.81,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Right%20Side%20Coffee%20Bernardo%20Floriano%20Espresso&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "right-side-coffee-bernardo-floriano-filtro",
    slug: "right-side-coffee-bernardo-floriano-filtro",
    name: "Right Side Coffee — Bernardo Floriano Filtro",
    brand: "Right Side Coffee",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 13.5,
    oldPrice: null,
    historicalAveragePrice: 14.31,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0858/2801/0328/files/bernardo_f.png?v=1760702005",
    gallery: ["https://cdn.shopify.com/s/files/1/0858/2801/0328/files/bernardo_f.png?v=1760702005","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/fernando.jpg?v=1750321986"],
    shortDesc: "Bernardo es un nuevo fichaje de la región de Huila que cultiva variedad Caturra. Perfil jugoso y balanceado con notas a mora, vainilla y cítricos.",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Right Side Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Right Side Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://rightsidecoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Right Side Coffee (España)",
                "price": 13.5,
                "inStock": false,
                "url": "https://rightsidecoffee.com/products/bernardo-floriano-filtro",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 14.18,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Right%20Side%20Coffee%20Bernardo%20Floriano%20Filtro&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "right-side-coffee-big-mr-sunshine-espresso",
    slug: "right-side-coffee-big-mr-sunshine-espresso",
    name: "Right Side Coffee — Big Mr. Sunshine Espresso",
    brand: "Right Side Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 18,
    oldPrice: null,
    historicalAveragePrice: 19.08,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0858/2801/0328/files/big_mr_sunshine.png?v=1759231487",
    gallery: ["https://cdn.shopify.com/s/files/1/0858/2801/0328/files/big_mr_sunshine.png?v=1759231487","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/sr_cafe_9a6fd8a3-27af-40d5-a12b-f2c2ea640fab.jpg?v=1762954926","https://cdn.shopify.com/s/files/1/0858/2801/0328/files/santarosa_experiencia_ficha.jpg?v=1762954926"],
    shortDesc: "Finca Santa Rosa nos deleita con este Pacamara Honey el año que vuelve a ganar la Cup of Excellence. Notas a vino naranja y frambuesa. Bomba!",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Right Side Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Right Side Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://rightsidecoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Right Side Coffee (España)",
                "price": 18,
                "inStock": false,
                "url": "https://rightsidecoffee.com/products/santa-rosa-honey-espresso",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 18.9,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Right%20Side%20Coffee%20Big%20Mr.%20Sunshine%20Espresso&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "three-marks-coffee-1kg-espresso-seasonal",
    slug: "three-marks-coffee-1kg-espresso-seasonal",
    name: "Three Marks Coffee — 1Kg Espresso Seasonal",
    brand: "Three Marks Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 36.9,
    oldPrice: null,
    historicalAveragePrice: 39.11,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0984/7010/1329/files/SUB_Product_Image_b63fa189-40b2-4aef-874f-b71cf6656863.webp?v=1776247716",
    gallery: ["https://cdn.shopify.com/s/files/1/0984/7010/1329/files/SUB_Product_Image_b63fa189-40b2-4aef-874f-b71cf6656863.webp?v=1776247716"],
    shortDesc: "Great! You’ve made your choice, welcome to our Coffee Club! YOU'VE SELECTED Coffee for your Home to be prepared with Espresso of our Seasonal Blend 1 X 1Kg monthly",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Three Marks Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Three Marks Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://threemarkscoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Three Marks Coffee (España)",
                "price": 36.9,
                "inStock": true,
                "url": "https://threemarkscoffee.com/products/1xkg-espresso-blend",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 38.74,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Three%20Marks%20Coffee%201Kg%20Espresso%20Seasonal&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "three-marks-coffee-2x250gr-espresso-seasonal",
    slug: "three-marks-coffee-2x250gr-espresso-seasonal",
    name: "Three Marks Coffee — 2x250gr Espresso Seasonal",
    brand: "Three Marks Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 19.9,
    oldPrice: null,
    historicalAveragePrice: 21.09,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0984/7010/1329/files/SUB_Product_Image_a277a092-95a6-4611-8006-8d3e14a1a1bf.webp?v=1776247723",
    gallery: ["https://cdn.shopify.com/s/files/1/0984/7010/1329/files/SUB_Product_Image_a277a092-95a6-4611-8006-8d3e14a1a1bf.webp?v=1776247723"],
    shortDesc: "Great! You’ve made your choice, welcome to our Coffee Club! YOU'VE SELECTED Coffee for your Home to be prepared with Espresso of our Seasonal Blend 2 X 250gr monthly",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Three Marks Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Three Marks Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://threemarkscoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Three Marks Coffee (España)",
                "price": 19.9,
                "inStock": true,
                "url": "https://threemarkscoffee.com/products/2x250gr-espresso-blend",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 20.9,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Three%20Marks%20Coffee%202x250gr%20Espresso%20Seasonal&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "three-marks-coffee-2x250gr-espresso-roaster-s-pick",
    slug: "three-marks-coffee-2x250gr-espresso-roaster-s-pick",
    name: "Three Marks Coffee — 2x250gr Espresso “Roaster’s Pick”",
    brand: "Three Marks Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 26.5,
    oldPrice: null,
    historicalAveragePrice: 28.09,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0984/7010/1329/files/SUB_Product_Image_c15a2415-bd19-485d-8c8d-1c8815c66009.webp?v=1776247737",
    gallery: ["https://cdn.shopify.com/s/files/1/0984/7010/1329/files/SUB_Product_Image_c15a2415-bd19-485d-8c8d-1c8815c66009.webp?v=1776247737"],
    shortDesc: "Great! You’ve made your choice, welcome to our Coffee Club! YOU'VE SELECTED Coffee for your Home to be prepared with Espresso of our Roaster’s Pick 2 X 250gr monthly",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Three Marks Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Three Marks Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://threemarkscoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Three Marks Coffee (España)",
                "price": 26.5,
                "inStock": true,
                "url": "https://threemarkscoffee.com/products/2x250gr-espresso-roasters",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 27.83,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Three%20Marks%20Coffee%202x250gr%20Espresso%20%E2%80%9CRoaster%E2%80%99s%20Pick%E2%80%9D&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "three-marks-coffee-2x250gr-filter-roaster-s-pick",
    slug: "three-marks-coffee-2x250gr-filter-roaster-s-pick",
    name: "Three Marks Coffee — 2x250gr Filter “Roaster’s Pick”",
    brand: "Three Marks Coffee",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 26.5,
    oldPrice: null,
    historicalAveragePrice: 28.09,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0984/7010/1329/files/SUB_Product_Image_f7d650c7-2d79-436f-852a-6576d873665e.webp?v=1776247750",
    gallery: ["https://cdn.shopify.com/s/files/1/0984/7010/1329/files/SUB_Product_Image_f7d650c7-2d79-436f-852a-6576d873665e.webp?v=1776247750"],
    shortDesc: "Great! You’ve made your choice, welcome to our Coffee Club! YOU'VE SELECTED Coffee for your Home to be prepared with Filter of our Roaster’s Pick 2 X 250gr monthly",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Three Marks Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Three Marks Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://threemarkscoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Three Marks Coffee (España)",
                "price": 26.5,
                "inStock": true,
                "url": "https://threemarkscoffee.com/products/2x250gr-roasters-pick",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 27.83,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Three%20Marks%20Coffee%202x250gr%20Filter%20%E2%80%9CRoaster%E2%80%99s%20Pick%E2%80%9D&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "three-marks-coffee-2x2x250gr-espresso-roaster-s-pick",
    slug: "three-marks-coffee-2x2x250gr-espresso-roaster-s-pick",
    name: "Three Marks Coffee — 2x2x250gr Espresso “Roaster’s Pick”",
    brand: "Three Marks Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 49,
    oldPrice: null,
    historicalAveragePrice: 51.94,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0984/7010/1329/files/SUB_Product_Image_f9c49d34-9df0-4e60-826a-0278155724de.webp?v=1776247729",
    gallery: ["https://cdn.shopify.com/s/files/1/0984/7010/1329/files/SUB_Product_Image_f9c49d34-9df0-4e60-826a-0278155724de.webp?v=1776247729"],
    shortDesc: "Great! You’ve made your choice, welcome to our Coffee Club! YOU'VE SELECTED Coffee for your Home to be prepared with Espresso of our Roaster’s Pick 2 X 2 X 250gr monthly",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Three Marks Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Three Marks Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://threemarkscoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Three Marks Coffee (España)",
                "price": 49,
                "inStock": true,
                "url": "https://threemarkscoffee.com/products/2x2x250gr-espresso-roasters",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 51.45,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Three%20Marks%20Coffee%202x2x250gr%20Espresso%20%E2%80%9CRoaster%E2%80%99s%20Pick%E2%80%9D&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "three-marks-coffee-2x2x250gr-filter-roaster-s-pick",
    slug: "three-marks-coffee-2x2x250gr-filter-roaster-s-pick",
    name: "Three Marks Coffee — 2x2x250gr Filter “Roaster’s Pick”",
    brand: "Three Marks Coffee",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 49,
    oldPrice: null,
    historicalAveragePrice: 51.94,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0984/7010/1329/files/SUB_Product_Image_829b9033-41aa-4d68-91ff-627f628a3006.webp?v=1776247743",
    gallery: ["https://cdn.shopify.com/s/files/1/0984/7010/1329/files/SUB_Product_Image_829b9033-41aa-4d68-91ff-627f628a3006.webp?v=1776247743"],
    shortDesc: "Great! You’ve made your choice, welcome to our Coffee Club! YOU'VE SELECTED Coffee for your Home to be prepared with Filter of our Roaster’s Pick 2 X 2 X 250gr monthly",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Three Marks Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Three Marks Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://threemarkscoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Three Marks Coffee (España)",
                "price": 49,
                "inStock": true,
                "url": "https://threemarkscoffee.com/products/2x2x250gr-roasters-pick",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 51.45,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Three%20Marks%20Coffee%202x2x250gr%20Filter%20%E2%80%9CRoaster%E2%80%99s%20Pick%E2%80%9D&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "three-marks-coffee-3kg-office-espresso",
    slug: "three-marks-coffee-3kg-office-espresso",
    name: "Three Marks Coffee — 3Kg Office Espresso",
    brand: "Three Marks Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 95,
    oldPrice: null,
    historicalAveragePrice: 100.7,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0984/7010/1329/files/SUB_Product_Image_014dad12-6463-448d-bcb7-a1677b2e35ca.webp?v=1776247704",
    gallery: ["https://cdn.shopify.com/s/files/1/0984/7010/1329/files/SUB_Product_Image_014dad12-6463-448d-bcb7-a1677b2e35ca.webp?v=1776247704"],
    shortDesc: "Great! You’ve made your choice, welcome to our Coffee Club! YOU'VE SELECTED Coffee for your Office to be prepared with Espresso of our Seasonal Blend 3 X 1Kg monthly .ffb-id-6...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Three Marks Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Three Marks Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://threemarkscoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Three Marks Coffee (España)",
                "price": 95,
                "inStock": true,
                "url": "https://threemarkscoffee.com/products/3xkg-office-espresso",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 99.75,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Three%20Marks%20Coffee%203Kg%20Office%20Espresso&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "three-marks-coffee-3kg-office-filter",
    slug: "three-marks-coffee-3kg-office-filter",
    name: "Three Marks Coffee — 3Kg Office Filter",
    brand: "Three Marks Coffee",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 95,
    oldPrice: null,
    historicalAveragePrice: 100.7,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0984/7010/1329/files/SUB_Product_Image_15ecf922-fc2b-467c-a94d-43865ffdf2ee.webp?v=1776247711",
    gallery: ["https://cdn.shopify.com/s/files/1/0984/7010/1329/files/SUB_Product_Image_15ecf922-fc2b-467c-a94d-43865ffdf2ee.webp?v=1776247711"],
    shortDesc: "Great! You’ve made your choice, welcome to our Coffee Club! YOU'VE SELECTED Coffee for your Office to be prepared with Filter of our Seasonal Blend 3 X 1Kg monthly",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Three Marks Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Three Marks Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://threemarkscoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Three Marks Coffee (España)",
                "price": 95,
                "inStock": true,
                "url": "https://threemarkscoffee.com/products/3xkg-office-filter",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 99.75,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Three%20Marks%20Coffee%203Kg%20Office%20Filter&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "three-marks-coffee-aeropress-coffee-maker",
    slug: "three-marks-coffee-aeropress-coffee-maker",
    name: "Three Marks Coffee — AeroPress Coffee Maker",
    brand: "Three Marks Coffee",
    category: "accesorios",
    subCategory: "Cafeteras Manuales",
    price: 35,
    oldPrice: null,
    historicalAveragePrice: 37.1,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0984/7010/1329/files/aeropress-scaled-1.jpg?v=1776248017",
    gallery: ["https://cdn.shopify.com/s/files/1/0984/7010/1329/files/aeropress-scaled-1.jpg?v=1776248017","https://cdn.shopify.com/s/files/1/0984/7010/1329/files/Aeropress_detail1-1-scaled-1.jpg?v=1776248017"],
    shortDesc: "The AeroPress coffee maker is a simple way to brew a tasty filter coffee. Easy to clean and great to travel with. Includes 350 filters, filter cap, filter holder, funnel, stir...",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Three Marks Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Three Marks Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://threemarkscoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Three Marks Coffee (España)",
                "price": 35,
                "inStock": true,
                "url": "https://threemarkscoffee.com/products/aeropress-coffee-maker",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 36.75,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Three%20Marks%20Coffee%20AeroPress%20Coffee%20Maker&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "three-marks-coffee-aeropress-micro-filters",
    slug: "three-marks-coffee-aeropress-micro-filters",
    name: "Three Marks Coffee — Aeropress Micro Filters",
    brand: "Three Marks Coffee",
    category: "accesorios",
    subCategory: "Cafeteras Manuales",
    price: 7.5,
    oldPrice: null,
    historicalAveragePrice: 7.95,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0984/7010/1329/files/filtros-aeropress-modernos.jpg?v=1776248050",
    gallery: ["https://cdn.shopify.com/s/files/1/0984/7010/1329/files/filtros-aeropress-modernos.jpg?v=1776248050"],
    shortDesc: "1 pack includes 350 white paper filters suitable for the AeroPress coffee maker.",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Three Marks Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Three Marks Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://threemarkscoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Three Marks Coffee (España)",
                "price": 7.5,
                "inStock": true,
                "url": "https://threemarkscoffee.com/products/aeropress-micro-filters",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 7.88,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Three%20Marks%20Coffee%20Aeropress%20Micro%20Filters&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "three-marks-coffee-aponte",
    slug: "three-marks-coffee-aponte",
    name: "Three Marks Coffee — Aponte",
    brand: "Three Marks Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 18.15,
    oldPrice: null,
    historicalAveragePrice: 19.24,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0984/7010/1329/files/FrontalView.png?v=1780582319",
    gallery: ["https://cdn.shopify.com/s/files/1/0984/7010/1329/files/FrontalView.png?v=1780582319","https://cdn.shopify.com/s/files/1/0984/7010/1329/files/LateralView.png?v=1780582318"],
    shortDesc: "Farm Smallholder Farmers Region Nariño Altitude 2150masl Variety Caturra Process Honey Producer Aponte Community Orange, Red Apple, Honey",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Three Marks Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Three Marks Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://threemarkscoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Three Marks Coffee (España)",
                "price": 18.15,
                "inStock": true,
                "url": "https://threemarkscoffee.com/products/aponte-colombia",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 19.06,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Three%20Marks%20Coffee%20Aponte&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "three-marks-coffee-bialetti-moka-2-cups",
    slug: "three-marks-coffee-bialetti-moka-2-cups",
    name: "Three Marks Coffee — Bialetti - Moka 2 cups",
    brand: "Three Marks Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 28,
    oldPrice: null,
    historicalAveragePrice: 29.68,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0984/7010/1329/files/moka-1-scaled-1.jpg?v=1776248033",
    gallery: ["https://cdn.shopify.com/s/files/1/0984/7010/1329/files/moka-1-scaled-1.jpg?v=1776248033"],
    shortDesc: "Bialetti invents Italian coffee: your own personal daily ritual “par excellence”, or for hospitably sharing with someone. A beloved habit to start the day with, to allow yours...",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Three Marks Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Three Marks Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://threemarkscoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Three Marks Coffee (España)",
                "price": 28,
                "inStock": true,
                "url": "https://threemarkscoffee.com/products/bialetti-moka-2-cups",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 29.4,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Three%20Marks%20Coffee%20Bialetti%20-%20Moka%202%20cups&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "three-marks-coffee-bookkisa",
    slug: "three-marks-coffee-bookkisa",
    name: "Three Marks Coffee — Bookkisa",
    brand: "Three Marks Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 20.9,
    oldPrice: null,
    historicalAveragePrice: 22.15,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0984/7010/1329/files/FrontalView_92fd7e3c-062a-44d1-ab77-b01effb68041.png?v=1785323181",
    gallery: ["https://cdn.shopify.com/s/files/1/0984/7010/1329/files/FrontalView_92fd7e3c-062a-44d1-ab77-b01effb68041.png?v=1785323181","https://cdn.shopify.com/s/files/1/0984/7010/1329/files/LateralView_b9a4d2bf-f487-45e5-a0cb-99946feaaed4.png?v=1785323182"],
    shortDesc: "Café de especialidad de origen seleccionado y tostado/diseñado por Three Marks Coffee (España).",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Three Marks Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Three Marks Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://threemarkscoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Three Marks Coffee (España)",
                "price": 20.9,
                "inStock": true,
                "url": "https://threemarkscoffee.com/products/bookkisa",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 21.95,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Three%20Marks%20Coffee%20Bookkisa&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "three-marks-coffee-corazon-de-jesus-drip-bags-10u",
    slug: "three-marks-coffee-corazon-de-jesus-drip-bags-10u",
    name: "Three Marks Coffee — Corazón de Jesús Drip Bags (10u.)",
    brand: "Three Marks Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 22,
    oldPrice: null,
    historicalAveragePrice: 23.32,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0984/7010/1329/files/MMM_DripSeasonal_B_143254a1-00fe-4b59-ac98-70ffd26e37b2.webp?v=1778576706",
    gallery: ["https://cdn.shopify.com/s/files/1/0984/7010/1329/files/MMM_DripSeasonal_B_143254a1-00fe-4b59-ac98-70ffd26e37b2.webp?v=1778576706","https://cdn.shopify.com/s/files/1/0984/7010/1329/files/MMM_DripSeasonal_A_57a20721-ffcd-424e-a5de-5c63fb8f7cf4.webp?v=1778576706","https://cdn.shopify.com/s/files/1/0984/7010/1329/files/MMM_BoxDRIP_08502456-eb66-479c-ba6b-5f2bbcf953d4.webp?v=1778576706"],
    shortDesc: "Easy Drip Coffee Pack: Costa Rica - Corazón de Jesús 10 individual bags containing a disposable single use filter with 10g of our coffee. Take your favourite coffee with you w...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Three Marks Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Three Marks Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://threemarkscoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Three Marks Coffee (España)",
                "price": 22,
                "inStock": true,
                "url": "https://threemarkscoffee.com/products/drip-coffee-bags-10u",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 23.1,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Three%20Marks%20Coffee%20Coraz%C3%B3n%20de%20Jes%C3%BAs%20Drip%20Bags%20(10u.)&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "three-marks-coffee-curso-completo-barista",
    slug: "three-marks-coffee-curso-completo-barista",
    name: "Three Marks Coffee — Curso Completo Barista",
    brand: "Three Marks Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 770,
    oldPrice: null,
    historicalAveragePrice: 816.2,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0984/7010/1329/files/cursos-scaled-1-e1756200650516_1b9dfca5-ef26-47e5-b92e-73a5d03a3a35.jpg?v=1776247307",
    gallery: ["https://cdn.shopify.com/s/files/1/0984/7010/1329/files/cursos-scaled-1-e1756200650516_1b9dfca5-ef26-47e5-b92e-73a5d03a3a35.jpg?v=1776247307"],
    shortDesc: "Duración: 6 horas Día del curso: Viernes Plazas Limitadas El curso profesional de Three Marks Coffee ofrece una formación intensiva dirigida a adquirir los conocimientos y las...",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Three Marks Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Three Marks Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://threemarkscoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Three Marks Coffee (España)",
                "price": 770,
                "inStock": true,
                "url": "https://threemarkscoffee.com/products/curso-completo-barista",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 808.5,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Three%20Marks%20Coffee%20Curso%20Completo%20Barista&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "three-marks-coffee-decaf",
    slug: "three-marks-coffee-decaf",
    name: "Three Marks Coffee — Decaf",
    brand: "Three Marks Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 62,
    oldPrice: null,
    historicalAveragePrice: 65.72,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0984/7010/1329/files/FrontalView_f48a9e67-ccce-4846-8786-853b910ca5c4.png?v=1784197724",
    gallery: ["https://cdn.shopify.com/s/files/1/0984/7010/1329/files/FrontalView_f48a9e67-ccce-4846-8786-853b910ca5c4.png?v=1784197724","https://cdn.shopify.com/s/files/1/0984/7010/1329/files/LateralView_47eadfcf-6315-4f5d-b5c4-4832fee732d2.png?v=1784197724"],
    shortDesc: "Café de especialidad de origen seleccionado y tostado/diseñado por Three Marks Coffee (España).",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Three Marks Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Three Marks Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://threemarkscoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Three Marks Coffee (España)",
                "price": 62,
                "inStock": true,
                "url": "https://threemarkscoffee.com/products/colombia-decaf-1",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 65.1,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Three%20Marks%20Coffee%20Decaf&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "three-marks-coffee-decaf-coffee-capsules-chabela",
    slug: "three-marks-coffee-decaf-coffee-capsules-chabela",
    name: "Three Marks Coffee — DECAF Coffee Capsules, Chabela",
    brand: "Three Marks Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 9.5,
    oldPrice: null,
    historicalAveragePrice: 10.07,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0984/7010/1329/files/MMM_CapsulasDecaf_WEB.webp?v=1776246990",
    gallery: ["https://cdn.shopify.com/s/files/1/0984/7010/1329/files/MMM_CapsulasDecaf_WEB.webp?v=1776246990"],
    shortDesc: "Three Marks Coffee DECAF Capsules: México, Chabela. Variety Mixed Process Water Decaffeinated Case containing 10x individual decaf coffee pods with 6g of our espresso decaf co...",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Three Marks Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Three Marks Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://threemarkscoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Three Marks Coffee (España)",
                "price": 9.5,
                "inStock": true,
                "url": "https://threemarkscoffee.com/products/capsules-decaf",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 9.98,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Three%20Marks%20Coffee%20DECAF%20Coffee%20Capsules%2C%20Chabela&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "three-marks-coffee-decaf-drip-coffee-bags-10u",
    slug: "three-marks-coffee-decaf-drip-coffee-bags-10u",
    name: "Three Marks Coffee — Decaf Drip Coffee Bags (10u.)",
    brand: "Three Marks Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 16,
    oldPrice: null,
    historicalAveragePrice: 16.96,
    isOffer: false,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0984/7010/1329/files/MMM_DripDecaf_B.webp?v=1777379558",
    gallery: ["https://cdn.shopify.com/s/files/1/0984/7010/1329/files/MMM_DripDecaf_B.webp?v=1777379558","https://cdn.shopify.com/s/files/1/0984/7010/1329/files/MMM_DripDecaf_A.webp?v=1777379558","https://cdn.shopify.com/s/files/1/0984/7010/1329/files/MMM_Jul_13_Insta.webp?v=1777379559"],
    shortDesc: "Process Water Decaffeinated Region Chiapas Notes Sugarcane, Caramel, Vanilla. Variety Bourbon, Mundo Novo, Pacas, Typica Altitude 1000-1300 masl Weight 250g This coffee honors...",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Three Marks Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Three Marks Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://threemarkscoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Three Marks Coffee (España)",
                "price": 16,
                "inStock": true,
                "url": "https://threemarkscoffee.com/products/dripcoffee-decaf-box",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 16.8,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Three%20Marks%20Coffee%20Decaf%20Drip%20Coffee%20Bags%20(10u.)&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "three-marks-coffee-diego-vergara-pink-bourbon",
    slug: "three-marks-coffee-diego-vergara-pink-bourbon",
    name: "Three Marks Coffee — Diego Vergara Pink Bourbon",
    brand: "Three Marks Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 30,
    oldPrice: null,
    historicalAveragePrice: 31.8,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0984/7010/1329/files/FrontalView_aafe4c60-db27-4fd2-8b96-b8b413bbdb76.png?v=1780582949",
    gallery: ["https://cdn.shopify.com/s/files/1/0984/7010/1329/files/FrontalView_aafe4c60-db27-4fd2-8b96-b8b413bbdb76.png?v=1780582949","https://cdn.shopify.com/s/files/1/0984/7010/1329/files/LateralView_d72efa75-3661-44b7-abbf-8e98d1aaa75c.png?v=1780582950"],
    shortDesc: "Variety Pink Bourbon Process Washed Producer Diego Vergara Origin Colombia Region Acevedo, Pitalito Farm Las Flores Altitude 1750 masl Tropical Fruit, Lollipop, Rooibos",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Three Marks Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Three Marks Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://threemarkscoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Three Marks Coffee (España)",
                "price": 30,
                "inStock": true,
                "url": "https://threemarkscoffee.com/products/pink-bourbon-diego-vergara",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 31.5,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Three%20Marks%20Coffee%20Diego%20Vergara%20Pink%20Bourbon&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "three-marks-coffee-el-alisal",
    slug: "three-marks-coffee-el-alisal",
    name: "Three Marks Coffee — El Alisal",
    brand: "Three Marks Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 30,
    oldPrice: null,
    historicalAveragePrice: 31.8,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0984/7010/1329/files/Alisal-web.png?v=1780656724",
    gallery: ["https://cdn.shopify.com/s/files/1/0984/7010/1329/files/Alisal-web.png?v=1780656724","https://cdn.shopify.com/s/files/1/0984/7010/1329/files/MMM_TopGold_WEB_A_509e8f62-632c-4706-9dde-2f46e33193a2.webp?v=1776247233"],
    shortDesc: "Variety Batian Process Natural Region Quilanga, Loja Producer Leonidas Jaramillo Altitude 2000 masl Notes Red Grapes, Almond Oil, Hibiscus. Suggested for Filter, 125g The Proj...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Three Marks Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Three Marks Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://threemarkscoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Three Marks Coffee (España)",
                "price": 30,
                "inStock": true,
                "url": "https://threemarkscoffee.com/products/ecuador-el-alisal",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 31.5,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Three%20Marks%20Coffee%20El%20Alisal&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "three-marks-coffee-iria-ini-kiamwangi",
    slug: "three-marks-coffee-iria-ini-kiamwangi",
    name: "Three Marks Coffee — Iria‑Ini Kiamwangi",
    brand: "Three Marks Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 22,
    oldPrice: null,
    historicalAveragePrice: 23.32,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0984/7010/1329/files/FrontalView_401f5351-7f3b-4235-94e1-96de9828039b.png?v=1784550895",
    gallery: ["https://cdn.shopify.com/s/files/1/0984/7010/1329/files/FrontalView_401f5351-7f3b-4235-94e1-96de9828039b.png?v=1784550895","https://cdn.shopify.com/s/files/1/0984/7010/1329/files/LateralView_be87c78e-f935-4894-9f7e-d3e7fd380707.png?v=1784550895"],
    shortDesc: "Café de especialidad de origen seleccionado y tostado/diseñado por Three Marks Coffee (España).",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Three Marks Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Three Marks Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://threemarkscoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Three Marks Coffee (España)",
                "price": 22,
                "inStock": true,
                "url": "https://threemarkscoffee.com/products/iria-ini-kiamwangi",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 23.1,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Three%20Marks%20Coffee%20Iria%E2%80%91Ini%20Kiamwangi&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "three-marks-coffee-kamavindi-kamathura",
    slug: "three-marks-coffee-kamavindi-kamathura",
    name: "Three Marks Coffee — Kamavindi Kamathura",
    brand: "Three Marks Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 17,
    oldPrice: null,
    historicalAveragePrice: 18.02,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0984/7010/1329/files/FrontalView_411699e9-29cc-4752-8779-73ed7a132627.png?v=1784551124",
    gallery: ["https://cdn.shopify.com/s/files/1/0984/7010/1329/files/FrontalView_411699e9-29cc-4752-8779-73ed7a132627.png?v=1784551124","https://cdn.shopify.com/s/files/1/0984/7010/1329/files/LateralView_aea60727-0c0a-4bad-9b59-4b988cdf3c8e.png?v=1784551124"],
    shortDesc: "Café de especialidad de origen seleccionado y tostado/diseñado por Three Marks Coffee (España).",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Three Marks Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Three Marks Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://threemarkscoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Three Marks Coffee (España)",
                "price": 17,
                "inStock": true,
                "url": "https://threemarkscoffee.com/products/kamavindi-kamathura",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 17.85,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Three%20Marks%20Coffee%20Kamavindi%20Kamathura&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "three-marks-coffee-mutana-hill",
    slug: "three-marks-coffee-mutana-hill",
    name: "Three Marks Coffee — Mutana Hill",
    brand: "Three Marks Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 19.5,
    oldPrice: null,
    historicalAveragePrice: 20.67,
    isOffer: false,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0984/7010/1329/files/MMM_MutanaHill250_B.webp?v=1779178986",
    gallery: ["https://cdn.shopify.com/s/files/1/0984/7010/1329/files/MMM_MutanaHill250_B.webp?v=1779178986","https://cdn.shopify.com/s/files/1/0984/7010/1329/files/MMM_MutanaHill250_A.webp?v=1779178986"],
    shortDesc: "Variety Red Bourbon Process Washed Producer Long Miles Farm Smallholder Farmers Region Mutana Hill, Butanyerera Altitude 2100 - 2200masl Citrus Lime, Caramel, Grape. Suggested...",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Three Marks Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Three Marks Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://threemarkscoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Three Marks Coffee (España)",
                "price": 19.5,
                "inStock": true,
                "url": "https://threemarkscoffee.com/products/mutana-hill",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 20.48,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Three%20Marks%20Coffee%20Mutana%20Hill&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "three-marks-coffee-pepe-jijon-drip-bags-10u",
    slug: "three-marks-coffee-pepe-jijon-drip-bags-10u",
    name: "Three Marks Coffee — Pepe Jijon Drip Bags (10u.)",
    brand: "Three Marks Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 28,
    oldPrice: null,
    historicalAveragePrice: 29.68,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0984/7010/1329/files/MMM_DripSpecial_B.webp?v=1778576706",
    gallery: ["https://cdn.shopify.com/s/files/1/0984/7010/1329/files/MMM_DripSpecial_B.webp?v=1778576706","https://cdn.shopify.com/s/files/1/0984/7010/1329/files/MMM_DripSpecial_A.webp?v=1778576706","https://cdn.shopify.com/s/files/1/0984/7010/1329/files/MMM_Jul_13_Insta_0f207782-a715-45de-a86a-67d2cc1e87f7.webp?v=1778576707"],
    shortDesc: "Box with 10 individual bags. Each bag contains a disposable single use filter with 10g of our coffee Pepe Jijon from México. Take your favourite coffee with you when traveling...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Three Marks Coffee (España)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Three Marks Coffee","País de Origen":"España","Región":"Europa","Tienda Oficial":"https://threemarkscoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Three Marks Coffee (España)",
                "price": 28,
                "inStock": false,
                "url": "https://threemarkscoffee.com/products/drip-pepe-jijon-coffee-bags-10u",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 29.4,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Three%20Marks%20Coffee%20Pepe%20Jijon%20Drip%20Bags%20(10u.)&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "the-barn-berlin-sweet-coffee-bundle",
    slug: "the-barn-berlin-sweet-coffee-bundle",
    name: "The Barn Berlin — SWEET COFFEE BUNDLE",
    brand: "The Barn Berlin",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 45,
    oldPrice: 53.1,
    historicalAveragePrice: 47.7,
    isOffer: true,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "OFERTA ESPECIAL",
    image: "https://cdn.shopify.com/s/files/1/0831/4141/files/sweet_collection_august_2026.png?v=1785917831",
    gallery: ["https://cdn.shopify.com/s/files/1/0831/4141/files/sweet_collection_august_2026.png?v=1785917831","https://cdn.shopify.com/s/files/1/0831/4141/files/Image_19.09.25_at_17.59.jpg?v=1776430324","https://cdn.shopify.com/s/files/1/0831/4141/files/55D3D181-79B1-4C7C-B8EE-CFE5A0CDE69F-6494-000004C0C4951124_3_8a0c884d-9af0-4ddd-a418-7b74a84e64ea.jpg?v=1776430324","https://cdn.shopify.com/s/files/1/0831/4141/files/Image_15.11.24_at_09.22_037c53f8-b1e5-4027-8fa1-9baa6ef18d31.jpg?v=1776430324"],
    shortDesc: "Elemental, Brazil 🇧🇷 Elemental is a staple in our lineup: a coffee with the sweetness that has defined our love of Brazil. The profile is smooth with dark chocolate and almo...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de The Barn Berlin (Alemania)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"The Barn Berlin","País de Origen":"Alemania","Región":"Europa","Tienda Oficial":"https://thebarn.de","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "The Barn Berlin (Alemania)",
                "price": 45,
                "inStock": true,
                "url": "https://thebarn.de/products/sweet-collection",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 47.25,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=The%20Barn%20Berlin%20SWEET%20COFFEE%20BUNDLE&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "the-barn-berlin-brazil-twin-box",
    slug: "the-barn-berlin-brazil-twin-box",
    name: "The Barn Berlin — BRAZIL TWIN BOX",
    brand: "The Barn Berlin",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 31.16,
    oldPrice: null,
    historicalAveragePrice: 33.03,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0831/4141/files/Frame_29.png?v=1784101993",
    gallery: ["https://cdn.shopify.com/s/files/1/0831/4141/files/Frame_29.png?v=1784101993","https://cdn.shopify.com/s/files/1/0831/4141/files/Ivan_dos_santos_1_3ca70ac7-3232-45eb-828d-af674eccdf2b.jpg?v=1708096798","https://cdn.shopify.com/s/files/1/0831/4141/files/Celso_Minussi_FAF_THE_BARN.png?v=1784014293","https://cdn.shopify.com/s/files/1/0831/4141/files/Ivan_dos_santos_4_1fd3d919-294b-417b-bb86-d4a4b9c887ba.jpg?v=1708096798"],
    shortDesc: "Limited Offer Our Brazil Twin Box brings together two distinctive Brazilian coffees from producers we have partnered with for many years. While both offer the sweetness, body ...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de The Barn Berlin (Alemania)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"The Barn Berlin","País de Origen":"Alemania","Región":"Europa","Tienda Oficial":"https://thebarn.de","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "The Barn Berlin (Alemania)",
                "price": 31.16,
                "inStock": true,
                "url": "https://thebarn.de/products/brazil-twin-box",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 32.72,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=The%20Barn%20Berlin%20BRAZIL%20TWIN%20BOX&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "the-barn-berlin-elida-gesha-natural",
    slug: "the-barn-berlin-elida-gesha-natural",
    name: "The Barn Berlin — ELIDA GESHA NATURAL",
    brand: "The Barn Berlin",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 48,
    oldPrice: null,
    historicalAveragePrice: 50.88,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0831/4141/files/bag_elida_gesha_natural_125g.png?v=1787655369",
    gallery: ["https://cdn.shopify.com/s/files/1/0831/4141/files/bag_elida_gesha_natural_125g.png?v=1787655369","https://cdn.shopify.com/s/files/1/0831/4141/files/hovercard_elida_gesha_natural.jpg?v=1787655491","https://cdn.shopify.com/s/files/1/0831/4141/files/DSCF8176.jpg?v=1754559994","https://cdn.shopify.com/s/files/1/0831/4141/files/DSCF8142.jpg?v=1754559994"],
    shortDesc: "Limited Release: A Masterpiece From Panama This is the chance to taste an incredible coffee from the Lamastus family, whose innovation and expertise have defined the pinnacle ...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de The Barn Berlin (Alemania)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"The Barn Berlin","País de Origen":"Alemania","Región":"Europa","Tienda Oficial":"https://thebarn.de","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "The Barn Berlin (Alemania)",
                "price": 48,
                "inStock": true,
                "url": "https://thebarn.de/products/elida-gesha-natural",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 50.4,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=The%20Barn%20Berlin%20ELIDA%20GESHA%20NATURAL&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "the-barn-berlin-volcan-azul-obata",
    slug: "the-barn-berlin-volcan-azul-obata",
    name: "The Barn Berlin — VOLCAN AZUL OBATÁ",
    brand: "The Barn Berlin",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 25,
    oldPrice: null,
    historicalAveragePrice: 26.5,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0831/4141/files/bag_volcan_azul_obata.png?v=1787659234",
    gallery: ["https://cdn.shopify.com/s/files/1/0831/4141/files/bag_volcan_azul_obata.png?v=1787659234","https://cdn.shopify.com/s/files/1/0831/4141/files/hovercard_volcan_azul_obata.jpg?v=1787645873","https://cdn.shopify.com/s/files/1/0831/4141/files/Image19.04.24at16.24.jpg?v=1762254286","https://cdn.shopify.com/s/files/1/0831/4141/files/DSCF42004.jpg?v=1762254286"],
    shortDesc: "Our new Rarity from Volcan Azul in Costa Rica, where producer Alejo Castro has used warm anaerobic fermentation to create an intensely expressive Obatá. Packed with mango, pas...",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de The Barn Berlin (Alemania)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"The Barn Berlin","País de Origen":"Alemania","Región":"Europa","Tienda Oficial":"https://thebarn.de","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "The Barn Berlin (Alemania)",
                "price": 25,
                "inStock": true,
                "url": "https://thebarn.de/products/volcan-azul-obata",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 26.25,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=The%20Barn%20Berlin%20VOLCAN%20AZUL%20OBAT%C3%81&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "the-barn-berlin-guatemala-twin-box",
    slug: "the-barn-berlin-guatemala-twin-box",
    name: "The Barn Berlin — GUATEMALA TWIN BOX",
    brand: "The Barn Berlin",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 32.5,
    oldPrice: null,
    historicalAveragePrice: 34.45,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0831/4141/files/bag_la_colina_twin_box.png?v=1787131676",
    gallery: ["https://cdn.shopify.com/s/files/1/0831/4141/files/bag_la_colina_twin_box.png?v=1787131676","https://cdn.shopify.com/s/files/1/0831/4141/files/Tony_La_COlina.jpg?v=1701492495","https://cdn.shopify.com/s/files/1/0831/4141/files/Image22.04.24at13.11.jpg?v=1759172550","https://cdn.shopify.com/s/files/1/0831/4141/files/Image22.04.24at13.16.jpg?v=1759172550"],
    shortDesc: "One farm. One varietal. Two expressions of process. Our Guatemala Twin Box brings together two coffees from Antonio Medina at La Colina in Chimaltenango. Grown from the same C...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de The Barn Berlin (Alemania)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"The Barn Berlin","País de Origen":"Alemania","Región":"Europa","Tienda Oficial":"https://thebarn.de","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "The Barn Berlin (Alemania)",
                "price": 32.5,
                "inStock": true,
                "url": "https://thebarn.de/products/guatemala-twin-box",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 34.13,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=The%20Barn%20Berlin%20GUATEMALA%20TWIN%20BOX&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "the-barn-berlin-la-colina-washed",
    slug: "the-barn-berlin-la-colina-washed",
    name: "The Barn Berlin — LA COLINA WASHED",
    brand: "The Barn Berlin",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 16.9,
    oldPrice: null,
    historicalAveragePrice: 17.91,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0831/4141/files/bag_la_colina_washed_b2c.png?v=1785847163",
    gallery: ["https://cdn.shopify.com/s/files/1/0831/4141/files/bag_la_colina_washed_b2c.png?v=1785847163","https://cdn.shopify.com/s/files/1/0831/4141/files/hovercard_la_colina_washed.jpg?v=1787130393","https://cdn.shopify.com/s/files/1/0831/4141/files/DSCF2708.jpg?v=1759172550","https://cdn.shopify.com/s/files/1/0831/4141/files/Image22.04.24at13.11.jpg?v=1759172550"],
    shortDesc: "La Colina has become a favourite in our Guatemalan portfolio, combining rich sweetness with delicate fruit. This washed Caturra from producer Antonio Medina is silky and balan...",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de The Barn Berlin (Alemania)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"The Barn Berlin","País de Origen":"Alemania","Región":"Europa","Tienda Oficial":"https://thebarn.de","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "The Barn Berlin (Alemania)",
                "price": 16.9,
                "inStock": true,
                "url": "https://thebarn.de/products/la-colina",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 17.75,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=The%20Barn%20Berlin%20LA%20COLINA%20WASHED&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "the-barn-berlin-nebula-brewing-tool",
    slug: "the-barn-berlin-nebula-brewing-tool",
    name: "The Barn Berlin — NEBULA BREWING TOOL",
    brand: "The Barn Berlin",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 35,
    oldPrice: null,
    historicalAveragePrice: 37.1,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0831/4141/files/NebulaBrewingTool.png?v=1786613654",
    gallery: ["https://cdn.shopify.com/s/files/1/0831/4141/files/NebulaBrewingTool.png?v=1786613654","https://cdn.shopify.com/s/files/1/0831/4141/files/photo_nebula_brewing_tool_2.jpg?v=1786614521","https://cdn.shopify.com/s/files/1/0831/4141/files/photo_nebula_brewing_tool.jpg?v=1786614544","https://cdn.shopify.com/s/files/1/0831/4141/files/photo_nebula_brewing_tool_3.jpg?v=1786614787"],
    shortDesc: "Introducing the Nebula Brewing Tool At the World of Coffee this year, we came across this unique brewing tool, turning any cone into a flat-filter brewer. Designed by Nana Cof...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de The Barn Berlin (Alemania)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"The Barn Berlin","País de Origen":"Alemania","Región":"Europa","Tienda Oficial":"https://thebarn.de","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "The Barn Berlin (Alemania)",
                "price": 35,
                "inStock": true,
                "url": "https://thebarn.de/products/nebula-brewing-tool",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 36.75,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=The%20Barn%20Berlin%20NEBULA%20BREWING%20TOOL&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "the-barn-berlin-sundrop-peaberry",
    slug: "the-barn-berlin-sundrop-peaberry",
    name: "The Barn Berlin — SUNDROP PEABERRY",
    brand: "The Barn Berlin",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 16.4,
    oldPrice: null,
    historicalAveragePrice: 17.38,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0831/4141/files/bag_sundrop_peaberry_b2c.png?v=1786097714",
    gallery: ["https://cdn.shopify.com/s/files/1/0831/4141/files/bag_sundrop_peaberry_b2c.png?v=1786097714","https://cdn.shopify.com/s/files/1/0831/4141/files/hovercard_sundrop_peaberry.jpg?v=1786098188","https://cdn.shopify.com/s/files/1/0831/4141/files/thebarncoffeeroastersberlindaterrabrazil.jpg?v=1772012799","https://cdn.shopify.com/s/files/1/0831/4141/products/IMG_4094_b988624a-f2bb-4b7d-8e57-1254fa9368e2.jpg?v=1746013880"],
    shortDesc: "A refined single origin espresso from Brazil, this special edition Sundrop Peaberry highlights the exceptional work of pioneering producer Daterra. Carefully screened to selec...",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de The Barn Berlin (Alemania)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"The Barn Berlin","País de Origen":"Alemania","Región":"Europa","Tienda Oficial":"https://thebarn.de","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "The Barn Berlin (Alemania)",
                "price": 16.4,
                "inStock": true,
                "url": "https://thebarn.de/products/sundrop-peaberry",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 17.22,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=The%20Barn%20Berlin%20SUNDROP%20PEABERRY&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "the-barn-berlin-atlas-coffee",
    slug: "the-barn-berlin-atlas-coffee",
    name: "The Barn Berlin — ATLAS COFFEE",
    brand: "The Barn Berlin",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 27.8,
    oldPrice: null,
    historicalAveragePrice: 29.47,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0831/4141/files/bag_atlas_b2c.png?v=1784803222",
    gallery: ["https://cdn.shopify.com/s/files/1/0831/4141/files/bag_atlas_b2c.png?v=1784803222","https://cdn.shopify.com/s/files/1/0831/4141/files/hovercard_atlas.jpg?v=1784880350","https://cdn.shopify.com/s/files/1/0831/4141/files/Image_23.07.26_at_15.11.jpg?v=1784812282","https://cdn.shopify.com/s/files/1/0831/4141/files/IMG_8960.jpg?v=1784880516"],
    shortDesc: "Introducing Atlas: our new Core Coffee. From its birthplace in Ethiopia, coffee journeyed to the volcanic highlands of Central America, where generations of producers shaped o...",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de The Barn Berlin (Alemania)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"The Barn Berlin","País de Origen":"Alemania","Región":"Europa","Tienda Oficial":"https://thebarn.de","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "The Barn Berlin (Alemania)",
                "price": 27.8,
                "inStock": true,
                "url": "https://thebarn.de/products/atlas-coffee",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 29.19,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=The%20Barn%20Berlin%20ATLAS%20COFFEE&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "the-barn-berlin-chemex",
    slug: "the-barn-berlin-chemex",
    name: "The Barn Berlin — CHEMEX",
    brand: "The Barn Berlin",
    category: "accesorios",
    subCategory: "Cafeteras Manuales",
    price: 47.5,
    oldPrice: null,
    historicalAveragePrice: 50.35,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0831/4141/files/ChemexSixCup.heic?v=1704208251",
    gallery: ["https://cdn.shopify.com/s/files/1/0831/4141/files/ChemexSixCup.heic?v=1704208251","https://cdn.shopify.com/s/files/1/0831/4141/files/34A1905.jpg?v=1721633977","https://cdn.shopify.com/s/files/1/0831/4141/files/34A1900.jpg?v=1721633986"],
    shortDesc: "The Chemex was invented by chemist Peter Schlumbohm in 1941 in Chicago, USA. With an understanding of how to perfectly extract both flavour and caffeine, Peter set about desig...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de The Barn Berlin (Alemania)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"The Barn Berlin","País de Origen":"Alemania","Región":"Europa","Tienda Oficial":"https://thebarn.de","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "The Barn Berlin (Alemania)",
                "price": 47.5,
                "inStock": false,
                "url": "https://thebarn.de/products/chemex",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 49.88,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=The%20Barn%20Berlin%20CHEMEX&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "the-barn-berlin-fellow-carter-move-tumbler",
    slug: "the-barn-berlin-fellow-carter-move-tumbler",
    name: "The Barn Berlin — FELLOW CARTER MOVE TUMBLER",
    brand: "The Barn Berlin",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 44.9,
    oldPrice: null,
    historicalAveragePrice: 47.59,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0831/4141/files/fellowcartermove2.png?v=1784548049",
    gallery: ["https://cdn.shopify.com/s/files/1/0831/4141/files/fellowcartermove2.png?v=1784548049","https://cdn.shopify.com/s/files/1/0831/4141/files/fellowcartermove1.png?v=1784016223"],
    shortDesc: "The Fellow Carter Move 355ml is our favourite ceramic travel coffee mug for everyday coffee. Finished in matte black and laser engraved with the THE BARN logo, it keeps your c...",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de The Barn Berlin (Alemania)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"The Barn Berlin","País de Origen":"Alemania","Región":"Europa","Tienda Oficial":"https://thebarn.de","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "The Barn Berlin (Alemania)",
                "price": 44.9,
                "inStock": true,
                "url": "https://thebarn.de/products/fellow-carter-move-tumbler",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 47.15,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=The%20Barn%20Berlin%20FELLOW%20CARTER%20MOVE%20TUMBLER&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "the-barn-berlin-fellow-carter-carry-tumbler",
    slug: "the-barn-berlin-fellow-carter-carry-tumbler",
    name: "The Barn Berlin — FELLOW CARTER CARRY TUMBLER",
    brand: "The Barn Berlin",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 48.9,
    oldPrice: null,
    historicalAveragePrice: 51.83,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0831/4141/files/Fellow_carter_carry_3.png?v=1784548112",
    gallery: ["https://cdn.shopify.com/s/files/1/0831/4141/files/Fellow_carter_carry_3.png?v=1784548112","https://cdn.shopify.com/s/files/1/0831/4141/files/fellowcartercarry1.png?v=1784017207","https://cdn.shopify.com/s/files/1/0831/4141/files/fellow_carter_carry_lid.png?v=1784017162"],
    shortDesc: "Designed for coffee lovers who are always moving, the Fellow Carter Carry combines exceptional insulation with a comfortable carry handle. The ceramic interior protects flavou...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de The Barn Berlin (Alemania)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"The Barn Berlin","País de Origen":"Alemania","Región":"Europa","Tienda Oficial":"https://thebarn.de","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "The Barn Berlin (Alemania)",
                "price": 48.9,
                "inStock": true,
                "url": "https://thebarn.de/products/fellow-carter-carry-tumbler",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 51.35,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=The%20Barn%20Berlin%20FELLOW%20CARTER%20CARRY%20TUMBLER&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "the-barn-berlin-fellow-carry-lid",
    slug: "the-barn-berlin-fellow-carry-lid",
    name: "The Barn Berlin — FELLOW CARRY LID",
    brand: "The Barn Berlin",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 19.9,
    oldPrice: null,
    historicalAveragePrice: 21.09,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0831/4141/files/fellow_carter_carry_lid.png?v=1784017162",
    gallery: ["https://cdn.shopify.com/s/files/1/0831/4141/files/fellow_carter_carry_lid.png?v=1784017162"],
    shortDesc: "Upgrade your Fellow Carter Move with the Carry Lid . Featuring the same leak-proof design and a premium metal carry handle, it transforms your travel mug into the perfect comp...",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de The Barn Berlin (Alemania)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"The Barn Berlin","País de Origen":"Alemania","Región":"Europa","Tienda Oficial":"https://thebarn.de","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "The Barn Berlin (Alemania)",
                "price": 19.9,
                "inStock": true,
                "url": "https://thebarn.de/products/fellow-carry-lid",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 20.9,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=The%20Barn%20Berlin%20FELLOW%20CARRY%20LID&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "the-barn-berlin-aeropress-xl-paper-microfilters-200-pack",
    slug: "the-barn-berlin-aeropress-xl-paper-microfilters-200-pack",
    name: "The Barn Berlin — AEROPRESS XL PAPER MICROFILTERS - 200 PACK",
    brand: "The Barn Berlin",
    category: "accesorios",
    subCategory: "Cafeteras Manuales",
    price: 7.5,
    oldPrice: null,
    historicalAveragePrice: 7.95,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0831/4141/files/aep_xl_filter_3.png?v=1783418976",
    gallery: ["https://cdn.shopify.com/s/files/1/0831/4141/files/aep_xl_filter_3.png?v=1783418976","https://cdn.shopify.com/s/files/1/0831/4141/files/aep_xlf_filter_1.png?v=1783418976","https://cdn.shopify.com/s/files/1/0831/4141/files/aep_xl_filter_2.png?v=1783418976"],
    shortDesc: "These round paper microfilters are made specially for your AeroPress XL . We prefer paper filters over metal filters. Paper creates a clean, balanced cup with excellent clarit...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de The Barn Berlin (Alemania)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"The Barn Berlin","País de Origen":"Alemania","Región":"Europa","Tienda Oficial":"https://thebarn.de","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "The Barn Berlin (Alemania)",
                "price": 7.5,
                "inStock": true,
                "url": "https://thebarn.de/products/aeropress-xl-paper-microfilters-200-pack",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 7.88,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=The%20Barn%20Berlin%20AEROPRESS%20XL%20PAPER%20MICROFILTERS%20-%20200%20PACK&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "the-barn-berlin-aroma-nativo-aji",
    slug: "the-barn-berlin-aroma-nativo-aji",
    name: "The Barn Berlin — AROMA NATIVO AJI",
    brand: "The Barn Berlin",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 42,
    oldPrice: null,
    historicalAveragePrice: 44.52,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0831/4141/files/Aroma-Nativo-Aji.png?v=1782481097",
    gallery: ["https://cdn.shopify.com/s/files/1/0831/4141/files/Aroma-Nativo-Aji.png?v=1782481097","https://cdn.shopify.com/s/files/1/0831/4141/files/ENG_final_all_coffee_cards_web.jpg?v=1782482843","https://cdn.shopify.com/s/files/1/0831/4141/files/aroma_nativo_3.jpg?v=1777373799","https://cdn.shopify.com/s/files/1/0831/4141/files/aroma_nativo_6_d6ca1f25-97eb-49d4-8bf0-6557c6f9112d.jpg?v=1781179110"],
    shortDesc: "Limited Release An Innovative Masterpiece from one of the rising stars of Colombian coffee. Hydro Honey processing opens the cup with tropical fruit, ripe strawberry sweetness...",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de The Barn Berlin (Alemania)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"The Barn Berlin","País de Origen":"Alemania","Región":"Europa","Tienda Oficial":"https://thebarn.de","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "The Barn Berlin (Alemania)",
                "price": 42,
                "inStock": false,
                "url": "https://thebarn.de/products/aroma-nativo-aji",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 44.1,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=The%20Barn%20Berlin%20AROMA%20NATIVO%20AJI&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "the-barn-berlin-nucleus-bloom",
    slug: "the-barn-berlin-nucleus-bloom",
    name: "The Barn Berlin — NUCLEUS BLOOM",
    brand: "The Barn Berlin",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 59,
    oldPrice: null,
    historicalAveragePrice: 62.54,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0831/4141/files/NUCLEUSBLOOMIMG_3088.jpg?v=1782398039",
    gallery: ["https://cdn.shopify.com/s/files/1/0831/4141/files/NUCLEUSBLOOMIMG_3088.jpg?v=1782398039","https://cdn.shopify.com/s/files/1/0831/4141/files/NUCLEUSBLOOMIMG_30872.jpg?v=1782398040","https://cdn.shopify.com/s/files/1/0831/4141/files/NUCLEUSBLOOMIMG_3092.jpg?v=1782398039"],
    shortDesc: "The Nucleus Bloom prepares your coffee bed before the first pour, helping create a more even extraction. Its dual-needle system breaks up clumps, reduces static and removes tr...",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de The Barn Berlin (Alemania)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"The Barn Berlin","País de Origen":"Alemania","Región":"Europa","Tienda Oficial":"https://thebarn.de","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "The Barn Berlin (Alemania)",
                "price": 59,
                "inStock": true,
                "url": "https://thebarn.de/products/nucleus-bloom",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 61.95,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=The%20Barn%20Berlin%20NUCLEUS%20BLOOM&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "the-barn-berlin-volcan-azul",
    slug: "the-barn-berlin-volcan-azul",
    name: "The Barn Berlin — VOLCAN AZUL",
    brand: "The Barn Berlin",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 16.9,
    oldPrice: null,
    historicalAveragePrice: 17.91,
    isOffer: false,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0831/4141/files/B2C_Bag_52c620d4-0df6-41e1-9733-432bd22eee59.png?v=1781683441",
    gallery: ["https://cdn.shopify.com/s/files/1/0831/4141/files/B2C_Bag_52c620d4-0df6-41e1-9733-432bd22eee59.png?v=1781683441","https://cdn.shopify.com/s/files/1/0831/4141/files/ENG_VOLCAN_AZUL__web_card.jpg?v=1752315245","https://cdn.shopify.com/s/files/1/0831/4141/files/DSCF42004.jpg?v=1762254286","https://cdn.shopify.com/s/files/1/0831/4141/files/Image19.04.24at16.24.jpg?v=1762254286"],
    shortDesc: "Sweet and expressive, Volcan Azul Caturra reveals vibrant notes of dried fig and blueberry. A beautifully crafted natural process coffee from one of the most celebrated produc...",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de The Barn Berlin (Alemania)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"The Barn Berlin","País de Origen":"Alemania","Región":"Europa","Tienda Oficial":"https://thebarn.de","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "The Barn Berlin (Alemania)",
                "price": 16.9,
                "inStock": true,
                "url": "https://thebarn.de/products/volcan-azul",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 17.75,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=The%20Barn%20Berlin%20VOLCAN%20AZUL&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "the-barn-berlin-ivan-dos-santos-typica",
    slug: "the-barn-berlin-ivan-dos-santos-typica",
    name: "The Barn Berlin — IVAN DOS SANTOS TYPICA",
    brand: "The Barn Berlin",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 16.9,
    oldPrice: null,
    historicalAveragePrice: 17.91,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0831/4141/files/bag_ivan_dos_santos_typica_b2c.png?v=1781101212",
    gallery: ["https://cdn.shopify.com/s/files/1/0831/4141/files/bag_ivan_dos_santos_typica_b2c.png?v=1781101212","https://cdn.shopify.com/s/files/1/0831/4141/files/hovercard_ivan_typica.jpg?v=1781102328","https://cdn.shopify.com/s/files/1/0831/4141/files/Image_04.06.26_at_15.16.jpg?v=1780579040","https://cdn.shopify.com/s/files/1/0831/4141/files/Image04.06.26at15.09.jpg?v=1780578646"],
    shortDesc: "Ivan and Rose dos Santos showcase a different side of Brazilian coffee with this exceptional Typica microlot. Known locally as Sumatra, the variety brings refined fruit, elega...",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de The Barn Berlin (Alemania)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"The Barn Berlin","País de Origen":"Alemania","Región":"Europa","Tienda Oficial":"https://thebarn.de","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "The Barn Berlin (Alemania)",
                "price": 16.9,
                "inStock": true,
                "url": "https://thebarn.de/products/ivan-dos-santos-typica",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 17.75,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=The%20Barn%20Berlin%20IVAN%20DOS%20SANTOS%20TYPICA&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "the-barn-berlin-ivan-dos-santos-anaerobic",
    slug: "the-barn-berlin-ivan-dos-santos-anaerobic",
    name: "The Barn Berlin — IVAN DOS SANTOS ANAEROBIC",
    brand: "The Barn Berlin",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 16.9,
    oldPrice: null,
    historicalAveragePrice: 17.91,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0831/4141/files/bag_ivan_dos_santos_anaerobic_b2c.png?v=1781097948",
    gallery: ["https://cdn.shopify.com/s/files/1/0831/4141/files/bag_ivan_dos_santos_anaerobic_b2c.png?v=1781097948","https://cdn.shopify.com/s/files/1/0831/4141/files/hovercard_ivan_dos_santos_anaerobic.jpg?v=1781098511","https://cdn.shopify.com/s/files/1/0831/4141/products/Ivan_dos_santos_4_8ef5a05b-1e16-4e92-8fa0-0abb3fceb926.jpg?v=1772536627","https://cdn.shopify.com/s/files/1/0831/4141/files/Image_04.06.26_at_14.54.jpg?v=1780578129"],
    shortDesc: "The first anaerobic lot we have featured from our partners Ivan and Rose dos Santos. In the cup, it is like sweet fig jam and velvety nougat: an espresso full of character.",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de The Barn Berlin (Alemania)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"The Barn Berlin","País de Origen":"Alemania","Región":"Europa","Tienda Oficial":"https://thebarn.de","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "The Barn Berlin (Alemania)",
                "price": 16.9,
                "inStock": true,
                "url": "https://thebarn.de/products/ivan-dos-santos-anaerobic",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 17.75,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=The%20Barn%20Berlin%20IVAN%20DOS%20SANTOS%20ANAEROBIC&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "the-barn-berlin-logo-t-shirt",
    slug: "the-barn-berlin-logo-t-shirt",
    name: "The Barn Berlin — LOGO T-SHIRT",
    brand: "The Barn Berlin",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 30,
    oldPrice: null,
    historicalAveragePrice: 31.8,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0831/4141/files/image1_9818690d-3cfb-477f-93e6-9afda37b5d47.jpg?v=1721634416",
    gallery: ["https://cdn.shopify.com/s/files/1/0831/4141/files/image1_9818690d-3cfb-477f-93e6-9afda37b5d47.jpg?v=1721634416","https://cdn.shopify.com/s/files/1/0831/4141/files/IMG_0388.jpg?v=1780317477","https://cdn.shopify.com/s/files/1/0831/4141/files/IMG_0422.jpg?v=1780499534","https://cdn.shopify.com/s/files/1/0831/4141/files/IMG_0424.jpg?v=1780499431"],
    shortDesc: "Our Classic T-Shirt Updated Made from organic cotton in heather grey. The Barn logo is embroidered on the front, with wide double stitching at the sleeve and hem. Colour: Grey...",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de The Barn Berlin (Alemania)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"The Barn Berlin","País de Origen":"Alemania","Región":"Europa","Tienda Oficial":"https://thebarn.de","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "The Barn Berlin (Alemania)",
                "price": 30,
                "inStock": true,
                "url": "https://thebarn.de/products/logo-t-shirt",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 31.5,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=The%20Barn%20Berlin%20LOGO%20T-SHIRT&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "the-barn-berlin-los-lajones-gesha",
    slug: "the-barn-berlin-los-lajones-gesha",
    name: "The Barn Berlin — LOS LAJONES GESHA",
    brand: "The Barn Berlin",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 42,
    oldPrice: null,
    historicalAveragePrice: 44.52,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0831/4141/files/bag_los_lajones_washed_b2c.png?v=1785400930",
    gallery: ["https://cdn.shopify.com/s/files/1/0831/4141/files/bag_los_lajones_washed_b2c.png?v=1785400930","https://cdn.shopify.com/s/files/1/0831/4141/files/hovercards_los_lajones_washed.jpg?v=1785401417","https://cdn.shopify.com/s/files/1/0831/4141/files/6B42BA96-2CD5-4202-AC5A-CAFB01B7A304-1675-0000009EA128F911.jpg?v=1780389321","https://cdn.shopify.com/s/files/1/0831/4141/files/579CB25A-C8A7-4724-ACA5-8EF9F7FC424C-1675-0000009E9BA5A2C7.jpg?v=1780389261"],
    shortDesc: "Limited Release Masterpiece From visionary producer Graciano Cruz, this is the chance to explore the most refined flavour in coffee. The Anaerobic washed process elevates the ...",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de The Barn Berlin (Alemania)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"The Barn Berlin","País de Origen":"Alemania","Región":"Europa","Tienda Oficial":"https://thebarn.de","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "The Barn Berlin (Alemania)",
                "price": 42,
                "inStock": false,
                "url": "https://thebarn.de/products/los-lajones-gesha",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 44.1,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=The%20Barn%20Berlin%20LOS%20LAJONES%20GESHA&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "the-barn-berlin-hario-v60-red-02",
    slug: "the-barn-berlin-hario-v60-red-02",
    name: "The Barn Berlin — HARIO V60 RED 02",
    brand: "The Barn Berlin",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 9.5,
    oldPrice: null,
    historicalAveragePrice: 10.07,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0831/4141/files/IMG_0394.jpg?v=1780318766",
    gallery: ["https://cdn.shopify.com/s/files/1/0831/4141/files/IMG_0394.jpg?v=1780318766","https://cdn.shopify.com/s/files/1/0831/4141/files/hario_v60_red.png?v=1780319479"],
    shortDesc: "The plastic Hario V60 is a tried and tested brewer offering unrivalled value for money - perfect for that first step into pourover brewing or to update your current setup. The...",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de The Barn Berlin (Alemania)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"The Barn Berlin","País de Origen":"Alemania","Región":"Europa","Tienda Oficial":"https://thebarn.de","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "The Barn Berlin (Alemania)",
                "price": 9.5,
                "inStock": false,
                "url": "https://thebarn.de/products/hario-v60-red-02",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 9.98,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=The%20Barn%20Berlin%20HARIO%20V60%20RED%2002&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "the-barn-berlin-anniversary-coffee",
    slug: "the-barn-berlin-anniversary-coffee",
    name: "The Barn Berlin — ANNIVERSARY COFFEE",
    brand: "The Barn Berlin",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 16,
    oldPrice: null,
    historicalAveragePrice: 16.96,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0831/4141/files/bag_anniversary_coffee_200g.png?v=1780050009",
    gallery: ["https://cdn.shopify.com/s/files/1/0831/4141/files/bag_anniversary_coffee_200g.png?v=1780050009","https://cdn.shopify.com/s/files/1/0831/4141/files/hovercard_los_pirineos_anniversary.jpg?v=1780045966","https://cdn.shopify.com/s/files/1/0831/4141/files/IMG_0422.jpg?v=1780499534","https://cdn.shopify.com/s/files/1/0831/4141/files/Image_29.05.26_at_12.26.jpg?v=1780050451"],
    shortDesc: "Celebrating Our 16th Birthday Our limited edition Anniversary Coffee, produced by our friend Diego Baraona at the stunning Los Pirineos estate, just up the road from the town ...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de The Barn Berlin (Alemania)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"The Barn Berlin","País de Origen":"Alemania","Región":"Europa","Tienda Oficial":"https://thebarn.de","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "The Barn Berlin (Alemania)",
                "price": 16,
                "inStock": false,
                "url": "https://thebarn.de/products/los-pirineos-pacamara-anaerobic",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 16.8,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=The%20Barn%20Berlin%20ANNIVERSARY%20COFFEE&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "the-barn-berlin-decaf-twin-box",
    slug: "the-barn-berlin-decaf-twin-box",
    name: "The Barn Berlin — DECAF TWIN BOX",
    brand: "The Barn Berlin",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 30.3,
    oldPrice: null,
    historicalAveragePrice: 32.12,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0831/4141/files/Decaf_Options_1.png?v=1779866851",
    gallery: ["https://cdn.shopify.com/s/files/1/0831/4141/files/Decaf_Options_1.png?v=1779866851","https://cdn.shopify.com/s/files/1/0831/4141/files/Image_19.09.25_at_17.59.jpg?v=1776430324","https://cdn.shopify.com/s/files/1/0831/4141/files/Image_15.11.24_at_09.22_037c53f8-b1e5-4027-8fa1-9baa6ef18d31.jpg?v=1776430324","https://cdn.shopify.com/s/files/1/0831/4141/files/the_barn_filter_coffee.jpg?v=1778147643"],
    shortDesc: "Our first ever Decaf collection. A new generation of decaf coffee, featuring the sugarcane process: discover two flavour profiles, Balanced and Funky. Order now with free ship...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de The Barn Berlin (Alemania)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"The Barn Berlin","País de Origen":"Alemania","Región":"Europa","Tienda Oficial":"https://thebarn.de","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "The Barn Berlin (Alemania)",
                "price": 30.3,
                "inStock": true,
                "url": "https://thebarn.de/products/decaf-coffee-bundle",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 31.82,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=The%20Barn%20Berlin%20DECAF%20TWIN%20BOX&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "the-barn-berlin-melitta-aromaboy-brewer",
    slug: "the-barn-berlin-melitta-aromaboy-brewer",
    name: "The Barn Berlin — MELITTA AROMABOY BREWER",
    brand: "The Barn Berlin",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 48,
    oldPrice: null,
    historicalAveragePrice: 50.88,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/0831/4141/files/melitta_aromaboy_beige.png?v=1779790806",
    gallery: ["https://cdn.shopify.com/s/files/1/0831/4141/files/melitta_aromaboy_beige.png?v=1779790806","https://cdn.shopify.com/s/files/1/0831/4141/files/kaffeemaschine-melitta-aromaboy-kaffeemaschine_bk-schwarz_klein-6707286-1.png?v=1779790806","https://cdn.shopify.com/s/files/1/0831/4141/files/IMG_7817.jpg?v=1779876956","https://cdn.shopify.com/s/files/1/0831/4141/files/aroma_boy_with_origami.png?v=1779877044"],
    shortDesc: "The Melitta Aromaboy On the market since 1979 and consistently developed ever since: The Melitta Aromaboy®, in the popular retro design, extracts full aroma even from the smal...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de The Barn Berlin (Alemania)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"The Barn Berlin","País de Origen":"Alemania","Región":"Europa","Tienda Oficial":"https://thebarn.de","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "The Barn Berlin (Alemania)",
                "price": 48,
                "inStock": true,
                "url": "https://thebarn.de/products/melitta-aromaboy-brewer",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 50.4,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=The%20Barn%20Berlin%20MELITTA%20AROMABOY%20BREWER&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "la-cabra-jorge-andrade",
    slug: "la-cabra-jorge-andrade",
    name: "La Cabra — Jorge Andrade",
    brand: "La Cabra",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 23.95,
    oldPrice: null,
    historicalAveragePrice: 25.39,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1094/5212/files/Jorge_Andrade_La_Cabra_Highlight_Coffee_Box_200g.webp?v=1787129455",
    gallery: ["https://cdn.shopify.com/s/files/1/1094/5212/files/Jorge_Andrade_La_Cabra_Highlight_Coffee_Box_200g.webp?v=1787129455","https://cdn.shopify.com/s/files/1/1094/5212/files/Jorge_Andrade_La_Cabra_Highlight_Coffee_Bag_1kg.webp?v=1787129469"],
    shortDesc: "A complex, floral and tropical natural Geisha by Jorge Andrade in Huila, shaped by his intuitive approach in the field.",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de La Cabra (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"La Cabra","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://lacabra.dk","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "La Cabra (Dinamarca)",
                "price": 23.95,
                "inStock": false,
                "url": "https://lacabra.dk/products/jorge-andrade",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 25.15,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=La%20Cabra%20Jorge%20Andrade&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "la-cabra-oma-washed",
    slug: "la-cabra-oma-washed",
    name: "La Cabra — Oma Washed",
    brand: "La Cabra",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 31.95,
    oldPrice: null,
    historicalAveragePrice: 33.87,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1094/5212/files/Oma_Washed_Coffee_La_Cabra_100g.webp?v=1787043328",
    gallery: ["https://cdn.shopify.com/s/files/1/1094/5212/files/Oma_Washed_Coffee_La_Cabra_100g.webp?v=1787043328"],
    shortDesc: "A floral Gesha 1931 grown on the Oma plot of Gesha Village. The washed process highlights its unique qualities, producing a floral cup with bright acidity and clear flavour de...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de La Cabra (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"La Cabra","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://lacabra.dk","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "La Cabra (Dinamarca)",
                "price": 31.95,
                "inStock": true,
                "url": "https://lacabra.dk/products/oma-washed",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 33.55,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=La%20Cabra%20Oma%20Washed&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "la-cabra-oma-natural",
    slug: "la-cabra-oma-natural",
    name: "La Cabra — Oma Natural",
    brand: "La Cabra",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 31.95,
    oldPrice: null,
    historicalAveragePrice: 33.87,
    isOffer: false,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1094/5212/files/OmaNatural100g.webp?v=1787552445",
    gallery: ["https://cdn.shopify.com/s/files/1/1094/5212/files/OmaNatural100g.webp?v=1787552445"],
    shortDesc: "A delicately floral Gesha 1931 grown on the Oma plot of Gesha Village; the careful natural process enhances sweet notes of stone fruit.",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de La Cabra (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"La Cabra","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://lacabra.dk","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "La Cabra (Dinamarca)",
                "price": 31.95,
                "inStock": true,
                "url": "https://lacabra.dk/products/oma-natural",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 33.55,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=La%20Cabra%20Oma%20Natural&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "la-cabra-arbegona",
    slug: "la-cabra-arbegona",
    name: "La Cabra — Arbegona",
    brand: "La Cabra",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 21.95,
    oldPrice: null,
    historicalAveragePrice: 23.27,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1094/5212/files/Arbegona_250g_Coffee_La_Cabra.webp?v=1787126505",
    gallery: ["https://cdn.shopify.com/s/files/1/1094/5212/files/Arbegona_250g_Coffee_La_Cabra.webp?v=1787126505","https://cdn.shopify.com/s/files/1/1094/5212/files/Arbegona_1kg_Coffee_La_Cabra.webp?v=1787126505"],
    shortDesc: "A high-altitude natural lot grown by smallholders surrounding Shantawene in the Bensa district of Sidama.",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de La Cabra (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"La Cabra","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://lacabra.dk","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "La Cabra (Dinamarca)",
                "price": 21.95,
                "inStock": true,
                "url": "https://lacabra.dk/products/arbegona",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 23.05,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=La%20Cabra%20Arbegona&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "la-cabra-la-choza",
    slug: "la-cabra-la-choza",
    name: "La Cabra — La Choza",
    brand: "La Cabra",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 20.95,
    oldPrice: null,
    historicalAveragePrice: 22.21,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1094/5212/files/La_Choza_La_Cabra_Highlight_CoffeeBox_200g.webp?v=1786537898",
    gallery: ["https://cdn.shopify.com/s/files/1/1094/5212/files/La_Choza_La_Cabra_Highlight_CoffeeBox_200g.webp?v=1786537898","https://cdn.shopify.com/s/files/1/1094/5212/files/La_Choza_La_Cabra_Highlight_Coffee_Bag_1kg.webp?v=1786528728"],
    shortDesc: "The first harvest of Pink Bourbon from Janeth del Carmen Narváez in Buesaco, Nariño.",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de La Cabra (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"La Cabra","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://lacabra.dk","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "La Cabra (Dinamarca)",
                "price": 20.95,
                "inStock": true,
                "url": "https://lacabra.dk/products/la-choza",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 22,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=La%20Cabra%20La%20Choza&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "la-cabra-k-h-wurtz-cup-vesper",
    slug: "la-cabra-k-h-wurtz-cup-vesper",
    name: "La Cabra — K.H. Würtz Cup - Vesper",
    brand: "La Cabra",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 54.95,
    oldPrice: null,
    historicalAveragePrice: 58.25,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1094/5212/files/K.H._W_rtz_Cup_Vesper_Sides.webp?v=1786956632",
    gallery: ["https://cdn.shopify.com/s/files/1/1094/5212/files/K.H._W_rtz_Cup_Vesper_Sides.webp?v=1786956632","https://cdn.shopify.com/s/files/1/1094/5212/files/K.H._W_rtz_Cup_Vesper_Profile.webp?v=1786956642","https://cdn.shopify.com/s/files/1/1094/5212/files/K.H._W_rtz_Cup_Vesper_Focus.webp?v=1786956652","https://cdn.shopify.com/s/files/1/1094/5212/files/K.H._W_rtz_Cup_Vesper_Environment.webp?v=1786956662"],
    shortDesc: "A cup finished in a light, cement-grey glaze with dark grey speckling, and a light silver sheen inside the base of the cup. Handmade in Denmark in collaboration with K.H. Würtz.",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de La Cabra (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"La Cabra","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://lacabra.dk","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "La Cabra (Dinamarca)",
                "price": 54.95,
                "inStock": false,
                "url": "https://lacabra.dk/products/k-h-wurtz-cup-vesper",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 57.7,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=La%20Cabra%20K.H.%20W%C3%BCrtz%20Cup%20-%20Vesper&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "la-cabra-kiangoi",
    slug: "la-cabra-kiangoi",
    name: "La Cabra — Kiangoi",
    brand: "La Cabra",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 21.95,
    oldPrice: null,
    historicalAveragePrice: 23.27,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1094/5212/files/Kiangoi_La_Cabra_Seasonal_Coffee_Box_250g.webp?v=1785153132",
    gallery: ["https://cdn.shopify.com/s/files/1/1094/5212/files/Kiangoi_La_Cabra_Seasonal_Coffee_Box_250g.webp?v=1785153132","https://cdn.shopify.com/s/files/1/1094/5212/files/Kiangoi_La_Cabra_Seasonal_Coffee_Bag_1kg.webp?v=1785153155"],
    shortDesc: "Crisp redcurrant and floral hibiscus in this returning favourite from the Rungeto Cooperative’s Kiangoi station.",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de La Cabra (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"La Cabra","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://lacabra.dk","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "La Cabra (Dinamarca)",
                "price": 21.95,
                "inStock": true,
                "url": "https://lacabra.dk/products/kiangoi",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 23.05,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=La%20Cabra%20Kiangoi&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "la-cabra-alto-naranjal",
    slug: "la-cabra-alto-naranjal",
    name: "La Cabra — Alto Naranjal",
    brand: "La Cabra",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 21.95,
    oldPrice: null,
    historicalAveragePrice: 23.27,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1094/5212/files/Alto_Naranjal_La_Cabra_Seasonal_Coffee_Box_250g.webp?v=1783487518",
    gallery: ["https://cdn.shopify.com/s/files/1/1094/5212/files/Alto_Naranjal_La_Cabra_Seasonal_Coffee_Box_250g.webp?v=1783487518","https://cdn.shopify.com/s/files/1/1094/5212/files/Alto_Naranjal_La_Cabra_Seasonal_Coffee_Bag_1kg.webp?v=1783487532"],
    shortDesc: "Bright citrus, red berries and deep dried fruit in this lot by Leonardo Loaiza in Buesaco, Nariño.",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de La Cabra (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"La Cabra","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://lacabra.dk","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "La Cabra (Dinamarca)",
                "price": 21.95,
                "inStock": true,
                "url": "https://lacabra.dk/products/alto-naranjal",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 23.05,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=La%20Cabra%20Alto%20Naranjal&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "la-cabra-gift-card",
    slug: "la-cabra-gift-card",
    name: "La Cabra — Gift Card",
    brand: "La Cabra",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 6.95,
    oldPrice: null,
    historicalAveragePrice: 7.37,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1094/5212/files/La_Cabra_Gift_Card.webp?v=1786957767",
    gallery: ["https://cdn.shopify.com/s/files/1/1094/5212/files/La_Cabra_Gift_Card.webp?v=1786957767"],
    shortDesc: "A convenient and flexible way to share our little world of coffee with family and friends, with gift card.",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de La Cabra (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"La Cabra","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://lacabra.dk","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "La Cabra (Dinamarca)",
                "price": 6.95,
                "inStock": true,
                "url": "https://lacabra.dk/products/gift-card",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 7.3,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=La%20Cabra%20Gift%20Card&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "la-cabra-la-cabra-coffee-server",
    slug: "la-cabra-la-cabra-coffee-server",
    name: "La Cabra — La Cabra Coffee Server",
    brand: "La Cabra",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 20.95,
    oldPrice: null,
    historicalAveragePrice: 22.21,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1094/5212/files/La_Cabra_Coffee_Server_Profile.webp?v=1786957122",
    gallery: ["https://cdn.shopify.com/s/files/1/1094/5212/files/La_Cabra_Coffee_Server_Profile.webp?v=1786957122","https://cdn.shopify.com/s/files/1/1094/5212/files/La_Cabra_Coffee_Server_Lid.webp?v=1786957132","https://cdn.shopify.com/s/files/1/1094/5212/files/La_Cabra_Server_Coffee_Environment.webp?v=1785145846","https://cdn.shopify.com/s/files/1/1094/5212/files/La_Cabra_Server_Coffee_Handbrew.webp?v=1782814227"],
    shortDesc: "La Cabra Coffee Server is a glass server used to collect and serve brewed coffee, allowing brewing and serving to take place within a single, continuous process.",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de La Cabra (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"La Cabra","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://lacabra.dk","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "La Cabra (Dinamarca)",
                "price": 20.95,
                "inStock": false,
                "url": "https://lacabra.dk/products/la-cabra-coffee-server-450-ml",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 22,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=La%20Cabra%20La%20Cabra%20Coffee%20Server&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "la-cabra-k-h-wurtz-garnet-collection",
    slug: "la-cabra-k-h-wurtz-garnet-collection",
    name: "La Cabra — K.H. Würtz Garnet Collection",
    brand: "La Cabra",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 81.95,
    oldPrice: null,
    historicalAveragePrice: 86.87,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1094/5212/files/K.H._W_rtz_Garnet_Collection_PlatesSmall.webp?v=1770208711",
    gallery: ["https://cdn.shopify.com/s/files/1/1094/5212/files/K.H._W_rtz_Garnet_Collection_PlatesSmall.webp?v=1770208711","https://cdn.shopify.com/s/files/1/1094/5212/files/K.H._W_rtz_Garnet_Collection_PlatesLarge.webp?v=1770208729","https://cdn.shopify.com/s/files/1/1094/5212/files/K.H._W_rtz_Garnet_Collection_Bowl.webp?v=1770208749","https://cdn.shopify.com/s/files/1/1094/5212/files/K.H._Wurtz_Plates_Profile.webp?v=1772453786"],
    shortDesc: "Discover the very limited Garnet stoneware collection from K.H. Würtz, featuring handmade plates and bowls in a soft blue hue.",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de La Cabra (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"La Cabra","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://lacabra.dk","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "La Cabra (Dinamarca)",
                "price": 81.95,
                "inStock": true,
                "url": "https://lacabra.dk/products/k-h-wurtz-garnet-collection",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 86.05,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=La%20Cabra%20K.H.%20W%C3%BCrtz%20Garnet%20Collection&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "la-cabra-equilibrium-bundle-single-serve",
    slug: "la-cabra-equilibrium-bundle-single-serve",
    name: "La Cabra — Equilibrium Bundle - Single Serve",
    brand: "La Cabra",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 28.95,
    oldPrice: 34.16,
    historicalAveragePrice: 30.69,
    isOffer: true,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "OFERTA ESPECIAL",
    image: "https://cdn.shopify.com/s/files/1/1094/5212/files/Steeped_Equilibrium-Bundle.webp?v=1774269464",
    gallery: ["https://cdn.shopify.com/s/files/1/1094/5212/files/Steeped_Equilibrium-Bundle.webp?v=1774269464"],
    shortDesc: "Experience two contrasting profiles in a bundle containing 12 Single Serve bags, 6 of each. Simply add water, to enjoy a fresh seasonal coffee.",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de La Cabra (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"La Cabra","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://lacabra.dk","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "La Cabra (Dinamarca)",
                "price": 28.95,
                "inStock": false,
                "url": "https://lacabra.dk/products/equilibrium-bundle-single-serve",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 30.4,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=La%20Cabra%20Equilibrium%20Bundle%20-%20Single%20Serve&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "la-cabra-sagastume-washed-single-serve",
    slug: "la-cabra-sagastume-washed-single-serve",
    name: "La Cabra — Sagastume Washed - Single Serve",
    brand: "La Cabra",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 14.95,
    oldPrice: null,
    historicalAveragePrice: 15.85,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1094/5212/files/SagastumeWashedParainemaSingleServ.webp?v=1777900861",
    gallery: ["https://cdn.shopify.com/s/files/1/1094/5212/files/SagastumeWashedParainemaSingleServ.webp?v=1777900861","https://cdn.shopify.com/s/files/1/1094/5212/files/SagastumeWashedParainemaSingleServBox.webp?v=1777900861"],
    shortDesc: "Our fifth year working with the Sagastume family in Santa Barbara, Honduras, with a crisp and clean washed Parainema.",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de La Cabra (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"La Cabra","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://lacabra.dk","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "La Cabra (Dinamarca)",
                "price": 14.95,
                "inStock": true,
                "url": "https://lacabra.dk/products/sagastume-washed-single-serve",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 15.7,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=La%20Cabra%20Sagastume%20Washed%20-%20Single%20Serve&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "la-cabra-shyira-anaerobic-48hr-single-serve",
    slug: "la-cabra-shyira-anaerobic-48hr-single-serve",
    name: "La Cabra — Shyira Anaerobic 48hr - Single Serve",
    brand: "La Cabra",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 15.95,
    oldPrice: null,
    historicalAveragePrice: 16.91,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1094/5212/files/ShyiraAnaerobicSingleServ.webp?v=1777901006",
    gallery: ["https://cdn.shopify.com/s/files/1/1094/5212/files/ShyiraAnaerobicSingleServ.webp?v=1777901006","https://cdn.shopify.com/s/files/1/1094/5212/files/ShyiraAnaerobic48hrSingleServBox.webp?v=1777901006"],
    shortDesc: "Anaerobic Bourbon from the Shyira station, with wild florals and jammy fruit notes.",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de La Cabra (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"La Cabra","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://lacabra.dk","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "La Cabra (Dinamarca)",
                "price": 15.95,
                "inStock": true,
                "url": "https://lacabra.dk/products/shyira-anaerobic-48hr-single-serve",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 16.75,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=La%20Cabra%20Shyira%20Anaerobic%2048hr%20-%20Single%20Serve&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "la-cabra-shyira-washed-single-serve",
    slug: "la-cabra-shyira-washed-single-serve",
    name: "La Cabra — Shyira Washed - Single Serve",
    brand: "La Cabra",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 14.95,
    oldPrice: null,
    historicalAveragePrice: 15.85,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1094/5212/files/ShyiraWashedSingleServ.webp?v=1777901142",
    gallery: ["https://cdn.shopify.com/s/files/1/1094/5212/files/ShyiraWashedSingleServ.webp?v=1777901142","https://cdn.shopify.com/s/files/1/1094/5212/files/ShyiraWashedSingleServBox.webp?v=1777901141"],
    shortDesc: "A crisp citrus-driven cup with heavy floral aromatics, in this lot from the Nyabihu region by Muraho Trading Co.",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de La Cabra (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"La Cabra","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://lacabra.dk","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "La Cabra (Dinamarca)",
                "price": 14.95,
                "inStock": true,
                "url": "https://lacabra.dk/products/shyira-washed-single-serve",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 15.7,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=La%20Cabra%20Shyira%20Washed%20-%20Single%20Serve&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "la-cabra-bloom-by-paw-gissel",
    slug: "la-cabra-bloom-by-paw-gissel",
    name: "La Cabra — Bloom by Paw Gissel",
    brand: "La Cabra",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 67.95,
    oldPrice: null,
    historicalAveragePrice: 72.03,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1094/5212/files/Bloom_Book_-_Front_480bb0ad-d66a-4cbf-a805-7a0fa0375066.webp?v=1778057513",
    gallery: ["https://cdn.shopify.com/s/files/1/1094/5212/files/Bloom_Book_-_Front_480bb0ad-d66a-4cbf-a805-7a0fa0375066.webp?v=1778057513","https://cdn.shopify.com/s/files/1/1094/5212/files/Bloom_Book_-_Back_712948fd-7eb5-49b8-8cb4-8d777b330d0e.webp?v=1778057477","https://cdn.shopify.com/s/files/1/1094/5212/files/Bloom_Book_Hardback_Detail.webp?v=1777985516","https://cdn.shopify.com/s/files/1/1094/5212/files/Bloom_Book_Cover_Detail.webp?v=1777985569"],
    shortDesc: "Bloom brings together photographs made over years of travel with La Cabra, tracing the landscapes, people, and daily work surrounding coffee.",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de La Cabra (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"La Cabra","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://lacabra.dk","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "La Cabra (Dinamarca)",
                "price": 67.95,
                "inStock": true,
                "url": "https://lacabra.dk/products/bloom-by-paw-gissel",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 71.35,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=La%20Cabra%20Bloom%20by%20Paw%20Gissel&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "la-cabra-k-h-wurtz-aarhus-collection",
    slug: "la-cabra-k-h-wurtz-aarhus-collection",
    name: "La Cabra — K.H. Würtz Aarhus Collection",
    brand: "La Cabra",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 21.84,
    oldPrice: null,
    historicalAveragePrice: 23.15,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1094/5212/files/K.H._W_rtz_Aarhus_Collection_Plates_Profile.png?v=1751372152",
    gallery: ["https://cdn.shopify.com/s/files/1/1094/5212/files/K.H._W_rtz_Aarhus_Collection_Plates_Profile.png?v=1751372152","https://cdn.shopify.com/s/files/1/1094/5212/files/K.H._W_rtz_Aarhus_Collection_Plate_and_Bowl_Environment.jpg?v=1751372185","https://cdn.shopify.com/s/files/1/1094/5212/files/K.H._W_rtz_Aarhus_Collection_Plates_Side.png?v=1751372207","https://cdn.shopify.com/s/files/1/1094/5212/files/K.H._W_rtz_Aarhus_Collection_Bowl_and_Plate_Environment.jpg?v=1751372270"],
    shortDesc: "Discover our stoneware collection from K.H. Würtz, featuring plates and bowls made by hand.",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de La Cabra (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"La Cabra","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://lacabra.dk","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "La Cabra (Dinamarca)",
                "price": 21.84,
                "inStock": true,
                "url": "https://lacabra.dk/products/k-h-wurtz-aarhus-collection",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 22.93,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=La%20Cabra%20K.H.%20W%C3%BCrtz%20Aarhus%20Collection&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "la-cabra-k-h-wurtz-graphite-collection",
    slug: "la-cabra-k-h-wurtz-graphite-collection",
    name: "La Cabra — K.H. Würtz Graphite Collection",
    brand: "La Cabra",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 81.95,
    oldPrice: null,
    historicalAveragePrice: 86.87,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1094/5212/files/K.H.WurtzPlatesGraphiteSmall.webp?v=1772195404",
    gallery: ["https://cdn.shopify.com/s/files/1/1094/5212/files/K.H.WurtzPlatesGraphiteSmall.webp?v=1772195404","https://cdn.shopify.com/s/files/1/1094/5212/files/K.H.WurtzPlatesGraphiteLarge.webp?v=1772195404","https://cdn.shopify.com/s/files/1/1094/5212/files/K.H.WurtzBowl-Graphite.webp?v=1772195404","https://cdn.shopify.com/s/files/1/1094/5212/files/K.H._Wurtz_Plates_Graphite_Profile.webp?v=1772195925"],
    shortDesc: "Discover this very limited stoneware collection from K.H. Würtz, featuring handmade plates and bowls in graphite grey.",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de La Cabra (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"La Cabra","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://lacabra.dk","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "La Cabra (Dinamarca)",
                "price": 81.95,
                "inStock": false,
                "url": "https://lacabra.dk/products/k-h-wurtz-graphite-collection",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 86.05,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=La%20Cabra%20K.H.%20W%C3%BCrtz%20Graphite%20Collection&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "la-cabra-heven-glass",
    slug: "la-cabra-heven-glass",
    name: "La Cabra — Heven Glass",
    brand: "La Cabra",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 37.95,
    oldPrice: null,
    historicalAveragePrice: 40.23,
    isOffer: false,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1094/5212/files/Heven_Glassware_La_Cabra_470ml.png?v=1786958030",
    gallery: ["https://cdn.shopify.com/s/files/1/1094/5212/files/Heven_Glassware_La_Cabra_470ml.png?v=1786958030","https://cdn.shopify.com/s/files/1/1094/5212/files/Heven_Glassware_La_Cabra_350ml.webp?v=1786958041","https://cdn.shopify.com/s/files/1/1094/5212/files/Heven_Glassware_La_Cabra_350ml_environment.webp?v=1786958077","https://cdn.shopify.com/s/files/1/1094/5212/files/Heven_Glassware_La_Cabra_470ml_environment.webp?v=1786958102"],
    shortDesc: "A glass developed in collaboration with Peter Dupont and Breanna Box from Home in Heven in Brooklyn, and used across our cafés.",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de La Cabra (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"La Cabra","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://lacabra.dk","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "La Cabra (Dinamarca)",
                "price": 37.95,
                "inStock": false,
                "url": "https://lacabra.dk/products/heven-glass",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 39.85,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=La%20Cabra%20Heven%20Glass&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "la-cabra-la-cabra-tote-bag",
    slug: "la-cabra-la-cabra-tote-bag",
    name: "La Cabra — La Cabra Tote Bag",
    brand: "La Cabra",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 37.95,
    oldPrice: null,
    historicalAveragePrice: 40.23,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1094/5212/files/Tote_Bag_La_Cabra_New_Version_2026.webp?v=1771925242",
    gallery: ["https://cdn.shopify.com/s/files/1/1094/5212/files/Tote_Bag_La_Cabra_New_Version_2026.webp?v=1771925242","https://cdn.shopify.com/s/files/1/1094/5212/files/La_Cabra_Tote_Bag_Hanging.webp?v=1771925130","https://cdn.shopify.com/s/files/1/1094/5212/files/La_Cabra_Tote_Bag_Detailed.webp?v=1771925130","https://cdn.shopify.com/s/files/1/1094/5212/files/La_Cabra_Tote_Bag_on_the_ground.webp?v=1771925130"],
    shortDesc: "A classic and versatile tote bag, made for everyday use.",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de La Cabra (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"La Cabra","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://lacabra.dk","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "La Cabra (Dinamarca)",
                "price": 37.95,
                "inStock": true,
                "url": "https://lacabra.dk/products/another-aspect-la-cabra-tote-bag",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 39.85,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=La%20Cabra%20La%20Cabra%20Tote%20Bag&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "la-cabra-luna",
    slug: "la-cabra-luna",
    name: "La Cabra — Luna",
    brand: "La Cabra",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 18.95,
    oldPrice: null,
    historicalAveragePrice: 20.09,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1094/5212/files/Luna_250g_Coffee_Whole_Beans_La_Cabra_Profile.webp?v=1767792680",
    gallery: ["https://cdn.shopify.com/s/files/1/1094/5212/files/Luna_250g_Coffee_Whole_Beans_La_Cabra_Profile.webp?v=1767792680","https://cdn.shopify.com/s/files/1/1094/5212/files/Luna_-_Kii_El_Oromazo_La_Cabra.webp?v=1787053650"],
    shortDesc: "Luna is one of our Profiles - two taste profiles we keep constant year-round. Luna is the brighter cup: aromatic fruit, brightness, and clarity.",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de La Cabra (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"La Cabra","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://lacabra.dk","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "La Cabra (Dinamarca)",
                "price": 18.95,
                "inStock": true,
                "url": "https://lacabra.dk/products/luna",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 19.9,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=La%20Cabra%20Luna&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "la-cabra-terra",
    slug: "la-cabra-terra",
    name: "La Cabra — Terra",
    brand: "La Cabra",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 18.95,
    oldPrice: null,
    historicalAveragePrice: 20.09,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1094/5212/files/Terra_250g_Coffee_La_Cabra_Profiles.webp?v=1772801947",
    gallery: ["https://cdn.shopify.com/s/files/1/1094/5212/files/Terra_250g_Coffee_La_Cabra_Profiles.webp?v=1772801947","https://cdn.shopify.com/s/files/1/1094/5212/files/Terra-1kg-Coffee-Profile-La_Cabra.webp?v=1780402077"],
    shortDesc: "Terra is one of our Profiles - two taste profiles we keep constant year-round. Terra is the deeper cup: soft chocolate, depth, and body.",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de La Cabra (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"La Cabra","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://lacabra.dk","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "La Cabra (Dinamarca)",
                "price": 18.95,
                "inStock": true,
                "url": "https://lacabra.dk/products/terra",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 19.9,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=La%20Cabra%20Terra&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "la-cabra-profiles-subscription",
    slug: "la-cabra-profiles-subscription",
    name: "La Cabra — Profiles Subscription",
    brand: "La Cabra",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 48.95,
    oldPrice: null,
    historicalAveragePrice: 51.89,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1094/5212/files/Terra_La_Cabra_Profiles_Subscription_1kg.webp?v=1786957385",
    gallery: ["https://cdn.shopify.com/s/files/1/1094/5212/files/Terra_La_Cabra_Profiles_Subscription_1kg.webp?v=1786957385","https://cdn.shopify.com/s/files/1/1094/5212/files/Luna_La_Cabra_Profiles_Subscription_1kg.webp?v=1786957362","https://cdn.shopify.com/s/files/1/1094/5212/files/Terra_and_Luna_La_Cabra_Profiles_Subscription_2x1kg.webp?v=1786957420","https://cdn.shopify.com/s/files/1/1094/5212/files/Terra_and_Luna_La_Cabra_Profiles_Subscription_2x250g.webp?v=1786957439"],
    shortDesc: "The two taste profiles Terra and Luna are created with intention; to enable complex and characterful espresso-based drinks, and comfortable filter coffees.",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de La Cabra (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"La Cabra","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://lacabra.dk","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "La Cabra (Dinamarca)",
                "price": 48.95,
                "inStock": true,
                "url": "https://lacabra.dk/products/profiles-subscription",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 51.4,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=La%20Cabra%20Profiles%20Subscription&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "la-cabra-la-cabra-t-shirt-elida",
    slug: "la-cabra-la-cabra-t-shirt-elida",
    name: "La Cabra — La Cabra T-shirt - Elida",
    brand: "La Cabra",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 54.95,
    oldPrice: null,
    historicalAveragePrice: 58.25,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1094/5212/files/La_Cabra_T-shirt_Elida.png?v=1745310273",
    gallery: ["https://cdn.shopify.com/s/files/1/1094/5212/files/La_Cabra_T-shirt_Elida.png?v=1745310273"],
    shortDesc: "A special t-shirt produced to mark the arrival of a very special coffee, from Elida.",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de La Cabra (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"La Cabra","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://lacabra.dk","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "La Cabra (Dinamarca)",
                "price": 54.95,
                "inStock": false,
                "url": "https://lacabra.dk/products/t-shirt-elida-special",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 57.7,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=La%20Cabra%20La%20Cabra%20T-shirt%20-%20Elida&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "la-cabra-ground-chocolate-la-cueva",
    slug: "la-cabra-ground-chocolate-la-cueva",
    name: "La Cabra — Ground Chocolate - La Cueva",
    brand: "La Cabra",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 22.95,
    oldPrice: null,
    historicalAveragePrice: 24.33,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1094/5212/files/La_Cabra_Ground_Chocolate_La_Cueva_200g.png?v=1786957630",
    gallery: ["https://cdn.shopify.com/s/files/1/1094/5212/files/La_Cabra_Ground_Chocolate_La_Cueva_200g.png?v=1786957630"],
    shortDesc: "Ground chocolate for making hot cocoa. 70% Chocolate, to be mixed 1:7 with warm milk.",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de La Cabra (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"La Cabra","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://lacabra.dk","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "La Cabra (Dinamarca)",
                "price": 22.95,
                "inStock": true,
                "url": "https://lacabra.dk/products/ground-chocolate-la-cueva",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 24.1,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=La%20Cabra%20Ground%20Chocolate%20-%20La%20Cueva&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "april-coffee-april-trousers",
    slug: "april-coffee-april-trousers",
    name: "April Coffee — April Trousers",
    brand: "April Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 227.75,
    oldPrice: null,
    historicalAveragePrice: 241.42,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1510/0358/files/KHJ08835.jpg?v=1758872758",
    gallery: ["https://cdn.shopify.com/s/files/1/1510/0358/files/KHJ08835.jpg?v=1758872758","https://cdn.shopify.com/s/files/1/1510/0358/files/KHJ08823.jpg?v=1758889311","https://cdn.shopify.com/s/files/1/1510/0358/files/KHJ08856.jpg?v=1758807373","https://cdn.shopify.com/s/files/1/1510/0358/files/KHJ08835_6b9f9db9-010d-494d-aa39-00bd8437db91.jpg?v=1758872772"],
    shortDesc: "We always had a fascination with Japanese craftsmanship and this time around we decided to go all in and placed the production 100% in Japan. Designed to be timeless, function...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de April Coffee (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"April Coffee","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://aprilcoffeeroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "April Coffee (Dinamarca)",
                "price": 227.75,
                "inStock": true,
                "url": "https://aprilcoffeeroasters.com/products/april-pants",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 239.14,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=April%20Coffee%20April%20Trousers&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "april-coffee-april-organic-subscription",
    slug: "april-coffee-april-organic-subscription",
    name: "April Coffee — April Organic Subscription",
    brand: "April Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 18.1,
    oldPrice: null,
    historicalAveragePrice: 19.19,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1510/0358/files/ORGANICsub.jpg?v=1755866310",
    gallery: ["https://cdn.shopify.com/s/files/1/1510/0358/files/ORGANICsub.jpg?v=1755866310","https://cdn.shopify.com/s/files/1/1510/0358/files/organiclotsfront_cbcdabdc-8868-412a-b301-f46c91fb24fe.jpg?v=1758702844","https://cdn.shopify.com/s/files/1/1510/0358/files/organicside_50ff6430-554e-44b7-a320-87890ea6db28.jpg?v=1758702853"],
    shortDesc: "Before you Subscribe please note that regardless of when you subscribe you will be charged again on the 15th. So, if you want to avoid to be charged twice in your first month....",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de April Coffee (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"April Coffee","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://aprilcoffeeroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "April Coffee (Dinamarca)",
                "price": 18.1,
                "inStock": true,
                "url": "https://aprilcoffeeroasters.com/products/organic-subscription",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 19.01,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=April%20Coffee%20April%20Organic%20Subscription&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "april-coffee-kamavindi-kenya-washed-sl34-ab",
    slug: "april-coffee-kamavindi-kenya-washed-sl34-ab",
    name: "April Coffee — Kamavindi - Kenya - Washed SL34 (AB)",
    brand: "April Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 26.94,
    oldPrice: null,
    historicalAveragePrice: 28.56,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1510/0358/files/sl34.jpg?v=1769603685",
    gallery: ["https://cdn.shopify.com/s/files/1/1510/0358/files/sl34.jpg?v=1769603685","https://cdn.shopify.com/s/files/1/1510/0358/files/filter250gbox.jpg?v=1769603685","https://cdn.shopify.com/s/files/1/1510/0358/files/125gsidesquare_32ea8f38-ccff-4bc9-9235-d891234d8d5f.jpg?v=1769603685","https://cdn.shopify.com/s/files/1/1510/0358/files/1kgbagshelf2square.jpg?v=1769603685"],
    shortDesc: "Farm: Kamavindi Estate Producer: Peter Mbature Region: Embu, Kenya Varietal: SL34 (AB) Processing: Washed Peter is producing several varietals familiar to buyers of Kenyan cof...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de April Coffee (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"April Coffee","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://aprilcoffeeroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "April Coffee (Dinamarca)",
                "price": 26.94,
                "inStock": true,
                "url": "https://aprilcoffeeroasters.com/products/kamavindi-kenya-washed-sl34-ab",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 28.29,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=April%20Coffee%20Kamavindi%20-%20Kenya%20-%20Washed%20SL34%20(AB)&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "april-coffee-gesha-village-ethiopia-natural-geisha-1931-oma-142",
    slug: "april-coffee-gesha-village-ethiopia-natural-geisha-1931-oma-142",
    name: "April Coffee — Gesha Village - Ethiopia - Natural Geisha 1931 (Oma #142)",
    brand: "April Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 50.27,
    oldPrice: null,
    historicalAveragePrice: 53.29,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1510/0358/files/geshavillageoma142.jpg?v=1785928467",
    gallery: ["https://cdn.shopify.com/s/files/1/1510/0358/files/geshavillageoma142.jpg?v=1785928467","https://cdn.shopify.com/s/files/1/1510/0358/files/250glimitedside.jpg?v=1769679592","https://cdn.shopify.com/s/files/1/1510/0358/files/125glimitedfront_337e2441-e1f4-42ab-8986-b2b0ff21dc96.jpg?v=1769679592","https://cdn.shopify.com/s/files/1/1510/0358/files/250glimitedsquare.jpg?v=1769679592"],
    shortDesc: "Location: Bench Maji, Ethiopia Producer: Adam Overton Farm: Gesha Village Varietal: Natural Processed Geisha 1931 (lot: Oma #142) Flavour Notes: Candied Lemon, Jasmine &amp; H...",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de April Coffee (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"April Coffee","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://aprilcoffeeroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "April Coffee (Dinamarca)",
                "price": 50.27,
                "inStock": true,
                "url": "https://aprilcoffeeroasters.com/products/gesha-village-ethiopia-natural-geisha-oma-142",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 52.78,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=April%20Coffee%20Gesha%20Village%20-%20Ethiopia%20-%20Natural%20Geisha%201931%20(Oma%20%23142)&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "april-coffee-kamavindi-kenya-washed-sl28-sl34-aa",
    slug: "april-coffee-kamavindi-kenya-washed-sl28-sl34-aa",
    name: "April Coffee — Kamavindi - Kenya - Washed SL28 & SL34(AA)",
    brand: "April Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 40.21,
    oldPrice: null,
    historicalAveragePrice: 42.62,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1510/0358/files/kamavindiaa_21af67fb-591d-42c8-9425-d4a545ac67c4.jpg?v=1755866745",
    gallery: ["https://cdn.shopify.com/s/files/1/1510/0358/files/kamavindiaa_21af67fb-591d-42c8-9425-d4a545ac67c4.jpg?v=1755866745","https://cdn.shopify.com/s/files/1/1510/0358/files/250gespressoboxsquare.jpg?v=1774942940","https://cdn.shopify.com/s/files/1/1510/0358/files/250gespressoside_663894e9-15d3-4266-88a0-85a0cd89d875.jpg?v=1774942940","https://cdn.shopify.com/s/files/1/1510/0358/files/1kgbagshelf2square_02c77e5f-8baf-43c9-b4cb-841d3261d84d.jpg?v=1774942940"],
    shortDesc: "Farm: Kamavindi Estate Producer: Peter Mbature Region: Embu, Kenya Varietal: Mixed Varietals (AA) Processing: Washed This season marks the first time our partner farmer, Peter...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de April Coffee (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"April Coffee","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://aprilcoffeeroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "April Coffee (Dinamarca)",
                "price": 40.21,
                "inStock": true,
                "url": "https://aprilcoffeeroasters.com/products/kamavindi-kenya-washed-mixed-varietals-aa-1",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 42.22,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=April%20Coffee%20Kamavindi%20-%20Kenya%20-%20Washed%20SL28%20%26%20SL34(AA)&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "april-coffee-ethiopia-kayon-mountain-natural-heirloom",
    slug: "april-coffee-ethiopia-kayon-mountain-natural-heirloom",
    name: "April Coffee — Ethiopia - Kayon Mountain - Natural Heirloom",
    brand: "April Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 24.13,
    oldPrice: null,
    historicalAveragePrice: 25.58,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1510/0358/files/kayonmountain_9b6d1284-74b6-4f75-82c3-164c804cd130.jpg?v=1755865903",
    gallery: ["https://cdn.shopify.com/s/files/1/1510/0358/files/kayonmountain_9b6d1284-74b6-4f75-82c3-164c804cd130.jpg?v=1755865903","https://cdn.shopify.com/s/files/1/1510/0358/files/organiclotsfront_6b8cc4c0-d24c-4e77-be81-ab6df36a2367.jpg?v=1758702829","https://cdn.shopify.com/s/files/1/1510/0358/files/organicside_46b1cbf2-10ce-44c7-b5ae-80caed00ce06.jpg?v=1758702829","https://cdn.shopify.com/s/files/1/1510/0358/files/ethiopiaorganicsquare.jpg?v=1758702829"],
    shortDesc: "Location: Oromia Region, Ethiopia Farm: Kayon Mountain Cooperative Varietal: Natural processed Heirloom varieties Roast Profile: Light/ Medium (for brewing as Espresso &amp; F...",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de April Coffee (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"April Coffee","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://aprilcoffeeroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "April Coffee (Dinamarca)",
                "price": 24.13,
                "inStock": true,
                "url": "https://aprilcoffeeroasters.com/products/ethiopia-kayon-mountain-natural-heirloom-organic",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 25.34,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=April%20Coffee%20Ethiopia%20-%20Kayon%20Mountain%20-%20Natural%20Heirloom&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "april-coffee-tadesse-ethiopia-washed-krume-74158",
    slug: "april-coffee-tadesse-ethiopia-washed-krume-74158",
    name: "April Coffee — Tadesse - Ethiopia - Washed Krume 74158",
    brand: "April Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 19.57,
    oldPrice: null,
    historicalAveragePrice: 20.74,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1510/0358/files/tadesse_5b01f2f8-d0fc-4fa9-9c0e-dc04b3bd0d6b.jpg?v=1769603694",
    gallery: ["https://cdn.shopify.com/s/files/1/1510/0358/files/tadesse_5b01f2f8-d0fc-4fa9-9c0e-dc04b3bd0d6b.jpg?v=1769603694","https://cdn.shopify.com/s/files/1/1510/0358/files/filter250gboxsquare.jpg?v=1769603694","https://cdn.shopify.com/s/files/1/1510/0358/files/125gfrontsquare.jpg?v=1769603694","https://cdn.shopify.com/s/files/1/1510/0358/files/1kgbagsquare.jpg?v=1769603694"],
    shortDesc: "Location: Bombe, Bensa, Sidama Producer: Tadesse Hanka Varietal: Washed processed Krume 74158 Flavour Notes: Peach, Jasmine &amp; Candied Lemon Sweetness: ●●● ● ○ Body: ●● ● ○...",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de April Coffee (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"April Coffee","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://aprilcoffeeroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "April Coffee (Dinamarca)",
                "price": 19.57,
                "inStock": true,
                "url": "https://aprilcoffeeroasters.com/products/tadesse-ethiopia-washed-krume-74158",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 20.55,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=April%20Coffee%20Tadesse%20-%20Ethiopia%20-%20Washed%20Krume%2074158&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "april-coffee-tadesse-ethiopia-natural-krume-74158",
    slug: "april-coffee-tadesse-ethiopia-natural-krume-74158",
    name: "April Coffee — Tadesse - Ethiopia - Natural Krume 74158",
    brand: "April Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 20.78,
    oldPrice: null,
    historicalAveragePrice: 22.03,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1510/0358/files/tadessenaturalfil.jpg?v=1781684082",
    gallery: ["https://cdn.shopify.com/s/files/1/1510/0358/files/tadessenaturalfil.jpg?v=1781684082","https://cdn.shopify.com/s/files/1/1510/0358/files/filter250gboxsquare.jpg?v=1769603694","https://cdn.shopify.com/s/files/1/1510/0358/files/125gfrontsquare.jpg?v=1769603694","https://cdn.shopify.com/s/files/1/1510/0358/files/1kgbagsquare.jpg?v=1769603694"],
    shortDesc: "Location: Bombe, Bensa, Sidama Producer: Tadesse Hanka Varietal: Natural processed Krume 74158 Flavor Notes: Peach, Yellow Plum &amp; Mandarin Orange Sweetness: ●●● ● ○ Body: ...",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de April Coffee (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"April Coffee","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://aprilcoffeeroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "April Coffee (Dinamarca)",
                "price": 20.78,
                "inStock": true,
                "url": "https://aprilcoffeeroasters.com/products/copy",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 21.82,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=April%20Coffee%20Tadesse%20-%20Ethiopia%20-%20Natural%20Krume%2074158&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "april-coffee-volcan-azul-costa-rica-washed-sl28",
    slug: "april-coffee-volcan-azul-costa-rica-washed-sl28",
    name: "April Coffee — Volcan Azul - Costa Rica - Washed SL28",
    brand: "April Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 33.38,
    oldPrice: null,
    historicalAveragePrice: 35.38,
    isOffer: false,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1510/0358/files/VAwashedsl28esp.jpg?v=1780989735",
    gallery: ["https://cdn.shopify.com/s/files/1/1510/0358/files/VAwashedsl28esp.jpg?v=1780989735","https://cdn.shopify.com/s/files/1/1510/0358/files/250gespressobox.jpg?v=1761645860","https://cdn.shopify.com/s/files/1/1510/0358/files/1kgbagshelf2square_e1225311-e096-499a-95b4-287bc724dea5.jpg?v=1774943219","https://cdn.shopify.com/s/files/1/1510/0358/files/volcanazul4_db7a93bc-434a-46f3-a568-b9ec36ff48c2.jpg?v=1741786758"],
    shortDesc: "Location: Costa Rica, Alajuela Farm: Volcan Azul Producer: Alejo Castro Varietal: Washed processed SL28 Flavour Notes: Florals, Plums, Stone Fruit Sweetness: ●●●●○ Body: ●●●○○...",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de April Coffee (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"April Coffee","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://aprilcoffeeroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "April Coffee (Dinamarca)",
                "price": 33.38,
                "inStock": true,
                "url": "https://aprilcoffeeroasters.com/products/volcan-azul-costa-rica-washed-sl28-1",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 35.05,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=April%20Coffee%20Volcan%20Azul%20-%20Costa%20Rica%20-%20Washed%20SL28&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "april-coffee-sustainable-profile-coffee-colombia",
    slug: "april-coffee-sustainable-profile-coffee-colombia",
    name: "April Coffee — Sustainable Profile Coffee - Colombia",
    brand: "April Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 18.1,
    oldPrice: null,
    historicalAveragePrice: 19.19,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1510/0358/files/SPColombia.jpg?v=1773836977",
    gallery: ["https://cdn.shopify.com/s/files/1/1510/0358/files/SPColombia.jpg?v=1773836977"],
    shortDesc: "Location: Colombia Farm: FNC Varietal: Caturra &amp; Castillo Processing Method: Washed Roast Profile: Medium (creating a rich and sweet character) works for Espresso &amp; Fi...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de April Coffee (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"April Coffee","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://aprilcoffeeroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "April Coffee (Dinamarca)",
                "price": 18.1,
                "inStock": true,
                "url": "https://aprilcoffeeroasters.com/products/sustainable-profile-coffee-colombia",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 19.01,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=April%20Coffee%20Sustainable%20Profile%20Coffee%20-%20Colombia&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "april-coffee-sustainable-profile-coffee-costa-rica",
    slug: "april-coffee-sustainable-profile-coffee-costa-rica",
    name: "April Coffee — Sustainable Profile Coffee - Costa Rica",
    brand: "April Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 18.1,
    oldPrice: null,
    historicalAveragePrice: 19.19,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1510/0358/files/spcostarica_3a8be65d-25bd-458c-b4ee-f28a6cd9317e.jpg?v=1755865600",
    gallery: ["https://cdn.shopify.com/s/files/1/1510/0358/files/spcostarica_3a8be65d-25bd-458c-b4ee-f28a6cd9317e.jpg?v=1755865600","https://cdn.shopify.com/s/files/1/1510/0358/files/SPCostaRicaside.jpg?v=1762430869","https://cdn.shopify.com/s/files/1/1510/0358/files/SPCostaRica1.jpg?v=1762430869","https://cdn.shopify.com/s/files/1/1510/0358/products/DSC03256.jpg?v=1762430869"],
    shortDesc: "Location: C osta Rica Farm: Volcan Azul Producer: Alejo Castro Varietal: Caturra &amp; Catuai Growing Altitude: 1500-1600 masl Processing Method: Washed Harvest: 2025/2026 Roa...",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de April Coffee (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"April Coffee","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://aprilcoffeeroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "April Coffee (Dinamarca)",
                "price": 18.1,
                "inStock": true,
                "url": "https://aprilcoffeeroasters.com/products/sustainable-beans",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 19.01,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=April%20Coffee%20Sustainable%20Profile%20Coffee%20-%20Costa%20Rica&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "april-coffee-april-thermos",
    slug: "april-coffee-april-thermos",
    name: "April Coffee — April Thermos",
    brand: "April Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 55.09,
    oldPrice: null,
    historicalAveragePrice: 58.4,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1510/0358/files/KHJ00030.jpg?v=1783685389",
    gallery: ["https://cdn.shopify.com/s/files/1/1510/0358/files/KHJ00030.jpg?v=1783685389","https://cdn.shopify.com/s/files/1/1510/0358/files/KHJ00041.jpg?v=1783685405","https://cdn.shopify.com/s/files/1/1510/0358/files/KHJ00037.jpg?v=1773928399","https://cdn.shopify.com/s/files/1/1510/0358/files/Largethermosside.jpg?v=1776859289"],
    shortDesc: "The April Thermos gives you the opportunity to take April Coffee with you throughout your day. We have been working on this project for over a year, testing each aspect of it ...",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de April Coffee (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"April Coffee","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://aprilcoffeeroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "April Coffee (Dinamarca)",
                "price": 55.09,
                "inStock": true,
                "url": "https://aprilcoffeeroasters.com/products/april-thermos",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 57.84,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=April%20Coffee%20April%20Thermos&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "april-coffee-april-t-shirt",
    slug: "april-coffee-april-t-shirt",
    name: "April Coffee — April T-Shirt",
    brand: "April Coffee",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 80.29,
    oldPrice: null,
    historicalAveragePrice: 85.11,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1510/0358/files/KHJ01103ph.jpg?v=1776429776",
    gallery: ["https://cdn.shopify.com/s/files/1/1510/0358/files/KHJ01103ph.jpg?v=1776429776","https://cdn.shopify.com/s/files/1/1510/0358/files/KHJ01104ph-4.jpg?v=1776429468","https://cdn.shopify.com/s/files/1/1510/0358/files/KHJ01102.jpg?v=1776429468"],
    shortDesc: "Composition: 60% cotton, 40% nylon Made in Japan.",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de April Coffee (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"April Coffee","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://aprilcoffeeroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "April Coffee (Dinamarca)",
                "price": 80.29,
                "inStock": true,
                "url": "https://aprilcoffeeroasters.com/products/april-t-shirt-1",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 84.3,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=April%20Coffee%20April%20T-Shirt&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "april-coffee-april-x-iznik-mavi-cini-ceramic-brewer",
    slug: "april-coffee-april-x-iznik-mavi-cini-ceramic-brewer",
    name: "April Coffee — april x Iznik Mavi Cini – Ceramic Brewer",
    brand: "April Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 536.06,
    oldPrice: null,
    historicalAveragePrice: 568.22,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1510/0358/files/MaviCIniBrewer.jpg?v=1783683580",
    gallery: ["https://cdn.shopify.com/s/files/1/1510/0358/files/MaviCIniBrewer.jpg?v=1783683580","https://cdn.shopify.com/s/files/1/1510/0358/files/DSC01094.jpg?v=1776409840","https://cdn.shopify.com/s/files/1/1510/0358/files/DSC01095.jpg?v=1776409908","https://cdn.shopify.com/s/files/1/1510/0358/files/DSC01099.jpg?v=1776409908"],
    shortDesc: "Material: Ceramic (Iznik Tile) Style: Flatbed Color: White ceramic with hand painted motif Paper filter: April Paper Filter - Large Made in Turkey. This Brewer is made in a li...",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de April Coffee (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"April Coffee","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://aprilcoffeeroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "April Coffee (Dinamarca)",
                "price": 536.06,
                "inStock": true,
                "url": "https://aprilcoffeeroasters.com/products/april-x-iznik-mavi-cini-brewer",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 562.86,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=April%20Coffee%20april%20x%20Iznik%20Mavi%20Cini%20%E2%80%93%20Ceramic%20Brewer&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "april-coffee-april-x-iznik-mavi-cini-mug",
    slug: "april-coffee-april-x-iznik-mavi-cini-mug",
    name: "April Coffee — april x Iznik Mavi Cini – Mug",
    brand: "April Coffee",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 335.12,
    oldPrice: null,
    historicalAveragePrice: 355.23,
    isOffer: false,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1510/0358/files/MaviCiniMug_bcf1bbcc-96d8-427e-8eaa-c67989224e39.jpg?v=1783685470",
    gallery: ["https://cdn.shopify.com/s/files/1/1510/0358/files/MaviCiniMug_bcf1bbcc-96d8-427e-8eaa-c67989224e39.jpg?v=1783685470","https://cdn.shopify.com/s/files/1/1510/0358/files/KHJ01087.jpg?v=1776409538","https://cdn.shopify.com/s/files/1/1510/0358/files/KHJ01092.jpg?v=1776409498","https://cdn.shopify.com/s/files/1/1510/0358/files/DSC01091.jpg?v=1776409589"],
    shortDesc: "Material: Ceramic (Iznik Tile) Capacity: 2 50g (H 11cm x W 8cm) Made in Turkey. About the material: This Mug is handcrafted in Iznik, Turkey, using traditional techniques and ...",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de April Coffee (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"April Coffee","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://aprilcoffeeroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "April Coffee (Dinamarca)",
                "price": 335.12,
                "inStock": true,
                "url": "https://aprilcoffeeroasters.com/products/april-x-mavi-cini-mug",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 351.88,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=April%20Coffee%20april%20x%20Iznik%20Mavi%20Cini%20%E2%80%93%20Mug&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "april-coffee-april-long-sleeve",
    slug: "april-coffee-april-long-sleeve",
    name: "April Coffee — April Long Sleeve",
    brand: "April Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 160.86,
    oldPrice: null,
    historicalAveragePrice: 170.51,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1510/0358/files/KHJ01042.jpg?v=1776769787",
    gallery: ["https://cdn.shopify.com/s/files/1/1510/0358/files/KHJ01042.jpg?v=1776769787","https://cdn.shopify.com/s/files/1/1510/0358/files/KHJ01056.jpg?v=1775904336","https://cdn.shopify.com/s/files/1/1510/0358/files/KHJ01058.jpg?v=1775904337","https://cdn.shopify.com/s/files/1/1510/0358/files/KHJ01075.jpg?v=1775904337"],
    shortDesc: "For our latest LONG SLEEVE PROJECT \"04\" we teamed up with Bendito del Peru - a t-shirt manufacturer that works with organic certified cotton. Material: 100% Organic Cotton fro...",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de April Coffee (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"April Coffee","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://aprilcoffeeroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "April Coffee (Dinamarca)",
                "price": 160.86,
                "inStock": true,
                "url": "https://aprilcoffeeroasters.com/products/utility-2-0-long-sleeved-t-shirt",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 168.9,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=April%20Coffee%20April%20Long%20Sleeve&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "april-coffee-hacienda-la-esmeralda-washed-geisha-drip-pack",
    slug: "april-coffee-hacienda-la-esmeralda-washed-geisha-drip-pack",
    name: "April Coffee — Hacienda La Esmeralda - Washed Geisha - Drip Pack",
    brand: "April Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 70,
    oldPrice: null,
    historicalAveragePrice: 74.2,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1510/0358/files/drippacksLIM.jpg?v=1755861695",
    gallery: ["https://cdn.shopify.com/s/files/1/1510/0358/files/drippacksLIM.jpg?v=1755861695","https://cdn.shopify.com/s/files/1/1510/0358/files/drippackboxlimited_dc6cbca7-5547-41bc-b73c-8a704d510bc3.jpg?v=1755861969","https://cdn.shopify.com/s/files/1/1510/0358/files/Roastery2_6ade86b9-01ea-4fa4-ab33-6929ebb1fab7.jpg?v=1755861969","https://cdn.shopify.com/s/files/1/1510/0358/files/Roastery3_3ac07f61-dbf0-402e-8b7b-70b5365ceb90.jpg?v=1755861969"],
    shortDesc: "We are proud to introduce the April Drip Pack Coffee. Created for all of you travellers and jet-setters, those that wish to explore the world yet expect a tasty cup of Filter ...",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de April Coffee (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"April Coffee","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://aprilcoffeeroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "April Coffee (Dinamarca)",
                "price": 70,
                "inStock": true,
                "url": "https://aprilcoffeeroasters.com/products/hacienda-la-esmeralda-washed-geisha-drip-pack",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 73.5,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=April%20Coffee%20Hacienda%20La%20Esmeralda%20-%20Washed%20Geisha%20-%20Drip%20Pack&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "april-coffee-el-morito-washed-pacamara-drip-pack",
    slug: "april-coffee-el-morito-washed-pacamara-drip-pack",
    name: "April Coffee — El Morito - Washed Pacamara - Drip Pack",
    brand: "April Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 50,
    oldPrice: null,
    historicalAveragePrice: 53,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1510/0358/files/drippacksSP_b27be888-62a8-4b19-bbbd-f28b978ea5d7.jpg?v=1755862040",
    gallery: ["https://cdn.shopify.com/s/files/1/1510/0358/files/drippacksSP_b27be888-62a8-4b19-bbbd-f28b978ea5d7.jpg?v=1755862040","https://cdn.shopify.com/s/files/1/1510/0358/files/drippackboxSP_73283636-207e-4a3b-be85-24530172f888.jpg?v=1755862040","https://cdn.shopify.com/s/files/1/1510/0358/files/Roastery2_7143fabd-97bf-4992-a97a-c6d861962e6e.jpg?v=1760002056","https://cdn.shopify.com/s/files/1/1510/0358/files/Roastery3_4b8aadf0-7de9-4618-9aaf-ed49451f5080.jpg?v=1760002056"],
    shortDesc: "We are proud to introduce the April Drip Pack Coffee. Created for all of you travellers and jet-setters, those that wish to explore the world yet expect a tasty cup of Filter ...",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de April Coffee (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"April Coffee","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://aprilcoffeeroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "April Coffee (Dinamarca)",
                "price": 50,
                "inStock": true,
                "url": "https://aprilcoffeeroasters.com/products/el-morito-washed-pacamara-drip-pack",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 52.5,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=April%20Coffee%20El%20Morito%20-%20Washed%20Pacamara%20-%20Drip%20Pack&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "april-coffee-el-socorro-washed-geisha-drip-pack",
    slug: "april-coffee-el-socorro-washed-geisha-drip-pack",
    name: "April Coffee — El Socorro - Washed Geisha - Drip Pack",
    brand: "April Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 70,
    oldPrice: null,
    historicalAveragePrice: 74.2,
    isOffer: false,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1510/0358/files/drippacksLIM.jpg?v=1755861695",
    gallery: ["https://cdn.shopify.com/s/files/1/1510/0358/files/drippacksLIM.jpg?v=1755861695","https://cdn.shopify.com/s/files/1/1510/0358/files/drippackboxlimited_dc6cbca7-5547-41bc-b73c-8a704d510bc3.jpg?v=1755861969","https://cdn.shopify.com/s/files/1/1510/0358/files/Roastery2_6ade86b9-01ea-4fa4-ab33-6929ebb1fab7.jpg?v=1755861969","https://cdn.shopify.com/s/files/1/1510/0358/files/Roastery3_3ac07f61-dbf0-402e-8b7b-70b5365ceb90.jpg?v=1755861969"],
    shortDesc: "We are proud to introduce the April Drip Pack Coffee. Created for all of you travellers and jet-setters, those that wish to explore the world yet expect a tasty cup of Filter ...",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de April Coffee (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"April Coffee","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://aprilcoffeeroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "April Coffee (Dinamarca)",
                "price": 70,
                "inStock": true,
                "url": "https://aprilcoffeeroasters.com/products/el-socorro-washed-geisha-drip-pack",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 73.5,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=April%20Coffee%20El%20Socorro%20-%20Washed%20Geisha%20-%20Drip%20Pack&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "april-coffee-el-morito-washed-yellow-geisha-drip-pack",
    slug: "april-coffee-el-morito-washed-yellow-geisha-drip-pack",
    name: "April Coffee — El Morito - Washed Yellow Geisha - Drip Pack",
    brand: "April Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 70,
    oldPrice: null,
    historicalAveragePrice: 74.2,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1510/0358/files/drippacksLIM.jpg?v=1755861695",
    gallery: ["https://cdn.shopify.com/s/files/1/1510/0358/files/drippacksLIM.jpg?v=1755861695","https://cdn.shopify.com/s/files/1/1510/0358/files/drippackboxlimited_dc6cbca7-5547-41bc-b73c-8a704d510bc3.jpg?v=1755861969","https://cdn.shopify.com/s/files/1/1510/0358/files/Roastery2_6ade86b9-01ea-4fa4-ab33-6929ebb1fab7.jpg?v=1755861969","https://cdn.shopify.com/s/files/1/1510/0358/files/Roastery3_3ac07f61-dbf0-402e-8b7b-70b5365ceb90.jpg?v=1755861969"],
    shortDesc: "We are proud to introduce the April Drip Pack Coffee. Created for all of you travellers and jet-setters, those that wish to explore the world yet expect a tasty cup of Filter ...",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de April Coffee (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"April Coffee","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://aprilcoffeeroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "April Coffee (Dinamarca)",
                "price": 70,
                "inStock": true,
                "url": "https://aprilcoffeeroasters.com/products/el-morito-washed-yellow-gesha-drip-pack",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 73.5,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=April%20Coffee%20El%20Morito%20-%20Washed%20Yellow%20Geisha%20-%20Drip%20Pack&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "april-coffee-volcan-azul-natural-sl28-drip-pack-box",
    slug: "april-coffee-volcan-azul-natural-sl28-drip-pack-box",
    name: "April Coffee — Volcan Azul - Natural SL28 - Drip Pack Box",
    brand: "April Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 60,
    oldPrice: null,
    historicalAveragePrice: 63.6,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Europa",
    image: "https://cdn.shopify.com/s/files/1/1510/0358/files/drippacksSELEC_6b819088-0c55-44c6-a075-1102687b9833.jpg?v=1755861209",
    gallery: ["https://cdn.shopify.com/s/files/1/1510/0358/files/drippacksSELEC_6b819088-0c55-44c6-a075-1102687b9833.jpg?v=1755861209","https://cdn.shopify.com/s/files/1/1510/0358/files/drippackboxselectionsquare_c5e4b3a8-5c41-41cc-b86b-bb8eda4f6111.jpg?v=1760002059","https://cdn.shopify.com/s/files/1/1510/0358/files/Roastery2_9bd57b7c-1bae-482b-999e-7d6fc73183e4.jpg?v=1760002063","https://cdn.shopify.com/s/files/1/1510/0358/files/Roastery3_3d295445-f9bf-4af1-9759-0864bc3e5d27.jpg?v=1760002063"],
    shortDesc: "We are proud to introduce the April Drip Pack Coffee. Created for all of you travellers and jet-setters, those that wish to explore the world yet expect a tasty cup of Filter ...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de April Coffee (Dinamarca)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"April Coffee","País de Origen":"Dinamarca","Región":"Europa","Tienda Oficial":"https://aprilcoffeeroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "April Coffee (Dinamarca)",
                "price": 60,
                "inStock": true,
                "url": "https://aprilcoffeeroasters.com/products/volcan-azul-natural-sl28-drip-pack-box",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 63,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=April%20Coffee%20Volcan%20Azul%20-%20Natural%20SL28%20-%20Drip%20Pack%20Box&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "onyx-coffee-lab-panama-kotowa-las-brujas-gesha-natural-cafe-only",
    slug: "onyx-coffee-lab-panama-kotowa-las-brujas-gesha-natural-cafe-only",
    name: "Onyx Coffee Lab — Panama Kotowa Las Brujas Gesha Natural - Cafe Only",
    brand: "Onyx Coffee Lab",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 55.2,
    oldPrice: null,
    historicalAveragePrice: 58.51,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/1707/3261/files/10-oz.webp?v=1787257061",
    gallery: ["https://cdn.shopify.com/s/files/1/1707/3261/files/10-oz.webp?v=1787257061"],
    shortDesc: "Café de especialidad de origen seleccionado y tostado/diseñado por Onyx Coffee Lab (Estados Unidos).",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Onyx Coffee Lab (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Onyx Coffee Lab","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://onyxcoffeelab.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Onyx Coffee Lab (Estados Unidos)",
                "price": 55.2,
                "inStock": true,
                "url": "https://onyxcoffeelab.com/products/panama-kotowa-las-brujas-gesha-naturco",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 57.96,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Onyx%20Coffee%20Lab%20Panama%20Kotowa%20Las%20Brujas%20Gesha%20Natural%20-%20Cafe%20Only&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "onyx-coffee-lab-costa-rica-volcan-azul-sl28-cafe-only",
    slug: "onyx-coffee-lab-costa-rica-volcan-azul-sl28-cafe-only",
    name: "Onyx Coffee Lab — Costa Rica Volcan Azul SL28 - Cafe Only",
    brand: "Onyx Coffee Lab",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 86.48,
    oldPrice: null,
    historicalAveragePrice: 91.67,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/1707/3261/files/unmarked-2lb_1cc782a2-f08a-48e9-8b9b-82a9c152352f.webp?v=1787257074",
    gallery: ["https://cdn.shopify.com/s/files/1/1707/3261/files/unmarked-2lb_1cc782a2-f08a-48e9-8b9b-82a9c152352f.webp?v=1787257074"],
    shortDesc: "Café de especialidad de origen seleccionado y tostado/diseñado por Onyx Coffee Lab (Estados Unidos).",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Onyx Coffee Lab (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Onyx Coffee Lab","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://onyxcoffeelab.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Onyx Coffee Lab (Estados Unidos)",
                "price": 86.48,
                "inStock": true,
                "url": "https://onyxcoffeelab.com/products/costa-rica-volcan-azul-sl28-cafe-only",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 90.8,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Onyx%20Coffee%20Lab%20Costa%20Rica%20Volcan%20Azul%20SL28%20-%20Cafe%20Only&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "onyx-coffee-lab-ethiopia-shakiso-doyenne-natural-cafe-only",
    slug: "onyx-coffee-lab-ethiopia-shakiso-doyenne-natural-cafe-only",
    name: "Onyx Coffee Lab — Ethiopia Shakiso Doyenne Natural - Cafe Only",
    brand: "Onyx Coffee Lab",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 147.2,
    oldPrice: null,
    historicalAveragePrice: 156.03,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/1707/3261/files/unmarked-2lb_fb9e1a6f-339c-4c2c-ac6f-3df201440ea0.webp?v=1787257036",
    gallery: ["https://cdn.shopify.com/s/files/1/1707/3261/files/unmarked-2lb_fb9e1a6f-339c-4c2c-ac6f-3df201440ea0.webp?v=1787257036"],
    shortDesc: "Café de especialidad de origen seleccionado y tostado/diseñado por Onyx Coffee Lab (Estados Unidos).",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Onyx Coffee Lab (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Onyx Coffee Lab","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://onyxcoffeelab.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Onyx Coffee Lab (Estados Unidos)",
                "price": 147.2,
                "inStock": true,
                "url": "https://onyxcoffeelab.com/products/ethiopia-shakiso-doyenne-natural-cafe-only",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 154.56,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Onyx%20Coffee%20Lab%20Ethiopia%20Shakiso%20Doyenne%20Natural%20-%20Cafe%20Only&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "onyx-coffee-lab-morning-mayhem",
    slug: "onyx-coffee-lab-morning-mayhem",
    name: "Onyx Coffee Lab — Morning Mayhem",
    brand: "Onyx Coffee Lab",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 23,
    oldPrice: null,
    historicalAveragePrice: 24.38,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/1707/3261/files/morning-mayhem-04-1_ce0013b2-2fe2-4c79-9ee2-02f7693a93a4.webp?v=1786718879",
    gallery: ["https://cdn.shopify.com/s/files/1/1707/3261/files/morning-mayhem-04-1_ce0013b2-2fe2-4c79-9ee2-02f7693a93a4.webp?v=1786718879","https://cdn.shopify.com/s/files/1/1707/3261/files/morning-mayhem-05-1_22bcd654-bf10-4249-b142-81d8e13c68ca.webp?v=1786718879"],
    shortDesc: "Step into the ring, caffeine fiends! Magic &amp; bird has tag teamed with Onyx Coffee Lab to slug your mouth with \"Morning Mayhem\"!! This coffee will suplex your sleepy taste ...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Onyx Coffee Lab (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Onyx Coffee Lab","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://onyxcoffeelab.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Onyx Coffee Lab (Estados Unidos)",
                "price": 23,
                "inStock": true,
                "url": "https://onyxcoffeelab.com/products/morning-mayhem",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 24.15,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Onyx%20Coffee%20Lab%20Morning%20Mayhem&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "onyx-coffee-lab-io-f-21",
    slug: "onyx-coffee-lab-io-f-21",
    name: "Onyx Coffee Lab — IO-F-21",
    brand: "Onyx Coffee Lab",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/1707/3261/files/bfiof21-pdp-hero-1-shadow_1208x_d149fcec-1845-4a48-ab7c-346cb2096c49.webp?v=1787257602",
    gallery: ["https://cdn.shopify.com/s/files/1/1707/3261/files/bfiof21-pdp-hero-1-shadow_1208x_d149fcec-1845-4a48-ab7c-346cb2096c49.webp?v=1787257602"],
    shortDesc: "Café de especialidad de origen seleccionado y tostado/diseñado por Onyx Coffee Lab (Estados Unidos).",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Onyx Coffee Lab (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Onyx Coffee Lab","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://onyxcoffeelab.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Onyx Coffee Lab (Estados Unidos)",
                "price": 12,
                "inStock": false,
                "url": "https://onyxcoffeelab.com/products/io-f-21",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Onyx%20Coffee%20Lab%20IO-F-21&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "onyx-coffee-lab-costa-rica-las-lajas-natural",
    slug: "onyx-coffee-lab-costa-rica-las-lajas-natural",
    name: "Onyx Coffee Lab — Costa Rica Las Lajas Natural",
    brand: "Onyx Coffee Lab",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 8.74,
    oldPrice: null,
    historicalAveragePrice: 9.26,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/1707/3261/files/costa-rica_1f9309cc-3aa6-44c2-88f2-b8768a4f5e8b.webp?v=1787082836",
    gallery: ["https://cdn.shopify.com/s/files/1/1707/3261/files/costa-rica_1f9309cc-3aa6-44c2-88f2-b8768a4f5e8b.webp?v=1787082836"],
    shortDesc: "This naturally processed coffee has become a staple in our Central American offerings and a reflection of our years working with Las Lajas. Today, they process this lot specif...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Onyx Coffee Lab (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Onyx Coffee Lab","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://onyxcoffeelab.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Onyx Coffee Lab (Estados Unidos)",
                "price": 8.74,
                "inStock": true,
                "url": "https://onyxcoffeelab.com/products/costa-rica-las-lajas-natural-26",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 9.18,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Onyx%20Coffee%20Lab%20Costa%20Rica%20Las%20Lajas%20Natural&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "onyx-coffee-lab-mexico-oaxaca-yogondoy-gesha",
    slug: "onyx-coffee-lab-mexico-oaxaca-yogondoy-gesha",
    name: "Onyx Coffee Lab — Mexico Oaxaca Yogondoy Gesha",
    brand: "Onyx Coffee Lab",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 8.28,
    oldPrice: null,
    historicalAveragePrice: 8.78,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/1707/3261/files/mexico_984eacc2-ab53-4ac3-ace1-589bf631f0b2.webp?v=1787166122",
    gallery: ["https://cdn.shopify.com/s/files/1/1707/3261/files/mexico_984eacc2-ab53-4ac3-ace1-589bf631f0b2.webp?v=1787166122"],
    shortDesc: "San Vicente Yogondoy Geisha is produced by six farmers in Oaxaca’s Sierra Sur, where coffee grows beneath native shade on forested slopes cooled by Pacific winds. Rooted in Za...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Onyx Coffee Lab (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Onyx Coffee Lab","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://onyxcoffeelab.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Onyx Coffee Lab (Estados Unidos)",
                "price": 8.28,
                "inStock": true,
                "url": "https://onyxcoffeelab.com/products/mexico-oaxaca-yogondoy-gesha",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 8.69,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Onyx%20Coffee%20Lab%20Mexico%20Oaxaca%20Yogondoy%20Gesha&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "onyx-coffee-lab-colombia-adrian-lasso-typica-mejorado",
    slug: "onyx-coffee-lab-colombia-adrian-lasso-typica-mejorado",
    name: "Onyx Coffee Lab — Colombia Adrian Lasso Typica Mejorado",
    brand: "Onyx Coffee Lab",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 27.6,
    oldPrice: null,
    historicalAveragePrice: 29.26,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/1707/3261/files/colombia_bf5a1a6c-6378-4ae6-9b5d-2b03319d00af.webp?v=1786718800",
    gallery: ["https://cdn.shopify.com/s/files/1/1707/3261/files/colombia_bf5a1a6c-6378-4ae6-9b5d-2b03319d00af.webp?v=1786718800"],
    shortDesc: "Esteemed for its intricate and unparalleled flavor profile, Typica Mejorado delights with vibrant notes of tropical fruits, underscored by a bright, lively acidity. The Lasso ...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Onyx Coffee Lab (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Onyx Coffee Lab","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://onyxcoffeelab.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Onyx Coffee Lab (Estados Unidos)",
                "price": 27.6,
                "inStock": true,
                "url": "https://onyxcoffeelab.com/products/colombia-adrian-lasso-typica-mejorado",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 28.98,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Onyx%20Coffee%20Lab%20Colombia%20Adrian%20Lasso%20Typica%20Mejorado&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "onyx-coffee-lab-india-ratnagiri-mosto-anaerobic-cafe-only",
    slug: "onyx-coffee-lab-india-ratnagiri-mosto-anaerobic-cafe-only",
    name: "Onyx Coffee Lab — India Ratnagiri Mosto-Anaerobic - Cafe Only",
    brand: "Onyx Coffee Lab",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 82.8,
    oldPrice: null,
    historicalAveragePrice: 87.77,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/1707/3261/files/unmarked-2lb.webp?v=1787257049",
    gallery: ["https://cdn.shopify.com/s/files/1/1707/3261/files/unmarked-2lb.webp?v=1787257049"],
    shortDesc: "Café de especialidad de origen seleccionado y tostado/diseñado por Onyx Coffee Lab (Estados Unidos).",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Onyx Coffee Lab (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Onyx Coffee Lab","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://onyxcoffeelab.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Onyx Coffee Lab (Estados Unidos)",
                "price": 82.8,
                "inStock": true,
                "url": "https://onyxcoffeelab.com/products/india-ratnagiri-mosto-anaerobic",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 86.94,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Onyx%20Coffee%20Lab%20India%20Ratnagiri%20Mosto-Anaerobic%20-%20Cafe%20Only&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "onyx-coffee-lab-who-we-are-hat",
    slug: "onyx-coffee-lab-who-we-are-hat",
    name: "Onyx Coffee Lab — Who We Are Hat",
    brand: "Onyx Coffee Lab",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 32.2,
    oldPrice: null,
    historicalAveragePrice: 34.13,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/1707/3261/files/who-we-are-hat-2.webp?v=1786996326",
    gallery: ["https://cdn.shopify.com/s/files/1/1707/3261/files/who-we-are-hat-2.webp?v=1786996326","https://cdn.shopify.com/s/files/1/1707/3261/files/who-we-are-hat-2-ow.webp?v=1786996326"],
    shortDesc: "We wanted to make a hat that spoke boldly and directly to who we are, and that is exactly what we did. *\"Join us in seeking quality, truth, and accountability in coffee. Toget...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Onyx Coffee Lab (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Onyx Coffee Lab","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://onyxcoffeelab.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Onyx Coffee Lab (Estados Unidos)",
                "price": 32.2,
                "inStock": true,
                "url": "https://onyxcoffeelab.com/products/who-we-are-hat",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 33.81,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Onyx%20Coffee%20Lab%20Who%20We%20Are%20Hat&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "onyx-coffee-lab-the-pilgrimage-hat",
    slug: "onyx-coffee-lab-the-pilgrimage-hat",
    name: "Onyx Coffee Lab — The Pilgrimage Hat",
    brand: "Onyx Coffee Lab",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 32.2,
    oldPrice: null,
    historicalAveragePrice: 34.13,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/1707/3261/files/pilgrimage-hat.webp?v=1786996080",
    gallery: ["https://cdn.shopify.com/s/files/1/1707/3261/files/pilgrimage-hat.webp?v=1786996080","https://cdn.shopify.com/s/files/1/1707/3261/files/pilgrimage-hat-1-os.webp?v=1786996080"],
    shortDesc: "Everyone needs a go-to Saturday morning stroll cap - our \"Pilgrimage Hat\" is just that. Whether you are walking around the farmer's market, spending time with family, or loung...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Onyx Coffee Lab (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Onyx Coffee Lab","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://onyxcoffeelab.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Onyx Coffee Lab (Estados Unidos)",
                "price": 32.2,
                "inStock": true,
                "url": "https://onyxcoffeelab.com/products/the-pilgrimage-hat",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 33.81,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Onyx%20Coffee%20Lab%20The%20Pilgrimage%20Hat&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "onyx-coffee-lab-the-pursuit-shirt",
    slug: "onyx-coffee-lab-the-pursuit-shirt",
    name: "Onyx Coffee Lab — The Pursuit Shirt",
    brand: "Onyx Coffee Lab",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 32.2,
    oldPrice: null,
    historicalAveragePrice: 34.13,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/1707/3261/files/the-pursuit-ls-back-2.webp?v=1786996208",
    gallery: ["https://cdn.shopify.com/s/files/1/1707/3261/files/the-pursuit-ls-back-2.webp?v=1786996208","https://cdn.shopify.com/s/files/1/1707/3261/files/pursuit-back.webp?v=1786996208"],
    shortDesc: "Shirts are meant for wearing, and coffee is meant for drinking. We hope the \"Pursuit Shirt\" will accompany you on all the adventures headed your way. Shirt Specs 6.5 oz., 100%...",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Onyx Coffee Lab (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Onyx Coffee Lab","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://onyxcoffeelab.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Onyx Coffee Lab (Estados Unidos)",
                "price": 32.2,
                "inStock": true,
                "url": "https://onyxcoffeelab.com/products/the-pursuit-shirt",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 33.81,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Onyx%20Coffee%20Lab%20The%20Pursuit%20Shirt&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "onyx-coffee-lab-research-development-shirt",
    slug: "onyx-coffee-lab-research-development-shirt",
    name: "Onyx Coffee Lab — Research & Development Shirt",
    brand: "Onyx Coffee Lab",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 32.2,
    oldPrice: null,
    historicalAveragePrice: 34.13,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/1707/3261/files/research-and-dev-ls.webp?v=1786995967",
    gallery: ["https://cdn.shopify.com/s/files/1/1707/3261/files/research-and-dev-ls.webp?v=1786995967","https://cdn.shopify.com/s/files/1/1707/3261/files/r-d-shirt-back.webp?v=1786995967"],
    shortDesc: "This is the Onyx Coffee Lab Science R &amp; D shirt. Join the Pilgrimage as we seek quality, truth, and accountability in coffee. Shirt Specs 6.5 oz., 100% ring-spun cotton Co...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Onyx Coffee Lab (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Onyx Coffee Lab","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://onyxcoffeelab.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Onyx Coffee Lab (Estados Unidos)",
                "price": 32.2,
                "inStock": true,
                "url": "https://onyxcoffeelab.com/products/research-development-shirt",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 33.81,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Onyx%20Coffee%20Lab%20Research%20%26%20Development%20Shirt&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "onyx-coffee-lab-never-settle-shirt",
    slug: "onyx-coffee-lab-never-settle-shirt",
    name: "Onyx Coffee Lab — Never Settle Shirt",
    brand: "Onyx Coffee Lab",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 32.2,
    oldPrice: null,
    historicalAveragePrice: 34.13,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/1707/3261/files/never-settle-ls-front_d92b8eb2-2191-4eb3-8169-13078aff1a57.webp?v=1786995910",
    gallery: ["https://cdn.shopify.com/s/files/1/1707/3261/files/never-settle-ls-front_d92b8eb2-2191-4eb3-8169-13078aff1a57.webp?v=1786995910","https://cdn.shopify.com/s/files/1/1707/3261/files/neversettleshirt-back_2f2b6f1d-f1c7-4bab-a881-cc74ae5dcae7.webp?v=1786995910"],
    shortDesc: "This washed olive shirt is at the center of the collection, featuring pour over iconography on the front, along with our SYSTEM LOGIC featured on the back. Join us in this unr...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Onyx Coffee Lab (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Onyx Coffee Lab","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://onyxcoffeelab.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Onyx Coffee Lab (Estados Unidos)",
                "price": 32.2,
                "inStock": true,
                "url": "https://onyxcoffeelab.com/products/never-settle-shirt",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 33.81,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Onyx%20Coffee%20Lab%20Never%20Settle%20Shirt&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "onyx-coffee-lab-arrows-shirt",
    slug: "onyx-coffee-lab-arrows-shirt",
    name: "Onyx Coffee Lab — Arrows Shirt",
    brand: "Onyx Coffee Lab",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 32.2,
    oldPrice: null,
    historicalAveragePrice: 34.13,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/1707/3261/files/arrows-shirt-ls_d4150db7-2f89-40b1-9556-0339eec728e3.webp?v=1786995806",
    gallery: ["https://cdn.shopify.com/s/files/1/1707/3261/files/arrows-shirt-ls_d4150db7-2f89-40b1-9556-0339eec728e3.webp?v=1786995806","https://cdn.shopify.com/s/files/1/1707/3261/files/arrows-shirt-front-ow_3dba8133-4347-4ab3-b66f-b7d673bde4ad.webp?v=1786995806"],
    shortDesc: "The \"Arrows Shirt\" features a horse on its continual journey back to the start of the journey. Ultimately, the journey is the destination. Shirt Specs 6.5 oz., 100% ring-spun ...",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Onyx Coffee Lab (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Onyx Coffee Lab","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://onyxcoffeelab.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Onyx Coffee Lab (Estados Unidos)",
                "price": 32.2,
                "inStock": true,
                "url": "https://onyxcoffeelab.com/products/arrows-shirt",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 33.81,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Onyx%20Coffee%20Lab%20Arrows%20Shirt&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "onyx-coffee-lab-philos",
    slug: "onyx-coffee-lab-philos",
    name: "Onyx Coffee Lab — Philos",
    brand: "Onyx Coffee Lab",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 1375.4,
    oldPrice: null,
    historicalAveragePrice: 1457.92,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/1707/3261/files/foto_philos_Tavola_disegno_1.jpg?v=1786982091",
    gallery: ["https://cdn.shopify.com/s/files/1/1707/3261/files/foto_philos_Tavola_disegno_1.jpg?v=1786982091","https://cdn.shopify.com/s/files/1/1707/3261/files/foto_philos.jpg?v=1786982091","https://cdn.shopify.com/s/files/1/1707/3261/files/prodotti_Tavoladisegno1copia2_6fce1c03-240f-47fa-baa0-5bd8e2948928.png?v=1786982091","https://cdn.shopify.com/s/files/1/1707/3261/files/prodotti_Tavoladisegno1copia2_1_e63ba842-2b43-4c0d-8e37-c60e73cd7045.png?v=1786982091"],
    shortDesc: "Mazzer Philos is a premium light commercial single dose grinder designed to help you get the most out of your coffee. Its elegant and compact design, accurate machining, and s...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Onyx Coffee Lab (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Onyx Coffee Lab","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://onyxcoffeelab.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Onyx Coffee Lab (Estados Unidos)",
                "price": 1375.4,
                "inStock": true,
                "url": "https://onyxcoffeelab.com/products/philos",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 1444.17,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Onyx%20Coffee%20Lab%20Philos&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "onyx-coffee-lab-panama-savage-coffees-gesha",
    slug: "onyx-coffee-lab-panama-savage-coffees-gesha",
    name: "Onyx Coffee Lab — Panama Savage Coffees Gesha",
    brand: "Onyx Coffee Lab",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 20.24,
    oldPrice: null,
    historicalAveragePrice: 21.45,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/1707/3261/files/panama_36eb34c4-d622-48c5-b9d5-d1aa9c95d12c.webp?v=1786663854",
    gallery: ["https://cdn.shopify.com/s/files/1/1707/3261/files/panama_36eb34c4-d622-48c5-b9d5-d1aa9c95d12c.webp?v=1786663854"],
    shortDesc: "The Savage Coffee line is a collaboration of boutique coffee producers located in Boquete Valley and Volcan, Panama, working together to produce some of the finest coffees in ...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Onyx Coffee Lab (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Onyx Coffee Lab","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://onyxcoffeelab.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Onyx Coffee Lab (Estados Unidos)",
                "price": 20.24,
                "inStock": true,
                "url": "https://onyxcoffeelab.com/products/panama-savage-coffees-gesha-26",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 21.25,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Onyx%20Coffee%20Lab%20Panama%20Savage%20Coffees%20Gesha&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "onyx-coffee-lab-panama-elida-gesha-falda-washed",
    slug: "onyx-coffee-lab-panama-elida-gesha-falda-washed",
    name: "Onyx Coffee Lab — Panama Elida Gesha Falda Washed",
    brand: "Onyx Coffee Lab",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 33.12,
    oldPrice: null,
    historicalAveragePrice: 35.11,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/1707/3261/files/panama_dd9ff8ce-4f13-4955-8711-3c864b4d53c3.webp?v=1786663571",
    gallery: ["https://cdn.shopify.com/s/files/1/1707/3261/files/panama_dd9ff8ce-4f13-4955-8711-3c864b4d53c3.webp?v=1786663571"],
    shortDesc: "Elida Estate in Boquete, Panama has become synonymous with industry-leading quality when it comes to coffee. Most recently winning the best of Panama and the choice of many wo...",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Onyx Coffee Lab (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Onyx Coffee Lab","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://onyxcoffeelab.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Onyx Coffee Lab (Estados Unidos)",
                "price": 33.12,
                "inStock": true,
                "url": "https://onyxcoffeelab.com/products/panama-elida-gesha-washed-falda",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 34.78,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Onyx%20Coffee%20Lab%20Panama%20Elida%20Gesha%20Falda%20Washed&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "onyx-coffee-lab-power-nap-cometeer",
    slug: "onyx-coffee-lab-power-nap-cometeer",
    name: "Onyx Coffee Lab — Power Nap - Cometeer",
    brand: "Onyx Coffee Lab",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 5278.5,
    oldPrice: null,
    historicalAveragePrice: 5595.21,
    isOffer: false,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/1707/3261/files/cold-brew_c13b5ac9-3049-42f7-a0e5-33583923831c.webp?v=1786640477",
    gallery: ["https://cdn.shopify.com/s/files/1/1707/3261/files/cold-brew_c13b5ac9-3049-42f7-a0e5-33583923831c.webp?v=1786640477"],
    shortDesc: "Café de especialidad de origen seleccionado y tostado/diseñado por Onyx Coffee Lab (Estados Unidos).",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Onyx Coffee Lab (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Onyx Coffee Lab","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://onyxcoffeelab.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Onyx Coffee Lab (Estados Unidos)",
                "price": 5278.5,
                "inStock": true,
                "url": "https://onyxcoffeelab.com/products/power-nap-cometeer",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 5542.43,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Onyx%20Coffee%20Lab%20Power%20Nap%20-%20Cometeer&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "sey-coffee-2026-gerald-njagi-kambarare-kenya",
    slug: "sey-coffee-2026-gerald-njagi-kambarare-kenya",
    name: "Sey Coffee — 2026 Gerald Njagi; Kambarare - Kenya",
    brand: "Sey Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 22.03,
    oldPrice: null,
    historicalAveragePrice: 23.35,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026GeraldNjagi_Kambarare-Kenya.png?v=1787787657",
    gallery: ["https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026GeraldNjagi_Kambarare-Kenya.png?v=1787787657"],
    shortDesc: "This lot is the main SL* separation from Gerald's main plot of Kambarare. Gerald is one of the most impressive Kenyan producers we have met, and this is his second year workin...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Sey Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Sey Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://seycoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Sey Coffee (Estados Unidos)",
                "price": 22.03,
                "inStock": true,
                "url": "https://seycoffee.com/products/2026-gerald-njagi-kambarare-kenya",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 23.13,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sey%20Coffee%202026%20Gerald%20Njagi%3B%20Kambarare%20-%20Kenya&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "sey-coffee-2026-carmen-montoya-bella-vista-colombia",
    slug: "sey-coffee-2026-carmen-montoya-bella-vista-colombia",
    name: "Sey Coffee — 2026 Carmen Montoya; Bella Vista - Colombia",
    brand: "Sey Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 21.11,
    oldPrice: null,
    historicalAveragePrice: 22.38,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026CarmenMontoya_BellaVista-Colombia.png?v=1787787397",
    gallery: ["https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026CarmenMontoya_BellaVista-Colombia.png?v=1787787397"],
    shortDesc: "Carmen Montoya produced the first Chiroso that we ever tasted from Urrao a number of years ago. Her coffee sparked our curiosity about this variety and region, and it feels li...",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Sey Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Sey Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://seycoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Sey Coffee (Estados Unidos)",
                "price": 21.11,
                "inStock": true,
                "url": "https://seycoffee.com/products/2026-carmen-montoya-bella-vista-colombia",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 22.17,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sey%20Coffee%202026%20Carmen%20Montoya%3B%20Bella%20Vista%20-%20Colombia&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "sey-coffee-2026-demeka-becha-ethiopia",
    slug: "sey-coffee-2026-demeka-becha-ethiopia",
    name: "Sey Coffee — 2026 Demeka Becha - Ethiopia",
    brand: "Sey Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 20.19,
    oldPrice: null,
    historicalAveragePrice: 21.4,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026DemekaBecha-Ethiopia.png?v=1787786573",
    gallery: ["https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026DemekaBecha-Ethiopia.png?v=1787786573"],
    shortDesc: "The Demeka site has produced some truly exceptional coffees over the years. We do not buy much coffee from Bona Zuria, but Demeka has consistently produced some compelling pro...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Sey Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Sey Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://seycoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Sey Coffee (Estados Unidos)",
                "price": 20.19,
                "inStock": true,
                "url": "https://seycoffee.com/products/2026-demeka-becha-ethiopia",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 21.2,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sey%20Coffee%202026%20Demeka%20Becha%20-%20Ethiopia&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "sey-coffee-2026-sike-bokasso-ethiopia",
    slug: "sey-coffee-2026-sike-bokasso-ethiopia",
    name: "Sey Coffee — 2026 Sike Bokasso - Ethiopia",
    brand: "Sey Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 20.19,
    oldPrice: null,
    historicalAveragePrice: 21.4,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026SikeBokasso-Ethiopia.png?v=1787784425",
    gallery: ["https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026SikeBokasso-Ethiopia.png?v=1787784425"],
    shortDesc: "This is our second year working with coffee from Sike Bokasso. Guji has had an unbelievable year, and we are thrilled to welcome this coffee back to the menu. In the cup we fi...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Sey Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Sey Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://seycoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Sey Coffee (Estados Unidos)",
                "price": 20.19,
                "inStock": true,
                "url": "https://seycoffee.com/products/2026-sike-bokasso-ethiopia",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 21.2,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sey%20Coffee%202026%20Sike%20Bokasso%20-%20Ethiopia&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "sey-coffee-2026-harmufo-ethiopia",
    slug: "sey-coffee-2026-harmufo-ethiopia",
    name: "Sey Coffee — 2026 Harmufo - Ethiopia",
    brand: "Sey Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 22.03,
    oldPrice: null,
    historicalAveragePrice: 23.35,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026Harmufo-Ethiopia.png?v=1785879636",
    gallery: ["https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026Harmufo-Ethiopia.png?v=1785879636"],
    shortDesc: "This is a separation of only the highest elevation cherry from around Harmufo. We have been interested in this area for some time, and our exporting partner, SNAP, graciously ...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Sey Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Sey Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://seycoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Sey Coffee (Estados Unidos)",
                "price": 22.03,
                "inStock": false,
                "url": "https://seycoffee.com/products/2026-harmufo-ethiopia",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 23.13,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sey%20Coffee%202026%20Harmufo%20-%20Ethiopia&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "sey-coffee-2026-guiliar-perez-cuellar-la-granja-colombia",
    slug: "sey-coffee-2026-guiliar-perez-cuellar-la-granja-colombia",
    name: "Sey Coffee — 2026 Guiliar Pérez Cuéllar; La Granja - Colombia",
    brand: "Sey Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 21.11,
    oldPrice: null,
    historicalAveragePrice: 22.38,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026GuiliarPerezCuellar_LaGranja-Colombia.png?v=1787235097",
    gallery: ["https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026GuiliarPerezCuellar_LaGranja-Colombia.png?v=1787235097"],
    shortDesc: "We started focusing a little more on the region of Santa Maria in Huila last year. Guiliar Cuéllar is a new producer for us, and we are eager to see this region continue to gr...",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Sey Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Sey Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://seycoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Sey Coffee (Estados Unidos)",
                "price": 21.11,
                "inStock": true,
                "url": "https://seycoffee.com/products/2026-guiliar-perez-cuellar-la-granja-colombia",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 22.17,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sey%20Coffee%202026%20Guiliar%20P%C3%A9rez%20Cu%C3%A9llar%3B%20La%20Granja%20-%20Colombia&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "sey-coffee-2026-mbature-family-kamavindi-estate-gesha-kenya",
    slug: "sey-coffee-2026-mbature-family-kamavindi-estate-gesha-kenya",
    name: "Sey Coffee — 2026 Mbature Family; Kamavindi Estate, Gesha - Kenya",
    brand: "Sey Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 74.47,
    oldPrice: null,
    historicalAveragePrice: 78.94,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026MbatureFamily_KamavindiEstate_Gesha-Kenya.png?v=1785182508",
    gallery: ["https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026MbatureFamily_KamavindiEstate_Gesha-Kenya.png?v=1785182508"],
    shortDesc: "This is our third year having the privilege of working with Kamavindi’s Gesha separation, and we are delighted to share it exclusively with our subscribers. We continue to lea...",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Sey Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Sey Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://seycoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Sey Coffee (Estados Unidos)",
                "price": 74.47,
                "inStock": false,
                "url": "https://seycoffee.com/products/2026-mbature-family-kamavindi-estate-gesha-kenya",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 78.19,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sey%20Coffee%202026%20Mbature%20Family%3B%20Kamavindi%20Estate%2C%20Gesha%20-%20Kenya&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "sey-coffee-2026-abraham-armijos-ecuador",
    slug: "sey-coffee-2026-abraham-armijos-ecuador",
    name: "Sey Coffee — 2026 Abraham Armijos - Ecuador",
    brand: "Sey Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 23.87,
    oldPrice: null,
    historicalAveragePrice: 25.3,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026AbrahamArmijos-Ecuador.png?v=1785181281",
    gallery: ["https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026AbrahamArmijos-Ecuador.png?v=1785181281"],
    shortDesc: "This is our first year working with Abraham Armijos. Mejorado has long been one of our favorite varieties to work with in Ecuador, and this is an exceptional expression of the...",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Sey Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Sey Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://seycoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Sey Coffee (Estados Unidos)",
                "price": 23.87,
                "inStock": false,
                "url": "https://seycoffee.com/products/2026-abraham-armijos-ecuador",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 25.06,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sey%20Coffee%202026%20Abraham%20Armijos%20-%20Ecuador&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "sey-coffee-2026-kamwangi-kenya",
    slug: "sey-coffee-2026-kamwangi-kenya",
    name: "Sey Coffee — 2026 Kamwangi - Kenya",
    brand: "Sey Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 20.19,
    oldPrice: null,
    historicalAveragePrice: 21.4,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026Kamwangi-Kenya.png?v=1785180855",
    gallery: ["https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026Kamwangi-Kenya.png?v=1785180855"],
    shortDesc: "We have been working with the Kamwangi site for a number of years now, and it continues to produce some of the highest-quality coffees in all of Kenya. In the cup we find cran...",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Sey Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Sey Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://seycoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Sey Coffee (Estados Unidos)",
                "price": 20.19,
                "inStock": true,
                "url": "https://seycoffee.com/products/2026-kamwangi-kenya",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 21.2,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sey%20Coffee%202026%20Kamwangi%20-%20Kenya&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "sey-coffee-2026-yabitu-koba-ethiopia",
    slug: "sey-coffee-2026-yabitu-koba-ethiopia",
    name: "Sey Coffee — 2026 Yabitu Koba - Ethiopia",
    brand: "Sey Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 20.19,
    oldPrice: null,
    historicalAveragePrice: 21.4,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026YabituKoba-Ethiopia.png?v=1785180674",
    gallery: ["https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026YabituKoba-Ethiopia.png?v=1785180674"],
    shortDesc: "We are pleased to welcome Yabitu Koba back to our lineup. It has been a few years since we purchased a coffee from the south of Ethiopia. Uraga used to play an extremely impor...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Sey Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Sey Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://seycoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Sey Coffee (Estados Unidos)",
                "price": 20.19,
                "inStock": false,
                "url": "https://seycoffee.com/products/2026-yabitu-koba-ethiopia",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 21.2,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sey%20Coffee%202026%20Yabitu%20Koba%20-%20Ethiopia&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "sey-coffee-2026-pepe-jose-jijon-and-francisco-vintimilla-putushio-2nd-harvest-ecuador",
    slug: "sey-coffee-2026-pepe-jose-jijon-and-francisco-vintimilla-putushio-2nd-harvest-ecuador",
    name: "Sey Coffee — 2026 Pepe & Jose Jijón And Francisco Vintimilla; Putushio, 2nd Harvest - Ecuador",
    brand: "Sey Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 40.43,
    oldPrice: null,
    historicalAveragePrice: 42.86,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026Pepe_JoseJijonAndFranciscoVintimilla_Putushio_2ndHarvest-Ecuador.png?v=1786575419",
    gallery: ["https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026Pepe_JoseJijonAndFranciscoVintimilla_Putushio_2ndHarvest-Ecuador.png?v=1786575419"],
    shortDesc: "Pepe and Jose created this special lot after cupping through many selections to assemble the best of what Putushio produced this year. In the cup we find orange blossom, manda...",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Sey Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Sey Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://seycoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Sey Coffee (Estados Unidos)",
                "price": 40.43,
                "inStock": false,
                "url": "https://seycoffee.com/products/2026-pepe-jose-jijon-and-francisco-vintimilla-putushio-2nd-harvest-ecuador",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 42.45,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sey%20Coffee%202026%20Pepe%20%26%20Jose%20Jij%C3%B3n%20And%20Francisco%20Vintimilla%3B%20Putushio%2C%202nd%20Harvest%20-%20Ecuador&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "sey-coffee-2026-william-ortiz-la-cabana-end-of-season-colombia",
    slug: "sey-coffee-2026-william-ortiz-la-cabana-end-of-season-colombia",
    name: "Sey Coffee — 2026 William Ortiz; La Cabaña, End Of Season - Colombia",
    brand: "Sey Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 22.03,
    oldPrice: null,
    historicalAveragePrice: 23.35,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026WilliamOrtiz_LaCabana_EndOfSeason-Colombia.png?v=1786575231",
    gallery: ["https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026WilliamOrtiz_LaCabana_EndOfSeason-Colombia.png?v=1786575231"],
    shortDesc: "The third and final harvest pass of William Ortiz's Chiroso closes out our first year working with his coffees—and they have, without question, been some of the best coffees o...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Sey Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Sey Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://seycoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Sey Coffee (Estados Unidos)",
                "price": 22.03,
                "inStock": true,
                "url": "https://seycoffee.com/products/2026-william-ortiz-la-cabana-end-of-season-colombia",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 23.13,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sey%20Coffee%202026%20William%20Ortiz%3B%20La%20Caba%C3%B1a%2C%20End%20Of%20Season%20-%20Colombia&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "sey-coffee-2026-manuel-dota-ecuador",
    slug: "sey-coffee-2026-manuel-dota-ecuador",
    name: "Sey Coffee — 2026 Manuel Dota - Ecuador",
    brand: "Sey Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 24.79,
    oldPrice: null,
    historicalAveragePrice: 26.28,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026ManuelDota-Ecuador.png?v=1786574998",
    gallery: ["https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026ManuelDota-Ecuador.png?v=1786574998"],
    shortDesc: "Our first year working with Manuel Dota marks a continuation of our very small but compelling project in southern Ecuador. As always, the selection is very, very small, but we...",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Sey Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Sey Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://seycoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Sey Coffee (Estados Unidos)",
                "price": 24.79,
                "inStock": false,
                "url": "https://seycoffee.com/products/2026-manuel-dota-ecuador",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 26.03,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sey%20Coffee%202026%20Manuel%20Dota%20-%20Ecuador&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "sey-coffee-2026-hector-londono-santa-catalina-colombia",
    slug: "sey-coffee-2026-hector-londono-santa-catalina-colombia",
    name: "Sey Coffee — 2026 Héctor Londoño; Santa Catalina - Colombia",
    brand: "Sey Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 21.11,
    oldPrice: null,
    historicalAveragePrice: 22.38,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026HectorLondono_SantaCatalina-Colombia.png?v=1785966251",
    gallery: ["https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026HectorLondono_SantaCatalina-Colombia.png?v=1785966251"],
    shortDesc: "This is our first year working with Héctor's coffee. Part of our ongoing project to explore the Chiroso variety, this lot comes specifically from Urrao. In the cup we find a b...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Sey Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Sey Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://seycoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Sey Coffee (Estados Unidos)",
                "price": 21.11,
                "inStock": false,
                "url": "https://seycoffee.com/products/2026-hector-londono-santa-catalina-colombia",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 22.17,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sey%20Coffee%202026%20H%C3%A9ctor%20Londo%C3%B1o%3B%20Santa%20Catalina%20-%20Colombia&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "sey-coffee-2026-raro-ethiopia",
    slug: "sey-coffee-2026-raro-ethiopia",
    name: "Sey Coffee — 2026 Raro - Ethiopia",
    brand: "Sey Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 20.19,
    oldPrice: null,
    historicalAveragePrice: 21.4,
    isOffer: false,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026Raro-Ethiopia_96707057-06f8-4c6f-a23a-4c300eae9018.png?v=1785986283",
    gallery: ["https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026Raro-Ethiopia_96707057-06f8-4c6f-a23a-4c300eae9018.png?v=1785986283"],
    shortDesc: "This is a continuation of our exploration of a new processing and separation protocol that we developed with our partners in Ethiopia this year. This lot was made with cherry ...",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Sey Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Sey Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://seycoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Sey Coffee (Estados Unidos)",
                "price": 20.19,
                "inStock": true,
                "url": "https://seycoffee.com/products/2026-raro-ethiopia",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 21.2,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sey%20Coffee%202026%20Raro%20-%20Ethiopia&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "sey-coffee-2026-albino-ibias-tres-cedros-2nd-harvest-peru",
    slug: "sey-coffee-2026-albino-ibias-tres-cedros-2nd-harvest-peru",
    name: "Sey Coffee — 2026 Albino Ibias; Tres Cedros, 2nd Harvest - Peru",
    brand: "Sey Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 24.79,
    oldPrice: null,
    historicalAveragePrice: 26.28,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026AlbinoIbias_TresCedros_2ndHarvest-Peru.png?v=1784763147",
    gallery: ["https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026AlbinoIbias_TresCedros_2ndHarvest-Peru.png?v=1784763147"],
    shortDesc: "The second harvest pass from Albino Ibias's farm arrives at an exciting moment—Tres Cedros is quickly gaining the reputation of producing some of the best coffee in Peru, and ...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Sey Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Sey Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://seycoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Sey Coffee (Estados Unidos)",
                "price": 24.79,
                "inStock": false,
                "url": "https://seycoffee.com/products/2026-albino-ibias-tres-cedros-2nd-harvest-peru",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 26.03,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sey%20Coffee%202026%20Albino%20Ibias%3B%20Tres%20Cedros%2C%202nd%20Harvest%20-%20Peru&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "sey-coffee-2026-felix-morocho-2nd-harvest-ecuador",
    slug: "sey-coffee-2026-felix-morocho-2nd-harvest-ecuador",
    name: "Sey Coffee — 2026 Felix Morocho; 2nd Harvest - Ecuador",
    brand: "Sey Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 24.79,
    oldPrice: null,
    historicalAveragePrice: 26.28,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026FelixMorocho_2ndHarvest-Ecuador.png?v=1785363470",
    gallery: ["https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026FelixMorocho_2ndHarvest-Ecuador.png?v=1785363470"],
    shortDesc: "This is our second separation of the season from Felix Morocho. Felix is a newer producer to our Ecuador project, and this extremely small lot—like every other coffee we sourc...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Sey Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Sey Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://seycoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Sey Coffee (Estados Unidos)",
                "price": 24.79,
                "inStock": false,
                "url": "https://seycoffee.com/products/2026-felix-morocho-2nd-harvest-ecuador",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 26.03,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sey%20Coffee%202026%20Felix%20Morocho%3B%202nd%20Harvest%20-%20Ecuador&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "sey-coffee-2026-diana-arboleda-tabares-la-esperanza-colombia",
    slug: "sey-coffee-2026-diana-arboleda-tabares-la-esperanza-colombia",
    name: "Sey Coffee — 2026 Diana Arboleda Tabares; La Esperanza - Colombia",
    brand: "Sey Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 21.11,
    oldPrice: null,
    historicalAveragePrice: 22.38,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026DianaArboledaTabares_LaEsperanza-Colombia.png?v=1785364326",
    gallery: ["https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026DianaArboledaTabares_LaEsperanza-Colombia.png?v=1785364326"],
    shortDesc: "Diana took over managing her father's small farm in 2011 and is a welcomed recent addition to our Chiroso project in Urrao. In the cup we find what we are starting to call a t...",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Sey Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Sey Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://seycoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Sey Coffee (Estados Unidos)",
                "price": 21.11,
                "inStock": false,
                "url": "https://seycoffee.com/products/2026-diana-arboleda-tabares-la-esperanza-colombia",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 22.17,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sey%20Coffee%202026%20Diana%20Arboleda%20Tabares%3B%20La%20Esperanza%20-%20Colombia&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "sey-coffee-2026-florence-jessica-marigi-malaki-estate-kenya",
    slug: "sey-coffee-2026-florence-jessica-marigi-malaki-estate-kenya",
    name: "Sey Coffee — 2026 Florence & Jessica Marigi; Malaki Estate - Kenya",
    brand: "Sey Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 20.19,
    oldPrice: null,
    historicalAveragePrice: 21.4,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026Florence_JessicaMarigi_MalakiEstate-Kenya.png?v=1785363188",
    gallery: ["https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026Florence_JessicaMarigi_MalakiEstate-Kenya.png?v=1785363188"],
    shortDesc: "This is our first year working with Florence and Jessica. Their farm, Malaki, sits at very high elevation in Kiambu—one of the more intriguing coffee-producing regions in cent...",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Sey Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Sey Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://seycoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Sey Coffee (Estados Unidos)",
                "price": 20.19,
                "inStock": false,
                "url": "https://seycoffee.com/products/2026-florence-jessica-marigi-malaki-estate-kenya",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 21.2,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sey%20Coffee%202026%20Florence%20%26%20Jessica%20Marigi%3B%20Malaki%20Estate%20-%20Kenya&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "sey-coffee-2026-basha-bekele-badigalo-ethiopia",
    slug: "sey-coffee-2026-basha-bekele-badigalo-ethiopia",
    name: "Sey Coffee — 2026 Basha Bekele; Badigalo - Ethiopia",
    brand: "Sey Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 22.95,
    oldPrice: null,
    historicalAveragePrice: 24.33,
    isOffer: false,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026_Basha_Bekele_Badigalo_-_Ethiopia.png?v=1784766957",
    gallery: ["https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026_Basha_Bekele_Badigalo_-_Ethiopia.png?v=1784766957"],
    shortDesc: "Badigalo is Basha Bekele's new higher-elevation site, and this is our first year working with it. The quality has been exceptional. In the cup we find kiwi, orange blossom, an...",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Sey Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Sey Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://seycoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Sey Coffee (Estados Unidos)",
                "price": 22.95,
                "inStock": false,
                "url": "https://seycoffee.com/products/2026-basha-bekele-badigalo-ethiopia",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 24.1,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sey%20Coffee%202026%20Basha%20Bekele%3B%20Badigalo%20-%20Ethiopia&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "sey-coffee-2026-mbature-family-kamavindi-estate-lot-1-kenya",
    slug: "sey-coffee-2026-mbature-family-kamavindi-estate-lot-1-kenya",
    name: "Sey Coffee — 2026 Mbature Family; Kamavindi Estate, Lot #1 - Kenya",
    brand: "Sey Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 22.95,
    oldPrice: null,
    historicalAveragePrice: 24.33,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026MbatureFamily_KamavindiEstate_Lot_1-Kenya.png?v=1784762409",
    gallery: ["https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026MbatureFamily_KamavindiEstate_Lot_1-Kenya.png?v=1784762409"],
    shortDesc: "This is our first micro lot of the season from Kamavindi. Kamavindi is one of our main collaborators in Kenya, and the center of our ongoing exploration of Kenyan varieties an...",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Sey Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Sey Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://seycoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Sey Coffee (Estados Unidos)",
                "price": 22.95,
                "inStock": false,
                "url": "https://seycoffee.com/products/2026-mbature-family-kamavindi-estate-lot-1-kenya",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 24.1,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sey%20Coffee%202026%20Mbature%20Family%3B%20Kamavindi%20Estate%2C%20Lot%20%231%20-%20Kenya&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "sey-coffee-2026-david-berrio-la-casita-end-of-season-colombia",
    slug: "sey-coffee-2026-david-berrio-la-casita-end-of-season-colombia",
    name: "Sey Coffee — 2026 David Berrio; La Casita, End Of Season - Colombia",
    brand: "Sey Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 22.03,
    oldPrice: null,
    historicalAveragePrice: 23.35,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026DavidBerrio_LaCasita_EndOfSeason-Colombia.png?v=1782393121",
    gallery: ["https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026DavidBerrio_LaCasita_EndOfSeason-Colombia.png?v=1782393121"],
    shortDesc: "This is the last harvest pass from David Berrio's small garden of Chiroso. David had an exceptional year this year and his lots have been some of the highest scoring lots from...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Sey Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Sey Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://seycoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Sey Coffee (Estados Unidos)",
                "price": 22.03,
                "inStock": false,
                "url": "https://seycoffee.com/products/2026-david-berrio-la-casita-end-of-season-colombia",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 23.13,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sey%20Coffee%202026%20David%20Berrio%3B%20La%20Casita%2C%20End%20Of%20Season%20-%20Colombia&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "sey-coffee-2026-ndwiga-family-nginda-estate-kenya",
    slug: "sey-coffee-2026-ndwiga-family-nginda-estate-kenya",
    name: "Sey Coffee — 2026 Ndwiga Family; Nginda Estate - Kenya",
    brand: "Sey Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 21.11,
    oldPrice: null,
    historicalAveragePrice: 22.38,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026NdwigaFamily_NgindaEstate-Kenya.png?v=1784158759",
    gallery: ["https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026NdwigaFamily_NgindaEstate-Kenya.png?v=1784158759"],
    shortDesc: "This is our first year working with the Ndwiga Family. Nginda Estate is a small family farm and a neighbor of our exporting partners, Kamavindi, who presented us with a sample...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Sey Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Sey Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://seycoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Sey Coffee (Estados Unidos)",
                "price": 21.11,
                "inStock": false,
                "url": "https://seycoffee.com/products/2026-ndwiga-family-nginda-estate-kenya",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 22.17,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sey%20Coffee%202026%20Ndwiga%20Family%3B%20Nginda%20Estate%20-%20Kenya&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "sey-coffee-2026-esayas-beriso-buku-sayisa-ethiopia",
    slug: "sey-coffee-2026-esayas-beriso-buku-sayisa-ethiopia",
    name: "Sey Coffee — 2026 Esayas Beriso; Buku Sayisa - Ethiopia",
    brand: "Sey Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 20.19,
    oldPrice: null,
    historicalAveragePrice: 21.4,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026EsayasBeriso_BukuSayisa-Ethiopia.png?v=1784157944",
    gallery: ["https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026EsayasBeriso_BukuSayisa-Ethiopia.png?v=1784157944"],
    shortDesc: "We have been working with Esayas Beriso for a few seasons now, and the quality continues to be exceptional. This lot is one of the few single-producer separations we get from ...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Sey Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Sey Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://seycoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Sey Coffee (Estados Unidos)",
                "price": 20.19,
                "inStock": false,
                "url": "https://seycoffee.com/products/2026-esayas-beriso-buku-sayisa-ethiopia",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 21.2,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sey%20Coffee%202026%20Esayas%20Beriso%3B%20Buku%20Sayisa%20-%20Ethiopia&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "sey-coffee-2026-miguel-dota-ecuador",
    slug: "sey-coffee-2026-miguel-dota-ecuador",
    name: "Sey Coffee — 2026 Miguel Dota - Ecuador",
    brand: "Sey Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 24.79,
    oldPrice: null,
    historicalAveragePrice: 26.28,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026MiguelDota-Ecuador.png?v=1783547680",
    gallery: ["https://cdn.shopify.com/s/files/1/0002/6352/0281/files/2026MiguelDota-Ecuador.png?v=1783547680"],
    shortDesc: "This is our second release from Miguel Dota, continuing our project in the Saraguro region of Ecuador. Grown in a small Sidra garden on a sub-1-hectare (~2.5-acre) farm, this ...",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Sey Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Sey Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://seycoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Sey Coffee (Estados Unidos)",
                "price": 24.79,
                "inStock": false,
                "url": "https://seycoffee.com/products/2026-miguel-dota-ecuador",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 26.03,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Sey%20Coffee%202026%20Miguel%20Dota%20-%20Ecuador&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "black-white-coffee-together-we-end-als",
    slug: "black-white-coffee-together-we-end-als",
    name: "Black & White Coffee — Together We End ALS",
    brand: "Black & White Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 22.08,
    oldPrice: null,
    historicalAveragePrice: 23.4,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2988/2574/files/2025_TogetherweendALSonlinecard_4x_629eff0f-2777-4c52-91c6-3cd3637f3ff9.png?v=1755275381",
    gallery: ["https://cdn.shopify.com/s/files/1/2988/2574/files/2025_TogetherweendALSonlinecard_4x_629eff0f-2777-4c52-91c6-3cd3637f3ff9.png?v=1755275381","https://cdn.shopify.com/s/files/1/2988/2574/files/Sola_TOgetherWeEndALS_whitebackground.jpg?v=1756233982"],
    shortDesc: "One of our three core values at Black &amp; White is community. Community extends from our producing partners all over the world to our own cafés here at home—and everywhere i...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Black & White Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Black & White Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://blackwhiteroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Black & White Coffee (Estados Unidos)",
                "price": 22.08,
                "inStock": true,
                "url": "https://blackwhiteroasters.com/products/r-together-we-end-als-2026",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 23.18,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Black%20%26%20White%20Coffee%20Together%20We%20End%20ALS&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "black-white-coffee-nestor-lasso-thermal-shock-caturra",
    slug: "black-white-coffee-nestor-lasso-thermal-shock-caturra",
    name: "Black & White Coffee — Nestor Lasso - Thermal Shock Caturra",
    brand: "Black & White Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 23.92,
    oldPrice: null,
    historicalAveragePrice: 25.36,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2988/2574/files/NestorLassoThermalShockCaturraOnlineCard_4x_e.png?v=1782759977",
    gallery: ["https://cdn.shopify.com/s/files/1/2988/2574/files/NestorLassoThermalShockCaturraOnlineCard_4x_e.png?v=1782759977","https://cdn.shopify.com/s/files/1/2988/2574/files/WHITE___NESTOR_LASSO___THERMAL_SHOCK_CATURRA.jpg?v=1782331784"],
    shortDesc: "MEET THE PRODUCERS | At ages 24 and 26 years old, Nestor and Adrian Lasso are some of the youngest players in the game. Six years ago, they took over the family farm and set t...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Black & White Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Black & White Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://blackwhiteroasters.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Black & White Coffee (Estados Unidos)",
                "price": 23.92,
                "inStock": false,
                "url": "https://blackwhiteroasters.com/products/r-nestor-lasso-thermal-shock-caturra",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 25.12,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Black%20%26%20White%20Coffee%20Nestor%20Lasso%20-%20Thermal%20Shock%20Caturra&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "black-white-coffee-mustefa-abakeno-washed",
    slug: "black-white-coffee-mustefa-abakeno-washed",
    name: "Black & White Coffee — Mustefa Abakeno - Washed",
    brand: "Black & White Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 22.08,
    oldPrice: null,
    historicalAveragePrice: 23.4,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2988/2574/files/MustefaAbakeno_Washed_onlinecard_4x_e26f6737-f8d8-4091-9343-ede43d64a53e.png?v=1786560593",
    gallery: ["https://cdn.shopify.com/s/files/1/2988/2574/files/MustefaAbakeno_Washed_onlinecard_4x_e26f6737-f8d8-4091-9343-ede43d64a53e.png?v=1786560593"],
    shortDesc: "MEET THE PRODUCER | In his hometown of Agaro, Mustefa Abakeno is a living legend. Before running his own farm and managing five washing stations in the area, Mustefa was instr...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Black & White Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Black & White Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://blackwhiteroasters.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Black & White Coffee (Estados Unidos)",
                "price": 22.08,
                "inStock": false,
                "url": "https://blackwhiteroasters.com/products/r-mustefa-abakeno-washed",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 23.18,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Black%20%26%20White%20Coffee%20Mustefa%20Abakeno%20-%20Washed&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "black-white-coffee-hugo-grey-black-blend",
    slug: "black-white-coffee-hugo-grey-black-blend",
    name: "Black & White Coffee — Hugo Grey | Black Blend",
    brand: "Black & White Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 38.64,
    oldPrice: null,
    historicalAveragePrice: 40.96,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2988/2574/files/Ceremony_Allied_Hugo_Grey.png?v=1776711738",
    gallery: ["https://cdn.shopify.com/s/files/1/2988/2574/files/Ceremony_Allied_Hugo_Grey.png?v=1776711738"],
    shortDesc: "HUGO GREY is Hugo Tea's in-house rendition of earl grey. The blend is just 2 ingredients (of the highest quality they could source): malty, scotch-like Yunnan black tea and es...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Black & White Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Black & White Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://blackwhiteroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Black & White Coffee (Estados Unidos)",
                "price": 38.64,
                "inStock": true,
                "url": "https://blackwhiteroasters.com/products/w-hugo-grey-black-blend",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 40.57,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Black%20%26%20White%20Coffee%20Hugo%20Grey%20%7C%20Black%20Blend&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "black-white-coffee-edwin-norena-gummy-sharks",
    slug: "black-white-coffee-edwin-norena-gummy-sharks",
    name: "Black & White Coffee — Edwin Noreña - Gummy Sharks",
    brand: "Black & White Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 14.72,
    oldPrice: null,
    historicalAveragePrice: 15.6,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2988/2574/files/EdwinNorenaGummysharks_onlinecard2026_4x_df2c4448-ff93-4097-85ac-a5c80f5d4963.png?v=1784644376",
    gallery: ["https://cdn.shopify.com/s/files/1/2988/2574/files/EdwinNorenaGummysharks_onlinecard2026_4x_df2c4448-ff93-4097-85ac-a5c80f5d4963.png?v=1784644376","https://cdn.shopify.com/s/files/1/2988/2574/files/EdwinNorena_GummySharks_Coffee_whitebackground.jpg?v=1785248294"],
    shortDesc: "MEET THE PRODUCER | Edwin Noreña is a third generation coffee producer with a pretty stacked resume. A trained agronomist, certified Q-grader, and renowned Cup of Excellence j...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Black & White Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Black & White Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://blackwhiteroasters.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Black & White Coffee (Estados Unidos)",
                "price": 14.72,
                "inStock": false,
                "url": "https://blackwhiteroasters.com/products/r-edwin-norena-gummy-sharks",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 15.46,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Black%20%26%20White%20Coffee%20Edwin%20Nore%C3%B1a%20-%20Gummy%20Sharks&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "black-white-coffee-marlon-bolanos-pink-bourbon",
    slug: "black-white-coffee-marlon-bolanos-pink-bourbon",
    name: "Black & White Coffee — Marlon Bolaños - Pink Bourbon",
    brand: "Black & White Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 25.76,
    oldPrice: null,
    historicalAveragePrice: 27.31,
    isOffer: false,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2988/2574/files/marlonBolanosPinkBourbon_onlinecards_4x_345b3c2b-1405-458d-9679-c9837d6da96f.png?v=1787175192",
    gallery: ["https://cdn.shopify.com/s/files/1/2988/2574/files/marlonBolanosPinkBourbon_onlinecards_4x_345b3c2b-1405-458d-9679-c9837d6da96f.png?v=1787175192","https://cdn.shopify.com/s/files/1/2988/2574/files/marlonBolanosPinkBourbon_WhiteBackgroundcoffee.jpg?v=1787175193"],
    shortDesc: "MEET THE PRODUCER | Coffee has always been the livelihood of Marlon Bolaños’s family, but when he enrolled in a barismo course at SENA at 17, everything changed. There, Marlon...",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Black & White Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Black & White Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://blackwhiteroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Black & White Coffee (Estados Unidos)",
                "price": 25.76,
                "inStock": true,
                "url": "https://blackwhiteroasters.com/products/r-marlon-bolanos-pink-bourbon",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 27.05,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Black%20%26%20White%20Coffee%20Marlon%20Bola%C3%B1os%20-%20Pink%20Bourbon&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "black-white-coffee-familia-bermudez-lychee-peach",
    slug: "black-white-coffee-familia-bermudez-lychee-peach",
    name: "Black & White Coffee — Familia Bermudez - Lychee Peach",
    brand: "Black & White Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 25.76,
    oldPrice: null,
    historicalAveragePrice: 27.31,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2988/2574/files/FamiliaBermudez_onlinecard_4x_6e38153d-bcdf-4e76-a3ac-651fef9c9de2.png?v=1787152137",
    gallery: ["https://cdn.shopify.com/s/files/1/2988/2574/files/FamiliaBermudez_onlinecard_4x_6e38153d-bcdf-4e76-a3ac-651fef9c9de2.png?v=1787152137","https://cdn.shopify.com/s/files/1/2988/2574/files/FamiliaBermudez_LycheePeach_whitebackground.jpg?v=1787175214"],
    shortDesc: "MEET THE PRODUCER | Finca El Paraíso needs no introduction in specialty coffee circles. What began as a small family farm in 2012 has catapulted into a venture which now has a...",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Black & White Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Black & White Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://blackwhiteroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Black & White Coffee (Estados Unidos)",
                "price": 25.76,
                "inStock": true,
                "url": "https://blackwhiteroasters.com/products/r-familia-bermudez-lychee-peach",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 27.05,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Black%20%26%20White%20Coffee%20Familia%20Bermudez%20-%20Lychee%20Peach&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "black-white-coffee-julio-madrid-april",
    slug: "black-white-coffee-julio-madrid-april",
    name: "Black & White Coffee — Julio Madrid - April",
    brand: "Black & White Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 12.88,
    oldPrice: null,
    historicalAveragePrice: 13.65,
    isOffer: false,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2988/2574/files/JulioMadridApril_onlinecards_4x_e33725b9-ab3c-489d-b36a-7ef0ab620d0a.png?v=1782930212",
    gallery: ["https://cdn.shopify.com/s/files/1/2988/2574/files/JulioMadridApril_onlinecards_4x_e33725b9-ab3c-489d-b36a-7ef0ab620d0a.png?v=1782930212","https://cdn.shopify.com/s/files/1/2988/2574/files/JulioMadrid_April_whitebackground_colombianCoffee.jpg?v=1782956222"],
    shortDesc: "MEET THE PRODUCER | Julio Cesar Madrid is a name you've seen on our menu before—he's the director of the joint farms, Finca La Riviera and Finca Milan, which were first cultiv...",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Black & White Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Black & White Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://blackwhiteroasters.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Black & White Coffee (Estados Unidos)",
                "price": 12.88,
                "inStock": false,
                "url": "https://blackwhiteroasters.com/products/r-julio-madrid-april",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 13.52,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Black%20%26%20White%20Coffee%20Julio%20Madrid%20-%20April&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "black-white-coffee-nelson-moreno-anaerobic-bourbon",
    slug: "black-white-coffee-nelson-moreno-anaerobic-bourbon",
    name: "Black & White Coffee — Nelson Moreno - Anaerobic Bourbon",
    brand: "Black & White Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 25.76,
    oldPrice: null,
    historicalAveragePrice: 27.31,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2988/2574/files/NelsonMoreno_AnaerobicBourbon_onlinecard_4x_b211e630-394c-4ab6-a1ea-6e8f0cc8b50e.png?v=1784644323",
    gallery: ["https://cdn.shopify.com/s/files/1/2988/2574/files/NelsonMoreno_AnaerobicBourbon_onlinecard_4x_b211e630-394c-4ab6-a1ea-6e8f0cc8b50e.png?v=1784644323","https://cdn.shopify.com/s/files/1/2988/2574/files/NelsonMoreno_AnaerobicBourbon_whitebackgroundCoffee.jpg?v=1785248162"],
    shortDesc: "MEET THE PRODUCER | The Moreno family has been dishing out spectacular coffees in the renowned region of Santa Barbara, Honduras, for several generations, and over 30 of them ...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Black & White Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Black & White Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://blackwhiteroasters.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Black & White Coffee (Estados Unidos)",
                "price": 25.76,
                "inStock": false,
                "url": "https://blackwhiteroasters.com/products/r-nelson-moreno-anaerobic-pacas",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 27.05,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Black%20%26%20White%20Coffee%20Nelson%20Moreno%20-%20Anaerobic%20Bourbon&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "black-white-coffee-diego-bermudez-total-eclipse",
    slug: "black-white-coffee-diego-bermudez-total-eclipse",
    name: "Black & White Coffee — Diego Bermudez - Total Eclipse",
    brand: "Black & White Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 14.72,
    oldPrice: null,
    historicalAveragePrice: 15.6,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2988/2574/files/DiegoBermudez_TotalEclipse_onlinecards_4x_29ea3095-7bad-41a2-9010-b4bfff3be5f2.png?v=1785930347",
    gallery: ["https://cdn.shopify.com/s/files/1/2988/2574/files/DiegoBermudez_TotalEclipse_onlinecards_4x_29ea3095-7bad-41a2-9010-b4bfff3be5f2.png?v=1785930347","https://cdn.shopify.com/s/files/1/2988/2574/files/DiegoBermudez_TotalEclipse_ColombianCoffee.jpg?v=1786028387"],
    shortDesc: "MEET THE PRODUCER | Diego Bermudez needs no introduction in specialty coffee circles. Known for understanding processing in a way that few producers do, there was a time when ...",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Black & White Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Black & White Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://blackwhiteroasters.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Black & White Coffee (Estados Unidos)",
                "price": 14.72,
                "inStock": false,
                "url": "https://blackwhiteroasters.com/products/r-diego-bermudez-total-eclipse",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 15.46,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Black%20%26%20White%20Coffee%20Diego%20Bermudez%20-%20Total%20Eclipse&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "black-white-coffee-lica-torres-black-cherry-natural-instant-coffee",
    slug: "black-white-coffee-lica-torres-black-cherry-natural-instant-coffee",
    name: "Black & White Coffee — Lica Torres Black Cherry Natural - Instant Coffee",
    brand: "Black & White Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 17.02,
    oldPrice: null,
    historicalAveragePrice: 18.04,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2988/2574/files/LicaTorresBlackCHerryNaturalonline_2205_4x_1.png?v=1765828046",
    gallery: ["https://cdn.shopify.com/s/files/1/2988/2574/files/LicaTorresBlackCHerryNaturalonline_2205_4x_1.png?v=1765828046"],
    shortDesc: "SPECIALTY INSTANT COFFEE ORIGIN | Rivas, Brunca, Costa Rica NOTES | cocktail cherry, port wine, white icing, milk chocolate We took some of our favorite single origin coffees ...",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Black & White Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Black & White Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://blackwhiteroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Black & White Coffee (Estados Unidos)",
                "price": 17.02,
                "inStock": true,
                "url": "https://blackwhiteroasters.com/products/lica-torres-black-cherry-natural-instant-coffee",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 17.87,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Black%20%26%20White%20Coffee%20Lica%20Torres%20Black%20Cherry%20Natural%20-%20Instant%20Coffee&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "black-white-coffee-duwancho-full-spectrum",
    slug: "black-white-coffee-duwancho-full-spectrum",
    name: "Black & White Coffee — Duwancho - Full Spectrum",
    brand: "Black & White Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 18.03,
    oldPrice: null,
    historicalAveragePrice: 19.11,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2988/2574/files/DuwanchoFullSPectrum_brewcardonline_4x_bcc73b64-1c9e-4db2-bbbb-a497378b9dc2.png?v=1785344902",
    gallery: ["https://cdn.shopify.com/s/files/1/2988/2574/files/DuwanchoFullSPectrum_brewcardonline_4x_bcc73b64-1c9e-4db2-bbbb-a497378b9dc2.png?v=1785344902"],
    shortDesc: "TAKE A LOOK AROUND | The Arbegona district of Sidama is one of the highest coffee-growing elevations in all of Ethiopia. Here, high altitude and lower temperatures mean that c...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Black & White Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Black & White Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://blackwhiteroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Black & White Coffee (Estados Unidos)",
                "price": 18.03,
                "inStock": true,
                "url": "https://blackwhiteroasters.com/products/w-duwancho-full-spectrum",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 18.93,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Black%20%26%20White%20Coffee%20Duwancho%20-%20Full%20Spectrum&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "black-white-coffee-sebastian-ramirez-red-fruits-decaf",
    slug: "black-white-coffee-sebastian-ramirez-red-fruits-decaf",
    name: "Black & White Coffee — Sebastian Ramirez - Red Fruits Decaf",
    brand: "Black & White Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 25.76,
    oldPrice: null,
    historicalAveragePrice: 27.31,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2988/2574/files/SebastianRamirez_RedFruitsDecaf_online_4x_7e22c4ec-858a-43a3-b9df-976a12fc6ebd.png?v=1786560489",
    gallery: ["https://cdn.shopify.com/s/files/1/2988/2574/files/SebastianRamirez_RedFruitsDecaf_online_4x_7e22c4ec-858a-43a3-b9df-976a12fc6ebd.png?v=1786560489","https://cdn.shopify.com/s/files/1/2988/2574/files/SebastianRamirez_RedFruits_Decaf_coffee.jpg?v=1787584919"],
    shortDesc: "MEET THE PRODUCER | Sebastián Ramírez is a fourth generation coffee producer who started growing coffee more than 13 years ago. Early in his career, he started exploring the n...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Black & White Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Black & White Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://blackwhiteroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Black & White Coffee (Estados Unidos)",
                "price": 25.76,
                "inStock": true,
                "url": "https://blackwhiteroasters.com/products/r-sebastian-ramirez-red-fruits-decaf",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 27.05,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Black%20%26%20White%20Coffee%20Sebastian%20Ramirez%20-%20Red%20Fruits%20Decaf&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "black-white-coffee-diego-bermudez-luna-gesha",
    slug: "black-white-coffee-diego-bermudez-luna-gesha",
    name: "Black & White Coffee — Diego Bermudez - Luna Gesha",
    brand: "Black & White Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 29.44,
    oldPrice: null,
    historicalAveragePrice: 31.21,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2988/2574/files/DiegoBermudezLunaGeshaonlinecard_4x_7ca6dbff-4b47-4296-a248-87eeb7eaae73.png?v=1782929284",
    gallery: ["https://cdn.shopify.com/s/files/1/2988/2574/files/DiegoBermudezLunaGeshaonlinecard_4x_7ca6dbff-4b47-4296-a248-87eeb7eaae73.png?v=1782929284","https://cdn.shopify.com/s/files/1/2988/2574/files/DiegoBermudez_lunaGesha_BlackLabelWhitebackground.jpg?v=1782956278"],
    shortDesc: "MEET THE PRODUCER | Diego Bermudez needs no introduction in specialty coffee circles. Known for understanding processing in a way that few producers do, there was a time when ...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Black & White Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Black & White Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://blackwhiteroasters.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Black & White Coffee (Estados Unidos)",
                "price": 29.44,
                "inStock": false,
                "url": "https://blackwhiteroasters.com/products/r-diego-bermudez-luna-gesha",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 30.91,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Black%20%26%20White%20Coffee%20Diego%20Bermudez%20-%20Luna%20Gesha&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "black-white-coffee-boutet-natural-gesha",
    slug: "black-white-coffee-boutet-natural-gesha",
    name: "Black & White Coffee — Boutet - Natural Gesha",
    brand: "Black & White Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 16.79,
    oldPrice: null,
    historicalAveragePrice: 17.8,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2988/2574/files/BoutetNaturalGesha_onlineCards_4x_7.png?v=1782760198",
    gallery: ["https://cdn.shopify.com/s/files/1/2988/2574/files/BoutetNaturalGesha_onlineCards_4x_7.png?v=1782760198","https://cdn.shopify.com/s/files/1/2988/2574/files/BoutetNaturalGesha_Whitebackground.jpg?v=1779216448"],
    shortDesc: "MEET THE PRODUCER | For four generations and more than a hundred years, La Victoria Estate has been a quiet companion to the Lamastus family’s coffee empire in Boquete, Panama...",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Black & White Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Black & White Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://blackwhiteroasters.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Black & White Coffee (Estados Unidos)",
                "price": 16.79,
                "inStock": false,
                "url": "https://blackwhiteroasters.com/products/r-boutet-natural-gesha",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 17.63,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Black%20%26%20White%20Coffee%20Boutet%20-%20Natural%20Gesha&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "black-white-coffee-sola-als-blend-2026",
    slug: "black-white-coffee-sola-als-blend-2026",
    name: "Black & White Coffee — SOLA: ALS Blend 2026",
    brand: "Black & White Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 15.46,
    oldPrice: null,
    historicalAveragePrice: 16.39,
    isOffer: false,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2988/2574/files/2025_Togetherweendalso_brewcardonline_4x_608d6734-a9f6-4e1d-b57b-3c4f86360ad9.png?v=1786560363",
    gallery: ["https://cdn.shopify.com/s/files/1/2988/2574/files/2025_Togetherweendalso_brewcardonline_4x_608d6734-a9f6-4e1d-b57b-3c4f86360ad9.png?v=1786560363"],
    shortDesc: "MEET THE PRODUCER | TRUST THE PROCESS | TAKE A SIP | ___________________________________________________________________________ Origin | Producer | Farm | Process | Variety |...",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Black & White Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Black & White Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://blackwhiteroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Black & White Coffee (Estados Unidos)",
                "price": 15.46,
                "inStock": true,
                "url": "https://blackwhiteroasters.com/products/w-sola-als-blend-2026",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 16.23,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Black%20%26%20White%20Coffee%20SOLA%3A%20ALS%20Blend%202026&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "black-white-coffee-b-w-milk-glass-mug",
    slug: "black-white-coffee-b-w-milk-glass-mug",
    name: "Black & White Coffee — B&W Milk Glass Mug",
    brand: "Black & White Coffee",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 23,
    oldPrice: null,
    historicalAveragePrice: 24.38,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2988/2574/files/CowboyDesertMilkGlassMug_Groupmix3_white.jpg?v=1786112263",
    gallery: ["https://cdn.shopify.com/s/files/1/2988/2574/files/CowboyDesertMilkGlassMug_Groupmix3_white.jpg?v=1786112263","https://cdn.shopify.com/s/files/1/2988/2574/files/CowboyDesertMilkGlassMug_Side1_white.jpg?v=1786112282","https://cdn.shopify.com/s/files/1/2988/2574/files/CowboyDesertMilkGlassMug_Side2_white.jpg?v=1786112302"],
    shortDesc: "Inspired by our love and admiration for a classic (some may say vintage) milk glass mug. We are so excited to offer these milk glass mugs from our friends at Created Co! Featu...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Black & White Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Black & White Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://blackwhiteroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Black & White Coffee (Estados Unidos)",
                "price": 23,
                "inStock": true,
                "url": "https://blackwhiteroasters.com/products/b-w-milk-glass-mug-cowboy",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 24.15,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Black%20%26%20White%20Coffee%20B%26W%20Milk%20Glass%20Mug&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "black-white-coffee-b-w-cowboy-patch",
    slug: "black-white-coffee-b-w-cowboy-patch",
    name: "Black & White Coffee — B&W Cowboy Patch",
    brand: "Black & White Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2988/2574/files/Cowboypatchesstack_hero_1.jpg?v=1786118562",
    gallery: ["https://cdn.shopify.com/s/files/1/2988/2574/files/Cowboypatchesstack_hero_1.jpg?v=1786118562","https://cdn.shopify.com/s/files/1/2988/2574/files/CowboyPatchonwhite_1.jpg?v=1786118619"],
    shortDesc: "DESCRIPTION | This patch features a western inspired design comes to us from our very own Tayton Mahone ( @swan_ronson_art ). iron on patch woven style patch merrowed border S...",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Black & White Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Black & White Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://blackwhiteroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Black & White Coffee (Estados Unidos)",
                "price": 12,
                "inStock": true,
                "url": "https://blackwhiteroasters.com/products/cowboy-patch",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Black%20%26%20White%20Coffee%20B%26W%20Cowboy%20Patch&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "black-white-coffee-b-w-cowboy-sticker",
    slug: "black-white-coffee-b-w-cowboy-sticker",
    name: "Black & White Coffee — B&W Cowboy Sticker",
    brand: "Black & White Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2988/2574/files/CowboyStickersStack_hero.jpg?v=1786112946",
    gallery: ["https://cdn.shopify.com/s/files/1/2988/2574/files/CowboyStickersStack_hero.jpg?v=1786112946","https://cdn.shopify.com/s/files/1/2988/2574/files/CowboyinthedesertSticker.jpg?v=1786112968"],
    shortDesc: "DESCRIPTION | This sticker features a western inspired design comes to us from our very own Tayton Mahone ( @swan_ronson_art ). SIZE | 2.25\" x 3\"",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Black & White Coffee (Estados Unidos)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Black & White Coffee","País de Origen":"Estados Unidos","Región":"Norteamérica","Tienda Oficial":"https://blackwhiteroasters.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Black & White Coffee (Estados Unidos)",
                "price": 12,
                "inStock": true,
                "url": "https://blackwhiteroasters.com/products/cowboy-sticker",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Black%20%26%20White%20Coffee%20B%26W%20Cowboy%20Sticker&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "kurasu-kyoto-tukumo-dripper-seto-yaki-by-tukumo-japan",
    slug: "kurasu-kyoto-tukumo-dripper-seto-yaki-by-tukumo-japan",
    name: "Kurasu Kyoto — tukumo Dripper “Seto-yaki” by tukumo japan",
    brand: "Kurasu Kyoto",
    category: "accesorios",
    subCategory: "Cafeteras Manuales",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0801/9439/files/0403_tukumodripper_01.jpg?v=1744253135",
    gallery: ["https://cdn.shopify.com/s/files/1/0801/9439/files/0403_tukumodripper_01.jpg?v=1744253135","https://cdn.shopify.com/s/files/1/0801/9439/files/0403_tukumodripper_35.jpg?v=1745987847","https://cdn.shopify.com/s/files/1/0801/9439/files/0403_tukumodripper_05.jpg?v=1745987847","https://cdn.shopify.com/s/files/1/0801/9439/files/0403_tukumodripper_07.jpg?v=1745987847"],
    shortDesc: "The world’s first Seto ware dripper, designed by an ex-barista in Seto, a namesake town of a Japanese word “seto-mono (pottery ware/ceramic ware)”",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Kurasu Kyoto (Japón)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Kurasu Kyoto","País de Origen":"Japón","Región":"Asia / Oceanía","Tienda Oficial":"https://kurasu.kyoto","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Kurasu Kyoto (Japón)",
                "price": 12,
                "inStock": true,
                "url": "https://kurasu.kyoto/products/tukumo-dripper",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Kurasu%20Kyoto%20tukumo%20Dripper%20%E2%80%9CSeto-yaki%E2%80%9D%20by%20tukumo%20japan&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "kurasu-kyoto-torch-mountain-coffee-dripper-kinsai",
    slug: "kurasu-kyoto-torch-mountain-coffee-dripper-kinsai",
    name: "Kurasu Kyoto — TORCH MOUNTAIN COFFEE DRIPPER Kinsai",
    brand: "Kurasu Kyoto",
    category: "accesorios",
    subCategory: "Cafeteras Manuales",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0801/9439/files/0813_touch_14.jpg?v=1787102644",
    gallery: ["https://cdn.shopify.com/s/files/1/0801/9439/files/0813_touch_14.jpg?v=1787102644","https://cdn.shopify.com/s/files/1/0801/9439/files/0813_touch_26.jpg?v=1787102644","https://cdn.shopify.com/s/files/1/0801/9439/files/0813_touch_15.jpg?v=1787102644","https://cdn.shopify.com/s/files/1/0801/9439/files/0813_touch_22.jpg?v=1787102644"],
    shortDesc: "A one-of-a-kind Mountain Dripper, finished with hand-painted near-24k gold by Japanese artisans",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Kurasu Kyoto (Japón)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Kurasu Kyoto","País de Origen":"Japón","Región":"Asia / Oceanía","Tienda Oficial":"https://kurasu.kyoto","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Kurasu Kyoto (Japón)",
                "price": 12,
                "inStock": true,
                "url": "https://kurasu.kyoto/products/torch-mountain-coffee-dripper-kinsai",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Kurasu%20Kyoto%20TORCH%20MOUNTAIN%20COFFEE%20DRIPPER%20Kinsai&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "kurasu-kyoto-colombia-hermides-meneses-light-roast",
    slug: "kurasu-kyoto-colombia-hermides-meneses-light-roast",
    name: "Kurasu Kyoto — Colombia Hermides Meneses[Light roast]",
    brand: "Kurasu Kyoto",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Single_Colombia-Hermides-Meneses-2026.jpg?v=1787109166",
    gallery: ["https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Single_Colombia-Hermides-Meneses-2026.jpg?v=1787109166","https://cdn.shopify.com/s/files/1/0801/9439/files/Colombia_Hermides_Meneses_2026.jpg?v=1787108881","https://cdn.shopify.com/s/files/1/0801/9439/files/Colombia_Hermides_Meneses-100.jpg?v=1787109151","https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Single_Colombia-Hermides-Meneses-2026_set.jpg?v=1787109139"],
    shortDesc: "Floral aroma, taste of blood orange, cherry and red berry, sweet nuts-like sweetness and accompanying aftertaste. Our first roasting day for this coffee: 2026/August /26(Wed) ...",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Kurasu Kyoto (Japón)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Kurasu Kyoto","País de Origen":"Japón","Región":"Asia / Oceanía","Tienda Oficial":"https://kurasu.kyoto","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Kurasu Kyoto (Japón)",
                "price": 12,
                "inStock": true,
                "url": "https://kurasu.kyoto/products/colombia-hermides-meneses-light-roast",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Kurasu%20Kyoto%20Colombia%20Hermides%20Meneses%5BLight%20roast%5D&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "kurasu-kyoto-munieq-tetra-dripper-stainless",
    slug: "kurasu-kyoto-munieq-tetra-dripper-stainless",
    name: "Kurasu Kyoto — Munieq Tetra Dripper Stainless",
    brand: "Kurasu Kyoto",
    category: "accesorios",
    subCategory: "Cafeteras Manuales",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0801/9439/products/Munieq-Tetra-Dripper-Stainless_01_784e9466-9587-453c-902e-b10c7f3e37aa.jpg?v=1742881559",
    gallery: ["https://cdn.shopify.com/s/files/1/0801/9439/products/Munieq-Tetra-Dripper-Stainless_01_784e9466-9587-453c-902e-b10c7f3e37aa.jpg?v=1742881559","https://cdn.shopify.com/s/files/1/0801/9439/products/Munieq-Tetra-Dripper-Stainless_00_74710965-7a91-42d1-a96f-6cb431478aad.jpg?v=1742881559","https://cdn.shopify.com/s/files/1/0801/9439/products/Munieq-Tetra-Dripper-Stainless_02_96ad6e51-28ee-4056-bee2-0b038b7bf3a2.jpg?v=1742881559","https://cdn.shopify.com/s/files/1/0801/9439/products/Munieq-Tetra-Dripper-Stainless_04_5e7b356d-21a3-4346-8b75-5e95b6cc04cf.jpg?v=1742881559"],
    shortDesc: "Simple to assemble anytime, anywhere, the Tetra Drip Pocket Coffee Dripper folds into a stunningly designed drip filter for fresh, top quality coffee when you're far from home...",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Kurasu Kyoto (Japón)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Kurasu Kyoto","País de Origen":"Japón","Región":"Asia / Oceanía","Tienda Oficial":"https://kurasu.kyoto","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Kurasu Kyoto (Japón)",
                "price": 12,
                "inStock": false,
                "url": "https://kurasu.kyoto/products/munieq-tetra-drip",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Kurasu%20Kyoto%20Munieq%20Tetra%20Dripper%20Stainless&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "kurasu-kyoto-hario-alpha-dripper-tritan",
    slug: "kurasu-kyoto-hario-alpha-dripper-tritan",
    name: "Kurasu Kyoto — HARIO ALPHA DRIPPER TRITAN",
    brand: "Kurasu Kyoto",
    category: "accesorios",
    subCategory: "Cafeteras Manuales",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0801/9439/files/0604_ALPHA_3_1.jpg?v=1782795571",
    gallery: ["https://cdn.shopify.com/s/files/1/0801/9439/files/0604_ALPHA_3_1.jpg?v=1782795571","https://cdn.shopify.com/s/files/1/0801/9439/files/0604_ALPHA_16.jpg?v=1786509977","https://cdn.shopify.com/s/files/1/0801/9439/files/0604_ALPHA_1.jpg?v=1786509976","https://cdn.shopify.com/s/files/1/0801/9439/files/0604_ALPHA_14.jpg?v=1786509977"],
    shortDesc: "ALPHA Dripper: a long-awaited, V60 series sensation first released by HARIO Taiwan",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Kurasu Kyoto (Japón)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Kurasu Kyoto","País de Origen":"Japón","Región":"Asia / Oceanía","Tienda Oficial":"https://kurasu.kyoto","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Kurasu Kyoto (Japón)",
                "price": 12,
                "inStock": true,
                "url": "https://kurasu.kyoto/products/hario-alpha-dripper-tritan",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Kurasu%20Kyoto%20HARIO%20ALPHA%20DRIPPER%20TRITAN&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "kurasu-kyoto-hario-v60-dripper-neo",
    slug: "kurasu-kyoto-hario-v60-dripper-neo",
    name: "Kurasu Kyoto — HARIO V60 Dripper NEO",
    brand: "Kurasu Kyoto",
    category: "accesorios",
    subCategory: "Cafeteras Manuales",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0801/9439/files/0618_hario_neo_20.jpg?v=1784701421",
    gallery: ["https://cdn.shopify.com/s/files/1/0801/9439/files/0618_hario_neo_20.jpg?v=1784701421","https://cdn.shopify.com/s/files/1/0801/9439/files/0618_hario_neo_37_1.jpg?v=1784701422","https://cdn.shopify.com/s/files/1/0801/9439/files/0115_harioV60_neo_11.jpg?v=1769651021","https://cdn.shopify.com/s/files/1/0801/9439/files/0115_harioV60_neo_12.jpg?v=1769651021"],
    shortDesc: "Now available in warm amber and crystal clear- brew your way, in the color you love.",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Kurasu Kyoto (Japón)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Kurasu Kyoto","País de Origen":"Japón","Región":"Asia / Oceanía","Tienda Oficial":"https://kurasu.kyoto","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Kurasu Kyoto (Japón)",
                "price": 12,
                "inStock": false,
                "url": "https://kurasu.kyoto/products/hario-v60-dripper-neo",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Kurasu%20Kyoto%20HARIO%20V60%20Dripper%20NEO&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "kurasu-kyoto-hario-v60-titanium-dripper",
    slug: "kurasu-kyoto-hario-v60-titanium-dripper",
    name: "Kurasu Kyoto — HARIO V60 TITANIUM DRIPPER",
    brand: "Kurasu Kyoto",
    category: "accesorios",
    subCategory: "Cafeteras Manuales",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0801/9439/files/0604_Titan_1.jpg?v=1782795824",
    gallery: ["https://cdn.shopify.com/s/files/1/0801/9439/files/0604_Titan_1.jpg?v=1782795824","https://cdn.shopify.com/s/files/1/0801/9439/files/0604_Titan_24.jpg?v=1784102278","https://cdn.shopify.com/s/files/1/0801/9439/files/0604_Titan_6.jpg?v=1784102278","https://cdn.shopify.com/s/files/1/0801/9439/files/0604_Titan_7.jpg?v=1784102278"],
    shortDesc: "Great Coffee, Anytime, Anywhere. Introducing a lightweight, highly durable titanium dripper. Built for the outdoors, it helps you make every outdoor brew a great one.",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Kurasu Kyoto (Japón)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Kurasu Kyoto","País de Origen":"Japón","Región":"Asia / Oceanía","Tienda Oficial":"https://kurasu.kyoto","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Kurasu Kyoto (Japón)",
                "price": 12,
                "inStock": true,
                "url": "https://kurasu.kyoto/products/hario-v60-titan-dripper",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Kurasu%20Kyoto%20HARIO%20V60%20TITANIUM%20DRIPPER&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "kurasu-kyoto-zebrang-coffee-mill-stainless-cutter",
    slug: "kurasu-kyoto-zebrang-coffee-mill-stainless-cutter",
    name: "Kurasu Kyoto — Zebrang Coffee Mill Stainless Cutter",
    brand: "Kurasu Kyoto",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0801/9439/files/0604_zebra_23.jpg?v=1784100626",
    gallery: ["https://cdn.shopify.com/s/files/1/0801/9439/files/0604_zebra_23.jpg?v=1784100626","https://cdn.shopify.com/s/files/1/0801/9439/files/0604_zebra_1.jpg?v=1784100626","https://cdn.shopify.com/s/files/1/0801/9439/files/0604_zebra_22.jpg?v=1784100626","https://cdn.shopify.com/s/files/1/0801/9439/files/0604_zebra_27_1.jpg?v=1784100626"],
    shortDesc: "Enjoy a great brew anytime, anywhere- a new, outdoor-perfect hand grinder by Hario’s Zebrang series",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Kurasu Kyoto (Japón)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Kurasu Kyoto","País de Origen":"Japón","Región":"Asia / Oceanía","Tienda Oficial":"https://kurasu.kyoto","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Kurasu Kyoto (Japón)",
                "price": 12,
                "inStock": true,
                "url": "https://kurasu.kyoto/products/hario-zebrang-coffee-mill-stainless-cutter",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Kurasu%20Kyoto%20Zebrang%20Coffee%20Mill%20Stainless%20Cutter&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "kurasu-kyoto-seasonal-blend-natsu-ake-2026-medium-roast",
    slug: "kurasu-kyoto-seasonal-blend-natsu-ake-2026-medium-roast",
    name: "Kurasu Kyoto — Seasonal Blend Natsu Ake 2026 [Medium roast]",
    brand: "Kurasu Kyoto",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Blend-Natsu-Ake_2026.jpg?v=1784089934",
    gallery: ["https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Blend-Natsu-Ake_2026.jpg?v=1784089934","https://cdn.shopify.com/s/files/1/0801/9439/files/NatsuAke2026-100.jpg?v=1784089904","https://cdn.shopify.com/s/files/1/0801/9439/files/NatsuAke2026-100_1.jpg?v=1784089959","https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Blend-Natsu-Ake_2026_en.jpg?v=1784089971"],
    shortDesc: "Floral aroma, taste of red berry, mandarin orange and nectarine, caramel-like sweetness and accompanying aftertaste. Our first roasting day for this coffee: 2026/July /21(The)...",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Kurasu Kyoto (Japón)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Kurasu Kyoto","País de Origen":"Japón","Región":"Asia / Oceanía","Tienda Oficial":"https://kurasu.kyoto","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Kurasu Kyoto (Japón)",
                "price": 12,
                "inStock": true,
                "url": "https://kurasu.kyoto/products/seasonal-blend-natsu-ake-2026-medium-roast",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Kurasu%20Kyoto%20Seasonal%20Blend%20Natsu%20Ake%202026%20%5BMedium%20roast%5D&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "kurasu-kyoto-cold-brewnatsu-ake-2026-medium-roast",
    slug: "kurasu-kyoto-cold-brewnatsu-ake-2026-medium-roast",
    name: "Kurasu Kyoto — Cold BrewNatsu Ake 2026 [Medium Roast]",
    brand: "Kurasu Kyoto",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Blend-Natsu-Ake-2026-coldbrew.jpg?v=1784093248",
    gallery: ["https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Blend-Natsu-Ake-2026-coldbrew.jpg?v=1784093248","https://cdn.shopify.com/s/files/1/0801/9439/files/NatsuAke2026-100_5780b186-70d9-404e-8d74-5c9489fecf59.jpg?v=1784091646","https://cdn.shopify.com/s/files/1/0801/9439/files/NatsuAke2026-100_1_f42f9f8f-84da-4e83-a889-5e05686184cc.jpg?v=1784093263","https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Blend-Natsu-Ake-2026-coldbrew_set.jpg?v=1784093274"],
    shortDesc: "Floral aroma, taste of red berry, mandarin orange and nectarine, caramel-like sweetness and accompanying aftertaste. *We are renewing the package. Please kindly note that you ...",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Kurasu Kyoto (Japón)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Kurasu Kyoto","País de Origen":"Japón","Región":"Asia / Oceanía","Tienda Oficial":"https://kurasu.kyoto","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Kurasu Kyoto (Japón)",
                "price": 12,
                "inStock": true,
                "url": "https://kurasu.kyoto/products/cold-brewnatsu-ake-2026-medium-roast",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Kurasu%20Kyoto%20Cold%20BrewNatsu%20Ake%202026%20%5BMedium%20Roast%5D&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "kurasu-kyoto-39arita-double-wall-cup",
    slug: "kurasu-kyoto-39arita-double-wall-cup",
    name: "Kurasu Kyoto — 39Arita Double Wall Cup",
    brand: "Kurasu Kyoto",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0801/9439/files/0108_39arita_26.jpg?v=1769409896",
    gallery: ["https://cdn.shopify.com/s/files/1/0801/9439/files/0108_39arita_26.jpg?v=1769409896","https://cdn.shopify.com/s/files/1/0801/9439/files/L1680543.jpg?v=1769409896","https://cdn.shopify.com/s/files/1/0801/9439/files/0108_39arita_2.jpg?v=1769409896","https://cdn.shopify.com/s/files/1/0801/9439/files/0108_39arita_38.jpg?v=1769409896"],
    shortDesc: "A perfectly-sized cup for enjoying latte and pourover A ceramic double-wall cup made with an art of Arita-yaki pottery making technique that dates back over 400 years, to Edo ...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Kurasu Kyoto (Japón)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Kurasu Kyoto","País de Origen":"Japón","Región":"Asia / Oceanía","Tienda Oficial":"https://kurasu.kyoto","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Kurasu Kyoto (Japón)",
                "price": 12,
                "inStock": false,
                "url": "https://kurasu.kyoto/products/39arita-double-wall-cup",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Kurasu%20Kyoto%2039Arita%20Double%20Wall%20Cup&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "kurasu-kyoto-39-arita-mug",
    slug: "kurasu-kyoto-39-arita-mug",
    name: "Kurasu Kyoto — 39 Arita Mug",
    brand: "Kurasu Kyoto",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0801/9439/files/0108_39arita_27.jpg?v=1769409296",
    gallery: ["https://cdn.shopify.com/s/files/1/0801/9439/files/0108_39arita_27.jpg?v=1769409296","https://cdn.shopify.com/s/files/1/0801/9439/files/0108_39arita_28.jpg?v=1769409296","https://cdn.shopify.com/s/files/1/0801/9439/files/0122_39arita_mug_2.jpg?v=1769409296","https://cdn.shopify.com/s/files/1/0801/9439/files/0122_39arita_mug_3.jpg?v=1769409296"],
    shortDesc: "A big-sized mug perfect for enjoying great aroma and smooth mouthfeel Traditional Arita-yaki ceramic ware comes in 6 beautiful classic colors. The glazing of each mug expresse...",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Kurasu Kyoto (Japón)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Kurasu Kyoto","País de Origen":"Japón","Región":"Asia / Oceanía","Tienda Oficial":"https://kurasu.kyoto","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Kurasu Kyoto (Japón)",
                "price": 12,
                "inStock": true,
                "url": "https://kurasu.kyoto/products/39-arita-mug",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Kurasu%20Kyoto%2039%20Arita%20Mug&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "kurasu-kyoto-2-way-matcha-whisk-stand-by-origami",
    slug: "kurasu-kyoto-2-way-matcha-whisk-stand-by-origami",
    name: "Kurasu Kyoto — 2-Way Matcha Whisk Stand by ORIGAMI",
    brand: "Kurasu Kyoto",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0801/9439/files/L1530170.jpg?v=1742881219",
    gallery: ["https://cdn.shopify.com/s/files/1/0801/9439/files/L1530170.jpg?v=1742881219","https://cdn.shopify.com/s/files/1/0801/9439/files/0125_origami_chasentate_06.jpg?v=1746687089","https://cdn.shopify.com/s/files/1/0801/9439/files/L1540065.jpg?v=1746687089","https://cdn.shopify.com/s/files/1/0801/9439/files/L1530169.jpg?v=1746687089"],
    shortDesc: "Tea Lover's Essential: Chasen Tea Whisk Stand As you use Chasen you may notice that it slowly starts to deform- the curved and evenly spread whisk starts to close off, or warp...",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Kurasu Kyoto (Japón)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Kurasu Kyoto","País de Origen":"Japón","Región":"Asia / Oceanía","Tienda Oficial":"https://kurasu.kyoto","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Kurasu Kyoto (Japón)",
                "price": 12,
                "inStock": true,
                "url": "https://kurasu.kyoto/products/matcha-whisk-stand-by-origami",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Kurasu%20Kyoto%202-Way%20Matcha%20Whisk%20Stand%20by%20ORIGAMI&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "kurasu-kyoto-coffee-measure-spoon-by-ishii-koji-walnut-wood",
    slug: "kurasu-kyoto-coffee-measure-spoon-by-ishii-koji-walnut-wood",
    name: "Kurasu Kyoto — Coffee Measure Spoon by Ishii Koji [Walnut wood]",
    brand: "Kurasu Kyoto",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0801/9439/files/1212_ishii.jpg?v=1742881087",
    gallery: ["https://cdn.shopify.com/s/files/1/0801/9439/files/1212_ishii.jpg?v=1742881087","https://cdn.shopify.com/s/files/1/0801/9439/files/1212_ishii_9.jpg?v=1742881087","https://cdn.shopify.com/s/files/1/0801/9439/files/1212_ishii_2.jpg?v=1742881087","https://cdn.shopify.com/s/files/1/0801/9439/files/1212_ishii_3.jpg?v=1742881087"],
    shortDesc: "Much-loved long seller, wooden coffee measuring spoon handmade by Koji Ishii, an artisan woodworker",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Kurasu Kyoto (Japón)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Kurasu Kyoto","País de Origen":"Japón","Región":"Asia / Oceanía","Tienda Oficial":"https://kurasu.kyoto","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Kurasu Kyoto (Japón)",
                "price": 12,
                "inStock": true,
                "url": "https://kurasu.kyoto/products/coffee-measure-spoon-by-ishii-koji-walnut-wood",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Kurasu%20Kyoto%20Coffee%20Measure%20Spoon%20by%20Ishii%20Koji%20%5BWalnut%20wood%5D&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "kurasu-kyoto-colombia-nestor-lasso-medium-light-roast",
    slug: "kurasu-kyoto-colombia-nestor-lasso-medium-light-roast",
    name: "Kurasu Kyoto — Colombia Nestor Lasso[Medium-light roast]",
    brand: "Kurasu Kyoto",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Single_Colombia-Nestor-Lasso-202607.jpg?v=1782373003",
    gallery: ["https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Single_Colombia-Nestor-Lasso-202607.jpg?v=1782373003","https://cdn.shopify.com/s/files/1/0801/9439/files/Colombia_Nestor_Lasso_202607-100.jpg?v=1782372956","https://cdn.shopify.com/s/files/1/0801/9439/files/Colombia_Nestor_Lasso-100.jpg?v=1782373017","https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Single_Colombia-Nestor-Lasso-202607_en.jpg?v=1782373028"],
    shortDesc: "Sweet aroma, taste of passion fruit, pineapple and lemon verbena, strawberry jam-like sweetness and accompanying aftertaste. Our first roasting day for this coffee: 2026/July/...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Kurasu Kyoto (Japón)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Kurasu Kyoto","País de Origen":"Japón","Región":"Asia / Oceanía","Tienda Oficial":"https://kurasu.kyoto","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Kurasu Kyoto (Japón)",
                "price": 12,
                "inStock": true,
                "url": "https://kurasu.kyoto/products/colombia-nestor-lassomedium-light-roast",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Kurasu%20Kyoto%20Colombia%20Nestor%20Lasso%5BMedium-light%20roast%5D&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "kurasu-kyoto-premium-colombia-oscar-hernandez-bourbon-pimienta-light-roast",
    slug: "kurasu-kyoto-premium-colombia-oscar-hernandez-bourbon-pimienta-light-roast",
    name: "Kurasu Kyoto — [Premium]Colombia Oscar Hernandez Bourbon Pimienta[Light roast]",
    brand: "Kurasu Kyoto",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Premium-Colombia-Oscar-Hernandez-2026.jpg?v=1781072256",
    gallery: ["https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Premium-Colombia-Oscar-Hernandez-2026.jpg?v=1781072256","https://cdn.shopify.com/s/files/1/0801/9439/files/Premium_Colombia_Oscar_Hernandez_2026-100_1.jpg?v=1781071703","https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Premium-Colombia-Oscar-Hernandez-2026_en.jpg?v=1781072304","https://cdn.shopify.com/s/files/1/0801/9439/files/ColombiaOscarHernandezBourbonPimienta2026-100_1.jpg?v=1781072273"],
    shortDesc: "Floral aroma, taste of pineapple, strawberry and pear, yogurt-like lactic sweetness and accompanying aftertaste. Our first roasting day for this coffee: 2026/June/17(Wed ) *Pl...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Kurasu Kyoto (Japón)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Kurasu Kyoto","País de Origen":"Japón","Región":"Asia / Oceanía","Tienda Oficial":"https://kurasu.kyoto","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Kurasu Kyoto (Japón)",
                "price": 12,
                "inStock": false,
                "url": "https://kurasu.kyoto/products/premium-colombia-oscar-hernandez-bourbon-pimienta-light-roast",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Kurasu%20Kyoto%20%5BPremium%5DColombia%20Oscar%20Hernandez%20Bourbon%20Pimienta%5BLight%20roast%5D&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "kurasu-kyoto-cold-brew-fairfield-dark-dark-roast",
    slug: "kurasu-kyoto-cold-brew-fairfield-dark-dark-roast",
    name: "Kurasu Kyoto — Cold Brew Fairfield Dark [Dark Roast]",
    brand: "Kurasu Kyoto",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Fairfield-Dark-coldbrew.jpg?v=1779932788",
    gallery: ["https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Fairfield-Dark-coldbrew.jpg?v=1779932788","https://cdn.shopify.com/s/files/1/0801/9439/files/FairfieldDark_701f9d76-5d3c-4a30-a750-2a4552014f0e.jpg?v=1779857158","https://cdn.shopify.com/s/files/1/0801/9439/files/FairfieldDark-100_dc99232e-f466-4136-b873-c1299e5033c0.jpg?v=1779857186","https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Fairfield-Dark-coldbrew_set.jpg?v=1779932801"],
    shortDesc: "Rich dark chocolate and subtle baked apple. For your everyday coffee. *We are renewing the package. Please kindly note that you may receive our new package, or vice versa. Che...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Kurasu Kyoto (Japón)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Kurasu Kyoto","País de Origen":"Japón","Región":"Asia / Oceanía","Tienda Oficial":"https://kurasu.kyoto","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Kurasu Kyoto (Japón)",
                "price": 12,
                "inStock": true,
                "url": "https://kurasu.kyoto/products/cold-brew-fairfield-dark-dark-roast",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Kurasu%20Kyoto%20Cold%20Brew%20Fairfield%20Dark%20%5BDark%20Roast%5D&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "kurasu-kyoto-rwanda-mbilima-soil-project-lot-0704-light-roast",
    slug: "kurasu-kyoto-rwanda-mbilima-soil-project-lot-0704-light-roast",
    name: "Kurasu Kyoto — Rwanda Mbilima Soil Project Lot.0704[Light roast]",
    brand: "Kurasu Kyoto",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Single_Rwanda-Mbilima-Soil-Project-Lot.0704-2026.jpg?v=1779845863",
    gallery: ["https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Single_Rwanda-Mbilima-Soil-Project-Lot.0704-2026.jpg?v=1779845863","https://cdn.shopify.com/s/files/1/0801/9439/files/Rwanda_Mbilima_Soil_Project_Lot.0704_c0e74251-24ac-4cf6-b6d2-2b0425d4afce.jpg?v=1779845833","https://cdn.shopify.com/s/files/1/0801/9439/files/Rwanda_Mbilima_Soil_Project_Lot.0704-100_1.jpg?v=1779845876","https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Single_Rwanda-Mbilima-Soil-Project-Lot.0704-2026_en_1.jpg?v=1779845889"],
    shortDesc: "Floral aroma, taste of red apple, mandarin orange and assam tea, Honey-like sweetness and accompanying aftertaste. Our first roasting day for this coffee: 2026/ June/3(Wed ) *...",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Kurasu Kyoto (Japón)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Kurasu Kyoto","País de Origen":"Japón","Región":"Asia / Oceanía","Tienda Oficial":"https://kurasu.kyoto","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Kurasu Kyoto (Japón)",
                "price": 12,
                "inStock": true,
                "url": "https://kurasu.kyoto/products/rwanda-mbilima-soil-project-lot-0704light-roast",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Kurasu%20Kyoto%20Rwanda%20Mbilima%20Soil%20Project%20Lot.0704%5BLight%20roast%5D&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "kurasu-kyoto-kenya-gatomboya-ab-light-roast",
    slug: "kurasu-kyoto-kenya-gatomboya-ab-light-roast",
    name: "Kurasu Kyoto — Kenya Gatomboya AB [Light roast]",
    brand: "Kurasu Kyoto",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Single_Kenya-Gatomboya-AB-2026.jpg?v=1779850609",
    gallery: ["https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Single_Kenya-Gatomboya-AB-2026.jpg?v=1779850609","https://cdn.shopify.com/s/files/1/0801/9439/files/Kenya_Gatomboya_AB.jpg?v=1779850589","https://cdn.shopify.com/s/files/1/0801/9439/files/Kenya_Gatomboya_AB-100.jpg?v=1779850620","https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Single_Kenya-Gatomboya-AB-2026_en.jpg?v=1779850631"],
    shortDesc: "Floral aroma, taste of grapefruit, red currant and black tea, cane sugar-like sweetness and accompanying aftertaste. Our first roasting day for this coffee: 2026/ June/3(Wed )...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Kurasu Kyoto (Japón)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Kurasu Kyoto","País de Origen":"Japón","Región":"Asia / Oceanía","Tienda Oficial":"https://kurasu.kyoto","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Kurasu Kyoto (Japón)",
                "price": 12,
                "inStock": true,
                "url": "https://kurasu.kyoto/products/kenya-gatomboya-ab-light-roast",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Kurasu%20Kyoto%20Kenya%20Gatomboya%20AB%20%5BLight%20roast%5D&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "kurasu-kyoto-kurasu-drip-coffee-bag-rwanda-mbilima-soil-project-lot-0704-light-roast",
    slug: "kurasu-kyoto-kurasu-drip-coffee-bag-rwanda-mbilima-soil-project-lot-0704-light-roast",
    name: "Kurasu Kyoto — Kurasu Drip Coffee Bag - Rwanda Mbilima Soil Project Lot.0704 [Light roast]",
    brand: "Kurasu Kyoto",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Drip-Bag_Rwanda-Mbilima-Soil-Project-2026.jpg?v=1779252374",
    gallery: ["https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Drip-Bag_Rwanda-Mbilima-Soil-Project-2026.jpg?v=1779252374","https://cdn.shopify.com/s/files/1/0801/9439/files/Rwanda_Mbilima_Soil_Project_Lot.0704.jpg?v=1779252253","https://cdn.shopify.com/s/files/1/0801/9439/files/Rwanda_Mbilima_Soil_Project_Lot.0704-100.jpg?v=1779252306"],
    shortDesc: "Floral aroma, taste of red apple, mandarin orange and assam tea, Honey-like sweetness and accompanying aftertaste. *12gr of ground coffee brews approximately 180ml of coffee. ...",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Kurasu Kyoto (Japón)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Kurasu Kyoto","País de Origen":"Japón","Región":"Asia / Oceanía","Tienda Oficial":"https://kurasu.kyoto","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Kurasu Kyoto (Japón)",
                "price": 12,
                "inStock": false,
                "url": "https://kurasu.kyoto/products/kurasu-drip-coffee-bag-rwanda-mbilima-soil-project-lot-0704-light-roast",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Kurasu%20Kyoto%20Kurasu%20Drip%20Coffee%20Bag%20-%20Rwanda%20Mbilima%20Soil%20Project%20Lot.0704%20%5BLight%20roast%5D&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "kurasu-kyoto-kurasu-drip-coffee-bag-indonesia-frinsa-estate-weninggalih-light-roast",
    slug: "kurasu-kyoto-kurasu-drip-coffee-bag-indonesia-frinsa-estate-weninggalih-light-roast",
    name: "Kurasu Kyoto — Kurasu Drip Coffee Bag - Indonesia Frinsa Estate Weninggalih [Light roast]",
    brand: "Kurasu Kyoto",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Drip-Bag_Indonesia-Frinsa-Estate-Weninggalih.jpg?v=1779252798",
    gallery: ["https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Drip-Bag_Indonesia-Frinsa-Estate-Weninggalih.jpg?v=1779252798"],
    shortDesc: "Floral aroma, taste of plum, Chinese tea and cashew nuts, dried mango-like sweetness and accompanying aftertaste. Read the blog here： Indonesia Origin Trip 2025 *12gr of groun...",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Kurasu Kyoto (Japón)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Kurasu Kyoto","País de Origen":"Japón","Región":"Asia / Oceanía","Tienda Oficial":"https://kurasu.kyoto","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Kurasu Kyoto (Japón)",
                "price": 12,
                "inStock": false,
                "url": "https://kurasu.kyoto/products/kurasu-drip-coffee-bag-indonesia-frinsa-estate-weninggalih-light-roast",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Kurasu%20Kyoto%20Kurasu%20Drip%20Coffee%20Bag%20-%20Indonesia%20Frinsa%20Estate%20Weninggalih%20%5BLight%20roast%5D&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "kurasu-kyoto-fairfield-medium-medium-roast",
    slug: "kurasu-kyoto-fairfield-medium-medium-roast",
    name: "Kurasu Kyoto — Fairfield Medium [Medium Roast]",
    brand: "Kurasu Kyoto",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Single_Fairfield-Medium.jpg?v=1779256203",
    gallery: ["https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Single_Fairfield-Medium.jpg?v=1779256203","https://cdn.shopify.com/s/files/1/0801/9439/files/FairfieldMedium.jpg?v=1779255919","https://cdn.shopify.com/s/files/1/0801/9439/files/FairfieldMedium-100.jpg?v=1779256216","https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Single_Fairfield-Medium_set.jpg?v=1779256231"],
    shortDesc: "Rich caramel-like sweetness and taste of cherry candy. For your everyday coffee. Our first roasting day for this coffee: 2026/May /27(Wed ) *Please kindly note that any order ...",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Kurasu Kyoto (Japón)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Kurasu Kyoto","País de Origen":"Japón","Región":"Asia / Oceanía","Tienda Oficial":"https://kurasu.kyoto","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Kurasu Kyoto (Japón)",
                "price": 12,
                "inStock": true,
                "url": "https://kurasu.kyoto/products/fairfield-medium-medium-roast",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Kurasu%20Kyoto%20Fairfield%20Medium%20%5BMedium%20Roast%5D&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "kurasu-kyoto-fairfield-dark-dark-roast",
    slug: "kurasu-kyoto-fairfield-dark-dark-roast",
    name: "Kurasu Kyoto — Fairfield Dark [Dark Roast]",
    brand: "Kurasu Kyoto",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Single_Fairfield-Dark.jpg?v=1779257290",
    gallery: ["https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Single_Fairfield-Dark.jpg?v=1779257290","https://cdn.shopify.com/s/files/1/0801/9439/files/FairfieldDark.jpg?v=1779257216","https://cdn.shopify.com/s/files/1/0801/9439/files/FairfieldDark-100.jpg?v=1779257310","https://cdn.shopify.com/s/files/1/0801/9439/files/image_Beans_Single_Fairfield-Dark_set.jpg?v=1779257322"],
    shortDesc: "Rich dark chocolate and subtle baked apple. For your everyday coffee. Our first roasting day for this coffee: 2026/May /27(Wed ) *Please kindly note that any order that includ...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Kurasu Kyoto (Japón)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Kurasu Kyoto","País de Origen":"Japón","Región":"Asia / Oceanía","Tienda Oficial":"https://kurasu.kyoto","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Kurasu Kyoto (Japón)",
                "price": 12,
                "inStock": true,
                "url": "https://kurasu.kyoto/products/fairfield-dark-dark-roast",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Kurasu%20Kyoto%20Fairfield%20Dark%20%5BDark%20Roast%5D&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "kurasu-kyoto-kurasu-mates-kyoto-stand-move-mug-white",
    slug: "kurasu-kyoto-kurasu-mates-kyoto-stand-move-mug-white",
    name: "Kurasu Kyoto — Kurasu Mates Kyoto Stand Move Mug White",
    brand: "Kurasu Kyoto",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0801/9439/files/L1510781.jpg?v=1778723258",
    gallery: ["https://cdn.shopify.com/s/files/1/0801/9439/files/L1510781.jpg?v=1778723258","https://cdn.shopify.com/s/files/1/0801/9439/files/L15108631.jpg?v=1778723284","https://cdn.shopify.com/s/files/1/0801/9439/files/L1510778.jpg?v=1778723270","https://cdn.shopify.com/s/files/1/0801/9439/files/1030_fellow__95.jpg?v=1778726481"],
    shortDesc: "Our uber-popular Kurasu Kyoto stand’s 7th Anniversary original design is back!",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Kurasu Kyoto (Japón)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Kurasu Kyoto","País de Origen":"Japón","Región":"Asia / Oceanía","Tienda Oficial":"https://kurasu.kyoto","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Kurasu Kyoto (Japón)",
                "price": 12,
                "inStock": true,
                "url": "https://kurasu.kyoto/products/kurasu-mates-kyoto-stand-move-mug-white",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Kurasu%20Kyoto%20Kurasu%20Mates%20Kyoto%20Stand%20Move%20Mug%20White&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "kurasu-kyoto-matcha-kurasu-blend-with-sugar",
    slug: "kurasu-kyoto-matcha-kurasu-blend-with-sugar",
    name: "Kurasu Kyoto — Matcha Kurasu Blend (With Sugar)",
    brand: "Kurasu Kyoto",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 12,
    oldPrice: null,
    historicalAveragePrice: 12.72,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0801/9439/files/0627_maccha_3.jpg?v=1742881167",
    gallery: ["https://cdn.shopify.com/s/files/1/0801/9439/files/0627_maccha_3.jpg?v=1742881167","https://cdn.shopify.com/s/files/1/0801/9439/files/0508_matcha_061.jpg?v=1757578995","https://cdn.shopify.com/s/files/1/0801/9439/files/0627_maccha_7.jpg?v=1757578995","https://cdn.shopify.com/s/files/1/0801/9439/files/0627_maccha_16.jpg?v=1757578995"],
    shortDesc: "Just Add Water or Milk to Enjoy an Authentic, Kyoto Cafe Style Matcha Drink with Full and Rich Umami, Flavor and Aroma Our original blend of ceremonial grade matcha are all fa...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Kurasu Kyoto (Japón)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Kurasu Kyoto","País de Origen":"Japón","Región":"Asia / Oceanía","Tienda Oficial":"https://kurasu.kyoto","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Kurasu Kyoto (Japón)",
                "price": 12,
                "inStock": true,
                "url": "https://kurasu.kyoto/products/gl-matcha-kurasu-blend-with-sugar",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.6,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Kurasu%20Kyoto%20Matcha%20Kurasu%20Blend%20(With%20Sugar)&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "proud-mary-coffee-limited-pmc-milk-glass",
    slug: "proud-mary-coffee-limited-pmc-milk-glass",
    name: "Proud Mary Coffee — LIMITED | PMC Milk Glass",
    brand: "Proud Mary Coffee",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 11.97,
    oldPrice: null,
    historicalAveragePrice: 12.69,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/1939/4095/files/JadeMilkGlass_Left.jpg?v=1782708443",
    gallery: ["https://cdn.shopify.com/s/files/1/1939/4095/files/JadeMilkGlass_Left.jpg?v=1782708443"],
    shortDesc: "A PMC nod to mid-century design smooth, luminous, and built to last. Stackable and durable, vintage-inspired yet made for modern rituals. Details: 8oz size Thick, luminous gla...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Proud Mary Coffee (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Proud Mary Coffee","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://proudmarycoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Proud Mary Coffee (Australia)",
                "price": 11.97,
                "inStock": true,
                "url": "https://proudmarycoffee.com/products/limited-pmc-milk-glass",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.57,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Proud%20Mary%20Coffee%20LIMITED%20%7C%20PMC%20Milk%20Glass&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "proud-mary-coffee-limited-pmc-socks",
    slug: "proud-mary-coffee-limited-pmc-socks",
    name: "Proud Mary Coffee — LIMITED | PMC Socks",
    brand: "Proud Mary Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 10.77,
    oldPrice: null,
    historicalAveragePrice: 11.42,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/1939/4095/files/Untitled-04August2026at14.15.21_2.png?v=1785817571",
    gallery: ["https://cdn.shopify.com/s/files/1/1939/4095/files/Untitled-04August2026at14.15.21_2.png?v=1785817571"],
    shortDesc: "An everyday essential with unmistakable PMC character. Featuring our signature Eye print on a soft cotton blend, these socks bring comfort, colour and a subtle nod to the deta...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Proud Mary Coffee (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Proud Mary Coffee","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://proudmarycoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Proud Mary Coffee (Australia)",
                "price": 10.77,
                "inStock": true,
                "url": "https://proudmarycoffee.com/products/limited-pmc-socks",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 11.31,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Proud%20Mary%20Coffee%20LIMITED%20%7C%20PMC%20Socks&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "proud-mary-coffee-costa-rica-cerro-san-luis-finca-espiritu-san-luis-sl28-anaerobic-honey",
    slug: "proud-mary-coffee-costa-rica-cerro-san-luis-finca-espiritu-san-luis-sl28-anaerobic-honey",
    name: "Proud Mary Coffee — COSTA RICA | Cerro San Luis - Finca Espíritu San Luis | SL28 | Anaerobic Honey",
    brand: "Proud Mary Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 16.77,
    oldPrice: null,
    historicalAveragePrice: 17.78,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/1939/4095/files/CST_Cerro_San_Luis_-_Finca_Espiritu_San_Luis_2026_SL28_Anaerobic_Honey.png?v=1786048872",
    gallery: ["https://cdn.shopify.com/s/files/1/1939/4095/files/CST_Cerro_San_Luis_-_Finca_Espiritu_San_Luis_2026_SL28_Anaerobic_Honey.png?v=1786048872","https://cdn.shopify.com/s/files/1/1939/4095/files/USA_CSTCerroSanLuis-FincaEspirituSanLuis_2026_SL28AnaerobicHoney.png?v=1786048414"],
    shortDesc: "In Costa Rica's West Valley, elevations climb from 1,200 all the way to 1,900 meters above sea level, and it's at the upper edge of that range that Finca Espíritu San Luis gro...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Proud Mary Coffee (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Proud Mary Coffee","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://proudmarycoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Proud Mary Coffee (Australia)",
                "price": 16.77,
                "inStock": false,
                "url": "https://proudmarycoffee.com/products/costa-rica-cerro-san-luis-finca-espiritu-san-luis-sl28-anaerobic-honey-2026",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 17.61,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Proud%20Mary%20Coffee%20COSTA%20RICA%20%7C%20Cerro%20San%20Luis%20-%20Finca%20Esp%C3%ADritu%20San%20Luis%20%7C%20SL28%20%7C%20Anaerobic%20Honey&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "proud-mary-coffee-costa-rica-las-lajas-finca-san-isidro-caturra-catuai-natural",
    slug: "proud-mary-coffee-costa-rica-las-lajas-finca-san-isidro-caturra-catuai-natural",
    name: "Proud Mary Coffee — COSTA RICA | Las Lajas - Finca San Isidro | Caturra & Catuai | Natural",
    brand: "Proud Mary Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 16.77,
    oldPrice: null,
    historicalAveragePrice: 17.78,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/1939/4095/files/CST_Las_Lajas_-_Finca_San_Isidro_2026_Caturra_Catuai_Natural.png?v=1786048922",
    gallery: ["https://cdn.shopify.com/s/files/1/1939/4095/files/CST_Las_Lajas_-_Finca_San_Isidro_2026_Caturra_Catuai_Natural.png?v=1786048922","https://cdn.shopify.com/s/files/1/1939/4095/files/USA_CSTLasLajas-FincaSanIsidro_2026_Caturra_CatuaiNatural.png?v=1786048564"],
    shortDesc: "Just up the road from Finca La Julia, in the same Sabanilla de Alajuela hills, Finca San Isidro grows a mix of Catuai , Caturra , and San Isidro that the Las Lajas team puts t...",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Proud Mary Coffee (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Proud Mary Coffee","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://proudmarycoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Proud Mary Coffee (Australia)",
                "price": 16.77,
                "inStock": false,
                "url": "https://proudmarycoffee.com/products/costa-rica-las-lajas-finca-san-isidro-caturra-catuai-natural-2026",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 17.61,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Proud%20Mary%20Coffee%20COSTA%20RICA%20%7C%20Las%20Lajas%20-%20Finca%20San%20Isidro%20%7C%20Caturra%20%26%20Catuai%20%7C%20Natural&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "proud-mary-coffee-costa-rica-las-lajas-finca-la-julia-san-isidro-black-honey",
    slug: "proud-mary-coffee-costa-rica-las-lajas-finca-la-julia-san-isidro-black-honey",
    name: "Proud Mary Coffee — COSTA RICA | Las Lajas - Finca La Julia | San Isidro | Black Honey",
    brand: "Proud Mary Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 16.17,
    oldPrice: null,
    historicalAveragePrice: 17.14,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/1939/4095/files/CST_Las_Lajas_-_Finca_La_Julia_2026_San_Isidro_Black_Honey.png?v=1786048900",
    gallery: ["https://cdn.shopify.com/s/files/1/1939/4095/files/CST_Las_Lajas_-_Finca_La_Julia_2026_San_Isidro_Black_Honey.png?v=1786048900","https://cdn.shopify.com/s/files/1/1939/4095/files/USA_CSTLasLajas-FincaLaJulia_2026_SanIsidroBlackHoney.png?v=1786048452"],
    shortDesc: "High in the Central Valley of Costa Rica, the Sabanilla de Alajuela hills hold some of the country's most closely watched micromills , and Las Lajas is one of the sharpest. At...",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Proud Mary Coffee (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Proud Mary Coffee","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://proudmarycoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Proud Mary Coffee (Australia)",
                "price": 16.17,
                "inStock": false,
                "url": "https://proudmarycoffee.com/products/costa-rica-las-lajas-finca-la-julia-san-isidro-black-honey-2026",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 16.98,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Proud%20Mary%20Coffee%20COSTA%20RICA%20%7C%20Las%20Lajas%20-%20Finca%20La%20Julia%20%7C%20San%20Isidro%20%7C%20Black%20Honey&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "proud-mary-coffee-kenya-ruarai-aa-ruiru-11-sl28-washed",
    slug: "proud-mary-coffee-kenya-ruarai-aa-ruiru-11-sl28-washed",
    name: "Proud Mary Coffee — KENYA Ruarai AA | Ruiru 11 & SL28 | Washed",
    brand: "Proud Mary Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 13.17,
    oldPrice: null,
    historicalAveragePrice: 13.96,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/1939/4095/files/KEN_Ruarai_AA_2026_Ruiru_11_SL-28_Washed.png?v=1784580827",
    gallery: ["https://cdn.shopify.com/s/files/1/1939/4095/files/KEN_Ruarai_AA_2026_Ruiru_11_SL-28_Washed.png?v=1784580827","https://cdn.shopify.com/s/files/1/1939/4095/files/USA_KENRuaraiAA_2026_Ruiru11_SL-28Washed.png?v=1784580811"],
    shortDesc: "Ruarai Coffee Factory sits on the lower slopes of Mt Kenya in Nyeri County, where rich red volcanic soils and elevations of 1,600 to 1,800 metres provide ideal conditions for ...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Proud Mary Coffee (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Proud Mary Coffee","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://proudmarycoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Proud Mary Coffee (Australia)",
                "price": 13.17,
                "inStock": false,
                "url": "https://proudmarycoffee.com/products/kenya-ruarai-aa-ruiru-11-sl28-washed",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 13.83,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Proud%20Mary%20Coffee%20KENYA%20Ruarai%20AA%20%7C%20Ruiru%2011%20%26%20SL28%20%7C%20Washed&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "proud-mary-coffee-kenya-gathaithi-pb-ruiru-11-sl28-washed",
    slug: "proud-mary-coffee-kenya-gathaithi-pb-ruiru-11-sl28-washed",
    name: "Proud Mary Coffee — KENYA Gathaithi PB | Ruiru 11 & SL28 | Washed",
    brand: "Proud Mary Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 12.57,
    oldPrice: null,
    historicalAveragePrice: 13.32,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/1939/4095/files/KENGathaithiPB_2026_Ruiru11_SL-28Washed.png?v=1784580875",
    gallery: ["https://cdn.shopify.com/s/files/1/1939/4095/files/KENGathaithiPB_2026_Ruiru11_SL-28Washed.png?v=1784580875","https://cdn.shopify.com/s/files/1/1939/4095/files/USA_KEN_Gathaithi_PB_2026_Ruiru_11_SL28_Washed.png?v=1784580888"],
    shortDesc: "Gathaithi Coffee Factory sits on the fertile red volcanic soils of Nyeri, where cool temperatures, reliable rainfall and high elevation create ideal conditions for producing e...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Proud Mary Coffee (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Proud Mary Coffee","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://proudmarycoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Proud Mary Coffee (Australia)",
                "price": 12.57,
                "inStock": false,
                "url": "https://proudmarycoffee.com/products/kenya-gathaithi-pb-ruiru-11-sl28-washed",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 13.2,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Proud%20Mary%20Coffee%20KENYA%20Gathaithi%20PB%20%7C%20Ruiru%2011%20%26%20SL28%20%7C%20Washed&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "proud-mary-coffee-kenya-ruera-aa-sl28-sl34-natural",
    slug: "proud-mary-coffee-kenya-ruera-aa-sl28-sl34-natural",
    name: "Proud Mary Coffee — KENYA | Ruera AA | SL28 & SL34 | Natural",
    brand: "Proud Mary Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 14.37,
    oldPrice: null,
    historicalAveragePrice: 15.23,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/1939/4095/files/KEN_Ruera_AA_2026_SL-28_SL-35_Natural.png?v=1784580939",
    gallery: ["https://cdn.shopify.com/s/files/1/1939/4095/files/KEN_Ruera_AA_2026_SL-28_SL-35_Natural.png?v=1784580939","https://cdn.shopify.com/s/files/1/1939/4095/files/USA_KENRueraAA_2026_SL-28_SL-34Natural_1.png?v=1784580927"],
    shortDesc: "R uera Estate is located in Kiambu County, where fertile red volcanic soils, gentle rolling hills and an elevation of 1,577 metres provide ideal conditions for growing excepti...",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Proud Mary Coffee (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Proud Mary Coffee","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://proudmarycoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Proud Mary Coffee (Australia)",
                "price": 14.37,
                "inStock": false,
                "url": "https://proudmarycoffee.com/products/kenya-ruera-aa-sl28-sl34-natural",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 15.09,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Proud%20Mary%20Coffee%20KENYA%20%7C%20Ruera%20AA%20%7C%20SL28%20%26%20SL34%20%7C%20Natural&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "proud-mary-coffee-special-release-the-graciano-cruz-bundle",
    slug: "proud-mary-coffee-special-release-the-graciano-cruz-bundle",
    name: "Proud Mary Coffee — Special Release | THE GRACIANO CRUZ BUNDLE",
    brand: "Proud Mary Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 52.77,
    oldPrice: 62.27,
    historicalAveragePrice: 55.94,
    isOffer: true,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "OFERTA ESPECIAL",
    image: "https://cdn.shopify.com/s/files/1/1939/4095/files/Screenshot2026-07-03at4.11.04pm.png?v=1783059184",
    gallery: ["https://cdn.shopify.com/s/files/1/1939/4095/files/Screenshot2026-07-03at4.11.04pm.png?v=1783059184","https://cdn.shopify.com/s/files/1/1939/4095/files/Natural-back_1.png?v=1783045173","https://cdn.shopify.com/s/files/1/1939/4095/files/Screenshot2026-07-03at11.41.49am.png?v=1783042918"],
    shortDesc: "PRESALE: Orders will be shipped together by 27 July. Every now and then, a coffee deserves the full treatment. For Graciano Cruz's Los Lajones Bambu Geisha Natural, we've put ...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Proud Mary Coffee (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Proud Mary Coffee","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://proudmarycoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Proud Mary Coffee (Australia)",
                "price": 52.77,
                "inStock": false,
                "url": "https://proudmarycoffee.com/products/special-release-bundle-panama-los-lajones-geisha",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 55.41,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Proud%20Mary%20Coffee%20Special%20Release%20%7C%20THE%20GRACIANO%20CRUZ%20BUNDLE&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "proud-mary-coffee-colombia-ea-decaf-de-cana-huila-castillo-caturra-washed",
    slug: "proud-mary-coffee-colombia-ea-decaf-de-cana-huila-castillo-caturra-washed",
    name: "Proud Mary Coffee — COLOMBIA | EA Decaf de Caña - Huila | Castillo & Caturra | Washed",
    brand: "Proud Mary Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 11.37,
    oldPrice: null,
    historicalAveragePrice: 12.05,
    isOffer: false,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/1939/4095/files/COLEADecafdeCana-Huila_2026_Castillo_CaturraWashed.png?v=1783005522",
    gallery: ["https://cdn.shopify.com/s/files/1/1939/4095/files/COLEADecafdeCana-Huila_2026_Castillo_CaturraWashed.png?v=1783005522","https://cdn.shopify.com/s/files/1/1939/4095/files/USA_COL_EA_Decaf_de_Cana_-_Huila_2026_Castillo_Caturra_Washed.png?v=1783005538"],
    shortDesc: "Located in southwestern Colombia, Huila is nestled between the Andes' Central and Eastern ranges, with the middle area called the Magdalena Valley. The variation in elevation ...",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Proud Mary Coffee (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Proud Mary Coffee","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://proudmarycoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Proud Mary Coffee (Australia)",
                "price": 11.37,
                "inStock": false,
                "url": "https://proudmarycoffee.com/products/colombia-ea-decaf-de-cana-castillo-caturra-washed-2026",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 11.94,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Proud%20Mary%20Coffee%20COLOMBIA%20%7C%20EA%20Decaf%20de%20Ca%C3%B1a%20-%20Huila%20%7C%20Castillo%20%26%20Caturra%20%7C%20Washed&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "proud-mary-coffee-ethiopia-abedo-abamecha-heirloom-natural",
    slug: "proud-mary-coffee-ethiopia-abedo-abamecha-heirloom-natural",
    name: "Proud Mary Coffee — ETHIOPIA | Abedo Abamecha | Heirloom | Natural",
    brand: "Proud Mary Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 12.57,
    oldPrice: null,
    historicalAveragePrice: 13.32,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/1939/4095/files/USA_ETH_Abedo_Abamecha_2026_Heirloom_Natural.png?v=1780421247",
    gallery: ["https://cdn.shopify.com/s/files/1/1939/4095/files/USA_ETH_Abedo_Abamecha_2026_Heirloom_Natural.png?v=1780421247","https://cdn.shopify.com/s/files/1/1939/4095/files/ETHAbedoAbamecha_2026_HeirloomNatural.png?v=1780421233"],
    shortDesc: "We were first introduced to Abedo Abamecha Ahimed in 2020 through his uncle, Mustefa Abekeno — one of our longtime producer partners. After learning the business alongside Mus...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Proud Mary Coffee (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Proud Mary Coffee","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://proudmarycoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Proud Mary Coffee (Australia)",
                "price": 12.57,
                "inStock": false,
                "url": "https://proudmarycoffee.com/products/ethiopia-abedo-abamecha-heirloom-natural",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 13.2,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Proud%20Mary%20Coffee%20ETHIOPIA%20%7C%20Abedo%20Abamecha%20%7C%20Heirloom%20%7C%20Natural&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "proud-mary-coffee-espresso-series-1",
    slug: "proud-mary-coffee-espresso-series-1",
    name: "Proud Mary Coffee — Espresso Series 1",
    brand: "Proud Mary Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 784.77,
    oldPrice: null,
    historicalAveragePrice: 831.86,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/1939/4095/files/Fellow_Series1_Presale_Lifestyle_Digital-7-NoScreen_1_1.jpg?v=1778040491",
    gallery: ["https://cdn.shopify.com/s/files/1/1939/4095/files/Fellow_Series1_Presale_Lifestyle_Digital-7-NoScreen_1_1.jpg?v=1778040491","https://cdn.shopify.com/s/files/1/1939/4095/files/Fellow-Espresso-Series-1-B_01.png?v=1778040492","https://cdn.shopify.com/s/files/1/1939/4095/files/Fellow-Espresso-Series-1-MC_01.png?v=1778040491","https://cdn.shopify.com/s/files/1/1939/4095/files/Fellow-Espresso-Series-1-CR_01.png?v=1778040492"],
    shortDesc: "Enjoy true temperature stability and pressure control at your fingertips, through an intuitive design. Whether you’re just starting out with espresso, or you’re a seasoned bar...",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Proud Mary Coffee (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Proud Mary Coffee","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://proudmarycoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Proud Mary Coffee (Australia)",
                "price": 784.77,
                "inStock": true,
                "url": "https://proudmarycoffee.com/products/espresso-series-1",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 824.01,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Proud%20Mary%20Coffee%20Espresso%20Series%201&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "proud-mary-coffee-limited-summer-solstice-limited-blend",
    slug: "proud-mary-coffee-limited-summer-solstice-limited-blend",
    name: "Proud Mary Coffee — LIMITED | SUMMER SOLSTICE | Limited Blend",
    brand: "Proud Mary Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 11.97,
    oldPrice: null,
    historicalAveragePrice: 12.69,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/1939/4095/files/USA_Seasonal_Blend_2026_Summer_Solstice.png?v=1779121347",
    gallery: ["https://cdn.shopify.com/s/files/1/1939/4095/files/USA_Seasonal_Blend_2026_Summer_Solstice.png?v=1779121347","https://cdn.shopify.com/s/files/1/1939/4095/files/USA_SeasonalBlend_2026_SummerSolstice.png?v=1778005234"],
    shortDesc: "The solstice hits differently depending on where you stand – in the north, it’s peak summer – long days , bright energy, and vacation vibes. While i n the south, it’s the hear...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Proud Mary Coffee (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Proud Mary Coffee","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://proudmarycoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Proud Mary Coffee (Australia)",
                "price": 11.97,
                "inStock": false,
                "url": "https://proudmarycoffee.com/products/limited-summer-solstice-limited-blend",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 12.57,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Proud%20Mary%20Coffee%20LIMITED%20%7C%20SUMMER%20SOLSTICE%20%7C%20Limited%20Blend&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "proud-mary-coffee-6-month-wild-gift-subscription-cf-special-request",
    slug: "proud-mary-coffee-6-month-wild-gift-subscription-cf-special-request",
    name: "Proud Mary Coffee — 6 Month | Wild | Gift Subscription CF (special request)",
    brand: "Proud Mary Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 131.97,
    oldPrice: null,
    historicalAveragePrice: 139.89,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/1939/4095/files/1.28-SurpriseMe_77e707b2-6b2b-440b-b864-8310a9aa8b46.png?v=1776226555",
    gallery: ["https://cdn.shopify.com/s/files/1/1939/4095/files/1.28-SurpriseMe_77e707b2-6b2b-440b-b864-8310a9aa8b46.png?v=1776226555","https://cdn.shopify.com/s/files/1/1939/4095/files/1.21_-_Mild_Bag.png?v=1776226555","https://cdn.shopify.com/s/files/1/1939/4095/files/12.10_-_Wild_Bag_9e58e701-c2d9-4339-94a0-03d79de8940b.png?v=1776226555","https://cdn.shopify.com/s/files/1/1939/4095/files/1.21_-_Curious_Bag_1.png?v=1776226555"],
    shortDesc: "Looking for a Gift Subscription for that special someone? Our subscriptions are built around how you like to drink. Select the type that speaks to you. Surprise Me! Like to mi...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Proud Mary Coffee (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Proud Mary Coffee","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://proudmarycoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Proud Mary Coffee (Australia)",
                "price": 131.97,
                "inStock": true,
                "url": "https://proudmarycoffee.com/products/6-month-wild-gift-subscription-cf-special-request",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 138.57,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Proud%20Mary%20Coffee%206%20Month%20%7C%20Wild%20%7C%20Gift%20Subscription%20CF%20(special%20request)&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "proud-mary-coffee-colombia-antioquia-castillo-caturra-washed",
    slug: "proud-mary-coffee-colombia-antioquia-castillo-caturra-washed",
    name: "Proud Mary Coffee — COLOMBIA | Antioquia | Castillo & Caturra | Washed",
    brand: "Proud Mary Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 11.37,
    oldPrice: null,
    historicalAveragePrice: 12.05,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/1939/4095/files/USA_COLAntioquia_2025_Castillo_CaturraWashed.png?v=1776280687",
    gallery: ["https://cdn.shopify.com/s/files/1/1939/4095/files/USA_COLAntioquia_2025_Castillo_CaturraWashed.png?v=1776280687","https://cdn.shopify.com/s/files/1/1939/4095/files/COL_Antioquia_2025_Castillo_Caturra_Washed.png?v=1777998675"],
    shortDesc: "In the mountains of Antioquia, where morning mist settles over the slopes, coffee has been cultivated for generations. Smallholder producers work at elevations between 1,400 a...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Proud Mary Coffee (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Proud Mary Coffee","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://proudmarycoffee.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Proud Mary Coffee (Australia)",
                "price": 11.37,
                "inStock": false,
                "url": "https://proudmarycoffee.com/products/colombia-antioquia-castillo-caturra-washed",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 11.94,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Proud%20Mary%20Coffee%20COLOMBIA%20%7C%20Antioquia%20%7C%20Castillo%20%26%20Caturra%20%7C%20Washed&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "proud-mary-coffee-corduroy-logo-field-trip-hat",
    slug: "proud-mary-coffee-corduroy-logo-field-trip-hat",
    name: "Proud Mary Coffee — Corduroy Logo Field Trip Hat™",
    brand: "Proud Mary Coffee",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 20.97,
    oldPrice: null,
    historicalAveragePrice: 22.23,
    isOffer: false,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/1939/4095/files/Untitled-30July2026at14.01.11.png?v=1785384648",
    gallery: ["https://cdn.shopify.com/s/files/1/1939/4095/files/Untitled-30July2026at14.01.11.png?v=1785384648","https://cdn.shopify.com/s/files/1/1939/4095/files/PMC-EMBLOGO-WELDCORD-SUN_2.jpg?v=1768954061","https://cdn.shopify.com/s/files/1/1939/4095/files/PMC-EMBLOGO-WELDCORD-SUN_3.jpg?v=1768954061"],
    shortDesc: "Crafted from ultra-soft corduroy fabric, the Corduroy Logo Field Trip Hat™ hat stands out from the crowd. Featuring a 5 panel unstructured crown, this style was born out of no...",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Proud Mary Coffee (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Proud Mary Coffee","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://proudmarycoffee.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Proud Mary Coffee (Australia)",
                "price": 20.97,
                "inStock": true,
                "url": "https://proudmarycoffee.com/products/corduroy-eye-field-trip-hat-copy",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 22.02,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Proud%20Mary%20Coffee%20Corduroy%20Logo%20Field%20Trip%20Hat%E2%84%A2&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "market-lane-filter-coffee-bundle",
    slug: "market-lane-filter-coffee-bundle",
    name: "Market Lane — Filter Coffee Bundle",
    brand: "Market Lane",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 33.6,
    oldPrice: 39.65,
    historicalAveragePrice: 35.62,
    isOffer: true,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "OFERTA ESPECIAL",
    image: "https://cdn.shopify.com/s/files/1/0439/7645/8397/files/Coffee_Label_2026_New_Filter_BUNDLE_d9c2053d-0cce-4f85-8e23-b304d83233bb.jpg?v=1787544072",
    gallery: ["https://cdn.shopify.com/s/files/1/0439/7645/8397/files/Coffee_Label_2026_New_Filter_BUNDLE_d9c2053d-0cce-4f85-8e23-b304d83233bb.jpg?v=1787544072","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/Coffee_Label_2026_New_Filter_BUNDLE_0f4048f5-9651-4f0a-8124-0b4d52d0a0cc.jpg?v=1787544080"],
    shortDesc: "This bundle includes: 1 x 250g bag of Ndocha 1 x 250g bag of Adorsi",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Market Lane (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Market Lane","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://marketlane.com.au","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Market Lane (Australia)",
                "price": 33.6,
                "inStock": true,
                "url": "https://marketlane.com.au/products/filter-coffee-bundle",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 35.28,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Market%20Lane%20Filter%20Coffee%20Bundle&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "market-lane-espresso-coffee-bundle",
    slug: "market-lane-espresso-coffee-bundle",
    name: "Market Lane — Espresso Coffee Bundle",
    brand: "Market Lane",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 25.8,
    oldPrice: 30.44,
    historicalAveragePrice: 27.35,
    isOffer: true,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "OFERTA ESPECIAL",
    image: "https://cdn.shopify.com/s/files/1/0439/7645/8397/files/Coffee_Label_2023_New_Espresso_BUNDLE_0af0fc54-86de-4d2c-b293-0d5492159036.jpg?v=1787542876",
    gallery: ["https://cdn.shopify.com/s/files/1/0439/7645/8397/files/Coffee_Label_2023_New_Espresso_BUNDLE_0af0fc54-86de-4d2c-b293-0d5492159036.jpg?v=1787542876","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/Coffee_Label_2023_New_Espresso_BUNDLE_2ec59d97-2f31-40cb-8daa-62a430a3ab8f.jpg?v=1787542882"],
    shortDesc: "This bundle includes the following coffees: 1 x 250g bag of Seasonal Blend 1 x 250g bag of Small Producers of Cajamarca",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Market Lane (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Market Lane","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://marketlane.com.au","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Market Lane (Australia)",
                "price": 25.8,
                "inStock": true,
                "url": "https://marketlane.com.au/products/espresso-coffee-bundle",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 27.09,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Market%20Lane%20Espresso%20Coffee%20Bundle&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "market-lane-small-producers-of-cajamarca",
    slug: "market-lane-small-producers-of-cajamarca",
    name: "Market Lane — Small Producers of Cajamarca",
    brand: "Market Lane",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 14.4,
    oldPrice: null,
    historicalAveragePrice: 15.26,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0439/7645/8397/files/2025-SPO-Cajamarca_Colombia_ESP_1080x1280_da4f65c3-ff8d-46db-a30f-0c1928c81bd1.png?v=1786923522",
    gallery: ["https://cdn.shopify.com/s/files/1/0439/7645/8397/files/2025-SPO-Cajamarca_Colombia_ESP_1080x1280_da4f65c3-ff8d-46db-a30f-0c1928c81bd1.png?v=1786923522","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/2025-SPO-Cajamarca_Colombia_ESP_1080x1280_b4e09d0b-5b9c-454e-8076-171f1e43363c.png?v=1786923532"],
    shortDesc: "Origin: Cajamarca, Tolima, Colombia Varieties: Caturra &amp; Colombia Processing Method: Washed Producers: Alexander Mancilla, Neftalí Castro, Angel Luz Rojas, Francisco Ramos...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Market Lane (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Market Lane","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://marketlane.com.au","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Market Lane (Australia)",
                "price": 14.4,
                "inStock": true,
                "url": "https://marketlane.com.au/products/small-producers-of-cajamarca",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 15.12,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Market%20Lane%20Small%20Producers%20of%20Cajamarca&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "market-lane-ndocha",
    slug: "market-lane-ndocha",
    name: "Market Lane — Ndocha",
    brand: "Market Lane",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 20.4,
    oldPrice: null,
    historicalAveragePrice: 21.62,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0439/7645/8397/files/2026-Ndocha-Kenya_Filter_1080x1280_b2d0906d-3ea9-440a-a148-1f0834de375f.png?v=1786941714",
    gallery: ["https://cdn.shopify.com/s/files/1/0439/7645/8397/files/2026-Ndocha-Kenya_Filter_1080x1280_b2d0906d-3ea9-440a-a148-1f0834de375f.png?v=1786941714","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/2026-Ndocha-Kenya_Filter_1080x1280_eb558936-c3eb-4909-b52c-85dff3cf1052.png?v=1786941747"],
    shortDesc: "Origin: Kiambu, Kenya Varieties: SL28 &amp; Ruiru 11 Processing Method: Washed Producer: Geoffrey Gachogo Karugondo &amp; Family Relationship Length: Since 2025",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Market Lane (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Market Lane","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://marketlane.com.au","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Market Lane (Australia)",
                "price": 20.4,
                "inStock": true,
                "url": "https://marketlane.com.au/products/ndocha",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 21.42,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Market%20Lane%20Ndocha&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "market-lane-adorsi",
    slug: "market-lane-adorsi",
    name: "Market Lane — Adorsi",
    brand: "Market Lane",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 16.8,
    oldPrice: null,
    historicalAveragePrice: 17.81,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0439/7645/8397/files/2026-Adorsi_ethiopia_FTR_1080x1280_a4898de7-3af9-488e-b8d7-831b96c6ef3a.png?v=1785129437",
    gallery: ["https://cdn.shopify.com/s/files/1/0439/7645/8397/files/2026-Adorsi_ethiopia_FTR_1080x1280_a4898de7-3af9-488e-b8d7-831b96c6ef3a.png?v=1785129437","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/2026-Adorsi_ethiopia_FTR_1080x1280_f947a743-8a6c-48d6-ab2a-84049fe5c9b1.png?v=1785129448"],
    shortDesc: "Origin: Yirgacheffe, Gedeo, Ethiopia Varieties: Kurume, Wolisho &amp; Landrace Process: Washed Producer: Testi Specialty Coffee using coffee cherries from 800 small-scale farm...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Market Lane (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Market Lane","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://marketlane.com.au","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Market Lane (Australia)",
                "price": 16.8,
                "inStock": true,
                "url": "https://marketlane.com.au/products/adorsi-filter-beans",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 17.64,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Market%20Lane%20Adorsi&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "market-lane-seasonal-blend",
    slug: "market-lane-seasonal-blend",
    name: "Market Lane — Seasonal Blend",
    brand: "Market Lane",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 14.4,
    oldPrice: null,
    historicalAveragePrice: 15.26,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0439/7645/8397/files/2026-Seasonal-gua-ke_ESP_1080x1280_62b42def-e3e0-4e67-90f7-d06ded2794f7.png?v=1786061204",
    gallery: ["https://cdn.shopify.com/s/files/1/0439/7645/8397/files/2026-Seasonal-gua-ke_ESP_1080x1280_62b42def-e3e0-4e67-90f7-d06ded2794f7.png?v=1786061204","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/2026-Seasonal-gua-ke_ESP_1080x1280_0b004657-768c-46be-83e3-c1a8345f7b97.png?v=1786061224"],
    shortDesc: "85% Santa Clara Origin: Antigua, Guatemala Variety: Bourbon Processing Method: Washed Producers: Zelaya Family Relationship Length: Since 2009 15% Kiangundo Origin: Nyeri, Ken...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Market Lane (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Market Lane","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://marketlane.com.au","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Market Lane (Australia)",
                "price": 14.4,
                "inStock": true,
                "url": "https://marketlane.com.au/products/seasonal-blend",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 15.12,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Market%20Lane%20Seasonal%20Blend&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "market-lane-moccamaster-select-1-25l-coffee-maker-dutch-cocoa",
    slug: "market-lane-moccamaster-select-1-25l-coffee-maker-dutch-cocoa",
    name: "Market Lane — Moccamaster Select 1.25L Coffee Maker Dutch Cocoa",
    brand: "Market Lane",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 333,
    oldPrice: null,
    historicalAveragePrice: 352.98,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0439/7645/8397/files/Select_Centre_Dutch-cocoa.jpg?v=1785477347",
    gallery: ["https://cdn.shopify.com/s/files/1/0439/7645/8397/files/Select_Centre_Dutch-cocoa.jpg?v=1785477347","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/Select_Centre_Dutch-cocoa_39a682c3-79f1-41d6-8a10-2b8570d03f77.jpg?v=1785477359","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/Select-Centre_ocean_blue.jpg?v=1758238956","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/Select-Centre_pastel-blue_d3701665-0368-4b64-a918-533f0c4a1037.jpg?v=1758238956"],
    shortDesc: "Please note: some Moccamaster colour ways ship directly from our supplier. In this case, the shipping time may extend to 7 business days, and gift-wrapping can’t be guaranteed...",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Market Lane (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Market Lane","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://marketlane.com.au","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Market Lane (Australia)",
                "price": 333,
                "inStock": true,
                "url": "https://marketlane.com.au/products/moccamaster-select-1-25l-coffee-maker-dutch-cocoa",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 349.65,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Market%20Lane%20Moccamaster%20Select%201.25L%20Coffee%20Maker%20Dutch%20Cocoa&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "market-lane-sitio-canaa",
    slug: "market-lane-sitio-canaa",
    name: "Market Lane — Sítio Canaã",
    brand: "Market Lane",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 15.6,
    oldPrice: null,
    historicalAveragePrice: 16.54,
    isOffer: false,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0439/7645/8397/files/2026-Sitio-Canaa-Brazil_FTR_1080x1280_f3f7332a-2b23-4433-a389-c054fed32ea0.png?v=1784505663",
    gallery: ["https://cdn.shopify.com/s/files/1/0439/7645/8397/files/2026-Sitio-Canaa-Brazil_FTR_1080x1280_f3f7332a-2b23-4433-a389-c054fed32ea0.png?v=1784505663","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/2026-Sitio-Canaa-Brazil_FTR_1080x1280_69521afa-5dac-41e7-8720-0cc2dc367af5.png?v=1784505685"],
    shortDesc: "Origin: Piatã, Bahia, Brazil Variety: Topazio &amp; Acauã Process: Pulped Natural Producer: Kleumon Silva Moreira Relationship: Since 2018",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Market Lane (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Market Lane","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://marketlane.com.au","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Market Lane (Australia)",
                "price": 15.6,
                "inStock": true,
                "url": "https://marketlane.com.au/products/sitio-canaa-espresso-beans",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 16.38,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Market%20Lane%20S%C3%ADtio%20Cana%C3%A3&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "market-lane-lomaverde",
    slug: "market-lane-lomaverde",
    name: "Market Lane — Lomaverde",
    brand: "Market Lane",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 19.2,
    oldPrice: null,
    historicalAveragePrice: 20.35,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0439/7645/8397/files/2026-Lomaverde-Colombia_Filter_1080x1280_5f0f3576-0fc3-4b40-99f3-e6ac34274aa0.png?v=1783920179",
    gallery: ["https://cdn.shopify.com/s/files/1/0439/7645/8397/files/2026-Lomaverde-Colombia_Filter_1080x1280_5f0f3576-0fc3-4b40-99f3-e6ac34274aa0.png?v=1783920179","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/2026-Lomaverde-Colombia_Filter_1080x1280_0dc5f6ab-06ab-4114-aefe-b1cc91d28543.png?v=1783920189"],
    shortDesc: "Origin: Santa Barbara, Antioquia, Colombia Variety: Chiroso Process: Washed Producer: Echavarría family Relationship length: S ince 2016 with the Echavarría family, and 2020 w...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Market Lane (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Market Lane","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://marketlane.com.au","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Market Lane (Australia)",
                "price": 19.2,
                "inStock": true,
                "url": "https://marketlane.com.au/products/lomaverde-filter-beans",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 20.16,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Market%20Lane%20Lomaverde&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "market-lane-coffee-drip-bags-santa-isabel",
    slug: "market-lane-coffee-drip-bags-santa-isabel",
    name: "Market Lane — Coffee Drip Bags – Santa Isabel",
    brand: "Market Lane",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 15,
    oldPrice: null,
    historicalAveragePrice: 15.9,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0439/7645/8397/files/BOX_SACHET_SANTA-ISABEL_CENTRE.jpg?v=1782436121",
    gallery: ["https://cdn.shopify.com/s/files/1/0439/7645/8397/files/BOX_SACHET_SANTA-ISABEL_CENTRE.jpg?v=1782436121","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/BOX_SACHET_SANTA-ISABEL_CENTRE_c868f177-635c-4dff-8292-d48fd99ef94d.jpg?v=1782436148","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/SACHET_Santa-Isabel_CENTRE.jpg?v=1782436111","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/SACHET_BACK_SANTA-ISABEL_CENTRE.jpg?v=1782436116"],
    shortDesc: "Our Coffee Drip Bags are the perfect solution for making great coffee on the move. Each box contains ten drip bags. Origin: Cobán, Guatemala Variety: Caturra Processing Method...",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Market Lane (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Market Lane","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://marketlane.com.au","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Market Lane (Australia)",
                "price": 15,
                "inStock": true,
                "url": "https://marketlane.com.au/products/coffee-drip-bags-santa-isabel",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 15.75,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Market%20Lane%20Coffee%20Drip%20Bags%20%E2%80%93%20Santa%20Isabel&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "market-lane-coffee-drip-bags-san-antonio-decaf",
    slug: "market-lane-coffee-drip-bags-san-antonio-decaf",
    name: "Market Lane — Coffee Drip Bags – San Antonio Decaf",
    brand: "Market Lane",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 15,
    oldPrice: null,
    historicalAveragePrice: 15.9,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0439/7645/8397/files/BOX_SACHET-San-Antonio-Decaf-2025_1b429577-e369-441b-9b56-9cb84926b6ed.jpg?v=1765932103",
    gallery: ["https://cdn.shopify.com/s/files/1/0439/7645/8397/files/BOX_SACHET-San-Antonio-Decaf-2025_1b429577-e369-441b-9b56-9cb84926b6ed.jpg?v=1765932103","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/BOX_SACHET-San-Antonio-Decaf-2025.jpg?v=1765932103","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/SACHET_San-Antonio-Decaf-2025.jpg?v=1765932103","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/SACHET_San-Antonio-Decaf-2025_d01e6758-d9ef-44f4-a15e-a88e1f4f296e.jpg?v=1765932103"],
    shortDesc: "Our Coffee Drip Bags are the perfect solution for making great coffee on the move. Each box contains ten drip bags. Origin: Inzá, Cauca, Colombia Varieties: Caturra &amp; Colo...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Market Lane (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Market Lane","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://marketlane.com.au","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Market Lane (Australia)",
                "price": 15,
                "inStock": true,
                "url": "https://marketlane.com.au/products/coffee-drip-bags-san-antonio-decaf",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 15.75,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Market%20Lane%20Coffee%20Drip%20Bags%20%E2%80%93%20San%20Antonio%20Decaf&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "market-lane-coffee-i-like",
    slug: "market-lane-coffee-i-like",
    name: "Market Lane — Coffee I Like",
    brand: "Market Lane",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 13.2,
    oldPrice: null,
    historicalAveragePrice: 13.99,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0439/7645/8397/files/Coffee_I_Like_book.jpg?v=1781586925",
    gallery: ["https://cdn.shopify.com/s/files/1/0439/7645/8397/files/Coffee_I_Like_book.jpg?v=1781586925","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/1_b5a5219c-a640-4a2e-aadd-7e601b522eb7.jpg?v=1781577157","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/2_c31a2aaa-b614-4b9e-8db7-6bf46a0e14ba.jpg?v=1781574907","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/3_28ccd3ce-140a-4702-90b1-d0f4a61aed89.jpg?v=1781575003"],
    shortDesc: "Café de especialidad de origen seleccionado y tostado/diseñado por Market Lane (Australia).",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Market Lane (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Market Lane","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://marketlane.com.au","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Market Lane (Australia)",
                "price": 13.2,
                "inStock": true,
                "url": "https://marketlane.com.au/products/coffee-i-like",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 13.86,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Market%20Lane%20Coffee%20I%20Like&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "market-lane-coffee-class-coffee-appreciation-class",
    slug: "market-lane-coffee-class-coffee-appreciation-class",
    name: "Market Lane — Coffee Class: Coffee Appreciation Class",
    brand: "Market Lane",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 60,
    oldPrice: null,
    historicalAveragePrice: 63.6,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0439/7645/8397/files/1649891492604_0kmkmepi.jpg?v=1787457271",
    gallery: ["https://cdn.shopify.com/s/files/1/0439/7645/8397/files/1649891492604_0kmkmepi.jpg?v=1787457271","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/1661479244972_1n9tasx4.jpg?v=1787457271","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/1661479245923_5k6wq3oj.jpg?v=1787457271","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/1661479246649_eogfadbm.jpg?v=1787457271"],
    shortDesc: "Who this class is for This class is suitable for everyone, from the casual coffee drinker who wants to learn more about specialty coffee, to the coffee connoisseur who’d like ...",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Market Lane (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Market Lane","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://marketlane.com.au","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Market Lane (Australia)",
                "price": 60,
                "inStock": true,
                "url": "https://marketlane.com.au/products/coffee-appreciation-class",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 63,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Market%20Lane%20Coffee%20Class%3A%20Coffee%20Appreciation%20Class&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "market-lane-coffee-class-learn-how-to-make-filter-coffee",
    slug: "market-lane-coffee-class-learn-how-to-make-filter-coffee",
    name: "Market Lane — Coffee Class: Learn How to Make Filter Coffee",
    brand: "Market Lane",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 60,
    oldPrice: null,
    historicalAveragePrice: 63.6,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0439/7645/8397/files/1623114572909_uwbt8cbl.jpg?v=1772222074",
    gallery: ["https://cdn.shopify.com/s/files/1/0439/7645/8397/files/1623114572909_uwbt8cbl.jpg?v=1772222074","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/1623114576849_1ym8jaza.jpg?v=1772222074"],
    shortDesc: "Who this class is for Market Lane’s filter brewing class is for anyone who is curious about making beautiful coffee at home, or anyone already making coffee who wants to learn...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Market Lane (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Market Lane","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://marketlane.com.au","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Market Lane (Australia)",
                "price": 60,
                "inStock": true,
                "url": "https://marketlane.com.au/products/coffee-class-learn-how-to-make-filter-coffee",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 63,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Market%20Lane%20Coffee%20Class%3A%20Learn%20How%20to%20Make%20Filter%20Coffee&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "market-lane-coffee-class-learn-how-to-make-espresso",
    slug: "market-lane-coffee-class-learn-how-to-make-espresso",
    name: "Market Lane — Coffee Class: Learn How to Make Espresso",
    brand: "Market Lane",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 90,
    oldPrice: null,
    historicalAveragePrice: 95.4,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0439/7645/8397/files/1758237882101_hpmcg4zl.jpg?v=1787528609",
    gallery: ["https://cdn.shopify.com/s/files/1/0439/7645/8397/files/1758237882101_hpmcg4zl.jpg?v=1787528609","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/1760664950071_pbci5cvj_405cc37d-1c55-46da-8e4c-2b0aeced79fa.jpg?v=1787528609"],
    shortDesc: "Who this class is for Our three-hour espresso and milk class is suitable for all baristas – whether you’re just starting out and want to learn the basics of how to make espres...",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Market Lane (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Market Lane","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://marketlane.com.au","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Market Lane (Australia)",
                "price": 90,
                "inStock": true,
                "url": "https://marketlane.com.au/products/coffee-class-learn-to-brew-espresso",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 94.5,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Market%20Lane%20Coffee%20Class%3A%20Learn%20How%20to%20Make%20Espresso&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "market-lane-coffee-tea-bundle",
    slug: "market-lane-coffee-tea-bundle",
    name: "Market Lane — Coffee Tea Bundle",
    brand: "Market Lane",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 15,
    oldPrice: 17.7,
    historicalAveragePrice: 15.9,
    isOffer: true,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "OFERTA ESPECIAL",
    image: "https://cdn.shopify.com/s/files/1/0439/7645/8397/products/Market-Lane-Cofee-Tea-Bundle-2022-updated.jpg?v=1652148891",
    gallery: ["https://cdn.shopify.com/s/files/1/0439/7645/8397/products/Market-Lane-Cofee-Tea-Bundle-2022-updated.jpg?v=1652148891","https://cdn.shopify.com/s/files/1/0439/7645/8397/products/Tea_Bundle_2022_7f2f3c04-1bdf-4ffd-93d3-4d47f544d21c.jpg?v=1652148891"],
    shortDesc: "This bundle includes: 1 x 80g canister of Cascara Tea (Bolivia) 1 x 25g canister of Coffee Flower Tea (Bolivia)",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Market Lane (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Market Lane","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://marketlane.com.au","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Market Lane (Australia)",
                "price": 15,
                "inStock": true,
                "url": "https://marketlane.com.au/products/coffee-tea-bundle",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 15.75,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Market%20Lane%20Coffee%20Tea%20Bundle&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "market-lane-coffee-flower-tea",
    slug: "market-lane-coffee-flower-tea",
    name: "Market Lane — Coffee Flower Tea",
    brand: "Market Lane",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 9.6,
    oldPrice: null,
    historicalAveragePrice: 10.18,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0439/7645/8397/products/Coffee-Flower-Tea-Bottom.jpg?v=1648081641",
    gallery: ["https://cdn.shopify.com/s/files/1/0439/7645/8397/products/Coffee-Flower-Tea-Bottom.jpg?v=1648081641","https://cdn.shopify.com/s/files/1/0439/7645/8397/products/Coffee-Flower-Tea-Centre.jpg?v=1648081642","https://cdn.shopify.com/s/files/1/0439/7645/8397/products/Coffee-Flower-Tea-Back-Centre.jpg?v=1648081643","https://cdn.shopify.com/s/files/1/0439/7645/8397/products/Coffee-Flower-Tea-Pair-Centre.jpg?v=1648081644"],
    shortDesc: "Café de especialidad de origen seleccionado y tostado/diseñado por Market Lane (Australia).",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Market Lane (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Market Lane","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://marketlane.com.au","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Market Lane (Australia)",
                "price": 9.6,
                "inStock": true,
                "url": "https://marketlane.com.au/products/coffee-flower-tea",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 10.08,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Market%20Lane%20Coffee%20Flower%20Tea&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "market-lane-hario-v60-pour-over-cone-indigo",
    slug: "market-lane-hario-v60-pour-over-cone-indigo",
    name: "Market Lane — Hario V60 Pour Over Cone - Indigo",
    brand: "Market Lane",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 27,
    oldPrice: null,
    historicalAveragePrice: 28.62,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0439/7645/8397/files/V60_Filter_Cone_bottom_cb90c4ef-a8ca-4131-9f6a-27cb3963b536.jpg?v=1776921085",
    gallery: ["https://cdn.shopify.com/s/files/1/0439/7645/8397/files/V60_Filter_Cone_bottom_cb90c4ef-a8ca-4131-9f6a-27cb3963b536.jpg?v=1776921085","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/V60_Filter_Cone_centre_c976ed15-f7a3-4232-904e-fae3a96d3280.jpg?v=1776921088"],
    shortDesc: "Café de especialidad de origen seleccionado y tostado/diseñado por Market Lane (Australia).",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Market Lane (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Market Lane","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://marketlane.com.au","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Market Lane (Australia)",
                "price": 27,
                "inStock": true,
                "url": "https://marketlane.com.au/products/hario-v60-pour-over-cone-white-copy",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 28.35,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Market%20Lane%20Hario%20V60%20Pour%20Over%20Cone%20-%20Indigo&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "market-lane-market-lane-enamel-cup",
    slug: "market-lane-market-lane-enamel-cup",
    name: "Market Lane — Market Lane Enamel Cup",
    brand: "Market Lane",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 21,
    oldPrice: null,
    historicalAveragePrice: 22.26,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0439/7645/8397/files/ENAMEL-CUP_NAVY_BOTTOM_BOTH_36708451-d331-4b21-9a94-cadd80bbf588.jpg?v=1773375283",
    gallery: ["https://cdn.shopify.com/s/files/1/0439/7645/8397/files/ENAMEL-CUP_NAVY_BOTTOM_BOTH_36708451-d331-4b21-9a94-cadd80bbf588.jpg?v=1773375283","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/ENAMEL-CUP_NAVY_BOTTOM_Front_c6403263-e9e8-4a1c-a634-09f8f17f5aa1.jpg?v=1773375283","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/ENAMEL-CUP_NAVY_BOTTOM_Back_4047e28c-5611-468b-a7c0-23c775dbe174.jpg?v=1773375283","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/ENAMEL-CUP_STEELBLUE_BOTTOM_Front.jpg?v=1773375283"],
    shortDesc: "Café de especialidad de origen seleccionado y tostado/diseñado por Market Lane (Australia).",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Market Lane (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Market Lane","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://marketlane.com.au","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Market Lane (Australia)",
                "price": 21,
                "inStock": true,
                "url": "https://marketlane.com.au/products/market-lane-enamel-cup",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 22.05,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Market%20Lane%20Market%20Lane%20Enamel%20Cup&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "market-lane-moccamaster-select-1-25l-coffee-maker-sorbet",
    slug: "market-lane-moccamaster-select-1-25l-coffee-maker-sorbet",
    name: "Market Lane — Moccamaster Select 1.25L Coffee Maker Sorbet",
    brand: "Market Lane",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 333,
    oldPrice: null,
    historicalAveragePrice: 352.98,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0439/7645/8397/files/Select_Centre_Sorbet.jpg?v=1773092916",
    gallery: ["https://cdn.shopify.com/s/files/1/0439/7645/8397/files/Select_Centre_Sorbet.jpg?v=1773092916","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/Select_Centre_Sorbet_e2c16f77-9150-4d22-bdcc-75ed0ecf614f.jpg?v=1773092916","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/Select-Centre_matte-black.jpg?v=1773092916","https://cdn.shopify.com/s/files/1/0439/7645/8397/files/Select-Centre_matte-green.jpg?v=1773092916"],
    shortDesc: "Please note: some Moccamaster colour ways ship directly from our supplier. In this case, the shipping time may extend to 7 business days, and gift-wrapping can’t be guaranteed...",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Market Lane (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Market Lane","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://marketlane.com.au","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Market Lane (Australia)",
                "price": 333,
                "inStock": true,
                "url": "https://marketlane.com.au/products/moccamaster-select-1-25l-coffee-maker-sorbet",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 349.65,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Market%20Lane%20Moccamaster%20Select%201.25L%20Coffee%20Maker%20Sorbet&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "market-lane-gift-3-month-subscription-ships-every-2-weeks-6-deliveries",
    slug: "market-lane-gift-3-month-subscription-ships-every-2-weeks-6-deliveries",
    name: "Market Lane — Gift 3-month Subscription – Ships every 2 weeks (6 deliveries)",
    brand: "Market Lane",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 86.4,
    oldPrice: null,
    historicalAveragePrice: 91.58,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0439/7645/8397/products/Coffee-Club-Gift-Box-Icon_1149684c-0f5d-4176-9a6c-bd84eefdda45.jpg?v=1648776255",
    gallery: ["https://cdn.shopify.com/s/files/1/0439/7645/8397/products/Coffee-Club-Gift-Box-Icon_1149684c-0f5d-4176-9a6c-bd84eefdda45.jpg?v=1648776255"],
    shortDesc: "Café de especialidad de origen seleccionado y tostado/diseñado por Market Lane (Australia).",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Market Lane (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Market Lane","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://marketlane.com.au","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Market Lane (Australia)",
                "price": 86.4,
                "inStock": true,
                "url": "https://marketlane.com.au/products/gift-3-month-subscription-ships-every-2-weeks-6-deliveries",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 90.72,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Market%20Lane%20Gift%203-month%20Subscription%20%E2%80%93%20Ships%20every%202%20weeks%20(6%20deliveries)&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "market-lane-gift-12-month-subscription-ships-every-2-weeks-26-deliveries",
    slug: "market-lane-gift-12-month-subscription-ships-every-2-weeks-26-deliveries",
    name: "Market Lane — Gift 12-month Subscription – Ships every 2 weeks (26 deliveries)",
    brand: "Market Lane",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 374.4,
    oldPrice: null,
    historicalAveragePrice: 396.86,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0439/7645/8397/products/Coffee-Club-Gift-Box-Icon_39dea326-fe81-45d4-9da5-5b38690283ff.jpg?v=1648776171",
    gallery: ["https://cdn.shopify.com/s/files/1/0439/7645/8397/products/Coffee-Club-Gift-Box-Icon_39dea326-fe81-45d4-9da5-5b38690283ff.jpg?v=1648776171"],
    shortDesc: "Café de especialidad de origen seleccionado y tostado/diseñado por Market Lane (Australia).",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Market Lane (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Market Lane","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://marketlane.com.au","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Market Lane (Australia)",
                "price": 374.4,
                "inStock": true,
                "url": "https://marketlane.com.au/products/12-month-subscription-fortnightly-deliveries",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 393.12,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Market%20Lane%20Gift%2012-month%20Subscription%20%E2%80%93%20Ships%20every%202%20weeks%20(26%20deliveries)&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "market-lane-gift-6-month-subscription-ships-every-2-weeks-12-deliveries",
    slug: "market-lane-gift-6-month-subscription-ships-every-2-weeks-12-deliveries",
    name: "Market Lane — Gift 6-month Subscription – Ships every 2 weeks (12 deliveries)",
    brand: "Market Lane",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 172.8,
    oldPrice: null,
    historicalAveragePrice: 183.17,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Asia / Oceanía",
    image: "https://cdn.shopify.com/s/files/1/0439/7645/8397/products/Coffee-Club-Gift-Box-Icon_47914fa7-2b3f-4d1c-aa4c-eecb1f976cbd.jpg?v=1648776283",
    gallery: ["https://cdn.shopify.com/s/files/1/0439/7645/8397/products/Coffee-Club-Gift-Box-Icon_47914fa7-2b3f-4d1c-aa4c-eecb1f976cbd.jpg?v=1648776283"],
    shortDesc: "Café de especialidad de origen seleccionado y tostado/diseñado por Market Lane (Australia).",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Market Lane (Australia)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Market Lane","País de Origen":"Australia","Región":"Asia / Oceanía","Tienda Oficial":"https://marketlane.com.au","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Market Lane (Australia)",
                "price": 172.8,
                "inStock": true,
                "url": "https://marketlane.com.au/products/6-month-subscription-fortnightly-deliveries",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 181.44,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Market%20Lane%20Gift%206-month%20Subscription%20%E2%80%93%20Ships%20every%202%20weeks%20(12%20deliveries)&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "fellow-products-victor-florez-chiroso",
    slug: "fellow-products-victor-florez-chiroso",
    name: "Fellow Products — Víctor Florez Chiroso",
    brand: "Fellow Products",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 28,
    oldPrice: null,
    historicalAveragePrice: 29.68,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0057/6235/1219/files/06.02.26_drops_image_text_HEX_VictorFloresChiroso_a5f1e2cc-6dac-4930-9e65-cf7ec0883377.jpg?v=1787584820",
    gallery: ["https://cdn.shopify.com/s/files/1/0057/6235/1219/files/06.02.26_drops_image_text_HEX_VictorFloresChiroso_a5f1e2cc-6dac-4930-9e65-cf7ec0883377.jpg?v=1787584820"],
    shortDesc: "A tropical and vibrant Chiroso from Urrao, Colombia by HEX Coffee Roasters that showcases the fruity and floral character that makes this variety so special. Ranging from crea...",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Fellow Products (Global / USA)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Fellow Products","País de Origen":"Global / USA","Región":"Norteamérica","Tienda Oficial":"https://fellowproducts.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Fellow Products (Global / USA)",
                "price": 28,
                "inStock": true,
                "url": "https://fellowproducts.com/products/victor-florez-chiroso-washed-urrao-colombia",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 29.4,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Fellow%20Products%20V%C3%ADctor%20Florez%20Chiroso&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "fellow-products-hills-of-heza",
    slug: "fellow-products-hills-of-heza",
    name: "Fellow Products — Hills of Heza",
    brand: "Fellow Products",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 20,
    oldPrice: null,
    historicalAveragePrice: 21.2,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0057/6235/1219/files/08.25.26_drops_image_text_Loveless-HillsofHeza.jpg?v=1787584877",
    gallery: ["https://cdn.shopify.com/s/files/1/0057/6235/1219/files/08.25.26_drops_image_text_Loveless-HillsofHeza.jpg?v=1787584877"],
    shortDesc: "An easy-brewing, high-altitude Burundi from Loveless Coffees with deep, lingering sweetness balanced by delicate floral and citrus aromatics. Grown at high altitude on smaller...",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Fellow Products (Global / USA)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Fellow Products","País de Origen":"Global / USA","Región":"Norteamérica","Tienda Oficial":"https://fellowproducts.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Fellow Products (Global / USA)",
                "price": 20,
                "inStock": false,
                "url": "https://fellowproducts.com/products/hills-of-heza-washed-red-bourbon-regional-blend-kayanza-burundi-roasted-6-30-26",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 21,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Fellow%20Products%20Hills%20of%20Heza&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "fellow-products-el-nevado-decaf",
    slug: "fellow-products-el-nevado-decaf",
    name: "Fellow Products — El Nevado Decaf",
    brand: "Fellow Products",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 20,
    oldPrice: null,
    historicalAveragePrice: 21.2,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0057/6235/1219/files/08.20.26_drops_image_text_HEX-Decaf_1_34c857d4-442c-4ae2-a679-b916b4115ee3.jpg?v=1787152681",
    gallery: ["https://cdn.shopify.com/s/files/1/0057/6235/1219/files/08.20.26_drops_image_text_HEX-Decaf_1_34c857d4-442c-4ae2-a679-b916b4115ee3.jpg?v=1787152681"],
    shortDesc: "A complex and vibrant decaf from HEX Coffee Roasters that celebrates the flavor potential of the Huila region of Colombia. Produced by smallholder farmers throughout Santa Mar...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Fellow Products (Global / USA)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Fellow Products","País de Origen":"Global / USA","Región":"Norteamérica","Tienda Oficial":"https://fellowproducts.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Fellow Products (Global / USA)",
                "price": 20,
                "inStock": false,
                "url": "https://fellowproducts.com/products/el-nevado-decaf-washed-huila-colombia",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 21,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Fellow%20Products%20El%20Nevado%20Decaf&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "fellow-products-double-feature",
    slug: "fellow-products-double-feature",
    name: "Fellow Products — Double Feature",
    brand: "Fellow Products",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 35,
    oldPrice: null,
    historicalAveragePrice: 37.1,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0057/6235/1219/files/08.18.26_drops_image_text_B_W_Messenger-DoubleFeature_4b6da863-de16-4de2-b568-287f2294b794.jpg?v=1786656668",
    gallery: ["https://cdn.shopify.com/s/files/1/0057/6235/1219/files/08.18.26_drops_image_text_B_W_Messenger-DoubleFeature_4b6da863-de16-4de2-b568-287f2294b794.jpg?v=1786656668"],
    shortDesc: "A summer blockbuster collaboration between Messenger Coffee and Black &amp; White Coffee Roasters, blending two competition-grade pacamaras into one vibrant, fruit-forward cup...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Fellow Products (Global / USA)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Fellow Products","País de Origen":"Global / USA","Región":"Norteamérica","Tienda Oficial":"https://fellowproducts.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Fellow Products (Global / USA)",
                "price": 35,
                "inStock": true,
                "url": "https://fellowproducts.com/products/double-feature-fellow-drop",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 36.75,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Fellow%20Products%20Double%20Feature&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "fellow-products-harmufo-ethiopia",
    slug: "fellow-products-harmufo-ethiopia",
    name: "Fellow Products — Harmufo - Ethiopia",
    brand: "Fellow Products",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 27,
    oldPrice: null,
    historicalAveragePrice: 28.62,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0057/6235/1219/files/08.11.26_drops_image_text_SEY-Harmufo_d15cfa9d-bb47-43ed-b8ab-40be73e660db.jpg?v=1786424869",
    gallery: ["https://cdn.shopify.com/s/files/1/0057/6235/1219/files/08.11.26_drops_image_text_SEY-Harmufo_d15cfa9d-bb47-43ed-b8ab-40be73e660db.jpg?v=1786424869"],
    shortDesc: "Gedeb sits at the altitude ceiling of Yirgacheffe, with coffee growing at over 2,300 meters. The dramatic day-night temperature swings slow cherry development, building the fl...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Fellow Products (Global / USA)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Fellow Products","País de Origen":"Global / USA","Región":"Norteamérica","Tienda Oficial":"https://fellowproducts.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Fellow Products (Global / USA)",
                "price": 27,
                "inStock": false,
                "url": "https://fellowproducts.com/products/2026-harmufo-ethiopia",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 28.35,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Fellow%20Products%20Harmufo%20-%20Ethiopia&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "fellow-products-the-aiden-cold-brew-starter-bundle",
    slug: "fellow-products-the-aiden-cold-brew-starter-bundle",
    name: "Fellow Products — The Aiden Cold Brew Starter Bundle",
    brand: "Fellow Products",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 399.95,
    oldPrice: 471.94,
    historicalAveragePrice: 423.95,
    isOffer: true,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "OFERTA ESPECIAL",
    image: "https://cdn.shopify.com/s/files/1/0057/6235/1219/files/Web_PDP_AidenColdBrewBundle_01_605e9caa-795d-4e91-be6e-0f6f8e923a6c.png?v=1785964373",
    gallery: ["https://cdn.shopify.com/s/files/1/0057/6235/1219/files/Web_PDP_AidenColdBrewBundle_01_605e9caa-795d-4e91-be6e-0f6f8e923a6c.png?v=1785964373"],
    shortDesc: "Freshly ground coffee sets the foundation, and Aiden carries it through with precise control over temperature, timing, and water flow. Each brew is easier to dial in and easie...",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Fellow Products (Global / USA)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Fellow Products","País de Origen":"Global / USA","Región":"Norteamérica","Tienda Oficial":"https://fellowproducts.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Fellow Products (Global / USA)",
                "price": 399.95,
                "inStock": false,
                "url": "https://fellowproducts.com/products/the-aiden-cold-brew-starter-kit",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 419.95,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Fellow%20Products%20The%20Aiden%20Cold%20Brew%20Starter%20Bundle&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "fellow-products-necessary-dark-roast",
    slug: "fellow-products-necessary-dark-roast",
    name: "Fellow Products — Necessary Dark Roast",
    brand: "Fellow Products",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 18.5,
    oldPrice: null,
    historicalAveragePrice: 19.61,
    isOffer: false,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0057/6235/1219/files/08.11.26_drops_image_text_Necessary-DarkRoast_71e0060d-d19a-4b34-989b-af6c049a2910.jpg?v=1786424819",
    gallery: ["https://cdn.shopify.com/s/files/1/0057/6235/1219/files/08.11.26_drops_image_text_Necessary-DarkRoast_71e0060d-d19a-4b34-989b-af6c049a2910.jpg?v=1786424819"],
    shortDesc: "Necessary Dark Roast brings together two origins that complement one another beautifully. Burundian coffee contributes deep sweetness, while Peruvian coffee adds body and pers...",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Fellow Products (Global / USA)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Fellow Products","País de Origen":"Global / USA","Región":"Norteamérica","Tienda Oficial":"https://fellowproducts.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Fellow Products (Global / USA)",
                "price": 18.5,
                "inStock": false,
                "url": "https://fellowproducts.com/products/necessary-dark-roast-1",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 19.43,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Fellow%20Products%20Necessary%20Dark%20Roast&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "fellow-products-juan-puerta-mango",
    slug: "fellow-products-juan-puerta-mango",
    name: "Fellow Products — Juan Puerta Mango",
    brand: "Fellow Products",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 25,
    oldPrice: null,
    historicalAveragePrice: 26.5,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0057/6235/1219/files/08.04.26_drops_AdditionalPDP_Resident-JuanPuerta.png?v=1785949763",
    gallery: ["https://cdn.shopify.com/s/files/1/0057/6235/1219/files/08.04.26_drops_AdditionalPDP_Resident-JuanPuerta.png?v=1785949763"],
    shortDesc: "Created by Resident Coffee Roasters in collaboration with Juan Puerta of Sens Coffee, this light roast begins with Castillo from La Sirena in Quindío, Colombia, before undergo...",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Fellow Products (Global / USA)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Fellow Products","País de Origen":"Global / USA","Región":"Norteamérica","Tienda Oficial":"https://fellowproducts.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Fellow Products (Global / USA)",
                "price": 25,
                "inStock": false,
                "url": "https://fellowproducts.com/products/colombia-juan-puerta-mango",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 26.25,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Fellow%20Products%20Juan%20Puerta%20Mango&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "fellow-products-moonrise",
    slug: "fellow-products-moonrise",
    name: "Fellow Products — Moonrise",
    brand: "Fellow Products",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 25,
    oldPrice: null,
    historicalAveragePrice: 26.5,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0057/6235/1219/files/Camber_2025_Moonrise_Site-600x600-SeanBeszhak_111fe5a2-c0ce-4743-8302-4b8d5fdeeff5.png?v=1785267285",
    gallery: ["https://cdn.shopify.com/s/files/1/0057/6235/1219/files/Camber_2025_Moonrise_Site-600x600-SeanBeszhak_111fe5a2-c0ce-4743-8302-4b8d5fdeeff5.png?v=1785267285"],
    shortDesc: "Moonrise is crafted to showcase the harmony that comes from blending washed and naturally processed coffees. It yields a syrupy, full-bodied cup with layered sweetness and rip...",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Fellow Products (Global / USA)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Fellow Products","País de Origen":"Global / USA","Región":"Norteamérica","Tienda Oficial":"https://fellowproducts.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Fellow Products (Global / USA)",
                "price": 25,
                "inStock": true,
                "url": "https://fellowproducts.com/products/cc-moonrise",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 26.25,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Fellow%20Products%20Moonrise&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "fellow-products-big-joy",
    slug: "fellow-products-big-joy",
    name: "Fellow Products — Big Joy",
    brand: "Fellow Products",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 23,
    oldPrice: null,
    historicalAveragePrice: 24.38,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0057/6235/1219/files/Camber_2025_BigJoy_Site-600x600-SeanBeszhak_92acb426-95a0-42ee-af8d-b5eae781cf42.png?v=1785263396",
    gallery: ["https://cdn.shopify.com/s/files/1/0057/6235/1219/files/Camber_2025_BigJoy_Site-600x600-SeanBeszhak_92acb426-95a0-42ee-af8d-b5eae781cf42.png?v=1785263396"],
    shortDesc: "Big Joy is a slightly more developed roast than Moonrise, and pairs exceptionally well with milk. We use it for all milk-based drinks in our café, where it brings richness and...",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Fellow Products (Global / USA)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Fellow Products","País de Origen":"Global / USA","Región":"Norteamérica","Tienda Oficial":"https://fellowproducts.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Fellow Products (Global / USA)",
                "price": 23,
                "inStock": true,
                "url": "https://fellowproducts.com/products/cc-big-joy",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 24.15,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Fellow%20Products%20Big%20Joy&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "fellow-products-struttura",
    slug: "fellow-products-struttura",
    name: "Fellow Products — Struttura",
    brand: "Fellow Products",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 24,
    oldPrice: null,
    historicalAveragePrice: 25.44,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0057/6235/1219/files/01.06.26_drops_AdditionalPDP_Camber_DarkRoast_Struttura.png?v=1785263041",
    gallery: ["https://cdn.shopify.com/s/files/1/0057/6235/1219/files/01.06.26_drops_AdditionalPDP_Camber_DarkRoast_Struttura.png?v=1785263041"],
    shortDesc: "Struttura is a blend focused on texture. The shots are dense and syrupy, with flavors that are sweet, weighty, and dimensional. Seasonally-selected coffees produce sweet tones...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Fellow Products (Global / USA)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Fellow Products","País de Origen":"Global / USA","Región":"Norteamérica","Tienda Oficial":"https://fellowproducts.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Fellow Products (Global / USA)",
                "price": 24,
                "inStock": true,
                "url": "https://fellowproducts.com/products/cc-struttura-1",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 25.2,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Fellow%20Products%20Struttura&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "fellow-products-haro-wachu-filter",
    slug: "fellow-products-haro-wachu-filter",
    name: "Fellow Products — Haro Wachu Filter",
    brand: "Fellow Products",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 25,
    oldPrice: null,
    historicalAveragePrice: 26.5,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0057/6235/1219/files/07.28.26_drops_image_text_BlendIn-HaroWachuFilter.jpg?v=1785184249",
    gallery: ["https://cdn.shopify.com/s/files/1/0057/6235/1219/files/07.28.26_drops_image_text_BlendIn-HaroWachuFilter.jpg?v=1785184249"],
    shortDesc: "The coffee comes from Ethiopia's Guji Zone, where smallholder families grow heirloom trees above 2,250 meters. The warm days and cold nights ripen the cherries slowly, buildin...",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Fellow Products (Global / USA)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Fellow Products","País de Origen":"Global / USA","Región":"Norteamérica","Tienda Oficial":"https://fellowproducts.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Fellow Products (Global / USA)",
                "price": 25,
                "inStock": false,
                "url": "https://fellowproducts.com/products/haro-wachu-filter",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 26.25,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Fellow%20Products%20Haro%20Wachu%20Filter&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "fellow-products-haro-wachu-espresso",
    slug: "fellow-products-haro-wachu-espresso",
    name: "Fellow Products — Haro Wachu Espresso",
    brand: "Fellow Products",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 25,
    oldPrice: null,
    historicalAveragePrice: 26.5,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0057/6235/1219/files/07.28.26_drops_image_text_BlendIn-HaroWachuEspresso.jpg?v=1785184242",
    gallery: ["https://cdn.shopify.com/s/files/1/0057/6235/1219/files/07.28.26_drops_image_text_BlendIn-HaroWachuEspresso.jpg?v=1785184242"],
    shortDesc: "Surprisingly complex and expressive for an everyday shot, it finishes chocolateycaramel-sweet and holds up wonderfully in milk. It comes from BlendIn Coffee Club, a Houston ro...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Fellow Products (Global / USA)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Fellow Products","País de Origen":"Global / USA","Región":"Norteamérica","Tienda Oficial":"https://fellowproducts.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Fellow Products (Global / USA)",
                "price": 25,
                "inStock": false,
                "url": "https://fellowproducts.com/products/haro-wachu-espresso",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 26.25,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Fellow%20Products%20Haro%20Wachu%20Espresso&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "fellow-products-the-series-1-grinder-kit",
    slug: "fellow-products-the-series-1-grinder-kit",
    name: "Fellow Products — The Series 1 + Grinder Kit",
    brand: "Fellow Products",
    category: "molinos",
    subCategory: "Molinillos",
    price: 1559.9,
    oldPrice: null,
    historicalAveragePrice: 1653.49,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0057/6235/1219/files/TheSeries1_GrinderKit_5515d69e-7d5a-4479-b25e-41480dea47f5.png?v=1784572909",
    gallery: ["https://cdn.shopify.com/s/files/1/0057/6235/1219/files/TheSeries1_GrinderKit_5515d69e-7d5a-4479-b25e-41480dea47f5.png?v=1784572909"],
    shortDesc: "Fresh grinding is the quiet foundation of great espresso. By pairing Opus 2 with Series 1, each shot begins with coffee ground precisely for the recipe you’re brewing. That fr...",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Fellow Products (Global / USA)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Fellow Products","País de Origen":"Global / USA","Región":"Norteamérica","Tienda Oficial":"https://fellowproducts.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Fellow Products (Global / USA)",
                "price": 1559.9,
                "inStock": false,
                "url": "https://fellowproducts.com/products/the-series-1-grinder-kit",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 1637.9,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Fellow%20Products%20The%20Series%201%20%2B%20Grinder%20Kit&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "fellow-products-opus-2-espresso-accessories-kit",
    slug: "fellow-products-opus-2-espresso-accessories-kit",
    name: "Fellow Products — Opus 2 + Espresso Accessories Kit",
    brand: "Fellow Products",
    category: "molinos",
    subCategory: "Molinillos",
    price: 364,
    oldPrice: null,
    historicalAveragePrice: 385.84,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0057/6235/1219/files/Web_PDP_Opus2-EspressoAccessoriesBundle.png?v=1784573848",
    gallery: ["https://cdn.shopify.com/s/files/1/0057/6235/1219/files/Web_PDP_Opus2-EspressoAccessoriesBundle.png?v=1784573848"],
    shortDesc: "Great espresso comes from consistency across every step. Opus 2 gives you the precision and control to dial in your grind for espresso, helping you pull shots with better bala...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Fellow Products (Global / USA)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Fellow Products","País de Origen":"Global / USA","Región":"Norteamérica","Tienda Oficial":"https://fellowproducts.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Fellow Products (Global / USA)",
                "price": 364,
                "inStock": false,
                "url": "https://fellowproducts.com/products/opus-2-espresso-accessories-bundle",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 382.2,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Fellow%20Products%20Opus%202%20%2B%20Espresso%20Accessories%20Kit&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "fellow-products-impact-usa",
    slug: "fellow-products-impact-usa",
    name: "Fellow Products — Impact USA",
    brand: "Fellow Products",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 20,
    oldPrice: null,
    historicalAveragePrice: 21.2,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0057/6235/1219/files/06.27.26_drops_image_text_Kickoff-ImpactUSA.jpg?v=1782409388",
    gallery: ["https://cdn.shopify.com/s/files/1/0057/6235/1219/files/06.27.26_drops_image_text_Kickoff-ImpactUSA.jpg?v=1782409388"],
    shortDesc: "Café de especialidad de origen seleccionado y tostado/diseñado por Fellow Products (Global / USA).",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Fellow Products (Global / USA)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Fellow Products","País de Origen":"Global / USA","Región":"Norteamérica","Tienda Oficial":"https://fellowproducts.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Fellow Products (Global / USA)",
                "price": 20,
                "inStock": false,
                "url": "https://fellowproducts.com/products/impact-usa-believe-blend",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 21,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Fellow%20Products%20Impact%20USA&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "fellow-products-matchday",
    slug: "fellow-products-matchday",
    name: "Fellow Products — Matchday",
    brand: "Fellow Products",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 25,
    oldPrice: null,
    historicalAveragePrice: 26.5,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0057/6235/1219/files/06.27.26_drops_image_text_Kickoff-MatchDay.jpg?v=1782409329",
    gallery: ["https://cdn.shopify.com/s/files/1/0057/6235/1219/files/06.27.26_drops_image_text_Kickoff-MatchDay.jpg?v=1782409329"],
    shortDesc: "Café de especialidad de origen seleccionado y tostado/diseñado por Fellow Products (Global / USA).",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Fellow Products (Global / USA)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Fellow Products","País de Origen":"Global / USA","Región":"Norteamérica","Tienda Oficial":"https://fellowproducts.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Fellow Products (Global / USA)",
                "price": 25,
                "inStock": false,
                "url": "https://fellowproducts.com/products/matchday-huila-excelso",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 26.25,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Fellow%20Products%20Matchday&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "fellow-products-jaguar-espresso",
    slug: "fellow-products-jaguar-espresso",
    name: "Fellow Products — Jaguar Espresso",
    brand: "Fellow Products",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 19.5,
    oldPrice: null,
    historicalAveragePrice: 20.67,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0057/6235/1219/files/Jaguar-Espresso-Fair-Trade-Organic-Equator-Coffees-12oz-F_1_6a103267-4b94-4252-acd8-f2fe3ff8bc97.png?v=1782166657",
    gallery: ["https://cdn.shopify.com/s/files/1/0057/6235/1219/files/Jaguar-Espresso-Fair-Trade-Organic-Equator-Coffees-12oz-F_1_6a103267-4b94-4252-acd8-f2fe3ff8bc97.png?v=1782166657"],
    shortDesc: "Our Sun Dried Natural selection comes from Kayon Mountain Estate located in Southern Guji, Ethiopia. Coffee cherries are left to dry whole with the fruit encasing the seed, or...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Fellow Products (Global / USA)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Fellow Products","País de Origen":"Global / USA","Región":"Norteamérica","Tienda Oficial":"https://fellowproducts.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Fellow Products (Global / USA)",
                "price": 19.5,
                "inStock": true,
                "url": "https://fellowproducts.com/products/jaguar-espresso",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 20.48,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Fellow%20Products%20Jaguar%20Espresso&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "acaia-scales-los-suenos-decaf-250-gr",
    slug: "acaia-scales-los-suenos-decaf-250-gr",
    name: "Acaia Scales — Los Sueños Decaf 250 gr",
    brand: "Acaia Scales",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 21.5,
    oldPrice: null,
    historicalAveragePrice: 22.79,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2371/4209/files/MBZ00240008250G_6e243133-d15e-4abc-8801-574869615d53.png?v=1785912152",
    gallery: ["https://cdn.shopify.com/s/files/1/2371/4209/files/MBZ00240008250G_6e243133-d15e-4abc-8801-574869615d53.png?v=1785912152"],
    shortDesc: "Seems like more and more of us are seeking out delicious decaf these days, and luckily we're starting to feel spoiled for choice! This dynamic single origin lot is ideal for t...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Acaia Scales (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Acaia Scales","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://acaia.co","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Acaia Scales (Global)",
                "price": 21.5,
                "inStock": true,
                "url": "https://acaia.co/products/los-suenos-decaf-250-gr",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 22.58,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Acaia%20Scales%20Los%20Sue%C3%B1os%20Decaf%20250%20gr&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "acaia-scales-west-coast-espresso-12-oz",
    slug: "acaia-scales-west-coast-espresso-12-oz",
    name: "Acaia Scales — West Coast Espresso 12 oz",
    brand: "Acaia Scales",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 23,
    oldPrice: null,
    historicalAveragePrice: 24.38,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2371/4209/files/MBZ00180006012OZ.png?v=1785905808",
    gallery: ["https://cdn.shopify.com/s/files/1/2371/4209/files/MBZ00180006012OZ.png?v=1785905808"],
    shortDesc: "Wake up on the West Coast with a bright and fresh espresso that prioritises citrus and red berry sweetness first with a silky round caramel finish to balance things out. Anoth...",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Acaia Scales (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Acaia Scales","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://acaia.co","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Acaia Scales (Global)",
                "price": 23,
                "inStock": true,
                "url": "https://acaia.co/products/west-coast-espresso-12-oz",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 24.15,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Acaia%20Scales%20West%20Coast%20Espresso%2012%20oz&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "acaia-scales-horizon",
    slug: "acaia-scales-horizon",
    name: "Acaia Scales — Horizon",
    brand: "Acaia Scales",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 195,
    oldPrice: null,
    historicalAveragePrice: 206.7,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2371/4209/files/ph_horizon_1500x1000_01.jpg?v=1774842273",
    gallery: ["https://cdn.shopify.com/s/files/1/2371/4209/files/ph_horizon_1500x1000_01.jpg?v=1774842273","https://cdn.shopify.com/s/files/1/2371/4209/files/ph_horizon_1500x1000_02.jpg?v=1774842273","https://cdn.shopify.com/s/files/1/2371/4209/files/ph_horizon_1500x1000_03.jpg?v=1774842274","https://cdn.shopify.com/s/files/1/2371/4209/files/ph_horizon_1500x1000_04.jpg?v=1774842274"],
    shortDesc: "The Acaia Horizon represents a new frontier in coffee science, bringing innovation to the post-extraction maturation phase – the critical minutes between extraction and the fi...",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Acaia Scales (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Acaia Scales","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://acaia.co","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Acaia Scales (Global)",
                "price": 195,
                "inStock": true,
                "url": "https://acaia.co/products/horizon",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 204.75,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Acaia%20Scales%20Horizon&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "acaia-scales-keystone-250-gr",
    slug: "acaia-scales-keystone-250-gr",
    name: "Acaia Scales — Keystone 250 gr",
    brand: "Acaia Scales",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 21.25,
    oldPrice: null,
    historicalAveragePrice: 22.53,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2371/4209/files/MBZ00240001250G_74a12595-6d97-48e0-b1ae-3523789fa2fb.png?v=1785911911",
    gallery: ["https://cdn.shopify.com/s/files/1/2371/4209/files/MBZ00240001250G_74a12595-6d97-48e0-b1ae-3523789fa2fb.png?v=1785911911"],
    shortDesc: "Outstanding teamwork from two contrasting coffees here: first you'll sense all those aromatic floral sensations from the Ethiopian component, followed by a wave of thick caram...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Acaia Scales (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Acaia Scales","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://acaia.co","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Acaia Scales (Global)",
                "price": 21.25,
                "inStock": true,
                "url": "https://acaia.co/products/keystone-250-gr",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 22.31,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Acaia%20Scales%20Keystone%20250%20gr&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "acaia-scales-stowaway-250-gr",
    slug: "acaia-scales-stowaway-250-gr",
    name: "Acaia Scales — Stowaway 250 gr",
    brand: "Acaia Scales",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 19.8,
    oldPrice: null,
    historicalAveragePrice: 20.99,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2371/4209/files/MBZ00240002250G.png?v=1785911891",
    gallery: ["https://cdn.shopify.com/s/files/1/2371/4209/files/MBZ00240002250G.png?v=1785911891"],
    shortDesc: "Stowaway is your skeleton key to delicious espresso, drip and filter methods all at once, thanks to a fully developed roast and top-notch componentry. You'll pick up those unm...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Acaia Scales (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Acaia Scales","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://acaia.co","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Acaia Scales (Global)",
                "price": 19.8,
                "inStock": true,
                "url": "https://acaia.co/products/stowaway-250-gr",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 20.79,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Acaia%20Scales%20Stowaway%20250%20gr&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "acaia-scales-bhadra-250-gr",
    slug: "acaia-scales-bhadra-250-gr",
    name: "Acaia Scales — Bhadra 250 gr",
    brand: "Acaia Scales",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 20.25,
    oldPrice: null,
    historicalAveragePrice: 21.47,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2371/4209/files/passenger-bhadra-250g.png?v=1785914063",
    gallery: ["https://cdn.shopify.com/s/files/1/2371/4209/files/passenger-bhadra-250g.png?v=1785914063"],
    shortDesc: "Pour and sip the exceptional Bhadra coffee. Hints of black tea melding with citrus notes lend an exquisite taste. Stone fruit undertones amplify the fruity flavour. This fragr...",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Acaia Scales (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Acaia Scales","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://acaia.co","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Acaia Scales (Global)",
                "price": 20.25,
                "inStock": true,
                "url": "https://acaia.co/products/bhadra-250-gr",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 21.26,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Acaia%20Scales%20Bhadra%20250%20gr&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "acaia-scales-montecarlos-250-gr",
    slug: "acaia-scales-montecarlos-250-gr",
    name: "Acaia Scales — Montecarlos 250 gr",
    brand: "Acaia Scales",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 20.25,
    oldPrice: null,
    historicalAveragePrice: 21.47,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2371/4209/files/MBZ00240007250G.png?v=1785911897",
    gallery: ["https://cdn.shopify.com/s/files/1/2371/4209/files/MBZ00240007250G.png?v=1785911897"],
    shortDesc: "Passenger chose to feature this single varietal / single estate coffee due to its drinkability and balance. Red grape and clementine are anchored by a bittering cocoa base, ma...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Acaia Scales (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Acaia Scales","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://acaia.co","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Acaia Scales (Global)",
                "price": 20.25,
                "inStock": true,
                "url": "https://acaia.co/products/montecarlos-250-gr",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 21.26,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Acaia%20Scales%20Montecarlos%20250%20gr&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "acaia-scales-cusco-250-gr",
    slug: "acaia-scales-cusco-250-gr",
    name: "Acaia Scales — Cusco 250 gr",
    brand: "Acaia Scales",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 19.8,
    oldPrice: null,
    historicalAveragePrice: 20.99,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2371/4209/files/MBZ0024V0029250G.png?v=1785911935",
    gallery: ["https://cdn.shopify.com/s/files/1/2371/4209/files/MBZ0024V0029250G.png?v=1785911935"],
    shortDesc: "This latest harvest from our producer partners in La Convención is a stellar example of the flavor profile that we look for in coffees of this region. Sweet, delicately rich a...",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Acaia Scales (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Acaia Scales","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://acaia.co","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Acaia Scales (Global)",
                "price": 19.8,
                "inStock": true,
                "url": "https://acaia.co/products/cusco-250-gr",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 20.79,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Acaia%20Scales%20Cusco%20250%20gr&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "acaia-scales-casa-12-oz",
    slug: "acaia-scales-casa-12-oz",
    name: "Acaia Scales — Casa 12 oz",
    brand: "Acaia Scales",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 22,
    oldPrice: null,
    historicalAveragePrice: 23.32,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2371/4209/files/MBZ00180012012OZ_4d78c5ad-44cc-40b5-9118-fa39f921f7c8.png?v=1785915549",
    gallery: ["https://cdn.shopify.com/s/files/1/2371/4209/files/MBZ00180012012OZ_4d78c5ad-44cc-40b5-9118-fa39f921f7c8.png?v=1785915549"],
    shortDesc: "A medium roast that whispers of deep chocolate delight. Persistent apricot and black cherry tones lighten the mood. A sturdy peace-filled cup awaits.",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Acaia Scales (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Acaia Scales","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://acaia.co","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Acaia Scales (Global)",
                "price": 22,
                "inStock": true,
                "url": "https://acaia.co/products/casa-12-oz",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 23.1,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Acaia%20Scales%20Casa%2012%20oz&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "acaia-scales-coffee-bean-credit",
    slug: "acaia-scales-coffee-bean-credit",
    name: "Acaia Scales — Coffee Bean Credit",
    brand: "Acaia Scales",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 25,
    oldPrice: null,
    historicalAveragePrice: 26.5,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2371/4209/files/2025-Gift_Card.jpg?v=1762997710",
    gallery: ["https://cdn.shopify.com/s/files/1/2371/4209/files/2025-Gift_Card.jpg?v=1762997710"],
    shortDesc: "Give the gift of coffee beans to your favorite coffee geek or coffee-obsessed person. With this gift card, you can allow your loved one to shop our Coffee Beans catalog to pic...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Acaia Scales (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Acaia Scales","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://acaia.co","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Acaia Scales (Global)",
                "price": 25,
                "inStock": true,
                "url": "https://acaia.co/products/coffee-bean-credit",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 26.25,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Acaia%20Scales%20Coffee%20Bean%20Credit&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "acaia-scales-mini-tasting-cup-2-oz-60-ml",
    slug: "acaia-scales-mini-tasting-cup-2-oz-60-ml",
    name: "Acaia Scales — Mini Tasting Cup 2 oz / 60 ml",
    brand: "Acaia Scales",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 20,
    oldPrice: null,
    historicalAveragePrice: 21.2,
    isOffer: false,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2371/4209/files/Tasting-Cup-2-oz_01.jpg?v=1758853336",
    gallery: ["https://cdn.shopify.com/s/files/1/2371/4209/files/Tasting-Cup-2-oz_01.jpg?v=1758853336","https://cdn.shopify.com/s/files/1/2371/4209/files/Tasting-Cup-2-oz_02.jpg?v=1758853336","https://cdn.shopify.com/s/files/1/2371/4209/files/Tasting-Cup-2-oz_05.jpg?v=1758853336","https://cdn.shopify.com/s/files/1/2371/4209/files/Tasting-Cup-2-oz_06.jpg?v=1758853336"],
    shortDesc: "Crafted from high-quality ceramic, this miniature tasting cup comes with a stylish detachable lanyard, making it easy to carry and enjoy your coffee anywhere. The ceramic mate...",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Acaia Scales (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Acaia Scales","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://acaia.co","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Acaia Scales (Global)",
                "price": 20,
                "inStock": true,
                "url": "https://acaia.co/products/mini-tasting-cup",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 21,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Acaia%20Scales%20Mini%20Tasting%20Cup%202%20oz%20%2F%2060%20ml&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "acaia-scales-pyxis-black",
    slug: "acaia-scales-pyxis-black",
    name: "Acaia Scales — Pyxis Black",
    brand: "Acaia Scales",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 325,
    oldPrice: null,
    historicalAveragePrice: 344.5,
    isOffer: false,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2371/4209/files/P_pyxis_1500x1000_01_0f3f6d4f-62b6-4b04-b3f8-00f3b3c3e457.jpg?v=1758620409",
    gallery: ["https://cdn.shopify.com/s/files/1/2371/4209/files/P_pyxis_1500x1000_01_0f3f6d4f-62b6-4b04-b3f8-00f3b3c3e457.jpg?v=1758620409","https://cdn.shopify.com/s/files/1/2371/4209/files/P_pyxis_1500x1000_02_c8a0d895-9fbb-4549-993d-deac7834d7a0.jpg?v=1758620409","https://cdn.shopify.com/s/files/1/2371/4209/files/P_pyxis_1500x1000_03_052aab0f-83e7-409d-8186-baaa87f207b0.jpg?v=1758620409","https://cdn.shopify.com/s/files/1/2371/4209/files/P_pyxis_1500x1000_04_db78f139-d395-4390-b8b6-647d250b8199.jpg?v=1758699017"],
    shortDesc: "Note: Quantities are limited. Only 1 unit is allowed per customer. @import url(https://fonts.bunny.net/css?family=sans-serif:400); #_form_44_{font-size:14px;line-height:1.6;fo...",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Acaia Scales (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Acaia Scales","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://acaia.co","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Acaia Scales (Global)",
                "price": 325,
                "inStock": true,
                "url": "https://acaia.co/products/pyxis",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 341.25,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Acaia%20Scales%20Pyxis%20Black&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "acaia-scales-angel-wings-250-gr",
    slug: "acaia-scales-angel-wings-250-gr",
    name: "Acaia Scales — Angel Wings 250 gr",
    brand: "Acaia Scales",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 19,
    oldPrice: null,
    historicalAveragePrice: 20.14,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2371/4209/files/MBZ00530003250GM_6c56f630-e7a0-4b72-8c48-d459658a1791.png?v=1785915680",
    gallery: ["https://cdn.shopify.com/s/files/1/2371/4209/files/MBZ00530003250GM_6c56f630-e7a0-4b72-8c48-d459658a1791.png?v=1785915680"],
    shortDesc: "Angel Wings blend is combination of beans on seasonal rotation. While the coffees change regularly the recipe and roast development keep flavors consistent. Big buttery carame...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Acaia Scales (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Acaia Scales","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://acaia.co","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Acaia Scales (Global)",
                "price": 19,
                "inStock": true,
                "url": "https://acaia.co/products/angel-wings-250-gr",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 19.95,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Acaia%20Scales%20Angel%20Wings%20250%20gr&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "acaia-scales-curious-single-origin-250-gr",
    slug: "acaia-scales-curious-single-origin-250-gr",
    name: "Acaia Scales — Curious Single Origin 250 gr",
    brand: "Acaia Scales",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 21,
    oldPrice: null,
    historicalAveragePrice: 22.26,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2371/4209/files/proud-mary-curious-single-origin-250-g.png?v=1785909011",
    gallery: ["https://cdn.shopify.com/s/files/1/2371/4209/files/proud-mary-curious-single-origin-250-g.png?v=1785909011"],
    shortDesc: "Bright, layered, and a little adventurous, Curious features expressive single origins with lively acidity and notes of florals, citrus, or red fruit, depending on the season. ...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Acaia Scales (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Acaia Scales","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://acaia.co","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Acaia Scales (Global)",
                "price": 21,
                "inStock": true,
                "url": "https://acaia.co/products/curious-single-origin-250-gr",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 22.05,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Acaia%20Scales%20Curious%20Single%20Origin%20250%20gr&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "acaia-scales-mild-single-origin-250-gr",
    slug: "acaia-scales-mild-single-origin-250-gr",
    name: "Acaia Scales — Mild Single Origin 250 gr",
    brand: "Acaia Scales",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 19,
    oldPrice: null,
    historicalAveragePrice: 20.14,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2371/4209/files/MBZ02500010250G.png?v=1785908998",
    gallery: ["https://cdn.shopify.com/s/files/1/2371/4209/files/MBZ02500010250G.png?v=1785908998"],
    shortDesc: "Balanced, sweet, and easy to love, Mild is our most approachable seasonal single origin. Whether brewed as espresso, filter, or with milk, each release is selected for comfort...",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Acaia Scales (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Acaia Scales","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://acaia.co","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Acaia Scales (Global)",
                "price": 19,
                "inStock": true,
                "url": "https://acaia.co/products/mild-single-origin-250-gr",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 19.95,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Acaia%20Scales%20Mild%20Single%20Origin%20250%20gr&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "acaia-scales-colorized-10-5-oz",
    slug: "acaia-scales-colorized-10-5-oz",
    name: "Acaia Scales — Colorized 10.5 oz",
    brand: "Acaia Scales",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 19,
    oldPrice: null,
    historicalAveragePrice: 20.14,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2371/4209/files/Metric-Colorized-105OZ_da2a463a-a0b8-4d93-b800-1d1aa7a151c2.png?v=1785906682",
    gallery: ["https://cdn.shopify.com/s/files/1/2371/4209/files/Metric-Colorized-105OZ_da2a463a-a0b8-4d93-b800-1d1aa7a151c2.png?v=1785906682"],
    shortDesc: "How does one make coffee taste and smell like candy? Metric seem to have nailed it with this colorful blend of African and Latin American coffees, roasted on the lighter side ...",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Acaia Scales (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Acaia Scales","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://acaia.co","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Acaia Scales (Global)",
                "price": 19,
                "inStock": true,
                "url": "https://acaia.co/products/colorized-10-5-oz",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 19.95,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Acaia%20Scales%20Colorized%2010.5%20oz&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "acaia-scales-big-riff-10-5-oz",
    slug: "acaia-scales-big-riff-10-5-oz",
    name: "Acaia Scales — Big Riff 10.5 oz",
    brand: "Acaia Scales",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 18,
    oldPrice: null,
    historicalAveragePrice: 19.08,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2371/4209/files/metric-bigriff-105oz_0833eb26-f38f-4c29-8342-fdbae0dd9e63.png?v=1785906727",
    gallery: ["https://cdn.shopify.com/s/files/1/2371/4209/files/metric-bigriff-105oz_0833eb26-f38f-4c29-8342-fdbae0dd9e63.png?v=1785906727"],
    shortDesc: "A sweet, creamy and balanced blend designed to highlight dried fruit and plum notes. The Big Riff is ideal for espresso but also a well-rounded filter offering. Bold roast fla...",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Acaia Scales (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Acaia Scales","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://acaia.co","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Acaia Scales (Global)",
                "price": 18,
                "inStock": true,
                "url": "https://acaia.co/products/big-riff-10-5-oz",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 18.9,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Acaia%20Scales%20Big%20Riff%2010.5%20oz&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "acaia-scales-en-masse-10-5-oz",
    slug: "acaia-scales-en-masse-10-5-oz",
    name: "Acaia Scales — En Masse 10.5 oz",
    brand: "Acaia Scales",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 18,
    oldPrice: null,
    historicalAveragePrice: 19.08,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2371/4209/files/Metric-EnMasse-105OZ.png?v=1785906712",
    gallery: ["https://cdn.shopify.com/s/files/1/2371/4209/files/Metric-EnMasse-105OZ.png?v=1785906712"],
    shortDesc: "Sometimes it's good to blend in with the crowd. Especially when the blend is dripping with sweetness and balanced soft citrus acidity! Metric's house blend is engineered for m...",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Acaia Scales (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Acaia Scales","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://acaia.co","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Acaia Scales (Global)",
                "price": 18,
                "inStock": true,
                "url": "https://acaia.co/products/en-masse-10-5-oz",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 18.9,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Acaia%20Scales%20En%20Masse%2010.5%20oz&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "acaia-scales-decaf-12-oz",
    slug: "acaia-scales-decaf-12-oz",
    name: "Acaia Scales — Decaf 12 oz",
    brand: "Acaia Scales",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 18,
    oldPrice: null,
    historicalAveragePrice: 19.08,
    isOffer: false,
    score: new CoffeeScore(9.2),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2371/4209/files/Camellia_Decaf_Product_Photography_720x725_Beanz_US.png?v=1785911384",
    gallery: ["https://cdn.shopify.com/s/files/1/2371/4209/files/Camellia_Decaf_Product_Photography_720x725_Beanz_US.png?v=1785911384"],
    shortDesc: "Lofty notes of dried fruit mingled with butterscotch sweetness and a cocoa finish. This medium roast, espresso blend, brings comfort and fulfilment to any moment of relaxation...",
    subscores: {"espresso":9.2,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Acaia Scales (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Acaia Scales","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://acaia.co","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Acaia Scales (Global)",
                "price": 18,
                "inStock": true,
                "url": "https://acaia.co/products/decaf-12-oz",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 18.9,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Acaia%20Scales%20Decaf%2012%20oz&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "acaia-scales-ethereal-12-oz",
    slug: "acaia-scales-ethereal-12-oz",
    name: "Acaia Scales — Ethereal 12 oz",
    brand: "Acaia Scales",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 18,
    oldPrice: null,
    historicalAveragePrice: 19.08,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2371/4209/files/Camellia_Ethereal_Blend_Product_Photography_2544x2560_Beanz_US_0e14e1dc-ec84-455b-819a-49eb76b27a25.png?v=1785909980",
    gallery: ["https://cdn.shopify.com/s/files/1/2371/4209/files/Camellia_Ethereal_Blend_Product_Photography_2544x2560_Beanz_US_0e14e1dc-ec84-455b-819a-49eb76b27a25.png?v=1785909980"],
    shortDesc: "A signature house blend of two naturally processed coffees from Brazil and Ethiopia are masterfully roasted to a medium profile that highlights deep dark berry flavors. The ca...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Acaia Scales (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Acaia Scales","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://acaia.co","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Acaia Scales (Global)",
                "price": 18,
                "inStock": true,
                "url": "https://acaia.co/products/ethereal-12-oz",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 18.9,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Acaia%20Scales%20Ethereal%2012%20oz&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "acaia-scales-comfort-zone-12-oz",
    slug: "acaia-scales-comfort-zone-12-oz",
    name: "Acaia Scales — Comfort Zone 12 oz",
    brand: "Acaia Scales",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 18,
    oldPrice: null,
    historicalAveragePrice: 19.08,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2371/4209/files/Camellia_Comfort_Zone_Product_Photography_2544x2560_Beanz_US.png?v=1785909969",
    gallery: ["https://cdn.shopify.com/s/files/1/2371/4209/files/Camellia_Comfort_Zone_Product_Photography_2544x2560_Beanz_US.png?v=1785909969"],
    shortDesc: "The Comfort Zone is great for straightforward coffee drinkers. It's a medium-roasted single origin, great for any brew method, and has epic full-flavored dark chocolate depth ...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Acaia Scales (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Acaia Scales","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://acaia.co","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Acaia Scales (Global)",
                "price": 18,
                "inStock": true,
                "url": "https://acaia.co/products/comfort-zone-12-oz",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 18.9,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Acaia%20Scales%20Comfort%20Zone%2012%20oz&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "acaia-scales-seismic-10-5-oz",
    slug: "acaia-scales-seismic-10-5-oz",
    name: "Acaia Scales — Seismic 10.5 oz",
    brand: "Acaia Scales",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 19,
    oldPrice: null,
    historicalAveragePrice: 20.14,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2371/4209/files/Metric-Seismic-105OZ_829f0797-edc9-47b4-a4a2-e17eba0ea4c3.png?v=1785906694",
    gallery: ["https://cdn.shopify.com/s/files/1/2371/4209/files/Metric-Seismic-105OZ_829f0797-edc9-47b4-a4a2-e17eba0ea4c3.png?v=1785906694"],
    shortDesc: "Smooth and effervescent, Seismic is a lighter roasted blend of coffees that shine with a citrusy radiance. There's also a rumble of caramel, the undercurrent you'd expect from...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Acaia Scales (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Acaia Scales","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://acaia.co","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Acaia Scales (Global)",
                "price": 19,
                "inStock": true,
                "url": "https://acaia.co/products/seismic-10-5-oz",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 19.95,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Acaia%20Scales%20Seismic%2010.5%20oz&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "acaia-scales-yes-plz-decaf-12-oz",
    slug: "acaia-scales-yes-plz-decaf-12-oz",
    name: "Acaia Scales — Yes Plz Decaf 12 oz",
    brand: "Acaia Scales",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 22,
    oldPrice: null,
    historicalAveragePrice: 23.32,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2371/4209/files/a7W8b00000Evb23EAB_0685c00000GEejMAAT.png?v=1785903626",
    gallery: ["https://cdn.shopify.com/s/files/1/2371/4209/files/a7W8b00000Evb23EAB_0685c00000GEejMAAT.png?v=1785903626"],
    shortDesc: "We continuously search for the very best tasting decaf options to roast for you. The Yes Plz Decaf is an ever-evolving expression of the best coffees we can find— coffees you’...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Acaia Scales (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Acaia Scales","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://acaia.co","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Acaia Scales (Global)",
                "price": 22,
                "inStock": true,
                "url": "https://acaia.co/products/yes-plz-decaf-12-oz",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 23.1,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Acaia%20Scales%20Yes%20Plz%20Decaf%2012%20oz&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "acaia-scales-homestar-espresso-12-oz",
    slug: "acaia-scales-homestar-espresso-12-oz",
    name: "Acaia Scales — Homestar Espresso 12 oz",
    brand: "Acaia Scales",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 22,
    oldPrice: null,
    historicalAveragePrice: 23.32,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2371/4209/files/MBZ025160V0028012OZ.png?v=1785906318",
    gallery: ["https://cdn.shopify.com/s/files/1/2371/4209/files/MBZ025160V0028012OZ.png?v=1785906318"],
    shortDesc: "Homestar is optimized for home baristas. A blend that balances mellow with magical—smooth, nutty, rich, big-bodied, with a layered and vibrant finish.",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Acaia Scales (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Acaia Scales","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://acaia.co","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Acaia Scales (Global)",
                "price": 22,
                "inStock": true,
                "url": "https://acaia.co/products/homestar-espresso-12-oz",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 23.1,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Acaia%20Scales%20Homestar%20Espresso%2012%20oz&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "acaia-scales-yes-plz-single-origin-12-oz",
    slug: "acaia-scales-yes-plz-single-origin-12-oz",
    name: "Acaia Scales — Yes Plz Single Origin 12 oz",
    brand: "Acaia Scales",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 22,
    oldPrice: null,
    historicalAveragePrice: 23.32,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/2371/4209/files/MBZ025160V0019012OZ_5b1723d2-b004-4600-b99a-311c2382f9e9.png?v=1785903459",
    gallery: ["https://cdn.shopify.com/s/files/1/2371/4209/files/MBZ025160V0019012OZ_5b1723d2-b004-4600-b99a-311c2382f9e9.png?v=1785903459"],
    shortDesc: "Every week we do the impossible — roast and deliver a new, unique single origin bean that always hits the bullseye.",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Acaia Scales (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Acaia Scales","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://acaia.co","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Acaia Scales (Global)",
                "price": 22,
                "inStock": true,
                "url": "https://acaia.co/products/yes-plz-single-origin-12-oz",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 23.1,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Acaia%20Scales%20Yes%20Plz%20Single%20Origin%2012%20oz&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "flair-espresso-ewizard-milk-steamer-110v-refurbished",
    slug: "flair-espresso-ewizard-milk-steamer-110v-refurbished",
    name: "Flair Espresso — eWizard Milk Steamer 110v - Refurbished",
    brand: "Flair Espresso",
    category: "maquinas",
    subCategory: "Máquinas de Café",
    price: 214.95,
    oldPrice: 253.64,
    historicalAveragePrice: 227.85,
    isOffer: true,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "OFERTA ESPECIAL",
    image: "https://cdn.shopify.com/s/files/1/0983/8097/2334/files/ewizard_product_shot_woo_110v_optimized_2.jpg?v=1784926733",
    gallery: ["https://cdn.shopify.com/s/files/1/0983/8097/2334/files/ewizard_product_shot_woo_110v_optimized_2.jpg?v=1784926733","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/ewizard_lifestyle_sac_7_woo_optimized.jpg?v=1778160437","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/ewizard_lifestyle_sac_8_woo_optimized.jpg?v=1778261379","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/ewizard_lifestyle_sac_6_woo_1_optimized.jpg?v=1778261350"],
    shortDesc: "The Flair eWizard Electric Milk Steamer is perfect for anyone looking for silky microfoam or latte art at home. The eWizard heats up in roughly five minutes and produces power...",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Flair Espresso (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Flair Espresso","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://flairespresso.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Flair Espresso (Global)",
                "price": 214.95,
                "inStock": false,
                "url": "https://flairespresso.com/products/ewizard-110v-refurbished",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 225.7,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Flair%20Espresso%20eWizard%20Milk%20Steamer%20110v%20-%20Refurbished&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "flair-espresso-flair-2go-refurbished",
    slug: "flair-espresso-flair-2go-refurbished",
    name: "Flair Espresso — Flair 2GO Refurbished",
    brand: "Flair Espresso",
    category: "maquinas",
    subCategory: "Máquinas de Café",
    price: 130.95,
    oldPrice: 154.52,
    historicalAveragePrice: 138.81,
    isOffer: true,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "OFERTA ESPECIAL",
    image: "https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_2go_black_hero_whitebg.jpg?v=1783440946",
    gallery: ["https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_2go_black_hero_whitebg.jpg?v=1783440946","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_2go_category_top_woo.jpg?v=1777388343","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_2go_ks_folded_square_small_optimized.jpg?v=1778257027","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_2go_ks_bottomless_web_optimized.jpg?v=1778257027"],
    shortDesc: "Elevate your coffee experience anywhere, anytime with the Flair 2GO – the ultimate portable, pod-compatible espresso maker that combines convenience with exceptional quality. ...",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Flair Espresso (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Flair Espresso","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://flairespresso.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Flair Espresso (Global)",
                "price": 130.95,
                "inStock": true,
                "url": "https://flairespresso.com/products/flair-2go-refurbished",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 137.5,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Flair%20Espresso%20Flair%202GO%20Refurbished&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "flair-espresso-flair-49-pro-refurbished",
    slug: "flair-espresso-flair-49-pro-refurbished",
    name: "Flair Espresso — Flair 49 Pro Refurbished",
    brand: "Flair Espresso",
    category: "maquinas",
    subCategory: "Máquinas de Café",
    price: 236.95,
    oldPrice: 279.6,
    historicalAveragePrice: 251.17,
    isOffer: true,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "OFERTA ESPECIAL",
    image: "https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_49_pro__shopify_white_sized.jpg?v=1779988642",
    gallery: ["https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_49_pro__shopify_white_sized.jpg?v=1779988642","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_49_pro_lifestyle_16_woo.jpg?v=1777388218","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_49_pro_lifestyle_21_woo_optimized.jpg?v=1778256181","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_49_pro_lifestyle_9_woo_optimized.jpg?v=1778256182"],
    shortDesc: "The Flair 49 PRO Refurbished is the latest evolution in the PRO lineup and the most advanced all manual lever espresso machine ever created by Flair Espresso. Designed for pas...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Flair Espresso (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Flair Espresso","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://flairespresso.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Flair Espresso (Global)",
                "price": 236.95,
                "inStock": false,
                "url": "https://flairespresso.com/products/flair-49-pro-refurbished",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 248.8,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Flair%20Espresso%20Flair%2049%20Pro%20Refurbished&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "flair-espresso-flair-58-plus-2-power-supply",
    slug: "flair-espresso-flair-58-plus-2-power-supply",
    name: "Flair Espresso — Flair 58 Plus 2 Power Supply",
    brand: "Flair Espresso",
    category: "maquinas",
    subCategory: "Máquinas de Café",
    price: 60.95,
    oldPrice: null,
    historicalAveragePrice: 64.61,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_58_plus_2_base_upgrade_kit_power_supply_woo_112946be-9377-4efb-b21e-6e381b474cd6.jpg?v=1785883182",
    gallery: ["https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_58_plus_2_base_upgrade_kit_power_supply_woo_112946be-9377-4efb-b21e-6e381b474cd6.jpg?v=1785883182","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_58_plus_2_lifestyle_10_small_20fae8f0-3c7e-4a71-95e7-45b24c3b7a4f.jpg?v=1785883231"],
    shortDesc: "The Flair 58 Plus 2 Power Supply is for 110v systems is company and provides direct power for your Flair 58 Plus 2 manual espresso machine. Featuring a 4 foot cord for simplif...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Flair Espresso (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Flair Espresso","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://flairespresso.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Flair Espresso (Global)",
                "price": 60.95,
                "inStock": true,
                "url": "https://flairespresso.com/products/flair-58-plus-2-power-supply",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 64,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Flair%20Espresso%20Flair%2058%20Plus%202%20Power%20Supply&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "flair-espresso-second-shot-plus-2026",
    slug: "flair-espresso-second-shot-plus-2026",
    name: "Flair Espresso — Second Shot Plus – 2026",
    brand: "Flair Espresso",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 64.95,
    oldPrice: null,
    historicalAveragePrice: 68.85,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0983/8097/2334/files/second_shot_plus_2026_shopify.jpg?v=1784313240",
    gallery: ["https://cdn.shopify.com/s/files/1/0983/8097/2334/files/second_shot_plus_2026_shopify.jpg?v=1784313240","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/second_shot_plus_standard_bottomless_2026_shopify.jpg?v=1784313240","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/second_shot_plus_standard_fcpf_2026_shopify.jpg?v=1784313240","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/05-7c3a15-a88e4a80e15842f4a7b8077c36fae23b-mv2-d-3151-2100-s-2-5_6ea2994c-d8d0-4353-b719-24097cc6b73a.jpg?v=1782104114"],
    shortDesc: "Buy a Second Shot Plus for your Flair Classic, Flair 2GO or NEO Flex. Featuring the Heat-efficient, Thin Cylinder and an additional pressure gauge for brewing multiple shots b...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Flair Espresso (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Flair Espresso","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://flairespresso.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Flair Espresso (Global)",
                "price": 64.95,
                "inStock": true,
                "url": "https://flairespresso.com/products/second-shot-plus-2026",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 68.2,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Flair%20Espresso%20Second%20Shot%20Plus%20%E2%80%93%202026&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "flair-espresso-flair-58-plus-2-portafilter-baskets",
    slug: "flair-espresso-flair-58-plus-2-portafilter-baskets",
    name: "Flair Espresso — Flair 58 Plus 2 Portafilter Baskets",
    brand: "Flair Espresso",
    category: "accesorios",
    subCategory: "Herramientas Barista",
    price: 19.95,
    oldPrice: null,
    historicalAveragePrice: 21.15,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0983/8097/2334/files/58_plus_2_baskets_shopify.jpg?v=1784311245",
    gallery: ["https://cdn.shopify.com/s/files/1/0983/8097/2334/files/58_plus_2_baskets_shopify.jpg?v=1784311245","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/58_High_Dose_PF_Lifestyle.jpg?v=1784311332","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/58_Low_Dose_PF_Lifestyle.jpg?v=1784311332","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/58_plus_2_Low_Dose_PF_shopify.jpg?v=1784311448"],
    shortDesc: "Select one of two Flair 58 Plus 2 portafilter baskets, our Low Dose or the High Dose model. Both are 18 gram baskets, and can usually accept between 15-20 grams dose. High Dos...",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Flair Espresso (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Flair Espresso","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://flairespresso.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Flair Espresso (Global)",
                "price": 19.95,
                "inStock": true,
                "url": "https://flairespresso.com/products/flair-58-plus-2-portafilter-baskets",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 20.95,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Flair%20Espresso%20Flair%2058%20Plus%202%20Portafilter%20Baskets&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "flair-espresso-electric-steam-kit-flair-58-plus-2",
    slug: "flair-espresso-electric-steam-kit-flair-58-plus-2",
    name: "Flair Espresso — Electric Steam Kit: Flair 58 Plus 2",
    brand: "Flair Espresso",
    category: "maquinas",
    subCategory: "Máquinas de Café",
    price: 877.95,
    oldPrice: null,
    historicalAveragePrice: 930.63,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0983/8097/2334/files/58Plus_2_Electric_Steam_PRO_sized.jpg?v=1782776526",
    gallery: ["https://cdn.shopify.com/s/files/1/0983/8097/2334/files/58Plus_2_Electric_Steam_PRO_sized.jpg?v=1782776526","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/05-flair-58-plus-2-base-upgrade-lifestyle-optimized.jpg?v=1782104160","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_58_plus_2_sac_shopify.jpg?v=1781043244","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_58_plus_2_lifestyle_7.jpg?v=1779985832"],
    shortDesc: "The Flair 58 Plus 2 is the flagship manual espresso maker from Flair, which allows full control over all brew variables and a custom electric preheat system to ensure repeatab...",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Flair Espresso (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Flair Espresso","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://flairespresso.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Flair Espresso (Global)",
                "price": 877.95,
                "inStock": true,
                "url": "https://flairespresso.com/products/electric-steam-flair-58-plus-2",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 921.85,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Flair%20Espresso%20Electric%20Steam%20Kit%3A%20Flair%2058%20Plus%202&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "flair-espresso-stovetop-steam-kit-flair-58-plus-2",
    slug: "flair-espresso-stovetop-steam-kit-flair-58-plus-2",
    name: "Flair Espresso — Stovetop Steam Kit: Flair 58 Plus 2",
    brand: "Flair Espresso",
    category: "maquinas",
    subCategory: "Máquinas de Café",
    price: 776.95,
    oldPrice: null,
    historicalAveragePrice: 823.57,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0983/8097/2334/files/58Plus_2_Stovetop_Steam_PRO_sized_c64358d6-d30a-41a8-90a9-f6a27bfbb1bd.jpg?v=1782776410",
    gallery: ["https://cdn.shopify.com/s/files/1/0983/8097/2334/files/58Plus_2_Stovetop_Steam_PRO_sized_c64358d6-d30a-41a8-90a9-f6a27bfbb1bd.jpg?v=1782776410","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/05-flair-58-plus-2-base-upgrade-lifestyle-optimized.jpg?v=1782104160","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_58_plus_2_sac_shopify.jpg?v=1781043244","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/wizard_lifestyle_16.jpg?v=1782867940"],
    shortDesc: "The Flair 58 Plus 2 is the flagship manual espresso maker from Flair, which allows full control over all brew variables and a custom electric preheat system to ensure repeatab...",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Flair Espresso (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Flair Espresso","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://flairespresso.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Flair Espresso (Global)",
                "price": 776.95,
                "inStock": true,
                "url": "https://flairespresso.com/products/stovetop-steam-kit-flair-58-plus-2",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 815.8,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Flair%20Espresso%20Stovetop%20Steam%20Kit%3A%20Flair%2058%20Plus%202&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "flair-espresso-electric-steam-kit-flair-49-pro",
    slug: "flair-espresso-electric-steam-kit-flair-49-pro",
    name: "Flair Espresso — Electric Steam Kit: Flair 49 PRO",
    brand: "Flair Espresso",
    category: "maquinas",
    subCategory: "Máquinas de Café",
    price: 579.95,
    oldPrice: null,
    historicalAveragePrice: 614.75,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0983/8097/2334/files/49_Pro_Electric_Steam_PRO_sized.jpg?v=1782774899",
    gallery: ["https://cdn.shopify.com/s/files/1/0983/8097/2334/files/49_Pro_Electric_Steam_PRO_sized.jpg?v=1782774899","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_49_pro_lifestyle_9_woo.jpg?v=1780007526","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_49_pro_lifestyle_7_woo_optimized.jpg?v=1778256181","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_49_pro_lifestyle_5_woo_optimized.jpg?v=1778256181"],
    shortDesc: "The Flair 49 PRO is the most advanced all-manual espresso maker from Flair, with no electronics. Brew cafe-quality espresso with the deep 49mm portafilter basket, which improv...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Flair Espresso (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Flair Espresso","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://flairespresso.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Flair Espresso (Global)",
                "price": 579.95,
                "inStock": true,
                "url": "https://flairespresso.com/products/electric-steam-kit-flair-49-pro",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 608.95,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Flair%20Espresso%20Electric%20Steam%20Kit%3A%20Flair%2049%20PRO&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "flair-espresso-stovetop-steam-kit-flair-49-pro",
    slug: "flair-espresso-stovetop-steam-kit-flair-49-pro",
    name: "Flair Espresso — Stovetop Steam Kit: Flair 49 PRO",
    brand: "Flair Espresso",
    category: "maquinas",
    subCategory: "Máquinas de Café",
    price: 478.95,
    oldPrice: null,
    historicalAveragePrice: 507.69,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0983/8097/2334/files/49_PRO_Stovetop_Steam_PRO_sized.jpg?v=1782775117",
    gallery: ["https://cdn.shopify.com/s/files/1/0983/8097/2334/files/49_PRO_Stovetop_Steam_PRO_sized.jpg?v=1782775117","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_49_pro_lifestyle_7_woo_optimized_9cdaf8ac-c727-4c84-8f5d-945f42e3822d.jpg?v=1781828956","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_49_pro_lifestyle_9_woo.jpg?v=1780007526","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_49_pro_lifestyle_5_woo_optimized_10893993-801b-40b5-af3c-58f52b5283ae.jpg?v=1778258644"],
    shortDesc: "The Flair 49 PRO is the most advanced all-manual espresso maker from Flair, with no electronics. Brew cafe-quality espresso with the deep 49mm portafilter basket, which improv...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Flair Espresso (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Flair Espresso","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://flairespresso.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Flair Espresso (Global)",
                "price": 478.95,
                "inStock": true,
                "url": "https://flairespresso.com/products/stovetop-steam-kit-flair-49-pro",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 502.9,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Flair%20Espresso%20Stovetop%20Steam%20Kit%3A%20Flair%2049%20PRO&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "flair-espresso-electric-steam-kit-flair-classic",
    slug: "flair-espresso-electric-steam-kit-flair-classic",
    name: "Flair Espresso — Electric Steam Kit: Flair Classic",
    brand: "Flair Espresso",
    category: "maquinas",
    subCategory: "Máquinas de Café",
    price: 403.95,
    oldPrice: null,
    historicalAveragePrice: 428.19,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0983/8097/2334/files/Classic_Electric_Steam_PRO_sized.jpg?v=1782775553",
    gallery: ["https://cdn.shopify.com/s/files/1/0983/8097/2334/files/Classic_Electric_Steam_PRO_sized.jpg?v=1782775553","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_classic_shopify_top.jpg?v=1781042939","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_classic_gauge_optimized.jpg?v=1778256909","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/ewizard_lifestyle_sac_7_woo.jpg?v=1780008173"],
    shortDesc: "The Flair Classic is the original Flair Espresso Maker that creates cafe-quality espresso with a direct lever system. Featuring two portafilters, one for beginners and one for...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Flair Espresso (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Flair Espresso","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://flairespresso.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Flair Espresso (Global)",
                "price": 403.95,
                "inStock": true,
                "url": "https://flairespresso.com/products/electric-steam-kit-flair-classic",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 424.15,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Flair%20Espresso%20Electric%20Steam%20Kit%3A%20Flair%20Classic&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "flair-espresso-stovetop-steam-kit-flair-classic",
    slug: "flair-espresso-stovetop-steam-kit-flair-classic",
    name: "Flair Espresso — Stovetop Steam Kit: Flair Classic",
    brand: "Flair Espresso",
    category: "maquinas",
    subCategory: "Máquinas de Café",
    price: 302.95,
    oldPrice: null,
    historicalAveragePrice: 321.13,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0983/8097/2334/files/Classic_Stovetop_Steam_PRO_sized.jpg?v=1782775658",
    gallery: ["https://cdn.shopify.com/s/files/1/0983/8097/2334/files/Classic_Stovetop_Steam_PRO_sized.jpg?v=1782775658","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_classic_shopify_top.jpg?v=1781042939","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_classic_gauge_optimized.jpg?v=1778256909","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_classic_portafilters_optimized.jpg?v=1778256909"],
    shortDesc: "The Flair Classic is the original Flair Espresso Maker that creates cafe-quality espresso with a direct lever system. Featuring two portafilters, one for beginners and one for...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Flair Espresso (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Flair Espresso","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://flairespresso.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Flair Espresso (Global)",
                "price": 302.95,
                "inStock": true,
                "url": "https://flairespresso.com/products/stovetop-steam-kit-flair-classic",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 318.1,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Flair%20Espresso%20Stovetop%20Steam%20Kit%3A%20Flair%20Classic&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "flair-espresso-steam-travel-kit-pro-flair-2go",
    slug: "flair-espresso-steam-travel-kit-pro-flair-2go",
    name: "Flair Espresso — Steam Travel Kit PRO: Flair 2GO",
    brand: "Flair Espresso",
    category: "maquinas",
    subCategory: "Máquinas de Café",
    price: 467.95,
    oldPrice: null,
    historicalAveragePrice: 496.03,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0983/8097/2334/files/2GO_Steam_Travel_Kit_PRO_sized.jpg?v=1782849941",
    gallery: ["https://cdn.shopify.com/s/files/1/0983/8097/2334/files/2GO_Steam_Travel_Kit_PRO_sized.jpg?v=1782849941","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/04-milk-pitcher-press-release-handle-2-woo-optimized.jpg?v=1782103825","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/wizard_steamer_category_woo_optimized.jpg?v=1778160450","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_2go_square_woo_optimized_1d9d1056-8646-4d1a-be15-2ceab732882f.jpg?v=1781828297"],
    shortDesc: "The Flair 2GO is the most portable lever espresso maker, with a collapsible body and fits into a customized carrying case. Featuring a bottomless portafilter and pressure gaug...",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Flair Espresso (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Flair Espresso","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://flairespresso.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Flair Espresso (Global)",
                "price": 467.95,
                "inStock": true,
                "url": "https://flairespresso.com/products/steam-travel-kit-pro-flair-2go",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 491.35,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Flair%20Espresso%20Steam%20Travel%20Kit%20PRO%3A%20Flair%202GO&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "flair-espresso-flair-58-stainless-steel-joint-hook-upgrade",
    slug: "flair-espresso-flair-58-stainless-steel-joint-hook-upgrade",
    name: "Flair Espresso — Flair 58 Stainless Steel Joint Hook Upgrade",
    brand: "Flair Espresso",
    category: "maquinas",
    subCategory: "Máquinas de Café",
    price: 29.95,
    oldPrice: null,
    historicalAveragePrice: 31.75,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0983/8097/2334/files/Joint_Hook_White_Background_upgrade_kit.jpg?v=1784231562",
    gallery: ["https://cdn.shopify.com/s/files/1/0983/8097/2334/files/Joint_Hook_White_Background_upgrade_kit.jpg?v=1784231562","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/Joint_Hook_Lifestyle_3.jpg?v=1783452818","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/Joint_Hook_Lifestyle_Hero.jpg?v=1783452818","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/Joint_Hook_Lifestyle_1_sized.jpg?v=1783453137"],
    shortDesc: "The Flair 58 Stainless Steel Joint Hook Upgrade Kit is perfect for anyone wanting no plastic coming into contact with their espresso while brewing. Install for a fully stainle...",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Flair Espresso (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Flair Espresso","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://flairespresso.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Flair Espresso (Global)",
                "price": 29.95,
                "inStock": false,
                "url": "https://flairespresso.com/products/flair-58-stainless-steel-joint-hook-upgrade",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 31.45,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Flair%20Espresso%20Flair%2058%20Stainless%20Steel%20Joint%20Hook%20Upgrade&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "flair-espresso-flair-58-pressurized-basket",
    slug: "flair-espresso-flair-58-pressurized-basket",
    name: "Flair Espresso — Flair 58 Pressurized Basket",
    brand: "Flair Espresso",
    category: "maquinas",
    subCategory: "Máquinas de Café",
    price: 19.95,
    oldPrice: null,
    historicalAveragePrice: 21.15,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_58_plus_2_Pressurized_PF_shopify.jpg?v=1784750815",
    gallery: ["https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_58_plus_2_Pressurized_PF_shopify.jpg?v=1784750815","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_58_plus_2_Pressurized_PF_Lifestyle_shopify.jpg?v=1784750832"],
    shortDesc: "The Flair 58 Pressurized Basket fits in any 58mm portafilter from Flair Espresso, as well as others, and generates the pressure needed to extract espresso without a high-end b...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Flair Espresso (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Flair Espresso","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://flairespresso.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Flair Espresso (Global)",
                "price": 19.95,
                "inStock": true,
                "url": "https://flairespresso.com/products/flair-58-pressurized-basket",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 20.95,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Flair%20Espresso%20Flair%2058%20Pressurized%20Basket&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "flair-espresso-steam-travel-kit-flair-2go",
    slug: "flair-espresso-steam-travel-kit-flair-2go",
    name: "Flair Espresso — Steam Travel Kit: Flair 2GO",
    brand: "Flair Espresso",
    category: "maquinas",
    subCategory: "Máquinas de Café",
    price: 408.95,
    oldPrice: null,
    historicalAveragePrice: 433.49,
    isOffer: false,
    score: new CoffeeScore(9),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0983/8097/2334/files/2GO_Steam_Travel_Kit_sized.jpg?v=1782849859",
    gallery: ["https://cdn.shopify.com/s/files/1/0983/8097/2334/files/2GO_Steam_Travel_Kit_sized.jpg?v=1782849859","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/wizard_steamer_category_woo_optimized.jpg?v=1778160450","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_2go_square_woo_optimized_1d9d1056-8646-4d1a-be15-2ceab732882f.jpg?v=1781828297","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/royal_woo_3_sized_woo_black_optimized.jpg?v=1782777030"],
    shortDesc: "The Flair 2GO is the most portable lever espresso maker, with a collapsible body and fits into a customized carrying case. Featuring a bottomless portafilter and pressure gaug...",
    subscores: {"espresso":9,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Flair Espresso (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Flair Espresso","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://flairespresso.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Flair Espresso (Global)",
                "price": 408.95,
                "inStock": true,
                "url": "https://flairespresso.com/products/steam-travel-kit-flair-2go",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 429.4,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Flair%20Espresso%20Steam%20Travel%20Kit%3A%20Flair%202GO&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "flair-espresso-travel-kit-flair-2go",
    slug: "flair-espresso-travel-kit-flair-2go",
    name: "Flair Espresso — Travel Kit: Flair 2GO",
    brand: "Flair Espresso",
    category: "maquinas",
    subCategory: "Máquinas de Café",
    price: 266.95,
    oldPrice: null,
    historicalAveragePrice: 282.97,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0983/8097/2334/files/2Go_Travel_Kit_sized_logo.jpg?v=1782850201",
    gallery: ["https://cdn.shopify.com/s/files/1/0983/8097/2334/files/2Go_Travel_Kit_sized_logo.jpg?v=1782850201","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/royal_woo_3_sized_woo_black_optimized.jpg?v=1782777030","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_2go_square_woo_optimized_1d9d1056-8646-4d1a-be15-2ceab732882f.jpg?v=1781828297","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_2go_ks_folded_square_small_optimized_ca4c16fe-f58b-4d1b-bdfc-709951010b25.jpg?v=1781828335"],
    shortDesc: "The Flair 2GO is the most portable lever espresso maker, with a collapsible body and fits into a customized carrying case. Featuring a bottomless portafilter and pressure gaug...",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Flair Espresso (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Flair Espresso","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://flairespresso.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Flair Espresso (Global)",
                "price": 266.95,
                "inStock": true,
                "url": "https://flairespresso.com/products/travel-kit-flair-2go",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 280.3,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Flair%20Espresso%20Travel%20Kit%3A%20Flair%202GO&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "flair-espresso-grinder-kit-flair-classic",
    slug: "flair-espresso-grinder-kit-flair-classic",
    name: "Flair Espresso — Grinder Kit: Flair Classic",
    brand: "Flair Espresso",
    category: "molinos",
    subCategory: "Molinillos",
    price: 294.95,
    oldPrice: null,
    historicalAveragePrice: 312.65,
    isOffer: false,
    score: new CoffeeScore(9.8),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0983/8097/2334/files/Classic_Grind_Bundle_sized.jpg?v=1782775427",
    gallery: ["https://cdn.shopify.com/s/files/1/0983/8097/2334/files/Classic_Grind_Bundle_sized.jpg?v=1782775427","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_brew_scale_shopify.jpg?v=1781042342","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_classic_shopify_top.jpg?v=1781042939","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_classic_gauge_optimized.jpg?v=1778256909"],
    shortDesc: "The Flair Classic is the original Flair Espresso Maker that creates cafe-quality espresso with a direct lever system. Featuring two portafilters, one for beginners and one for...",
    subscores: {"espresso":9.8,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Flair Espresso (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Flair Espresso","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://flairespresso.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Flair Espresso (Global)",
                "price": 294.95,
                "inStock": true,
                "url": "https://flairespresso.com/products/grinder-kit-flair-classic",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 309.7,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Flair%20Espresso%20Grinder%20Kit%3A%20Flair%20Classic&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "flair-espresso-espresso-bar-kit-flair-classic",
    slug: "flair-espresso-espresso-bar-kit-flair-classic",
    name: "Flair Espresso — Espresso Bar Kit: Flair Classic",
    brand: "Flair Espresso",
    category: "maquinas",
    subCategory: "Máquinas de Café",
    price: 463.95,
    oldPrice: null,
    historicalAveragePrice: 491.79,
    isOffer: false,
    score: new CoffeeScore(9.4),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0983/8097/2334/files/Classic_Full_Espresso_Bar_sized.jpg?v=1782849522",
    gallery: ["https://cdn.shopify.com/s/files/1/0983/8097/2334/files/Classic_Full_Espresso_Bar_sized.jpg?v=1782849522","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_classic_shopify_top.jpg?v=1781042939","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_classic_gauge_optimized.jpg?v=1778256909","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/ewizard_lifestyle_sac_7_woo.jpg?v=1780008173"],
    shortDesc: "The Flair Classic is the original Flair Espresso Maker that creates cafe-quality espresso with a direct lever system. Featuring two portafilters, one for beginners and one for...",
    subscores: {"espresso":9.4,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Flair Espresso (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Flair Espresso","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://flairespresso.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Flair Espresso (Global)",
                "price": 463.95,
                "inStock": false,
                "url": "https://flairespresso.com/products/espresso-bar-kit-flair-classic",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 487.15,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Flair%20Espresso%20Espresso%20Bar%20Kit%3A%20Flair%20Classic&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "flair-espresso-grinder-kit-flair-49-pro",
    slug: "flair-espresso-grinder-kit-flair-49-pro",
    name: "Flair Espresso — Grinder Kit: Flair 49 PRO",
    brand: "Flair Espresso",
    category: "molinos",
    subCategory: "Molinillos",
    price: 470.95,
    oldPrice: null,
    historicalAveragePrice: 499.21,
    isOffer: false,
    score: new CoffeeScore(9.7),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0983/8097/2334/files/49_PRO_Grind_Bundle_sized.jpg?v=1782775000",
    gallery: ["https://cdn.shopify.com/s/files/1/0983/8097/2334/files/49_PRO_Grind_Bundle_sized.jpg?v=1782775000","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_49_pro_lifestyle_7_woo_optimized.jpg?v=1778256181","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_49_pro_lifestyle_5_woo_optimized.jpg?v=1778256181","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/royal_manual_back_2022_woo_black_optimized.jpg?v=1782776779"],
    shortDesc: "The Flair 49 PRO is the most advanced all-manual espresso maker from Flair, with no electronics. Brew cafe-quality espresso with the deep 49mm portafilter basket, which improv...",
    subscores: {"espresso":9.7,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Flair Espresso (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Flair Espresso","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://flairespresso.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Flair Espresso (Global)",
                "price": 470.95,
                "inStock": true,
                "url": "https://flairespresso.com/products/grinder-kit-flair-49-pro",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 494.5,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Flair%20Espresso%20Grinder%20Kit%3A%20Flair%2049%20PRO&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "flair-espresso-espresso-bar-kit-flair-49-pro",
    slug: "flair-espresso-espresso-bar-kit-flair-49-pro",
    name: "Flair Espresso — Espresso Bar Kit: Flair 49 PRO",
    brand: "Flair Espresso",
    category: "maquinas",
    subCategory: "Máquinas de Café",
    price: 639.95,
    oldPrice: null,
    historicalAveragePrice: 678.35,
    isOffer: false,
    score: new CoffeeScore(9.3),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0983/8097/2334/files/49_Pro_Full_Espresso_Bar_sized.jpg?v=1782849433",
    gallery: ["https://cdn.shopify.com/s/files/1/0983/8097/2334/files/49_Pro_Full_Espresso_Bar_sized.jpg?v=1782849433","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_49_pro_lifestyle_7_woo_optimized.jpg?v=1778256181","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_49_pro_lifestyle_5_woo_optimized.jpg?v=1778256181","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/ewizard_lifestyle_sac_7_woo.jpg?v=1780008173"],
    shortDesc: "The Flair 49 PRO is the most advanced all-manual espresso maker from Flair, with no electronics. Brew cafe-quality espresso with the deep 49mm portafilter basket, which improv...",
    subscores: {"espresso":9.3,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Flair Espresso (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Flair Espresso","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://flairespresso.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Flair Espresso (Global)",
                "price": 639.95,
                "inStock": false,
                "url": "https://flairespresso.com/products/espresso-bar-kit-flair-49-pro",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 671.95,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Flair%20Espresso%20Espresso%20Bar%20Kit%3A%20Flair%2049%20PRO&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "flair-espresso-grinder-kit-flair-58-plus-2",
    slug: "flair-espresso-grinder-kit-flair-58-plus-2",
    name: "Flair Espresso — Grinder Kit: Flair 58 Plus 2",
    brand: "Flair Espresso",
    category: "molinos",
    subCategory: "Molinillos",
    price: 768.95,
    oldPrice: null,
    historicalAveragePrice: 815.09,
    isOffer: false,
    score: new CoffeeScore(9.1),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0983/8097/2334/files/58_Plus_2_Grind_Bundle_sized.jpg?v=1782776241",
    gallery: ["https://cdn.shopify.com/s/files/1/0983/8097/2334/files/58_Plus_2_Grind_Bundle_sized.jpg?v=1782776241","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/05-flair-58-plus-2-base-upgrade-lifestyle-optimized.jpg?v=1782104160","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_58_plus_2_sac_shopify.jpg?v=1781043244","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_58_plus_2_lifestyle_7.jpg?v=1779985832"],
    shortDesc: "The Flair 58 Plus 2 is the flagship manual espresso maker from Flair, which allows full control over all brew variables and a custom electric preheat system to ensure repeatab...",
    subscores: {"espresso":9.1,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Flair Espresso (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Flair Espresso","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://flairespresso.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Flair Espresso (Global)",
                "price": 768.95,
                "inStock": true,
                "url": "https://flairespresso.com/products/grind-bundle-flair-58-plus-2",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 807.4,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Flair%20Espresso%20Grinder%20Kit%3A%20Flair%2058%20Plus%202&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "flair-espresso-espresso-bar-kit-flair-58-plus-2",
    slug: "flair-espresso-espresso-bar-kit-flair-58-plus-2",
    name: "Flair Espresso — Espresso Bar Kit: Flair 58 Plus 2",
    brand: "Flair Espresso",
    category: "maquinas",
    subCategory: "Máquinas de Café",
    price: 937.95,
    oldPrice: null,
    historicalAveragePrice: 994.23,
    isOffer: false,
    score: new CoffeeScore(9.6),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0983/8097/2334/files/58_Plus_2_Full_Espresso_Bar_sized.jpg?v=1782849592",
    gallery: ["https://cdn.shopify.com/s/files/1/0983/8097/2334/files/58_Plus_2_Full_Espresso_Bar_sized.jpg?v=1782849592","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/flair_58_plus_2_sac_shopify.jpg?v=1781043244","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/05-flair-58-plus-2-base-upgrade-lifestyle-optimized.jpg?v=1782104160","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/ewizard_lifestyle_sac_7_woo.jpg?v=1780008173"],
    shortDesc: "The Flair 58 Plus 2 is the flagship manual espresso maker from Flair, which allows full control over all brew variables and a custom electric preheat system to ensure repeatab...",
    subscores: {"espresso":9.6,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Flair Espresso (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Flair Espresso","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://flairespresso.com","Disponibilidad":"Agotado"},
    stores: [
          {
                "name": "Flair Espresso (Global)",
                "price": 937.95,
                "inStock": false,
                "url": "https://flairespresso.com/products/espresso-bar-kit-flair-58-plus-2",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 984.85,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Flair%20Espresso%20Espresso%20Bar%20Kit%3A%20Flair%2058%20Plus%202&tag=thecoffeescore-21"
          }
    ]
  },
  {
    id: "flair-espresso-analog-milk-steaming-thermometer",
    slug: "flair-espresso-analog-milk-steaming-thermometer",
    name: "Flair Espresso — Analog Milk Steaming Thermometer",
    brand: "Flair Espresso",
    category: "cafe",
    subCategory: "Café de Especialidad",
    price: 7.95,
    oldPrice: null,
    historicalAveragePrice: 8.43,
    isOffer: false,
    score: new CoffeeScore(9.5),
    stars: 4.8,
    badge: "Norteamérica",
    image: "https://cdn.shopify.com/s/files/1/0983/8097/2334/files/Analog_Thermometer_3_woo_optimized_6a44d96f-a962-4d35-87b7-0bd483d5fc75.jpg?v=1782242392",
    gallery: ["https://cdn.shopify.com/s/files/1/0983/8097/2334/files/Analog_Thermometer_3_woo_optimized_6a44d96f-a962-4d35-87b7-0bd483d5fc75.jpg?v=1782242392","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/Analog_Thermometer_Lifestyle_2_woo_optimized_f25262bc-385e-4548-8689-b361527a3566.jpg?v=1782242392","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/Analog_Thermometer_Lifestyle_1_woo_optimized_af1ba364-ea62-4dbc-a7cd-c4b68ccb4d7d.jpg?v=1782242392","https://cdn.shopify.com/s/files/1/0983/8097/2334/files/Analog_Thermometer_2_woo_optimized_c6de1701-f9c5-4c37-89cc-0a59982ed1e8.jpg?v=1782242392"],
    shortDesc: "Achieve perfectly steamed milk every time with the Flair Analog Milk Steaming Thermometer—designed for baristas, home espresso enthusiasts, and anyone crafting café-quality dr...",
    subscores: {"espresso":9.5,"vapor":5,"facilidad":9.4,"construccion":9.3,"precio":9.2},
    pros: ["Directo de Flair Espresso (Global)","Calidad y frescura garantizada por el productor","Trazabilidad y comercio transparente"],
    cons: ["Disponibilidad sujeta a stock de temporada"],
    specs: {"Marca / Tostador":"Flair Espresso","País de Origen":"Global","Región":"Norteamérica","Tienda Oficial":"https://flairespresso.com","Disponibilidad":"En Stock"},
    stores: [
          {
                "name": "Flair Espresso (Global)",
                "price": 7.95,
                "inStock": true,
                "url": "https://flairespresso.com/products/analog-milk-steaming-thermometer",
                "isBest": true
          },
          {
                "name": "Amazon España",
                "price": 8.35,
                "inStock": true,
                "url": "https://www.amazon.es/s?k=Flair%20Espresso%20Analog%20Milk%20Steaming%20Thermometer&tag=thecoffeescore-21"
          }
    ]
  },
];

export const BARCELONA_ROASTERS: BarcelonaRoaster[] = [
  {
    name: 'Nomad Coffee',
    district: 'Poblenou / Born',
    priceKg: 38,
    origins: 'Colombia, Etiopía, Ruanda, Kenia',
    roastFreq: 'Semanal (Lunes y Miércoles)',
    score: 9.4,
    signature: 'Samuel Washed / Shakiso Hadeso'
  },
  {
    name: 'Right Side Coffee',
    district: 'Castelldefels / BCN',
    priceKg: 36,
    origins: 'Colombia, Etiopía, Guatemala, Brasil',
    roastFreq: 'Semanal (Bajo demanda)',
    score: 9.3,
    signature: 'Abasambi / Ancizar Narváez'
  },
  {
    name: 'Three Marks Coffee',
    district: 'Fort Pienc / Poblenou',
    priceKg: 40,
    origins: 'Kenia, Ruanda, Colombia, Brasil',
    roastFreq: 'Semanal (Martes)',
    score: 9.3,
    signature: 'Seasonal Espresso / Rwanda Gitesi'
  },
  {
    name: 'Syra Coffee',
    district: 'Gràcia / Eixample',
    priceKg: 32,
    origins: 'Guatemala, Etiopía, Brasil, Honduras',
    roastFreq: 'Semanal continuo',
    score: 9.1,
    signature: 'Atitlán / Bahire'
  },
  {
    name: "Satan's Coffee Corner",
    district: 'Gòtic / Eixample',
    priceKg: 35,
    origins: 'Etiopía, Kenia, Colombia',
    roastFreq: 'Semanal',
    score: 9.0,
    signature: 'Right Side Custom Roast'
  },
  {
    name: 'SlowMov',
    district: 'Gràcia',
    priceKg: 39,
    origins: 'Etiopía, Burundi, Colombia',
    roastFreq: 'Semanal (Loring S15)',
    score: 9.2,
    signature: 'Microlotes trazables'
  },
  {
    name: 'Hidden Coffee Roasters',
    district: 'Les Corts / El Born',
    priceKg: 36,
    origins: 'Nicaragua, Etiopía, Brasil',
    roastFreq: 'Semanal',
    score: 9.1,
    signature: 'Volcán Azul / Finca Bethania'
  },
  {
    name: 'Morrow Coffee',
    district: 'Eixample Esquerra',
    priceKg: 34,
    origins: 'Colombia, Etiopía, Brasil',
    roastFreq: 'Semanal (En tienda)',
    score: 8.9,
    signature: 'Tueste propio en directo'
  }
];

export const BUYING_GUIDES: BuyingGuide[] = [
  {
    id: 'guia-primera-cafetera-espresso',
    slug: 'primera-cafetera-espresso-manual',
    title: 'Tu primera cafetera de espresso: qué buscar y qué ignorar',
    subtitle: 'Por qué los bares de presión no importan, cómo el control de temperatura define el sabor y qué presupuesto mínimo necesitas para no tirar el dinero.',
    category: 'Guías de compra',
    readTime: '8 min de lectura',
    image: '/assets/products/sage-bambino.png',
    featured: true,
    publishedAt: '2026-08-15'
  },
  {
    id: 'guia-molinillo-antes-que-cafetera',
    slug: 'por-que-el-molinillo-es-mas-importante-que-la-cafetera',
    title: 'Por qué el molinillo es más importante que la propia cafetera',
    subtitle: 'Un análisis con microscopio de la distribución de partículas: la diferencia entre muelas cónicas y planas en la extracción real del café.',
    category: 'Técnica y equipo',
    readTime: '12 min de lectura',
    image: '/assets/products/fellow-ode-gen-2.png',
    featured: false,
    publishedAt: '2026-08-10'
  },
  {
    id: 'guia-sage-vs-delonghi',
    slug: 'sage-bambino-plus-vs-delonghi-dedica',
    title: 'Sage Bambino Plus vs De’Longhi Dedica: la comparativa definitiva',
    subtitle: 'Enfrentamos las dos cafeteras compactas más vendidas del mercado en cinco pruebas ciegas de extracción, estabilidad térmica y vapor.',
    category: 'Cara a cara',
    readTime: '10 min de lectura',
    image: '/assets/products/sage-bambino.png',
    featured: false,
    publishedAt: '2026-08-05'
  },
  {
    id: 'guia-mejores-molinos-calidad-precio',
    slug: 'mejores-molinos-cafe-calidad-precio',
    title: 'Los mejores molinos de café de 2026 por rango de precio',
    subtitle: 'De 50€ a 600€: qué modelo comprar según si tomas espresso, filtro o ambos, medido con retención y uniformidad.',
    category: 'Rankings',
    readTime: '15 min de lectura',
    image: '/assets/products/coffee-grinders-compare.png',
    featured: false,
    publishedAt: '2026-08-01'
  },
  {
    id: 'guia-setup-barista-casa-menos-500',
    slug: 'setup-barista-en-casa-por-menos-de-500-euros',
    title: 'Cómo montar un setup de barista completo en casa por menos de 500 €',
    subtitle: 'La combinación exacta de máquina, molinillo y accesorios imprescindibles para conseguir espresso de cafetería sin arruinarte.',
    category: 'Presupuestos',
    readTime: '7 min de lectura',
    image: '/assets/products/aeropress.png',
    featured: false,
    publishedAt: '2026-07-28'
  }
];
