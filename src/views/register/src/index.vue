<!--
 * @Description: 注册
 * @Author: Friends233
-->
<script lang="tsx">
import { Button } from 'element-ui'
import { Component, Vue } from 'vue-property-decorator'
import Logo from '@/components/logo/index'
import { getUserAll } from './api'

interface Form {
  password?: string;
  checkPass?: string;
  phoneNumber?: number;
  userName?: string;
  verificationCode?: string;
  checked?: boolean;
}

@Component({
  components: { Logo }
})
export default class Register extends Vue {
  ruleForm: Form = {}

  async submitForm() {
    getUserAll().then(res => {
      console.log(res)
    })
  }

  protected render() {
    return (
      <div class="login-form-wrapper">
        <div class="login-top">
          <logo></logo>
          <router-link to={{ name: 'login' }}>登录</router-link>
        </div>
        <div class="top-line"></div>
        <div class="login-form">
          <h2>注册</h2>
          <el-form
            {...{
              props: {
                model: this.ruleForm
              }
            }}
            status-icon
            ref="ruleForm"
            class="ruleForm">
            <el-form-item label="用户名" prop="userName">
              <el-input v-model={this.ruleForm.userName}></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phoneNumber">
              <el-input v-model={this.ruleForm.phoneNumber}></el-input>
              <Button>获取验证码</Button>
            </el-form-item>
            <el-form-item label="短信动态码" prop="verificationCode">
              <el-input v-model={this.ruleForm.verificationCode}></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model={this.ruleForm.password} autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model={this.ruleForm.checkPass} autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="checked">
              <el-checkbox v-model={this.ruleForm.checked}>同意 hxd吃了吗用户服务协议</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" onClick={this.submitForm}>
                注册
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
@import '@/styles/constant.scss';
.login-form-wrapper {
  .login-top {
    width: $miniWidth;
    margin: 0 auto;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      margin-right: 10px;
      display: inline-block;
      padding: 5px 10px;
      border: 1px solid bisque;
      background-color: #ffc300;
      font-size: 12px;
      border-radius: 2px;
      &:hover {
        background-color: #ffc400d0;
      }
    }
  }
  .top-line {
    width: 100%;
    border-top: 2px solid #d8d8d8;
  }
  .login-form {
    width: 500px;
    margin: 0 auto;
    .el-form-item {
      margin-bottom: 15px;
      ::v-deep label {
        width: 100%;
        text-align: left;
      }
      &:last-child {
        ::v-deep .el-form-item__content {
          button {
            width: 100%;
          }
        }
      }
      &:nth-child(2) {
        ::v-deep .el-input {
          width: 77%;
        }
      }
    }
    h2 {
      text-align: center;
    }
  }
}
</style>
