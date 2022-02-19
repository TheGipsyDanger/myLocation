import * as React from 'react';

import { cloudy, sunny, rain } from '~/images';

import { useImage } from '~/utils';
import { useLocation } from '~/context';

import { IImage } from '~/components/Basics/Image/data';
import { Image as Layout } from './Layout';

export const Image = (props: IImage) => {
  const {
    weather: { image },
  } = useLocation();

  const { getImage } = useImage();

  const layoutProps = {
    ...props,
    source: getImage(image),
  };

  return <Layout {...layoutProps} />;
};
