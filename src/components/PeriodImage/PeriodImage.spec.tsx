import * as React from 'react';
import { PeriodImage } from './';
import { render } from '@testing-library/react-native';
import { periodImage } from '~/utils';

jest.mock('../../context/Location', () => {
  return {
    useLocation: () => ({
      weather: {
        image: '',
      },
    }),
  };
});

describe('Render PeriodImage', () => {
  it('Should be PeriodImage exist', () => {
    const { getByTestId } = render(<PeriodImage {...periodImage} />);
    const currentElement = getByTestId(`PeriodImage`);
    expect(currentElement).toBeTruthy();
  });

  it('PeriodImage has a correct props', () => {
    const { getByTestId } = render(<PeriodImage {...periodImage} />);
    const currentElement = getByTestId(`PeriodImage`);
    expect(currentElement.props.width).toBe(periodImage.imageWidth);
    expect(currentElement.props.height).toBe(periodImage.imageHeight);
    expect(currentElement.props.top).toBe(-periodImage.adjustPosition);
    expect(currentElement.props.left).toBe(periodImage.adjustPosition);
  });
});
