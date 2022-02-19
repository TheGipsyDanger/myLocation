export interface IWeatherResp {
  weather: IWeatherArr[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  name: string;
}

export interface IWeatherArr {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IWeather {
  name: string;
  temp: number;
  min: number;
  max: number;
  image: string;
}
