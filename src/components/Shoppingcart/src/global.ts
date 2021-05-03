/*
 * @Description: 全局挂载购物车
 * @Author: Friends233
 */
import ShoppingCart from './index.vue'
import Vue from 'vue'
const spCart: any = Vue.extend(ShoppingCart)

const install = () => {
  Object.defineProperty(Vue.prototype, '$showCart', {
    get() {
      const showCart = (id = '', flag = false) => {
        const instance = new spCart()
        instance.vm = instance.$mount()
        document.body.appendChild(instance.vm.$el)
        instance.showDialog(id, flag)
      }
      return showCart
    }
  })
}
export default install