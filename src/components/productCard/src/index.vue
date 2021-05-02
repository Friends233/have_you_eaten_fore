<!--
 * @Description: 店铺卡片
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Star from '@/components/Star/index'
import { CardData } from '../src/index'

@Component({
  components: { Star }
})
export default class ProductCard extends Vue {
  @Prop() card!: CardData
  @Prop() shopping?: boolean

  goShop() {
    this.$router.push({ name: 'shop', params: { id: this.card.id } })
  }

  protected render() {
    return (
      <div>
        <el-card nativeOnClick={() => {!this.shopping?this.goShop():''} } body-style={'padding: 0;'}>
          <img src={this.card.imgUrl} />
          <div class="el-card-text">
            <span class="el-card-text-title">{this.card.name}</span>
            <div class="el-card-text-rating">
              <star num={this.card.rating} size="16"></star>
              <span>{this.card.appraisalNumber}个评价</span>
            </div>
            <div class="el-card-text-location">{this.card.location}</div>
            <div class="el-card-text-price">￥{this.card.price}起</div>
            <div class="el-card-text-bottom">
              <el-button type="text">
                <i class="el-icon-plus"></i>
                查看详情
              </el-button>
            </div>
          </div>
        </el-card>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
.el-card {
  // width: 233px;
  width: 100%;
  cursor: pointer;
  ::v-deep .el-card__body {
    > img {
      width: 14.56rem;
    }
  }
  &-text {
    padding-left: 0.63rem;
    margin-top: 0.63rem;
    &-title {
      font-size: 1.13rem;
    }
    &-rating {
      display: flex;
      margin-top: 5px;
      font-size: 0.75rem;
      color: #999;
      height: 1.5rem;
      line-height: 1.5rem;
    }
    &-location {
      font-size: 0.75rem;
      color: #999999;
      width: 100%;
      height: 1.13rem;
      line-height: 1.13rem;
    }
    &-price {
      margin-top: 5px;
      color: #ff6600;
      font-size: 1rem;
      font-weight: 700;
    }
    &-bottom {
      text-align: right;
      .el-button {
        padding: 0.63rem 0.94rem;
      }
    }
  }
}
</style>
