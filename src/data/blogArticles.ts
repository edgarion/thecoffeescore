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
    slug: "flow-profiling-y-extraccion-sin-canalizacion-scott-rao",
    title: "Flow Profiling y Pre-Infusión Suave: Cómo eliminar el Channeling en pastillas de espresso",
    source: "Scott Rao Coffee Blog",
    sourceUrl: "https://scottrao.com/blog/2018/6/29/flow-profiling-on-the-de1",
    author: "Scott Rao",
    authorRole: "Consultor Internacional & Autor de The Professional Barista's Handbook",
    category: "Tecnica",
    publishDate: "Hoy, 10:15",
    readTime: "7 min de lectura",
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1200",
    excerpt: "Scott Rao desglosa cómo separar el caudal de agua (ml/s) de la presión fija de 9 bares y aplicar pre-infusión suave a 2-3 bar para curar microcanales y elevar el rendimiento de extracción (EY) al 22%.",
    tags: ["Scott Rao", "Flow Profiling", "Espresso", "Channeling", "Decent DE1"],
    featured: true,
    content: `
      <section>
        <h2 class="font-serif font-bold text-2xl text-ink mb-3">1. Por qué la presión fija a 9 bares destruye pastillas de café</h2>
        <p class="mb-4">
          Durante más de seis décadas, las cafeteras comerciales de hostelería han empujado agua a una presión estática de 9 bares mediante bombas rotativas. Cuando 9 bares golpean repentinamente una pastilla de café seco, la fuerza hidrostática compacta desigualmente el lecho, creando microfisuras en los puntos de menor densidad.
        </p>
        <p class="mb-4">
          El agua, siguiendo el camino de menor resistencia hidráulica, fluye rápidamente a través de estos caminos preferentes: este fenómeno se conoce como <strong>canalización (channeling)</strong>. El resultado en taza es una combinación desastrosa de café sobreextraído (amargor seco, astringencia) en los canales y café subextraído (acidez agria y vacía) en el resto de la pastilla.
        </p>
      </section>

      <section class="bg-[#fbfaf8] border border-[#e6e3da] p-5 sm:p-6 rounded-2xl my-6">
        <h3 class="font-serif font-bold text-lg text-ink mb-2">Las 3 fases del perfil de extracción óptimo según Rao:</h3>
        <ol class="list-decimal pl-5 space-y-2 text-stone-700 text-xs sm:text-sm">
          <li><strong>Pre-infusión ultra suave (1.5 - 2.5 ml/s a &lt; 3 bar):</strong> Saturar todo el lecho durante 8 a 12 segundos hasta que la pastilla hinche uniformemente y aparezcan las primeras gotas en el fondo del portafiltro sin fondo.</li>
          <li><strong>Pico de presión controlado (6 - 8 bar max):</strong> Rampa de aceleración donde se extraen los aceites esenciales, ácidos aromáticos y azúcares solubles.</li>
          <li><strong>Declive progresivo de caudal / presión (Declining Flow):</strong> A medida que la pastilla pierde hasta el 20% de su masa sólida, la resistencia hidrodinámica disminuye. Reducir el caudal en la segunda mitad del shot evita la erosión de los canales y la extracción de taninos astringentes.</li>
        </ol>
      </section>

      <section>
        <h2 class="font-serif font-bold text-2xl text-ink mb-3">2. El método del sándwich de filtro de papel (Paper Filter Sandwich)</h2>
        <p class="mb-4">
          Uno de los experimentos más documentados por Scott Rao consiste en colocar un disco de papel de filtro circular en el fondo de la cesta antes de poner el café molido, y opcionalmente otro disco de papel o puck screen en la parte superior.
        </p>
        <p>
          El filtro inferior previene que los orificios de la cesta se bloqueen con partículas ultrafinas (fines migration), permitiendo moler un 15% más fino sin riesgo de atascos, lo que incrementa el <em>Extraction Yield</em> en más de un 1.8% con una textura sedosa sin sedimentos en el fondo de la taza.
        </p>
      </section>
    `
  },
  {
    id: "art-2",
    slug: "thermal-shock-fermentacion-diego-bermudez-perfect-daily-grind",
    title: "Thermal Shock: La técnica pionera de Diego Bermúdez para fijar aromas en microlotes de café",
    source: "Perfect Daily Grind",
    sourceUrl: "https://perfectdailygrind.com/es/2021/07/28/choque-termico-fermentacion-cafe/",
    author: "Tanya Newton",
    authorRole: "Editora Técnica de Origen & Biotecnología Cafetera",
    category: "Origen",
    publishDate: "Hoy, 08:45",
    readTime: "8 min de lectura",
    imageUrl: "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?auto=format&fit=crop&q=80&w=1200",
    excerpt: "Perfect Daily Grind investiga la finca El Paraíso en Cauca (Colombia), donde el choque térmico (40°C caliente seguido de 12°C frío) sella los ésteres volátiles para crear perfiles de maracuyá, lichi y frutos rojos con 90+ puntos SCA.",
    tags: ["Perfect Daily Grind", "Thermal Shock", "Diego Bermúdez", "Colombia", "Fermentación"],
    featured: true,
    content: `
      <section>
        <h2 class="font-serif font-bold text-2xl text-ink mb-3">1. Qué es el Choque Térmico (Thermal Shock)</h2>
        <p class="mb-4">
          A menudo confundido con un tipo de fermentación, el <strong>choque térmico</strong> es en realidad una etapa de procesado post-fermentativa desarrollada por el ingeniero y caficultor colombiano Diego Samuel Bermúdez en Finca El Paraíso (Piendamó, Cauca).
        </p>
        <p class="mb-4">
          Tras someter las cerezas maduras a fermentaciones anaeróbicas controladas en biorreactores presurizados con inyección de levaduras seleccionadas (Kveik o Saccharomyces cerevisiae), las cerezas se someten a un lavado térmico drástico:
        </p>
        <ul class="list-disc pl-5 space-y-1.5 text-stone-700 text-xs sm:text-sm mb-4">
          <li><strong>Fase 1 (Agua Caliente a 40°C):</strong> Dilata los poros del grano de café y licúa los compuestos aromáticos volátiles generados por los microorganismos, permitiendo que penetren profundamente en la estructura celular del grano.</li>
          <li><strong>Fase 2 (Agua Helada a 12°C):</strong> Contrae instantáneamente la matriz celular del grano, sellando los poros e impidiendo que los ésteres y ácidos orgánicos se evaporen o se pierdan durante el posterior proceso de secado.</li>
        </ul>
      </section>

      <section class="bg-[#fbfaf8] border border-[#e6e3da] p-5 sm:p-6 rounded-2xl my-6">
        <h3 class="font-serif font-bold text-lg text-ink mb-2">Desglose sensorial en mesa de cata:</h3>
        <p class="text-xs sm:text-sm text-stone-700 leading-relaxed mb-3">
          Los cafés procesados mediante choque térmico presentan una intensidad aromática comparable a la de perfumería fina: notas nítidas a yogur de fresa, lichi, mango, cardamomo y maracuyá, con una acidez málica efervescente y cuerpo untuoso derivado de la alta concentración de ácido láctico.
        </p>
      </section>

      <section>
        <h2 class="font-serif font-bold text-2xl text-ink mb-3">2. El futuro del procesado de precisión en origen</h2>
        <p>
          Esta metodología ha abierto el camino a una nueva era de caficultura científica, donde el perfil en taza ya no depende exclusivamente de la climatología aleatoria del año, sino de parámetros biotecnológicos medibles y repetibles que garantizan ingresos dignos y precios récord a los productores en origen.
        </p>
      </section>
    `
  },
  {
    id: "art-3",
    slug: "muelas-planas-vs-conicas-single-dose-european-coffee-trip",
    title: "Muelas Planas de 64 mm vs Cónicas de 48 mm: La batalla de la unimodalidad en Single Dose",
    source: "European Coffee Trip",
    sourceUrl: "https://europeancoffeetrip.com/flat-vs-conical-burrs/",
    author: "Ales Pospisil",
    authorRole: "Co-fundador de European Coffee Trip",
    category: "Equipamiento",
    publishDate: "Ayer, 17:30",
    readTime: "6 min de lectura",
    imageUrl: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=1200",
    excerpt: "Analizamos con microscopio y análisis de partículas láser las diferencias entre molinos de muelas planas (DF64, Fellow Ode, Eureka Specialita) y cónicas (Niche Zero, KINGrinder K6).",
    tags: ["European Coffee Trip", "Molinos", "Muelas Planas", "Granulometría", "Single Dose"],
    featured: false,
    content: `
      <section>
        <h2 class="font-serif font-bold text-2xl text-ink mb-3">1. Granulometría: Distribución Bimodal vs Unimodal</h2>
        <p class="mb-4">
          La discusión entre muelas planas y cónicas define la experiencia del barista doméstico moderno. La diferencia no radica únicamente en la forma física de las cuchillas, sino en la curva de distribución de tamaño de partículas (Particle Size Distribution).
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <div class="bg-[#fbfaf7] border border-[#e6e3da] p-4 rounded-xl">
            <h4 class="font-bold text-ink text-sm mb-1">Muelas Cónicas (Bimodal):</h4>
            <p class="text-xs text-stone-600">Generan dos picos de partículas (partículas primarias y finos microscópicos). Los finos crean resistencia al agua, generando una crema espesa, cuerpo pesado y notas a chocolate, caramelo y avellana.</p>
          </div>
          <div class="bg-[#fbfaf7] border border-[#e6e3da] p-4 rounded-xl">
            <h4 class="font-bold text-ink text-sm mb-1">Muelas Planas (Unimodal):</h4>
            <p class="text-xs text-stone-600">Producen una campana de Gauss estrecha y homogénea con mínima producción de finos erráticos. Permiten extraer tuestes claros con acidez brillante, separación de notas florales y claridad cristalina.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 class="font-serif font-bold text-2xl text-ink mb-3">2. Veredicto para tu estación de café en casa</h2>
        <p>
          Si consumes principalmente espressos con leche, flat whites o blends con tueste medio-oscuro, las muelas cónicas ofrecen indulgencia y facilidad de ajuste. Si buscas explorar orígenes puros de Etiopía o Kenia en V60 y espresso moderno de ratio 1:2.5, unas muelas planas de 64 mm (SSP Cast o High Uniformity) transformarán tu paladar.
        </p>
      </section>
    `
  },
  {
    id: "art-4",
    slug: "quimica-del-agua-para-espresso-james-hoffmann",
    title: "La química del agua en el espresso: Magnesio, Bicarbonatos y Rendimiento de Extracción",
    source: "The World Atlas of Coffee / James Hoffmann",
    sourceUrl: "https://www.youtube.com/@jameshoffmann",
    author: "James Hoffmann",
    authorRole: "World Barista Champion & Autor de The World Atlas of Coffee",
    category: "Tecnica",
    publishDate: "27 Ago 2026",
    readTime: "7 min de lectura",
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1200",
    excerpt: "El 98% de tu espresso es agua. James Hoffmann demuestra por qué un agua con TDS 120 ppm, ratio 2:1 de Magnesio frente a Calcio y alcalinidad de 45 ppm CaCO3 extrae los aromas frutales sin amargor.",
    tags: ["James Hoffmann", "Agua", "Extracción", "TDS", "Química del café"],
    featured: false,
    content: `
      <section>
        <h2 class="font-serif font-bold text-2xl text-ink mb-3">1. El solvente universal que define tu café</h2>
        <p class="mb-4">
          Muchos entusiastas invierten miles de euros en cafeteras de doble caldera y molinos profesionales, pero continúan preparando café con agua del grifo clorada o con aguas embotelladas de altísima mineralización (residuo seco &gt; 400 mg/l).
        </p>
        <p class="mb-4">
          Los minerales disueltos en el agua no son espectadores pasivos: son los <strong>agentes quelantes</strong> que enlazan y arrastran los compuestos aromáticos del grano molido.
        </p>
      </section>

      <section class="bg-[#fbfaf8] border border-[#e6e3da] p-5 sm:p-6 rounded-2xl my-6">
        <h3 class="font-serif font-bold text-lg text-ink mb-2">La receta de agua perfecta para espresso según Hoffmann:</h3>
        <ul class="list-disc pl-5 space-y-1.5 text-stone-700 text-xs sm:text-sm">
          <li><strong>TDS Total:</strong> 100 - 130 ppm</li>
          <li><strong>Dureza General (GH):</strong> 70 - 85 ppm (compuesta preferentemente por iones Mg²⁺ que potencian la acidez frutal frente al Ca²⁺).</li>
          <li><strong>Alcalinidad / Dureza de Carbonatos (KH):</strong> 40 - 50 ppm CaCO3 (el buffer justo para neutralizar la acidez metálica sin aplanar los ácidos cítrico y málico).</li>
          <li><strong>pH:</strong> 7.0 neutro.</li>
        </ul>
      </section>

      <section>
        <h2 class="font-serif font-bold text-2xl text-ink mb-3">2. Soluciones prácticas en el hogar</h2>
        <p>
          Para el usuario doméstico, la vía más accesible es utilizar agua desmineralizada por ósmosis o destilada, remineralizada con sales puras (sulfato de magnesio de grado alimentario y bicarbonato potásico) o sobres calibrados de <em>Third Wave Water</em> en garrafas de 5 litros.
        </p>
      </section>
    `
  },
  {
    id: "art-5",
    slug: "tueste-nordico-tim-wendelboe-sprudge",
    title: "La filosofía del Tueste Nórdico: Revelando el Terroir sin notas a vegetal ni sobre-desarrollo",
    source: "Sprudge / Tim Wendelboe",
    sourceUrl: "https://sprudge.com/tim-wendelboe-nordic-roast-philosophy",
    author: "Tim Wendelboe",
    authorRole: "Campeón Mundial de Baristas & Fundador de Tim Wendelboe Coffee",
    category: "Tueste",
    publishDate: "25 Ago 2026",
    readTime: "8 min de lectura",
    imageUrl: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=1200",
    excerpt: "Desglosamos la curva de desarrollo (RoR decreciente y DTR al 12-14%) que el tostador noruego utiliza para preservar los ácidos orgánicos y la flor de azahar en cafés de Kenia y Etiopía.",
    tags: ["Tim Wendelboe", "Sprudge", "Nordic Roast", "Tueste", "Kenia"],
    featured: false,
    content: `
      <section>
        <h2 class="font-serif font-bold text-2xl text-ink mb-3">1. La premisa del Light Roast escandinavo</h2>
        <p class="mb-4">
          En palabras de Tim Wendelboe, el tostador de especialidad debe ser invisible. Su labor no es añadir notas tostadas, ceniza, madera o caramelización pesada, sino actuar como un transmisor transparente del trabajo que el caficultor y la variedad botánica realizaron en origen.
        </p>
        <p class="mb-4">
          Para lograr esto sin que el café sepa a hierba verde o cereal crudo (subdesarrollo interior), se aplica una transferencia térmica dominada por convección de aire caliente en los primeros minutos de tueste, manteniendo una tasa de ascenso de temperatura (RoR) continuamente descendente hasta el primer crack.
        </p>
      </section>
    `
  },
  {
    id: "art-6",
    slug: "revolucion-puck-screen-cestas-ims-vst-barista-magazine",
    title: "El auge del Puck Screen y Cestas Láser: La tecnología que transformó el Campeonato Mundial",
    source: "Barista Magazine",
    sourceUrl: "https://www.baristamagazine.com/the-precision-basket-revolution/",
    author: "Sarah Allen",
    authorRole: "Editora en Jefe de Barista Magazine",
    category: "Equipamiento",
    publishDate: "22 Ago 2026",
    readTime: "6 min de lectura",
    imageUrl: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=1200",
    excerpt: "Por qué las cestas de orificios cortados por láser de 58.5 mm y las mallas de difusión de 150 micras reducen la desviación estándar del caudal y elevan la repetibilidad en barras profesionales.",
    tags: ["Barista Magazine", "Puck Screen", "IMS", "VST", "WDT", "WBC"],
    featured: false,
    content: `
      <section>
        <h2 class="font-serif font-bold text-2xl text-ink mb-3">1. La evolución de la cesta de portafiltro</h2>
        <p class="mb-4">
          Las cestas tradicionales estampadas de fábrica poseen orificios irregulares con rebabas metálicas microscópicas que provocan un caudal descontrolado. Las marcas de competición como IMS, VST y Pullman emplean corte electro-erosionado por láser que garantiza diámetros de orificio idénticos de 0.30 mm con bordes redondeados.
        </p>
        <p class="mb-4">
          Al combinar estas cestas con una malla <strong>Puck Screen SUS316 de 150 μm</strong>, el flujo de agua de la ducha de la cafetera se transforma de chorros turbulentos en una lluvia laminar suave, protegiendo la pastilla contra roturas superficiales y manteniendo el cabezal del grupo completamente limpio.
        </p>
      </section>
    `
  },
  {
    id: "art-7",
    slug: "quimica-de-la-leche-y-microespuma-lance-hedrick-sprudge",
    title: "Termodinámica de la leche: Microespuma, desnaturalización proteica y técnica para Latte Art",
    source: "Sprudge / Lance Hedrick",
    sourceUrl: "https://sprudge.com/milk-steaming-chemistry-lance-hedrick",
    author: "Lance Hedrick",
    authorRole: "Bicampeón Mundial de Latte Art & Formador de Baristas",
    category: "Tecnica",
    publishDate: "20 Ago 2026",
    readTime: "7 min de lectura",
    imageUrl: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=1200",
    excerpt: "Lance Hedrick explica cómo las proteínas de suero y caseínas encapsulan el aire por debajo de 37°C y por qué sobrepasar los 65°C destruye los azúcares naturales de la lactosa.",
    tags: ["Lance Hedrick", "Sprudge", "Latte Art", "Leche", "Microespuma"],
    featured: false,
    content: `
      <section>
        <h2 class="font-serif font-bold text-2xl text-ink mb-3">1. Cómo se forma la microespuma perfecta</h2>
        <p class="mb-4">
          La textura brillante similar a pintura líquida que permite dibujar cisnes y rosettas en latte art es el resultado de atrapar burbujas microscópicas de aire dentro de una red de proteínas de caseína y suero.
        </p>
        <p class="mb-4">
          El aire debe inyectarse exclusivamente en los primeros 3 a 5 segundos mientras la leche está fría (por debajo de 37°C). Una vez alcanzada la temperatura corporal, la lanceta debe sumergirse 5 mm para crear un vórtice circular turbulento que rompa las burbujas grandes en microburbujas homogéneas.
        </p>
      </section>
    `
  },
  {
    id: "art-8",
    slug: "mapa-del-cafe-de-especialidad-barcelona-nomad-journal",
    title: "El mapa del café de especialidad en Barcelona: De Poblenou al Born y la revolución local",
    source: "Nomad Coffee Journal",
    sourceUrl: "https://nomadcoffee.es/journal/barcelona-specialty-scene",
    author: "Jordi Mestre",
    authorRole: "Fundador de Nomad Coffee & Pionero del Café de Especialidad en España",
    category: "Cultura",
    publishDate: "18 Ago 2026",
    readTime: "9 min de lectura",
    imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1200",
    excerpt: "Un viaje a través de los orígenes de la tercera ola en Cataluña: cómo Nomad, Right Side, Three Marks y Syra crearon una de las comunidades baristas más vibrantes e influyentes de Europa.",
    tags: ["Nomad Coffee", "Barcelona", "Poblenou", "Tostadores", "Cultura"],
    featured: false,
    content: `
      <section>
        <h2 class="font-serif font-bold text-2xl text-ink mb-3">1. De un carrito ambulante en Londres a capital europea del café</h2>
        <p class="mb-4">
          La historia del café de especialidad en Barcelona comenzó hace más de una década cuando Jordi Mestre regresó de Londres tras ganar el campeonato de baristas del Reino Unido y fundó el emblemático Passatge Sert en el Born.
        </p>
        <p class="mb-4">
          Hoy, Barcelona cuenta con un tejido de tostadurías de vanguardia, laboratorios de formación SCA y cafeterías de barrio donde la trazabilidad del productor, los precios justos de compra directa (Direct Trade) y el tueste claro son el estándar innegociable de calidad.
        </p>
      </section>
    `
  }
];
