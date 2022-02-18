import * as React from 'react';

import { Wrapped, Text } from '~/components/Basics';

import { IInfosLayout } from '~/components/Infos/data';

export const Infos = ({ data }: IInfosLayout) => (
  <Wrapped testID={`Infos`}>
    <Wrapped mb={4} mx={2}>
      <Wrapped height={138} mb={1}>
        <Text variant="large">23º</Text>
      </Wrapped>
      <Text variant="big" mb={1}>
        friday
      </Text>
      <Text variant="default">rio de janeiro</Text>
    </Wrapped>
  </Wrapped>
);
