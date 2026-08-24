import React, { useState } from 'react';
import { ExternalLink, Check, Info } from 'lucide-react';
import { StoreOffer } from '../../core/domain/Product';
import { Modal } from './Modal';

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
  defaultPrice,
  label = 'Comprobar precio →',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const activeStores = stores.length > 0 ? stores : [
    { name: 'Amazon', price: defaultPrice || 399, inStock: true, url: 'https://amazon.es', isBest: true },
    { name: 'Tienda Barista Especializada', price: (defaultPrice || 399) + 20, inStock: true, url: '#' },
    { name: 'Web Oficial de la Marca', price: (defaultPrice || 399) + 30, inStock: true, url: '#' },
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
        subtitle={`Precios verificados para ${productName}`}
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
                <div className="flex items-center gap-1 text-xs text-ink-muted font-medium mt-0.5">
                  <Check size={13} className="text-stone-400 stroke-[2.5]" />
                  <span>{store.inStock ? 'En stock · Entrega 24/48h' : 'Bajo pedido'}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-mono font-bold text-base text-ink">{store.price} €</span>
                <a
                  href={store.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-ink hover:bg-black text-white text-xs font-semibold px-3 py-2 rounded-editorial transition-colors"
                >
                  <span>Ver en tienda</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-paper-secondary rounded-editorial border border-stone-200/60 text-xs text-ink-muted leading-relaxed flex items-start gap-2">
          <Info size={15} className="text-ink-muted shrink-0 mt-0.5" />
          <span>
            <strong>Transparencia:</strong> Al comprar a través de nuestros enlaces podemos percibir una pequeña comisión de afiliado sin coste adicional para ti. Esto garantiza nuestra total independencia editorial.
          </span>
        </div>
      </Modal>
    </>
  );
};
