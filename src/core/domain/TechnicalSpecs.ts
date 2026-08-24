export interface TechnicalSpecs {
  bomba?: string;
  potencia?: string;
  calentamiento?: string;
  pid?: string;
  deposito?: string;
  vaporizador?: string;
  molinillo?: string;
  portafiltro?: string;
  peso?: string;
  dimensiones?: string;
  garantia?: string;
  
  // Grinder specific
  tipoMuelas?: string;
  ajuste?: string;
  retencion?: string;
  capacidadTolva?: string;
  dosificador?: string;

  // Coffee / Accessory specific
  origen?: string;
  proceso?: string;
  tueste?: string;
  notas?: string;
  material?: string;
  capacidad?: string;
  resortes?: string;
}

export interface SpecRowDefinition {
  id: string;
  label: string;
  key: keyof TechnicalSpecs | 'score' | 'price';
  fallbackKey?: keyof TechnicalSpecs;
  formatter?: (val: any) => string;
  winnerRule?: 'highest_number' | 'lowest_number' | 'boolean' | 'lowest_price';
}
