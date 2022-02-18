import { IWrappedSystem } from '~/utils';

export interface IWrapped extends IWrappedSystem {
  testID?: string;
  center?: boolean;
  onPress?(): void;
  activeOpacity?: number;
}

export interface IWrappedLayout extends IWrapped {}
