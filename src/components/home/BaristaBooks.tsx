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
    coverUrl: 'https://m.media-amazon.com/images/I/91oWJLElVFL._SY466_.jpg',
    amazonUrl: 'https://www.amazon.es/dp/1784724297',
    tag: 'Imprescindible',
    price: '24,90 €',
  },
  {
    id: 'how-to-make-best-coffee',
    title: 'How to Make the Best Coffee at Home',
    author: 'James Hoffmann',
    coverUrl: 'https://m.media-amazon.com/images/I/71WQxSzJURL._SY466_.jpg',
    amazonUrl: 'https://www.amazon.es/dp/1784727245',
    tag: 'Nuevo',
    price: '18,50 €',
  },
  {
    id: 'blue-bottle-craft',
    title: 'The Blue Bottle Craft of Coffee',
    author: 'James Freeman',
    coverUrl: 'https://m.media-amazon.com/images/I/81muegYGr4L._SY466_.jpg',
    amazonUrl: 'https://www.amazon.es/dp/1607741180',
    tag: 'Bestseller',
    price: '19,90 €',
  },
  {
    id: 'coffee-science',
    title: 'The Coffee Roaster\'s Companion',
    author: 'Scott Rao',
    coverUrl: 'https://m.media-amazon.com/images/I/51TvIhfVNQL._SY466_.jpg',
    amazonUrl: 'https://www.amazon.es/dp/B00RQFCJNC',
    tag: 'Tueste',
    price: '34,00 €',
  },
  {
    id: 'espresso-coffee',
    title: 'Espresso Coffee: Professional Techniques',
    author: 'David Schomer',
    coverUrl: 'https://m.media-amazon.com/images/I/61R7nCeJxmL._SY466_.jpg',
    amazonUrl: 'https://www.amazon.es/dp/B084DG49GQ',
    tag: 'Espresso',
    price: '28,00 €',
  },
  {
    id: 'coffee-obsession',
    title: 'Coffee Obsession',
    author: 'DK',
    coverUrl: 'https://m.media-amazon.com/images/I/91sgGx15QzL._SY466_.jpg',
    amazonUrl: 'https://www.amazon.es/dp/1465440623',
    tag: 'Visual',
    price: '16,50 €',
  },
  {
    id: 'craft-brew',
    title: 'Craft Coffee: A Manual',
    author: 'Jessica Easto',
    coverUrl: 'https://m.media-amazon.com/images/I/71Ry0w2bHDL._SY466_.jpg',
    amazonUrl: 'https://www.amazon.es/dp/1572842342',
    tag: 'Filtro',
    price: '15,90 €',
  },
  {
    id: 'professional-barista',
    title: 'The Professional Barista\'s Handbook',
    author: 'Scott Rao',
    coverUrl: 'https://m.media-amazon.com/images/I/51rJyq5AWOL._SY466_.jpg',
    amazonUrl: 'https://www.amazon.es/dp/B00BRHEQO2',
    tag: 'Pro',
    price: '39,00 €',
  },
];

export const BaristaBooks: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -240 : 240,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="wrap py-1">
      <div className="bg-[#f9f7f2] border border-[#e6e3da] rounded-2xl p-4 sm:p-5 shadow-xs">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-2.5 border-b border-[#ece8df]">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center bg-[#eef4ff] text-[#2f6fed] text-[10px] font-bold px-2 py-0.5 rounded-full">
                Lecturas
              </span>
              <h2 className="font-serif font-bold text-lg sm:text-xl text-ink">
                Libros para baristas y amantes del café
              </h2>
            </div>
            <p className="text-[11px] text-[#6b6a63] mt-0.5">
              Los mejores libros sobre café de especialidad, espresso, tueste y técnica barista
            </p>
          </div>

          <div className="flex items-center gap-1 bg-white border border-[#e6e3da] rounded-full p-0.5 shadow-2xs shrink-0">
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

        {/* Books Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-2 pt-0.5 snap-x snap-mandatory scrollbar-none"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {BARISTA_BOOKS.map((book) => (
            <a
              key={book.id}
              href={book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="snap-start shrink-0 w-[145px] sm:w-[160px] bg-white border border-[#e6e3da] hover:border-[#2f6fed] rounded-xl p-2.5 flex flex-col items-center shadow-2xs hover:shadow-md transition-all group cursor-pointer"
            >
              {/* Tag */}
              <span className="self-start bg-[#eef4ff] text-[#2f6fed] text-[8px] font-bold px-1.5 py-0.5 rounded-full mb-1.5 font-mono">
                {book.tag}
              </span>

              {/* Book Cover */}
              <div className="w-full h-[120px] sm:h-[140px] flex items-center justify-center mb-2 rounded-lg overflow-hidden bg-[#fbfaf7] p-1.5">
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200 rounded shadow-sm"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <h3 className="font-bold text-[11px] text-ink text-center line-clamp-2 leading-tight mb-0.5">
                {book.title}
              </h3>

              {/* Author */}
              <p className="text-[9px] text-[#6b6a63] text-center mb-1.5">
                {book.author}
              </p>

              {/* Price + Amazon link */}
              <div className="pt-1.5 border-t border-[#f0eee6] w-full flex items-center justify-between mt-auto">
                <span className="font-extrabold text-xs text-ink font-mono">{book.price}</span>
                <span className="text-[10px] font-bold text-[#2f6fed] group-hover:underline">
                  Amazon →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
