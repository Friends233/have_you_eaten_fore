<!--
 * @Description: 订单
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { OrderList } from './index'
import { getOrder } from '@/api/all'

const typeToText = ['', '待付款', '待使用', '待评价', '售后']
const typeToPrompt = ['总价', '需付款', '', '', '']

const indexToView = ['', 'first', 'second', 'third', 'fourth']

@Component({
  components: {}
})
export default class Order extends Vue {
  activeName = 'first'
  orderData: { firest?: OrderList[]; second?: OrderList[]; third?: OrderList[]; fourth?: OrderList[] } = {}

  @Watch('$route', { deep: true })
  listenersRouter(val: any) {
    this.activeName = indexToView[Number(val.query.index)] || 'first'
  }

  mounted() {
    this.init()
  }

  getPrice(item: OrderList) {
    let price = 0
    price = Number(item.num) * Number(item.price)
    return price
  }

  async init() {
    const data = await getOrder(this.$store.getters.userId)
    this.orderData = {
      ...data.data
    }
  }

  protected render() {
    return (
      <el-tabs v-model={this.activeName}>
        <el-tab-pane label="全部订单" name="first">
          <ul class="order-list">
            {this.orderData.firest?.length === 0 && <p>暂无记录</p>}
            {this.orderData.firest &&
              this.orderData.firest.map((item) => {
                return (
                  <li>
                    <img src={item.url} />
                    <div>
                      <span class="label">{item.label}</span>
                      <span class="num">{item.num} 份，</span>
                      <span class="desc">{item.desc}</span>
                      <span class="date">{item.date}</span>
                    </div>
                    <p class="price">
                      {typeToPrompt[item.type]}：{this.getPrice(item)}
                    </p>
                    <p class="news none-600">{typeToText[item.type]}</p>
                  </li>
                )
              })}
          </ul>
        </el-tab-pane>
        <el-tab-pane label="待付款" name="second">
          <ul class="order-list">
            {this.orderData.second?.length === 0 && <p>暂无记录</p>}
            {this.orderData.second &&
              this.orderData.second.map((item) => {
                return (
                  <li>
                    <img src={item.url} />
                    <div>
                      <span class="label">{item.label}</span>
                      <span class="num">{item.num} 份，</span>
                      <span class="desc">{item.desc}</span>
                      <span class="date">{item.date}</span>
                    </div>
                    <p class="price">
                      {typeToPrompt[item.type]}：{this.getPrice(item)}
                    </p>
                    <p class="news none-600">{typeToText[item.type]}</p>
                  </li>
                )
              })}
          </ul>
        </el-tab-pane>
        <el-tab-pane label="待评价" name="third">
          <ul class="order-list">
            {this.orderData.third?.length === 0 && <p>暂无记录</p>}
            {this.orderData.third &&
              this.orderData.third.map((item) => {
                return (
                  <li>
                    <img src={item.url} />
                    <div>
                      <span class="label">{item.label}</span>
                      <span class="num">{item.num} 份，</span>
                      <span class="desc">{item.desc}</span>
                      <span class="date">{item.date}</span>
                    </div>
                    <p class="price">
                      {typeToPrompt[item.type]}：{this.getPrice(item)}
                    </p>
                    <p class="news none-600">{typeToText[item.type]}</p>
                  </li>
                )
              })}
          </ul>
        </el-tab-pane>
        <el-tab-pane label="退款/售后" name="fourth">
          <ul class="order-list">
            {this.orderData.fourth?.length === 0 && <p>暂无记录</p>}
            {this.orderData.fourth &&
              this.orderData.fourth.map((item) => {
                return (
                  <li>
                    <img src={item.url} />
                    <div>
                      <span class="label">{item.label}</span>
                      <span class="num">{item.num} 份，</span>
                      <span class="desc">{item.desc}</span>
                      <span class="date">{item.date}</span>
                    </div>
                    <p class="price">
                      {typeToPrompt[item.type]}：{this.getPrice(item)}
                    </p>
                    <p class="news none-600">{typeToText[item.type]}</p>
                  </li>
                )
              })}
          </ul>
        </el-tab-pane>
      </el-tabs>
    )
  }
}
</script>
<style scoped lang="scss">
@import '@/styles/constant.scss';
.el-tabs {
  ::v-deep .el-tabs__nav-scroll {
    .el-tabs__item {
      font-size: 1.25rem;
    }
    .is-active {
      color: black;
    }
  }
  .order-list {
    > li {
      display: flex;
      height: 6.88rem;
      box-sizing: border-box;
      padding: 0.63rem 0;
      border-top: 1px solid #e5e5e5;
      justify-content: space-between;
      padding-right: 6.25rem;
      &:first-child {
        border: none;
      }
      img {
        width: 5.63rem;
        height: 5.63rem;
        border-radius: 4px;
      }
      > div {
        flex: 1 1 20.31rem;
        margin-left: 0.63rem;
        padding-top: 0.63rem;
        .label {
          font-size: 1rem;
          display: block;
        }
        .num,
        .desc,
        .date {
          font-size: 0.75rem;
          color: #666666;
        }
        .date {
          display: block;
        }
        .desc {
          margin-top: 0.31rem;
        }
      }
      .price,
      .news {
        font-size: 0.75rem;
        color: #666666;
        padding-top: 0.94rem;
      }
      .price {
        flex: 0 0 12.5rem;
      }
      .news {
        flex: 0 0 6.26rem;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .el-tabs {
    ::v-deep .el-tabs__nav-scroll {
      .el-tabs__item {
        font-size: 8px;
        padding: 0 5px;
        height: 30px;
        line-height: 30px;
      }
    }
    .order-list {
      > li {
        padding-right: 0;
        .price {
          flex: 0 0 4.5rem;
        }
      }
    }
  }
}
</style>
