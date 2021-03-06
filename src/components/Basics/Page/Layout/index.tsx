import * as React from 'react';
import { Platform } from 'react-native';
import { IPageLayout } from '../data';
import { Wrapped } from '../../Wrapped';
import * as C from './styles';

export const Page = ({ children, bg = 'white', ...props }: IPageLayout) => {
  return (
    <C.SafeAreaStyled bg={bg}>
      <C.KeyboardAvoidStyled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Wrapped flex={1} bg={bg} {...props}>
          {children}
        </Wrapped>
      </C.KeyboardAvoidStyled>
    </C.SafeAreaStyled>
  );
};
