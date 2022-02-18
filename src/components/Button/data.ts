import { IWrappedSystem } from '~/utils';

export interface IButton extends IWrappedSystem {
  label: string;
  onPress(): any;
}

export interface IButtonLayout extends IButton {}
