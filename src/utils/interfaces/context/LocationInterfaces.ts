import { ILocationCoords } from './location';

export interface ILocationContext {
  coords: ILocationCoords;
  updateCoords(coords: ILocationCoords): void;
}
