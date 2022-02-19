import { sunny } from '~/images';

export const weather = {
  name: 'Rio de Janeiro',
  temp: 29,
  min: 21,
  max: 31,
  image: sunny,
};

export const weatherResp = {
  weather: [
    {
      id: 802,
      main: 'Clouds',
      description: 'scattered clouds',
      icon: '',
    },
  ],
  main: {
    temp: 25.5,
    feels_like: 26.72,
    temp_min: 23.97,
    temp_max: 25.5,
    pressure: 1009,
    humidity: 100,
  },
  name: 'Campo Grande',
};
