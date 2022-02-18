import * as React from 'react';
import { useEffect } from 'react';

import { metrics } from '~/styles';
import { useLocation } from '~/utils';
import { useLocation as useLocationContext } from '~/context';

import { IHome } from './data';
import { Home as Layout } from './Layout';

export const Home = (props: IHome) => {
  const { getLocation } = useLocation();
  const { updateCoords, coords } = useLocationContext();

  const imageWidth = metrics.width;
  const imageHeight = metrics.width;
  const adjustPosition = metrics.width / 3;

  useEffect(() => {
    (async () => {
      const { coords } = await getLocation();
      updateCoords(coords);
    })();
  }, []);

  const layoutProps = {
    ...props,
    imageWidth,
    imageHeight,
    adjustPosition,
  };

  return <Layout {...layoutProps} />;
};
