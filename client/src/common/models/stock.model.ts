import {Thickness} from './glass.model';

export interface Stock {
  id: number;
  name: string;
  description: string;
  thickness: Thickness;
  width: number;
  height: number;
  priceA: number;
  priceT: number;
  priceCut: number;
};