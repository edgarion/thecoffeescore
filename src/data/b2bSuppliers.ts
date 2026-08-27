export interface B2BSupplier {
  id: string;
  name: string;
  category: 'Exportador Café Verde' | 'Importador Café Verde' | 'Tostador B2B';
  country: string;
  countryCode: string;
  continent: 'América Latina' | 'África' | 'Asia & Pacífico' | 'Europa' | 'Norteamérica & Oceanía';
  flag: string;
  region: string;
  address: string;
  email: string;
  phone: string;
  whatsapp?: string;
  website: string;
  priceIndex: {
    wholesaleKg?: string;
    greenFobKg?: string;
    retailReference?: string;
  };
  minOrder: string;
  leadTime: string;
  originsOrCapacity: string[];
  certifications: string[];
  description: string;
  highlightBadge?: string;
  services: string[];
}

export const B2B_SUPPLIERS: B2BSupplier[] = [
  // =========================================================================
  // 1. ESPAÑA
  // =========================================================================
  {
    id: 'mare-terra-spain',
    name: 'Mare Terra Coffee (Green Coffee Importer)',
    category: 'Importador Café Verde',
    country: 'España',
    countryCode: 'ES',
    continent: 'Europa',
    flag: '🇪🇸',
    region: 'Barcelona (Zona Franca / Eixample)',
    address: 'C/ Pau Claris 162, 08037 Barcelona',
    email: 'info@mareterracoffee.com',
    phone: '+34 934 87 23 18',
    whatsapp: '+34 690 12 34 56',
    website: 'https://mareterracoffee.com',
    priceIndex: {
      greenFobKg: '8,50 – 24,00 USD/kg',
    },
    minOrder: '1 Saco GrainPro (30 kg o 60 kg)',
    leadTime: '48-72h (Almacén Barcelona)',
    originsOrCapacity: ['Brasil', 'Colombia', 'Etiopía', 'Sumatra', 'Kenia', 'Perú', 'Honduras'],
    certifications: ['Organic Bio', 'Fair Trade', 'Rainforest Alliance', 'Laboratorio Q-Grader'],
    description: 'Mayor importador independiente de café verde de materia prima en el sur de Europa. Stock permanente en sacos de 30kg/60kg para tostadores.',
    highlightBadge: 'Stock Café Verde UE',
    services: ['Venta sacos café verde', 'Catas Q-Grader y muestras gratuitas', 'Financiación de lotes', 'Logística aduanera']
  },
  {
    id: 'nomad-b2b-spain',
    name: 'Nomad Coffee Roasters',
    category: 'Tostador B2B',
    country: 'España',
    countryCode: 'ES',
    continent: 'Europa',
    flag: '🇪🇸',
    region: 'Barcelona (Poblenou)',
    address: 'C/ Pujades 95, 08005 Barcelona',
    email: 'info@nomadcoffee.es',
    phone: '+34 930 24 53 10',
    whatsapp: '+34 682 91 44 20',
    website: 'https://nomadcoffee.es',
    priceIndex: {
      wholesaleKg: '26,00 – 32,00 €/kg',
      retailReference: '17,50 € / 250g',
    },
    minOrder: '6 kg (B2B)',
    leadTime: '24-48h (Península)',
    originsOrCapacity: ['Colombia', 'Etiopía', 'Kenia', 'Guatemala', 'Brasil'],
    certifications: ['SCA Certified', 'Tueste Semanal Bajo Demanda', 'Trazabilidad Finca a Taza'],
    description: 'Tostador pionero del café de especialidad en España. Tueste semanal bajo demanda para cafeterías y venta mayorista en grano.',
    highlightBadge: 'Tostador Especialidad',
    services: ['Suministro café tostado semanal', 'Formación SCA', 'Mantenimiento de cafeteras', 'Recetas a medida']
  },
  {
    id: 'right-side-spain',
    name: 'Right Side Coffee Roasters',
    category: 'Tostador B2B',
    country: 'España',
    countryCode: 'ES',
    continent: 'Europa',
    flag: '🇪🇸',
    region: 'Castelldefels / Barcelona',
    address: 'C/ Molí d’en Ginestar 18, 08860 Castelldefels',
    email: 'orders@rightsidecoffee.com',
    phone: '+34 936 36 29 44',
    website: 'https://rightsidecoffee.com',
    priceIndex: {
      wholesaleKg: '25,50 – 34,00 €/kg',
      retailReference: '18,00 € / 250g',
    },
    minOrder: '5 kg (B2B)',
    leadTime: '24-48h',
    originsOrCapacity: ['Ruanda', 'Colombia', 'Etiopía', 'Costa Rica', 'El Salvador'],
    certifications: ['Direct Trade 100%', 'Competición SCA', 'Tueste Loring Smart'],
    description: 'Tostaduría especializada en café de origen único con relaciones directas con caficultores en origen. Tueste por convección de máxima pureza.',
    highlightBadge: 'Direct Trade Roaster',
    services: ['Microlotes de temporada', 'Perfiles de tueste personalizados', 'Suministro cafeterías top']
  },
  {
    id: 'syra-b2b-spain',
    name: 'Syra Coffee B2B Solutions',
    category: 'Tostador B2B',
    country: 'España',
    countryCode: 'ES',
    continent: 'Europa',
    flag: '🇪🇸',
    region: 'Barcelona / Madrid / Sevilla',
    address: 'C/ Siracusa 13, 08012 Barcelona',
    email: 'wholesale@syra.coffee',
    phone: '+34 931 43 92 11',
    website: 'https://syra.coffee',
    priceIndex: {
      wholesaleKg: '22,00 – 27,00 €/kg',
      retailReference: '14,50 € / 250g',
    },
    minOrder: '4 kg (B2B)',
    leadTime: '24h',
    originsOrCapacity: ['Guatemala', 'Etiopía', 'Honduras', 'Colombia'],
    certifications: ['100% Arábica de Especialidad', 'Zero Waste Eco Pack', 'Comercio Ético'],
    description: 'Solución integral de café de especialidad tostado para hostelería y empresas con entregas programadas.',
    highlightBadge: 'Tostador Mayorista',
    services: ['Suscripción B2B recurrente', 'Instalación y mantenimiento', 'Pack de bienvenida']
  },

  // =========================================================================
  // 2. ETIOPÍA
  // =========================================================================
  {
    id: 'testi-coffee-ethiopia',
    name: 'Testi Coffee Exporters & Washing Stations',
    category: 'Exportador Café Verde',
    country: 'Etiopía',
    countryCode: 'ET',
    continent: 'África',
    flag: '🇪🇹',
    region: 'Addis Abeba (Guji, Yirgacheffe & Sidama)',
    address: 'Bole Sub-City, Kebele 03/05, Addis Abeba',
    email: 'info@testicoffee.com',
    phone: '+251 11 667 4589',
    whatsapp: '+251 91 123 4567',
    website: 'https://testicoffee.com',
    priceIndex: {
      greenFobKg: '7,50 – 18,00 USD/kg FOB Yibuti',
    },
    minOrder: '20 Sacos GrainPro (o contenedor FCL 19.2T)',
    leadTime: '15-30 días pre-embarque',
    originsOrCapacity: ['Guji (Hambela, Uraga)', 'Yirgacheffe (Gelana, Chelelektu)', 'Sidama (Bensa)'],
    certifications: ['Organic Certified', 'Fair Trade USA', 'Rainforest', 'Project Direct Sourcing'],
    description: 'Exportador directo y operador de estaciones de lavado y secado en Etiopía. Suministro de materia prima verde en sacos GrainPro y Ecotact.',
    highlightBadge: 'Top Exportador Verde',
    services: ['Exportación FCL/LCL café verde', 'Lotes personalizados en estación de beneficio', 'Embalaje GrainPro / Ecotact']
  },
  {
    id: 'moplaco-ethiopia',
    name: 'Moplaco Trading Co. (Heleanna Georgalis)',
    category: 'Exportador Café Verde',
    country: 'Etiopía',
    countryCode: 'ET',
    continent: 'África',
    flag: '🇪🇹',
    region: 'Addis Abeba / Harar / Yirgacheffe',
    address: 'Kirkos Sub City, Wereda 01, Addis Abeba',
    email: 'moplaco@moplaco.com',
    phone: '+251 11 551 2963',
    website: 'https://moplaco.com',
    priceIndex: {
      greenFobKg: '9,00 – 26,00 USD/kg FOB',
    },
    minOrder: '10 Sacos GrainPro',
    leadTime: '20 días',
    originsOrCapacity: ['Harar Longberry', 'Yirgacheffe Kochere', 'Sheka Forest Geisha'],
    certifications: ['Specialty Coffee Pioneer Since 1972', 'Q-Processing Level 3'],
    description: 'Exportadora familiar fundada en 1972 por Heleanna Georgalis. Famosa mundialmente por sus microlotes experimentales de café verde de cata 88+ SCA.',
    highlightBadge: 'Microlotes Verde 88+',
    services: ['Cafés de bosque autóctono', 'Fermentaciones experimentales', 'Garantía de calidad de taza 88+']
  },
  {
    id: 'oromia-union-ethiopia',
    name: 'Oromia Coffee Farmers Cooperative Union (OCFCU)',
    category: 'Exportador Café Verde',
    country: 'Etiopía',
    countryCode: 'ET',
    continent: 'África',
    flag: '🇪🇹',
    region: 'Oromia Region / Addis Abeba',
    address: 'Akaki Kality Sub-City, Addis Abeba',
    email: 'oromia@oromiacoffeeunion.org',
    phone: '+251 11 445 0045',
    website: 'https://oromiacoffeeunion.org',
    priceIndex: {
      greenFobKg: '6,80 – 14,50 USD/kg FOB',
    },
    minOrder: '1 Contenedor FCL (19.200 kg)',
    leadTime: '30-45 días',
    originsOrCapacity: ['Limu', 'Nekemte', 'Yirgacheffe', 'Jimma', 'Harrar', 'Sidamo'],
    certifications: ['Fairtrade International (FLO)', 'EU Organic', 'USDA Organic', 'Naturland'],
    description: 'La mayor federación cooperativa de caficultores de Etiopía con más de 400 cooperativas miembro. Exportación de sacos de café verde ecológico certificado.',
    highlightBadge: 'Cooperativa Fairtrade',
    services: ['Contratos anuales de café verde', 'Certificación social directa', 'Trazabilidad comunitaria']
  },
  {
    id: 'tomoca-ethiopia',
    name: 'Tomoca Coffee Roasters (B2B Export)',
    category: 'Tostador B2B',
    country: 'Etiopía',
    countryCode: 'ET',
    continent: 'África',
    flag: '🇪🇹',
    region: 'Addis Abeba',
    address: 'Wavel St, Addis Abeba',
    email: 'info@tomocacoffee.com',
    phone: '+251 11 111 2781',
    website: 'https://tomocacoffee.com',
    priceIndex: {
      wholesaleKg: '15,00 – 19,00 USD/kg',
      retailReference: '6,50 USD / 250g',
    },
    minOrder: '50 kg (Tostado aéreo)',
    leadTime: '7-10 días internacionales',
    originsOrCapacity: ['Harar', 'Sidamo', 'Yirgacheffe'],
    certifications: ['Heritage Roaster Est. 1953', 'Italian-Ethiopian Roasting Style'],
    description: 'La tostaduría más antigua y legendaria de Addis Abeba (desde 1953). Café tostado en origen con perfiles intensos tradicionales para espresso.',
    highlightBadge: 'Tostador en Origen',
    services: ['Café tostado envasado en origen', 'Distribución minorista internacional']
  },

  // =========================================================================
  // 3. COLOMBIA
  // =========================================================================
  {
    id: 'caravela-colombia',
    name: 'Caravela Coffee (Specialty Green Exporter)',
    category: 'Exportador Café Verde',
    country: 'Colombia',
    countryCode: 'CO',
    continent: 'América Latina',
    flag: '🇨🇴',
    region: 'Medellín / Huila / Nariño / Cauca / Tolima',
    address: 'Cra 43A # 1-50, San Fernando Plaza, Medellín',
    email: 'latinamerica@caravela.coffee',
    phone: '+57 4 448 4243',
    website: 'https://caravela.coffee',
    priceIndex: {
      greenFobKg: '8,20 – 22,00 USD/kg FOB Buenaventura',
    },
    minOrder: '5 Sacos GrainPro (350 kg)',
    leadTime: '15-20 días embarque',
    originsOrCapacity: ['Huila (Pitalito)', 'Nariño (Buesaco)', 'Tolima (Planadas)', 'Cauca (Inzá)'],
    certifications: ['B Corp Certified', 'Relationship Coffee Model', 'PECA Educator Program'],
    description: 'Exportador líder de café verde de especialidad en América Latina. Exporta sacos de microlotes con trazabilidad 100% directa de pequeños caficultores.',
    highlightBadge: 'Top Exportador Colombia',
    services: ['Exportación de café verde en sacos', 'Varietales Geisha / Pink Bourbon / Chiroso', 'Control analítico Q-Grader']
  },
  {
    id: 'pergamino-colombia',
    name: 'Pergamino Coffee Roasters & Exporters',
    category: 'Tostador B2B',
    country: 'Colombia',
    countryCode: 'CO',
    continent: 'América Latina',
    flag: '🇨🇴',
    region: 'Medellín / Antioquia (Santa Bárbara)',
    address: 'Cra 37 # 8A-37, El Poblado, Medellín',
    email: 'contacto@pergamino.co',
    phone: '+57 4 268 6444',
    website: 'https://pergamino.co',
    priceIndex: {
      wholesaleKg: '65.000 – 95.000 COP/kg (~15,50 – 23,00 €/kg)',
      greenFobKg: '8,50 – 19,00 USD/kg',
    },
    minOrder: '10 kg (Tostado) o 1 Saco verde (70 kg)',
    leadTime: '5-10 días internacionales',
    originsOrCapacity: ['Antioquia (Finca Lomaverde)', 'Nariño', 'Cauca', 'Caldas'],
    certifications: ['Direct Trade Pioneer Colombia', 'SCA 86+ Cup Score'],
    description: 'Tostaduría y exportadora familiar con fincas propias y alianzas con caficultores de toda Colombia. Tueste en origen y venta de verde en sacos.',
    highlightBadge: 'Tostador & Finca',
    services: ['Suministro café tostado para cafeterías', 'Exportación de café verde en sacos', 'Microlotes proceso Honey y Natural']
  },
  {
    id: 'banexport-colombia',
    name: 'Banexport Specialty Coffee Exporters',
    category: 'Exportador Café Verde',
    country: 'Colombia',
    countryCode: 'CO',
    continent: 'América Latina',
    flag: '🇨🇴',
    region: 'Bogotá / Popayán / Huila',
    address: 'Calle 93B # 13-30, Bogotá',
    email: 'info@banexport.com',
    phone: '+57 1 744 3220',
    website: 'https://banexport.com',
    priceIndex: {
      greenFobKg: '7,80 – 24,00 USD/kg FOB',
    },
    minOrder: '10 Sacos GrainPro',
    leadTime: '15 días',
    originsOrCapacity: ['Cauca', 'Huila', 'Nariño', 'Sierra Nevada de Santa Marta'],
    certifications: ['Specialty Coffee Association Member', 'Rainforest Alliance'],
    description: 'Empresa exportadora dedicada al desarrollo de perfiles de tueste y procesos de fermentación controlada con pequeños productores colombianos.',
    highlightBadge: 'Innovación Origen',
    services: ['Exportación lotes especiales', 'Control de secado mecánico', 'Logística FCL/LCL']
  },

  // =========================================================================
  // 4. BRASIL
  // =========================================================================
  {
    id: 'daterra-coffee-brazil',
    name: 'Daterra Coffee (Specialty Green Exporter)',
    category: 'Exportador Café Verde',
    country: 'Brasil',
    countryCode: 'BR',
    continent: 'América Latina',
    flag: '🇧🇷',
    region: 'Cerrado Mineiro & Mogiana (1.150 msnm)',
    address: 'Fazenda Boa Vista, Patrocínio, Minas Gerais',
    email: 'daterra@daterracoffee.com.br',
    phone: '+55 34 3839 9000',
    website: 'https://daterracoffee.com.br',
    priceIndex: {
      greenFobKg: '7,50 – 35,00 USD/kg FOB Santos',
    },
    minOrder: 'PentaBox (2 x 12.1 kg al vacío) o Sacos GrainPro',
    leadTime: '20 días',
    originsOrCapacity: ['Cerrado Mineiro (Colección Masterpieces, Classics y Collection)'],
    certifications: ['Rainforest Alliance (1ª Finca Certificada de Brasil)', 'B-Corp', 'ISO 14001', 'Carbon Negative'],
    description: 'Hacienda cafetera y exportadora más avanzada tecnológicamente de Brasil. Pioneros en el empaque al vacío PentaPack y cafés anaeróbicos de alta cata.',
    highlightBadge: 'Pionero Sostenibilidad',
    services: ['Exportación café verde PentaPack', 'Lotes Masterpieces de concurso', 'Café neutro en carbono']
  },
  {
    id: 'expocaccer-brazil',
    name: 'Expocaccer Cooperativa dos Cafeicultores',
    category: 'Exportador Café Verde',
    country: 'Brasil',
    countryCode: 'BR',
    continent: 'América Latina',
    flag: '🇧🇷',
    region: 'Patrocínio, Cerrado Mineiro',
    address: 'Av. Faria Pereira 3945, Patrocínio, Minas Gerais',
    email: 'trader@expocaccer.com.br',
    phone: '+55 34 3839 9300',
    website: 'https://expocaccer.com.br',
    priceIndex: {
      greenFobKg: '6,20 – 16,00 USD/kg FOB Santos',
    },
    minOrder: '1 Contenedor FCL (320 sacos de 60kg)',
    leadTime: '20-30 días',
    originsOrCapacity: ['Cerrado Mineiro (Denominación de Origen Protegida)'],
    certifications: ['D.O. Cerrado Mineiro', 'Fairtrade', 'Rainforest', 'Regenerative Organic'],
    description: 'Cooperativa de referencia en el Cerrado Mineiro con más de 700 productores. Especialistas en lotes naturales con cuerpo pronunciado y notas a chocolate y nuez.',
    highlightBadge: 'D.O. Cerrado Mineiro',
    services: ['Exportación FCL grano verde', 'Lotes con Denominación de Origen', 'Almacenamiento climatizado']
  },

  // =========================================================================
  // 5. GUATEMALA
  // =========================================================================
  {
    id: 'primavera-coffee-guatemala',
    name: 'Primavera Coffee (Green Coffee Exporters)',
    category: 'Exportador Café Verde',
    country: 'Guatemala',
    countryCode: 'GT',
    continent: 'América Latina',
    flag: '🇬🇹',
    region: 'Huehuetenango / Antigua / Cobán',
    address: '7a Avenida 12-23, Zona 9, Ciudad de Guatemala',
    email: 'info@primaveracoffee.com',
    phone: '+502 2334 8970',
    website: 'https://primaveracoffee.com',
    priceIndex: {
      greenFobKg: '7,90 – 21,00 USD/kg FOB Puerto Quetzal / Santo Tomás',
    },
    minOrder: '5 Sacos GrainPro (345 kg)',
    leadTime: '15 días',
    originsOrCapacity: ['Huehuetenango (San Antonio Huista)', 'Antigua Guatemala', 'Fraijanes', 'San Marcos'],
    certifications: ['Direct Trade 100%', 'Women Coffee Producers Lot', 'Q-Grader Lab'],
    description: 'Exportador de café verde de especialidad fundado por Nadine Rasch. Trabajan con cientos de pequeños caficultores indígenas en Huehuetenango.',
    highlightBadge: 'Especialista Huehue',
    services: ['Sacos café verde GrainPro', 'Microlotes de altura 1.800m+', 'Importación directa a almacenes en Europa']
  },

  // =========================================================================
  // 6. COSTA RICA
  // =========================================================================
  {
    id: 'exclusive-coffees-costa-rica',
    name: 'Exclusive Coffees Costa Rica',
    category: 'Exportador Café Verde',
    country: 'Costa Rica',
    countryCode: 'CR',
    continent: 'América Latina',
    flag: '🇨🇷',
    region: 'Tarrazú / Valle Central / West Valley',
    address: 'San Antonio de Desamparados, San José',
    email: 'info@exclusivecoffees.com',
    phone: '+506 2276 8900',
    website: 'https://exclusivecoffees.com',
    priceIndex: {
      greenFobKg: '9,00 – 28,00 USD/kg FOB Puerto Limón / Caldera',
    },
    minOrder: '10 Sacos GrainPro / Vacío Ecotact',
    leadTime: '15 días',
    originsOrCapacity: ['Tarrazú (Dota, San Marcos)', 'West Valley (Naranjo)', 'Brunca'],
    certifications: ['Micro-Mill Revolution Pioneer', 'SCA Certified Exporter', 'Geisha & Anaerobic Innovators'],
    description: 'Pioneros del movimiento de microbeneficios en Costa Rica. Exportación de cafés lavados, White/Yellow/Red/Black Honey y anaeróbicos de Tarrazú.',
    highlightBadge: 'Pionero Microbeneficios',
    services: ['Exportación verde microlotes', 'Procesos Honey y Anaeróbicos', 'Catas virtuales de prelotes']
  },

  // =========================================================================
  // 7. PANAMÁ
  // =========================================================================
  {
    id: 'hacienda-la-esmeralda-panama',
    name: 'Hacienda La Esmeralda (Geisha Coffee)',
    category: 'Exportador Café Verde',
    country: 'Panamá',
    countryCode: 'PA',
    continent: 'América Latina',
    flag: '🇵🇦',
    region: 'Boquete, Chiriquí (Volcán Barú 1.600 - 1.800m)',
    address: 'Boquete, Provincia de Chiriquí, Panamá',
    email: 'sales@haciendaesmeralda.com',
    phone: '+507 720 1858',
    website: 'https://haciendaesmeralda.com',
    priceIndex: {
      greenFobKg: '35,00 – 250,00+ USD/kg FOB Panamá',
    },
    minOrder: 'Cajas al vacío 25 kg o Subasta Online',
    leadTime: '10 días transporte aéreo / marítimo',
    originsOrCapacity: ['Boquete (Finca Jaramillo, Cañas Verdes, El Velo) · Variedad Geisha'],
    certifications: ['Best of Panama (BOP) Multi-Champion', 'Rainforest Alliance', 'Geisha Pioneer 2004'],
    description: 'La hacienda cafetera más famosa del planeta. Redescubrieron la legendaria variedad Geisha en 2004, fijando el estándar mundial de fragancia floral de jazmín y bergamota.',
    highlightBadge: 'Mito del Geisha',
    services: ['Café verde Geisha envasado al vacío', 'Colección Private Collection & Special Reserve', 'Subasta anual de microlotes']
  },

  // =========================================================================
  // 8. HONDURAS
  // =========================================================================
  {
    id: 'san-vicente-honduras',
    name: 'Beneficio San Vicente Exporters',
    category: 'Exportador Café Verde',
    country: 'Honduras',
    countryCode: 'HN',
    continent: 'América Latina',
    flag: '🇭🇳',
    region: 'Peña Blanca, Santa Bárbara',
    address: 'Peña Blanca, Cortés / Santa Bárbara',
    email: 'info@beneficiosanvicente.com',
    phone: '+504 2658 9020',
    website: 'https://beneficiosanvicente.com',
    priceIndex: {
      greenFobKg: '7,50 – 22,00 USD/kg FOB Puerto Cortés',
    },
    minOrder: '10 Sacos GrainPro',
    leadTime: '15-20 días',
    originsOrCapacity: ['Santa Bárbara (El Cielito, Las Flores, El Sauce)'],
    certifications: ['Cup of Excellence (COE) Champions', 'Direct Trade'],
    description: 'El beneficio y exportador detrás de la mayoría de los cafés ganadores de Taza de la Excelencia en Honduras. Terruño volcánico único en el volcán Santa Bárbara.',
    highlightBadge: 'Líder Cup of Excellence',
    services: ['Exportación café verde de alta cata', 'Procesamiento artesanal de pequeños productores', 'Logística LCL']
  },

  // =========================================================================
  // 9. PERÚ
  // =========================================================================
  {
    id: 'cenfrocafe-peru',
    name: 'Cenfrocafé Cooperativa de Servicios Múltiples',
    category: 'Exportador Café Verde',
    country: 'Perú',
    countryCode: 'PE',
    continent: 'América Latina',
    flag: '🇵🇪',
    region: 'Jaén, Cajamarca / San Ignacio (1.600 - 2.000m)',
    address: 'Av. Mesones Muro 415, Jaén, Cajamarca',
    email: 'comercial@cenfrocafe.com.pe',
    phone: '+51 76 431 820',
    website: 'https://cenfrocafe.com.pe',
    priceIndex: {
      greenFobKg: '6,50 – 16,00 USD/kg FOB Callao / Paita',
    },
    minOrder: '1 Contenedor FCL (275 sacos de 69kg) o LCL 20 sacos',
    leadTime: '25 días',
    originsOrCapacity: ['Cajamarca (Jaén, San Ignacio, Cutervo)', 'Amazonas'],
    certifications: ['Fairtrade FLO', 'USDA Organic', 'EU Bio', 'SPP Símbolo de Pequeños Productores'],
    description: 'La cooperativa de café orgánico y de comercio justo más prestigiosa de Perú. Más de 3.000 familias socias que cultivan Typica, Bourbon y Caturra a gran altitud.',
    highlightBadge: 'Top Orgánico Perú',
    services: ['Exportación FCL de café verde orgánico', 'Microlotes especiales 85+ SCA', 'Trazabilidad cooperativa']
  },

  // =========================================================================
  // 10. MÉXICO
  // =========================================================================
  {
    id: 'ensambles-cafe-mexico',
    name: 'Ensambles Café (Green Sourcing Mexico)',
    category: 'Exportador Café Verde',
    country: 'México',
    countryCode: 'MX',
    continent: 'América Latina',
    flag: '🇲🇽',
    region: 'Veracruz / Chiapas / Oaxaca',
    address: 'Coatepec, Veracruz, México',
    email: 'contacto@ensamblescafe.com',
    phone: '+52 228 816 5420',
    website: 'https://ensamblescafe.com',
    priceIndex: {
      greenFobKg: '7,00 – 18,50 USD/kg FOB Veracruz',
    },
    minOrder: '5 Sacos GrainPro',
    leadTime: '15 días',
    originsOrCapacity: ['Veracruz (Huatusco, Coatepec)', 'Oaxaca (Pluma Hidalgo)', 'Chiapas'],
    certifications: ['Specialty Coffee Sourcing', 'Regenerative Agriculture Practices'],
    description: 'Compañía mexicana dedicada a la exportación de café verde de especialidad con estaciones de procesamiento húmedo y seco en Veracruz y Oaxaca.',
    highlightBadge: 'Especialidad México',
    services: ['Exportación café verde en grano', 'Lotes Pluma Hidalgo y Typica antigua', 'Envío directo a tostadores en Europa y USA']
  },

  // =========================================================================
  // 11. KENIA
  // =========================================================================
  {
    id: 'dormans-kenya',
    name: 'Dormans Coffee Exporters (Green Coffee)',
    category: 'Exportador Café Verde',
    country: 'Kenia',
    countryCode: 'KE',
    continent: 'África',
    flag: '🇰🇪',
    region: 'Nairobi (Nyeri, Kirinyaga & Kiambu)',
    address: 'Dormans Complex, Mhasibu Rd, off Mombasa Rd, Nairobi',
    email: 'exports@dormans.com',
    phone: '+254 20 699 9000',
    website: 'https://dormans.com',
    priceIndex: {
      greenFobKg: '9,50 – 28,00 USD/kg FOB Mombasa',
    },
    minOrder: '10 Sacos Sisal/GrainPro (60 kg cada uno)',
    leadTime: '25 días pre-embarque',
    originsOrCapacity: ['Nyeri (SL28, SL34, Batian)', 'Kirinyaga (Kirimikuyu, Baragwi)', 'Embu', 'Murang’a'],
    certifications: ['Rainforest Alliance', 'UTZ Certified', 'Fair Trade', 'Nairobi Coffee Exchange Top Buyer'],
    description: 'El exportador y comerciante de café verde más prestigioso de África Oriental. Especialistas en lotes kenianos lavados Grado AA/AB con acidez brillante de grosella negra.',
    highlightBadge: 'Kenia Grado AA',
    services: ['Exportación de café verde en sacos de 60kg', 'Subastas en Nairobi Coffee Exchange', 'Lotes especiales SL28 / SL34']
  },

  // =========================================================================
  // 12. RUANDA
  // =========================================================================
  {
    id: 'rwanda-trading-company',
    name: 'Rwanda Trading Company (RTC Green Coffee)',
    category: 'Exportador Café Verde',
    country: 'Ruanda',
    countryCode: 'RW',
    continent: 'África',
    flag: '🇷🇼',
    region: 'Kigali / Lago Kivu / Huye',
    address: 'KK 15 Rd, Gikondo Industrial Park, Kigali',
    email: 'info@rwandatc.com',
    phone: '+250 788 300 450',
    website: 'https://rwandatrading.com',
    priceIndex: {
      greenFobKg: '7,80 – 22,00 USD/kg FOB Mombasa / Dar es Salaam',
    },
    minOrder: '20 Sacos GrainPro',
    leadTime: '30 días',
    originsOrCapacity: ['Lago Kivu (Rutsiro, Nyamasheke)', 'Huye Mountain', 'Gicumbi'],
    certifications: ['Rainforest Alliance', 'Fair Trade', 'Women in Coffee Rwanda', 'Red Bourbon 100%'],
    description: 'El principal exportador de café verde de Ruanda. Operan decenas de estaciones de beneficio en las colinas del Lago Kivu especializadas en la variedad Red Bourbon.',
    highlightBadge: 'Red Bourbon de Altura',
    services: ['Exportación de verde FCL/LCL', 'Lotes lavados, Honey y Naturales anaeróbicos', 'Programas sociales para caficultoras']
  },

  // =========================================================================
  // 13. BURUNDI
  // =========================================================================
  {
    id: 'long-miles-burundi',
    name: 'Long Miles Coffee Project Burundi',
    category: 'Exportador Café Verde',
    country: 'Burundi',
    countryCode: 'BI',
    continent: 'África',
    flag: '🇧🇮',
    region: 'Kayanza & Ngozi (Colinas de Bukeye y Heza)',
    address: 'Bujumbura / Kayanza Province, Burundi',
    email: 'orders@longmilescoffeeproject.com',
    phone: '+257 79 900 120',
    website: 'https://longmilescoffeeproject.com',
    priceIndex: {
      greenFobKg: '8,90 – 26,00 USD/kg FOB',
    },
    minOrder: '5 Sacos GrainPro',
    leadTime: '20 días',
    originsOrCapacity: ['Colina Heza (2.000m)', 'Colina Bukeye', 'Colina Nkonge'],
    certifications: ['Social Impact Enterprise', 'Red Bourbon Specialty', 'Scouts Coffee Agronomy'],
    description: 'Proyecto fundado por Ben y Kristy Carlson que revolucionó la calidad del café en Burundi trabajando colina por colina con miles de pequeños caficultores.',
    highlightBadge: 'Proyecto Social Impact',
    services: ['Sacos café verde de colina única', 'Procesamiento anaeróbico en estación Heza', 'Trazabilidad agronómica']
  },

  // =========================================================================
  // 14. UGANDA
  // =========================================================================
  {
    id: 'great-lakes-uganda',
    name: 'Great Lakes Coffee Uganda (Arabica & Fine Robusta)',
    category: 'Exportador Café Verde',
    country: 'Uganda',
    countryCode: 'UG',
    continent: 'África',
    flag: '🇺🇬',
    region: 'Kampala / Monte Elgon / Montañas Rwenzori',
    address: 'Plot 15, Old Port Bell Rd, Kampala',
    email: 'info@greatlakescoffee.com',
    phone: '+256 414 250 820',
    website: 'https://greatlakescoffee.com',
    priceIndex: {
      greenFobKg: '5,80 – 16,00 USD/kg FOB Mombasa',
    },
    minOrder: '1 Contenedor FCL o 20 Sacos GrainPro',
    leadTime: '30 días',
    originsOrCapacity: ['Monte Elgon (Kapchorwa Arabica)', 'Rwenzori Mountains', 'Fine Robusta de Origen'],
    certifications: ['UTZ', 'Rainforest Alliance', 'Organic EU/NOP', 'Fine Robusta Certified Q-Grader'],
    description: 'Exportador histórico de café arábica de altura en las laderas del volcán Monte Elgon y pioneros en Fine Robusta de especialidad en África.',
    highlightBadge: 'Arábica & Fine Robusta',
    services: ['Exportación sacos verde GrainPro', 'Lotes de pequeños productores de Monte Elgon', 'Suministro industrial y de especialidad']
  },

  // =========================================================================
  // 15. TAILANDIA
  // =========================================================================
  {
    id: 'roots-b2b-thailand',
    name: 'Roots Coffee Roaster (Specialty Sourcing B2B)',
    category: 'Tostador B2B',
    country: 'Tailandia',
    countryCode: 'TH',
    continent: 'Asia & Pacífico',
    flag: '🇹🇭',
    region: 'Bangkok & Chiang Mai',
    address: 'The Commons, Thong Lo 17, Sukhumvit 55, Bangkok',
    email: 'wholesale@rootsbkk.com',
    phone: '+66 2 712 6265',
    whatsapp: '+66 81 845 9210',
    website: 'https://rootsbkk.com',
    priceIndex: {
      wholesaleKg: '680 – 1.200 THB/kg (~18,00 – 32,00 €/kg)',
      retailReference: '420 THB / 200g (~11,50 €)',
    },
    minOrder: '5 kg (B2B)',
    leadTime: '3-5 días (Asia/EU Express)',
    originsOrCapacity: ['Chiang Rai (Doi Pangkhon)', 'Mae Hong Son (Ban Huay Hom)', 'Nan (Mae Charim)'],
    certifications: ['Thai Specialty Coffee Champion', '100% Sourced in Thailand', 'Anaerobic Yeast Honey'],
    description: 'Referente del café de especialidad de Tailandia. Tueste artesanal y compra directa de micro-lotes en las montañas del norte tailandés.',
    highlightBadge: 'Tostador Tailandia',
    services: ['Suministro café de especialidad tailandés', 'Microlotes de concurso', 'Exportación internacional']
  },
  {
    id: 'akha-ama-thailand',
    name: 'Akha Ama Coffee Co. (Producer & Roaster)',
    category: 'Exportador Café Verde',
    country: 'Tailandia',
    countryCode: 'TH',
    continent: 'Asia & Pacífico',
    flag: '🇹🇭',
    region: 'Chiang Mai / Mae Jan Tai',
    address: '175/1 Rachadamnoen Rd, Phra Sing, Chiang Mai',
    email: 'info@akhaama.com',
    phone: '+66 86 915 8646',
    whatsapp: '+66 86 915 8646',
    website: 'https://akhaama.com',
    priceIndex: {
      wholesaleKg: '550 – 900 THB/kg (~14,50 – 24,00 €/kg)',
      greenFobKg: '8,00 – 15,00 USD/kg',
    },
    minOrder: '10 kg (Tostado) o 1 Saco verde (30 kg)',
    leadTime: '5-7 días internacionales',
    originsOrCapacity: ['Mae Jan Tai Village, Chiang Rai (1.400 msnm)'],
    certifications: ['Social Enterprise', 'Shade-Grown Organic Polyculture', 'SCA World Cup Finalist'],
    description: 'Empresa social indígena Akha. Cultivan, procesan y exportan café arábica verde en grano cultivado bajo sombra de bosque natural.',
    highlightBadge: 'Productor & Exportador',
    services: ['Café verde y tostado directo de comunidad', 'Formación de origen', 'Turismo cafetero sostenible']
  },
  {
    id: 'doi-chaang-thailand',
    name: 'Doi Chaang Coffee Original Co. (Export)',
    category: 'Exportador Café Verde',
    country: 'Tailandia',
    countryCode: 'TH',
    continent: 'Asia & Pacífico',
    flag: '🇹🇭',
    region: 'Doi Chang, Chiang Rai',
    address: '407 Moo 3, Doi Chang, Mae Suai, Chiang Rai',
    email: 'export@doichaangcoffee.com',
    phone: '+66 53 602 963',
    website: 'https://doichaangcoffee.com',
    priceIndex: {
      greenFobKg: '7,20 – 14,00 USD/kg FOB Bangkok',
      wholesaleKg: '480 – 850 THB/kg (~13,00 – 22,00 €/kg)',
    },
    minOrder: '5 Sacos GrainPro (Verde) / 20 kg (Tostado)',
    leadTime: '15 días',
    originsOrCapacity: ['Doi Chang Mountains, Chiang Rai (1.200 - 1.600m)'],
    certifications: ['Beyond Fair Trade Certified', 'USDA Organic', 'EU Organic', 'GI Geographical Indication'],
    description: 'Productor y exportador de café arábica verde de montaña en Chiang Rai con indicación geográfica protegida y certificación orgánica internacional.',
    highlightBadge: 'Exportador Verde GI',
    services: ['Exportación marítima y aérea de verde', 'Marcas blancas y tostado industrial', 'Café lavado de altura']
  },

  // =========================================================================
  // 16. INDONESIA
  // =========================================================================
  {
    id: 'wahana-estate-indonesia',
    name: 'Wahana Estate & Sari Makmur (Green Coffee Exporters)',
    category: 'Exportador Café Verde',
    country: 'Indonesia',
    countryCode: 'ID',
    continent: 'Asia & Pacífico',
    flag: '🇮🇩',
    region: 'Sumatra (Sidikalang, Dairi, Lago Toba)',
    address: 'Jl. Letda Sujono No. 109, Medan, North Sumatra',
    email: 'info@sarimakmur.com',
    phone: '+62 61 736 8000',
    website: 'https://sarimakmur.com',
    priceIndex: {
      greenFobKg: '7,00 – 24,00 USD/kg FOB Belawan (Medan)',
    },
    minOrder: '10 Sacos GrainPro (60 kg cada uno)',
    leadTime: '20 días',
    originsOrCapacity: ['Sumatra Mandheling (Giling Basah)', 'Wahana Estate Specialty Varietals (Longberry, Rasuna, Andung Sari)'],
    certifications: ['Rainforest Alliance', 'UTZ', 'SCA Certified Q-Lab Medan'],
    description: 'Hacienda pionera de 500 hectáreas en Sumatra. Famosos por el proceso tradicional Wet-Hulled (Giling Basah) y procesos experimentales naturales en microclima del Lago Toba.',
    highlightBadge: 'Top Sumatra Mandheling',
    services: ['Exportación verde FCL/LCL', 'Sumatra Wet-Hulled y Natural Anaeróbico', 'Lotes por variedad pura']
  },

  // =========================================================================
  // 17. VIETNAM
  // =========================================================================
  {
    id: 'son-pacamara-vietnam',
    name: 'Son Pacamara Specialty Farm & Roastery',
    category: 'Exportador Café Verde',
    country: 'Vietnam',
    countryCode: 'VN',
    continent: 'Asia & Pacífico',
    flag: '🇻🇳',
    region: 'Da Lat, Tierras Altas Centrales (1.500 - 1.650m)',
    address: 'Cau Dat, Xuan Truong, Da Lat, Lam Dong',
    email: 'sonpacamaracoffee@gmail.com',
    phone: '+84 91 800 5420',
    website: 'https://sonpacamara.com',
    priceIndex: {
      greenFobKg: '8,50 – 26,00 USD/kg FOB Ho Chi Minh',
      wholesaleKg: '450.000 – 750.000 VND/kg (~17,00 – 28,00 €/kg)',
    },
    minOrder: '2 Sacos GrainPro (60 kg) o 10 kg Tostado',
    leadTime: '10-15 días',
    originsOrCapacity: ['Da Lat (Pacamara, Bourbon Amarillo, Typica, Catimor)'],
    certifications: ['Vietnam Specialty Coffee Champion', 'Single Variety Micro-lots'],
    description: 'La finca de especialidad más premiada de Vietnam en las tierras altas de Da Lat. Productores pioneros de la variedad Pacamara y fermentaciones de levadura en Asia.',
    highlightBadge: 'Pionero Pacamara Asia',
    services: ['Sacos café verde Pacamara y Bourbon', 'Café tostado para cafeterías asiáticas y europeas', 'Visitas técnicas a finca']
  },

  // =========================================================================
  // 18. INDIA
  // =========================================================================
  {
    id: 'araku-coffee-india',
    name: 'Araku Coffee (Organic Regenerative Exporters)',
    category: 'Exportador Café Verde',
    country: 'India',
    countryCode: 'IN',
    continent: 'Asia & Pacífico',
    flag: '🇮🇳',
    region: 'Valle de Araku, Ghats Orientales, Andhra Pradesh',
    address: '12th Main Rd, Indiranagar, Bangalore / Araku Valley',
    email: 'b2b@arakucoffee.com',
    phone: '+91 80 4099 2200',
    website: 'https://arakucoffee.com',
    priceIndex: {
      greenFobKg: '9,00 – 24,00 USD/kg FOB Chennai / Visakhapatnam',
      wholesaleKg: '22,00 – 30,00 €/kg (Tostado UE)',
    },
    minOrder: '5 Sacos GrainPro (Verde) / 10 kg (Tostado)',
    leadTime: '15 días',
    originsOrCapacity: ['Valle de Araku (Arábica de sombra 1.000 - 1.400m)'],
    certifications: ['100% Regenerative Organic Certified (ROC)', 'Demeter Biodynamic', 'Prix Épicures Gold Medal Paris'],
    description: 'Iniciativa tribal y biodinámica de más de 10.000 agricultores indígenas adivasi en el Valle de Araku. Café arábica cultivado bajo sombra de pimienta y mango con reconocimiento en París y Tokio.',
    highlightBadge: 'Biodinámico de Lujo',
    services: ['Exportación verde biodinámico', 'Suministro tostado para alta hostelería', 'Lotes Grand Reserve']
  },

  // =========================================================================
  // 19. PAPÚA NUEVA GUINEA
  // =========================================================================
  {
    id: 'sigri-estate-png',
    name: 'Sigri Estate (PNG Specialty Green Exporters)',
    category: 'Exportador Café Verde',
    country: 'Papúa Nueva Guinea',
    countryCode: 'PG',
    continent: 'Asia & Pacífico',
    flag: '🇵🇬',
    region: 'Valle de Wahgi, Tierras Altas Occidentales (1.600m)',
    address: 'Mount Hagen, Western Highlands Province',
    email: 'exports@sigriestate.com',
    phone: '+675 542 1200',
    website: 'https://sigriestate.com',
    priceIndex: {
      greenFobKg: '8,00 – 20,00 USD/kg FOB Lae',
    },
    minOrder: '10 Sacos GrainPro (60 kg)',
    leadTime: '25 días',
    originsOrCapacity: ['Valle de Wahgi (Arábica Typica introducida de Jamaica Blue Mountain en 1930)'],
    certifications: ['Rainforest Alliance', 'Bird Friendly Certified', 'Shade-Grown Plantation'],
    description: 'Plantación legendaria de Papúa Nueva Guinea con árboles traídos originalmente de Blue Mountain (Jamaica). Grano verde con cuerpo sedoso, acidez limpia y notas a frutas tropicales.',
    highlightBadge: 'Linaje Blue Mountain',
    services: ['Exportación verde Grado AA y Peaberry', 'Lavado tradicional con 3 días de remojo', 'Sacos GrainPro']
  },

  // =========================================================================
  // 20. ALEMANIA (HUB DE COMERCIO VERDE & TOSTADOR)
  // =========================================================================
  {
    id: 'list-beisler-germany',
    name: 'List & Beisler Green Coffee Traders (Est. 1901)',
    category: 'Importador Café Verde',
    country: 'Alemania',
    countryCode: 'DE',
    continent: 'Europa',
    flag: '🇩🇪',
    region: 'Hamburgo (Speicherstadt / HafenCity)',
    address: 'Am Sandtorkai 60, 20457 Hamburg',
    email: 'info@list-beisler.de',
    phone: '+49 40 3070 590',
    website: 'https://list-beisler.de',
    priceIndex: {
      greenFobKg: '7,50 – 30,00 USD/kg (Almacén Hamburgo/Bremen)',
    },
    minOrder: '1 Saco GrainPro (60 kg o 30 kg)',
    leadTime: '24-48h (Entrega en toda Europa)',
    originsOrCapacity: ['Más de 30 países de origen (África, América Latina, Asia)'],
    certifications: ['Organic Bio UE', 'Fairtrade', 'Rainforest', 'Q-Grader Cupping Lab'],
    description: 'Comercializador e importador centenario de café verde en el puerto de Hamburgo. Distribuye sacos de verde para tostadores artesanales e industriales en toda Europa.',
    highlightBadge: 'Puerto de Hamburgo',
    services: ['Venta sacos verde en stock permanente', 'Muestras de tueste y catas Q-Grader', 'Logística paneuropea puerta a puerta']
  },
  {
    id: 'the-barn-germany',
    name: 'The Barn Coffee Roasters Berlin',
    category: 'Tostador B2B',
    country: 'Alemania',
    countryCode: 'DE',
    continent: 'Europa',
    flag: '🇩🇪',
    region: 'Berlín (Mitte / Schönhauser Allee)',
    address: 'Schönhauser Allee 8, 10119 Berlin',
    email: 'b2b@thebarn.de',
    phone: '+49 30 4050 4990',
    website: 'https://thebarn.de',
    priceIndex: {
      wholesaleKg: '28,00 – 42,00 €/kg',
      retailReference: '18,50 € / 250g',
    },
    minOrder: '6 kg (B2B)',
    leadTime: '24-48h (Alemania / UE)',
    originsOrCapacity: ['Microlotes 87+ SCA de Colombia, Etiopía, Kenia, Costa Rica'],
    certifications: ['Nordic Light Roast Pioneer', 'Direct Trade Single Origin Only', 'Zero Blends Policy'],
    description: 'Uno de los tostadores de referencia del tueste claro nórdico en Europa. Suministro mayorista de café tostado para cafeterías de especialidad internacionales.',
    highlightBadge: 'Líder Tueste Nórdico',
    services: ['Suministro café tostado semanal B2B', 'Entrenamiento de baristas internacionales', 'Equipamiento Mahlkönig & La Marzocco']
  },

  // =========================================================================
  // 21. PAÍSES BAJOS (HUB IMPORTACIÓN VERDE & TOSTADOR)
  // =========================================================================
  {
    id: 'trabocca-netherlands',
    name: 'Trabocca Specialty Green Coffee Importers',
    category: 'Importador Café Verde',
    country: 'Países Bajos',
    countryCode: 'NL',
    continent: 'Europa',
    flag: '🇳🇱',
    region: 'Ámsterdam (Keizersgracht)',
    address: 'Keizersgracht 484, 1016 EG Amsterdam',
    email: 'info@trabocca.com',
    phone: '+31 20 528 5060',
    website: 'https://trabocca.com',
    priceIndex: {
      greenFobKg: '8,00 – 32,00 USD/kg',
    },
    minOrder: '1 Saco GrainPro (30 kg o 60 kg)',
    leadTime: '48h (Almacén Rotterdam/Ámsterdam)',
    originsOrCapacity: ['Etiopía (Operaciones propias en Yirgacheffe/Guji)', 'Colombia', 'Kenia', 'Indonesia', 'Perú'],
    certifications: ['Fairtrade', 'Organic EU/USDA', 'B-Corp Certified', 'Operation Cherry Red (OCR)'],
    description: 'Importador líder en Europa de café verde de especialidad, especialmente famosos por su programa Operation Cherry Red en Etiopía y su stock en Rotterdam.',
    highlightBadge: 'Especialista Etiopía',
    services: ['Venta verde en sacos y palés', 'Portal digital de muestras para tostadores', 'Proyectos de impacto en origen']
  },

  // =========================================================================
  // 22. REINO UNIDO (IMPORTADOR VERDE & TOSTADOR)
  // =========================================================================
  {
    id: 'drwakefield-uk',
    name: 'DRWakefield Green Coffee Importers (Est. 1970)',
    category: 'Importador Café Verde',
    country: 'Reino Unido',
    countryCode: 'GB',
    continent: 'Europa',
    flag: '🇬🇧',
    region: 'Londres (Borough Market)',
    address: '5 Bermondsey St, London SE1 2ER',
    email: 'trade@drwakefield.com',
    phone: '+44 20 7407 8888',
    website: 'https://drwakefield.com',
    priceIndex: {
      greenFobKg: '7,50 – 26,00 USD/kg (Almacén Tilbury / Amberes)',
    },
    minOrder: '1 Saco GrainPro (60 kg)',
    leadTime: '24-72h (UK & Europa)',
    originsOrCapacity: ['Más de 35 países de origen'],
    certifications: ['B-Corp Certified', 'Carbon Neutral Coffee Importer', 'Rainforest', 'Fairtrade'],
    description: 'Comercializador e importador familiar independiente con más de 50 años de experiencia. Almacenes en Tilbury y Amberes para abastecer a tostadores europeos.',
    highlightBadge: 'B-Corp Importer',
    services: ['Suministro de sacos de café verde', 'Contratos a futuros y cobertura de precio', 'Muestras de cata']
  },
  {
    id: 'square-mile-uk',
    name: 'Square Mile Coffee Roasters (James Hoffmann & Anette Moldvaer)',
    category: 'Tostador B2B',
    country: 'Reino Unido',
    countryCode: 'GB',
    continent: 'Europa',
    flag: '🇬🇧',
    region: 'Londres (Walthamstow)',
    address: 'Unit 13 Uplands Business Park, London E17 5QJ',
    email: 'wholesale@squaremilecoffee.com',
    phone: '+44 20 7729 2999',
    website: 'https://squaremilecoffee.com',
    priceIndex: {
      wholesaleKg: '24,00 – 38,00 £/kg (~28,00 – 44,00 €/kg)',
      retailReference: '16,00 £ / 250g',
    },
    minOrder: '6 kg (B2B)',
    leadTime: '24h (UK) / 48-72h (Europa)',
    originsOrCapacity: ['Kenia', 'Etiopía', 'Costa Rica', 'Colombia', 'Brasil', 'Red Brick Espresso Blend'],
    certifications: ['World Barista Champion Co-founder', 'Direct Trade', 'SCA Certified'],
    description: 'Tostaduría de culto fundada en 2008 por James Hoffmann y Anette Moldvaer. Suministro mayorista de café tostado en grano y espresso insigne Red Brick.',
    highlightBadge: 'Tostador de Culto UK',
    services: ['Suministro café tostado para cafeterías', 'Formación de baristas en academia propia', 'Asesoramiento técnico']
  },

  // =========================================================================
  // 23. ITALIA (HUB VERDE & TOSTADOR ESPECIALIDAD)
  // =========================================================================
  {
    id: 'sandalj-trading-italy',
    name: 'Sandalj Trading Company (Green Coffee Trieste)',
    category: 'Importador Café Verde',
    country: 'Italia',
    countryCode: 'IT',
    continent: 'Europa',
    flag: '🇮🇹',
    region: 'Trieste (Capital del Café Italiano)',
    address: 'Via San Nicolò 22, 34121 Trieste',
    email: 'info@sandalj.com',
    phone: '+39 040 676 7911',
    website: 'https://sandalj.com',
    priceIndex: {
      greenFobKg: '7,00 – 35,00 USD/kg (Almacén Trieste)',
    },
    minOrder: '1 Saco (30 kg / 60 kg)',
    leadTime: '24-48h',
    originsOrCapacity: ['Lotes de finca única de todo el cinturón cafetero mundial y selecciones espresso Sandalj'],
    certifications: ['Italian Cup Tasting Pioneers', 'Q-Grader Academy Trieste', 'ISO 9001'],
    description: 'El importador histórico de café verde de especialidad más prestigioso de Italia ubicado en el puerto franco de Trieste.',
    highlightBadge: 'Puerto de Trieste',
    services: ['Venta café verde en sacos', 'Lotes de microlotes de cata y blends verdes', 'Academia de cata de Trieste']
  },
  {
    id: 'gardelli-italy',
    name: 'Gardelli Specialty Coffees (World Roasting Champion)',
    category: 'Tostador B2B',
    country: 'Italia',
    countryCode: 'IT',
    continent: 'Europa',
    flag: '🇮🇹',
    region: 'Forlì / Bolonia',
    address: 'Via M. Pascoli 29, 47121 Forlì',
    email: 'info@gardellicoffee.com',
    phone: '+39 0543 554 110',
    website: 'https://gardellicoffee.com',
    priceIndex: {
      wholesaleKg: '35,00 – 80,00+ €/kg',
      retailReference: '22,00 € / 250g',
    },
    minOrder: '4 kg (B2B)',
    leadTime: '24-48h (Envíos mundiales)',
    originsOrCapacity: ['Lotes exclusivos de competición de Panamá, Etiopía, Colombia, Kenia y Uganda'],
    certifications: ['World Coffee Roasting Champion (Rubens Gardelli)', 'WCE Multi-Champion'],
    description: 'Tostador de competición fundado por el campeón mundial de tueste Rubens Gardelli. Selecciones ultraexclusivas de café tostado en grano 89+ SCA.',
    highlightBadge: 'World Roasting Champion',
    services: ['Café tostado para hostelería de lujo y competición', 'Tueste en tostadora personalizada C-Röaster', 'Lotes Geisha']
  },

  // =========================================================================
  // 24. FRANCIA (IMPORTADOR VERDE & TOSTADOR)
  // =========================================================================
  {
    id: 'belco-france',
    name: 'Belco Green Coffee Sourcing (Bordeaux)',
    category: 'Importador Café Verde',
    country: 'Francia',
    countryCode: 'FR',
    continent: 'Europa',
    flag: '🇫🇷',
    region: 'Burdeos / Mérignac',
    address: '15 Rue Isaac Newton, 33700 Mérignac',
    email: 'contact@belco.fr',
    phone: '+33 5 56 12 11 10',
    website: 'https://belco.fr',
    priceIndex: {
      greenFobKg: '7,80 – 28,00 USD/kg (Almacén Le Havre / Burdeos)',
    },
    minOrder: '1 Saco GrainPro (60 kg)',
    leadTime: '24-48h (Francia / España / Europa)',
    originsOrCapacity: ['Etiopía', 'Colombia', 'Guatemala', 'El Salvador', 'Kenia', 'Ruanda'],
    certifications: ['Agribusiness Fair Sourcing', 'Bio UE Organic', 'Q-Grader Training Center'],
    description: 'Importador francés líder de café verde de especialidad. Conecta directamente a productores de origen con cientos de tostadores en el continente europeo.',
    highlightBadge: 'Sourcing Directo Francia',
    services: ['Sacos de café verde GrainPro', 'Transporte marítimo con veleros de bajas emisiones', 'Formación de tueste']
  },

  // =========================================================================
  // 25. DINAMARCA / PAÍSES NÓRDICOS
  // =========================================================================
  {
    id: 'coffee-collective-denmark',
    name: 'The Coffee Collective (Direct Trade Roastery)',
    category: 'Tostador B2B',
    country: 'Dinamarca',
    countryCode: 'DK',
    continent: 'Europa',
    flag: '🇩🇰',
    region: 'Copenhague (Frederiksberg)',
    address: 'Godthåbsvej 34B, 2000 Frederiksberg, København',
    email: 'wholesale@coffeecollective.dk',
    phone: '+45 60 15 15 25',
    website: 'https://coffeecollective.dk',
    priceIndex: {
      wholesaleKg: '220 – 350 DKK/kg (~29,50 – 47,00 €/kg)',
      retailReference: '125 DKK / 250g',
    },
    minOrder: '5 kg (B2B)',
    leadTime: '48h (Europa)',
    originsOrCapacity: ['Finca Vista Hermosa (Guatemala)', 'Kieni (Kenia)', 'Takesi (Bolivia)', 'Enciso (Colombia)'],
    certifications: ['B-Corp Certified', 'Direct Trade Transparency Report', 'World Barista & Cup Tasting Champions'],
    description: 'Pioneros del modelo Direct Trade a nivel mundial y del estilo de tueste nórdico limpio y dulce. Publican anualmente los precios pagados en origen a los agricultores.',
    highlightBadge: 'Pionero Direct Trade',
    services: ['Suministro café tostado para cafeterías de especialidad', 'Informes de transparencia de precios', 'Auditorías de calidad']
  },

  // =========================================================================
  // 26. ESTADOS UNIDOS (HUB IMPORTACIÓN VERDE & TOSTADORES)
  // =========================================================================
  {
    id: 'cafe-imports-usa',
    name: 'Cafe Imports (Green Specialty Coffee Importers)',
    category: 'Importador Café Verde',
    country: 'Estados Unidos',
    countryCode: 'US',
    continent: 'Norteamérica & Oceanía',
    flag: '🇺🇸',
    region: 'Minneapolis / San Diego / Berlín (Europa)',
    address: '2617 E Hennepin Ave, Minneapolis, MN 55413',
    email: 'sales@cafeimports.com',
    phone: '+1 612 521 0254',
    website: 'https://cafeimports.com',
    priceIndex: {
      greenFobKg: '7,50 – 38,00 USD/kg',
    },
    minOrder: '1 Saco GrainPro (30 kg o 60 kg)',
    leadTime: '48h (Almacenes USA y Europa)',
    originsOrCapacity: ['Más de 30 países de origen (América, África, Asia)'],
    certifications: ['B-Corp Certified', 'USDA Organic', 'Fair Trade USA', 'Cup of Excellence Sponsor'],
    description: 'Uno de los mayores y más respetados importadores de café verde de especialidad del mundo con almacenes en Estados Unidos y Europa.',
    highlightBadge: 'Líder Verde Global',
    services: ['Venta sacos de café verde GrainPro', 'Microlotes de concurso y variedades raras', 'Material educativo Q-Grader']
  },
  {
    id: 'onyx-coffee-lab-usa',
    name: 'Onyx Coffee Lab B2B Roasters',
    category: 'Tostador B2B',
    country: 'Estados Unidos',
    countryCode: 'US',
    continent: 'Norteamérica & Oceanía',
    flag: '🇺🇸',
    region: 'Rogers / Bentonville, Arkansas',
    address: '101 E Walnut St, Rogers, AR 72756',
    email: 'wholesale@onyxcoffeelab.com',
    phone: '+1 479 899 6465',
    website: 'https://onyxcoffeelab.com',
    priceIndex: {
      wholesaleKg: '28,00 – 50,00 USD/kg',
      retailReference: '21,00 USD / 284g (10 oz)',
    },
    minOrder: '5 kg (B2B)',
    leadTime: '24-48h',
    originsOrCapacity: ['Southern Weather Espresso', 'Geometry Blend', 'Monarch', 'Microlotes de origen único'],
    certifications: ['US Barista Championship Multi-Winner', '100% Solar-Powered Roastery', 'Pricing Transparency'],
    description: 'La tostaduría más galardonada de Estados Unidos en competiciones de baristas y tueste. Tueste con energía solar y trazabilidad financiera completa.',
    highlightBadge: 'Multi-Campeón USA',
    services: ['Suministro mayorista de café tostado', 'Formación barista en vídeo y presencial', 'Diseño de cartas de café']
  },

  // =========================================================================
  // 27. AUSTRALIA (HUB TOSTADURÍA & IMPORTACIÓN ASIA-PACÍFICO)
  // =========================================================================
  {
    id: 'ona-coffee-australia',
    name: 'Ona Coffee (Saša Šestić - World Barista Champion)',
    category: 'Tostador B2B',
    country: 'Australia',
    countryCode: 'AU',
    continent: 'Norteamérica & Oceanía',
    flag: '🇦🇺',
    region: 'Canberra / Sídney / Melbourne',
    address: '68 Wollongong St, Fyshwick ACT 2609',
    email: 'wholesale@onacoffee.com.au',
    phone: '+61 2 6162 3326',
    website: 'https://onacoffee.com.au',
    priceIndex: {
      wholesaleKg: '42,00 – 75,00 AUD/kg (~25,00 – 45,00 €/kg)',
      retailReference: '26,00 AUD / 200g',
    },
    minOrder: '5 kg (B2B)',
    leadTime: '24-48h',
    originsOrCapacity: ['Raspberry Candy Blend', 'CM Project Anaerobics (Panamá, Colombia, Etiopía)'],
    certifications: ['World Barista Champion (Saša Šestić)', 'Project Origin Direct Sourcing'],
    description: 'Tostador australiano legendario fundado por el campeón mundial de baristas Saša Šestić. Pioneros en fermentación por Maceración Carbónica (CM Selections).',
    highlightBadge: 'Líder Barista Mundial',
    services: ['Suministro café tostado para cafeterías top', 'Microlotes CM Project en grano', 'Calibración de molienda y agua']
  },

  // =========================================================================
  // 28. JAPÓN (HUB DE TUESTE & IMPORTACIÓN TOKIO)
  // =========================================================================
  {
    id: 'leaves-coffee-japan',
    name: 'Leaves Coffee Roasters Tokyo',
    category: 'Tostador B2B',
    country: 'Japón',
    countryCode: 'JP',
    continent: 'Asia & Pacífico',
    flag: '🇯🇵',
    region: 'Tokio (Sumida-ku / Honjo)',
    address: '1-8-8 Honjo, Sumida-ku, Tokyo 130-0004',
    email: 'contact@leavescoffee.jp',
    phone: '+81 3 6658 8878',
    website: 'https://leavescoffee.jp',
    priceIndex: {
      wholesaleKg: '4.800 – 9.500 JPY/kg (~29,00 – 58,00 €/kg)',
      retailReference: '2.500 JPY / 150g',
    },
    minOrder: '3 kg (B2B)',
    leadTime: '48h (Japón / Asia / Envíos Mundiales)',
    originsOrCapacity: ['Microlotes 88+ de Etiopía, Kenia, Colombia, Panamá Geisha e Indonesia'],
    certifications: ['Tokyo Specialty Coffee Roaster of the Year', 'Probat UG vintage retrofitted'],
    description: 'Tostaduría de culto en Tokio fundada por Yasuo Ishii. Tueste superligero y limpio en tostadora clásica de hierro fundido con tecnología moderna.',
    highlightBadge: 'Tostaduría de Culto Tokio',
    services: ['Suministro de café tostado en grano', 'Tueste por encargo para cafeterías boutique', 'Envíos aéreos express globales']
  }
];
