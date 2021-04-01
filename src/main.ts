import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入全局样式
import '@/styles/index.scss'

// 引入element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false;

// 根据token刷新用户信息到store
(function refreshUserInfo() {
  store.dispatch('refreshUserInfo')
})();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
