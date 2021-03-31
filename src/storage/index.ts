/*
 * @Description: 
 * @Author: Friends233
 */
class CustomStorage {
  get<T>(key: string): T | void {
    if(!key) return 
    const value: string = window.localStorage.getItem(key) as string
    return JSON.parse(value)
  }

  set<T>(key: string,value: T): void {
    if(!key) return 
    if (Object.prototype.toString.call(value) === '[object Object]') {
      window.localStorage.setItem(key,JSON.stringify(value))
    }
  }

  remove(key: string): void {
    if(!key) return
    window.localStorage.removeItem(key)
  }
}

export default new CustomStorage()