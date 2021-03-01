<!--
 * @Description: 店铺详情页面
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'
import EatenHeader from '@/components/EatenHeader/index'
import EatenFooter from '@/components/EatenFooter/index'

@Component({
  components: { EatenHeader, EatenFooter }
})
export default class Shop extends Vue {
  protected render() {
    return (
      <div class="shop-wrapper">
        <eaten-header></eaten-header>
        <div class="shop">shop</div>
        <eaten-footer></eaten-footer>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
</style>
