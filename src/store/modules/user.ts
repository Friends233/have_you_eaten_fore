/*
 * @Description: 
 * @Author: Friends233
 */
import { User } from '@/config'
import { Module } from 'vuex'
import storage from '@/storage'
import { userLogin, refreshUser } from '@/api'

interface State {
  userInfo: User;
  accessToken: string;
}

enum UserModule {
  ACESS_TOKEN = 'hxdAccessToken',
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
    userPhone: state => state.userInfo.userPhone,
    userPass: state => state.userInfo.userPass,
    userId: state => state.userInfo.id,
    token: state => state.accessToken,
    loginStatus: state => {
      if (state.accessToken != '') {
        return true
      } else {
        return false
      }
    }
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
      state.userInfo = userInfo
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
    },
    Logout({ commit, state }) {
      [state.accessToken, state.userInfo] = ['', {}]
      commit('setToken')
      commit('setUserInfo')
    },
    async refreshUserInfo({ commit, state }) {
      enum UserModule {
        ACESS_TOKEN = 'hxdAccessToken',
        USER_INFO = 'userInfo'
      }
      try {
        const res: any = await refreshUser({ token: storage.get(UserModule.ACESS_TOKEN) })
        if (res.code == 1) {
          const userInfo: User = {
            _id: res.data.userInfo._id,
            id: res.data.userInfo.id,
            userName: res.data.userInfo.user_name,
            userAddress: res.data.userInfo.user_address,
            userLevel: res.data.userInfo.user_level,
            userPass: res.data.userInfo.user_pass,
            userPhone: res.data.userInfo.user_phone
          }
          commit('setToken', res.data.access_token)
          commit('setUserInfo', userInfo)
        } else {
          commit('setToken', '')
          commit('setUserInfo', {})
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
} as Module<State, {}>