import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/goods',
    name: 'goods',
    component: () => import('@/views/Goods.vue')
  },
  {
    path: '/shoplist',
    name: 'shoplist',
    component: () => import('@/views/ShopList.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('@/views/Shop.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
