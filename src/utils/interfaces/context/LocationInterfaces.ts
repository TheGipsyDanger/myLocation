import { ILocationCoords } from './location';
import { IWeather } from '~/utils/interfaces';

export interface ILocationContext {
  coords: ILocationCoords;
  weather: IWeather;
  updateWeather(weather: IWeather): void;
  updateCoords(coords: ILocationCoords): void;
}
