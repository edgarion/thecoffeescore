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
    coverUrl: '/assets/books/world-atlas-coffee.jpg',
    amazonUrl: 'https://www.amazon.es/dp/1784724297',
    tag: 'Imprescindible',
    price: '24,90 €',
  },
  {
    id: 'how-to-make-best-coffee',
    title: 'How to Make the Best Coffee at Home',
    author: 'James Hoffmann',
    coverUrl: '/assets/books/how-to-make-best-coffee.jpg',
    amazonUrl: 'https://www.amazon.es/dp/1784727245',
    tag: 'Nuevo',
    price: '18,50 €',
  },
  {
    id: 'blue-bottle-craft',
    title: 'The Blue Bottle Craft of Coffee',
    author: 'James Freeman',
    coverUrl: '/assets/books/blue-bottle-craft.jpg',
    amazonUrl: 'https://www.amazon.es/dp/1607741180',
    tag: 'Bestseller',
    price: '19,90 €',
  },
  {
    id: 'coffee-roasters-companion',
    title: "The Coffee Roaster's Companion",
    author: 'Scott Rao',
    coverUrl: '/assets/books/coffee-roasters-companion.jpg',
    amazonUrl: 'https://www.amazon.es/dp/B00RQFCJNC',
    tag: 'Tueste',
    price: '34,00 €',
  },
  {
    id: 'baristas-handbook',
    title: "The Professional Barista's Handbook",
    author: 'Scott Rao',
    coverUrl: '/assets/books/baristas-handbook.jpg',
    amazonUrl: 'https://www.amazon.es/dp/B00BRHEQO2',
    tag: 'Pro',
    price: '39,00 €',
  },
  {
    id: 'craft-coffee-manual',
    title: 'Craft Coffee: A Manual',
    author: 'Jessica Easto',
    coverUrl: '/assets/books/craft-coffee-manual.jpg',
    amazonUrl: 'https://www.amazon.es/dp/1572842342',
    tag: 'Filtro',
    price: '15,90 €',
  },
  {
    id: 'coffee-obsession',
    title: 'Coffee Obsession',
    author: 'DK',
    coverUrl: '/assets/books/coffee-obsession.jpg',
    amazonUrl: 'https://www.amazon.es/dp/1465440623',
    tag: 'Visual',
    price: '16,50 €',
  },
  {
    id: 'specialty-coffee-handbook',
    title: 'The Specialty Coffee Handbook',
    author: 'Tristan Stephenson',
    coverUrl: '/assets/books/specialty-coffee-handbook.jpg',
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
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full max-w-full min-w-0 overflow-hidden bg-[#f9f7f2] border border-[#e6e3da] rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3.5 pb-2.5 border-b border-[#ece8df]">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center bg-[#eef4ff] text-[#2f6fed] text-[10px] font-bold px-2 py-0.5 rounded-full">
              LECTURAS
            </span>
            <h2 className="font-serif font-bold text-base sm:text-lg text-ink">
              Libros para baristas
            </h2>
          </div>
          <p className="text-[11px] text-[#6b6a63] mt-0.5">
            Los mejores libros sobre café de especialidad y técnica barista
          </p>
        </div>

        <div className="flex items-center gap-1 bg-white border border-[#e6e3da] rounded-full p-0.5 shadow-2xs shrink-0 self-end sm:self-auto">
          <button
            onClick={() => handleScroll('left')}
            className="w-6 h-6 rounded-full flex items-center justify-center text-ink hover:bg-stone-100 transition-colors font-bold text-xs"
            aria-label="Anterior libro"
          >
            ←
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="w-6 h-6 rounded-full flex items-center justify-center text-ink hover:bg-stone-100 transition-colors font-bold text-xs"
            aria-label="Siguiente libro"
          >
            →
          </button>
        </div>
      </div>

      {/* Filter placeholder spacer / pill row for perfect height alignment */}
      <div className="w-full min-w-0 max-w-full flex items-center gap-1 overflow-x-auto pb-1.5 mb-3 scrollbar-none text-[11px]">
        <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white border border-[#e6e3da] text-stone-700">
          Técnica & Espresso
        </span>
        <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white border border-[#e6e3da] text-stone-700">
          Tueste & Origen
        </span>
        <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white border border-[#e6e3da] text-stone-700">
          Guías visuales
        </span>
      </div>

      {/* Books Carousel */}
      <div
        ref={scrollRef}
        className="w-full min-w-0 max-w-full flex gap-3 overflow-x-auto pb-2 pt-0.5 snap-x snap-mandatory scrollbar-none flex-1"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {BARISTA_BOOKS.map((book) => (
          <a
            key={book.id}
            href={book.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="snap-start shrink-0 w-[130px] sm:w-[145px] bg-white border border-[#e6e3da] hover:border-[#2f6fed] rounded-xl p-2.5 flex flex-col items-center shadow-2xs hover:shadow-md transition-all group cursor-pointer"
          >
            {/* Tag */}
            <span className="self-start bg-[#eef4ff] text-[#2f6fed] text-[8px] font-bold px-1.5 py-0.5 rounded-full mb-1.5 font-mono">
              {book.tag}
            </span>

            {/* Book Cover */}
            <div className="w-full h-[110px] sm:h-[120px] flex items-center justify-center mb-2 rounded-lg overflow-hidden bg-[#fbfaf7] p-1">
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
            <h3 className="font-bold text-[10px] text-ink text-center line-clamp-2 leading-tight mb-0.5">
              {book.title}
            </h3>

            {/* Author */}
            <p className="text-[9px] text-[#6b6a63] text-center mb-1.5">
              {book.author}
            </p>

            {/* Price + Amazon link */}
            <div className="pt-1.5 border-t border-[#f0eee6] w-full flex items-center justify-between mt-auto">
              <span className="font-extrabold text-[10px] text-ink font-mono">{book.price}</span>
              <span className="text-[9px] font-bold text-[#2f6fed] group-hover:underline">
                Amazon →
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
