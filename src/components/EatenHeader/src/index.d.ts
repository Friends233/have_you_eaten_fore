/*
 * @Description: 
 * @Author: Friends233
 */

export interface Nav {
  id: string;
  value: string;
  children?: Array<Nav>;
  routerLink?: string;
  onClick?: Function;
  onMouseover?: Function;
}