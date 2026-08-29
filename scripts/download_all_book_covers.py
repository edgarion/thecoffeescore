import urllib.request
import os

os.makedirs('/Users/somoscoders/Documents/thecoffeescore 2/public/assets/books', exist_ok=True)

# Correct 13-digit ISBNs on OpenLibrary
ISBN_MAP = {
    "world-atlas-coffee.jpg": "9781784724290",
    "how-to-make-best-coffee.jpg": "9781784727246",
    "blue-bottle-craft.jpg": "9781607741183",
    "craft-coffee-manual.jpg": "9781572842335",
    "coffee-obsession.jpg": "9781465419552",
    "specialty-coffee-handbook.jpg": "9781849755634",
    "baristas-handbook.jpg": "9781450702676",
    "coffee-roasters-companion.jpg": "9780991090303",
    "de-la-finca-a-la-taza.jpg": "9788418045615"
}

headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'}

for fname, isbn in ISBN_MAP.items():
    url = f"https://covers.openlibrary.org/b/isbn/{isbn}-L.jpg"
    dest = f"/Users/somoscoders/Documents/thecoffeescore 2/public/assets/books/{fname}"
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp, open(dest, 'wb') as f:
            f.write(resp.read())
        size = os.path.getsize(dest)
        print(f"ISBN {isbn} -> {fname}: {size} bytes")
    except Exception as e:
        print(f"Error {isbn}: {e}")
