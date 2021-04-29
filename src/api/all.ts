/*
 * @Description: 通用接口
 * @Author: Friends233
 */
import api from './api'

/** 获得类别列表 */
export function getSortAll() {
  return api.get('/sort/all')
}