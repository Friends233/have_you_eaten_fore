/*
 * @Description: 
 * @Author: Friends233
 */
import { User } from '@/config'
import { Module } from 'vuex'
import storage from '@/storage'
import { userLogin } from '@/api'

interface State {
  userInfo: User;
  accessToken: string;
}

enum UserModule {
  ACESS_TOKEN = 'accessToken',
  USER_INFO = 'userInfo'
}

export default {
  state: {
    userInfo: {},
    accessToken: ''
  },
  getters: {
    userName: state => state.userInfo.userName,
    userLevel: state => state.userInfo.userLevel,
    userAddress: state => state.userInfo.userAddress,
    token: state => state.accessToken
  },
  mutations: {
    setToken(state, token) {
      state.accessToken = token
      if (token) {
        storage.set(UserModule.ACESS_TOKEN, token)
      } else {
        storage.remove(UserModule.ACESS_TOKEN)
      }
    },
    setUserInfo(state, userInfo) {
      state.accessToken = userInfo
      if (userInfo) {
        storage.set(UserModule.USER_INFO, userInfo)
      } else {
        storage.remove(UserModule.USER_INFO)
      }
    }
  },
  actions: {
    async Login({ commit, state }, user: User) {
      const res: any = await userLogin(user)
      if (res.code == 1) {
        [state.accessToken, state.userInfo] = [res.access_token, res.userInfo]
        commit('setToken', res.data.access_token)
        commit('setUserInfo', res.data.userInfo)
        return Promise.resolve(res.message)
      } else {
        return Promise.reject(res.message)
      }
    }
  }
} as Module<State, {}>