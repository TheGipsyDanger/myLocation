// import { API } from './API';
import api from 'axios';
import { OPEN_WEATHER_KEY } from '~/configs';
import { IWeatherResp } from '~/utils';

export async function getWeather(
  lat: number,
  lon: number
): Promise<IWeatherResp | undefined> {
  try {
    // const { data } = await API.get(
    //   `?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_KEY}&units=metric&lang=pt_br`
    // );

    return {
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
  } catch (error) {}
}
