<!--
 * @Description: 订单
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue, Watch } from 'vue-property-decorator'
import EatenHeader from '@/components/EatenHeader/index'
import EatenFooter from '@/components/EatenFooter/index'
import ProductCard from '@/components/productCard'
import { getShopList } from '@/api/home'

@Component({
  components: { EatenHeader, EatenFooter, ProductCard }
})
export default class SearchFood extends Vue {
  shopList = []

  created() {
    this.init()
  }

  async init() {
    const data = await getShopList()
    const ids = this.$route.params.ids.map((item: any) => {
      return item.shopId
    })

    const result = data.data.map((item: any) => {
      if (ids.includes(item.id)) {
        return item
      }
    })
    this.shopList = result
    console.log(this.shopList)
  }

  protected render() {
    return (
      <div class="search">
        <eaten-header></eaten-header>
        <ul class="product-list">
          {this.shopList.map((item) => {
            return (
              <li class="product-card-wrapper">
                <product-card card={item}></product-card>
              </li>
            )
          })}
        </ul>
        <eaten-footer></eaten-footer>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
@import '@/styles/constant.scss';
.product-list {
  padding-top: 3.13rem;
  margin-top: 0.93rem;
  position: relative;
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: space-around;
  &::after {
    content: '';
    clear: both;
    display: block;
  }
  .product-card-wrapper {
    margin: 0.31rem 0.7rem;
    // padding: 5px 11px;
    float: left;
  }
}
</style>
