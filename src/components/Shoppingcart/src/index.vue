<!--
 * @Description: 购物车
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'
import { ShoppingCartConifg } from './index'

@Component({
  components: {}
})
export default class ShoppingCart extends Vue {
  private visible = false
  private foodCheckbox: boolean[] = []
  private data: ShoppingCartConifg[] = [
    {
      name: '黄金甲.泡椒牛肉米线.',
      img:
        '//p0.meituan.net/deal/b1e92804330780f5e84044a8ba94033c53272.jpg@0_22_736_446a|388h_640w_2e_90Q|90w_90h_1e_1c',
      desc: '微辣',
      number: 1,
      price: 27.9
    },
    {
      name: '黄金甲.泡椒牛肉米线.',
      img:
        '//p0.meituan.net/deal/b1e92804330780f5e84044a8ba94033c53272.jpg@0_22_736_446a|388h_640w_2e_90Q|90w_90h_1e_1c',
      desc: '微辣',
      number: 1,
      price: 27.9
    },
    {
      name: '黄金甲.泡椒牛肉米线.',
      img:
        '//p0.meituan.net/deal/b1e92804330780f5e84044a8ba94033c53272.jpg@0_22_736_446a|388h_640w_2e_90Q|90w_90h_1e_1c',
      desc: '微辣',
      number: 1,
      price: 27.9
    },
    {
      name: '黄金甲.泡椒牛肉米线.',
      img:
        '//p0.meituan.net/deal/b1e92804330780f5e84044a8ba94033c53272.jpg@0_22_736_446a|388h_640w_2e_90Q|90w_90h_1e_1c',
      desc: '微辣',
      number: 1,
      price: 27.9
    },
    {
      name: '黄金甲.泡椒牛肉米线.',
      img:
        '//p0.meituan.net/deal/b1e92804330780f5e84044a8ba94033c53272.jpg@0_22_736_446a|388h_640w_2e_90Q|90w_90h_1e_1c',
      desc: '微辣',
      number: 1,
      price: 27.9
    },
    {
      name: '黄金甲.泡椒牛肉米线.',
      img:
        '//p0.meituan.net/deal/b1e92804330780f5e84044a8ba94033c53272.jpg@0_22_736_446a|388h_640w_2e_90Q|90w_90h_1e_1c',
      desc: '微辣',
      number: 1,
      price: 27.9
    },
    {
      name: '黄金甲.泡椒牛肉米线.',
      img:
        '//p0.meituan.net/deal/b1e92804330780f5e84044a8ba94033c53272.jpg@0_22_736_446a|388h_640w_2e_90Q|90w_90h_1e_1c',
      desc: '微辣',
      number: 1,
      price: 27.9
    },
    {
      name: '黄金甲.泡椒牛肉米线.',
      img:
        '//p0.meituan.net/deal/b1e92804330780f5e84044a8ba94033c53272.jpg@0_22_736_446a|388h_640w_2e_90Q|90w_90h_1e_1c',
      desc: '微辣',
      number: 1,
      price: 27.9
    },
    {
      name: '黄金甲.泡椒牛肉米线.',
      img:
        '//p0.meituan.net/deal/b1e92804330780f5e84044a8ba94033c53272.jpg@0_22_736_446a|388h_640w_2e_90Q|90w_90h_1e_1c',
      desc: '微辣',
      number: 1,
      price: 27.9
    },
    {
      name: '黄金甲.泡椒牛肉米线.',
      img:
        '//p0.meituan.net/deal/b1e92804330780f5e84044a8ba94033c53272.jpg@0_22_736_446a|388h_640w_2e_90Q|90w_90h_1e_1c',
      desc: '微辣',
      number: 1,
      price: 27.9
    }
  ]

  created() {
    this.init()
  }

  init() {
    this.data.forEach((item) => {
      this.foodCheckbox.push(false)
    })
  }

  handleClose() {
    console.log('close')
  }

  showDialog(){
    this.visible = true
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
    .el-drawer__body {
      position: relative;
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
          font-size: 18px;
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
          font-size: 16px;
          color: #666666;
          cursor: pointer;
        }
        p {
          font-size: 14px;
          color: #666666;
          margin: 8px 0;
        }
      }
    }
  }
}
</style>
