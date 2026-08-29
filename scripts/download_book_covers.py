import os
import urllib.request

os.makedirs('/Users/somoscoders/Documents/thecoffeescore 2/public/assets/books', exist_ok=True)

# Curated high-res book covers
BOOKS = {
    "world-atlas-coffee.jpg": "https://m.media-amazon.com/images/I/81Pj6E0WcYL._AC_SL1500_.jpg",
    "how-to-make-best-coffee.jpg": "https://m.media-amazon.com/images/I/71R375eH0ML._AC_SL1500_.jpg",
    "blue-bottle-craft.jpg": "https://m.media-amazon.com/images/I/81t33gG7HwL._AC_SL1500_.jpg",
    "coffee-roasters-companion.jpg": "https://m.media-amazon.com/images/I/61Nl0kS-LzL._AC_SL1200_.jpg",
    "baristas-handbook.jpg": "https://m.media-amazon.com/images/I/61G1zGsqHIL._AC_SL1200_.jpg",
    "craft-coffee-manual.jpg": "https://m.media-amazon.com/images/I/81uE4wW61QL._AC_SL1500_.jpg",
    "coffee-obsession.jpg": "https://m.media-amazon.com/images/I/81oP2N5ZfXL._AC_SL1500_.jpg",
    "specialty-coffee-handbook.jpg": "https://m.media-amazon.com/images/I/71b2kFmD7KL._AC_SL1200_.jpg",
    "de-la-finca-a-la-taza.jpg": "https://m.media-amazon.com/images/I/71R375eH0ML._AC_SL1500_.jpg"
}

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
}

for filename, url in BOOKS.items():
    dest = f"/Users/somoscoders/Documents/thecoffeescore 2/public/assets/books/{filename}"
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp, open(dest, 'wb') as f:
            f.write(resp.read())
        size = os.path.getsize(dest)
        print(f"✅ Downloaded {filename} ({size} bytes)")
    except Exception as e:
        print(f"⚠️ Error downloading {filename} from {url}: {e}")
