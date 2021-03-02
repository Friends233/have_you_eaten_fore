<!--
 * @Description: 登录
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'
import Logo from '@/components/logo/index'

interface Form {
  password?: string;
  userName?: string;
}

@Component({
  components: {Logo}
})
export default class Login extends Vue {
  ruleForm: Form = {}

  submitForm() {
    console.log('submit')
  }

  protected render() {
    return (
      <div class="login-form-wrapper">
        <div class="login-top">
          <logo></logo>
          <router-link to={{ name: 'register' }}>注册</router-link>
        </div>
        <div class="top-line"></div>
        <div class="login-form">
          <h2>登录</h2>
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
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model={this.ruleForm.password} autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <router-link to={{name:'register'}}>忘记密码?</router-link>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" onClick={this.submitForm}>
                登录
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
      &:last-child {
        ::v-deep .el-form-item__content {
          button {
            width: 100%;
          }
        }
      }
      &:nth-child(3) {
        text-align: right;
      }
    }
    h2 {
      text-align: center;
    }
  }
}
</style>
