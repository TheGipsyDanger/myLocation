import { IWrappedSystem, withChildren } from '~/utils';

export interface IWrapped extends IWrappedSystem, withChildren {
  testID?: string;
  center?: boolean;
  onPress?(): void;
  activeOpacity?: number;
}

export interface IWrappedLayout extends IWrapped {}
