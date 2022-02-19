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
        <Text testID={`Infos:temp`} variant="large">{`${temp}º`}</Text>
        <Wrapped>
          <S.TempSeparator>
            <Text variant="smallRegular">{`max:`}</Text>
            <Text testID={`Infos:max`} variant="smallRegular">{`${max}º`}</Text>
          </S.TempSeparator>
          <S.TempSeparator>
            <Text variant="smallRegular">{`min:`}</Text>
            <Text testID={`Infos:min`} variant="smallRegular">{`${min}º`}</Text>
          </S.TempSeparator>
        </Wrapped>
      </S.TempContent>
      <Text testID={`Infos:day`} variant="big" mb={1}>
        {day}
      </Text>
      <Text testID={`Infos:name`} variant="default">
        {name}
      </Text>
    </Wrapped>
  </Wrapped>
);
