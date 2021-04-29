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
  showShoppingCart() {
    const ref: any = this.$refs
    ref.spc.showDialog()
  }

  protected render() {
    return (
      <div class="home-wrapper">
        <shopping-cart ref="spc"></shopping-cart>
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