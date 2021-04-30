/*
 * @Description: 
 * @Author: Friends233
 */
export interface Clf {
  id: string;
  label: string;
  content: Array<FoodType>;
}

export interface FoodType {
  id: string;
  label: string;
  icon: string;
  color: string;
}

export interface Shop {
  id: string;
  imgUrl: string;
  label: string;
  rating: number;
  desc: string;
  price: number;
  content?: Array<string>;
  [propName: string]: string;
}