import os
import urllib.request
import json

os.makedirs('/Users/somoscoders/Documents/thecoffeescore 2/public/assets/blog', exist_ok=True)

# Curated pristine direct high-res images for each blog article
BLOG_IMAGES = {
    "scott_rao_flow_profile.jpg": "https://images.squarespace-cdn.com/content/v1/5957d4148419c29314283239/595eba3b57bf429e28c287a0/60a3ccd9fa1efe2eb2103c0e/1621523548951/John%27s+Best+Practices+Profile+thumbnail.JPG?format=1500w",
    "diego_bermudez_thermal_shock.jpg": "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?auto=format&fit=crop&q=85&w=1400",
    "european_coffee_trip_burrs.jpg": "https://europeancoffeetrip.com/wp-content/uploads/2015/04/MG_1708.jpg",
    "james_hoffmann_water_chemistry.jpg": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=85&w=1400",
    "tim_wendelboe_nordic_roast.jpg": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=85&w=1400",
    "barista_magazine_puck_screen.jpg": "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=85&w=1400",
    "lance_hedrick_milk_steaming.jpg": "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=85&w=1400",
    "nomad_coffee_barcelona.jpg": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=85&w=1400"
}

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
}

for filename, url in BLOG_IMAGES.items():
    dest = f"/Users/somoscoders/Documents/thecoffeescore 2/public/assets/blog/{filename}"
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp, open(dest, 'wb') as f:
            f.write(resp.read())
        size = os.path.getsize(dest)
        print(f"✅ Downloaded {filename} ({size} bytes)")
    except Exception as e:
        print(f"⚠️ Error downloading {filename} from {url}: {e}")
