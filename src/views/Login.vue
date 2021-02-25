<!--
 * @Description: 
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'

interface Form {
  password?: string;
  checkPass?: string;
  userName?: string;
}

@Component({
  components: {}
})
export default class Login extends Vue {
  ruleForm: Form = {}

  status = 'login'
  created() {
    this.getStatus()
  }

  getStatus() {
    this.status = this.$route.params.status
  }

  submitForm() {
    console.log('submit')
  }

  resetForm() {
    console.log('reset')
  }
  
  protected render() {
    return (
      <div class="login-form">
        <h2>{this.status === 'login' ? '登录' : '注册'}</h2>
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
          <el-form-item v-show={this.status !== 'login'} label="确认密码" prop="checkPass">
            <el-input type="password" v-model={this.ruleForm.checkPass} autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" onClick={this.submitForm}>
              确认
            </el-button>
            <el-button onClick={this.resetForm}>重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
.login-form {
  width: 500px;
  margin: 0 auto;
  h2 {
    text-align: center;
  }
}
</style>
