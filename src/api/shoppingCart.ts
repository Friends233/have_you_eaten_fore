/*
 * @Description: 
 * @Author: Friends233
 */
import api from './api'

/** 购物车 */
export function getSptAll() {
  return api.get('/shoppingcart/all')
}

/** 获取购物车 */
export function getSpt(id = ''){
  return api.get(`/shoppingcart/${id}`)
}