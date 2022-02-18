import * as React from 'react';
import { TouchableOpacity } from 'react-native';

import { ILinearLayout } from '../data';
import C from './styles';

export const Linear = ({
  children,
  primary,
  secondary,
  ...props
}: ILinearLayout) => {
  const as = props.onPress && TouchableOpacity;

  return (
    // @ts-ignore
    <C.Wrapped
      {...{ as }}
      {...props}
      colors={[primary, secondary]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}>
      {children}
    </C.Wrapped>
  );
};
