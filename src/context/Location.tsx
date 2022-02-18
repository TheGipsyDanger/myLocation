import * as React from 'react';
import { useState, useCallback } from 'react';
import { createContext, useContextSelector } from 'use-context-selector';
import { ILocationContext, ILocationCoords } from '~/utils';

export const LocationContext = createContext<ILocationContext>(
  {} as ILocationContext
);

export const LocationProvider: React.FC = ({ children }) => {
  const [coords, setCoords] = useState<ILocationCoords>({} as ILocationCoords);

  const updateCoords = useCallback(
    (coords: ILocationCoords) => {
      setCoords(coords);
    },
    [setCoords]
  );

  return (
    <LocationContext.Provider
      value={{
        coords,
        updateCoords,
      }}>
      {children}
    </LocationContext.Provider>
  );
};

export function useLocation(): ILocationContext {
  return {
    coords: useContextSelector(LocationContext, location => location.coords),
    updateCoords: useContextSelector(
      LocationContext,
      location => location.updateCoords
    ),
  };
}
