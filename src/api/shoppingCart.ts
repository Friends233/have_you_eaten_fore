/*
 * @Description: 
 * @Author: Friends233
 */
import api from './api'

/** 测试 */
export function getUserAll() {
  return api.get('/user/all')
}

/** 登录 */
export function userLogin(params = {}){
  return api.post('/user/login',params)
}