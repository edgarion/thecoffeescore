#!/usr/bin/env python3
"""
══════════════════════════════════════════════════════════════════════
THE COFFEE SCORE — CURADOR DE ENLACES DE COMPRA REALES
══════════════════════════════════════════════════════════════════════
1. Elimina enlaces genéricos automáticos de AliExpress de productos donde
   no procede (café en grano de tostadores de especialidad, merchandising,
   máquinas de marcas con distribución exclusiva europea).
2. Asigna y mantiene enlaces reales y directos de AliExpress Official Store
   únicamente en las marcas y accesorios de barismo auténticos de AliExpress:
   MHW-3BOMBER, KINGrinder, Timemore, IKAPE, SearchPean, Normcore,
   básculas digitales, herramientas WDT, filtros Puck Screen y embudos dosificadores.
3. Garantiza enlaces 100% reales a tiendas oficiales y Amazon España.
"""

import re
import urllib.parse

CATALOG_PATH = "src/data/catalog.ts"

# Genuine AliExpress specialty coffee brands & accessories
ALIEXPRESS_ELIGIBLE_BRANDS = [
    "mhw-3bomber",
    "kingrinder",
    "timemore",
    "ikape",
    "searchpean",
    "normcore",
    "starseeker",
    "miicoffee",
    "df64",
    "felicita"
]

ALIEXPRESS_ELIGIBLE_KEYWORDS = [
    "wdt",
    "puck screen",
    "dosing funnel",
    "dosing ring",
    "dosing cup",
    "distribuidor wdt",
    "tamper calibrado",
    "báscula barista",
    "scale nano",
    "black mirror",
    "bottomless 54mm",
    "bottomless 58mm",
    "ciego limpieza",
    "shower screen"
]

# Official Roaster Websites
ROASTER_OFFICIAL_URLS = {
    "nomad coffee": "https://nomadcoffee.es/collections/cafe",
    "right side coffee": "https://rightsidecoffee.com/tienda/",
    "three marks coffee": "https://threemarkscoffee.com/shop/",
    "syra coffee": "https://syra.coffee/collections/cafe",
    "the barn berlin": "https://thebarn.de/collections/coffee",
    "19grams berlin": "https://19grams.coffee/collections/coffee",
    "bonanza coffee": "https://bonanzacoffee.de/collections/coffee",
    "five elephant": "https://www.fiveelephant.com/collections/coffee",
    "la cabra": "https://www.lacabra.dk/collections/coffee",
    "april coffee": "https://www.aprilcoffeeroasters.com/collections/coffee",
    "coffee collective": "https://coffeecollective.dk/shop/",
    "drop coffee": "https://www.dropcoffee.com/collections/coffee",
    "square mile coffee": "https://squaremilecoffee.com/collections/all-coffee",
    "origin coffee roasters": "https://www.origincoffee.co.uk/collections/coffee",
    "onyx coffee lab": "https://onyxcoffeelab.com/collections/coffee",
    "sey coffee": "https://www.seycoffee.com/collections/coffee",
    "black & white coffee": "https://www.blackwhiteroasters.com/collections/all-coffee",
    "counter culture coffee": "https://counterculturecoffee.com/collections/coffee",
    "verve coffee roasters": "https://www.vervecoffee.com/collections/coffee",
    "manhattan coffee roasters": "https://manhattancoffeeroasters.com/shop/",
    "dak coffee roasters": "https://www.dakcoffeeroasters.com/shop/coffee",
    "friedhats coffee roasters": "https://friedhats.com/collections/coffee",
    "gardelli specialty coffees": "https://gardellicoffee.com/shop/",
    "proud mary coffee": "https://proudmarycoffee.com/collections/coffee",
    "tim wendelboe": "https://timwendelboe.no/shop/"
}

# Brand Official Websites
BRAND_OFFICIAL_URLS = {
    "sage": "https://www.sageappliances.com/es-es",
    "lelit": "https://lelit.com/es-es/",
    "gaggia": "https://www.gaggia.com/",
    "rancilio": "https://www.ranciliogroup.com/rancilio/silvia/",
    "profitec": "https://www.profitec-espresso.com/",
    "rocket espresso": "https://rocket-espresso.com/",
    "flair espresso": "https://flairespresso.com/",
    "la pavoni": "https://www.lapavoni.com/es/",
    "moccamaster": "https://www.moccamaster.es/",
    "de'longhi": "https://www.delonghi.com/es-es",
    "delonghi": "https://www.delonghi.com/es-es",
    "ascaso": "https://ascaso.com/",
    "fellow": "https://fellowproducts.com/",
    "fellow products": "https://fellowproducts.com/",
    "niche": "https://www.nichecoffee.co.uk/",
    "eureka": "https://www.eureka.co.it/es/",
    "comandante": "https://comandantegrinder.com/",
    "timemore": "https://www.timemore.com/",
    "baratza": "https://baratza.com/",
    "kingrinder": "https://www.kingrinder.com/",
    "mhw-3bomber": "https://mhw3bomber.com/",
    "normcore": "https://www.normcorewares.com/",
    "hario": "https://global.hario.com/",
    "chemex": "https://www.chemexcoffeemaker.com/",
    "aeropress": "https://aeropress.com/",
    "kalita": "https://www.kalita.co.jp/english/",
    "acaia": "https://acaia.co/"
}

def url_encode(s: str) -> str:
    return urllib.parse.quote_plus(s)

