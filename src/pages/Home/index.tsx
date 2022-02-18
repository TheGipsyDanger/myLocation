import * as React from 'react';

import { useDayHour } from '~/utils';

import { IHome } from './data';
import { Home as Layout } from './Layout';

export const Home = (props: IHome) => {
  const { getPeriod } = useDayHour();
  return <Layout {...props} />;
};
