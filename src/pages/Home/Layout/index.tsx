import * as React from 'react';

import { Page, Linear, Button, Infos, PeriodImage } from '~/components';

import { IHomeLayout } from '../data';

export const Home = (props: IHomeLayout) => (
  <Linear flex={1}>
    <Page bg={'transparent'} flex={1} justifyContent="flex-end">
      <PeriodImage {...props} />
      <Infos />
      <Button
        mx={5}
        mb={2}
        height={60}
        label="Atualizar"
        borderColor="white"
        onPress={() => alert('Renan')}
      />
    </Page>
  </Linear>
);
