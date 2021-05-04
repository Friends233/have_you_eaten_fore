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
export function getSpt(id = '') {
  return api.get(`/shoppingcart/${id}`)
}

/** 添加 */
export function addFood(params = {}) {
  return api.post(`/shoppingcart/shopping`, params)
}

/** 清空 */
export function clearAll(id = '') {
  return api.post(`/shoppingcart/clear/${id}`,)
}

/** 移除 */
export function removeFood(params = {}) {
  return api.post(`/shoppingcart/remove`, params)
}

/** 结算 */
export function submitCart(params = {}) {
  return api.post(`/shoppingcart/submit`, params)
}

