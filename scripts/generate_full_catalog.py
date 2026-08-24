import json
import random

# Base image pools with verified transparent/crisp assets
IMAGE_POOLS = {
    'maquinas': [
        '/assets/products/sage-bambino.png',
        '/assets/products/lelit-anna.png',
        '/assets/products/delonghi-specialista.png',
        '/assets/products/sage-bambino.png',
        '/assets/products/lelit-anna.png',
    ],
    'molinos': [
        '/assets/products/eureka-specialita.png',
        '/assets/products/comandante-c40.png',
        '/assets/products/coffee-grinders-compare.png',
        '/assets/products/eureka-specialita.png',
        '/assets/products/comandante-c40.png',
    ],
    'accesorios': [
        '/assets/products/aeropress.png',
        '/assets/pourover.png',
        '/assets/tamping.png',
        '/assets/pouring.png',
        '/assets/bag.png',
    ],
    'cafe': [
        '/assets/products/nomad-samuel.png',
        '/assets/products/nomad-shakiso.png',
        '/assets/products/syra-atitlan.png',
        '/assets/products/syra-bahire.png',
        '/assets/products/rightside-abasambi.png',
        '/assets/products/rightside-ancizar.png',
        '/assets/products/threemarks-espresso.png',
    ]
}

# 1. Máquinas definitions
MAQUINAS_TEMPLATES = [
    # Top models
    ("Sage Bambino Plus", "Sage", "Semiautomáticas", 449, 499, 8.4, 4.5, "Mejor para empezar", "Compacta, calentamiento en 3 segundos y vaporizador automático asistido."),
    ("Sage Bambino", "Sage", "Manuales", 349, 399, 8.2, 4.3, "Mejor compacta", "La versión esencial de la Bambino con vaporizador manual y calentamiento rápido."),
    ("Sage Barista Express", "Sage", "Con molinillo", 629, 699, 8.6, 4.6, "Todo en uno", "Molinillo integrado con muelas cónicas y control PID de temperatura."),
    ("Sage Barista Touch", "Sage", "Con molinillo", 999, 1199, 8.8, 4.7, "Pantalla táctil", "Pantalla táctil interactiva con recetas automáticas y calentamiento ThermoJet."),
    ("Sage Dual Boiler", "Sage", "Doble caldera", 1299, 1499, 9.3, 4.8, "Doble caldera", "Doble caldera de acero inox con control PID dual y válvula OPV regulable."),
    ("Lelit Anna PL41TEM", "Lelit", "Semiautomáticas", 549, 599, 8.7, 4.6, "Mejor control PID", "Caldera de latón de 250 ml con control PID y manómetro de presión."),
    ("Lelit Glenda PL41PLUS", "Lelit", "Semiautomáticas", 699, 749, 8.8, 4.7, "Grupo 58mm", "Grupo profesional de 58 mm comercial con caldera de 300 ml."),
    ("Lelit Victoria PL91T", "Lelit", "Semiautomáticas", 899, 999, 9.1, 4.8, "Centro de control LCC", "Grupo 58mm con display LCC gráfico para preinfusión y temperatura."),
    ("Lelit Mara X V2", "Lelit", "Intercambiador (HX)", 1199, 1299, 9.4, 4.9, "Reina del HX", "Grupo E61 con bomba silenciosa y doble sensor de temperatura en caldera."),
    ("Lelit Bianca V3", "Lelit", "Doble caldera", 2199, 2399, 9.7, 5.0, "Referencia Prosumer", "Doble caldera independiente con paleta de madera (paddle) para perfilado de flujo."),
    ("De'Longhi Dedica EC685", "De'Longhi", "Manuales", 169, 219, 7.9, 4.2, "Económica", "Supercompacta de 15 cm de ancho con calentamiento rápido Thermoblock."),
    ("De'Longhi Specialista Prestigio", "De'Longhi", "Con molinillo", 699, 799, 8.5, 4.4, "Smart Tamping", "Estación de prensado asistido Smart Tamping con sensor de dosis óptima."),
    ("De'Longhi Specialista Arte", "De'Longhi", "Con molinillo", 499, 599, 8.3, 4.3, "Kit de barista", "Molinillo integrado con 8 ajustes y kit de prensado profesional."),
    ("De'Longhi Magnifica S", "De'Longhi", "Superautomáticas", 299, 399, 8.1, 4.4, "Superautomática top", "Muele y extrae café en grano al pulsar un botón con panel táctil."),
    ("Gaggia Classic Pro", "Gaggia", "Semiautomáticas", 429, 479, 8.5, 4.5, "Clásico italiano", "Portafiltro comercial de 58 mm y electroválvula de 3 vías tradicional."),
    ("Rancilio Silvia", "Rancilio", "Semiautomáticas", 599, 649, 8.6, 4.6, "Robusta de latón", "Estructura de hierro y caldera de latón marino de 300 ml."),
    ("Rancilio Silvia Pro X", "Rancilio", "Doble caldera", 1549, 1699, 9.5, 4.9, "Doble caldera con PID", "Doble caldera independiente con preinfusión suave programable."),
    ("Profitec GO", "Profitec", "Semiautomáticas", 899, 949, 9.2, 4.8, "Diseño alemán", "Caldera de 400 ml de latón, PID visible y manómetro frontal."),
    ("Profitec Drive", "Profitec", "Doble caldera", 2699, 2899, 9.8, 5.0, "Tope de gama", "Doble caldera con grupo E61 y perfilado de flujo programable."),
    ("Rocket Appartamento", "Rocket Espresso", "Intercambiador (HX)", 1399, 1499, 9.2, 4.8, "Estética icónica", "Grupo E61 italiano con diseño de círculos troquelados en paneles laterales."),
    ("Rocket Giotto Cronometro R", "Rocket Espresso", "Intercambiador (HX)", 1999, 2199, 9.5, 4.9, "Bomba rotativa", "Bomba rotativa silenciosa con cronómetro digital oculto integrado."),
    ("La Marzocco Linea Micra", "La Marzocco", "Doble caldera", 3390, 3600, 9.9, 5.0, "La joya de Florencia", "Grupo integrado comercial, caldera dual y conexión WiFi vía app."),
    ("La Marzocco Linea Mini", "La Marzocco", "Doble caldera", 4950, 5200, 9.9, 5.0, "Leyenda comercial", "Pala mecánica de extracción y caldera de vapor de 3.5 litros."),
    ("Flair 58 Plus", "Flair Espresso", "Manuales", 649, 699, 9.6, 5.0, "Palanca manual", "Grupo de 58 mm estándar comercial con precalentamiento eléctrico activo."),
    ("Flair PRO 2", "Flair Espresso", "Manuales", 329, 369, 9.0, 4.7, "Portátil de palanca", "Cámara de extracción de acero y manómetro analógico integrado."),
    ("Flair Neo Flex", "Flair Espresso", "Manuales", 119, 139, 8.4, 4.5, "Palanca accesible", "Construcción ligera con cesta presurizada y despresurizada."),
    ("Cafelat Robot Manual", "Cafelat", "Manuales", 429, 479, 9.5, 4.9, "Palanca directa", "Mecánica directa sin piezas eléctricas ni caldera. Espresso puro a 9 bar."),
    ("La Pavoni Europiccola", "La Pavoni", "Manuales", 749, 829, 8.9, 4.6, "Patrimonio histórico", "Caldera de latón pulido y palanca tradicional de extracción continua."),
    ("Ascaso Steel Duo PID", "Ascaso", "Semiautomáticas", 1699, 1799, 9.4, 4.8, "Doble termobloque", "Doble termobloque de circuito inox continuo con PID y luces LED de trabajo."),
    ("Ascaso Baby T Plus", "Ascaso", "Doble caldera", 3499, 3700, 9.8, 5.0, "Eficiencia energética", "Estabilidad térmica extrema T-Technology de consumo reducido."),
    ("Nuova Simonelli Oscar II", "Nuova Simonelli", "Intercambiador (HX)", 799, 899, 8.7, 4.5, "Vapor potentísimo", "Caldera de intercambio térmico de 2 litros con lanza profesional de vapor."),
    ("ECM Casa V", "ECM", "Semiautomáticas", 949, 999, 9.0, 4.7, "Acero espejo", "Chasis de acero pulido a mano alemán con manómetro de precisión."),
    ("ECM Mechanika VI Slim", "ECM", "Intercambiador (HX)", 1699, 1799, 9.4, 4.8, "Compacta HX", "Grupo E61 en cuerpo estilizado de 25 cm de ancho con selector de preinfusión."),
    ("ECM Synchronika", "ECM", "Doble caldera", 2899, 3099, 9.8, 5.0, "Perfección germana", "Doble caldera de acero inoxidable con grupo E61 y manómetros dobles."),
    ("Bezzera Unica PID", "Bezzera", "Semiautomáticas", 1199, 1299, 9.1, 4.7, "Grupo E61 monocaldera", "Grupo clásico E61 con caldera de 0.5L y PID digital."),
    ("Quick Mill Carola PID", "Quick Mill", "Semiautomáticas", 999, 1099, 8.9, 4.6, "Solo espresso puro", "Especializada exclusivamente en extracción de espresso sin caldera de vapor."),
    ("Jura E8 Piano Black", "Jura", "Superautomáticas", 1199, 1399, 9.0, 4.7, "Superautomática suiza", "Mecanismo P.E.P. de extracción por pulsos y pantalla TFT en color."),
    ("Jura Z10 Frío y Caliente", "Jura", "Superautomáticas", 2399, 2599, 9.6, 4.9, "Cold Brew automático", "Prepara tanto espresso caliente como extracciones de Cold Brew instantáneas."),
    ("Philips Serie 3200 LatteGo", "Philips", "Superautomáticas", 429, 499, 8.0, 4.3, "Fácil limpieza", "Sistema de leche LatteGo sin tubos que se limpia en 15 segundos."),
    ("Melitta Caffeo Solo", "Melitta", "Superautomáticas", 269, 329, 7.8, 4.2, "Ultra compacta", "20 cm de ancho especializada en café solo y espresso recién molido."),
    ("Wacaco Picopresso", "Wacaco", "Manuales", 129, 139, 8.8, 4.7, "Espresso de bolsillo", "Portafiltro naked de 52 mm y bomba manual de 18 bar para mochileros y viajes."),
    ("Wacaco Nanopresso", "Wacaco", "Manuales", 74, 85, 8.1, 4.4, "Ultraportátil", "Pesa solo 336 g y genera hasta 18 bar de presión manual."),
    ("Smeg Cafetera Expresso ECF01", "Smeg", "Manuales", 349, 399, 7.7, 4.1, "Estilo años 50", "Diseño retro italiano con sistema Thermoblock y 15 bar."),
    ("Cecotec Power Espresso 20", "Cecotec", "Manuales", 69, 89, 7.2, 4.0, "Económica de entrada", "Bomba italiana de 20 bar con vaporizador orientable básico."),
    ("Krups Virtuoso XP442C", "Krups", "Manuales", 149, 189, 7.6, 4.1, "Cuerpo metálico", "Diseño compacto en acero con preinfusión automática."),
]

# Write generator script and output to catalog.ts
print(f"Template count for machines: {len(MAQUINAS_TEMPLATES)}")
