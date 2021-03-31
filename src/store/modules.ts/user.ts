/*
 * @Description: 
 * @Author: Friends233
 */
import { User } from '@/config'
import { Module } from 'vuex'
import storage from '@/storage'

interface State {
  userInfo: User;
  accessToken: string;
}

const ACESS_TOKEN = 'accessToken' 

export const user: Module<State, {}> = {
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
    SET_TOKEN: (state, token) => {
      state.accessToken = token
      if(token){
        storage.set(ACESS_TOKEN,token)
      }else {
        storage.remove(ACESS_TOKEN)
      }
    }
  },
  actions: {
  },
  modules: {
  }
}