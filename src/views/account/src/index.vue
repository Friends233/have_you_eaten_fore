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
  edit: boolean[] = [false, false, false, false, false]

  getText(index: number) {
    return this.edit[index] ? '保存' : '修改'
  }

  // 修改头像
  editAvatar() {
    this.$set(this.edit, 0, !this.edit[0])
  }

  // 修改用户名
  editName() {
    this.$set(this.edit, 1, !this.edit[1])
  }

  // 修改地址
  editAddress() {
    this.$set(this.edit, 2, !this.edit[2])
  }

  // 修改电话
  editPhoneNumber() {
    this.$set(this.edit, 3, !this.edit[3])
  }

  // 修改密码
  editPassword() {
    this.$set(this.edit, 4, !this.edit[4])
  }

  protected render() {
    return (
      <div class="account">
        <p class="account-label">个人信息</p>
        <p class="account-mini-label">账户设置</p>
        <ul class="account-content">
          <li>
            <span class="account-content-label">头像</span>
            <div class="avatar account-content-text">
              <img src={this.avatar} />
            </div>
          </li>
          <li>
            <span class="account-content-label">昵称</span>
            <div class="account-content-text">
              <span v-show={!this.edit[1]}>{this.name}</span>
              <el-input v-show={this.edit[1]} v-model={this.name}></el-input>
            </div>
            <el-button onClick={this.editName}>{this.getText(1)}</el-button>
          </li>
          <li>
            <span class="account-content-label">地址</span>
            <div class="account-content-text">
              <span v-show={!this.edit[2]}>{this.address}</span>
              <el-input v-show={this.edit[2]} v-model={this.address}></el-input>
            </div>
            <el-button onClick={this.editAddress}>{this.getText(2)}</el-button>
          </li>
          <li>
            <span class="account-content-label">换绑手机</span>
            <div class="account-content-text">
              <span v-show={!this.edit[3]}>{this.phoneNumber}</span>
              <el-input v-show={this.edit[3]} v-model={this.phoneNumber}></el-input>
            </div>
            <el-button onClick={this.editPhoneNumber}>{this.getText(3)}</el-button>
          </li>
          <li>
            <span class="account-content-label">修改密码</span>
            <div class="account-content-text">
              <span v-show={!this.edit[4]}>{this.password}</span>
              <el-input v-show={this.edit[4]} show-password v-model={this.password}></el-input>
            </div>
            <el-button onClick={this.editPassword}>{this.getText(4)}</el-button>
          </li>
        </ul>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
@import '@/styles/constant.scss';
.account {
  &-label {
    font-size: 1.25rem;
    font-weight: 500;
  }
  &-mini-label {
    font-size: 0.88rem;
    color: #666666;
  }
  &-content {
    li {
      border-top: 1px solid #e5e5e5;
      padding: 1.88rem 0;
      display: flex;
      align-items: center;
      .avatar {
        display: inline-block;
        img {
          width: 3rem;
          height: 3rem;
          border-radius: 3rem;
        }
      }
      .el-button {
        border-radius: 0.81rem;
      }
    }
    &-label {
      width: 5.63rem;
      font-size: 1.13rem;
      padding-right: 0.94rem;
      display: inline-block;
      text-align: right;
      border-right: 1px solid #e5e5e5;
    }
    &-text {
      margin-left: 1.88rem;
      flex: 1;
      span {
        font-size: 0.75rem;
        color: #666666;
      }
      .el-input {
        width: 15.63rem;
        font-size: 0.88rem;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .account-content {
    > li {
      height: 30px;
      .el-button {
        font-size: 8px !important;
        padding: 5px !important;
      }
      .el-input {
        width: 80%;
        ::v-deep input {
          height: 28px !important;
          line-height: 28px !important;
          padding: 0 5px !important;
        }
        ::v-deep span i {
          line-height: 28px !important;
        }
      }
    }
  }
}
</style>
