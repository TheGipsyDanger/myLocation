import * as React from 'react';

import { Linear, Page, Text, Button, Wrapped } from '~/components';

import { IRequestLocationLayout } from '~/pages/RequestLocation/data';

export const RequestLocation = ({ press }: IRequestLocationLayout) => (
  <Linear flex={1}>
    <Page bg={'transparent'} flex={1} justifyContent="center">
      <Wrapped center mb={4}>
        <Text
          variant="smallRegular"
          textAlign="center">{`Para prosseguir, precisamos\nque habilite sua localização`}</Text>
      </Wrapped>
      <Button
        mx={5}
        height={60}
        label="Habilitar"
        borderColor="white"
        onPress={press}
      />
    </Page>
  </Linear>
);
