export interface GlobalCoffeeShop {
  id: string;
  name: string;
  city: string;
  country: string;
  flag: string;
  district: string;
  address: string;
  signatureDrink: string;
  signatureRoast: string;
  gearSetup: string;
  priceEspresso: number;
  score: number;
  tags: string[];
  websiteUrl: string;
  mapsUrl: string;
  image: string;
}

export const GLOBAL_COFFEE_CITIES = [
  'Todas',
  'Tokio',
  'Nueva York',
  'Bangkok',
  'Vietnam',
  'Londres',
  'París',
  'Berlín',
  'Ámsterdam',
  'Roma',
  'Nápoles',
  'Los Ángeles',
  'Miami',
  'Malmö',
  'Barcelona',
  'Melbourne'
] as const;

export const GLOBAL_COFFEE_SHOPS: GlobalCoffeeShop[] = [
  // --- TOKIO (JAPÓN) ---
  {
    id: "glitch-tokyo",
    name: "Glitch Coffee Roasters",
    city: "Tokio",
    country: "Japón",
    flag: "🇯🇵",
    district: "Jinbocho / Ginza",
    address: "3-16 Kanda Jinbocho, Chiyoda-ku, Tokyo",
    signatureDrink: "Single Origin Geisha Flight (Pour-Over)",
    signatureRoast: "Colombia Finca El Paraiso 92 (Tueste ultraligero)",
    gearSetup: "Origami Dripper · Mahlkönig EK43S · Slayer Espresso",
    priceEspresso: 6.50,
    score: 9.9,
    tags: ["Tueste Nórdico / Japonés", "Microlotes Geisha", "Pour-Over de Precisión"],
    websiteUrl: "https://glitchcoffee.com",
    mapsUrl: "https://maps.google.com/?q=Glitch+Coffee+Roasters+Tokyo",
    image: "/assets/products/nomad-shakiso.png"
  },
  {
    id: "koffee-mameya-kakeru",
    name: "Koffee Mameya Kakeru",
    city: "Tokio",
    country: "Japón",
    flag: "🇯🇵",
    district: "Kiyosumi-Shirakawa",
    address: "2-16-14 Hirano, Koto-ku, Tokyo",
    signatureDrink: "Coffee Omakase Course (5 preparaciones)",
    signatureRoast: "Panama Esmeralda Special Geisha",
    gearSetup: "Modbar Espresso Custom · Kalita Wave · Comandante C40",
    priceEspresso: 7.00,
    score: 9.8,
    tags: ["Omakase Bar", "Experiencia de Celler", "Referencia Mundial"],
    websiteUrl: "https://koffee-mameya.com",
    mapsUrl: "https://maps.google.com/?q=Koffee+Mameya+Kakeru+Tokyo",
    image: "/assets/pourover.png"
  },
  {
    id: "fuglen-tokyo",
    name: "Fuglen Tokyo",
    city: "Tokio",
    country: "Japón",
    flag: "🇯🇵",
    district: "Shibuya / Yoyogi Park",
    address: "1-39-6 Tomigaya, Shibuya-ku, Tokyo",
    signatureDrink: "Iced AeroPress Ethiopia Washed",
    signatureRoast: "Kenya Nyeri Hill Light Roast",
    gearSetup: "La Marzocco Linea PB · Mahlkönig Peak · AeroPress",
    priceEspresso: 4.80,
    score: 9.5,
    tags: ["Diseño Escandinavo Vintage", "Café y Coctelería", "Shibuya Icon"],
    websiteUrl: "https://fuglen.no",
    mapsUrl: "https://maps.google.com/?q=Fuglen+Tokyo",
    image: "/assets/products/syra-bahire.png"
  },

  // --- NUEVA YORK (EE.UU.) ---
  {
    id: "sey-coffee-ny",
    name: "Sey Coffee",
    city: "Nueva York",
    country: "Estados Unidos",
    flag: "🇺🇸",
    district: "Brooklyn (Bushwick)",
    address: "18 Grattan St, Brooklyn, NY 11206",
    signatureDrink: "Washed Ethiopian Pour-Over",
    signatureRoast: "Pink Bourbon Huila Washed",
    gearSetup: "Loring S35 Kestrel · Synesso MVP Hydra · EK43",
    priceEspresso: 5.25,
    score: 9.9,
    tags: ["Mejor Tostador de EE.UU.", "Greenhouse Cafe", "Claridad Absoluta"],
    websiteUrl: "https://seycoffee.com",
    mapsUrl: "https://maps.google.com/?q=Sey+Coffee+Brooklyn",
    image: "/assets/products/nomad-pink-bourbon.png"
  },
  {
    id: "devocion-ny",
    name: "Devoción Coffee",
    city: "Nueva York",
    country: "Estados Unidos",
    flag: "🇺🇸",
    district: "Williamsburg / Flatiron",
    address: "69 Grand St, Brooklyn, NY 11249",
    signatureDrink: "Toro Blend Nitro Cold Brew & Espresso",
    signatureRoast: "Wild Forest (Café fresco en 10 días desde la cosecha)",
    gearSetup: "Kees van der Westen Spirit · Mahlkönig E65S",
    priceEspresso: 4.75,
    score: 9.4,
    tags: ["Café 100% Colombiano Fresco", "Jardín Vertical", "Williamsburg"],
    websiteUrl: "https://devocion.com",
    mapsUrl: "https://maps.google.com/?q=Devocion+Williamsburg",
    image: "/assets/products/rightside-ancizar.png"
  },

  // --- BANGKOK (TAILANDIA) ---
  {
    id: "factory-coffee-bangkok",
    name: "Factory Coffee",
    city: "Bangkok",
    country: "Tailandia",
    flag: "🇹🇭",
    district: "Phaya Thai",
    address: "49 Phayathai Rd, Thanon Phaya Thai, Ratchathewi, Bangkok",
    signatureDrink: "Supreme Dirty (Cold milk + double ristretto)",
    signatureRoast: "Sirinya Chiang Rai Anaerobic",
    gearSetup: "Sanremo Cafe Racer · Victoria Arduino Mythos One",
    priceEspresso: 3.80,
    score: 9.6,
    tags: ["Campeones Baristas de Tailandia", "Dirty Coffee Master", "Café de Origen Thai"],
    websiteUrl: "https://factorycoffeebkk.com",
    mapsUrl: "https://maps.google.com/?q=Factory+Coffee+Bangkok",
    image: "/assets/products/lelit-anna.png"
  },
  {
    id: "nana-coffee-roasters",
    name: "Nana Coffee Roasters",
    city: "Bangkok",
    country: "Tailandia",
    flag: "🇹🇭",
    district: "Ari / Bang Na",
    address: "24 Ari 4 Fang Nuea Alley, Phaya Thai, Bangkok",
    signatureDrink: "Signature Yuzu Cold Brew Tonic",
    signatureRoast: "Moonstone Floral Specialty Blend",
    gearSetup: "Slayer Steam LP · Mazzer ZM · Giesen W6A",
    priceEspresso: 4.20,
    score: 9.5,
    tags: ["Jardín Botánico Arquitectónico", "Tostador Campeón Mundial", "Tuestes Ligeros"],
    websiteUrl: "https://nanacoffeeroasters.com",
    mapsUrl: "https://maps.google.com/?q=Nana+Coffee+Roasters+Ari",
    image: "/assets/products/syra-atitlan.png"
  },

  // --- VIETNAM (HANOI, SAIGON, DA NANG) ---
  {
    id: "the-workshop-saigon",
    name: "The Workshop Coffee",
    city: "Vietnam",
    country: "Vietnam",
    flag: "🇻🇳",
    district: "Ho Chi Minh (Saigon - District 1)",
    address: "27 Ngô Đức Kế, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh",
    signatureDrink: "Fine Robusta Anaerobic Espresso",
    signatureRoast: "Da Lat Arabica Bourbon & Lam Dong Fine Robusta",
    gearSetup: "La Marzocco Strada · Hario Syphon Bar · EK43",
    priceEspresso: 3.20,
    score: 9.3,
    tags: ["Pioneros del Specialty en Vietnam", "Fine Robusta 84+ SCA", "Syphon Bar"],
    websiteUrl: "https://theworkshopcoffee.com",
    mapsUrl: "https://maps.google.com/?q=The+Workshop+Coffee+Saigon",
    image: "/assets/cherries.png"
  },
  {
    id: "43-factory-da-nang",
    name: "43 Factory Coffee Roaster (XLIII Specialty Coffee)",
    city: "Vietnam",
    country: "Vietnam",
    flag: "🇻🇳",
    district: "Da Nang / Saigon",
    address: "422 Ngô Thì Sĩ, Mỹ An, Ngũ Hành Sơn, Đà Nẵng",
    signatureDrink: "Single Origin Filter (Panama & Ethiopia)",
    signatureRoast: "Gesha Village Estate Dry Natural",
    gearSetup: "Kees van der Westen Mirage · Loveramics Brewers",
    priceEspresso: 4.50,
    score: 9.7,
    tags: ["Arquitectura de Cristal sobre Agua", "Cero Mezclas (100% Single Origin)", "Trazabilidad Extrema"],
    websiteUrl: "https://43factory.run",
    mapsUrl: "https://maps.google.com/?q=43+Factory+Coffee+Roaster+Da+Nang",
    image: "/assets/products/threemarks-espresso.png"
  },

  // --- LONDRES (REINO UNIDO) ---
  {
    id: "prufrock-london",
    name: "Prufrock Coffee",
    city: "Londres",
    country: "Reino Unido",
    flag: "🇬🇧",
    district: "Clerkenwell / Leather Lane",
    address: "23-25 Leather Ln, London EC1N 7TE",
    signatureDrink: "Flat White con leche de granja de pasto & Batch Brew",
    signatureRoast: "Square Mile Red Brick / Sweetshop",
    gearSetup: "Nuova Simonelli Black Eagle · Mythos 2 · V60 Auto",
    priceEspresso: 4.20,
    score: 9.7,
    tags: ["Fundado por Gwilym Davies (WBC)", "Academia de Baristas", "Square Mile Roasters"],
    websiteUrl: "https://prufrockcoffee.com",
    mapsUrl: "https://maps.google.com/?q=Prufrock+Coffee+London",
    image: "/assets/products/sage-bambino.png"
  },
  {
    id: "watchhouse-london",
    name: "WatchHouse Coffee",
    city: "Londres",
    country: "Reino Unido",
    flag: "🇬🇧",
    district: "Bermondsey / Tower Bridge",
    address: "199 Bermondsey St, London SE1 3UW",
    signatureDrink: "Rare & Rarities Geisha Espresso",
    signatureRoast: "199 House Blend (Guatemala & Colombia)",
    gearSetup: "La Marzocco KB90 · Mazzer Robur S · Marco Beverage Systems",
    priceEspresso: 4.40,
    score: 9.5,
    tags: ["Modern Coffee Culture", "Diseño Minimalista Británico", "Tueste Propio"],
    websiteUrl: "https://watchhouse.com",
    mapsUrl: "https://maps.google.com/?q=WatchHouse+Bermondsey+London",
    image: "/assets/products/delonghi-specialista.png"
  },

  // --- PARÍS (FRANCIA) ---
  {
    id: "belleville-paris",
    name: "Belleville Brûlerie",
    city: "París",
    country: "Francia",
    flag: "🇫🇷",
    district: "Belleville / 10ème",
    address: "10 Rue Pradier, 75019 Paris",
    signatureDrink: "Café Crème au Lait d'Avoine & Filtre du Jour",
    signatureRoast: "Le Chouchou (Tueste medio equilibrado)",
    gearSetup: "La Marzocco Linea Classic · Diederich IR-12 · EK43",
    priceEspresso: 3.50,
    score: 9.4,
    tags: ["Tostadores Pioneros de París", "Café de Terroir", "Ambiente Bohemio"],
    websiteUrl: "https://cafesbelleville.com",
    mapsUrl: "https://maps.google.com/?q=Belleville+Brulerie+Paris",
    image: "/assets/products/rightside-abasambi.png"
  },
  {
    id: "ten-belles-paris",
    name: "Ten Belles",
    city: "París",
    country: "Francia",
    flag: "🇫🇷",
    district: "Canal Saint-Martin / Bastille",
    address: "10 Rue de la Grange aux Belles, 75010 Paris",
    signatureDrink: "Espresso Doble & Pan Sourdough artesanal",
    signatureRoast: "Ten Belles Seasonal Light Espresso",
    gearSetup: "Synesso Cyncra · Mazzer Kony · Moccamaster",
    priceEspresso: 3.60,
    score: 9.3,
    tags: ["Canal Saint-Martin", "Panadería Salvaje y Café", "Vanguardia Parisina"],
    websiteUrl: "https://tenbelles.com",
    mapsUrl: "https://maps.google.com/?q=Ten+Belles+Canal+Saint-Martin",
    image: "/assets/products/nomad-samuel.png"
  },

  // --- BERLÍN (ALEMANIA) ---
  {
    id: "the-barn-berlin",
    name: "The Barn Coffee Roasters",
    city: "Berlín",
    country: "Alemania",
    flag: "🇩🇪",
    district: "Mitte / Schönhauser Allee",
    address: "Auguststraße 58, 10115 Berlin",
    signatureDrink: "Single Origin Nordic Espresso (Sin azúcar)",
    signatureRoast: "Ethiopia Desta Gola Anaerobic",
    gearSetup: "Synesso MVP · Mahlkönig EK43 · Probat UG22",
    priceEspresso: 3.90,
    score: 9.8,
    tags: ["Filosofía Nórdica Estricta", "Sin Azúcar Añadido", "Pioneros Europeos"],
    websiteUrl: "https://thebarn.de",
    mapsUrl: "https://maps.google.com/?q=The+Barn+Auguststrasse+Berlin",
    image: "/assets/products/eureka-specialita.png"
  },
  {
    id: "five-elephant-berlin",
    name: "Five Elephant Coffee & Cake",
    city: "Berlín",
    country: "Alemania",
    flag: "🇩🇪",
    district: "Kreuzberg / Mitte",
    address: "Reichenberger Str. 101, 10999 Berlin",
    signatureDrink: "Kenya Gichathaini AA Pour-Over + Cheesecake",
    signatureRoast: "El Salvador Finca San José Pacamara",
    gearSetup: "Kees van der Westen Spirit · EK43 · Diedrich Roaster",
    priceEspresso: 3.80,
    score: 9.6,
    tags: ["Famoso Cheesecake & Café", "Relaciones Directas con Agricultores", "Kreuzberg"],
    websiteUrl: "https://fiveelephant.com",
    mapsUrl: "https://maps.google.com/?q=Five+Elephant+Kreuzberg+Berlin",
    image: "/assets/bag.png"
  },

  // --- ÁMSTERDAM (PAÍSES BAJOS) ---
  {
    id: "friedhats-amsterdam",
    name: "Friedhats FUKU Cafe",
    city: "Ámsterdam",
    country: "Países Bajos",
    flag: "🇳🇱",
    district: "Bos en Lommer",
    address: "Bos en Lommerweg 136- hs, 1055 ED Amsterdam",
    signatureDrink: "Natural Processed Geisha Nitro Can & Espresso",
    signatureRoast: "Colombia El Paraiso Lychee / Floral",
    gearSetup: "Slayer Espresso 2-Group · Mahlkönig E65S GbW",
    priceEspresso: 4.00,
    score: 9.7,
    tags: ["Lex Wenneker (WBC finalist)", "Botes de plástico amarillo icónicos", "Extracciones de Alta Claridad"],
    websiteUrl: "https://friedhats.com",
    mapsUrl: "https://maps.google.com/?q=Friedhats+FUKU+Cafe+Amsterdam",
    image: "/assets/products/nomad-shakiso.png"
  },

  // --- ROMA & NÁPOLES (ITALIA) ---
  {
    id: "faro-roma",
    name: "Faro — Luminari del Caffè",
    city: "Roma",
    country: "Italia",
    flag: "🇮🇹",
    district: "Salario / Porta Pia",
    address: "Via Piave, 55, 00187 Roma RM",
    signatureDrink: "Double Shot Espresso de Especialidad 100% Arabica",
    signatureRoast: "Algrano Custom Roasts (Etiopía y Kenia)",
    gearSetup: "La Marzocco Strada AV · Victoria Arduino Mythos · V60 Bar",
    priceEspresso: 2.50,
    score: 9.5,
    tags: ["El Templo del Specialty en Roma", "Revolución frente al tueste oscuro tradicional"],
    websiteUrl: "https://faroroma.com",
    mapsUrl: "https://maps.google.com/?q=Faro+Luminari+del+Caffe+Roma",
    image: "/assets/products/lelit-anna.png"
  },
  {
    id: "ventimetriquadri-napoles",
    name: "Ventimetriquadri Specialty Coffee",
    city: "Nápoles",
    country: "Italia",
    flag: "🇮🇹",
    district: "Vomero",
    address: "Via Gian Lorenzo Bernini, 43, 80129 Napoli NA",
    signatureDrink: "Espresso Specialty sin azúcar & V60 Pour-Over",
    signatureRoast: "Gardelli Specialty & Tostadores Invitados",
    gearSetup: "La Marzocco Linea Mini Custom · Mahlkönig EK43",
    priceEspresso: 2.20,
    score: 9.4,
    tags: ["El Primer Specialty de Nápoles", "Vomero", "Café Ético en la cuna del espresso"],
    websiteUrl: "https://instagram.com/ventimetriquadrispecialty",
    mapsUrl: "https://maps.google.com/?q=Ventimetriquadri+Napoli",
    image: "/assets/products/delonghi-specialista.png"
  },

  // --- LOS ÁNGELES & MIAMI (EE.UU.) ---
  {
    id: "gget-los-angeles",
    name: "Go Get Em Tiger (GGET)",
    city: "Los Ángeles",
    country: "Estados Unidos",
    flag: "🇺🇸",
    district: "Larchmont Village / DTLA",
    address: "230 N Larchmont Blvd, Los Angeles, CA 90004",
    signatureDrink: "Iced Almond-Macadamia Latte & Sweet & Creamy",
    signatureRoast: "Minor Monuments Seasonal Espresso",
    gearSetup: "La Marzocco Linea PB Auto-Brew · Curtis Batch Brewers",
    priceEspresso: 4.75,
    score: 9.6,
    tags: ["Charles Babinski (USBC Champion)", "Leche de frutos secos casera", "Vibra californiana"],
    websiteUrl: "https://gget.com",
    mapsUrl: "https://maps.google.com/?q=Go+Get+Em+Tiger+Larchmont",
    image: "/assets/products/fellow-carter.png"
  },
  {
    id: "panther-coffee-miami",
    name: "Panther Coffee",
    city: "Miami",
    country: "Estados Unidos",
    flag: "🇺🇸",
    district: "Wynwood Arts District / Coconut Grove",
    address: "2390 NW 2nd Ave, Miami, FL 33127",
    signatureDrink: "East Coast / West Coast Espresso Blend Tasting",
    signatureRoast: "Brazil Fazenda Santa Inês Pulp Natural",
    gearSetup: "1927 Vintage Probat UG15 · Synesso MVP",
    priceEspresso: 4.50,
    score: 9.3,
    tags: ["Wynwood Street Art Icon", "Tostador Vintage Probat 1927", "Pioneros de Florida"],
    websiteUrl: "https://panthercoffee.com",
    mapsUrl: "https://maps.google.com/?q=Panther+Coffee+Wynwood",
    image: "/assets/products/rightside-abasambi.png"
  },

  // --- MALMÖ & ESCANDINAVIA ---
  {
    id: "solde-kaffebar-malmo",
    name: "Solde Kaffebar & Rosteri",
    city: "Malmö",
    country: "Suecia",
    flag: "🇸🇪",
    district: "Centrum / Regementsgatan",
    address: "Regementsgatan 2, 211 42 Malmö",
    signatureDrink: "Nordic Filter Brew of the Day",
    signatureRoast: "Etiopía Yirgacheffe Tueste Nórdico Ultraclaro",
    gearSetup: "La Marzocco Linea · Mahlkönig EK43 · Wilfa Precision",
    priceEspresso: 3.80,
    score: 9.6,
    tags: ["Tueste Nórdico Puro", "Pioneros en Suecia", "Malmö Canal View"],
    websiteUrl: "https://solde.se",
    mapsUrl: "https://maps.google.com/?q=Solde+Kaffebar+Malmo",
    image: "/assets/products/syra-bahire.png"
  },

  // --- BARCELONA (ESPAÑA) ---
  {
    id: "nomad-coffee-lab-bcn",
    name: "Nomad Coffee Lab & Roastery",
    city: "Barcelona",
    country: "España",
    flag: "🇪🇸",
    district: "El Born / Poblenou",
    address: "Passatge Sert 12, 08003 Barcelona",
    signatureDrink: "Cold Brew Nitro & Aeropress Samuel Washed",
    signatureRoast: "Samuel Washed Colombia & Shakiso Hadeso",
    gearSetup: "Sanremo Opera · Mahlkönig EK43 · Origami Drippers",
    priceEspresso: 2.90,
    score: 9.8,
    tags: ["Jordi Mestre (Pionero BCN)", "Passatge Sert", "Laboratorio de Cata"],
    websiteUrl: "https://nomadcoffee.es",
    mapsUrl: "https://maps.google.com/?q=Nomad+Coffee+Lab+Passatge+Sert+Barcelona",
    image: "/assets/products/nomad-samuel.png"
  },
  {
    id: "right-side-coffee-bar",
    name: "Right Side Coffee Bar",
    city: "Barcelona",
    country: "España",
    flag: "🇪🇸",
    district: "Eixample / Castelldefels",
    address: "Carrer d'Enric Granados, 13, 08007 Barcelona",
    signatureDrink: "Espresso Doble Abasambi Natural & Batch Brew",
    signatureRoast: "Abasambi Natural & Ancizar Narváez",
    gearSetup: "La Marzocco KB90 · Mahlkönig E65S GbW · Loring Smart Roaster",
    priceEspresso: 2.80,
    score: 9.7,
    tags: ["Joaquín Parra (Roaster Champion)", "Tostador Loring Ecológico", "Enric Granados"],
    websiteUrl: "https://rightsidecoffee.com",
    mapsUrl: "https://maps.google.com/?q=Right+Side+Coffee+Bar+Barcelona",
    image: "/assets/products/rightside-abasambi.png"
  },

  // --- MELBOURNE (AUSTRALIA) ---
  {
    id: "st-ali-melbourne",
    name: "ST. ALi Coffee Roasters",
    city: "Melbourne",
    country: "Australia",
    flag: "🇦🇺",
    district: "South Melbourne",
    address: "12-18 Yarra Pl, South Melbourne VIC 3205",
    signatureDrink: "Orthodox Espresso & Barista Breakfast (Cappuccino + Espresso + Filter)",
    signatureRoast: "Orthodox Blend (Colombia & Brazil)",
    gearSetup: "Synesso Cyncra Custom · Mazzer Robur S · Brambati Roaster",
    priceEspresso: 4.50,
    score: 9.8,
    tags: ["La Meca del Café en Melbourne", "Barista Breakfast", "Pioneros Mundiales"],
    websiteUrl: "https://stali.com.au",
    mapsUrl: "https://maps.google.com/?q=ST+ALi+Coffee+Roasters+Melbourne",
    image: "/assets/pouring.png"
  }
];
