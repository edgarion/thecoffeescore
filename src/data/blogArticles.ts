export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  source: string;
  sourceUrl: string;
  author: string;
  authorRole: string;
  authorAvatar?: string;
  category: 'Tecnica' | 'Origen' | 'Equipamiento' | 'Tueste' | 'Cultura';
  publishDate: string;
  readTime: string;
  imageUrl: string;
  excerpt: string;
  tags: string[];
  featured?: boolean;
  content: string;
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "art-1",
    slug: "como-afecta-el-agua-a-la-extraccion-del-espresso",
    title: "La química del agua en el espresso: cómo magnesio y bicarbonatos transforman tu taza",
    source: "The World Atlas of Coffee / James Hoffmann",
    sourceUrl: "https://www.youtube.com/@jameshoffmann",
    author: "James Hoffmann",
    authorRole: "Campeón Mundial de Baristas & Autor",
    category: "Tecnica",
    publishDate: "Hoy, 09:15",
    readTime: "6 min de lectura",
    imageUrl: "/assets/pouring.png",
    excerpt: "El 98% de tu espresso es agua. Desglosamos por qué un agua con TDS 120 ppm y ratio 2:1 de magnesio frente a calcio extrae más compuestos aromáticos sin aportar astringencia amarga.",
    tags: ["Química del café", "Extracción", "Agua para espresso", "Laboratorio"],
    featured: true,
    content: `
      <section>
        <h2 class="font-serif font-bold text-2xl text-ink mb-3">1. El solvente universal que define el 98% de tu café</h2>
        <p class="mb-4">
          Es habitual invertir miles de euros en molinos de muelas planas y cafeteras con doble caldera para luego preparar café con agua del grifo no tratada o agua mineral con exceso de residuo seco. El agua no es simplemente un vehículo líquido: es el agente químico responsable de disolver los compuestos aromáticos, lípidos y azúcares del grano tostado.
        </p>
        <p class="mb-4">
          La <strong>SCA (Specialty Coffee Association)</strong> estipula un estándar objetivo para el agua de infusión: un TDS total de entre <strong>75 y 150 ppm</strong>, con una dureza total de 50-175 ppm CaCO3 y alcalinidad entre 40 y 75 ppm CaCO3, con un pH neutro entre 6.5 y 7.5.
        </p>
      </section>

      <section class="bg-[#fbfaf8] border border-[#e6e3da] p-5 sm:p-6 rounded-2xl my-6">
        <h3 class="font-serif font-bold text-lg text-ink mb-2">El rol de los iones minerales clave:</h3>
        <ul class="list-disc pl-5 space-y-2 text-stone-700 text-xs sm:text-sm">
          <li><strong>Magnesio (Mg²⁺):</strong> Posee una densidad de carga alta y se une con facilidad a los compuestos volátiles oxigenados, potenciando las notas florales y frutales brillantes en tuestes claros.</li>
          <li><strong>Calcio (Ca²⁺):</strong> Extrae con rapidez compuestos más pesados y azucarados, pero una concentración excesiva genera incrustaciones de cal en la caldera y aspereza en lengua.</li>
          <li><strong>Bicarbonatos (HCO₃⁻):</strong> Actúan como amortiguador (buffer) de acidez. Si el nivel es muy bajo, el café sabrá agrio y metálico; si es muy alto, neutralizará por completo la acidez cítrica y málica convirtiendo el café en plano y apagado.</li>
        </ul>
      </section>

      <section>
        <h2 class="font-serif font-bold text-2xl text-ink mb-3">2. Cómo formular agua perfecta para espresso en casa</h2>
        <p class="mb-4">
          Para conseguir repetibilidad total, los baristas profesionales recurren a agua desmineralizada por ósmosis inversa (TDS &lt; 10 ppm) o agua destilada a la que se añaden sales puras de grado alimentario (sulfato de magnesio y bicarbonato sódico o potásico) o sobres precalibrados de <em>Third Wave Water</em>.
        </p>
        <p>
          El resultado es un incremento inmediato de hasta 2 puntos porcentuales en el rendimiento de extracción (EY) con un perfil en taza sedoso, dulce y transparente.
        </p>
      </section>
    `
  },
  {
    id: "art-2",
    slug: "fermentaciones-anaerobicas-innovacion-en-origen",
    title: "Doble fermentación anaeróbica térmica: la revolución del procesado en Colombia y Etiopía",
    source: "Perfect Daily Grind",
    sourceUrl: "https://perfectdailygrind.com/es/",
    author: "Tanya Newton",
    authorRole: "Editora Técnica de Origen & Procesado",
    category: "Origen",
    publishDate: "Hoy, 08:30",
    readTime: "8 min de lectura",
    imageUrl: "/assets/cherries.png",
    excerpt: "Analizamos cómo productores pioneros como Diego Bermúdez controlan levaduras y choque térmico para amplificar precursores aromáticos de jazmín y frutas tropicales.",
    tags: ["Fermentación", "Procesos", "Colombia", "SCA 90+"],
    featured: true,
    content: `
      <section>
        <h2 class="font-serif font-bold text-2xl text-ink mb-3">1. Del secado tradicional a la biotecnología aplicada</h2>
        <p class="mb-4">
          Durante décadas, el procesado del café en origen se limitaba a dos métodos principales: lavado tradicional y natural con secado en camas africanas. Hoy en día, fincas experimentales en Huila y Cauca (Colombia), Yirgacheffe (Etiopía) y Chiriquí (Panamá) utilizan biorreactores sellados de acero inoxidable con inyección de CO2 y control milimétrico de temperatura y pH.
        </p>
        <p class="mb-4">
          El proceso conocido como <strong>choque térmico (thermal shock)</strong> sumerge las cerezas fermentadas primero en agua caliente a 40°C durante varios minutos para fijar los ésteres aromáticos generados por microorganismos, e inmediatamente en agua helada a 12°C para sellar los poros del grano y detener la fermentación de forma abrupta.
        </p>
      </section>

      <section class="bg-[#fbfaf8] border border-[#e6e3da] p-5 sm:p-6 rounded-2xl my-6">
        <h3 class="font-serif font-bold text-lg text-ink mb-2">Características en taza de los microlotes anaeróbicos:</h3>
        <ul class="list-disc pl-5 space-y-2 text-stone-700 text-xs sm:text-sm">
          <li><strong>Complejidad aromática desbordante:</strong> Notas nítidas a maracuyá, lichi, mango maduro, cardamomo y chicle de fresa imposibles de encontrar en lavados clásicos.</li>
          <li><strong>Cuerpo sedoso y prolongado:</strong> Elevada concentración de ácido láctico que aporta una textura untuosa similar al yogur griego.</li>
          <li><strong>Puntuación en cata:</strong> Lotes que superan consistentemente los 88 a 91 puntos en la escala SCA.</li>
        </ul>
      </section>

      <section>
        <h2 class="font-serif font-bold text-2xl text-ink mb-3">2. El debate ético y la trazabilidad del procesado</h2>
        <p>
          A medida que estos cafés alcanzan precios récord en subastas internacionales de Cup of Excellence, la transparencia respecto a si se añadieron levaduras seleccionadas (Kveik, Saccharomyces) o frutas en maceración carbónica se convierte en el pilar fundamental para garantizar la integridad de la cadena de valor.
        </p>
      </section>
    `
  },
  {
    id: "art-3",
    slug: "muelas-planas-vs-conicas-en-espresso-moderno",
    title: "Muelas planas de 64 mm vs cónicas de 48 mm: análisis de distribución granulométrica",
    source: "European Coffee Trip",
    sourceUrl: "https://europeancoffeetrip.com/",
    author: "Ales Pospisil",
    authorRole: "Fundador de European Coffee Trip",
    category: "Equipamiento",
    publishDate: "Ayer, 16:45",
    readTime: "7 min de lectura",
    imageUrl: "/assets/coffee-grinders-compare.png",
    excerpt: "Comparamos la curva de finos y unimodalidad en molinos de dosis única modernos (Fellow Ode Gen 2, Eureka Specialita y DF64). ¿Qué perfil de taza favorece a los tuestes ligeros?",
    tags: ["Molinos", "Muelas Planas", "Granulometría", "Single Dose"],
    featured: false,
    content: `
      <section>
        <h2 class="font-serif font-bold text-2xl text-ink mb-3">1. La geometría de las muelas y su impacto en la molienda</h2>
        <p class="mb-4">
          La discusión entre muelas cónicas y planas no es una cuestión de cuál es superior en términos absolutos, sino de qué perfil de extracción se adapta mejor a tu estilo de café predilecto.
        </p>
        <p class="mb-4">
          Las <strong>muelas cónicas</strong> (presentes en molinos como Niche Zero, Baratza Encore ESP y KINGrinder K6) giran a menor velocidad y generan una distribución <em>bimodal</em> (dos picos principales de partículas: partículas principales y finos). Los finos restringen el caudal del agua, proporcionando una crema espesa, cuerpo untuoso y notas a chocolate negro y frutos secos ideales para blends con tueste medio y bebidas con leche.
        </p>
      </section>

      <section>
        <h2 class="font-serif font-bold text-2xl text-ink mb-3">2. Muelas planas y la búsqueda de la unimodalidad</h2>
        <p class="mb-4">
          Las <strong>muelas planas</strong> de 64 mm, 74 mm u 83 mm (Eureka Mignon Specialita, DF64 Gen 2, Mahlkönig EK43) alineadas con precisión expulsan el café centrífugamente produciendo una campana de distribución mucho más estrecha y homogénea (<em>unimodal</em>).
        </p>
        <p>
          Al minimizar los finos erráticos, el barista puede moler más fino sin provocar canalizaciones (channeling), logrando una taza con claridad cristalina, acidez efervescente y notas florales hiperdefinidas en orígenes etíopes y kenianos.
        </p>
      </section>
    `
  },
  {
    id: "art-4",
    slug: "guia-perfilado-de-presion-en-cafeteras-manuales",
    title: "Curvas de pre-infusión y caída de presión: dominando los 6 y 9 bar en casa",
    source: "Barista Magazine / Scott Rao",
    sourceUrl: "https://www.baristamagazine.com/",
    author: "Scott Rao",
    authorRole: "Consultor de Café & Autor de Espresso Extraction",
    category: "Tecnica",
    publishDate: "Ayer, 11:20",
    readTime: "5 min de lectura",
    imageUrl: "/assets/products/sage-bambino.png",
    excerpt: "Por qué una pre-infusión larga a 2-3 bar reduce la canalización (channeling) en tuestes claros y permite ratios de extracción de 1:2.5 en menos de 30 segundos.",
    tags: ["Presión", "Pre-infusión", "Espresso", "Scott Rao"],
    featured: false,
    content: `
      <section>
        <h2 class="font-serif font-bold text-2xl text-ink mb-3">1. La regla de la pre-infusión suave</h2>
        <p class="mb-4">
          El impacto violento de una bomba a 9 bares directamente sobre una pastilla de café seco es el principal causante de microfisuras por las que el agua escapa sin extraer los compuestos solubles centrales.
        </p>
        <p class="mb-4">
          La <strong>pre-infusión suave (2 a 3 bar durante 5 a 10 segundos)</strong> satura uniformemente todo el lecho de café, hinchando las partículas y eliminando bolsas de aire antes de aplicar la presión de erogación completa.
        </p>
      </section>

      <section>
        <h2 class="font-serif font-bold text-2xl text-ink mb-3">2. Caída progresiva de presión (Declining Pressure Profile)</h2>
        <p>
          A medida que la extracción avanza y se disuelven los sólidos (perdiendo hasta un 20% de su masa inicial), la resistencia hidráulica de la pastilla disminuye. Mantener 9 bares constantes al final del shot provoca sobreextracción de taninos astringentes. Reducir la presión progresivamente de 9 a 6 bar durante los últimos 10 segundos garantiza un final de taza dulce y balanceado.
        </p>
      </section>
    `
  },
  {
    id: "art-5",
    slug: "el-renacimiento-de-los-tostadores-locales-en-barcelona",
    title: "El mapa del café de especialidad en Barcelona: de Poblenou al Born",
    source: "Nomad Coffee Journal",
    sourceUrl: "https://nomadcoffee.es",
    author: "Jordi Mestre",
    authorRole: "Fundador de Nomad Coffee",
    category: "Cultura",
    publishDate: "23 Ago 2026",
    readTime: "10 min de lectura",
    imageUrl: "/assets/products/nomad-samuel.png",
    excerpt: "Un recorrido por los orígenes del café de tercera generación en Cataluña: cómo Nomad, Right Side, Three Marks y Syra crearon una de las comunidades baristas más influyentes de Europa.",
    tags: ["Barcelona", "Tostadores", "Nomad", "Cultura"],
    featured: false,
    content: `
      <section>
        <h2 class="font-serif font-bold text-2xl text-ink mb-3">1. El nacimiento de la escena specialty en Barcelona</h2>
        <p class="mb-4">
          Hace poco más de una década, pedir un café de tueste ligero sin azúcar en la península ibérica era una rareza. Pioneros como Jordi Mestre (tras formarse en el epicentro londinense de Prufrock Coffee) y Joaquín Parra (Right Side Coffee) comenzaron a tostar microlotes con estricto control de origen y tueste omni.
        </p>
        <p class="mb-4">
          Hoy Barcelona es reconocida como una de las capitales mundiales del café de especialidad, con barrios como Poblenou, Gràcia, Sant Antoni y el Born repletos de tostadurías artesanales, laboratorios de formación y cafeterías de referencia internacional.
        </p>
      </section>
    `
  },
  {
    id: "art-6",
    slug: "perfiles-de-tueste-nordico-vs-tueste-medio-europeo",
    title: "Tueste nórdico vs Tueste medio: cómo preservar los ácidos orgánicos sin notas a hierba",
    source: "Sprudge / Tim Wendelboe",
    sourceUrl: "https://sprudge.com/",
    author: "Tim Wendelboe",
    authorRole: "Campeón Mundial de Baristas & Tostador",
    category: "Tueste",
    publishDate: "20 Ago 2026",
    readTime: "8 min de lectura",
    imageUrl: "/assets/pourover.png",
    excerpt: "Desglosamos la curva de desarrollo (RoR y DTR al 12-15%) para tostar cafés africanos y centroamericanos manteniendo la flor de azahar y los azúcares caramelizados.",
    tags: ["Tueste", "Tim Wendelboe", "Curvas de tueste", "Nordic Roast"],
    featured: false,
    content: `
      <section>
        <h2 class="font-serif font-bold text-2xl text-ink mb-3">1. La filosofía del tueste nórdico (Light Nordic Roast)</h2>
        <p class="mb-4">
          El objetivo del tueste claro de estilo escandinavo no es añadir notas del proceso de tostado (como ceniza, madera o humo), sino revelar con la máxima pureza el terroir, la variedad botánica (Geisha, Bourbon, SL28) y el trabajo del agricultor en origen.
        </p>
        <p>
          Para evitar que el grano quede subdesarrollado por dentro (lo que provocaría notas astringentes a hierba o guisante crudo), el tostador debe aplicar una alta transferencia de calor por convección durante el primer tercio del tueste y una tasa de aumento de temperatura (RoR) decreciente y continua hasta la primera grieta (first crack).
        </p>
      </section>
    `
  },
  {
    id: "art-7",
    slug: "el-kit-esencial-de-herramientas-para-baristas",
    title: "El kit imprescindible de herramientas barista: WDT, báscula 0.1g y cestas de precisión",
    source: "Barista Magazine",
    sourceUrl: "https://www.baristamagazine.com/",
    author: "Sarah Allen",
    authorRole: "Editora en Jefe de Barista Magazine",
    category: "Equipamiento",
    publishDate: "18 Ago 2026",
    readTime: "6 min de lectura",
    imageUrl: "/assets/tamping.png",
    excerpt: "Guía práctica de los accesorios que realmente marcan una diferencia medible en refractometría frente a aquellos que son puro marketing estético.",
    tags: ["Herramientas", "WDT", "Tamper", "Puck Screen", "Accesorios"],
    featured: false,
    content: `
      <section>
        <h2 class="font-serif font-bold text-2xl text-ink mb-3">1. Los 4 accesorios indispensables según la ciencia del espresso</h2>
        <div class="space-y-4 my-4">
          <div class="bg-[#fbfaf8] border border-[#e6e3da] p-4 rounded-xl">
            <h4 class="font-bold text-ink mb-1">1. Herramienta WDT (Weiss Distribution Technique) con agujas de 0.25-0.35 mm</h4>
            <p class="text-xs text-stone-600">Rompe los grumos formados por la estática y homogeneiza la densidad del café en toda la cesta, reduciendo las canalizaciones en un 80%.</p>
          </div>
          <div class="bg-[#fbfaf8] border border-[#e6e3da] p-4 rounded-xl">
            <h4 class="font-bold text-ink mb-1">2. Báscula de precisión digital con cronómetro y resolución 0.1 g</h4>
            <p class="text-xs text-stone-600">Controlar el ratio de infusión (por ejemplo 18 g de café molido para 36 g de espresso en 27 segundos) es la base innegociable de la repetibilidad.</p>
          </div>
          <div class="bg-[#fbfaf8] border border-[#e6e3da] p-4 rounded-xl">
            <h4 class="font-bold text-ink mb-1">3. Cestas de competición de orificios cortados por láser (IMS / VST)</h4>
            <p class="text-xs text-stone-600">Garantizan un caudal regular en toda la superficie de la pastilla frente a las cestas estándar de fábrica con orificios irregulares.</p>
          </div>
          <div class="bg-[#fbfaf8] border border-[#e6e3da] p-4 rounded-xl">
            <h4 class="font-bold text-ink mb-1">4. Disco de filtrado Puck Screen (150 μm SUS316)</h4>
            <p class="text-xs text-stone-600">Dispersa el agua de la ducha de forma laminar y mantiene el grupo libre de aceites y posos de café.</p>
          </div>
        </div>
      </section>
    `
  },
  {
    id: "art-8",
    slug: "texturizado-de-leche-y-quimica-de-la-microespuma",
    title: "La ciencia del texturizado de leche: proteínas, grasas y técnica de vertido para Latte Art",
    source: "Sprudge / Lance Hedrick",
    sourceUrl: "https://sprudge.com/",
    author: "Lance Hedrick",
    authorRole: "Bicampeón Mundial de Latte Art & Formador",
    category: "Tecnica",
    publishDate: "15 Ago 2026",
    readTime: "7 min de lectura",
    imageUrl: "/assets/latte-hand.png",
    excerpt: "Por qué calentar la leche entre 55°C y 65°C maximiza el dulzor de la lactosa sin desnaturalizar las proteínas de suero.",
    tags: ["Leche", "Latte Art", "Microespuma", "Vaporizador"],
    featured: false,
    content: `
      <section>
        <h2 class="font-serif font-bold text-2xl text-ink mb-3">1. La termodinámica de las proteínas de la leche</h2>
        <p class="mb-4">
          La creación de microespuma sedosa (con textura de pintura líquida brillante y sin burbujas visibles) depende de la capacidad de las <strong>caseínas y proteínas de suero</strong> para encapsular burbujas microscópicas de aire.
        </p>
        <p class="mb-4">
          El aire debe introducirse durante los primeros segundos mientras la leche está fría (hasta los 37°C / temperatura corporal). A partir de ese momento, la punta de la lanceta se sumerge ligeramente para crear un vórtice turbulento que homogenice la mezcla.
        </p>
      </section>
      <section>
        <h2 class="font-serif font-bold text-2xl text-ink mb-3">2. La temperatura óptima de servicio</h2>
        <p>
          A <strong>60°C - 65°C</strong>, la percepción de dulzor de la lactosa alcanza su punto máximo. Superar los 70°C desnaturaliza las proteínas y quema los azúcares, arruinando la armonía aromática del espresso de especialidad.
        </p>
      </section>
    `
  }
];
