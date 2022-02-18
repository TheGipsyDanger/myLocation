import { IPeriodImage as IPeriodImageSystem } from '~/utils';

export interface IPeriodImage extends IPeriodImageSystem {
  data?: any;
}

export interface IPeriodImageLayout extends IPeriodImage {}
