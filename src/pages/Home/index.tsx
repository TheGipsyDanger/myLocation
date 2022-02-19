import * as React from 'react';
import { useEffect, useState } from 'react';

import { metrics } from '~/styles';
import { useLocation, getWeather, convertTempValues } from '~/utils';
import { useLocation as useLocationContext } from '~/context';

import { IHome } from './data';
import { Home as Layout } from './Layout';

export const Home = (props: IHome) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { getLocation } = useLocation();
  const { updateCoords, updateWeather, weather } = useLocationContext();

  const imageWidth = metrics.width;
  const imageHeight = metrics.width;
  const adjustPosition = metrics.width / 3;

  useEffect(() => {
    init();
  }, []);

  async function init() {
    setIsLoading(true);

    const { coords } = await getLocation();

    updateCoords(coords);

    const resp = await getWeather(coords.latitude, coords.longitude);

    if (resp) {
      updateWeather({
        name: resp.name,
        image: resp.weather[0].description,
        temp: convertTempValues(resp.main.temp),
        max: convertTempValues(resp.main.temp_max),
        min: convertTempValues(resp.main.temp_min),
      });
    }

    setIsLoading(false);
  }

  function update() {
    init();
  }

  const layoutProps = {
    ...props,
    update,
    weather,
    isLoading,
    imageWidth,
    imageHeight,
    adjustPosition,
  };

  return <Layout {...layoutProps} />;
};
