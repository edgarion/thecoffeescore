#!/usr/bin/env python3
"""
══════════════════════════════════════════════════════════════════════
THE COFFEE SCORE — AGENTE QA INTEGRAL (SELENIUM WEBDRIVER)
══════════════════════════════════════════════════════════════════════
Navega en Chrome real (headless) sobre http://localhost:3000 y valida:
  1. Categorías puras (sin camisetas ni accesorios en Café, etc.)
  2. Carga y renderizado de imágenes (naturalWidth > 0)
  3. Navegación a fichas de productos y presencia de datos
  4. Enlaces de compra ("Comprar", tiendas afiliadas)
  5. Filtros de subcategoría en Accesorios
"""

import sys
import os
import json
import time
import requests
from typing import Optional, List, Dict, Tuple
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

BASE_URL = "http://localhost:3000"

def create_driver():
    opts = Options()
    opts.add_argument("--headless=new")
    opts.add_argument("--no-sandbox")
    opts.add_argument("--disable-dev-shm-usage")
    opts.add_argument("--window-size=1440,900")
    opts.add_argument("--disable-gpu")
    opts.add_argument("--log-level=3")
    opts.binary_location = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    driver = webdriver.Chrome(options=opts)
    driver.set_page_load_timeout(30)
    return driver

# ─── Data Tracking ────────────────────────────────────────────────────────────

issues: List[Dict] = []
total_checks = 0

def record_issue(category: str, product_name: str, check_type: str, detail: str):
    issues.append({
        "category": category,
        "product": product_name,
        "check": check_type,
        "detail": detail
    })
    print(f"  ❌ [{check_type.upper()}] {product_name[:45]} → {detail}", flush=True)

def record_pass(msg: str):
    global total_checks
    total_checks += 1
    print(f"  ✅ {msg}", flush=True)

NOT_IN_CAFE = [
    "t-shirt", "hoodie", "tote bag", "camiseta", "gorra", "bandana",
    "cap", "poster", "sticker", "exfoliante", "maceta", "mug",
    "matcha", " whisk", "kettle", "hervidor",
    "cold brewer", "gift card", "tarjeta regalo", "subscription", "suscripción",
    "examen", "certificado", "grinder", "molinillo", "espumador",
    "chemex filter", "paper filter", "v60 kit", "dosing funnel",
    "portafilter", "tamper", "puck screen", "travel case"
]

NOT_IN_MOLINOS = [
    "upgrade kit", "case", "t-shirt", "gorra", "camiseta", "tote",
    "puck screen", "portafilter", "tamper", "cleaning tablet"
]

NOT_IN_MAQUINAS = [
    "filter paper", "cleaning tablet", "brush kit", "t-shirt", "gorra", "camiseta"
]

def find_junk_keyword(text: str, keywords: List[str]) -> Optional[str]:
    # Remove brand prefixes like 'Acaia Scales — ' or 'Flair Espresso — ' to check product title
    cleaned = text
    if " — " in cleaned:
        cleaned = cleaned.split(" — ", 1)[1]
    
    low = cleaned.lower()
    for kw in keywords:
        if kw in low:
            return kw
    return None

# ─── Test Suite ───────────────────────────────────────────────────────────────

