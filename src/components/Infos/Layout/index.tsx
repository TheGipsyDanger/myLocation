import * as React from 'react';

import { Wrapped, Text } from '~/components/Basics';

import { IInfosLayout } from '~/components/Infos/data';
import S from './styles';

export const Infos = ({
  weather: { temp, name, max, min },
  day,
}: IInfosLayout) => (
  <Wrapped testID={`Infos`}>
    <Wrapped mb={4} mx={2}>
      <S.TempContent>
        <Text variant="large">{`${temp}º`}</Text>
        <Wrapped>
          <S.TempSeparator>
            <Text variant="smallRegular">{`max:`}</Text>
            <Text variant="smallRegular">{`${max}º`}</Text>
          </S.TempSeparator>
          <S.TempSeparator>
            <Text variant="smallRegular">{`min:`}</Text>
            <Text variant="smallRegular">{`${min}º`}</Text>
          </S.TempSeparator>
        </Wrapped>
      </S.TempContent>
      <Text variant="big" mb={1}>
        {day}
      </Text>
      <Text variant="default">{name}</Text>
    </Wrapped>
  </Wrapped>
);
