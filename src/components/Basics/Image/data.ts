import { withChildren, IWrappedSystem } from '~/utils';

export interface IImage extends withChildren, IWrappedSystem {
  testID?: string;
}

export interface IImageLayout extends IImage {
  source: HTMLImageElement;
}
