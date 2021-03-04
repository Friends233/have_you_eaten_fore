/*
 * @Description: 
 * @Author: Friends233
 */
export interface Clf {
  id?: string;
  label?: string;
  content?: Array<FoodType>;
}

export interface FoodType {
  id: string;
  label: string;
  icon: string;
  color: string;
}