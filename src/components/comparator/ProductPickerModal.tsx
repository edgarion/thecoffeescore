import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { PRODUCTS } from '../../data/catalog';
import { useComparator } from '../../hooks/useComparator';
import { ScoreBadge } from '../ui/ScoreBadge';
import { Modal } from '../ui/Modal';

interface ProductPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProductPickerModal: React.FC<ProductPickerModalProps> = ({ isOpen, onClose }) => {
  const { selectedIds, addProduct } = useComparator();
  const [query, setQuery] = useState('');

  const availableProducts = PRODUCTS.filter(p =>
    !selectedIds.includes(p.id) &&
    (
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.brand.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
    )
  );

  const handleSelect = (id: string) => {
    addProduct(id);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Añadir producto a la comparativa"
      subtitle="Selecciona hasta 4 productos para ver sus diferencias técnicas lado a lado."
      maxWidth="max-w-2xl"
    >
      <div className="relative my-3">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filtrar por nombre o marca..."
          className="w-full pl-9 pr-4 py-2 text-xs bg-paper-secondary border border-stone-200 rounded-editorial outline-none focus:border-ink font-sans"
          autoFocus
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-1 my-2">
        {availableProducts.length === 0 ? (
          <div className="col-span-2 text-center py-8 text-ink-muted text-xs">
            No hay más productos disponibles con ese criterio.
          </div>
        ) : (
          availableProducts.map(p => (
            <button
              key={p.id}
              onClick={() => handleSelect(p.id)}
              className="flex items-center gap-3 p-2.5 rounded-editorial border border-stone-200 hover:border-editorial-blue hover:bg-editorial-blue/[0.02] text-left transition-all group bg-white"
            >
              <div className="w-12 h-12 bg-paper-secondary rounded-editorial flex items-center justify-center p-1 shrink-0">
                <img src={p.image} alt={p.name} className="max-h-full object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-xs text-ink group-hover:text-editorial-blue transition-colors truncate">
                  {p.name}
                </div>
                <div className="text-[11px] text-ink-muted">
                  {p.brand} · <span className="font-mono">{p.price} €</span>
                </div>
              </div>
              <ScoreBadge score={p.score} size="sm" />
            </button>
          ))
        )}
      </div>
    </Modal>
  );
};
