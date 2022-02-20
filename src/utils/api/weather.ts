import { API } from './API';
import { OPEN_WEATHER_KEY } from '~/configs';
import { IWeatherResp } from '~/utils';

export async function getWeather(
  lat: number,
  lon: number
): Promise<IWeatherResp | undefined> {
  try {
    const { data } = await API.get(
      `?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_KEY}&units=metric`
    );
    return data;
  } catch (error) {}
}
