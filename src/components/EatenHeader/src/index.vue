<!--
 * @Description: 导航栏
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Logo from '@/components/logo/index'
import { createRandomId } from '@/utils/index'
import ShoppingCart from '@/components/Shoppingcart'
import { Nav } from './index'
import { getFoodByName } from '@/api/all'

@Component({
  components: { Logo, ShoppingCart }
})
export default class EatenHeader extends Vue {
  [x: string]: any
  @Prop({ default: false, type: Boolean }) readonly show: boolean | undefined

  // 顶部的菜单
  topNavMenu: Array<Nav> = [
    {
      id: '1',
      routerLink: 'test1',
      value: '个人中心',
      children: [
        { id: '1-1', value: '我的订单', routerLink: 'order' },
        { id: '1-3', value: '我的收藏', routerLink: 'favorites' },
        { id: '1-2', value: '抵用券', routerLink: 'coupon' },
        { id: '1-4', value: '账户设置', routerLink: 'account' }
      ]
    },
    {
      id: '2',
      value: '手机访问',
      routerLink: 'test4'
    },
    {
      id: '3',
      value: '购物车',
      routerLink: 'test7',
      onClick: this.showShoppingCart
    },
    {
      id: '4',
      value: '网站导航',
      routerLink: 'test5',
      children: [
        { id: '3-1', value: '美团外卖', routerLink: 'test6' },
        { id: '3-2', value: '饿了么外卖', routerLink: 'test7' }
      ]
    }
  ]
  // 轮播旁的菜单
  headerNavMenu: Array<Nav> = [
    { id: createRandomId(), value: '美食外卖' },
    { id: createRandomId(), value: '超市便利' },
    { id: createRandomId(), value: '水果' },
    { id: createRandomId(), value: '跑腿代购' },
    { id: createRandomId(), value: '休闲玩乐' }
  ]

  searchContent = ''

  // 登陆状态
  get isLogin() {
    return this.$store.getters.loginStatus
  }

  get userName() {
    return this.$store.getters.userName
  }

  showShoppingCart() {
    this.$showCart(true)
  }

  handleSelect(key: string) {
    if (!key.includes('test')) {
      this.$router.push({ name: key })
    }
  }

  logOut() {
    this.$store.dispatch('Logout')
    this.$router.go(0)
  }

  goView(name = '') {
    if (name !== '') {
      console.log(name)
      this.$router.push({ name: name })
    }
  }

  async serachFood(keywords: string) {
    const data = await getFoodByName(keywords)
    this.$router.push({ name: 'search', params: { ids:data.data } })
  }

  renderTopNavMenu(ary: Array<Nav>) {
    return ary.map((item: Nav) => {
      if (item.children) {
        return (
          <el-submenu index={item.routerLink}>
            <template slot="title">{item.value}</template>
            {item.children.map((i: Nav) => {
              return <el-menu-item index={i.routerLink}>{i.value}</el-menu-item>
            })}
          </el-submenu>
        )
      } else {
        return (
          <el-menu-item index={item.routerLink}>
            <span onClick={() => item.onClick && item.onClick()}>{item.value}</span>
          </el-menu-item>
        )
      }
    })
  }

