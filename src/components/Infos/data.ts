import { IWeather } from '~/utils';
export interface IInfos {
  weather: IWeather;
}

export interface IInfosLayout extends IInfos {
  day: string;
}
