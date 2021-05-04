<template>
  <div>
    <div class="top-cart" @click="() => this.$showCart()">
      <el-badge :value="num">
        <i class="el-icon-shopping-cart-1"></i>
      </el-badge>
    </div>
    <router-view id="app"></router-view>
  </div>
</template>

<script>
import { getSpt } from '@/api/shoppingCart'
import storage from '@/storage'

export default {
  name: 'App',
  data: function () {
    return {
      num: 0
    }
  },
  mounted() {
    this.$EventBus.$on('refershCart', (number) => {
      this.num = number
    })
    const userinfo = storage.get('userInfo')
    if (userinfo.id) {
      getSpt(userinfo.id || '')
        .then((res) => {
          let num = 0
          res.data.content.forEach((item) => {
            num += item.number
          })
          this.num = num
        })
        .catch((err) => {
          this.num = 0
        })
    } else {
      this.num = 0
    }
  }
}
</script>

<style lang="scss">
.top-cart {
  position: fixed;
  right: 50px;
  bottom: 80px;
  border: 1px solid #000;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  z-index: 99;
  &:hover {
    border-color: #409eff;
    i {
      color: #409eff;
    }
  }
  i {
    font-size: 35px;
    color: #000;
  }
}
</style>
