<!--
 * @Description: 账户信息
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'
import EatenHeader from '@/components/EatenHeader/index'
import EatenFooter from '@/components/EatenFooter/index'

@Component({
  components: { EatenHeader, EatenFooter }
})
export default class UserInfo extends Vue {
  navList: { label: string; type: string; routLink: any }[] = [
    { label: '我的订单', type: 'big', routLink: { name: 'order', index: 1 } },
    { label: '全部订单', type: 'mid', routLink: { name: 'order', index: 1 } },
    { label: '待付款', type: 'mid', routLink: { name: 'order', index: 2 } },
    { label: '待评价', type: 'mid', routLink: { name: 'order', index: 3 } },
    { label: '退款/售后', type: 'mid', routLink: { name: 'order', index: 4 } },
    { label: '我的收藏', type: 'big', routLink: { name: 'favorites', index: 1 } },
    { label: '收藏的商家', type: 'mid', routLink: { name: 'favorites', index: 1 } },
    { label: '收藏的团购', type: 'mid', routLink: { name: 'favorites', index: 2 } },
    { label: '抵用券', type: 'big', routLink: { name: 'coupon', index: 1 } },
    { label: '可用卷', type: 'mid', routLink: { name: 'coupon', index: 1 } },
    { label: '失效卷', type: 'mid', routLink: { name: 'coupon', index: 2 } },
    { label: '个人信息', type: 'big', routLink: { name: 'account', index: 1 } },
    { label: '账户设置', type: 'mid', routLink: { name: 'account', index: 1 } }
  ]

  goView(link: any) {
    const { name, index } = link
    if (index !== 0 && name !== '') {
      this.$router.push({name:'Home'})
      this.$router.push({ path:`/${name}?index=${index}`})
    }
  }

  protected render() {
    return (
      <div class="userInfo">
        <eaten-header></eaten-header>
        <div class="userInfo-mid">
          <ul class="userInfo-mid-left">
            {this.navList.map((item) => {
              return (
                <li class={item.type} onClick={() => this.goView(item.routLink)}>
                  {item.label}
                  <i v-show={item.type === 'mid'} class="el-icon-arrow-right"></i>
                </li>
              )
            })}
          </ul>
          <div class="userInfo-mid-right">
            <router-view key={this.$route.path}></router-view>
          </div>
        </div>
        <eaten-footer></eaten-footer>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
@import '@/styles/constant.scss';
.userInfo {
  &-mid {
    width: $bodyWidth;
    min-height: 710px;
    margin: 30px auto;
    display: flex;
    &-left {
      padding: 15px 20px;
      background: #ffffff;
      border: 1px solid #e5e5e5;
      border-radius: 4px;
      width: 230px;
      box-sizing: border-box;
      li {
        margin-bottom: 15px;
        cursor: pointer;
        i {
          font-size: 12px;
          font-weight: 700;
          float: right;
        }
      }
      .big {
        font-size: 16px;
        color: #222222;
        font-weight: 500;
        margin-top: 28px;
        &:first-child {
          margin-top: 0;
        }
        &:hover {
          color: #fe8c00;
        }
      }
      .mid {
        font-size: 14px;
        color: #666;
      }
    }
    &-right {
      width: 908px;
      padding: 15px 20px;
      background: #ffffff;
      border: 1px solid #e5e5e5;
      border-radius: 4px;
      box-sizing: border-box;
      margin-left: 10px;
    }
  }
}
</style>
