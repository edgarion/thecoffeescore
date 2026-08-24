import { ICoffeeScoreStrategy, ScoreWeights } from './CoffeeScoreStrategy';
import { ProductSubscores } from '../domain/Product';

/**
 * Estrategia de ponderación técnica para Máquinas de Espresso:
 * - Extracción Espresso: 35%
 * - Rendimiento Vapor / Texturizado: 20%
 * - Control de Temperatura / Estabilidad (PID): 20%
 * - Calidad de Construcción / Materiales: 15%
 * - Relación Calidad / Precio: 10%
 */
export class EspressoMachineStrategy implements ICoffeeScoreStrategy {
  private readonly weights: ScoreWeights = {
    espresso: 0.35,
    vapor: 0.20,
    facilidad: 0.20, // Incluye estabilidad/PID
    construccion: 0.15,
    precio: 0.10,
  };

  public calculateScore(subscores: ProductSubscores): number {
    const raw = 
      (subscores.espresso * this.weights.espresso) +
      (subscores.vapor * this.weights.vapor) +
      (subscores.facilidad * this.weights.facilidad) +
      (subscores.construccion * this.weights.construccion) +
      (subscores.precio * this.weights.precio);

    return Math.round(raw * 10) / 10;
  }

  public getWeights(): ScoreWeights {
    return this.weights;
  }

  public getMetricNames(): { [key: string]: string } {
    return {
      espresso: 'Calidad de Extracción (35%)',
      vapor: 'Potencia & Vaporizador (20%)',
      facilidad: 'Facilidad & Control PID (20%)',
      construccion: 'Construcción & Materiales (15%)',
      precio: 'Valor / Precio (10%)',
    };
  }
}

/**
 * Estrategia de ponderación técnica para Molinos de Café:
 * - Consistencia y Uniformidad de Molienda: 40%
 * - Retención Cero / Mínima: 25%
 * - Rango y Precisión de Ajuste: 15%
 * - Calidad de Construcción y Muelas: 10%
 * - Nivel de Ruido y Flujo de Trabajo: 10%
 */
export class GrinderStrategy implements ICoffeeScoreStrategy {
  private readonly weights: ScoreWeights = {
    espresso: 0.40, // Consistencia en molienda
    vapor: 0.25,    // Retención
    facilidad: 0.15,// Ajuste
    construccion: 0.10,// Construcción
    precio: 0.10,   // Ruido / Flujo
  };

  public calculateScore(subscores: ProductSubscores): number {
    const raw = 
      (subscores.espresso * this.weights.espresso) +
      (subscores.vapor * this.weights.vapor) +
      (subscores.facilidad * this.weights.facilidad) +
      (subscores.construccion * this.weights.construccion) +
      (subscores.precio * this.weights.precio);

    return Math.round(raw * 10) / 10;
  }

  public getWeights(): ScoreWeights {
    return this.weights;
  }

  public getMetricNames(): { [key: string]: string } {
    return {
      espresso: 'Uniformidad de Molienda (40%)',
      vapor: 'Baja Retención (25%)',
      facilidad: 'Precisión de Ajuste (15%)',
      construccion: 'Durabilidad Muelas (10%)',
      precio: 'Nivel Sonoro & Flujo (10%)',
    };
  }
}

export class DefaultScoreStrategy implements ICoffeeScoreStrategy {
  private readonly weights: ScoreWeights = {
    espresso: 0.30,
    vapor: 0.20,
    facilidad: 0.20,
    construccion: 0.15,
    precio: 0.15,
  };

  public calculateScore(subscores: ProductSubscores): number {
    const raw = 
      (subscores.espresso * this.weights.espresso) +
      (subscores.vapor * this.weights.vapor) +
      (subscores.facilidad * this.weights.facilidad) +
      (subscores.construccion * this.weights.construccion) +
      (subscores.precio * this.weights.precio);

    return Math.round(raw * 10) / 10;
  }

  public getWeights(): ScoreWeights {
    return this.weights;
  }

  public getMetricNames(): { [key: string]: string } {
    return {
      espresso: 'Rendimiento Principal (30%)',
      vapor: 'Capacidad Secundaria (20%)',
      facilidad: 'Facilidad de Uso (20%)',
      construccion: 'Construcción (15%)',
      precio: 'Relación Calidad/Precio (15%)',
    };
  }
}
