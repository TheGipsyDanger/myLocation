import * as React from 'react';
import { Infos }from './';
import { render } from '@testing-library/react-native';

describe('Render Infos', () => {
  it('Should be Infos exist', () => {
    const { getByTestId } = render(<Infos />);
    const currentElement = getByTestId(`Infos`);
    expect(currentElement).toBeTruthy();
  });
});