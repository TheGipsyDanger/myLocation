export interface ILinearColors {
  primary: string;
  secondary: string;
}

export type ILinearHour = 'MORNING' | 'AFFTERNOON' | 'NIGHT';

export type ILinearColorsOptions = { [key: string]: ILinearColors };
