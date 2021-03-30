/*
 * @Description: 
 * @Author: Friends233
 */
export interface User {
  readonly _id?: string;
  userName: string;
  userPass: string;
  userLevel?: number;
  userAddress?: string;
}