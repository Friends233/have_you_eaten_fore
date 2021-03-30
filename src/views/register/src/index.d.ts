/*
 * @Description: 
 * @Author: Friends233
 */
import { User } from '@/config'

export interface Form {
  password?: string;
  checkPass?: string;
  phoneNumber?: number;
  userName?: string;
  verificationCode?: string;
  checked?: boolean;
}

export { User }