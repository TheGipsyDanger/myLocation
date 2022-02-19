import * as React from 'react';
import { useState, useCallback } from 'react';
import { createContext, useContextSelector } from 'use-context-selector';
import { ILocationContext, ILocationCoords, IWeather } from '~/utils';

export const LocationContext = createContext<ILocationContext>(
  {} as ILocationContext
);

export const LocationProvider: React.FC = ({ children }) => {
  const [coords, setCoords] = useState<ILocationCoords>({} as ILocationCoords);
  const [weather, setWeather] = useState<IWeather>({} as IWeather);

  const updateCoords = useCallback(
    (coords: ILocationCoords) => {
      setCoords(coords);
    },
    [setCoords]
  );

  const updateWeather = useCallback(
    (weather: IWeather) => {
      setWeather(weather);
    },
    [setCoords]
  );

  return (
    <LocationContext.Provider
      value={{
        coords,
        weather,
        updateCoords,
        updateWeather,
      }}>
      {children}
    </LocationContext.Provider>
  );
};

export function useLocation(): ILocationContext {
  return {
    coords: useContextSelector(LocationContext, location => location.coords),
    weather: useContextSelector(LocationContext, location => location.weather),
    updateWeather: useContextSelector(
      LocationContext,
      location => location.updateWeather
    ),
    updateCoords: useContextSelector(
      LocationContext,
      location => location.updateCoords
    ),
  };
}
