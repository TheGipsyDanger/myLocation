import * as React from 'react';
import { RequestLocation } from './';
import { render } from '@testing-library/react-native';

describe('Render RequestLocation', () => {
  it('Should be RequestLocation exist', () => {
    const { getByTestId } = render(<RequestLocation />);
    const currentElement = getByTestId(`RequestLocation`);
    expect(currentElement).toBeTruthy();
  });
});