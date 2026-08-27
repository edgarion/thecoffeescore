"""
Image Processor Module using Pillow (PIL).
Downloads raw product images, trims, resizes proportionally, centers on a pure white 1000x1000 canvas, and exports to optimized WebP.
"""

import io
import logging
import os
import re
from typing import Optional, Tuple
import requests
from PIL import Image, ImageOps

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger(__name__)


class ImageProcessor:
    """Processes product photos to pristine 1000x1000 px WebP images with white background."""

    def __init__(self, output_dir: str = "output/images", canvas_size: Tuple[int, int] = (1000, 1000)):
        self.output_dir = output_dir
        self.canvas_width, self.canvas_height = canvas_size
        os.makedirs(self.output_dir, exist_ok=True)

    @staticmethod
    def slugify(text: str) -> str:
        """Converts text into a filesystem-safe slug."""
        text = text.lower().strip()
        text = re.sub(r"[^\w\s-]", "", text)
        text = re.sub(r"[\s_-]+", "-", text)
        return re.sub(r"^-+|-+$", "", text)

    def process_image(self, image_url: str, filename_base: str) -> Optional[str]:
        """Downloads, centers, resizes, and saves the image as a 1000x1000 WebP."""
        if not image_url:
            return None

        slug = self.slugify(filename_base)
        output_filename = f"{slug}.webp"
        output_filepath = os.path.join(self.output_dir, output_filename)

        # Skip re-processing if already exists and is valid
        if os.path.exists(output_filepath) and os.path.getsize(output_filepath) > 0:
            return output_filepath

        try:
            # 1. Download image
            headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}
            response = requests.get(image_url, headers=headers, timeout=12)
            response.raise_for_status()

            # 2. Open with Pillow
            img_data = io.BytesIO(response.content)
            with Image.open(img_data) as img:
                img = ImageOps.exif_transpose(img)  # Correct orientation if EXIF is present

                # Convert to RGBA for transparent processing
                if img.mode != "RGBA":
                    img = img.convert("RGBA")

                # Auto-crop transparent boundaries
                bbox = img.getbbox()
                if bbox:
                    img = img.crop(bbox)

                # 3. Calculate proportional scale to fit within 880x880 box (leaving 60px padding)
                target_box_size = 880
                orig_w, orig_h = img.size
                ratio = min(target_box_size / orig_w, target_box_size / orig_h)
                new_w = max(1, int(orig_w * ratio))
                new_h = max(1, int(orig_h * ratio))

                resized_img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)

                # 4. Create pure white 1000x1000 canvas
                canvas = Image.new("RGBA", (self.canvas_width, self.canvas_height), (255, 255, 255, 255))

                # 5. Center resized subject on canvas
                paste_x = (self.canvas_width - new_w) // 2
                paste_y = (self.canvas_height - new_h) // 2

                canvas.paste(resized_img, (paste_x, paste_y), mask=resized_img)

                # Convert to RGB for saving as standard high-quality WebP
                rgb_canvas = canvas.convert("RGB")

                # 6. Save as optimized WebP
                rgb_canvas.save(
                    output_filepath,
                    format="WEBP",
                    quality=85,
                    method=6,
                )

                file_size_kb = os.path.getsize(output_filepath) / 1024
                logger.info(f"📸 Imagen procesada: {output_filename} (1000x1000 WebP · {file_size_kb:.1f} KB)")
                return output_filepath

        except Exception as err:
            logger.warning(f"⚠️ Error al procesar imagen de {image_url}: {err}")
            return None
