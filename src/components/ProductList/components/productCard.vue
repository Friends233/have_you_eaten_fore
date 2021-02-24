<!--
 * @Description: 
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'
import Star from '@/components/Star/index'
import { CardData } from '../src/index'

@Component({
  components: {Star}
})
export default class ProductCard extends Vue {
  card: CardData = {
    id:'1',
    name:'晓寿司（望京soho店）',
    price:47.5,
    rating:4.5,
    imgUrl:'https://p0.meituan.net/merchant/5cfc2788fbec889cbf14e6a680a99e3d82463.jpg@214w_120h_1e_1c',
    appraisalNumber:2164,
    location:'望京'
  }

  protected render() {
    return (
      <el-card body-style={'padding: 0;'}>
        <img
          width="233"
          src={this.card.imgUrl}
        />
        <div class="el-card-text">
          <span class="el-card-text-title">{this.card.name}</span>
          <div class="el-card-text-rating">
            <star num={this.card.rating} size={'16'}></star>
            <span>{this.card.appraisalNumber}个评价</span>
          </div>
          <div class="el-card-text-location">{this.card.location}</div>
          <div class="el-card-text-price">{this.card.price}起</div>
          <div class="el-card-text-bottom">
            <el-button type="text" class="button">
              <i class="el-icon-plus"></i>
              加入购物车
            </el-button>
          </div>
        </div>
      </el-card>
    )
  }
}
</script>
<style scoped lang="scss">
.el-card {
  width: 233px;
  cursor: pointer;
  &-text {
    padding-left: 10px;
    &-title {
      font-size: 16px;
    }
    &-rating {
      display: flex;
      margin-top: 5px;
    }
  }
}
</style>
