<!--
 * @Description: 订单
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue, Watch } from 'vue-property-decorator'
import storage from '@/storage'
import EatenHeader from '@/components/EatenHeader/index'
import EatenFooter from '@/components/EatenFooter/index'
import ProductCard from '@/components/productCard'
import { getShopList } from '@/api/home'

@Component({
  components: { EatenHeader, EatenFooter, ProductCard }
})
export default class SearchFood extends Vue {
  shopList = []
  shopIds: number[] = []

  created() {
    this.init()
  }

  async init() {
    window.onbeforeunload = function (e: any) {
      e.returnValue = 'stop'
      return stop
    }
    const data = await getShopList()
    const ids = this.$route.params.ids.map((item: any) => {
      return item.shopId
    })
    console.log(ids,data.data)
    const result = data.data.filter((item: any) => {
      return ids.includes(item.id)
    })
    this.shopList = result
    console.log(this.shopList)
  }

  protected render() {
    return (
      <div class="search">
        <eaten-header></eaten-header>
        <div class="search-content">
          <p class="lable">搜索结果</p>
          <ul class="product-list">
            {this.shopList.map((item) => {
              return (
                <li class="product-card-wrapper">
                  <product-card card={item}></product-card>
                </li>
              )
            })}
          </ul>
        </div>
        <eaten-footer></eaten-footer>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
@import '@/styles/constant.scss';
.search-content {
  width: $bodyWidth;
  min-height: 700px;
  margin: 0 auto;
  margin-top: 1.25rem;
  border: 1px solid #e5e5e5;
  background: #fff;
  padding: 0 1.25rem;
  .product-list {
    margin-top: 0.93rem;
    position: relative;
    &::after {
      content: '';
      clear: both;
      display: block;
    }
    .product-card-wrapper {
      margin: 0.31rem 0.7rem;
      float: left;
    }
  }
}
</style>
