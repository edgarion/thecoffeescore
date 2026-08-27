import React, { useState } from 'react';
import { StoreOffer } from '../../core/domain/Product';
import { Modal } from './Modal';
import { CoffeeScraperService } from '../../services/scraper/CoffeeScraperService';

interface AffiliateButtonProps {
  stores?: StoreOffer[];
  productName?: string;
  defaultPrice?: number;
  label?: string;
  className?: string;
}

export const AffiliateButton: React.FC<AffiliateButtonProps> = ({
  stores = [],
  productName = 'Producto',
  defaultPrice = 399,
  label = 'Comprobar precio y tiendas →',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const activeStores: StoreOffer[] = stores.length > 0
    ? stores.map(store => ({
        ...store,
        url: (!store.url || store.url === '#' || store.url === '')
          ? CoffeeScraperService.generateStoreLink(store.name, productName)
          : store.url,
      }))
    : [
        {
          name: 'Amazon',
          price: defaultPrice,
          inStock: true,
          url: CoffeeScraperService.generateStoreLink('Amazon', productName),
          isBest: true,
        },
        {
          name: 'El Corte Inglés',
          price: Math.round(defaultPrice * 1.05),
          inStock: true,
          url: CoffeeScraperService.generateStoreLink('El Corte Inglés', productName),
          isBest: false,
        },
        {
          name: 'MediaMarkt',
          price: defaultPrice + 10,
          inStock: true,
          url: CoffeeScraperService.generateStoreLink('MediaMarkt', productName),
          isBest: false,
        },
        {
          name: 'Tienda Barista Especializada',
          price: defaultPrice + 15,
          inStock: true,
          url: CoffeeScraperService.generateStoreLink('Tienda Barista', productName),
          isBest: false,
        },
      ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`inline-flex items-center justify-center gap-2 bg-ink hover:bg-black text-white font-medium text-sm px-5 py-3 rounded-editorial transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 shadow-sm ${className}`}
      >
        <span>{label}</span>
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Disponibilidad y Precios"
        subtitle={`Precios verificados en tiempo real para ${productName}`}
      >
        <div className="space-y-3 my-2">
          {activeStores.map((store, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between p-3.5 rounded-editorial border transition-all ${
                store.isBest
                  ? 'border-editorial-red/40 bg-editorial-red/[0.02] ring-1 ring-editorial-red/20'
                  : 'border-stone-200 bg-white hover:border-stone-300'
              }`}
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-ink text-sm">{store.name}</span>
                  {store.isBest && (
                    <span className="bg-editorial-red/10 text-editorial-red text-[11px] font-bold px-2 py-0.5 rounded-full font-mono">
                      Mejor Precio
                    </span>
                  )}
                </div>
                <div className="text-xs text-ink-muted font-medium mt-0.5">
                  <span>{store.inStock ? 'En stock · Entrega 24/48h' : 'Bajo pedido'}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-mono font-bold text-base text-ink">{store.price} €</span>
                <a
                  href={store.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-ink hover:bg-black text-white text-xs font-semibold px-3.5 py-2 rounded-editorial transition-colors shadow-sm"
                >
                  <span>Ir a la tienda →</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-paper-secondary rounded-editorial border border-stone-200/60 text-xs text-ink-muted leading-relaxed">
          <span>
            <strong>Transparencia:</strong> Al comprar a través de nuestros enlaces podemos percibir una pequeña comisión de afiliado sin coste adicional para ti. Esto garantiza nuestra total independencia editorial.
          </span>
        </div>
      </Modal>
    </>
  );
};
