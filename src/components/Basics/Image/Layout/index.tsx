import * as React from 'react';

import { Wrapped } from '~/components/Basics/Wrapped';

import { IImageLayout } from '~/components/Basics/Image/data';

import C from './styles';

export const Image = ({ source, ...props }: IImageLayout) => (
  <Wrapped overflow="hidden" {...props}>
    <C.Image resizeMode="stretch" {...{ source }} />
  </Wrapped>
);
