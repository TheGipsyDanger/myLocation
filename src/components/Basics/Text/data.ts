import { IFont, IFontSize, ITextVariants, ITextSystem } from '~/utils';

export interface IText extends ITextSystem {
  textTransform?: string;
  textDecoration?: string;
  font?: IFont;
  size?: IFontSize;
  variant?: ITextVariants;
  testID?: string;
  numberOfLines?: number;
}

export interface ITextLayout extends IText {}
