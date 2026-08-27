"""
Uploader & Exporter Module.
Persists processed specialty coffee items to local JSON database, updates the web catalog, or sends payloads via REST Webhook.
"""

import json
import logging
import os
from datetime import datetime
from typing import List, Dict, Any, Optional
import requests

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger(__name__)


class CatalogUploader:
    """Handles persistence, export, and optional webhook dispatching."""

    def __init__(self, output_dir: str = "output"):
        self.output_dir = output_dir
        self.reports_dir = os.path.join(output_dir, "reports")
        os.makedirs(self.output_dir, exist_ok=True)
        os.makedirs(self.reports_dir, exist_ok=True)

    def save_local_catalog(self, products: List[Dict[str, Any]]) -> str:
        """Saves the normalized catalog as a JSON file."""
        timestamp = datetime.now().isoformat()
        filepath = os.path.join(self.output_dir, "scraped_catalog.json")

        payload = {
            "last_updated": timestamp,
            "total_products": len(products),
            "products": products,
        }

        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(payload, f, ensure_ascii=False, indent=2)

        logger.info(f"💾 Catálogo JSON guardado en: {filepath} ({len(products)} productos).")
        return filepath

    def generate_markdown_report(self, products: List[Dict[str, Any]], execution_time: float) -> str:
        """Generates a detailed human-readable Markdown summary report."""
        report_path = os.path.join(self.reports_dir, "latest_scrape_summary.md")
        now = datetime.now().strftime("%d/%m/%Y %H:%M:%S")

        md = f"""# The Coffee Score · Reporte Diario de Agente Automatizado

- **Fecha de Ejecución**: {now}
- **Tiempo Total**: {execution_time:.2f} segundos
- **Productos Procesados y Validados**: {len(products)} cafés de especialidad

---

## ☕ Catálogo de Cafés de Especialidad Procesados

| Tostador | Producto | Origen | Proceso | Notas de Cata | Precio | Imagen WebP |
|---|---|---|---|---|---|---|
"""
        for p in products:
            spec = p.get("specs", {})
            tasting = ", ".join(spec.get("tasting_notes", []))
            img_path = p.get("local_image_path", "N/A")
            md += f"| **{spec.get('brand')}** | [{spec.get('clean_name')}]({p.get('product_url')}) | {spec.get('origin_country')} | {spec.get('process')} | {tasting} | {spec.get('price_eur')} € | `{img_path}` |\n"

        with open(report_path, "w", encoding="utf-8") as f:
            f.write(md)

        logger.info(f"📊 Reporte Markdown generado en: {report_path}")
        return report_path

    def dispatch_webhook(self, products: List[Dict[str, Any]]) -> bool:
        """Optional dispatch to external webhook URL or REST API if configured."""
        webhook_url = os.getenv("WEBHOOK_URL")
        if not webhook_url:
            return False

        try:
            logger.info(f"🚀 Enviando datos vía Webhook a: {webhook_url}")
            response = requests.post(
                webhook_url,
                json={"products": products, "count": len(products)},
                headers={"Content-Type": "application/json"},
                timeout=10,
            )
            response.raise_for_status()
            logger.info("✓ Webhook despachado con éxito.")
            return True
        except Exception as err:
            logger.warning(f"⚠️ Error despachando webhook: {err}")
            return False
