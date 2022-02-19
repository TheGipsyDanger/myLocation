import * as React from 'react';
import { RequestLocation } from './';
import { RequestLocation as RequestLocationLayout } from './Layout/index';
import { render } from '@testing-library/react-native';

describe('Render RequestLocation', () => {
  it('Should be RequestLocation exist', () => {
    const { getByTestId } = render(<RequestLocation />);
    const currentElement = getByTestId(`RequestLocation`);
    expect(currentElement).toBeTruthy();
  });

  it('HomeLayout render all Components correct', () => {
    const { getByTestId } = render(<RequestLocationLayout />);
    expect(getByTestId(`Button`)).toBeTruthy();
    expect(getByTestId(`Infos`)).toBeTruthy();
    expect(getByTestId(`PeriodImage`)).toBeTruthy();
  });
});
