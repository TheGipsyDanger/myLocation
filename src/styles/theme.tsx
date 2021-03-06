import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { metrics } from '../styles/metrics';
import { IStringMap, StringToNumberMap } from '../utils';

const { defaultSpace } = metrics;

export const space = [
  defaultSpace() / 2,
  defaultSpace(),
  defaultSpace(2),
  defaultSpace(3),
  defaultSpace(4),
  defaultSpace(5),
  defaultSpace(6),
  defaultSpace(7),
  defaultSpace(8),
  defaultSpace(9),
  defaultSpace(10),
  defaultSpace(11),
  defaultSpace(12),
];

export const fontSizes: IStringMap = {
  tiny: '12px',
  small: '24px',
  default: '36px',
  big: '72px',
  large: '144px',
};

export const colors: IStringMap = {
  WHITE: '#FFF',
  ORANGE: '#f37321',
  TEXT: '#171717',
  SUBLABEL: '#777777',
};

export const fonts: IStringMap = {
  regular: 'Regular',
  italic: 'Italic',
  light: 'Light',
  black: 'Black',
  bold: 'Bold',
  medium: 'Medium',
  thin: 'Thin',
  blackItalic: 'Black-Italic',
  boldItalic: 'Bold-Italic',
  lightItalic: 'Light-Italic',
  mediumItalic: 'Medium-Italic',
  thinItalic: 'Thin-Italic',
};

export const radii: StringToNumberMap = {
  light: defaultSpace() / 2,
  medium: defaultSpace(),
  circle: 100,
};

export const shadows: IStringMap = {
  cell: '0px 0px 8px rgba(0,0,0,0.12)',
};

export const theme = {
  space,
  fontSizes,
  colors,
  radii,
};

export const ThemeProvider: React.FC = ({ children }) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);