  protected render() {
    return (
      <div class="eaten-header">
        <div class="eaten-header-top">
          <div class="eaten-header-top-left">
            <div class="eaten-header-top-left-address">
              <i class="el-icon-map-location"></i>
              <span>北京</span>
              <a class="eaten-header-top-left-btn" href="#">
                切换城市
              </a>
              <span class="none-600">[门头沟区 大厂回族自治县 廊坊]</span>
            </div>
            <div class="eaten-header-top-left-user">
              <div v-show={!this.isLogin} class="isLoginF">
                <router-link class="orange" to={{ name: 'login' }}>
                  立即登录
                </router-link>
                <router-link to={{ name: 'register' }}>注册</router-link>
              </div>
              <div v-show={this.isLogin} class="isLoginT">
                <router-link class="orange" to={{ name: 'account' }}>
                  {this.userName}
                </router-link>
                <a href="#" onClick={this.logOut}>
                  注销
                </a>
              </div>
            </div>
          </div>
          <div class="user-ico none" onClick={() => this.$router.push({ name: 'account' })}>
            <i class="el-icon-user"></i>
          </div>
          <div class="eaten-header-top-right none-600">
            <el-menu default-active="activeIndex" mode="horizontal" onSelect={this.handleSelect}>
              {this.renderTopNavMenu(this.topNavMenu)}
            </el-menu>
          </div>
        </div>
        <div class="eaten-header-mid">
          <div class="eaten-header-mid-logo">
            <logo></logo>
          </div>
          <div class="eaten-header-mid-search">
            <el-input v-model={this.searchContent} placeholder="搜索店铺、美食或者标签"></el-input>
            <el-button
              type="primary"
              icon="el-icon-search"
              onClick={() => this.serachFood(this.searchContentF)}></el-button>
          </div>
        </div>
        <div v-show={this.show} class="eaten-header-nav">
          <ul>
            {this.headerNavMenu.map((item) => {
              return (
                <li key={item.id} class="eaten-header-nav-list">
                  {item.value}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
@import '@/styles/constant.scss';
.eaten-header {
  min-height: 197px;
  background: #fff;
  box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.1);
  &-top {
    width: 100%;
    background: #f8f8f8;
    box-sizing: border-box;
    font-size: 12px;
    color: #999;
    height: 40px;
    padding: 0 $padding;
    display: flex;
    justify-content: space-between;
    .user-ico {
      line-height: 40px;
      cursor: pointer;
      i {
        font-size: 15px;
      }
    }
    &-left {
      padding-top: 12px;
      display: flex;
      justify-content: space-between;
      &-address {
        display: flex;
        justify-content: space-between;
        height: 20px;
        i {
          padding-top: 3px;
        }
        a {
          &:hover {
            color: #fe8c00;
          }
          background: #f4f4f4;
          border: 1px solid #e5e5e5;
          border-radius: 2px;
          color: #666;
          margin: 0 4px;
          padding: 0 2px;
        }
      }
      &-user {
        & > div {
          display: flex;
          justify-content: space-between;
          margin-left: 30px;
          width: 100px;
          .orange {
            color: #fe8c00;
          }
        }
      }
    }
    &-right {
      ::v-deep .el-menu {
        background-color: #f8f8f8;
        height: 40px;
        border-bottom: none;
        .el-submenu > div {
          i {
            display: none;
          }
          height: 40px;
          line-height: 40px;
          border-bottom: none;
        }
      }
      ::v-deep .el-menu-item {
        height: 40px;
        line-height: 40px;
      }
    }
  }
  &-mid {
    width: $bodyWidth;
    margin: 30px auto;
    display: flex;
    &-logo {
      img {
        width: 126px;
        height: 46px;
      }
    }
    &-search {
      display: flex;
      width: 550px;
      margin: 6px auto;
      ::v-deep .el-input {
        margin-left: -46px;
        input {
          border-radius: 0;
        }
      }
      .el-button {
        height: 40px;
        width: 70px;
        border-radius: 0;
      }
    }
  }
  &-nav {
    width: $bodyWidth;
    padding: 0 $padding;
    margin-top: 2px;
    ul {
      display: flex;
      justify-content: space-between;
      width: 500px;
      margin: 0 auto;
    }
    &-list {
      color: #222;
      font-weight: 700;
      font-size: 16px;
      cursor: pointer;
      &:hover {
        color: #fbc700;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .eaten-header {
    &-mid {
      flex-wrap: wrap;
      width: $bodyMiniWidth;
      &-logo {
        margin: 0 auto;
      }
      &-search {
        ::v-deep .el-input {
          margin-left: 0;
        }
      }
    }
    &-nav {
      display: none;
    }
  }
}
</style>