/*
 * @Description: 一些公共的方法
 * @Author: Friends233
 */

/**
 * @description: 数据对象的深度克隆
 * @param {object} obj
 * @return {object}
 */ 
export function deepClone(obj: object): object {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * @description: 生成随机id
 * @return {String}
 */
export function createRandomId(): string {
  return (
    'id-' +
    (Math.random() * 10000000).toString(16).substr(0, 4) +
    '-' +
    new Date().getTime() +
    '-' +
    Math.random()
      .toString()
      .substr(2, 5)
  )
}