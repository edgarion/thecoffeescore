import { Product } from '../domain/Product';
import { CoffeeScore } from '../domain/Score';
import { ICoffeeScoreStrategy } from '../strategies/CoffeeScoreStrategy';
import { EspressoMachineStrategy, GrinderStrategy, DefaultScoreStrategy } from '../strategies/ScoringStrategies';

export class CalculateScoreUseCase {
  private readonly strategies: { [category: string]: ICoffeeScoreStrategy } = {
    maquinas: new EspressoMachineStrategy(),
    molinos: new GrinderStrategy(),
    default: new DefaultScoreStrategy(),
  };

  public execute(product: Product): { score: CoffeeScore; strategy: ICoffeeScoreStrategy } {
    const strategy = this.strategies[product.category] || this.strategies.default;
    const computedNum = strategy.calculateScore(product.subscores);
    return {
      score: new CoffeeScore(computedNum),
      strategy,
    };
  }

  public getStrategyForCategory(category: string): ICoffeeScoreStrategy {
    return this.strategies[category] || this.strategies.default;
  }
}
