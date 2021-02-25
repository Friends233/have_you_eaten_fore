<!--
 * @Description: 导航栏
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'
import Logo from '@/components/logo/index'
import { createRandomId } from '@/utils/index'
import { Nav } from './index'

@Component({
  components: {Logo}
})
export default class EatenHeader extends Vue {
  // 顶部的菜单
  topNavMenu: Array<Nav> = [
    {
      id: '1',
      value: '个人中心',
      children: [
        { id: '1-1', value: '我的订单' },
        { id: '1-2', value: '我的购物车' },
        { id: '1-3', value: '我的收藏' },
        { id: '1-4', value: '账户设置' }
      ]
    },
    {
      id: '2',
      value: '菜单2',
      children: [
        { id: '2-1', value: '菜单1' },
        { id: '2-2', value: '菜单2' },
        { id: '2-3', value: '菜单3' }
      ]
    },
    {
      id: '3',
      value: '菜单3',
      children: [
        { id: '3-1', value: '菜单1' },
        { id: '3-2', value: '菜单2' },
        { id: '3-3', value: '菜单3' }
      ]
    },
    {
      id: '4',
      value: '菜单4'
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

  handleSelect(key: string, keyPath: Array<number>) {
    console.log(key, keyPath)
  }

  renderTopNavMenu(ary: Array<Nav>) {
    return ary.map((item: Nav) => {
      if (item.children) {
        return (
          <el-submenu index={item.id}>
            <template slot="title">{item.value}</template>
            {item.children.map((i: Nav) => {
              return <el-menu-item index={i.id}>{i.value}</el-menu-item>
            })}
          </el-submenu>
        )
      } else {
        return <el-menu-item index={item.id}>{item.value}</el-menu-item>
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
              <span>[门头沟区 大厂回族自治县 廊坊]</span>
            </div>
            <div class="eaten-header-top-left-user">
              <div>
                <a href="#" class="orange">
                  立即登录
                </a>
                <a href="#">注册</a>
              </div>
            </div>
          </div>
          <div class="eaten-header-top-right">
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
            <el-button type="primary" icon="el-icon-search"></el-button>
          </div>
        </div>
        <div class="eaten-header-nav">
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
  width: 100%;
  min-height: 197px;
  background: #fff;
  box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.1);
  &-top {
    width: $bodyWidth;
    background: #f8f8f8;
    width: 100%;
    box-sizing: border-box;
    font-size: 12px;
    color: #999;
    height: 40px;
    padding: 0 $padding;
    display: flex;
    justify-content: space-between;
    &-left {
      padding-top: 12px;
      display: flex;
      justify-content: space-between;
      &-address {
        display: flex;
        justify-content: space-between;
        width: 274px;
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
          width: 80px;
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
</style>