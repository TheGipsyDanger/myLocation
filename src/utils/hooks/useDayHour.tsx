import { ILinearPeriod, IStringMap } from '~/utils';

export function useDayHour() {
  function defineHour() {
    const now = new Date();
    return now.getHours();
  }

  function getPeriod(): ILinearPeriod {
    const hour = defineHour();
    if (hour >= 6 && hour < 12) return 'MORNING';
    if (hour >= 12 && hour < 18) return 'AFFTERNOON';
    return 'NIGHT';
  }

  function getDay() {
    const days: IStringMap = {
      0: 'domingo',
      1: 'segunda',
      2: 'terça',
      3: 'quarta',
      4: 'quinta',
      5: 'sexta',
      6: 'sábado',
    };
    const now = new Date();
    return days[now.getDay()];
  }

  return {
    getDay,
    getPeriod,
  };
}
