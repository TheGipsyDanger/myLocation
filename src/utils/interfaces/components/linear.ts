export interface ILinearColors {
  primary: string;
  secondary: string;
}

export type ILinearPeriod = 'MORNING' | 'AFFTERNOON' | 'NIGHT';

export type ILinearColorsOptions = { [key: string]: ILinearColors };
