<!--
 * @Description: 账户信息
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Account extends Vue {
  avatar = 'https://p0.meituan.net/mmc/89bec9d64cde38d441cf976f751c482e3788.png@120w_120h_1e_1c'
  name = '用户名'
  address = '四川成都'
  phoneNumber = '17347840719'
  password = '2154516'
  edit: boolean[] = [false, false, false, false]

  protected render() {
    return (
      <div class="account">
        <p class="account-label">个人信息</p>
        <p class="account-mini-label">账户设置</p>
        <ul class="account-content">
          <li>
            <span class="account-content-label">头像</span>
            <img src={this.avatar} />
            <el-button>修改</el-button>
          </li>
          <li>
            <span class="account-content-label">昵称</span>
            <span v-show={!this.edit[1]} class="account-content-text">
              {this.name}
            </span>
            <el-input v-show={this.edit[1]} v-model={this.name}></el-input>
            <el-button>修改</el-button>
          </li>
          <li>
            <span class="account-content-label">地址</span>
            <span v-show={!this.edit[2]} class="account-content-text">
              {this.address}
            </span>
            <el-input v-show={this.edit[2]} v-model={this.address}></el-input>
            <el-button>修改</el-button>
          </li>
          <li>
            <span class="account-content-label">换绑手机</span>
            <span v-show={!this.edit[3]} class="account-content-text">
              {this.phoneNumber}
            </span>
            <el-input v-show={this.edit[3]} v-model={this.phoneNumber}></el-input>
            <el-button>修改</el-button>
          </li>
        </ul>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
@import '@/styles/constant.scss';
</style>
