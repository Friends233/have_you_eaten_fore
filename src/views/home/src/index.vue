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

@Component({
  components: { EatenHeader, Carousel, ProductList,EatenFooter }
})
export default class HelloWorld extends Vue {
  protected render() {
    return (
      <div class="home-wrapper">
        <eaten-header show={true}></eaten-header>
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
</style>