export interface Pin {
  id: number;
  value: string;
  hasBeenTried: boolean;
}

export interface State {
  pinList?: Pin[],
  selectedPin?: Pin
}
