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
    component: () => import('@/views/food')
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
  },
  {
    path: '/shoppingcart',
    name: 'shoppingCart',
    component: () => import('@/views/shoppingcart')
  },
  {
    path: '/userInfo',
    name: 'userInfo',
    component: () => import('@/views/userInfo'),
    children: [
      {
        path: '/order',
        name: 'order',
        component: () => import('@/views/order')
      },
      {
        path: '/account',
        name: 'account',
        component: () => import('@/views/account')
      },
      {
        path: '/coupon',
        name: 'coupon',
        component: () => import('@/views/coupon')
      },
      {
        path: '/favorites',
        name: 'favorites',
        component: () => import('@/views/favorites')
      },
    ]
  }
]

export const router = new VueRouter({
  routes
})

export default router
