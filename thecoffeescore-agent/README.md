# ☕ The Coffee Score — Automated Daily ETL Agent

Agente automatizado y **100% gratuito** para [thecoffeescore.com](https://thecoffeescore.com) que ejecuta un pipeline diario de **Scraping**, **Normalización con IA (Google Gemini)**, **Procesamiento de Imágenes en WebP 1000x1000 con Pillow** y **Exportación de Catálogo** mediante **GitHub Actions** cada día a las 09:00 AM (07:00 UTC).

---

## 🏗️ Arquitectura del Pipeline ETL

```text
       [1. Scraping]           [2. Validación IA]           [3. Pillow Image Engine]          [4. Persistencia]
   Tiendas & Tostadores   ──>   Google Gemini Flash   ──>   1000x1000 px White Canvas   ──>   output/scraped_catalog.json
 (Shopify APIs & HTML)         (JSON Estructurado)           Exportado a .webp (85%)          output/reports/summary.md
```

1. **Scraper (`src/scraper.py`)**: Extrae productos en bruto desde las tiendas y tostadores configurados en `config/sources.json`.
2. **Validator (`src/validator.py`)**: Valida que sea café de especialidad y extrae origen, variedad, proceso, notas de cata y descripción optimizada mediante **Google Gemini API** (`gemini-1.5-flash` / `gemini-2.0-flash`).
3. **Image Processor (`src/image_processor.py`)**: Descarga la foto oficial, recorta bordes, la centra proporcionalmente en un lienzo blanco puro de **1000x1000 px** y la exporta en formato **`.webp`** optimizado.
4. **Uploader (`src/uploader.py`)**: Guarda el catálogo en formato JSON local, genera informes Markdown de control y envía webhooks si están configurados.
5. **CI/CD (`.github/workflows/daily_scrape.yml`)**: Automatización diaria a las 09:00 AM Europe/Madrid vía GitHub Actions.

---

## 📁 Estructura del Proyecto

```text
thecoffeescore-agent/
├── .github/
│   └── workflows/
│       └── daily_scrape.yml      # Workflow de GitHub Actions (Cron 07:00 UTC)
├── config/
│   └── sources.json             # Tiendas y tostadores objetivo
├── src/
│   ├── __init__.py
│   ├── scraper.py               # Extracción con requests y BeautifulSoup
│   ├── validator.py             # Integración estructurada con Google Gemini API
│   ├── image_processor.py       # Centrado en lienzo 1000x1000 y exportación WebP
│   └── uploader.py              # Exportación JSON, Markdown y Webhooks
├── output/
│   ├── images/                  # Imágenes procesadas en .webp (1000x1000)
│   ├── reports/                 # Informes Markdown diarios de control
│   └── scraped_catalog.json     # Base de datos JSON de productos listos
├── main.py                      # Orquestador del Pipeline completo
├── requirements.txt             # Dependencias de Python
└── README.md                    # Documentación técnica y setup
```

---

## 🚀 Instalación y Ejecución Local

### 1. Requisitos Previos
- Python 3.10 o superior.
- Clave de API gratuita de Google Gemini ([Google AI Studio](https://aistudio.google.com/)).

### 2. Configuración del Entorno Virtual

```bash
cd thecoffeescore-agent
python3 -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 3. Variables de Entorno

Crea un archivo `.env` en la raíz de `thecoffeescore-agent/`:

```env
# Clave gratuita de Google Gemini (obtenla en https://aistudio.google.com/)
GEMINI_API_KEY=tu_clave_de_gemini_aqui

# Opcional: URL de Webhook o API REST para recibir los datos procesados
# WEBHOOK_URL=https://thecoffeescore.com/api/webhook/catalog-sync
```

### 4. Ejecución del Pipeline

```bash
python main.py
```

---

## ⚙️ Configuración en GitHub Actions (Automático a las 09:00 AM)

El pipeline ya está configurado para ejecutarse todos los días a las **09:00 AM de España (07:00 UTC)** mediante `.github/workflows/daily_scrape.yml`.

### Para activar la clave de Gemini en GitHub:
1. Ve a tu repositorio en GitHub: **Settings > Secrets and variables > Actions**.
2. Haz clic en **New repository secret**.
3. Añade:
   - **Name**: `GEMINI_API_KEY`
   - **Value**: Tu API Key de Google Gemini.
4. *(Opcional)* Añade `WEBHOOK_URL` si deseas enviar los datos a un endpoint externo.

¡Y listo! Cada mañana a las 9:00 AM, GitHub Actions ejecutará el agente, procesará los nuevos cafés, convertirá las imágenes a 1000x1000 `.webp` y actualizará automáticamente el catálogo.
