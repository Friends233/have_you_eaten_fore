import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/home'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register')
  },
  {
    path: '/food',
    name: 'food',
    component:() => import('@/views/food')
  },
  {
    path: '/shoplist',
    name: 'shoplist',
    component: () => import('@/views/shoplist')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('@/views/shop')
  }
]

const router = new VueRouter({
  routes
})

export default router
