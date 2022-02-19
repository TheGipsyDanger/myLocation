import * as React from 'react';

import { Wrapped, Text } from '~/components/Basics';

import { IInfosLayout } from '~/components/Infos/data';

export const Infos = ({ weather: { temp, name }, day }: IInfosLayout) => (
  <Wrapped testID={`Infos`}>
    <Wrapped mb={4} mx={2}>
      <Wrapped height={138} mb={1}>
        <Text variant="large">{`${temp}º`}</Text>
      </Wrapped>
      <Text variant="big" mb={1}>
        {day}
      </Text>
      <Text variant="default">{name}</Text>
    </Wrapped>
  </Wrapped>
);
