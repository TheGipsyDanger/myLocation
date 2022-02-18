import { withChildren } from '~/utils';

import {
  BorderProps,
  ColorProps,
  FontSizeProps,
  FontFamilyProps,
  FontWeightProps,
  FontStyleProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

export type IFont = 'Regular' | 'Light' | 'Medium' | 'Bold' | 'Black';

export type IFontSize =
  | 'tiny'
  | 'xsmall'
  | 'small'
  | 'default'
  | 'big'
  | 'large'
  | 'xlarge';

export type ITextVariants =
  | 'smallRegular'
  | 'smallMedium'
  | 'large'
  | 'big'
  | 'default';

export interface ITextSystem
  extends withChildren,
    BorderProps,
    ColorProps,
    FontSizeProps,
    FontFamilyProps,
    FontWeightProps,
    FontStyleProps,
    SpaceProps,
    TypographyProps {}
