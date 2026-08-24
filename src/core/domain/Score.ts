export class CoffeeScore {
  private readonly value: number;

  constructor(value: number) {
    if (value < 0 || value > 10) {
      throw new Error(`CoffeeScore must be between 0 and 10, got: ${value}`);
    }
    this.value = Math.round(value * 10) / 10;
  }

  public getValue(): number {
    return this.value;
  }

  public getFormatted(): string {
    return this.value.toFixed(1);
  }

  public getRatingLabel(): string {
    if (this.value >= 9.0) return 'Excelente';
    if (this.value >= 8.0) return 'Muy bueno';
    if (this.value >= 7.0) return 'Bueno';
    return 'Aceptable';
  }

  public isHighTier(): boolean {
    return this.value >= 8.5;
  }

  public static fromNumber(num: number): CoffeeScore {
    return new CoffeeScore(num);
  }
}
