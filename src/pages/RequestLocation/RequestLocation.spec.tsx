import * as React from 'react';
import { RequestLocation } from './';
import { RequestLocation as RequestLocationLayout } from './Layout/index';
import { render, fireEvent } from '@testing-library/react-native';

const fn = jest.fn();
const mockFN = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockFN,
    }),
  };
});

describe('Render RequestLocation', () => {
  it('Should be RequestLocation exist', () => {
    const { getByTestId } = render(<RequestLocation />);
    const currentElement = getByTestId(`RequestLocation`);
    expect(currentElement).toBeTruthy();
  });
});

describe('Render RequestLocationLayout', () => {
  it('RequestLocationLayout render all Components correct', () => {
    const { getByTestId } = render(<RequestLocationLayout onPress={fn} />);
    expect(getByTestId(`RequestLocation:text`)).toBeTruthy();
    expect(getByTestId(`Button`)).toBeTruthy();
  });

  it('RequestLocationLayout render Button correct', () => {
    const { getByTestId } = render(<RequestLocationLayout onPress={fn} />);
    const currentElement = getByTestId(`Button`);
    expect(currentElement).toBeTruthy();
    expect(getByTestId(`Button:label`).props.children).toBe('Habilitar');
    fireEvent.press(getByTestId(`Button`));
    expect(fn).toBeCalled();
  });

  it('RequestLocationLayout render Text correct', () => {
    const { getByTestId } = render(<RequestLocationLayout onPress={fn} />);
    const currentElement = getByTestId(`RequestLocation:text`);
    expect(currentElement).toBeTruthy();
    expect(currentElement.props.children).toBe(
      'Para prosseguir, precisamos\nque habilite sua localização'
    );
  });
});
