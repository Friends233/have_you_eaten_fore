<!--
 * @Description: 商品详情页面
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue, VModel, Prop } from 'vue-property-decorator'
import EatenHeader from '@/components/EatenHeader/index'
import EatenFooter from '@/components/EatenFooter/index'
import Appraisal from '@/components/Appraisal/index'
import { UserApp, GoodDetails } from './index'

@Component({
  components: { EatenHeader, EatenFooter, Appraisal }
})
export default class Food extends Vue {
  [x: string]: any
  // 评价的排序标签
  @VModel({ default: {} }) readonly foodVal: any
  @Prop({ default: false, type: Boolean }) readonly show?: boolean
  elTabIndex = 'first'

  get visible() {
    return this.show
  }

  hideView(e: any) {
    this.$emit('hideView', e)
  }
  
  shopping() {
    this.$showCart(this.foodVal.goodD.id, true)
  }

  protected render() {
    return (
      <el-dialog
        lock-scroll={false}
        custom-class="food-dialog"
        modal-append-to-body={false}
        visible={this.visible}
        {...{ on: { 'update:visible': this.hideView } }}>
        <div class="img-backgorund">
          <img src="https://img.meituan.net/msmerchant/c344e8b9ab73f43596eac885b790f175148974.jpg@600w_600h_1l" />
        </div>
        <div class="food-dialog-mid">
          <div>
            <span>月售 {this.foodVal.goodD.monthlySale}</span>
            <span>好评率 {this.foodVal.goodD.favorableRate}%</span>
          </div>
          <div>{(this.foodVal.goodD.discount * 10).toFixed(1)}折</div>
          <div>
            <span class="pri">{(this.foodVal.goodD.price * this.foodVal.goodD.discount).toFixed(1)}</span>
            <span class="del">￥{this.foodVal.goodD.price}</span>
            <span class="other">包装费￥{this.foodVal.goodD.packagingCosts}/份</span>
            <el-button type="primary" size="small" icon="el-icon-plus" onClick={this.shopping} round>
              加入购物车
            </el-button>
          </div>
        </div>
        <el-tabs v-model={this.elTabIndex} class="food-dialog-footer">
          <el-tab-pane label="商品信息" name="first">
            <ul>
              <li>
                <span>商品描述</span>
                <span>{this.foodVal.goodD.desc}</span>
              </li>
              <li>
                <span>原料</span>
                <span>{this.foodVal.goodD.material}</span>
              </li>
              <li>
                <span>口味</span>
                <span>{this.foodVal.goodD.taste}</span>
              </li>
              <li>
                <span>价格说明</span>
                <span>{this.foodVal.goodD.priceDescription}</span>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="评价" class="shop-card-appraisal" name="second">
            <appraisal></appraisal>
          </el-tab-pane>
        </el-tabs>
      </el-dialog>
    )
  }
}
</script>
<style scoped lang="scss">
::v-deep .food-dialog {
  background-color: #f8f8f8;
  width: 600px;
  .el-dialog__headerbtn {
    left: 20px;
    .el-dialog__close {
      font-size: 25px;
      &::before {
        content: '<';
        display: inline-block;
        width: 28px;
        height: 28px;
        background-color: rgba($color: #000000, $alpha: 0.3);
        border-radius: 50%;
      }
    }
  }
  .el-dialog__body {
    padding: 0;
    .img-backgorund {
      margin-top: -30px;
      img {
        width: 100%;
      }
    }
    .food-dialog-footer {
      background-color: white;
      margin: 20px auto;
      border-radius: 6px;
      padding: 0 15px;
      ul {
        > li {
          margin-bottom: 15px;
          min-height: 20px;
          > span {
            font-size: 14px;
            &:first-child {
              color: #868a8a;
              min-width: 60px;
              display: inline-block;
            }
            &:last-child {
              margin-left: 15px;
              color: black;
            }
          }
        }
      }
    }
    .food-dialog-mid {
      background-color: white;
      margin: 10px auto;
      border-radius: 6px;
      padding: 15px;
      & > div {
        &:nth-child(1) {
          span {
            font-size: 13px;
            color: #868a8a;
            &:last-child {
              margin-left: 10px;
            }
          }
        }
        &:nth-child(2) {
          margin: 10px 0;
          color: #f60;
          font-size: 13px;
          border: 1px solid #f60;
          padding: 2px;
          display: inline-block;
          border-radius: 5px;
        }
        &:nth-child(3) {
          & > span {
            margin-right: 6px;
          }
          .pri {
            color: rgb(255, 38, 0);
            font-size: 18px;
            font-weight: 700;
            &::before {
              content: '￥';
              display: inline-block;
              font-size: 13px;
            }
          }
          .del {
            position: relative;
            &::after {
              content: '';
              display: inline-block;
              position: absolute;
              width: 50px;
              border-top: 1px solid #868a8a;
              width: 100%;
              top: 10px;
              left: 2px;
            }
          }
          .other .del {
            font-size: 13px;
            color: #868a8a;
          }
          .el-button {
            float: right;
            padding: 9px 10px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 600px) {
  ::v-deep .food-dialog {
    width: 95%;
  }
}
</style>
