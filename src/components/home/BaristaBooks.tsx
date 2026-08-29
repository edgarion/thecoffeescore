import React, { useRef } from 'react';

interface BaristaBook {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  amazonUrl: string;
  tag: string;
  price: string;
}

const BARISTA_BOOKS: BaristaBook[] = [
  {
    id: 'world-atlas-coffee',
    title: 'The World Atlas of Coffee',
    author: 'James Hoffmann',
    // Open Library cover — works without CORS/hotlink restrictions
    coverUrl: 'https://covers.openlibrary.org/b/isbn/1784724297-L.jpg',
    amazonUrl: 'https://www.amazon.es/dp/1784724297',
    tag: 'Imprescindible',
    price: '24,90 €',
  },
  {
    id: 'how-to-make-best-coffee',
    title: 'How to Make the Best Coffee at Home',
    author: 'James Hoffmann',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/1784727245-L.jpg',
    amazonUrl: 'https://www.amazon.es/dp/1784727245',
    tag: 'Nuevo',
    price: '18,50 €',
  },
  {
    id: 'blue-bottle-craft',
    title: 'The Blue Bottle Craft of Coffee',
    author: 'James Freeman',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/1607741180-L.jpg',
    amazonUrl: 'https://www.amazon.es/dp/1607741180',
    tag: 'Bestseller',
    price: '19,90 €',
  },
  {
    id: 'coffee-roasters-companion',
    title: "The Coffee Roaster's Companion",
    author: 'Scott Rao',
    // ISBN 9780991090303
    coverUrl: 'https://covers.openlibrary.org/b/isbn/0991090306-L.jpg',
    amazonUrl: 'https://www.amazon.es/dp/B00RQFCJNC',
    tag: 'Tueste',
    price: '34,00 €',
  },
  {
    id: 'baristas-handbook',
    title: "The Professional Barista's Handbook",
    author: 'Scott Rao',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780615630069-L.jpg',
    amazonUrl: 'https://www.amazon.es/dp/B00BRHEQO2',
    tag: 'Pro',
    price: '39,00 €',
  },
  {
    id: 'craft-coffee-manual',
    title: 'Craft Coffee: A Manual',
    author: 'Jessica Easto',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/1572842342-L.jpg',
    amazonUrl: 'https://www.amazon.es/dp/1572842342',
    tag: 'Filtro',
    price: '15,90 €',
  },
  {
    id: 'coffee-obsession',
    title: 'Coffee Obsession',
    author: 'DK',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/1465440623-L.jpg',
    amazonUrl: 'https://www.amazon.es/dp/1465440623',
    tag: 'Visual',
    price: '16,50 €',
  },
  {
    id: 'specialty-coffee-handbook',
    title: 'The Specialty Coffee Handbook',
    author: 'Tristan Stephenson',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9781849757607-L.jpg',
    amazonUrl: 'https://www.amazon.es/dp/1849757607',
    tag: 'Especialidad',
    price: '21,00 €',
  },
];

export const BaristaBooks: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -260 : 260,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full max-w-full min-w-0 overflow-hidden bg-[#f9f7f2] border border-[#e6e3da] rounded-2xl p-4 sm:p-6 shadow-xs flex flex-col">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-[#ece8df]">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center bg-[#eef4ff] text-[#2f6fed] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
              LECTURAS BARISTA
            </span>
            <h2 className="font-serif font-bold text-lg sm:text-2xl text-ink">
              Libros para baristas
            </h2>
          </div>
          <p className="text-xs text-[#6b6a63] mt-1">
            Los mejores libros sobre café de especialidad, química de extracción y técnica barista
          </p>
        </div>

        <div className="flex items-center gap-1 bg-white border border-[#e6e3da] rounded-full p-1 shadow-2xs shrink-0 self-end sm:self-auto">
          <button
            onClick={() => handleScroll('left')}
            className="w-7 h-7 rounded-full flex items-center justify-center text-ink hover:bg-stone-100 transition-colors font-bold text-sm"
            aria-label="Anterior libro"
          >
            ←
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="w-7 h-7 rounded-full flex items-center justify-center text-ink hover:bg-stone-100 transition-colors font-bold text-sm"
            aria-label="Siguiente libro"
          >
            →
          </button>
        </div>
      </div>

      {/* Books Carousel - 100% Full Width & Zero Overflow */}
      <div
        ref={scrollRef}
        className="w-full min-w-0 max-w-full flex gap-3.5 overflow-x-auto pb-2 pt-0.5 snap-x snap-mandatory scrollbar-none"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {BARISTA_BOOKS.map((book) => (
          <a
            key={book.id}
            href={book.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="snap-start shrink-0 w-[150px] sm:w-[170px] bg-white border border-[#e6e3da] hover:border-[#2f6fed] rounded-xl p-3 flex flex-col items-center shadow-2xs hover:shadow-md transition-all group cursor-pointer"
          >
            {/* Tag */}
            <span className="self-start bg-[#eef4ff] text-[#2f6fed] text-[9px] font-bold px-2 py-0.5 rounded-full mb-2 font-mono">
              {book.tag}
            </span>

            {/* Book Cover */}
            <div className="w-full h-[130px] sm:h-[150px] flex items-center justify-center mb-2.5 rounded-lg overflow-hidden bg-[#fbfaf7] p-1.5">
              <img
                src={book.coverUrl}
                alt={book.title}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200 rounded shadow-sm"
                loading="lazy"
                onError={(e) => {
                  // Fallback to a coffee-colored placeholder if cover fails
                  const img = e.currentTarget;
                  img.style.display = 'none';
                  const parent = img.parentElement;
                  if (parent && !parent.querySelector('.book-fallback')) {
                    const fb = document.createElement('div');
                    fb.className = 'book-fallback w-full h-full flex items-center justify-center text-center p-2 bg-gradient-to-b from-[#4a3728] to-[#2a1f15] rounded text-white text-[9px] font-bold leading-tight';
                    fb.textContent = book.title;
                    parent.appendChild(fb);
                  }
                }}
              />
            </div>

            {/* Title */}
            <h3 className="font-bold text-xs text-ink text-center line-clamp-2 leading-tight mb-1">
              {book.title}
            </h3>

            {/* Author */}
            <p className="text-[10px] text-[#6b6a63] text-center mb-2">
              {book.author}
            </p>

            {/* Price + Amazon link */}
            <div className="pt-2 border-t border-[#f0eee6] w-full flex items-center justify-between mt-auto">
              <span className="font-extrabold text-xs text-ink font-mono">{book.price}</span>
              <span className="text-[10px] font-bold text-[#2f6fed] group-hover:underline">
                Amazon →
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
