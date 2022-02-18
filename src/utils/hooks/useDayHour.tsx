import { ILinearPeriod } from '~/utils';

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

  return {
    getPeriod,
  };
}
