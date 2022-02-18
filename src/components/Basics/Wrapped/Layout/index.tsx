import * as React from 'react';
import { IWrappedLayout } from '../data';
import { TouchableOpacity } from 'react-native';
import C from './styles';

export const Wrapped = ({
  children,
  bg = 'transparent',
  ...props
}: IWrappedLayout) => {
  const as = props.onPress && TouchableOpacity;
  return (
    <C.Wrapped {...{ as }} {...props} bg={bg}>
      {children}
    </C.Wrapped>
  );
};
