import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { useComparator } from '../../hooks/useComparator';
import { Link } from 'react-router-dom';
import { ProductPickerModal } from './ProductPickerModal';
import { AffiliateButton } from '../ui/AffiliateButton';

export const ComparisonTable: React.FC = () => {
  const { selectedProducts, matrix, removeProduct, canAddMore } = useComparator();
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  if (selectedProducts.length === 0) {
    return (
      <div className="text-center py-20 bg-white border border-[#e6e3da] rounded-xl p-8 max-w-xl mx-auto">
        <h3 className="font-serif font-bold text-2xl text-ink mb-2">Tu comparador está vacío</h3>
        <p className="text-sm text-[#6b6a63] mb-6 leading-relaxed">
          Selecciona hasta 4 productos para comparar sus especificaciones técnicas de laboratorio, puntuaciones The Coffee Score y precios.
        </p>
        <button
          onClick={() => setIsPickerOpen(true)}
          className="btn btn-solid"
        >
          <Plus size={16} />
          <span>Añadir primer producto</span>
        </button>
        <ProductPickerModal isOpen={isPickerOpen} onClose={() => setIsPickerOpen(false)} />
      </div>
    );
  }

  return (
    <>
      <div className="space-y-8">
        {/* Top Product Cards Picker Row */}
        <div className="compare-picker-row">
          {selectedProducts.map(product => (
            <div key={product.id} className="compare-picked">
              <button
                onClick={() => removeProduct(product.id)}
                className="remove-x"
                title="Eliminar de la comparativa"
              >
                <X size={15} />
              </button>

              <div className="compare-col-photo mx-auto">
                <img src={product.image} alt={product.name} />
              </div>
              <h4 className="font-bold text-sm text-ink truncate mb-1" title={product.name}>
                {product.name}
              </h4>
              <div className="text-xs font-mono text-[#6b6a63] mb-3">
                {product.price} € · Score: <strong className="text-ink">{product.score.getFormatted()}</strong>
              </div>

              <div className="flex gap-2 justify-center">
                <Link
                  to={`/producto/${product.slug}`}
                  className="btn-outline-sm"
                >
                  Ficha
                </Link>
                <AffiliateButton
                  stores={product.stores}
                  productName={product.name}
                  defaultPrice={product.price}
                  label="Tiendas"
                  className="btn-outline-sm !bg-ink !text-white"
                />
              </div>
            </div>
          ))}

          {canAddMore && (
            <div
              onClick={() => setIsPickerOpen(true)}
              className="compare-slot flex flex-col items-center justify-center min-h-[220px]"
            >
              <div className="w-9 h-9 rounded-full bg-white border border-[#e6e3da] flex items-center justify-center mb-2">
                <Plus size={16} />
              </div>
              <span className="font-bold text-xs">+ Añadir producto</span>
              <span className="text-[11px] text-[#6b6a63] mt-1 font-mono">
                ({selectedProducts.length}/4)
              </span>
            </div>
          )}
        </div>

        {/* Comparison Matrix Table */}
        <div className="compare-table-wrap">
          <table className="compare-table">
            <thead>
              <tr>
                <th className="spec-label">Especificación</th>
                {selectedProducts.map(p => (
                  <th key={p.id}>{p.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {matrix.rows.map((row) => (
                <tr key={row.id}>
                  <td className="spec-label">{row.label}</td>
                  {row.cells.map(cell => (
                    <td key={cell.productId} className="spec-value">
                      <span>{cell.displayValue}</span>
                      {cell.isWinner && (
                        <span className="winner-flag">MEJOR</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ProductPickerModal isOpen={isPickerOpen} onClose={() => setIsPickerOpen(false)} />
    </>
  );
};
