<!--
 * @Description: 
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class ProductCard extends Vue {
  protected render() {
    return (
      <el-card body-style={'padding: 10px;'}>
        <img
          width="213"
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        />
        <div>
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <time class="time"></time>
            <el-button type="text" class="button">
              操作按钮
            </el-button>
          </div>
        </div>
      </el-card>
    )
  }
}
</script>
<style scoped lang="scss">
.el-card {
  width: 233px;
  cursor: pointer;
  // float: left;
}
</style>
