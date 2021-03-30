/*
 * @Description: 接口
 * @Author: Friends233
 */
import axios, { AxiosPromise } from 'axios'

enum httpMethods {
  GET = 'get',
  POST = 'post',
  DELETE = 'delete',
  PUT = 'put'
}

const request = axios.create({
  baseURL: '/api',
  timeout: 2000
});


export default {
  get(url: string, params = {}): AxiosPromise {
    return request({
      method: httpMethods.GET,
      params: {
        ...params,
        time: new Date().getTime()
      },
      url,
    })
  },
  post(url: string, params = {}): AxiosPromise {
    return request({
      method: httpMethods.POST,
      data: params,
      url,
    })
  },
  delete(url: string, params = {}): AxiosPromise {
    return request({
      method: httpMethods.DELETE,
      params: {
        ...params,
        time: new Date().getTime()
      },
      url,
    })
  },
  put(url: string, params = {}): AxiosPromise {
    return request({
      method: httpMethods.PUT,
      data: params,
      url,
    })
  }
}