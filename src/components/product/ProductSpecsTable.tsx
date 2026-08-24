import React, { useState } from 'react';
import { TechnicalSpecs } from '../../core/domain/TechnicalSpecs';

export const ProductSpecsTable: React.FC<{ specs: TechnicalSpecs; className?: string }> = ({
  specs,
  className = '',
}) => {
  const specRows: Array<{ label: string; value?: string }> = [
    { label: 'Presión de bomba', value: specs.bomba },
    { label: 'Potencia del motor / caldera', value: specs.potencia },
    { label: 'Tiempo de calentamiento', value: specs.calentamiento },
    { label: 'Control PID de temperatura', value: specs.pid },
    { label: 'Capacidad del depósito', value: specs.deposito },
    { label: 'Vaporizador', value: specs.vaporizador },
    { label: 'Molinillo integrado', value: specs.molinillo },
    { label: 'Tipo y diámetro portafiltro', value: specs.portafiltro },
    { label: 'Tipo y tamaño de muelas', value: specs.tipoMuelas },
    { label: 'Ajuste de molienda', value: specs.ajuste },
    { label: 'Retención de café', value: specs.retencion },
    { label: 'Capacidad de la tolva', value: specs.capacidadTolva },
    { label: 'Dimensiones (An × Prof × Al)', value: specs.dimensiones },
    { label: 'Peso neto', value: specs.peso },
    { label: 'Garantía oficial', value: specs.garantia || '2 años' },
  ].filter(r => Boolean(r.value));

  return (
    <div className={`border border-stone-200 rounded-editorial overflow-hidden bg-white ${className}`}>
      <table className="w-full text-xs text-left">
        <tbody>
          {specRows.map((row, idx) => (
            <tr
              key={idx}
              className={`border-b border-stone-100 last:border-0 ${
                idx % 2 === 0 ? 'bg-white' : 'bg-paper-secondary/40'
              }`}
            >
              <td className="py-3 px-4 font-medium text-ink-muted w-1/2">{row.label}</td>
              <td className="py-3 px-4 font-mono font-bold text-ink w-1/2">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const Gallery: React.FC<{ images: string[]; alt: string; className?: string }> = ({
  images,
  alt,
  className = '',
}) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeImage = images[selectedIdx] || images[0] || '/assets/pourover.png';

  return (
    <div className={className}>
      {/* Main Image */}
      <div className="w-full h-80 sm:h-96 bg-paper-secondary rounded-editorial border border-stone-200 flex items-center justify-center p-6 mb-3 overflow-hidden">
        <img
          src={activeImage}
          alt={alt}
          className="max-h-full max-w-full object-contain transition-all duration-300"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2.5 overflow-x-auto pb-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={`w-16 h-16 bg-paper-secondary rounded-editorial border p-1 shrink-0 transition-all ${
                selectedIdx === idx
                  ? 'border-editorial-blue ring-2 ring-editorial-blue/30 bg-white'
                  : 'border-stone-200 hover:border-stone-400 opacity-80 hover:opacity-100'
              }`}
            >
              <img src={img} alt={`${alt} - ${idx + 1}`} className="w-full h-full object-contain" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
