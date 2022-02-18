import * as React from 'react';

import { defineLinearColors } from '~/utils';

import { ILinear } from './data';
import { Linear as Layout } from './Layout';

export const Linear = (props: ILinear) => {
  const { primary, secondary } = defineLinearColors('MORNING');

  const layoutProps = {
    ...props,
    primary,
    secondary,
  };

  return <Layout {...layoutProps} />;
};
