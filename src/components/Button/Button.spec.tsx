import * as React from 'react';
import { Button } from './';
import { render, fireEvent } from '@testing-library/react-native';

const fn = jest.fn();

describe('Render Button', () => {
  it('Should be Button exist', () => {
    const { getByTestId } = render(<Button onPress={fn} />);
    const currentElement = getByTestId(`Button`);
    expect(currentElement).toBeTruthy();
  });

  it('Button has a correct label', () => {
    const { getByTestId } = render(<Button label="Habilitar" onPress={fn} />);
    const currentElement = getByTestId(`Button:label`);
    expect(currentElement).toBeTruthy();
    expect(currentElement.props.children).toBe('Habilitar');
  });

  it('Button not provider a label', () => {
    const { getByTestId } = render(<Button onPress={fn} />);
    const currentElement = getByTestId(`Button:label`);
    expect(currentElement).toBeTruthy();
    expect(currentElement.props.children).toBe('button');
  });

  it('Button press', () => {
    const { getByTestId } = render(<Button onPress={fn} />);
    const currentElement = getByTestId(`Button`);
    expect(currentElement).toBeTruthy();
    fireEvent.press(currentElement);
    expect(fn).toBeCalled();
  });
});
