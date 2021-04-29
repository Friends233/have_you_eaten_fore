<!--
 * @Description: 首页
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'
import EatenHeader from '@/components/EatenHeader/index'
import Carousel from '@/components/Carousel/index'
import ProductList from '@/components/ProductList/index'
import EatenFooter from '@/components/EatenFooter/index'
import ShoppingCart from '@/components/Shoppingcart'

@Component({
  components: { EatenHeader, Carousel, ProductList, EatenFooter, ShoppingCart }
})
export default class HelloWorld extends Vue {
  $showCart: any

  get num() {
    return 0
  }

  protected render() {
    return (
      <div class="home-wrapper">
        <div class="top-cart" onClick={() => this.$showCart(true)}>
          <el-badge value={this.num}>
            <i class="el-icon-shopping-cart-1"></i>
          </el-badge>
        </div>
        <eaten-header show={false}></eaten-header>
        <div class="home-content">
          <carousel></carousel>
          <product-list></product-list>
        </div>
        <eaten-footer></eaten-footer>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
@import '@/styles/constant.scss';
.home-wrapper {
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
  .home-content {
    width: $bodyWidth;
    margin: 0 auto;
  }
}
@media screen and (max-width: 600px) {
  .home-content {
    width: $bodyMiniWidth !important;
  }
}
</style>