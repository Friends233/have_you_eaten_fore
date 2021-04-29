<!--
 * @Description: 
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'
import ProductCard from '../components/productCard.vue'
import { getHome } from '@/api/home'

@Component({
  components: { ProductCard }
})
export default class ProductList extends Vue {
  cardList: Array<number> = [1, 2, 3, 4, 5, 6]
  cardData: any = {}
  async created() {
    const data = await getHome()
    this.cardData = data.data
  }

  protected render() {
    return (
      <div class="product">
        <ul class="product-list product-list-recommend">
          <div class="product-card-header">
            <span class="product-card-header-title">附近热卖推荐</span>
            <span class="product-card-header-all">
              全部<i class="el-icon-arrow-right"></i>
            </span>
          </div>
          {this.cardData.recommend && this.cardData.recommend.map((item: any) => {
            return (
              <li class="product-card-wrapper">
                <product-card card={item}></product-card>
              </li>
            )
          })}
        </ul>
        <ul class="product-list product-list-find">
          <div class="product-card-header">
            <span class="product-card-header-title">附近热卖推荐</span>
            <span class="product-card-header-all">
              全部<i class="el-icon-arrow-right"></i>
            </span>
          </div>
          {this.cardData.find && this.cardData.find.map((item: any) => {
            return (
              <li class="product-card-wrapper">
                <product-card card={item}></product-card>
              </li>
            )
          })}
        </ul>
        <ul class="product-list product-list-supermarket">
          <div class="product-card-header">
            <span class="product-card-header-title">附近热卖推荐</span>
            <span class="product-card-header-all">
              全部<i class="el-icon-arrow-right"></i>
            </span>
          </div>
          {this.cardData.supermarket && this.cardData.supermarket.map((item: any) => {
            return (
              <li class="product-card-wrapper">
                <product-card card={item}></product-card>
              </li>
            )
          })}
        </ul>
        <ul class="product-list product-list-fruit">
          <div class="product-card-header">
            <span class="product-card-header-title">附近热卖推荐</span>
            <span class="product-card-header-all">
              全部<i class="el-icon-arrow-right"></i>
            </span>
          </div>
          {this.cardData.fruit && this.cardData.fruit.map((item: any) => {
            return (
              <li class="product-card-wrapper">
                <product-card card={item}></product-card>
              </li>
            )
          })}
        </ul>
        <ul class="product-list product-list-vegettables">
          <div class="product-card-header">
            <span class="product-card-header-title">附近热卖推荐</span>
            <span class="product-card-header-all">
              全部<i class="el-icon-arrow-right"></i>
            </span>
          </div>
          {this.cardData.vegettables && this.cardData.vegettables.map((item: any) => {
            return (
              <li class="product-card-wrapper">
                <product-card card={item}></product-card>
              </li>
            )
          })}
        </ul>
        <ul class="product-list product-list-medicine">
          <div class="product-card-header">
            <span class="product-card-header-title">附近热卖推荐</span>
            <span class="product-card-header-all">
              全部<i class="el-icon-arrow-right"></i>
            </span>
          </div>
          {this.cardData.medicine && this.cardData.medicine.map((item: any) => {
            return (
              <li class="product-card-wrapper">
                <product-card card={item}></product-card>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
.product {
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
    .product-card-header {
      position: absolute;
      left: 0;
      top: 0.5rem;
      width: 100%;
      height: 2.5rem;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      font-family: 'MFShangHei-Regular' !important;
      line-height: 2.5rem;
      box-sizing: border-box;
      padding-left: 1.25rem;
      &-title {
        font-size: 1.13rem;
        font-weight: 500;
      }
      &-all {
        float: right;
        margin-right: 1.25rem;
      }
    }
    .product-card-wrapper {
      margin: 0.31rem 0.7rem;
      // padding: 5px 11px;
      float: left;
    }
    &-recommend {
      .product-card-header {
        background-color: rgb(248, 74, 44);
        color: white;
      }
    }
    &-find {
      .product-card-header {
        background-color: rgb(250, 60, 104);
        color: white;
      }
    }
    &-supermarket {
      .product-card-header {
        background-color: rgb(73, 221, 247);
        color: white;
      }
    }
    &-fruit {
      .product-card-header {
        background-color: rgb(155, 245, 52);
        color: white;
      }
    }
    &-vegettables {
      .product-card-header {
        background-color: rgb(105, 241, 64);
        color: white;
      }
    }
    &-medicine {
      .product-card-header {
        background-color: rgb(247, 191, 95);
        color: white;
      }
    }
  }
}
</style>
