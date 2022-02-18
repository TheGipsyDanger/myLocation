import * as React from 'react';
import { PeriodImage }from './';
import { render } from '@testing-library/react-native';

describe('Render PeriodImage', () => {
  it('Should be PeriodImage exist', () => {
    const { getByTestId } = render(<PeriodImage />);
    const currentElement = getByTestId(`PeriodImage`);
    expect(currentElement).toBeTruthy();
  });
});