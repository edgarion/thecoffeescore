export interface B2BSupplier {
  id: string;
  name: string;
  category: 'Tostador B2B' | 'Importador Café Verde' | 'Fabricante de Tostadoras' | 'Distribuidor Maquinaria';
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
  // ==================== ESPAÑA ====================
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
    description: 'Tostador pionero del café de especialidad en España. Suministro regular a cafeterías, formación de baristas homologada y calibración de maquinaria.',
    highlightBadge: 'Pionero BCN',
    services: ['Suministro café tostado semanal', 'Formación SCA', 'Mantenimiento de cafeteras La Marzocco', 'Recetas a medida']
  },
  {
    id: 'mare-terra-spain',
    name: 'Mare Terra Coffee (Green Coffee)',
    category: 'Importador Café Verde',
    country: 'España',
    countryCode: 'ES',
    flag: '🇪🇸',
    region: 'Barcelona (Eixample)',
    address: 'C/ Pau Claris 162, 08037 Barcelona',
    email: 'info@mareterracoffee.com',
    phone: '+34 934 87 23 18',
    whatsapp: '+34 690 12 34 56',
    website: 'https://mareterracoffee.com',
    priceIndex: {
      greenFobKg: '8,50 – 24,00 USD/kg',
    },
    minOrder: '1 Saco (30 kg o 60 kg)',
    leadTime: '48-72h (Almacén Barcelona)',
    originsOrCapacity: ['Brasil', 'Colombia', 'Etiopía', 'Sumatra', 'Kenia', 'Perú', 'Honduras'],
    certifications: ['Organic Bio', 'Fair Trade', 'Rainforest Alliance', 'Laboratorio Q-Grader'],
    description: 'Mayor importador independiente de café verde de especialidad en el sur de Europa. Amplio stock permanente en almacenes de Barcelona.',
    highlightBadge: 'Stock Inmediato UE',
    services: ['Venta sacos café verde', 'Catas Q-Grader y muestras', 'Financiación de lotes', 'Logística aduanera']
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
    description: 'Tostadores especializados en café de origen único con relaciones directas con caficultores. Tueste por convección Loring para máxima dulzura y limpieza.',
    highlightBadge: 'Direct Trade',
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
    description: 'Solución integral de café de especialidad para oficinas, hoteles y negocios con envíos recurrentes programados.',
    highlightBadge: 'Ideal Oficinas & B2B',
    services: ['Suscripción B2B recurrente', 'Renting de cafeteras superautomáticas', 'Instalación y mantenimiento']
  },

  // ==================== ETIOPÍA ====================
  {
    id: 'testi-coffee-ethiopia',
    name: 'Testi Coffee Exporters & Washing Stations',
    category: 'Importador Café Verde',
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
    description: 'Uno de los exportadores y operadores de estaciones de lavado más prestigiosos de Etiopía. Famosos por microlotes naturales anaeróbicos y lavados cítricos.',
    highlightBadge: 'Top Exportador Guji',
    services: ['Exportación FCL/LCL café verde', 'Lotes personalizados en estación de beneficio', 'Embalaje GrainPro / Ecotact']
  },
  {
    id: 'moplaco-ethiopia',
    name: 'Moplaco Trading Co. (Heleanna Georgalis)',
    category: 'Importador Café Verde',
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
    description: 'Empresa familiar de tercera generación liderada por Heleanna Georgalis. Reconocida mundialmente por sus métodos experimentales de secado y cafés salvajes.',
    highlightBadge: 'Microlotes de Culto',
    services: ['Cafés de bosque autóctono', 'Fermentaciones experimentales', 'Garantía de calidad de taza 88+']
  },
  {
    id: 'oromia-union-ethiopia',
    name: 'Oromia Coffee Farmers Cooperative Union (OCFCU)',
    category: 'Importador Café Verde',
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
    description: 'La mayor unión cooperativa de pequeños caficultores de Etiopía con más de 400 cooperativas miembro. Suministro a gran escala de café orgánico ético.',
    highlightBadge: '100% Cooperativa Fairtrade',
    services: ['Contratos anuales de suministro verde', 'Certificación social directa', 'Trazabilidad comunitaria']
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
    description: 'La tostaduría más antigua y legendaria de Addis Abeba. Tueste en origen con perfiles intensos tradicionales para espresso.',
    highlightBadge: 'Tostado en Origen',
    services: ['Café tostado envasado en origen', 'Distribución minorista internacional']
  },

  // ==================== TAILANDIA ====================
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
    description: 'Referente absoluto del café de especialidad de Tailandia. Trabajan codo a codo con agricultores del norte tailandés para desarrollar procesos anaeróbicos vanguardistas.',
    highlightBadge: 'Pionero Tailandia',
    services: ['Suministro café de especialidad tailandés', 'Microlotes de concurso', 'Exportación internacional']
  },
  {
    id: 'akha-ama-thailand',
    name: 'Akha Ama Coffee Co.',
    category: 'Tostador B2B',
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
    description: 'Empresa social fundada por Lee Ayu Chuepa que empodera a la comunidad indígena Akha. Café arábica cultivado bajo sombra de árboles frutales.',
    highlightBadge: 'Comercio Justo Social',
    services: ['Café tostado y verde directo de comunidad', 'Formación de origen', 'Turismo cafetero sostenible']
  },
  {
    id: 'doi-chaang-thailand',
    name: 'Doi Chaang Coffee Original Co. (Export)',
    category: 'Importador Café Verde',
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
    description: 'El productor de café arábica más famoso del Triángulo de Oro en Tailandia con indicación geográfica protegida y reconocimiento global.',
    highlightBadge: 'Indicación Geográfica',
    services: ['Exportación marítima y aérea de verde', 'Marcas blancas y tostado industrial', 'Café lavado de altura']
  },

  // ==================== FABRICANTES DE TOSTADORAS DE CAFÉ ====================
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
    description: 'El estándar indiscutible de la industria mundial del café. Máquinas de tambor de hierro fundido con tecnología de control térmico insuperable.',
    highlightBadge: 'Líder Mundial',
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
    description: 'Tostadoras holandesas de alta gama preferidas por los mejores tostadores artesanos del mundo. Flujo de aire de doble tambor y perfiles automatizados.',
    highlightBadge: 'World Roasting Champ',
    services: ['Tostadoras para tiendas de especialidad', 'Personalización de colores y acabados', 'Formación de maestros tostadores']
  },
  {
    id: 'aillio-roasters-nordic',
    name: 'Aillio (Bullet R1 & R2 Pro)',
    category: 'Fabricante de Tostadoras',
    country: 'Dinamarca / Taiwán',
    countryCode: 'DK',
    flag: '🇩🇰',
    region: 'Copenhague / Taipei',
    address: 'Aillio ApS, Flæsketorvet 68, 1711 København',
    email: 'support@aillio.com',
    phone: '+45 31 32 45 60',
    website: 'https://aillio.com',
    priceIndex: {
      equipmentPrice: '3.499 € (Bullet R1 V2 1kg Induction)',
    },
    minOrder: '1 Unidad',
    leadTime: 'Stock inmediato (Envíos UE)',
    originsOrCapacity: ['Capacidad: 100g a 1.000g por bachada · Calentamiento por Inducción Electromagnética'],
    certifications: ['Induction Roasting Pioneer', 'RoasTime Software Integrado'],
    description: 'Revolucionaria tostadora de inducción de 1 kg con sensores infrarrojos de temperatura de grano (IBTS) y conexión USB/WiFi para perfiles en la nube.',
    highlightBadge: 'Innovación Inducción',
    services: ['Tostadoras de precisión para muestras y microlotes', 'Software RoasTime gratuito', 'Comunidad Roast.World']
  }
];
