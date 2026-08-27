#!/usr/bin/env python3
"""
The Coffee Score — Automated Daily ETL Pipeline Orchestrator.
Runs daily scraping, Gemini AI validation, Pillow image processing, and catalog export.
"""

import json
import logging
import os
import sys
import time
from typing import List, Dict, Any
from dotenv import load_dotenv

from src.scraper import CoffeeScraper
from src.validator import GeminiValidator
from src.image_processor import ImageProcessor
from src.uploader import CatalogUploader

# Load environment variables (.env)
load_dotenv()

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[logging.StreamHandler(sys.stdout)]
)
logger = logging.getLogger("TheCoffeeScoreAgent")


def load_config(config_path: str = "config/sources.json") -> Dict[str, Any]:
    """Loads store sources configuration."""
    if not os.path.exists(config_path):
        # Fallback to local script directory
        base_dir = os.path.dirname(os.path.abspath(__file__))
        config_path = os.path.join(base_dir, config_path)

    with open(config_path, "r", encoding="utf-8") as f:
        return json.load(f)


def run_pipeline():
    """Executes the complete ETL Pipeline."""
    start_time = time.time()

    logger.info("==================================================================")
    logger.info("🚀 THE COFFEE SCORE · PIPELINE DIARIO DE SCRAPING E INTELIGENCIA")
    logger.info("==================================================================\n")

    # Step 1: Initialize services
    base_dir = os.path.dirname(os.path.abspath(__file__))
    config_path = os.path.join(base_dir, "config", "sources.json")
    output_dir = os.path.join(base_dir, "output")
    images_dir = os.path.join(output_dir, "images")

    config = load_config(config_path)
    stores = config.get("stores", [])
    logger.info(f"📋 Cargadas {len(stores)} tiendas objetivo desde {config_path}")

    scraper = CoffeeScraper(timeout=10)
    validator = GeminiValidator()
    img_processor = ImageProcessor(output_dir=images_dir, canvas_size=(1000, 1000))
    uploader = CatalogUploader(output_dir=output_dir)

    all_processed_products: List[Dict[str, Any]] = []

    # Step 2: Scrape each store
    for store in stores:
        raw_items = scraper.scrape_store(store)

        for raw in raw_items:
            # Step 3: Validate & Normalize with Gemini AI
            validated_specs = validator.validate_and_normalize(raw)
            if not validated_specs:
                continue

            # Step 4: Process Image with Pillow (1000x1000 WebP)
            raw_img_url = raw.get("raw_image_url", "")
            clean_name = validated_specs.get("clean_name", raw.get("raw_title"))
            local_img_path = img_processor.process_image(raw_img_url, clean_name)

            product_record = {
                "id": ImageProcessor.slugify(clean_name),
                "product_url": raw.get("product_url"),
                "raw_image_url": raw_img_url,
                "local_image_path": local_img_path or "",
                "specs": validated_specs,
                "in_stock": raw.get("in_stock", True),
                "scraped_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
            }

            all_processed_products.append(product_record)

    # Step 5: Persist, Export, and Report
    json_path = uploader.save_local_catalog(all_processed_products)
    total_time = time.time() - start_time
    report_path = uploader.generate_markdown_report(all_processed_products, total_time)
    uploader.dispatch_webhook(all_processed_products)

    logger.info("\n==================================================================")
    logger.info("🎉 PIPELINE COMPLETADO CON ÉXITO")
    logger.info(f"- Total Productos Procesados: {len(all_processed_products)}")
    logger.info(f"- Tiempo Total de Ejecución: {total_time:.2f} segundos")
    logger.info(f"- Archivo JSON: {json_path}")
    logger.info(f"- Resumen Markdown: {report_path}")
    logger.info("==================================================================\n")


if __name__ == "__main__":
    run_pipeline()
