import * as React from 'react';

import { metrics } from '~/styles';

import { IHome } from './data';
import { Home as Layout } from './Layout';

export const Home = (props: IHome) => {
  const imageWidth = metrics.width;
  const imageHeight = metrics.width;
  const adjustPosition = metrics.width / 3;

  const layoutProps = {
    ...props,
    imageWidth,
    imageHeight,
    adjustPosition,
  };

  return <Layout {...layoutProps} />;
};
