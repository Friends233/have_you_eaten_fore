<!--
 * @Description: 抵用券
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Order extends Vue {
  activeName = 'first'

  protected render() {
    return (
      <el-tabs v-model={this.activeName}>
        <el-tab-pane label="可用卷" name="first">
          <span>您还没抵用券</span>
        </el-tab-pane>
        <el-tab-pane label="失效卷" name="second">
          <span>您还没抵用券</span>
        </el-tab-pane>
      </el-tabs>
    )
  }
}
</script>
<style scoped lang="scss">
@import '@/styles/constant.scss';
.el-tabs {
}
</style>
