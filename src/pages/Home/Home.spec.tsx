import * as React from 'react';
import 'react-native';
import { Home } from './';
import { Home as HomeLayout } from './Layout/index';
import { render, fireEvent } from '@testing-library/react-native';
import { weatherResp, weather, periodImage, useDayHour } from '~/utils';
import * as WeatherService from '../../utils/api/weather';

const fn = jest.fn();

function defineProps(isLoading = true) {
  return {
    ...periodImage,
    weather,
    isLoading,
    update: fn,
  };
}

jest.mock('../../context/Location', () => {
  return {
    useLocation: () => ({
      weather: {
        image: '',
      },
    }),
  };
});

jest.mock('../../utils/api/weather');

const WeatherServiceMock = WeatherService as jest.Mocked<typeof WeatherService>;

describe('Render Home', () => {
  it('Should be Home exist', () => {
    const { getByTestId } = render(<Home />);
    const currentElement = getByTestId(`Home`);
    expect(currentElement).toBeTruthy();
  });
});

describe('render HomeLayout', () => {
  it('HomeLayout render loading indicator', () => {
    const { getByTestId } = render(<HomeLayout {...defineProps()} />);
    const currentElement = getByTestId(`Home:loading`);
    expect(currentElement).toBeTruthy();
  });

  it('HomeLayout render loading indicator', () => {
    const { getByTestId } = render(<HomeLayout {...defineProps(false)} />);
    const currentElement = getByTestId(`Home:info`);
    expect(currentElement).toBeTruthy();
  });

  it('HomeLayout render all Components correct', () => {
    const { getByTestId } = render(<HomeLayout {...defineProps(false)} />);
    expect(getByTestId(`Button`)).toBeTruthy();
    expect(getByTestId(`Infos`)).toBeTruthy();
    expect(getByTestId(`PeriodImage`)).toBeTruthy();
  });

  it('HomeLayout render Button correct', () => {
    const { getByTestId } = render(<HomeLayout {...defineProps(false)} />);
    expect(getByTestId(`Button`)).toBeTruthy();
    expect(getByTestId(`Button:label`).props.children).toBe('Atualizar');
    fireEvent.press(getByTestId(`Button`));
    expect(fn).toBeCalled();
  });

  it('HomeLayout render Infos correct', () => {
    const { getDay } = useDayHour();
    const { getByTestId } = render(<HomeLayout {...defineProps(false)} />);
    expect(getByTestId(`Infos`)).toBeTruthy();
    expect(getByTestId(`Infos:temp`).props.children).toBe('29º');
    expect(getByTestId(`Infos:max`).props.children).toBe('31º');
    expect(getByTestId(`Infos:min`).props.children).toBe('21º');
    expect(getByTestId(`Infos:day`).props.children).toBe(getDay());
    expect(getByTestId(`Infos:name`).props.children).toBe('Rio de Janeiro');
  });

  it('HomeLayout render PeriodImage correct', () => {
    const { getByTestId } = render(<HomeLayout {...defineProps(false)} />);
    const currentElement = getByTestId(`PeriodImage`);
    expect(currentElement.props.width).toBe(periodImage.imageWidth);
    expect(currentElement.props.height).toBe(periodImage.imageHeight);
    expect(currentElement.props.top).toBe(-periodImage.adjustPosition);
    expect(currentElement.props.left).toBe(periodImage.adjustPosition);
  });
});

describe('Home Functions', () => {
  it('Test getWeather request function', async () => {
    WeatherServiceMock.getWeather.mockResolvedValueOnce(weatherResp);
    const result = await WeatherService.getWeather(0, 0);
    expect(result).toBe(weatherResp);
  });
});
