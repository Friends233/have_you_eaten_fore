<!--
 * @Description: 店铺列表页面
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'
import {Clf} from './index'
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
  protected render() {
    return (
      <div class="shoplist-wrapper">
        <eaten-header></eaten-header>
        <div class="shoplist">
          <el-breadcrumb class="shoplist-breadcrumb" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item to={{ name: 'Home' }}>首页</el-breadcrumb-item>
            <el-breadcrumb-item to={{ name: 'shoplist' }}>店铺列表</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="shoplist-classification">
          <div>
            <p>美食分类</p>
            <ul>
              <li>全部</li>
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
  }
}
</style>
