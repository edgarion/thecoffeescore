import React, { useState } from 'react';
import { useComparator } from '../../hooks/useComparator';
import { Link } from 'react-router-dom';
import { ProductPickerModal } from './ProductPickerModal';
import { AffiliateButton } from '../ui/AffiliateButton';

export const ComparisonTable: React.FC = () => {
  const { selectedProducts, matrix, removeProduct, canAddMore } = useComparator();
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  if (selectedProducts.length === 0) {
    return (
      <div className="text-center py-12 sm:py-16 bg-white border border-[#e6e3da] rounded-2xl p-6 sm:p-10 max-w-xl mx-auto shadow-xs">
        <div className="w-36 sm:w-44 h-auto mx-auto mb-4">
          <img
            src="/assets/comparator-people.png"
            alt="Tu comparador de café"
            className="w-full h-auto object-contain mx-auto select-none pointer-events-none drop-shadow-sm"
          />
        </div>
        <h3 className="font-serif font-bold text-2xl text-ink mb-2">Tu comparador está listo</h3>
        <p className="text-xs sm:text-sm text-[#6b6a63] mb-6 leading-relaxed">
          Selecciona hasta 4 productos (cafeteras, molinos, básculas o accesorios) para comparar lado a lado sus especificaciones técnicas, retención, puntuaciones y precios.
        </p>
        <button
          onClick={() => setIsPickerOpen(true)}
          className="btn btn-solid !py-3 !px-6 text-xs sm:text-sm font-bold !rounded-xl !bg-ink hover:!bg-black shadow-sm"
        >
          <span>+ Añadir primer producto al comparador</span>
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
                className="remove-x font-bold text-xs"
                title="Eliminar de la comparativa"
              >
                ✕
              </button>

              <div className="compare-col-photo mx-auto">
                <img
                  src={product.image}
                  alt={product.name}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = '/assets/machine-fallback.png';
                  }}
                />
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
              className="compare-slot flex flex-col items-center justify-center min-h-[220px] cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-white border border-[#e6e3da] flex items-center justify-center mb-2 font-bold text-sm">
                +
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
              <tr>
                <td className="spec-label font-bold">Comprar</td>
                {selectedProducts.map(p => (
                  <td key={p.id} className="p-3 text-center">
                    {p.stores && p.stores.length > 0 ? (
                      <div className="flex flex-col items-center gap-1.5">
                        <span className="font-extrabold text-sm text-ink font-mono">{p.stores[0].price} €</span>
                        <a
                          href={p.stores[0].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#2f6fed] hover:bg-[#2055be] text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors shadow-sm block w-full text-center"
                        >
                          {p.stores[0].name.split(' ')[0]} →
                        </a>
                      </div>
                    ) : (
                      <span className="text-xs text-[#6b6a63]">Consultar</span>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <ProductPickerModal isOpen={isPickerOpen} onClose={() => setIsPickerOpen(false)} />
    </>
  );
};
