"""
Validator & Normalization Module using Google Gemini API.
Validates specialty coffee status and extracts structured JSON specifications.
"""

import json
import logging
import os
import re
from typing import Dict, Any, Optional
from pydantic import BaseModel, Field
import google.generativeai as genai

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger(__name__)


class CoffeeSpecification(BaseModel):
    is_specialty_coffee: bool = Field(description="True if product is specialty coffee (whole bean / ground), False if merchandise, machine, mug, t-shirt or non-coffee")
    clean_name: str = Field(description="Normalized coffee name without noisy SKU codes or brackets")
    brand: str = Field(description="Official Roaster / Brand name")
    origin_country: str = Field(description="Country of origin (e.g., Colombia, Etiopía, Kenia, Guatemala, Brasil)")
    region: str = Field(description="Specific region, farm, or washing station")
    process: str = Field(description="Processing method (Lavado, Natural, Honey, Anaeróbico, etc.)")
    variety: str = Field(description="Botanical variety (Gesha, Bourbon, Caturra, Typica, SL28, etc.)")
    tasting_notes: list[str] = Field(description="3 to 5 standardized sensory tasting notes in Spanish")
    roast_profile: str = Field(description="Roast recommendation: Filtro, Espresso, or Omni-roast")
    price_eur: float = Field(description="Price converted and normalized to EUR")
    seo_description: str = Field(description="Engaging 2-sentence description in Spanish for coffee lovers")
    estimated_score: float = Field(description="Estimated CoffeeScore / SCA score from 84.0 to 95.0")


class GeminiValidator:
    """Uses Google Gemini Flash to validate and normalize scraped coffee products."""

    def __init__(self, api_key: Optional[str] = None):
        self.api_key = api_key or os.getenv("GEMINI_API_KEY")
        if self.api_key:
            genai.configure(api_key=self.api_key)
            self.model = genai.GenerativeModel(
                model_name="gemini-1.5-flash",
                generation_config={
                    "response_mime_type": "application/json",
                    "temperature": 0.2,
                }
            )
            logger.info("🤖 Gemini API inicializado con éxito (gemini-1.5-flash).")
        else:
            self.model = None
            logger.warning("⚠️ GEMINI_API_KEY no detectada. Se usará el motor de normalización heurístico de respaldo.")

    def validate_and_normalize(self, raw_item: Dict[str, Any]) -> Optional[Dict[str, Any]]:
        """Validates and normalizes raw scraped product data into structured coffee specs."""
        if self.model:
            return self._validate_with_gemini(raw_item)
        else:
            return self._validate_with_heuristic(raw_item)

    def _validate_with_gemini(self, raw_item: Dict[str, Any]) -> Optional[Dict[str, Any]]:
        prompt = f"""
        Actúa como un Catador Q-Grader y experto en café de especialidad para "The Coffee Score".
        Analiza el siguiente producto extraído de una tienda de café y extrae su ficha técnica en JSON estricto.

        DATOS DEL PRODUCTO:
        - Tienda / Tostador: {raw_item.get('store_name')} ({raw_item.get('store_country')})
        - Título crudo: {raw_item.get('raw_title')}
        - Precio crudo: {raw_item.get('raw_price')}
        - Descripción: {raw_item.get('raw_description')}

        REGLAS:
        1. 'is_specialty_coffee': Pon 'false' si es ropa, tazas, molinos, filtros de papel o merchandising. Pon 'true' solo si es café en grano o molido.
        2. Normaliza el precio a EUR (si la tienda es de EE.UU. usa ratio 0.92, si es Japón 0.0062, etc.).
        3. Escribe las notas de cata en español claro (máximo 4 descriptores).
        4. Redacta una descripción SEO atractiva de 2 frases en español.

        Esquema JSON requerido:
        {{
            "is_specialty_coffee": boolean,
            "clean_name": string,
            "brand": string,
            "origin_country": string,
            "region": string,
            "process": string,
            "variety": string,
            "tasting_notes": [string],
            "roast_profile": "Filtro" | "Espresso" | "Omni",
            "price_eur": number,
            "seo_description": string,
            "estimated_score": number
        }}
        """

        try:
            response = self.model.generate_content(prompt)
            data = json.loads(response.text)

            if not data.get("is_specialty_coffee"):
                logger.info(f"⏭️ Descartado (No es café): {raw_item.get('raw_title')}")
                return None

            return data
        except Exception as err:
            logger.warning(f"Error llamando a Gemini API para '{raw_item.get('raw_title')}': {err}. Usando fallback heurístico.")
            return self._validate_with_heuristic(raw_item)

    def _validate_with_heuristic(self, raw_item: Dict[str, Any]) -> Optional[Dict[str, Any]]:
        """Heuristic rule-based fallback validator when API key is not present or offline."""
        title = raw_item.get("raw_title", "")
        lower_title = title.lower()

        # Reject non-coffee merchandise
        blacklist = ["t-shirt", "shirt", "mug", "vaso", "filter", "filtro", "kettle", "scale", "totebag", "sticker", "cup"]
        if any(b in lower_title for b in blacklist):
            return None

        store = raw_item.get("store_name", "Especialidad")
        country_hint = "Origen Seleccionado"
        origins = ["Colombia", "Etiopía", "Kenia", "Guatemala", "Brasil", "Costa Rica", "Honduras", "Ruanda", "Panamá", "Perú"]
        for o in origins:
            if o.lower() in lower_title or o.lower() in raw_item.get("raw_description", "").lower():
                country_hint = o
                break

        price = float(raw_item.get("raw_price", 15.0))
        if raw_item.get("store_country") == "Estados Unidos":
            price = round(price * 0.92, 2)

        return {
            "is_specialty_coffee": True,
            "clean_name": f"{store} — {title}",
            "brand": store,
            "origin_country": country_hint,
            "region": "Finca / Cooperativa seleccionada",
            "process": "Lavado / Natural",
            "variety": "Arábica 100%",
            "tasting_notes": ["Chocolate con leche", "Fruta madura", "Caramelo"],
            "roast_profile": "Omni",
            "price_eur": max(price, 12.0),
            "seo_description": f"Café de especialidad tostado artesanalmente por {store}. Lote seleccionado con excelente equilibrio y perfil aromático.",
            "estimated_score": 88.5,
        }
