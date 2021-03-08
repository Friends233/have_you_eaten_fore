<!--
 * @Description: 轮播图
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'
import { FoodType, CarouselImg } from './index'

@Component({
  components: {}
})
export default class Carousel extends Vue {
  avatarImg: string = require('@/assets/avatar.jpg')
  download: string = require('@/assets/download-qr.png')

  carouselList: Array<CarouselImg> = [
    { id: '1', url: 'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png' },
    { id: '2', url: 'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg' },
    { id: '3', url: 'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg' },
    { id: '4', url: 'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg' }
  ]
  foodTypeList: Array<FoodType> = [
    { id: '1', label: '便当简餐', icon: 'el-icon-tableware', color: '#ff8200' },
    { id: '2', label: '汉堡披萨', icon: 'el-icon-potato-strips', color: '#ffb500' },
    { id: '3', label: '奶茶果汁', icon: 'el-icon-ice-drink', color: '#ff4081' },
    { id: '4', label: '粥食面点', icon: 'el-icon-food', color: '#ffb500' },
    { id: '5', label: '米粉汤捞', icon: 'el-icon-food', color: '#03a9f4' },
    { id: '6', label: '川湘菜', icon: 'el-icon-fork-spoon', color: 'red' },
    { id: '7', label: '炸鸡炸串', icon: 'el-icon-chicken', color: '#ffb500' },
    { id: '8', label: '地方菜', icon: 'el-icon-burger', color: '#00bf96' },
    { id: '9', label: '美味面馆', icon: 'el-icon-food', color: '#ffb500' },
    { id: '10', label: '特色小吃', icon: 'el-icon-ice-cream-square', color: '#ff4c52' },
    { id: '11', label: '龙虾烧烤', icon: 'el-icon-watermelon', color: '#ff4c52' },
    { id: '12', label: '香辣火锅', icon: 'el-icon-dish-1', color: 'red' },
    { id: '13', label: '咖啡甜品', icon: 'el-icon-lollipop', color: '#ffb500' },
    { id: '14', label: '日韩料理', icon: 'el-icon-knife-fork', color: '#7bdefc' },
    { id: '15', label: '冬季暖汤', icon: 'el-icon-tableware', color: '#ffb500' }
  ]

  protected render() {
    return (
      <div class="carousel">
        <el-card class="carousel-card-left" shadow="never">
          <h2 class="carousel-card-left-title">美食分类</h2>
          <ul class="carousel-card-left-menu">
            {this.foodTypeList.map((item) => {
              return (
                <li class="food-type" onClick={() => this.$router.push({ name: 'shoplist' })}>
                  <i class={item.icon} style={'color:' + item.color + ';'}></i>
                  <a href="#">{item.label}</a>
                </li>
              )
            })}
          </ul>
        </el-card>
        <el-carousel trigger="click" height="446px">
          {this.carouselList.map((item) => {
            return (
              <li key={item.id} onClick={() => this.$router.push({ name: 'shop' })}>
                <el-carousel-item>
                  <img width="949" height="446" src={item.url} />
                </el-carousel-item>
              </li>
            )
          })}
        </el-carousel>
        <div class="carousel-card-right">
          <el-card shadow="never">
            <img class="avatar" src={this.avatarImg} />
            <p>Hi！你好</p>
            <router-link class="a-button" to={{ name: 'register' }}>
              注册
            </router-link>
            <router-link class="a-button" to={{ name: 'login' }}>
              立即登录
            </router-link>
          </el-card>
          <el-card shadow="never">
            <img width="95" src={this.download}></img>
            <p class="download-label">扫码手机访问</p>
          </el-card>
        </div>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
.carousel {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  .el-carousel {
    width: 870px;
  }
  &-card-left {
    width: 170px;
    margin-top: -45px;
    ::v-deep .el-card__body {
      padding: 0;
    }
    &-title {
      color: #222222;
      font-size: 16px;
      font-weight: 700;
      margin-left: 20px;
    }
    &-menu {
      .food-type {
        font-size: 13px;
        line-height: 20px;
        height: 20px;
        color: #646464;
        cursor: pointer;
        padding: 4px;
        i {
          margin-left: 10px;
        }
        a {
          margin-left: 5px;
        }
        &:hover {
          background-color: rgba(255, 150, 0, 0.08);
          a {
            color: #222222;
            font-weight: 700;
          }
          i {
            font-weight: 700;
          }
        }
      }
    }
  }
  &-card-right {
    width: 228px;
    text-align: center;
    .el-card:last-child {
      margin-top: 5px;
    }
    .avatar {
      width: 62px;
      height: 62px;
      border-radius: 50%;
      border: 4px solid #e5e5e5;
    }
    .a-button {
      width: 118px;
      text-align: center;
      margin: 10px auto 15px auto;
      background: #fff;
      border: 1px solid #e5e5e5;
      border-radius: 40px;
      font-size: 14px;
      color: #333;
      transition: background-color 0.5s;
      display: block;
      line-height: 38px;
      &:hover {
        background-color: #f6f6f6;
        transition: background-color 0.5s;
      }
    }
    .download-label {
      margin: 0;
    }
  }
}
</style>