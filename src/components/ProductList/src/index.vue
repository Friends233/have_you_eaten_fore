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
  cardList: Array<number> = [1, 2, 3, 4]

  protected render() {
    return (
      <div class="product-list">
        <ul class="product-list-recommend">
          {this.cardList.map((item) => {
            return (
              <li class="product-card-wrapper">
                <product-card></product-card>
              </li>
            )
          })}
        </ul>
        <ul class="product-list-find"></ul>
        <ul class="product-list-supermarket"></ul>
        <ul class="product-list-fruit"></ul>
        <ul class="product-list-vegettables"></ul>
        <ul class="product-list-medicine"></ul>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
</style>
