import { IPeriodImage, IWeather } from '~/utils';

export interface IHome {}

export interface IHomeLayout extends IHome, IPeriodImage {
  weather: IWeather;
  isLoading: boolean;
  update(): void;
}
