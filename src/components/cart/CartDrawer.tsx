import React from 'react';
import { useCart } from '../../context/CartContext';

export const CartDrawer: React.FC = () => {
  const { items, isOpen, closeCart, updateQuantity, removeItem, clearCart, totalCount, totalAmount } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label="Cesta de compra">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fadeIn"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md h-full bg-[#fbfaf7] border-l border-[#e6e3da] shadow-2xl flex flex-col z-10 animate-slideLeft">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e6e3da] bg-white">
          <div>
            <h2 className="font-bold text-base text-ink">Mi Cesta</h2>
            <p className="text-xs text-stone-500">{totalCount} {totalCount === 1 ? 'producto' : 'productos'}</p>
          </div>

          <div className="flex items-center gap-2">
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-xs text-stone-500 hover:text-red-600 px-2 py-1 transition-colors font-medium"
                title="Vaciar cesta"
              >
                Vaciar
              </button>
            )}
            <button
              onClick={closeCart}
              className="w-8 h-8 rounded-full bg-[#f4f2ec] hover:bg-stone-200 text-ink flex items-center justify-center font-bold text-xs transition-colors"
              aria-label="Cerrar cesta"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Cart Item List */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <h3 className="font-bold text-lg text-ink mb-1">Tu cesta está vacía</h3>
            <p className="text-xs text-stone-500 max-w-xs mb-6 leading-relaxed">
              Explora nuestras selecciones analizadas en laboratorio de cafeteras, molinos y cafés de especialidad.
            </p>
            <button
              onClick={closeCart}
              className="bg-ink hover:bg-black text-white text-xs font-bold px-6 py-3 rounded-xl transition-all shadow-sm"
            >
              Explorar Catálogo
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-5 space-y-3.5">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#e6e3da] rounded-2xl p-3.5 flex gap-3.5 shadow-sm hover:border-stone-300 transition-all"
              >
                {/* Thumbnail */}
                <div className="w-16 h-16 bg-[#fbfaf7] rounded-xl flex items-center justify-center p-1.5 shrink-0 overflow-hidden border border-[#f0eee6]">
                  {item.productImage ? (
                    <img
                      src={item.productImage}
                      alt={item.productName}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-xs text-stone-400">Sin foto</span>
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-ink truncate">
                      {item.productName}
                    </h4>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="bg-stone-100 text-stone-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {item.selectedStore}
                      </span>
                      {item.storeUrl && item.storeUrl !== '#' && (
                        <a
                          href={item.storeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] text-[#2f6fed] hover:underline"
                        >
                          Ver enlace →
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-2.5">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-[#e6e3da] bg-[#fbfaf7] rounded-lg overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2.5 py-1 text-stone-600 hover:bg-stone-200 transition-colors font-bold text-xs"
                        aria-label="Reducir cantidad"
                      >
                        -
                      </button>
                      <span className="px-2 py-0.5 text-xs font-bold text-ink">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2.5 py-1 text-stone-600 hover:bg-stone-200 transition-colors font-bold text-xs"
                        aria-label="Aumentar cantidad"
                      >
                        +
                      </button>
                    </div>

                    {/* Price and Delete */}
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-sm text-ink font-mono">
                        {(item.unitPrice * item.quantity).toFixed(2)} €
                      </span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-stone-400 hover:text-red-500 transition-colors text-xs font-medium px-1"
                        aria-label="Eliminar producto"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Summary & Checkout */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#e6e3da] bg-white space-y-3 shadow-lg">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-stone-600">
                <span>Subtotal ({totalCount} unidades)</span>
                <span className="font-mono font-semibold">{totalAmount.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Envío estimado</span>
                <span className="text-emerald-600 font-semibold">Gratis en tiendas oficiales</span>
              </div>
              <div className="pt-2 border-t border-[#f0eee6] flex justify-between text-sm font-extrabold text-ink">
                <span>Total Estimado</span>
                <span className="font-mono text-base text-[#e94e2b]">{totalAmount.toFixed(2)} €</span>
              </div>
            </div>

            {/* Direct Multi-Store Checkout / Store Link */}
            <div className="space-y-2 pt-1">
              <a
                href={items[0]?.storeUrl || 'https://www.amazon.es'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-ink hover:bg-black text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl flex items-center justify-center transition-all shadow-md hover:-translate-y-0.5"
              >
                <span>Tramitar Compra en Tiendas Oficiales →</span>
              </a>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-500">
                <span>Precios y stock verificados en tiempo real</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
