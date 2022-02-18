import { ILinearColors, ILinearHour, ILinearColorsOptions } from '~/utils';

export function defineLinearColors(hour: ILinearHour): ILinearColors {
  const colors: ILinearColorsOptions = {
    MORNING: { primary: '#71F7FF', secondary: '#7D6BFF' },
    AFFTERNOON: { primary: '#FFB971', secondary: '#FF6B6D' },
    NIGHT: { primary: '#7557DE', secondary: '#5C2572' },
  };

  return colors[hour];
}