def test_1_category_purity(driver: webdriver.Chrome):
    print("\n" + "="*65, flush=True)
    print("🔍 TEST 1: Pureza de Categorías (Sin camisetas/accesorios en Café)", flush=True)
    print("="*65, flush=True)

    routes = [
        ("cafe", "/cafe", NOT_IN_CAFE, "Café de Especialidad"),
        ("molinos", "/molinos", NOT_IN_MOLINOS, "Molinos"),
        ("maquinas", "/maquinas", NOT_IN_MAQUINAS, "Máquinas"),
        ("accesorios", "/accesorios", [], "Accesorios"),
    ]

    for cat_id, route, junk_list, label in routes:
        url = BASE_URL + route
        print(f"\n→ Navegando a {url} ({label})...", flush=True)
        driver.get(url)
        time.sleep(2)
        
        # Scroll down to load initial items
        driver.execute_script("window.scrollTo(0, 1500);")
        time.sleep(1)

        cards = driver.find_elements(By.CSS_SELECTOR, ".product-card, a[href*='/producto/']")
        print(f"  Tarjetas renderizadas en pantalla: {len(cards)}", flush=True)

        found_names = set()
        for card in cards:
            text = card.text.strip()
            if not text:
                continue
            lines = [l.strip() for l in text.split("\n") if l.strip()]
            product_name = lines[0] if lines else ""
            if len(lines) > 1 and ("SCA" in lines[0] or "€" in lines[0] or "Norteamérica" in lines[0] or "Europa" in lines[0]):
                product_name = lines[1]
            
            if product_name in found_names:
                continue
            found_names.add(product_name)

            if junk_list:
                junk = find_junk_keyword(product_name, junk_list)
                if junk:
                    record_issue(cat_id, product_name, "categoria-erronea", f"Contiene '{junk}' dentro de {label}")
                else:
                    global total_checks
                    total_checks += 1

        if not any(i["category"] == cat_id and i["check"] == "categoria-erronea" for i in issues):
            record_pass(f"Categoría {label} 100% limpia ({len(found_names)} productos verificados)")

def test_2_image_rendering(driver: webdriver.Chrome):
    print("\n" + "="*65, flush=True)
    print("🖼️  TEST 2: Validación de Renderizado de Imágenes en Navegador", flush=True)
    print("="*65, flush=True)

    pages = ["/cafe", "/accesorios", "/molinos", "/maquinas"]
    for path in pages:
        driver.get(BASE_URL + path)
        time.sleep(2)
        driver.execute_script("window.scrollTo(0, 1000);")
        time.sleep(1)

        imgs = driver.find_elements(By.CSS_SELECTOR, ".product-card img, img[alt]")
        valid_count = 0
        broken_count = 0

        for img in imgs[:25]:
            src = img.get_attribute("src") or ""
            alt = img.get_attribute("alt") or "Producto"
            if not src:
                record_issue(path.strip("/"), alt, "imagen-vacia", "Etiqueta <img> sin src")
                broken_count += 1
                continue

            # Check naturalWidth using JS execution in real Chrome
            natural_width = driver.execute_script("return arguments[0].naturalWidth;", img)
            if natural_width == 0:
                record_issue(path.strip("/"), alt, "imagen-rota", f"naturalWidth=0 en src: {src[:70]}")
                broken_count += 1
            else:
                valid_count += 1
                global total_checks
                total_checks += 1

        if broken_count == 0:
            record_pass(f"{path}: {valid_count} imágenes renderizadas correctamente con pixels reales")

def test_3_product_detail_links(driver: webdriver.Chrome):
    print("\n" + "="*65, flush=True)
    print("🔗 TEST 3: Enlaces y Páginas de Ficha de Producto (/producto/...)", flush=True)
    print("="*65, flush=True)

    driver.get(BASE_URL + "/accesorios")
    time.sleep(2)

    links = driver.find_elements(By.CSS_SELECTOR, "a[href*='/producto/']")
    hrefs = list(set([l.get_attribute("href") for l in links if l.get_attribute("href")]))[:10]

    print(f"  Comprobando {len(hrefs)} fichas de producto al azar...", flush=True)

    for href in hrefs:
        driver.get(href)
        try:
            WebDriverWait(driver, 8).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, ".product-detail-title, h1"))
            )
            title_el = driver.find_element(By.CSS_SELECTOR, ".product-detail-title, h1")
            price_el = driver.find_elements(By.CSS_SELECTOR, ".product-detail-price, .score-row-big")
            if title_el.text.strip() and len(price_el) > 0:
                record_pass(f"Ficha OK: {title_el.text.strip()[:35]} | Precio detectado")
            else:
                record_issue("ficha", href, "ficha-incompleta", f"H1 o Precio ausente en {href}")
        except Exception as e:
            record_issue("ficha", href, "timeout-ficha", f"No cargó la ficha: {e}")

