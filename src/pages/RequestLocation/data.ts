export interface IRequestLocation {
  data?: any;
}

export interface IRequestLocationLayout extends IRequestLocation {
  press(): void;
}
