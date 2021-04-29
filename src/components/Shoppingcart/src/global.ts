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
      const showCart = (flag: boolean) => {
        const instance = new spCart()
        instance.vm = instance.$mount()
        document.body.appendChild(instance.vm.$el)
        if(flag) {
          instance.showDialog()
        }else {
          instance.hideDialog()
        }
      }
      return showCart
    }
  })
}
export default install