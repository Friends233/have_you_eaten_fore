<!--
 * @Description: 订单
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'

const typeToText = ['', '待付款', '待使用', '待评价', '售后']
const typeToPrompt = ['总价','需付款','','','']

@Component({
  components: {}
})
export default class Order extends Vue {
  activeName = 'first'
  orderData = {
    firest: [
      {
        label: '新锐连锁公寓',
        desc: '雅致单人间',
        num: 1,
        date: '2020-07-24 - 2020-07-25',
        price: 88.0,
        url: '//p1.meituan.net/hotelbiz/5ffdf0c91ab7f48b1a593953623913db261161.jpg@90w_90h_1e_1c',
        type: 0
      },
      {
        label: '新锐连锁公寓',
        desc: '雅致单人间',
        num: 1,
        date: '2020-07-24 - 2020-07-25',
        price: 88.0,
        url: '//p1.meituan.net/hotelbiz/5ffdf0c91ab7f48b1a593953623913db261161.jpg@90w_90h_1e_1c',
        type: 1
      }
    ],
    second: [
      {
        label: '新锐连锁公寓',
        desc: '雅致单人间',
        num: 1,
        date: '2020-07-24 - 2020-07-25',
        price: 88.0,
        url: '//p1.meituan.net/hotelbiz/5ffdf0c91ab7f48b1a593953623913db261161.jpg@90w_90h_1e_1c',
        type: 0
      }
    ],
    third: [
      {
        label: '新锐连锁公寓',
        desc: '雅致单人间',
        num: 1,
        date: '2020-07-24 - 2020-07-25',
        price: 88.0,
        url: '//p1.meituan.net/hotelbiz/5ffdf0c91ab7f48b1a593953623913db261161.jpg@90w_90h_1e_1c',
        type: 0
      }
    ],
    fourth: [
      {
        label: '新锐连锁公寓',
        desc: '雅致单人间',
        num: 1,
        date: '2020-07-24 - 2020-07-25',
        price: 88.0,
        url: '//p1.meituan.net/hotelbiz/5ffdf0c91ab7f48b1a593953623913db261161.jpg@90w_90h_1e_1c',
        type: 0
      }
    ],
    fifth: [
      {
        label: '新锐连锁公寓',
        desc: '雅致单人间',
        num: 1,
        date: '2020-07-24 - 2020-07-25',
        price: 88.0,
        url: '//p1.meituan.net/hotelbiz/5ffdf0c91ab7f48b1a593953623913db261161.jpg@90w_90h_1e_1c',
        type: 0
      }
    ]
  }

  protected render() {
    return (
      <el-tabs v-model={this.activeName}>
        <el-tab-pane label="全部订单" name="first">
          <ul class="order-list">
            {this.orderData.firest.map((item) => {
              return (
                <li>
                  <img src={item.url} />
                  <div>
                    <span class="label">{item.label}</span>
                    <span class="num">{item.num} 间，</span>
                    <span class="desc">{item.desc}</span>
                    <span class="date">{item.date}</span>
                  </div>
                  <p class="price">{typeToPrompt[item.type]}：{item.price}</p>
                  <p class="news">{typeToText[item.type]}</p>
                </li>
              )
            })}
          </ul>
        </el-tab-pane>
        <el-tab-pane label="待付款" name="second">
          <ul class="order-list">
            {this.orderData.second.map((item) => {
              return (
                <li>
                  <img src={item.url} />
                  <div>
                    <span class="label">{item.label}</span>
                    <span class="num">{item.num} 间，</span>
                    <span class="desc">{item.desc}</span>
                    <span class="date">{item.date}</span>
                  </div>
                  <p class="price">{typeToPrompt[item.type]}：{item.price}</p>
                  <p class="news">{typeToText[item.type]}</p>
                </li>
              )
            })}
          </ul>
        </el-tab-pane>
        <el-tab-pane label="待使用" name="third">
          <ul class="order-list">
            {this.orderData.third.map((item) => {
              return (
                <li>
                  <img src={item.url} />
                  <div>
                    <span class="label">{item.label}</span>
                    <span class="num">{item.num} 间，</span>
                    <span class="desc">{item.desc}</span>
                    <span class="date">{item.date}</span>
                  </div>
                  <p class="price">{typeToPrompt[item.type]}：{item.price}</p>
                  <p class="news">{typeToText[item.type]}</p>
                </li>
              )
            })}
          </ul>
        </el-tab-pane>
        <el-tab-pane label="待评价" name="fourth">
          <ul class="order-list">
            {this.orderData.fourth.map((item) => {
              return (
                <li>
                  <img src={item.url} />
                  <div>
                    <span class="label">{item.label}</span>
                    <span class="num">{item.num} 间，</span>
                    <span class="desc">{item.desc}</span>
                    <span class="date">{item.date}</span>
                  </div>
                  <p class="price">{typeToPrompt[item.type]}：{item.price}</p>
                  <p class="news">{typeToText[item.type]}</p>
                </li>
              )
            })}
          </ul>
        </el-tab-pane>
        <el-tab-pane label="退款/售后" name="fifth">
          <ul class="order-list">
            {this.orderData.firest.map((item) => {
              return (
                <li>
                  <img src={item.url} />
                  <div>
                    <span class="label">{item.label}</span>
                    <span class="num">{item.num} 间，</span>
                    <span class="desc">{item.desc}</span>
                    <span class="date">{item.date}</span>
                  </div>
                  <p class="price">{typeToPrompt[item.type]}：{item.price}</p>
                  <p class="news">{typeToText[item.type]}</p>
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
</style>
