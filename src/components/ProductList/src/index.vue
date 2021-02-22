<!--
 * @Description: 
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'
import ProductCard from '../components/productCard.vue'

@Component({
  components: { ProductCard }
})
export default class ProductList extends Vue {
  cardList: Array<number> = [1, 2, 3, 4, 5, 6]

  protected render() {
    return (
      <div class="product">
        <ul class="product-list product-list-recommend">
          <h3 class="product-card-header">附近热卖推荐</h3>
          {this.cardList.map((item) => {
            return (
              <li class="product-card-wrapper">
                <product-card></product-card>
              </li>
            )
          })}
        </ul>
        <ul class="product-list product-list-find">
          <h3 class="product-card-header">附近热卖推荐</h3>
          {this.cardList.map((item) => {
            return (
              <li class="product-card-wrapper">
                <product-card></product-card>
              </li>
            )
          })}
        </ul>
        <ul class="product-list product-list-supermarket">
          <h3 class="product-card-header">附近热卖推荐</h3>
          {this.cardList.map((item) => {
            return (
              <li class="product-card-wrapper">
                <product-card></product-card>
              </li>
            )
          })}
        </ul>
        <ul class="product-list product-list-fruit">
          <h3 class="product-card-header">附近热卖推荐</h3>
          {this.cardList.map((item) => {
            return (
              <li class="product-card-wrapper">
                <product-card></product-card>
              </li>
            )
          })}
        </ul>
        <ul class="product-list product-list-vegettables">
          <h3 class="product-card-header">附近热卖推荐</h3>
          {this.cardList.map((item) => {
            return (
              <li class="product-card-wrapper">
                <product-card></product-card>
              </li>
            )
          })}
        </ul>
        <ul class="product-list product-list-medicine">
          <h3 class="product-card-header">附近热卖推荐</h3>
          {this.cardList.map((item) => {
            return (
              <li class="product-card-wrapper">
                <product-card></product-card>
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
    padding-top: 50px;
    margin-top: 15px;
    position: relative;
    &::after {
      content: '';
      clear: both;
      display: block;
    }
    .product-card-header {
      position: absolute;
      left: 0;
      top: -10px;
      width: 100%;
      height: 40px;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      font-family: 'MFShangHei-Regular' !important;
      line-height: 40px;
      box-sizing: border-box;
      padding-left: 20px;
      font-size: 18px;
      font-weight: 500;
    }
    .product-card-wrapper {
      padding: 5px 11px;
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
