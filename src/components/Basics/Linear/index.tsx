import * as React from 'react';

import { useDayHour, defineLinearColors } from '~/utils';

import { ILinear } from './data';
import { Linear as Layout } from './Layout';

export const Linear = (props: ILinear) => {
  const { getPeriod } = useDayHour();
  const { primary, secondary } = defineLinearColors(getPeriod());

  const layoutProps = {
    ...props,
    primary,
    secondary,
  };

  return <Layout {...layoutProps} />;
};
