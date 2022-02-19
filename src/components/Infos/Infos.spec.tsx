import * as React from 'react';
import { Infos } from './';
import { render } from '@testing-library/react-native';
import { weather, useDayHour } from '~/utils';

describe('Render Infos', () => {
  it('Should be Infos exist', () => {
    const { getByTestId } = render(<Infos {...{ weather }} />);
    const currentElement = getByTestId(`Infos`);
    expect(currentElement).toBeTruthy();
  });

  it('Infos has a correct temp value', () => {
    const { getByTestId } = render(<Infos {...{ weather }} />);
    const currentElement = getByTestId(`Infos:temp`);
    expect(currentElement).toBeTruthy();
    expect(currentElement.props.children).toBe('29º');
  });

  it('Infos has a correct max value', () => {
    const { getByTestId } = render(<Infos {...{ weather }} />);
    const currentElement = getByTestId(`Infos:max`);
    expect(currentElement).toBeTruthy();
    expect(currentElement.props.children).toBe('31º');
  });

  it('Infos has a correct min value', () => {
    const { getByTestId } = render(<Infos {...{ weather }} />);
    const currentElement = getByTestId(`Infos:min`);
    expect(currentElement).toBeTruthy();
    expect(currentElement.props.children).toBe('21º');
  });

  it('Infos has a correct day value', () => {
    const { getByTestId } = render(<Infos {...{ weather }} />);
    const { getDay } = useDayHour();
    const currentElement = getByTestId(`Infos:day`);
    expect(currentElement).toBeTruthy();
    expect(currentElement.props.children).toBe(getDay());
  });

  it('Infos has a correct city name value', () => {
    const { getByTestId } = render(<Infos {...{ weather }} />);
    const currentElement = getByTestId(`Infos:name`);
    expect(currentElement).toBeTruthy();
    expect(currentElement.props.children).toBe('Rio de Janeiro');
  });
});
