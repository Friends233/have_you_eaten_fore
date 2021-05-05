<!--
 * @Description: 购物车
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { ShoppingCartConifg } from './index'
import storage from '@/storage'
import { getSpt, addFood, removeFood, clearAll, submitCart } from '@/api/shoppingCart'

@Component({
  components: {}
})
export default class ShoppingCart extends Vue {
  [x: string]: any
  private visible = false
  private foodCheckbox: boolean[] = []
  userId = ''
  data: ShoppingCartConifg[] = []

  mounted() {
    this.init(false)
  }

  init(bl: boolean) {
    this.data.forEach((item) => {
      this.foodCheckbox.push(bl)
    })
    const userinfo: any = storage.get('userInfo')
    this.userId = userinfo.id
  }

  async emitNum() {
    await this.refershCart()
    let num = 0
    await this.data.forEach((item) => {
      num += Number(item.number)
    })
    await this.$EventBus.$emit('refershCart', num)
  }

  async handleClose() {
    this.emitNum()
  }

  async showDialog(id = '', flag = false) {
    if (!flag) {
      this.visible = true
    }
    if (id !== '') {
      if (this.userId && this.userId !== '') {
        await this.shopping(id)
      } else {
        this.$alert('请先登录', '警告', {
          confirmButtonText: '确定',
          type: 'warning'
        })
      }
    }
    await this.refershCart()
  }

  async refershCart() {
    try {
      if (this.userId) {
        const data = await getSpt(this.userId)
        this.data = data.data.content
      } else {
        this.data = []
      }
    } catch (err) {
      this.data = []
    }
  }

  hideDialog() {
    this.visible = false
    this.$message({
      type: 'success',
      message: '操作成功！'
    })
  }

  shopping(foodId: string) {
    const params = {
      foodId,
      userId: this.userId
    }
    addFood(params)
      .then((res) => {
        this.$message({
          type: 'success',
          message: '添加成功'
        })
        this.emitNum()
      })
  }

  async submint() {
    const content = this.data.filter((item, index) => {
      return this.foodCheckbox[index]
    })
    const ids = this.data.map((item) => {
      return item.id
    })
    submitCart({ userId: this.userId, foodIds: ids.join(','), content }).then(() => {
      this.hideDialog()
    })
  }

  checkChecked(index: number) {
    this.$set(this.foodCheckbox, index, !this.foodCheckbox[index])
  }

  clearFood(row: any, e: any) {
    e.stopPropagation()
    const params = {
      foodId: row.id,
      userId: this.userId
    }
    removeFood(params).then(() => {
      this.hideDialog()
    })
  }

  checkAll() {
    if (this.foodCheckbox.includes(false)) {
      this.init(true)
    } else {
      this.init(false)
    }
  }

  clearAll() {
    clearAll(this.userId).then(() => {
      this.hideDialog()
    })
  }

  get price() {
    let price = 0
    this.data.forEach((item, index) => {
      if (this.foodCheckbox[index]) {
        price += Number(item.price) * Number(item.number)
      }
    })
    return price
  }

  get isDisabled() {
    return !this.foodCheckbox.includes(true) || this.data.length === 0
  }

  protected render() {
    return (
      <div class="shoppingcart">
        <el-drawer
          title="购物车"
          visible={this.visible}
          {...{ on: { 'update:visible': (e: any) => (this.visible = e) } }}
          onClose={this.handleClose}>
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
                    <i class="el-icon-delete top" onClick={(e: any) => this.clearFood(item, e)}></i>
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
          <div class="bottom-price">
            合计：<span>{this.price}￥</span>
          </div>
          <el-button type="primary" disabled={this.isDisabled} onClick={this.submint}>
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
  .bottom-price {
    span {
      color: red;
      font-weight: 700;
      font-size: 17px;
    }
    font-size: 18px;
    position: absolute;
    bottom: 15px;
    left: 15px;
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
