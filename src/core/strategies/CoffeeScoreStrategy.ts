import { ProductSubscores } from '../domain/Product';

export interface ScoreWeights {
  [key: string]: number;
}

export interface ICoffeeScoreStrategy {
  calculateScore(subscores: ProductSubscores): number;
  getWeights(): ScoreWeights;
  getMetricNames(): { [key: string]: string };
}
