import * as React from 'react';

import { Wrapped, Page, Text } from '~/components';

import { IHomeLayout } from '../data';

export const Home = ({ data }: IHomeLayout) => (
  <Page bg="WHITE">
    <Wrapped flex={1} center>
      <Text>Home</Text>
    </Wrapped>
  </Page>
);
