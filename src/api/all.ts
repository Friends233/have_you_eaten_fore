/*
 * @Description: 通用接口
 * @Author: Friends233
 */
import api from './api'

/** 获得类别列表 */
export function getSortAll() {
  return api.get('/sort/all')
}

/** 食品详情 */
export function getFood(id = '') {
  return api.get(`/food/serarchId/${id}`)
}

/** 搜索 */
export function getFoodByName(params = {}) {
  return api.get(`/food/serarchNm`,params)
}