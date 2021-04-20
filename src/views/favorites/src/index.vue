<!--
 * @Description: 收藏
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
        <el-tab-pane label="收藏的商家" name="first">
          <span>您还没收藏</span>
        </el-tab-pane>
        <el-tab-pane label="收藏的团购" name="second">
          <span>您还没收藏</span>
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
