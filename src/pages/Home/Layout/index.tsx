import * as React from 'react';

import { Wrapped, Page } from '~/components';

import { IHomeLayout } from '../data';

export const Home = ({ data }: IHomeLayout) => (
  <Page bg="WHITE">
    <Wrapped flex={1} center></Wrapped>
  </Page>
);
