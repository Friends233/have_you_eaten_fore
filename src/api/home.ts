/*
 * @Description: 首页
 * @Author: Friends233
 */

import api from './api'

/** 首页推荐列表 */
export function getHome() {
  return api.get('/home/home_001')
}

/** 店铺详情 */
export function getShop(id = '') {
  return api.get(`/shop/${id}`)
}