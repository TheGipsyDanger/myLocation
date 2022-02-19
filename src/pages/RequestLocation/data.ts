export interface IRequestLocation {
  data?: any;
}

export interface IRequestLocationLayout extends IRequestLocation {
  onPress(): void;
}
