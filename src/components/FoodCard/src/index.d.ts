/*
 * @Description: 
 * @Author: Friends233
 */

export interface UserApp {
  id?: string;
  name?: string;
  avatar?: string;
  rating?: number;
  content?: string;
  time?: string;
  imgUrl?: Array<string>;
}

export interface GoodDetails {
  id?: string;
  desc?: string;
  material?: string;
  taste?: string;
  priceDescription?: string;
  monthlySale?: string | number;
  favorableRate?: string | number;
  discount?: string | number;
  price?: number;
  packagingCosts?: number;
}