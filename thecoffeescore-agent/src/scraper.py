"""
Scraper Module for The Coffee Score Agent.
Extracts specialty coffee products from target roasters using requests and BeautifulSoup.
"""

import json
import logging
from typing import List, Dict, Any, Optional
import requests
from bs4 import BeautifulSoup

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger(__name__)

USER_AGENT = "Mozilla/5.0 (compatible; TheCoffeeScoreBot/2.0; +https://thecoffeescore.com)"


class CoffeeScraper:
    """Scrapes raw product data from specialty coffee roaster stores."""

    def __init__(self, timeout: int = 10):
        self.timeout = timeout
        self.session = requests.Session()
        self.session.headers.update({
            "User-Agent": USER_AGENT,
            "Accept": "application/json, text/html, */*",
        })

    def scrape_store(self, store_config: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Scrapes a single roaster store based on its configuration."""
        store_type = store_config.get("type", "shopify_json")
        url = store_config.get("url", "")
        store_name = store_config.get("name", "Unknown Roaster")

        logger.info(f"🕷️ Iniciando scraping de: {store_name} ({url})")

        if store_type == "shopify_json":
            return self._scrape_shopify_json(store_config)
        else:
            return self._scrape_html_page(store_config)

    def _scrape_shopify_json(self, store_config: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Scrapes products from standard Shopify /products.json endpoint."""
        url = store_config.get("url")
        domain = store_config.get("domain", "")
        store_name = store_config.get("name")
        country = store_config.get("country", "")

        products: List[Dict[str, Any]] = []

        try:
            response = self.session.get(url, timeout=self.timeout)
            response.raise_for_status()
            data = response.json()

            items = data.get("products", [])
            logger.info(f"✓ {store_name}: {len(items)} productos extraídos en bruto.")

            for item in items:
                title = item.get("title", "").strip()
                variants = item.get("variants", [])
                images = item.get("images", [])

                if not title or not variants or not images:
                    continue

                variant = variants[0]
                price_str = variant.get("price", "0")
                try:
                    raw_price = float(price_str)
                except ValueError:
                    raw_price = 0.0

                raw_img_url = images[0].get("src", "")
                handle = item.get("handle", "")
                product_url = f"{domain}/products/{handle}" if handle and domain else ""

                # Extract and clean raw HTML description
                body_html = item.get("body_html", "")
                soup = BeautifulSoup(body_html, "html.parser")
                raw_description = soup.get_text(separator=" ", strip=True)

                products.append({
                    "store_name": store_name,
                    "store_country": country,
                    "raw_title": title,
                    "raw_price": raw_price,
                    "raw_description": raw_description,
                    "raw_image_url": raw_img_url,
                    "product_url": product_url,
                    "in_stock": variant.get("available", True),
                    "tags": item.get("tags", []),
                })

        except Exception as err:
            logger.warning(f"⚠️ Error al scrapear {store_name}: {err}")

        return products

    def _scrape_html_page(self, store_config: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Scrapes products from HTML using BeautifulSoup selectors."""
        url = store_config.get("url")
        domain = store_config.get("domain", "")
        store_name = store_config.get("name")
        country = store_config.get("country", "")

        products: List[Dict[str, Any]] = []

        try:
            response = self.session.get(url, timeout=self.timeout)
            response.raise_for_status()
            soup = BeautifulSoup(response.text, "html.parser")

            product_cards = soup.select(".product-card, .product-item, article.product")
            for card in product_cards:
                title_elem = card.select_one(".product-title, h2, h3, a.title")
                price_elem = card.select_one(".price, .money, .product-price")
                img_elem = card.select_one("img")
                link_elem = card.select_one("a[href]")

                if not title_elem or not img_elem:
                    continue

                title = title_elem.get_text(strip=True)
                raw_img_url = img_elem.get("src") or img_elem.get("data-src") or ""
                if raw_img_url.startswith("//"):
                    raw_img_url = f"https:{raw_img_url}"

                href = link_elem.get("href", "") if link_elem else ""
                product_url = f"{domain}{href}" if href.startswith("/") else href

                products.append({
                    "store_name": store_name,
                    "store_country": country,
                    "raw_title": title,
                    "raw_price": 15.0,  # Fallback default price
                    "raw_description": title,
                    "raw_image_url": raw_img_url,
                    "product_url": product_url,
                    "in_stock": True,
                    "tags": [],
                })

        except Exception as err:
            logger.warning(f"⚠️ Error al procesar HTML de {store_name}: {err}")

        return products