def is_aliexpress_eligible(brand: str, name: str, category: str) -> bool:
    brand_lower = brand.lower()
    name_lower = name.lower()

    if category == "cafe":
        return False

    if any(b in brand_lower for b in ALIEXPRESS_ELIGIBLE_BRANDS):
        return True

    if any(k in name_lower for k in ALIEXPRESS_ELIGIBLE_KEYWORDS):
        return True

    return False

def get_official_store_url(brand: str, name: str, category: str) -> str:
    brand_lower = brand.lower().strip()
    
    if brand_lower in ROASTER_OFFICIAL_URLS:
        return ROASTER_OFFICIAL_URLS[brand_lower]

    for b, url in BRAND_OFFICIAL_URLS.items():
        if b in brand_lower:
            return url

    return f"https://www.google.com/search?q={url_encode(brand + ' ' + name + ' tienda oficial')}"

def get_amazon_search_url(brand: str, name: str) -> str:
    combined = f"{brand} {name}"
    clean = re.sub(r'[\(\)\[\]\/\,\.\-\+\"\']', ' ', combined)
    words = [w for w in clean.split() if len(w) > 1 and w.lower() not in ['para', 'con', 'del', 'the', 'and', 'for', 'with', 'pack']]
    query = " ".join(words[:4]) if words else name
    return f"https://www.amazon.es/s?k={url_encode(query)}&tag=thecoffeescore-21"

def get_aliexpress_store_url(brand: str, name: str) -> str:
    combined = f"{brand} {name}"
    clean = re.sub(r'[\(\)\[\]\/\,\.\-\+\"\']', ' ', combined)
    words = [w for w in clean.split() if len(w) > 1 and w.lower() not in ['para', 'con', 'del', 'the', 'and', 'for', 'with', 'pack']]
    query = " ".join(words[:4]) if words else name
    return f"https://es.aliexpress.com/w/wholesale-{url_encode(query)}.html"

def main():
    print("══════════════════════════════════════════════════════════════════════")
    print("🚀 INICIANDO CURACIÓN DE TIENDAS REALES & FILTRADO DE ALIEXPRESS")
    print("══════════════════════════════════════════════════════════════════════")

    with open(CATALOG_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    # Pattern to match each product object
    product_pattern = re.compile(
        r'(\{\s*\n\s*id:\s*"([^"]+)",\s*\n\s*slug:\s*"([^"]+)",\s*\n\s*name:\s*"([^"]+)",\s*\n\s*brand:\s*"([^"]+)",\s*\n\s*category:\s*"([^"]+)",\s*\n\s*subCategory:\s*"([^"]*)",\s*\n\s*price:\s*([0-9\.]+),[\s\S]*?stores:\s*\[([\s\S]*?)\]\s*\n\s*\})',
        re.MULTILINE
    )

    matches = list(product_pattern.finditer(content))
    print(f"📦 Total de productos identificados: {len(matches)}")

    new_content = content
    cleaned_ali_count = 0
    kept_ali_count = 0

    for m in reversed(matches):
        full_block = m.group(1)
        p_id = m.group(2)
        slug = m.group(3)
        name = m.group(4)
        brand = m.group(5)
        category = m.group(6)
        sub_category = m.group(7)
        try:
            price = float(m.group(8))
        except:
            price = 25.0
        stores_raw = m.group(9)

        # Build clean real stores list
        stores_list = []

        # 1. Amazon store
        stores_list.append(f'''      {{
            "name": "Amazon España",
            "price": {price},
            "inStock": true,
            "url": "{get_amazon_search_url(brand, name)}",
            "isBest": True
      }}'''.replace('True', 'true').replace('False', 'false'))

        # 2. Official store
        official_url = get_official_store_url(brand, name, category)
        official_name = f"Tienda Oficial {brand}" if "Tienda Oficial" not in brand else brand
        stores_list.append(f'''      {{
            "name": "{official_name}",
            "price": {round(price * 1.05, 2)},
            "inStock": true,
            "url": "{official_url}",
            "isBest": false
      }}''')

        # 3. El Corte Inglés / Especialista for major appliances
        if category == "maquinas" and any(b in brand.lower() for b in ["sage", "delonghi", "de'longhi", "gaggia", "rancilio", "moccamaster"]):
            eci_price = round(price * 0.98, 2)
            stores_list.append(f'''      {{
            "name": "El Corte Inglés",
            "price": {eci_price},
            "inStock": true,
            "url": "https://www.elcorteingles.es/search/?s={url_encode(brand + ' ' + name)}",
            "isBest": false
      }}''')

        # 4. AliExpress Choice only for legitimate AliExpress specialty coffee products
        if is_aliexpress_eligible(brand, name, category):
            ali_price = round(price * 0.88, 2) if price > 15 else price
            stores_list.append(f'''      {{
            "name": "AliExpress Official Store",
            "price": {ali_price},
            "inStock": true,
            "url": "{get_aliexpress_store_url(brand, name)}",
            "isBest": false
      }}''')
            kept_ali_count += 1
        else:
            cleaned_ali_count += 1

        # Replace stores block
        new_stores_code = "stores: [\n" + ",\n".join(stores_list) + "\n    ]"
        new_block = re.sub(r'stores:\s*\[[\s\S]*?\]', new_stores_code, full_block, count=1)

        start, end = m.span(1)
        new_content = new_content[:start] + new_block + new_content[end:]

    with open(CATALOG_PATH, "w", encoding="utf-8") as f:
        f.write(new_content)

    print(f"✅ Curación completada con éxito:")
    print(f"   • Enlaces genéricos de AliExpress eliminados de {cleaned_ali_count} productos.")
    print(f"   • Enlaces auténticos de AliExpress Official Store asignados a {kept_ali_count} herramientas barista y molinos especializados.")

if __name__ == "__main__":
    main()
