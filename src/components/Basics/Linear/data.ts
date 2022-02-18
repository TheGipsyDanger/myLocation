import { IWrappedSystem, withChildren } from '~/utils';
export interface ILinear extends IWrappedSystem, withChildren {
  testID?: string;
  center?: boolean;
  onPress?(): void;
}

export interface ILinearLayout extends ILinear {
  primary: string;
  secondary: string;
}
