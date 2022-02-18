import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Store } from './src/components';
import Routes from './src/routes/Routes';

export default function App() {
  return (
    <NavigationContainer>
      <Store>
        <Routes />
      </Store>
    </NavigationContainer>
  );
}
