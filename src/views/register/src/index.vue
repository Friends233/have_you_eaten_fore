<!--
 * @Description: 注册
 * @Author: Friends233
-->
<script lang="tsx">
import { Button } from 'element-ui'
import { Component, Vue } from 'vue-property-decorator'
import Logo from '@/components/logo/index'
import { Form, User } from './index'
import { userLogin, userRegister } from '@/api/user'

@Component({
  components: { Logo }
})
export default class Register extends Vue {
  $refs!: {
    ruleForm: any;
  }

  ruleForm: Form = {}

  rules = {
    userName: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'change' }
    ],
    // phoneNumber: [{ type: 'phoneNumber', required: true, message: '请输入手机号码', trigger: 'change' }],
    checkPass: [
      { required: true, message: '请再次输入密码', trigger: 'blur' },
      { min: 6, max: 12, message: '密码长度在 6 到 12 个字符', trigger: 'change' },
      { validator: this.validateCheckPass, trigger: 'blur' }
    ],
    checked: [{ required: true, message: '请勾选服务协议', trigger: 'blur' }],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 6, max: 12, message: '密码长度在 6 到 12 个字符', trigger: 'change' }
    ]
  }

  validateCheckPass(rule: any, value: string, callback: Function) {
    if (value && value !== this.ruleForm.password) {
      callback('两次密码输入不一致')
    }
    callback()
  }

  submitForm() {
    try {
      this.$refs.ruleForm.validate(async (status: boolean) => {
        const params: User = {
          userName: this.ruleForm.userName || '',
          userPass: this.ruleForm.password || '',
          userAvatar: '//s0.meituan.net/bs/fe-web-meituan/e3064a3/img/head-img.png'
        }
        if (status) {
          const res: any = await userRegister(params)
          if (res.code == 1) {
            this.$message({
              showClose: true,
              message: res.message,
              type: 'success'
            })
            this.ruleForm = {}
          } else {
            this.$message({
              showClose: true,
              message: res.message,
              type: 'error'
            })
          }
        }
      })
    } catch (err) {
      console.log(err)
    }
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
            rules={this.rules}
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
        margin-top: 25px;
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
@media screen and (max-width: 600px) {
  .login-form-wrapper {
    .login-top {
      width: $bodyMiniWidth;
    }
    .login-form {
      width: $bodyMiniWidth;
      .el-form-item {
        &:nth-child(2) {
          ::v-deep .el-input {
            width: 65%;
          }
        }
      }
    }
  }
}
</style>
