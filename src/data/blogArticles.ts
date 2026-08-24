export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  source: string;
  sourceUrl: string;
  author: string;
  category: 'Tecnica' | 'Origen' | 'Equipamiento' | 'Tueste' | 'Cultura';
  publishDate: string;
  readTime: string;
  imageUrl: string;
  excerpt: string;
  tags: string[];
  featured?: boolean;
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "art-1",
    slug: "como-afecta-el-agua-a-la-extraccion-del-espresso",
    title: "La química del agua en el espresso: cómo magnesio y bicarbonatos transforman tu taza",
    source: "The World Atlas of Coffee / James Hoffmann",
    sourceUrl: "https://www.youtube.com/@jameshoffmann",
    author: "James Hoffmann",
    category: "Tecnica",
    publishDate: "Hoy, 09:15",
    readTime: "6 min",
    imageUrl: "/assets/pouring.png",
    excerpt: "El 98% de tu espresso es agua. Desglosamos por qué un agua con TDS 120 ppm y ratio 2:1 de magnesio frente a calcio extrae más compuestos aromáticos sin aportar astringencia amarga.",
    tags: ["Química del café", "Extracción", "Agua para espresso", "Laboratorio"],
    featured: true,
  },
  {
    id: "art-2",
    slug: "fermentaciones-anaerobicas-innovacion-en-origen",
    title: "Doble fermentación anaeróbica térmica: la revolución del procesado en Colombia y Etiopía",
    source: "Perfect Daily Grind",
    sourceUrl: "https://perfectdailygrind.com/es/",
    author: "Tanya Newton",
    category: "Origen",
    publishDate: "Hoy, 08:30",
    readTime: "8 min",
    imageUrl: "/assets/cherries.png",
    excerpt: "Analizamos cómo productores pioneros como Diego Bermúdez controlan levaduras y choque térmico para amplificar precursores aromáticos de jazmín y frutas tropicales.",
    tags: ["Fermentación", "Procesos", "Colombia", "SCA 90+"],
    featured: true,
  },
  {
    id: "art-3",
    slug: "muelas-planas-vs-conicas-en-espresso-moderno",
    title: "Muelas planas de 64 mm vs cónicas de 48 mm: análisis de distribución granulométrica",
    source: "European Coffee Trip",
    sourceUrl: "https://europeancoffeetrip.com/",
    author: "Ales Pospisil",
    category: "Equipamiento",
    publishDate: "Ayer",
    readTime: "7 min",
    imageUrl: "/assets/products/coffee-grinders-compare.png",
    excerpt: "Comparamos la curva de finos y unimodalidad en molinos de dosis única modernos (Fellow Ode Gen 2, Eureka Specialita y DF64). ¿Qué perfil de taza favorece a los tuestes ligeros?",
    tags: ["Molinos", "Muelas Planas", "Granulometría", "Single Dose"],
    featured: false,
  },
  {
    id: "art-4",
    slug: "guia-perfilado-de-presion-en-cafeteras-manuales",
    title: "Curvas de pre-infusión y caída de presión: dominando los 6 y 9 bar en casa",
    source: "Barista Magazine",
    sourceUrl: "https://www.baristamagazine.com/",
    author: "Kenneth Davids",
    category: "Tecnica",
    publishDate: "Ayer",
    readTime: "5 min",
    imageUrl: "/assets/products/sage-bambino.png",
    excerpt: "Por qué una pre-infusión larga a 2-3 bar reduce la canalización (channeling) en tuestes claros y permite ratios de extracción de 1:2.5 en menos de 30 segundos.",
    tags: ["Presión", "Pre-infusión", "Espresso"],
    featured: false,
  },
  {
    id: "art-5",
    slug: "el-renacimiento-de-los-tostadores-locales-en-barcelona",
    title: "El mapa del café de especialidad en Barcelona: de Poblenou al Born",
    source: "Nomad Coffee Journal",
    sourceUrl: "https://nomadcoffee.es",
    author: "Jordi Mestre",
    category: "Cultura",
    publishDate: "23 Ago 2026",
    readTime: "10 min",
    imageUrl: "/assets/products/nomad-samuel.png",
    excerpt: "Un recorrido por los orígenes del café de tercera generación en Cataluña: cómo Nomad, Right Side, Three Marks y Syra crearon una de las comunidades baristas más influyentes de Europa.",
    tags: ["Barcelona", "Tostadores", "Nomad", "Cultura"],
    featured: false,
  },
  {
    id: "art-6",
    slug: "perfiles-de-tueste-nordico-vs-tueste-medio-europeo",
    title: "Tueste nórdico vs Tueste medio: cómo preservar los ácidos orgánicos sin notas a hierba",
    source: "Sprudge",
    sourceUrl: "https://sprudge.com/",
    author: "Jordan Michelman",
    category: "Tueste",
    publishDate: "22 Ago 2026",
    readTime: "6 min",
    imageUrl: "/assets/products/rightside-abasambi.png",
    excerpt: "Curvas de RoR (Rate of Rise) y punto de primer crack: cómo los mejores tostadores consiguen solubilidad óptima manteniendo vivos los ácidos málicos y cítricos.",
    tags: ["Tueste", "RoR", "Curva de tueste"],
    featured: false,
  },
  {
    id: "art-7",
    slug: "batch-brew-el-arte-de-la-cafetera-de-filtro-por-lotes",
    title: "Batch Brew de alta gama: técnicas de preparación para Moccamaster y Fellow Aiden",
    source: "Perfect Daily Grind",
    sourceUrl: "https://perfectdailygrind.com/es/",
    author: "Marta Gómez",
    category: "Equipamiento",
    publishDate: "21 Ago 2026",
    readTime: "5 min",
    imageUrl: "/assets/products/syra-atitlan.png",
    excerpt: "La guía definitiva para preparar 1 litro de café de filtro perfecto con temperatura de dispersión de 94°C y ratios 60g/L.",
    tags: ["Batch Brew", "Moccamaster", "Filtro", "Accesorios"],
    featured: false,
  }
];