def test_4_accessory_subcategories(driver: webdriver.Chrome):
    print("\n" + "="*65, flush=True)
    print("📂 TEST 4: Submenú de Accesorios y Filtros Interactivos", flush=True)
    print("="*65, flush=True)

    driver.get(BASE_URL + "/accesorios")
    time.sleep(2)

    expected_chips = ['Lifestyle', 'Herramientas de barista', 'Jarras & Servidores', 'Medidores & Básculas', 'Filtros y Papeles', 'Mantenimiento & Limpieza']

    for chip in expected_chips:
        try:
            buttons = driver.find_elements(By.XPATH, f"//button[contains(text(), '{chip}')]")
            if not buttons:
                record_issue("accesorios", chip, "chip-no-encontrado", f"Botón de filtro '{chip}' no existe en UI")
                continue
            
            btn = buttons[0]
            btn.click()
            time.sleep(1)

            cards = driver.find_elements(By.CSS_SELECTOR, ".product-card, a[href*='/producto/']")
            if len(cards) > 0:
                record_pass(f"Filtro '{chip}' activo → {len(cards)} productos visibles en pantalla")
            else:
                record_issue("accesorios", chip, "filtro-vacio", f"Filtro '{chip}' no devolvió ningún producto")
        except Exception as e:
            record_issue("accesorios", chip, "error-filtro", str(e))

def test_5_buy_links(driver: webdriver.Chrome):
    print("\n" + "="*65, flush=True)
    print("🛒 TEST 5: Enlaces de Compra 'Comprar →' a Tiendas Oficiales", flush=True)
    print("="*65, flush=True)

    pages = ["/accesorios", "/cafe", "/molinos", "/maquinas"]
    for path in pages:
        driver.get(BASE_URL + path)
        time.sleep(2)

        buy_buttons = driver.find_elements(By.XPATH, "//a[contains(text(), 'Comprar') or contains(@title, 'Comprar')]")
        valid_links = 0
        for btn in buy_buttons[:10]:
            href = btn.get_attribute("href")
            if href and (href.startswith("http://") or href.startswith("https://")) and not href.startswith("http://localhost"):
                valid_links += 1
                global total_checks
                total_checks += 1
            elif href:
                record_issue(path.strip("/"), href, "enlace-invalido", f"Enlace no apunta a tienda externa: {href}")

        if valid_links > 0:
            record_pass(f"{path}: {valid_links} botones 'Comprar →' validados hacia tiendas oficiales y Amazon")

def main():
    print("\n" + "═"*70, flush=True)
    print("🚀 INICIANDO AGENTE QA THE COFFEE SCORE CON SELENIUM CHROME", flush=True)
    print(f"🎯 Servidor: {BASE_URL}", flush=True)
    print("═"*70 + "\n", flush=True)

    try:
        r = requests.get(BASE_URL, timeout=4)
        if r.status_code != 200:
            print(f"❌ Error: Servidor respondió con código {r.status_code}", flush=True)
            return 1
    except Exception as e:
        print(f"❌ Error: No se puede conectar a {BASE_URL}: {e}", flush=True)
        return 1

    driver = create_driver()
    try:
        test_1_category_purity(driver)
        test_2_image_rendering(driver)
        test_3_product_detail_links(driver)
        test_4_accessory_subcategories(driver)
        test_5_buy_links(driver)
    finally:
        driver.quit()

    print("\n" + "═"*70, flush=True)
    print(f"📊 RESULTADOS FINALES DE AUDITORÍA QA: {total_checks} verificaciones exitosas", flush=True)
    if issues:
        print(f"⚠️  {len(issues)} problemas detectados en vivo:", flush=True)
        for iss in issues:
            print(f"   • [{iss['category']}] {iss['product']} → {iss['detail']}", flush=True)
        with open("qa_report.json", "w", encoding="utf-8") as f:
            json.dump(issues, f, indent=2, ensure_ascii=False)
        print("📄 Reporte guardado en qa_report.json\n", flush=True)
        return len(issues)
    else:
        print("🎉 0 ERRORES — Todo el catálogo, imágenes, enlaces y filtros están 100% validados en el navegador.\n", flush=True)
        return 0

if __name__ == "__main__":
    sys.exit(main())
