<!--
 * @Description: 购物车
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { ShoppingCartConifg } from './index'

@Component({
  components: {}
})
export default class ShoppingCart extends Vue {

  private visible = false
  private foodCheckbox: boolean[] = []
  data: ShoppingCartConifg[] = []

  created() {
    this.init(false)
  }

  init(bl: boolean) {
    this.data.forEach((item) => {
      this.foodCheckbox.push(bl)
    })
  }

  handleClose() {
    console.log('close')
  }

  showDialog() {
    this.visible = true
  }

  hideDialog() {
    this.visible = false
  }

  submint() {
    console.log('submint')
  }

  checkChecked(index: number) {
    this.$set(this.foodCheckbox, index, !this.foodCheckbox[index])
  }

  clearFood(index: number, e: any) {
    this.data.splice(index, 1)
    e.stopPropagation()
  }

  checkAll() {
    if (this.foodCheckbox.includes(false)) {
      this.init(true)
    } else {
      this.init(false)
    }
  }

  clearAll() {
    this.data = []
  }

  get isDisabled() {
    return !this.foodCheckbox.includes(true)
  }

  protected render() {
    return (
      <div class="shoppingcart">
        <el-drawer
          title="购物车"
          visible={this.visible}
          {...{ on: { 'update:visible': (e: any) => (this.visible = e) } }}
          onBeforeClose={this.handleClose}>
          <div class="shoppingcart-btn">
            <a onClick={this.checkAll}>全选</a>
            <a onClick={this.clearAll}>清空</a>
          </div>
          <p v-show={this.data && this.data.length === 0} class="desc">
            无商品
          </p>
          <ul class="food">
            {this.data.map((item, index) => {
              return (
                <li class="food-list" onClick={() => this.checkChecked(index)}>
                  <el-checkbox size="medium" v-model={this.foodCheckbox[index]}></el-checkbox>
                  <img src={item.img} />
                  <div class="food-list-right">
                    <i class="el-icon-delete top" onClick={(e: any) => this.clearFood(index, e)}></i>
                    <div class="label">
                      <span>{item.name}</span>
                      <span>￥{item.price}</span>
                    </div>
                    <p>{item.desc}</p>
                    <p>x{item.number}</p>
                  </div>
                </li>
              )
            })}
          </ul>
          <el-button
            type="primary"
            disabled={this.isDisabled || (this.data && this.data.length !== 0)}
            onClick={this.submint}>
            去结算
          </el-button>
        </el-drawer>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
@import '@/styles/constant.scss';
.shoppingcart {
  ::v-deep .el-drawer {
    width: 450px !important;
    .el-drawer__header {
      margin-bottom: 15px;
      border-bottom: 1px double #c0c4cc;
      padding: 10px 20px;
    }
    .el-drawer__body {
      position: relative;
    }
  }
  &-btn {
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
    margin-bottom: 15px;
    a {
      cursor: pointer;
      &:last-child {
        color: red;
      }
    }
  }
  .el-button {
    ::v-deep .is-disabled {
      background-color: #c0c4cc;
      border-color: #c0c4cc;
    }
    position: absolute;
    bottom: 15px;
    right: 15px;
    border-radius: 20px;
  }
  .food {
    max-height: 800px;
    overflow-y: scroll;
    &-list {
      display: flex;
      height: 80px;
      padding: 5px 10px;
      margin-top: 15px;
      &:first-child {
        margin-top: 0;
      }
      ::v-deep .el-checkbox__input {
        line-height: 6;
        .el-checkbox__inner {
          border-radius: 50%;
        }
      }
      > img {
        width: 80px;
        height: 80px;
        margin-left: 10px;
      }
      &-right {
        flex: 1;
        margin-left: 10px;
        position: relative;
        .label {
          font-weight: 700;
          font-size: 1.13rem;
          span {
            &:last-child {
              margin-left: 15px;
            }
          }
        }
        .top {
          position: absolute;
          right: 20px;
          top: 4px;
          font-size: 1rem;
          color: #666666;
          cursor: pointer;
        }
        p {
          font-size: 0.88rem;
          color: #666666;
          margin: 8px 0;
        }
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .shoppingcart {
    ::v-deep .el-drawer {
      width: 100% !important;
    }
  }
  .food {
    max-height: 450px !important;
  }
}
</style>
