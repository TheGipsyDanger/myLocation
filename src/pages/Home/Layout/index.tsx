import * as React from 'react';

import { Wrapped, Page, Text, Linear } from '~/components';

import { IHomeLayout } from '../data';

export const Home = ({ data }: IHomeLayout) => (
  <Linear flex={1}>
    <Page bg={'transparent'}>
      <Text>Home</Text>
    </Page>
  </Linear>
);
