/*
 * @Description: 
 * @Author: Friends233
 */
import api from '@/api/index'

export function getUserAll() {
  return api.get('/user/all')
}