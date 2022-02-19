import * as React from 'react';

import { Wrapped, Image } from '~/components/Basics';

import { IPeriodImageLayout } from '~/components/PeriodImage/data';

export const PeriodImage = ({
  imageWidth,
  imageHeight,
  adjustPosition,
}: IPeriodImageLayout) => (
  <Wrapped
    testID={`PeriodImage`}
    width={imageWidth}
    height={imageHeight}
    top={-adjustPosition}
    left={adjustPosition}>
    <Image />
  </Wrapped>
);
