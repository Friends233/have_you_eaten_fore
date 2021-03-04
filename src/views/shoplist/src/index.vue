<!--
 * @Description: 店铺列表页面
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'
import { Clf, Shop } from './index'
import EatenHeader from '@/components/EatenHeader/index'
import EatenFooter from '@/components/EatenFooter/index'

@Component({
  components: { EatenHeader, EatenFooter }
})
export default class ShopList extends Vue {
  classification: Array<Clf> = [
    {
      id: '1',
      label: '美食分类',
      content: [
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
    }
  ]
  shoplist: Array<Shop> = [
    {
      id: '1001',
      label: '望京三姐·地桌烤肉（望京店）',
      imgUrl: 'https://img.meituan.net/msmerchant/1f6bfaff2a4651ddef09c408b9b7267778400.jpg@220w_125h_1e_1c',
      rating:4.6,
      desc:'朝阳区望京西园四区420号楼420-5南侧部分',
      price:110
    }
  ]
  protected render() {
    return (
      <div class="shoplist-wrapper">
        <eaten-header></eaten-header>
        <div class="shoplist">
          <el-breadcrumb class="shoplist-breadcrumb" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item to={{ name: 'Home' }}>首页</el-breadcrumb-item>
            <el-breadcrumb-item to={{ name: 'shoplist' }}>店铺列表</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="shoplist-classification">
            {this.classification.map((item) => {
              return (
                <div>
                  <p>{item.label}</p>
                  <ul>
                    <li>全部</li>
                    {item.content &&
                      item.content.map((i) => {
                        return <li>{i.label}</li>
                      })}
                  </ul>
                </div>
              )
            })}
          </div>
          <div class="shoplist-list">
            <div class="shoplist-list-sort">
              <a href="#">默认</a>
              <a href="#">销量</a>
              <a href="#">价格</a>
              <a href="#">好评最多</a>
            </div>
            <ul class="shoplist-list-content">
              <li>1</li>
            </ul>
          </div>
        </div>
        <eaten-footer></eaten-footer>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
@import '@/styles/constant.scss';
.shoplist-wrapper {
  .shoplist {
    width: $bodyWidth;
    margin: 20px auto;
    &-classification {
      border: 1px solid #e5e5e5;
      background: #fff;
    }
    &-list {
      background: #fff;
      border: 1px solid #e5e5e5;
      margin-top: 15px;
      padding: 0 20px;
    }
  }
}
</style>
