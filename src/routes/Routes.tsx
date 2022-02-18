import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { IRoutes } from '~/utils';
import * as views from '~/pages';

const Stack = createStackNavigator();

const allViews: { [key: string]: any } = {
  ...views,
};

function defineRoutesProps(name: string) {
  return {
    name,
    options: { headerShown: false },
    component: allViews[name],
  };
}

const viewsNames = Object.keys(views);

export default function Routes({ showRequestFlow }: IRoutes) {
  return (
    <Stack.Navigator
      initialRouteName={showRequestFlow ? 'RequestLocation' : 'Home'}>
      {viewsNames.map(viewName => (
        <Stack.Screen key={viewName} {...defineRoutesProps(viewName)} />
      ))}
    </Stack.Navigator>
  );
}
