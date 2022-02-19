import * as React from 'react';

import { Wrapped, Text } from '~/components/Basics';

import { IButtonLayout } from '~/components/Button/data';

export const Button = ({
  label = 'button',
  onPress,
  ...props
}: IButtonLayout) => (
  <Wrapped {...{ onPress }}>
    <Wrapped
      {...props}
      testID={`Button`}
      borderWidth={1}
      borderRadius="circle"
      center>
      <Text testID="Button:label" variant="smallMedium">
        {label}
      </Text>
    </Wrapped>
  </Wrapped>
);
