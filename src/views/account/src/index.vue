<!--
 * @Description: 账户信息
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { userEdit } from '@/api/index'

@Component({
  components: {}
})
export default class Account extends Vue {
  avatar = ''
  name = ''
  address = ''
  phoneNumber = ''
  password = ''
  edit: boolean[] = [false, false, false, false, false]

  getText(index: number) {
    return this.edit[index] ? '保存' : '修改'
  }

  created() {
    this.init()
  }

  init() {
    this.name = this.$store.getters.userName
    this.address = this.$store.getters.userAddress
    this.phoneNumber = this.$store.getters.userPhone
    this.password = this.$store.getters.userPass
    this.avatar = this.$store.getters.userAvatar
  }

  refreshUserInfo() {
    const userInfo = {
      userName: this.name,
      userPass: this.password,
      userAddress: this.address,
      userPhone: this.phoneNumber
    }
    userEdit(this.$store.getters.userId, userInfo).then(() => {
      this.$store
        .dispatch('Login', {
          userName: this.name,
          userPass: this.password
        })
        .then((msg) => {
          this.$router.go(0)
        })
    })
  }

  // 修改头像
  editAvatar() {
    this.$set(this.edit, 0, !this.edit[0])
    if (!this.edit[0]) {
      console.log('submit')
    }
  }

  // 修改用户名
  editName() {
    this.$set(this.edit, 1, !this.edit[1])
    if (!this.edit[1]) {
      this.refreshUserInfo()
    }
  }

  // 修改地址
  editAddress() {
    this.$set(this.edit, 2, !this.edit[2])
    if (!this.edit[2]) {
      this.refreshUserInfo()
    }
  }

  // 修改电话
  editPhoneNumber() {
    this.$set(this.edit, 3, !this.edit[3])
    if (!this.edit[3]) {
      this.refreshUserInfo()
    }
  }

  // 修改密码
  editPassword() {
    this.$set(this.edit, 4, !this.edit[4])
    if (!this.edit[4]) {
      this.refreshUserInfo()
    }
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
              <span v-show={!this.edit[4]}>******</span>
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
