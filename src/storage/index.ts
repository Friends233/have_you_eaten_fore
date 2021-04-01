/*
 * @Description: 
 * @Author: Friends233
 */
class CustomStorage {
  get<T>(key: string): T | null | string {
    if (!key) return null
    let value = window.localStorage.getItem(key)
    try {
      value = JSON.parse(value!)
      return value
    } catch (err) {
      return value
    }
  }

  set<T>(key: string, value: T): void {
    if (!key) return
    if (Object.prototype.toString.call(value) === '[object Object]') {
      window.localStorage.setItem(key, JSON.stringify(value))
    } else {
      window.localStorage.setItem(key, String(value))
    }
  }

  remove(key: string): void {
    if (!key) return
    window.localStorage.removeItem(key)
  }
}

export default new CustomStorage()