import { Product } from '../domain/Product';

export interface ComparisonCell {
  productId: string;
  rawValue: any;
  displayValue: string;
  isWinner: boolean;
}

export interface ComparisonRow {
  id: string;
  label: string;
  cells: ComparisonCell[];
}

export interface ComparisonMatrix {
  products: Product[];
  rows: ComparisonRow[];
}

export class CompareProductsUseCase {
  public execute(products: Product[]): ComparisonMatrix {
    if (!products.length) {
      return { products: [], rows: [] };
    }

    const rows: ComparisonRow[] = [];

    // 1. The Coffee Score Row
    const highestScore = Math.max(...products.map(p => p.score.getValue()));
    rows.push({
      id: 'score',
      label: 'The Coffee Score',
      cells: products.map(p => ({
        productId: p.id,
        rawValue: p.score.getValue(),
        displayValue: `${p.score.getFormatted()} / 10`,
        isWinner: p.score.getValue() === highestScore && products.length > 1,
      })),
    });

    // 2. Price Row
    const lowestPrice = Math.min(...products.map(p => p.price));
    rows.push({
      id: 'price',
      label: 'Precio Actual',
      cells: products.map(p => ({
        productId: p.id,
        rawValue: p.price,
        displayValue: `${p.price} €`,
        isWinner: p.price === lowestPrice && products.length > 1,
      })),
    });

    // Technical spec definitions
    const specFields: { id: string; label: string; key: string; fallbackKey?: string; winnerRule?: 'fastest' | 'highest' }[] = [
      { id: 'bomba', label: 'Presión Bomba', key: 'bomba' },
      { id: 'potencia', label: 'Potencia', key: 'potencia' },
      { id: 'calentamiento', label: 'Tiempo de Calentamiento', key: 'calentamiento', winnerRule: 'fastest' },
      { id: 'pid', label: 'Control PID', key: 'pid' },
      { id: 'deposito', label: 'Depósito de Agua', key: 'deposito' },
      { id: 'vaporizador', label: 'Vaporizador', key: 'vaporizador' },
      { id: 'molinillo', label: 'Molinillo Integrado', key: 'molinillo' },
      { id: 'portafiltro', label: 'Portafiltro / Muelas', key: 'portafiltro', fallbackKey: 'tipoMuelas' },
      { id: 'retencion', label: 'Retención de Café', key: 'retencion' },
      { id: 'dimensiones', label: 'Dimensiones', key: 'dimensiones' },
      { id: 'peso', label: 'Peso', key: 'peso' },
      { id: 'garantia', label: 'Garantía Oficial', key: 'garantia' },
    ];

    specFields.forEach(field => {
      const hasAnyValue = products.some(p => {
        const val = (p.specs as any)[field.key] || (field.fallbackKey && (p.specs as any)[field.fallbackKey]);
        return Boolean(val);
      });

      if (hasAnyValue) {
        rows.push({
          id: field.id,
          label: field.label,
          cells: products.map(p => {
            const raw = (p.specs as any)[field.key] || (field.fallbackKey && (p.specs as any)[field.fallbackKey]) || '—';
            let isWinner = false;
            if (field.winnerRule === 'fastest' && products.length > 1) {
              if (raw.includes('3 seg') || raw.includes('3s')) isWinner = true;
            }
            return {
              productId: p.id,
              rawValue: raw,
              displayValue: raw,
              isWinner,
            };
          }),
        });
      }
    });

    return {
      products,
      rows,
    };
  }
}
