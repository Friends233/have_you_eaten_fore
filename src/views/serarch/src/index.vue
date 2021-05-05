<!--
 * @Description: 订单
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue, Watch } from 'vue-property-decorator'
import storage from '@/storage'
import EatenHeader from '@/components/EatenHeader/index'
import EatenFooter from '@/components/EatenFooter/index'
import FoodCard from '@/components/FoodCard'
import { getFoodByName } from '@/api/all'

@Component({
  components: { EatenHeader, EatenFooter, FoodCard }
})
export default class SearchFood extends Vue {
  [x: string]: any
  shopList: any[] = []
  shopIds: number[] = []

  created() {
    this.init()
  }

  init() {
    window.onbeforeunload = function (e: any) {
      e.returnValue = 'stop'
      return stop
    }
    this.$EventBus.$on('searchFood', (keywords: string) => {
      getFoodByName({ name: keywords || '' }).then((data) => {
        console.log(data)
        this.shopList = data.data.map((item: any) => {
          return {
            imgUrl: item.url,
            ...item
          }
        })
      })
    })
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
                  <food-card card={item}></food-card>
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
@media screen and (max-width: 600px) {
  .search-content {
    width: $bodyMiniWidth;
  }
}
</style>
