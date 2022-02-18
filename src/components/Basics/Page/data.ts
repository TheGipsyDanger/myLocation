import { IWrappedSystem, withChildren } from '~/utils';

export interface IPage extends IWrappedSystem, withChildren {
  testID?: string;
}

export interface IPageLayout extends IPage {}
