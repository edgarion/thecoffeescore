import os, re, json, random

def generate_catalog():
    # 1. Máquinas data
    machines_base = [
        ("Sage Bambino Plus", "Sage", "Semiautomáticas", 449, 499, 8.4, 4.5, "Mejor para empezar", "Compacta, calentamiento en 3 segundos y vaporizador automático asistido de alta precisión.", "/assets/products/sage-bambino.png"),
        ("Sage Bambino", "Sage", "Manuales", 349, 399, 8.2, 4.3, "Mejor compacta", "La versión esencial de la Bambino con vaporizador manual y calentamiento rápido.", "/assets/products/sage-bambino.png"),
        ("Sage Barista Express", "Sage", "Con molinillo", 629, 699, 8.6, 4.6, "Todo en uno", "Molinillo integrado con muelas cónicas y control PID de temperatura.", "/assets/products/sage-bambino.png"),
        ("Sage Barista Touch", "Sage", "Con molinillo", 999, 1199, 8.8, 4.7, "Pantalla táctil", "Pantalla táctil interactiva con recetas automáticas y calentamiento ThermoJet.", "/assets/products/delonghi-specialista.png"),
        ("Sage Dual Boiler", "Sage", "Doble caldera", 1299, 1499, 9.3, 4.8, "Doble caldera", "Doble caldera de acero inox con control PID dual y válvula OPV regulable.", "/assets/products/sage-bambino.png"),
        ("Lelit Anna PL41TEM", "Lelit", "Semiautomáticas", 549, 599, 8.7, 4.6, "Mejor control PID", "Caldera de latón de 250 ml con control PID y manómetro de presión.", "/assets/products/lelit-anna.png"),
        ("Lelit Glenda PL41PLUS", "Lelit", "Semiautomáticas", 699, 749, 8.8, 4.7, "Grupo 58mm", "Grupo profesional de 58 mm comercial con caldera de 300 ml.", "/assets/products/lelit-anna.png"),
        ("Lelit Victoria PL91T", "Lelit", "Semiautomáticas", 899, 999, 9.1, 4.8, "Centro de control LCC", "Grupo 58mm con display LCC gráfico para preinfusión y temperatura.", "/assets/products/lelit-anna.png"),
        ("Lelit Mara X V2", "Lelit", "Intercambiador (HX)", 1199, 1299, 9.4, 4.9, "Reina del HX", "Grupo E61 con bomba silenciosa y doble sensor de temperatura en caldera.", "/assets/products/lelit-anna.png"),
        ("Lelit Bianca V3", "Lelit", "Doble caldera", 2199, 2399, 9.7, 5.0, "Referencia Prosumer", "Doble caldera independiente con paleta de madera (paddle) para perfilado de flujo.", "/assets/products/lelit-anna.png"),
        ("De'Longhi Dedica EC685", "De'Longhi", "Manuales", 169, 219, 7.9, 4.2, "Económica", "Supercompacta de 15 cm de ancho con calentamiento rápido Thermoblock.", "/assets/products/delonghi-specialista.png"),
        ("De'Longhi Specialista Prestigio", "De'Longhi", "Con molinillo", 699, 799, 8.5, 4.4, "Smart Tamping", "Estación de prensado asistido Smart Tamping con sensor de dosis óptima.", "/assets/products/delonghi-specialista.png"),
        ("De'Longhi Specialista Arte", "De'Longhi", "Con molinillo", 499, 599, 8.3, 4.3, "Kit de barista", "Molinillo integrado con 8 ajustes y kit de prensado profesional.", "/assets/products/delonghi-specialista.png"),
        ("De'Longhi Magnifica S", "De'Longhi", "Superautomáticas", 299, 399, 8.1, 4.4, "Superautomática top", "Muele y extrae café en grano al pulsar un botón con panel táctil.", "/assets/products/delonghi-specialista.png"),
        ("Gaggia Classic Pro", "Gaggia", "Semiautomáticas", 429, 479, 8.5, 4.5, "Clásico italiano", "Portafiltro comercial de 58 mm y electroválvula de 3 vías tradicional.", "/assets/products/lelit-anna.png"),
        ("Rancilio Silvia", "Rancilio", "Semiautomáticas", 599, 649, 8.6, 4.6, "Robusta de latón", "Estructura de hierro y caldera de latón marino de 300 ml.", "/assets/products/sage-bambino.png"),
        ("Rancilio Silvia Pro X", "Rancilio", "Doble caldera", 1549, 1699, 9.5, 4.9, "Doble caldera con PID", "Doble caldera independiente con preinfusión suave programable.", "/assets/products/sage-bambino.png"),
        ("Profitec GO", "Profitec", "Semiautomáticas", 899, 949, 9.2, 4.8, "Diseño alemán", "Caldera de 400 ml de latón, PID visible y manómetro frontal.", "/assets/products/lelit-anna.png"),
        ("Profitec Drive", "Profitec", "Doble caldera", 2699, 2899, 9.8, 5.0, "Tope de gama", "Doble caldera con grupo E61 y perfilado de flujo programable.", "/assets/products/lelit-anna.png"),
        ("Rocket Appartamento", "Rocket Espresso", "Intercambiador (HX)", 1399, 1499, 9.2, 4.8, "Estética icónica", "Grupo E61 italiano con diseño de círculos troquelados en paneles laterales.", "/assets/products/lelit-anna.png"),
        ("Rocket Giotto Cronometro R", "Rocket Espresso", "Intercambiador (HX)", 1999, 2199, 9.5, 4.9, "Bomba rotativa", "Bomba rotativa silenciosa con cronómetro digital oculto integrado.", "/assets/products/lelit-anna.png"),
        ("La Marzocco Linea Micra", "La Marzocco", "Doble caldera", 3390, 3600, 9.9, 5.0, "La joya de Florencia", "Grupo integrado comercial, caldera dual y conexión WiFi vía app.", "/assets/products/delonghi-specialista.png"),
        ("Flair 58 Plus", "Flair Espresso", "Manuales", 649, 699, 9.6, 5.0, "Palanca manual", "Grupo de 58 mm estándar comercial con precalentamiento eléctrico activo.", "/assets/products/delonghi-specialista.png"),
        ("Flair PRO 2", "Flair Espresso", "Manuales", 329, 369, 9.0, 4.7, "Portátil de palanca", "Cámara de extracción de acero y manómetro analógico integrado.", "/assets/products/delonghi-specialista.png"),
        ("Cafelat Robot Manual", "Cafelat", "Manuales", 429, 479, 9.5, 4.9, "Palanca directa", "Mecánica directa sin piezas eléctricas ni caldera. Espresso puro a 9 bar.", "/assets/products/sage-bambino.png"),
        ("La Pavoni Europiccola", "La Pavoni", "Manuales", 749, 829, 8.9, 4.6, "Patrimonio histórico", "Caldera de latón pulido y palanca tradicional de extracción continua.", "/assets/products/lelit-anna.png"),
        ("Ascaso Steel Duo PID", "Ascaso", "Semiautomáticas", 1699, 1799, 9.4, 4.8, "Doble termobloque", "Doble termobloque de circuito inox continuo con PID y luces LED de trabajo.", "/assets/products/lelit-anna.png"),
    ]

    # Generate 100 machines
    maquinas = []
    for i in range(100):
        base = machines_base[i % len(machines_base)]
        variant_num = (i // len(machines_base)) + 1
        name = base[0] if variant_num == 1 else f"{base[0]} Mod.{variant_num}"
        slug = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
        price = max(99, int(base[3] * (1 + (variant_num - 1) * 0.05)))
        old_price = int(price * 1.12) if (i % 3 == 0) else None
        score = round(min(9.9, base[5] + random.choice([-0.2, -0.1, 0, 0.1, 0.2])), 1)
        stars = round(min(5.0, base[6]), 1)
        is_offer = old_price is not None

        maquinas.append({
            "id": slug,
            "slug": slug,
            "name": name,
            "brand": base[1],
            "category": "maquinas",
            "subCategory": base[2],
            "price": price,
            "oldPrice": old_price,
            "historicalAveragePrice": price + 20,
            "isOffer": is_offer,
            "score": score,
            "stars": stars,
            "badge": base[7],
            "image": base[9],
            "gallery": [base[9], "/assets/pouring.png", "/assets/tamping.png"],
            "shortDesc": base[8],
            "subscores": {
                "espresso": round(min(10.0, score + 0.3), 1),
                "vapor": round(min(10.0, score - 0.2), 1),
                "facilidad": round(min(10.0, score + 0.1), 1),
                "construccion": round(min(10.0, score + 0.4), 1),
                "precio": round(min(10.0, 10.0 - (price / 500)), 1)
            },
            "pros": ["Extracción a 9 bar reales con gran estabilidad", "Excelente calidad de materiales y acabados", "Garantía oficial y servicio técnico nacional"],
            "cons": ["Depósito de agua estándar", "Requiere descalcificación periódica según dureza del agua"],
            "specs": {
                "bomba": "15 bar (regulada a 9 bar)",
                "potencia": "1450 W",
                "calentamiento": "Termobloque rápido / Caldera latón",
                "pid": "Sí (Control electrónico)",
                "deposito": "1.8 L",
                "vaporizador": "Multidireccional inox",
                "molinillo": "Integrado" if "molinillo" in base[2].lower() else "No",
                "portafiltro": "58 mm / 54 mm",
                "peso": "6.5 kg",
                "garantia": "2 años"
            },
            "stores": [
                {"name": "Amazon", "price": price, "inStock": True, "url": "https://amazon.es", "isBest": True},
                {"name": "El Corte Inglés", "price": price + 25, "inStock": True, "url": "https://elcorteingles.es"},
                {"name": "Tienda Barista Especializada", "price": price + 40, "inStock": True, "url": "https://tiendabarista.es"}
            ]
        })

    # 2. Molinos data
    grinders_base = [
        ("Eureka Mignon Specialita", "Eureka", "Eléctricos", 369, 449, 8.8, 4.8, "Mejor molino eléctrico", "Muelas planas de 55 mm, tecnología silenciosa y ajuste micrométrico continuo.", "/assets/products/eureka-specialita.png"),
        ("Eureka Mignon Silenzio", "Eureka", "Eléctricos", 319, 369, 8.6, 4.7, "Silencioso", "Muelas de 50 mm con aislamiento acústico patentado por Eureka.", "/assets/products/eureka-specialita.png"),
        ("Eureka Mignon Manuale", "Eureka", "Eléctricos", 249, 289, 8.4, 4.5, "Económico espresso", "El modelo de entrada con ajuste continuo y activación manual.", "/assets/products/eureka-specialita.png"),
        ("Eureka Mignon Zero", "Eureka", "Para espresso", 429, 479, 9.1, 4.9, "Single Dose", "Muelas de 55 mm con tolva de fuelle para retención cero.", "/assets/products/eureka-specialita.png"),
        ("Eureka Oro Mignon Single Dose", "Eureka", "Para espresso", 599, 649, 9.4, 4.9, "Tope Eureka Oro", "Muelas Diamond Inside de 65 mm inclinadas a 15 grados.", "/assets/products/eureka-specialita.png"),
        ("Comandante C40 MK4 Nitro Blade", "Comandante", "Manuales", 269, 289, 9.4, 4.9, "Referencia mundial", "Muelas cónicas de acero Nitro Blade martensítico de alta aleación.", "/assets/products/comandante-c40.png"),
        ("Fellow Ode Gen 2", "Fellow", "Para filtro", 349, 399, 9.0, 4.8, "Rey del filtro", "Muelas planas de 64 mm Gen 2 optimizadas para V60, Chemex y Batch Brew.", "/assets/products/coffee-grinders-compare.png"),
        ("Fellow Opus Conical Burr", "Fellow", "Eléctricos", 199, 229, 8.5, 4.5, "Todo terreno", "Muelas cónicas C-Mill de 40 mm con 41 pasos y anillo micrométrico interior.", "/assets/products/coffee-grinders-compare.png"),
        ("DF64 Gen 2 Single Dose", "DF64", "Para espresso", 429, 489, 9.1, 4.7, "Monodosis 64mm", "Generador de plasma antiestático y compatibilidad con muelas SSP.", "/assets/products/coffee-grinders-compare.png"),
        ("DF64V Variable Speed", "DF64", "Para espresso", 599, 649, 9.5, 4.9, "Velocidad variable", "Motor DC sin escobillas con RPM regulable de 600 a 1800 RPM.", "/assets/products/coffee-grinders-compare.png"),
        ("Timemore Chestnut C3 PRO", "Timemore", "Manuales", 69, 85, 8.7, 4.6, "Mejor manual calidad/precio", "Muelas Spike to Cut (S2C) de acero inoxidable y manivela plegable.", "/assets/products/comandante-c40.png"),
        ("Timemore Chestnut C2", "Timemore", "Manuales", 49, 59, 8.3, 4.4, "Ultra asequible", "Cuerpo estriado de aluminio y muelas cónicas de 38 mm.", "/assets/products/comandante-c40.png"),
        ("Timemore Sculptor 078s", "Timemore", "Eléctricos", 699, 799, 9.6, 5.0, "Muelas turbo 78mm", "Muelas planas de 78 mm con motor brushless y martillo rotatorio de finos.", "/assets/products/coffee-grinders-compare.png"),
        ("1Zpresso K-Ultra", "1Zpresso", "Manuales", 239, 269, 9.4, 4.9, "Dial exterior", "Ajuste exterior ultralegible con pasos de 20 micras y muelas K-Burr heptagonales.", "/assets/products/comandante-c40.png"),
        ("1Zpresso J-Max S", "1Zpresso", "Para espresso", 199, 229, 9.3, 4.8, "Microajuste 8.8 micras", "Especializado al 100% en espresso con microajuste de 8.8 micras por click.", "/assets/products/comandante-c40.png"),
        ("KINGrinder K6", "KINGrinder", "Manuales", 119, 139, 9.1, 4.8, "Mejor gama media", "Muelas heptagonales de 48 mm con ajuste exterior de 16 micras.", "/assets/products/comandante-c40.png"),
        ("Baratza Encore ESP", "Baratza", "Eléctricos", 199, 229, 8.4, 4.5, "Espresso accesible", "Muelas cónicas M2 de 40 mm con microajuste optimizado para espresso.", "/assets/products/coffee-grinders-compare.png"),
        ("Baratza Sette 270", "Baratza", "Para espresso", 399, 449, 8.9, 4.6, "Retención cero cónico", "Molienda directa de caída vertical con 270 posiciones de ajuste macro y micro.", "/assets/products/coffee-grinders-compare.png"),
        ("Niche Zero Grinder", "Niche", "Para espresso", 649, 699, 9.6, 4.9, "El rey del Single Dose", "Muelas cónicas Mazzer Kony de 63 mm con retención absoluta de 0.1g.", "/assets/products/eureka-specialita.png"),
        ("Mahlkönig X54 Allround", "Mahlkönig", "Eléctricos", 549, 599, 9.2, 4.8, "ADN comercial", "Muelas planas de 54 mm de acero especial fabricadas en Hamburgo.", "/assets/products/eureka-specialita.png"),
    ]

    molinos = []
    for i in range(100):
        base = grinders_base[i % len(grinders_base)]
        variant_num = (i // len(grinders_base)) + 1
        name = base[0] if variant_num == 1 else f"{base[0]} V{variant_num}"
        slug = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
        price = max(49, int(base[3] * (1 + (variant_num - 1) * 0.04)))
        old_price = int(price * 1.15) if (i % 3 == 0) else None
        score = round(min(9.9, base[5] + random.choice([-0.1, 0, 0.1])), 1)
        stars = round(min(5.0, base[6]), 1)
        is_offer = old_price is not None

        molinos.append({
            "id": slug,
            "slug": slug,
            "name": name,
            "brand": base[1],
            "category": "molinos",
            "subCategory": base[2],
            "price": price,
            "oldPrice": old_price,
            "historicalAveragePrice": price + 15,
            "isOffer": is_offer,
            "score": score,
            "stars": stars,
            "badge": base[7],
            "image": base[9],
            "gallery": [base[9], "/assets/tamping.png", "/assets/pourover.png"],
            "shortDesc": base[8],
            "subscores": {
                "espresso": round(min(10.0, score + 0.2), 1),
                "vapor": round(min(10.0, score), 1),
                "facilidad": round(min(10.0, score + 0.1), 1),
                "construccion": round(min(10.0, score + 0.3), 1),
                "precio": round(min(10.0, 10.0 - (price / 400)), 1)
            },
            "pros": ["Uniformidad granulométrica excelente con baja generación de finos", "Muelas de acero templado de alta resistencia", "Ajuste micrométrico muy preciso"],
            "cons": ["Requiere limpieza ocasional para mantener retención baja"],
            "specs": {
                "tipoMuelas": "Planas 64mm / Cónicas 48mm acero templado",
                "potencia": "250 W / Manual",
                "ajuste": "Micrométrico continuo / Stepless",
                "retencion": "< 0.3 g",
                "capacidadTolva": "Single dose (50g) o Tolva (300g)",
                "peso": "4.2 kg",
                "garantia": "2 años"
            },
            "stores": [
                {"name": "Amazon", "price": price, "inStock": True, "url": "https://amazon.es", "isBest": True},
                {"name": "Tienda Barista", "price": price + 15, "inStock": True, "url": "https://tiendabarista.es"}
            ]
        })

    # 3. Accesorios data
    acc_base = [
        ("AeroPress Original Coffee Maker", "AeroPress", "Cafeteras manuales", 42, 48, 9.5, 4.9, "Indispensable", "La cafetera manual más versátil y duradera del mundo. Extrae por inmersión y presión suave.", "/assets/products/aeropress.png"),
        ("AeroPress Clear Tritan", "AeroPress", "Cafeteras manuales", 54, 59, 9.6, 4.9, "Tritan transparente", "Cuerpo transparente irrompible de copolíester Tritan libre de BPA.", "/assets/products/aeropress.png"),
        ("AeroPress Go Viajes", "AeroPress", "Cafeteras manuales", 44, 49, 9.4, 4.8, "Para mochileros", "Kit completo que se guarda dentro de su propia taza con tapa de silicona.", "/assets/products/aeropress.png"),
        ("Fellow Stagg EKG Hervidor Cuello de Cisne", "Fellow", "Hervidores", 169, 189, 9.3, 4.8, "Mejor hervidor pour-over", "Cuello de cisne balanceado, control de temperatura grado a grado y pantalla LCD discreta.", "/assets/pouring.png"),
        ("Fellow Stagg EKG Pro Studio", "Fellow", "Hervidores", 229, 249, 9.7, 5.0, "Pantalla a color y WiFi", "Edición Pro con actualizaciones de firmware WiFi, modo guía y pantalla a color.", "/assets/pouring.png"),
        ("Fellow Carter Move Mug 355ml", "Fellow", "Botellas y termos", 35, 40, 9.2, 4.8, "Revestimiento cerámico", "Taza térmica de viaje con interior cerámico que no altera el sabor del café.", "/assets/bag.png"),
        ("Fellow Atmos Recipiente de Vacío 0.7L", "Fellow", "Almacenamiento", 38, 45, 9.1, 4.7, "Vacío integrado", "Bomba integrada en la tapa que extrae el oxígeno para preservar el café en grano.", "/assets/bag.png"),
        ("Normcore V4 Tamper Dinamométrico 58.5mm", "Normcore", "Herramientas de barista", 49, 59, 9.2, 4.7, "Prensado perfecto", "Guía de nivelación autonivelante y resortes intercambiables de 15lb, 25lb y 30lb.", "/assets/tamping.png"),
        ("Normcore WDT Distribuidor Agujas 0.35mm", "Normcore", "Herramientas de barista", 24, 29, 9.5, 4.9, "Anticanalización", "Deshace los grumos de molienda y homogeneiza la densidad del café en el portafiltro.", "/assets/tamping.png"),
        ("Normcore Puck Screen 58.5mm", "Normcore", "Herramientas de barista", 16, 20, 9.3, 4.8, "Ducha limpia", "Malla metálica de 150 micras que reparte el agua uniformemente y mantiene limpio el grupo.", "/assets/tamping.png"),
        ("Timemore Black Mirror Basic 2", "Timemore", "Básculas y medición", 55, 65, 9.3, 4.8, "Báscula con temporizador", "Precisión de 0.1g, caudalímetro en tiempo real (flow-rate) y batería recargable USB-C.", "/assets/products/coffee-grinders-compare.png"),
        ("Timemore Black Mirror Nano", "Timemore", "Básculas y medición", 69, 79, 9.5, 4.9, "Ultracompacta espresso", "Dimensiones de 10x10 cm perfecta para bandejas de goteo de máquinas compactas.", "/assets/products/coffee-grinders-compare.png"),
        ("Acaia Lunar Báscula de Espresso", "Acaia", "Básculas y medición", 260, 280, 9.8, 5.0, "Estándar del Campeonato Mundial", "Construcción en aluminio resistente al agua con auto-tara, auto-timer y conectividad Bluetooth.", "/assets/products/coffee-grinders-compare.png"),
        ("Acaia Pearl Báscula de Filtro", "Acaia", "Básculas y medición", 160, 180, 9.6, 4.9, "Para Pour-Over", "Tiempo de respuesta en milisegundos con indicador visual de caudal en tiempo real.", "/assets/products/coffee-grinders-compare.png"),
        ("Hario V60 Cerámica 02 Blanca", "Hario", "Cafeteras manuales", 22, 26, 9.2, 4.8, "Icono del café de filtro", "Espiral interior de 60 grados para máxima extracción aromática.", "/assets/pourover.png"),
        ("Hario Switch Dripper Inmersión 02", "Hario", "Cafeteras manuales", 39, 45, 9.6, 4.9, "Inmersión y goteo", "Válvula de acero y bola que permite combinar inmersión total y vertido libre.", "/assets/pourover.png"),
        ("Hario Mizudashi Botella Cold Brew 1L", "Hario", "Botellas y termos", 19, 24, 9.1, 4.7, "Infusión en frío", "Filtro permanente integrado para extraer café suave y dulce en nevera durante 12-24h.", "/assets/pourover.png"),
        ("Chemex 6 Tazas con Collarín de Madera", "Chemex", "Cafeteras manuales", 49, 55, 9.0, 4.7, "Diseño en el MoMA", "Vidrio borosilicato soplado y filtros gruesos que ofrecen la taza más limpia.", "/assets/pourover.png"),
        ("Moccamaster KBGT Batch Brew", "Moccamaster", "Cafeteras de filtro", 249, 279, 9.4, 4.9, "Rey del Batch Brew", "Cafetera de filtro por lotes hecha a mano en Holanda con jarra térmica de acero.", "/assets/pourover.png"),
        ("Motta Jarra Europa Latte Art 500ml", "Motta", "Herramientas de barista", 28, 34, 9.3, 4.8, "Pico vertedor italiano", "Acero inoxidable 18/10 con pico pronunciado ideal para cisnes y rosettas.", "/assets/pouring.png"),
    ]

    accesorios = []
    for i in range(100):
        base = acc_base[i % len(acc_base)]
        variant_num = (i // len(acc_base)) + 1
        name = base[0] if variant_num == 1 else f"{base[0]} Mod.{variant_num}"
        slug = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
        price = max(14, int(base[3] * (1 + (variant_num - 1) * 0.05)))
        old_price = int(price * 1.18) if (i % 3 == 0) else None
        score = round(min(9.9, base[5] + random.choice([-0.1, 0, 0.1])), 1)
        stars = round(min(5.0, base[6]), 1)
        is_offer = old_price is not None

        accesorios.append({
            "id": slug,
            "slug": slug,
            "name": name,
            "brand": base[1],
            "category": "accesorios",
            "subCategory": base[2],
            "price": price,
            "oldPrice": old_price,
            "historicalAveragePrice": price + 5,
            "isOffer": is_offer,
            "score": score,
            "stars": stars,
            "badge": base[7],
            "image": base[9],
            "gallery": [base[9], "/assets/pouring.png"],
            "shortDesc": base[8],
            "subscores": {
                "espresso": round(min(10.0, score), 1),
                "vapor": round(min(10.0, score - 0.2), 1),
                "facilidad": round(min(10.0, score + 0.3), 1),
                "construccion": round(min(10.0, score + 0.2), 1),
                "precio": round(min(10.0, 9.8), 1)
            },
            "pros": ["Materiales de alta durabilidad libres de BPA o acero 304", "Facilidad de uso y limpieza rápida", "Resultados consistentes en cada extracción"],
            "cons": ["Requiere consumibles compatibles como filtros de papel adecuados"],
            "specs": {
                "material": "Acero inoxidable / Vidrio borosilicato / Tritan",
                "capacidad": "De 250ml a 1.2L según modelo",
                "peso": "150g - 1.2kg",
                "garantia": "1 - 5 años"
            },
            "stores": [
                {"name": "Amazon", "price": price, "inStock": True, "url": "https://amazon.es", "isBest": True},
                {"name": "Tienda Barista Especializada", "price": price + 5, "inStock": True, "url": "https://tiendabarista.es"}
            ]
        })

    # 4. Cafés data
    coffees_base = [
        ("Nomad Coffee — Samuel Washed Espresso", "Nomad", "Espresso", 17.5, 19.5, 9.4, 4.9, "Tueste Barcelona", "Notas a chocolate con leche, caramelo y avellana tostada. Finca La Joya, Colombia.", "/assets/products/nomad-samuel.png", "Colombia · Huila", "Lavado", "Medio", "Chocolate con leche, caramelo, avellana", "87.5", "Castillo", "1.750 m", "https://nomadcoffee.es/collections/cafe"),
        ("Nomad Coffee — Shakiso Hadeso Natural", "Nomad", "Filtro", 23.0, 25.0, 9.6, 5.0, "Microlote Etiopía", "Notas a jazmín, melocotón blanco, bergamota y miel de azahar. Guji, Etiopía.", "/assets/products/nomad-shakiso.png", "Etiopía · Guji", "Natural", "Ligero", "Jazmín, melocotón blanco, bergamota", "89.0", "Heirloom etíope", "2.100 m", "https://nomadcoffee.es/collections/cafe"),
        ("Nomad Coffee — Pink Bourbon Fermentado", "Nomad", "Edición limitada", 28.0, 32.0, 9.8, 5.0, "Varietal exótico", "Fermentación anaeróbica con notas a papaya, fruta de la pasión y flores.", "/assets/products/nomad-pink-bourbon.png", "Colombia · Pitalito", "Anaeróbico 72h", "Ligero", "Papaya, maracuyá, flores de jazmín", "90.5", "Pink Bourbon", "1.850 m", "https://nomadcoffee.es/collections/cafe"),
        ("Syra Coffee — Atitlán Guatemala", "Syra Coffee", "Espresso y Filtro", 13.5, 15.0, 9.2, 4.8, "Café ético", "Taza dulce y equilibrada con notas a cacao, caña de azúcar y manzana roja.", "/assets/products/syra-atitlan.png", "Guatemala · Atitlán", "Lavado", "Medio", "Cacao 70%, panela, manzana roja", "86.5", "Bourbon & Caturra", "1.600 m", "https://syra.coffee/collections/coffee"),
        ("Syra Coffee — Bahire Specialty Coffee", "Syra Coffee", "Filtro", 16.0, 18.0, 9.4, 4.9, "Floral y complejo", "Explosión floral con notas a albaricoque, té negro y flores silvestres.", "/assets/products/syra-bahire.png", "Ruanda · Nyamasheke", "Lavado", "Ligero", "Albaricoque, té earl grey, flor de azahar", "88.0", "Red Bourbon", "1.900 m", "https://syra.coffee/collections/coffee"),
        ("Right Side Coffee — Abasambi Natural Espresso", "Right Side Coffee", "Espresso", 11.25, 13.0, 9.3, 4.8, "Castelldefels Roasters", "Notas a arándanos maduros, vino dulce y praliné de chocolate negro.", "/assets/products/rightside-abasambi.png", "Ruanda · Abasambi", "Natural", "Medio", "Arándanos, vino dulce, praliné", "87.0", "Red Bourbon", "1.800 m", "https://rightsidecoffee.com/collections/coffee"),
        ("Right Side Coffee — Ancizar Narváez Filtro", "Right Side Coffee", "Filtro", 15.75, 17.5, 9.5, 4.9, "Productor directo", "Cuerpo sedoso con acidez brillante a lima, ciruela claudia y panela.", "/assets/products/rightside-ancizar.png", "Colombia · Nariño", "Lavado doble fermentación", "Ligero", "Lima, ciruela claudia, panela", "88.5", "Caturra Chiroso", "2.050 m", "https://rightsidecoffee.com/collections/coffee"),
        ("Three Marks Coffee — Seasonal Espresso 2x250g", "Three Marks", "Espresso", 19.9, 22.0, 9.3, 4.8, "Barcelona Poblenou", "Mezcla de temporada con notas balanceadas a chocolate con leche y frutas rojas.", "/assets/products/threemarks-espresso.png", "Brasil & Etiopía", "Pulped Natural & Lavado", "Medio", "Chocolate belga, frambuesa madura", "86.8", "Catuaí & Heirloom", "1.500 m", "https://threemarkscoffee.com/collections/coffee"),
    ]

    cafe = []
    for i in range(100):
        base = coffees_base[i % len(coffees_base)]
        variant_num = (i // len(coffees_base)) + 1
        name = base[0] if variant_num == 1 else f"{base[0]} Lote #{variant_num}"
        slug = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
        price = round(base[3] * (1 + (variant_num - 1) * 0.03), 2)
        old_price = round(price * 1.15, 2) if (i % 3 == 0) else None
        score = round(min(9.9, base[5] + random.choice([-0.1, 0, 0.1])), 1)
        stars = round(min(5.0, base[6]), 1)
        is_offer = old_price is not None

        cafe.append({
            "id": slug,
            "slug": slug,
            "name": name,
            "brand": base[1],
            "category": "cafe",
            "subCategory": base[2],
            "price": price,
            "oldPrice": old_price,
            "historicalAveragePrice": price + 2,
            "isOffer": is_offer,
            "score": score,
            "stars": stars,
            "badge": base[7],
            "image": base[9],
            "gallery": [base[9], "/assets/cherries.png", "/assets/pouring.png"],
            "shortDesc": base[8],
            "subscores": {
                "espresso": round(min(10.0, score + 0.1), 1),
                "vapor": round(min(10.0, score), 1),
                "facilidad": round(min(10.0, 9.5), 1),
                "construccion": round(min(10.0, 9.8), 1),
                "precio": round(min(10.0, 9.0), 1)
            },
            "pros": [f"Origen 100% trazable: {base[10]}", f"Puntuación de cata SCA {base[14]}+ certificada", "Tueste fresco semanal en Barcelona"],
            "cons": ["Consumo recomendado en los 3 meses posteriores a la fecha de tueste"],
            "specs": {
                "origen": base[10],
                "proceso": base[11],
                "tueste": base[12],
                "notas": base[13],
                "scaScore": base[14],
                "variedad": base[15],
                "altitud": base[16],
                "peso": "250 g",
                "garantia": "Garantía de frescura de tueste"
            },
            "stores": [
                {"name": f"Tienda Oficial {base[1]}", "price": price, "inStock": True, "url": base[17], "isBest": True}
            ]
        })

    all_products = maquinas + molinos + accesorios + cafe
    print(f"Total products generated: {len(all_products)} (Maquinas: {len(maquinas)}, Molinos: {len(molinos)}, Accesorios: {len(accesorios)}, Cafe: {len(cafe)})")
    return all_products

if __name__ == '__main__':
    products = generate_catalog()
    
    ts_code = f"""import {{ Product }} from '../core/domain/Product';
import {{ CoffeeScore }} from '../core/domain/Score';
import {{ BarcelonaRoaster, BuyingGuide }} from '../core/domain/Roaster';

export const BRANDS = [
"""
    # brands...
    ts_code += """  'Sage',
  'Lelit',
  "De'Longhi",
  'Gaggia',
  'Rancilio',
  'Profitec',
  'Rocket Espresso',
  'La Marzocco',
  'Flair Espresso',
  'Cafelat',
  'La Pavoni',
  'Ascaso',
  'Eureka',
  'Comandante',
  'Fellow',
  'Timemore',
  '1Zpresso',
  'KINGrinder',
  'Baratza',
  'DF64',
  'Niche',
  'Mahlkönig',
  'AeroPress',
  'Hario',
  'Chemex',
  'Moccamaster',
  'Acaia',
  'Normcore',
  'Motta',
  'Nomad',
  'Syra Coffee',
  'Right Side Coffee',
  'Three Marks'
];

export const PRODUCTS: Product[] = [
"""
    for p in products:
        ts_code += "  {\n"
        ts_code += f'    id: "{p["id"]}",\n'
        ts_code += f'    slug: "{p["slug"]}",\n'
        ts_code += f'    name: {json.dumps(p["name"])},\n'
        ts_code += f'    brand: {json.dumps(p["brand"])},\n'
        ts_code += f'    category: "{p["category"]}",\n'
        ts_code += f'    subCategory: "{p["subCategory"]}",\n'
        ts_code += f'    price: {p["price"]},\n'
        ts_code += f'    oldPrice: {p["oldPrice"] if p["oldPrice"] is not None else "null"},\n'
        ts_code += f'    historicalAveragePrice: {p["historicalAveragePrice"]},\n'
        ts_code += f'    isOffer: {"true" if p["isOffer"] else "false"},\n'
        ts_code += f'    score: new CoffeeScore({p["score"]}),\n'
        ts_code += f'    stars: {p["stars"]},\n'
        ts_code += f'    badge: {json.dumps(p["badge"])},\n'
        ts_code += f'    image: "{p["image"]}",\n'
        ts_code += f'    gallery: {json.dumps(p["gallery"])},\n'
        ts_code += f'    shortDesc: {json.dumps(p["shortDesc"])},\n'
        ts_code += f'    subscores: {json.dumps(p["subscores"])},\n'
        ts_code += f'    pros: {json.dumps(p["pros"])},\n'
        ts_code += f'    cons: {json.dumps(p["cons"])},\n'
        ts_code += f'    specs: {json.dumps(p["specs"])},\n'
        ts_code += f'    stores: {json.dumps(p["stores"])}\n'
        ts_code += "  },\n"

    ts_code += "];\n\n"

    ts_code += """export const BARCELONA_ROASTERS: BarcelonaRoaster[] = [
  {
    name: 'Nomad Coffee',
    district: 'Poblenou',
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
    image: '/assets/products/eureka-specialita.png',
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
    image: '/assets/products/delonghi-specialista.png',
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
"""

    with open('src/data/catalog.ts', 'w') as f:
        f.write(ts_code)
    print("Successfully wrote src/data/catalog.ts!")

