import * as React from 'react';
import { ITextLayout } from '../data';
import C from './styles';

export const Text = ({
  color = 'TEXT',
  font = 'Regular',
  size = 'small',
  ...props
}: ITextLayout) => (
  <C.Text {...props} font={font} color={color} fontSize={size} size={size} />
);
