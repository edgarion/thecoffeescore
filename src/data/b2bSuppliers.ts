export interface B2BSupplier {
  id: string;
  name: string;
  category: 'Tostador B2B' | 'Exportador Café Verde' | 'Importador Café Verde' | 'Fabricante de Tostadoras';
  country: string;
  countryCode: string;
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
    equipmentPrice?: string;
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
  // ==================== ESPAÑA (IMPORTADOR VERDE & TOSTADORES) ====================
  {
    id: 'mare-terra-spain',
    name: 'Mare Terra Coffee (Green Coffee Importer)',
    category: 'Importador Café Verde',
    country: 'España',
    countryCode: 'ES',
    flag: '🇪🇸',
    region: 'Barcelona (Eixample / Almacenes Zona Franca)',
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
    flag: '🇪🇸',
    region: 'Barcelona (Poblenou / Born)',
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

  // ==================== ETIOPÍA (EXPORTADORES CAFÉ VERDE & TOSTADOR) ====================
  {
    id: 'testi-coffee-ethiopia',
    name: 'Testi Coffee Exporters & Washing Stations',
    category: 'Exportador Café Verde',
    country: 'Etiopía',
    countryCode: 'ET',
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

  // ==================== TAILANDIA (PRODUCTORES VERDE & TOSTADORES) ====================
  {
    id: 'roots-b2b-thailand',
    name: 'Roots Coffee Roaster (Specialty Sourcing B2B)',
    category: 'Tostador B2B',
    country: 'Tailandia',
    countryCode: 'TH',
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
    description: 'Referente del café de especialidad de Tailandia. Tueste artesanal y compra directa de micro-lotes en las montañas del norte.',
    highlightBadge: 'Tostador Tailandia',
    services: ['Suministro café de especialidad tailandés', 'Microlotes de concurso', 'Exportación internacional']
  },
  {
    id: 'akha-ama-thailand',
    name: 'Akha Ama Coffee Co. (Producer & Roaster)',
    category: 'Exportador Café Verde',
    country: 'Tailandia',
    countryCode: 'TH',
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

  // ==================== COLOMBIA (EXPORTADOR CAFÉ VERDE & TOSTADOR) ====================
  {
    id: 'caravela-colombia',
    name: 'Caravela Coffee (Green Coffee Exporter)',
    category: 'Exportador Café Verde',
    country: 'Colombia',
    countryCode: 'CO',
    flag: '🇨🇴',
    region: 'Medellín / Huila / Nariño / Cauca',
    address: 'Cra 43A # 1-50, San Fernando Plaza, Medellín',
    email: 'latinamerica@caravela.coffee',
    phone: '+57 4 448 4243',
    website: 'https://caravela.coffee',
    priceIndex: {
      greenFobKg: '8,20 – 22,00 USD/kg FOB Buenaventura / Cartagena',
    },
    minOrder: '5 Sacos GrainPro (350 kg)',
    leadTime: '15-20 días embarque',
    originsOrCapacity: ['Huila (Pitalito, San Agustín)', 'Nariño (Buesaco)', 'Tolima (Planadas)', 'Cauca (Inzá)'],
    certifications: ['B Corp Certified', 'Relationship Coffee Model', 'PECA Educator Program'],
    description: 'Exportador líder de café verde de especialidad en Latinoamérica con certificación B-Corp. Exporta sacos de microlotes con trazabilidad 100% de pequeños productores.',
    highlightBadge: 'Top Exportador Colombia',
    services: ['Exportación de café verde de especialidad', 'Lotes por variedad (Pink Bourbon, Geisha, Caturra)', 'Control de calidad en origen']
  },
  {
    id: 'pergamino-colombia',
    name: 'Pergamino Coffee Roasters & Exporters',
    category: 'Tostador B2B',
    country: 'Colombia',
    countryCode: 'CO',
    flag: '🇨🇴',
    region: 'Medellín / Antioquia',
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
    originsOrCapacity: ['Antioquia (Santa Bárbara)', 'Nariño', 'Cauca', 'Caldas'],
    certifications: ['Direct Trade Pioneer Colombia', 'SCA 86+ Cup Score'],
    description: 'Tostaduría y exportadora familiar con fincas propias en Santa Bárbara (Lomaverde) y alianzas con caficultores de toda Colombia.',
    highlightBadge: 'Tostador & Finca',
    services: ['Suministro café tostado para cafeterías', 'Exportación de café verde en sacos', "Microlotes de proceso 'Honey' y 'Natural'"]

  },

  // ==================== BRASIL (EXPORTADOR CAFÉ VERDE ESPECIALIDAD) ====================
  {
    id: 'daterra-coffee-brazil',
    name: 'Daterra Coffee (Specialty Green Exporter)',
    category: 'Exportador Café Verde',
    country: 'Brasil',
    countryCode: 'BR',
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

  // ==================== KENIA (EXPORTADOR CAFÉ VERDE MATERIA PRIMA) ====================
  {
    id: 'dormans-kenya',
    name: 'Dormans Coffee Exporters (Green Coffee)',
    category: 'Exportador Café Verde',
    country: 'Kenia',
    countryCode: 'KE',
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
    description: 'El exportador y comerciante de café verde más prestigioso de África Oriental. Especialistas en lotes kenianos lavados Grado AA/AB con acidez brillante de grosella negra y mora.',
    highlightBadge: 'Kenia Grado AA',
    services: ['Exportación de café verde en sacos de 60kg', 'Subastas en Nairobi Coffee Exchange', 'Lotes especiales SL28 / SL34']
  },

  // ==================== FABRICANTES DE TOSTADORAS DE CAFÉ (EQUIPAMIENTO) ====================
  {
    id: 'probat-roasters-germany',
    name: 'Probat Roasters (Probat-Werke GmbH)',
    category: 'Fabricante de Tostadoras',
    country: 'Alemania',
    countryCode: 'DE',
    flag: '🇩🇪',
    region: 'Emmerich am Rhein',
    address: 'Reeser Str. 94, 46446 Emmerich am Rhein, Alemania',
    email: 'sales@probat.com',
    phone: '+49 2822 7000',
    website: 'https://probat.com',
    priceIndex: {
      equipmentPrice: 'Desde 28.000 € (P05) hasta >150.000 € (Industriales)',
    },
    minOrder: '1 Unidad',
    leadTime: '8-16 semanas fabricación',
    originsOrCapacity: ['Tostadoras de tambor de 1 kg, 5 kg, 12 kg, 25 kg y líneas de 500 kg/h'],
    certifications: ['Líder Mundial de Tueste desde 1868', 'Control Pilot Roaster Software', 'CE / UL'],
    description: 'El estándar de la industria mundial del café para tostadores profesionales. Máquinas de tambor de hierro fundido con tecnología de control térmico.',
    highlightBadge: 'Maquinaria de Tueste',
    services: ['Fabricación y venta de tostadoras', 'Ingeniería de plantas de café', 'Servicio técnico global y repuestos']
  },
  {
    id: 'giesen-roasters-netherlands',
    name: 'Giesen Coffee Roasters',
    category: 'Fabricante de Tostadoras',
    country: 'Países Bajos',
    countryCode: 'NL',
    flag: '🇳🇱',
    region: 'Ulft, Países Bajos',
    address: 'Industrieweg 15, 7071 CK Ulft',
    email: 'info@giesen.com',
    phone: '+31 315 68 13 77',
    website: 'https://giesen.com',
    priceIndex: {
      equipmentPrice: 'Desde 18.500 € (W1A 1.5kg) hasta 65.000 € (W15A 15kg)',
    },
    minOrder: '1 Unidad',
    leadTime: '6-10 semanas',
    originsOrCapacity: ['Capacidades: W1A (1.5kg), W6A (6kg), W15A (15kg), W30A (30kg)'],
    certifications: ['Oficial World Coffee Roasting Championship', 'Cropster & Artisan Integrated'],
    description: 'Tostadoras holandesas artesanales de alta precisión preferidas por los mejores tostadores artesanos.',
    highlightBadge: 'Maquinaria de Tueste',
    services: ['Tostadoras para tiendas de especialidad', 'Personalización de colores', 'Formación de maestros tostadores']
  }
];
