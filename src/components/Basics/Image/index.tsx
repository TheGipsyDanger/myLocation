import * as React from 'react';

import { cloudy, sunny, rain } from '~/images';

import { IImage } from '~/components/Basics/Image/data';
import { Image as Layout } from './Layout';

export const Image = (props: IImage) => {
  const layoutProps = {
    ...props,
    source: rain,
  };

  return <Layout {...layoutProps} />;
};
