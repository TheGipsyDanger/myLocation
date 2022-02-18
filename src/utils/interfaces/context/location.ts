export interface ILocationCoords {
  latitude: number;
  longitude: number;
  speed: number | null;
  heading: number | null;
  accuracy: number | null;
  altitude: number | null;
  altitudeAccuracy: number | null;
}
