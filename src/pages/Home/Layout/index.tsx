import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { View } from 'react-native-animatable';

import {
  Page,
  Infos,
  Linear,
  Button,
  Wrapped,
  PeriodImage,
  Conditional,
} from '~/components';

import { IHomeLayout } from '../data';

export const Home = ({ isLoading, update, ...props }: IHomeLayout) => (
  <Linear testID="Home" flex={1}>
    <Page bg={'transparent'} flex={1} justifyContent="flex-end">
      <Conditional render={isLoading}>
        <Wrapped testID="Home:loading" flex={1} center>
          <ActivityIndicator size="large" />
        </Wrapped>
        <View animation="fadeInUpBig" testID="Home:info">
          <PeriodImage {...props} />
          <Infos {...props} />
          <Button
            mx={5}
            mb={2}
            height={60}
            label="Atualizar"
            borderColor="white"
            onPress={update}
          />
        </View>
      </Conditional>
    </Page>
  </Linear>
);
