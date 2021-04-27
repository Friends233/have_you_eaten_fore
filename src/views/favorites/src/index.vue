<!--
 * @Description: 收藏
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue, Watch } from 'vue-property-decorator'

const indexToView = ['', 'first', 'second', 'third', 'fourth']

@Component({
  components: {}
})
export default class Order extends Vue {
  activeName = 'first'

  @Watch('$route', { deep: true })
  listenersRouter(val: any) {
    this.activeName = indexToView[Number(val.query.index)] || 'first'
  }
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
@media screen and (max-width: 600px) {
  .el-tabs {
    ::v-deep .el-tabs__nav-scroll {
      .el-tabs__item {
        font-size: 8px;
        padding: 0 5px;
        height: 30px;
        line-height: 30px;
      }
    }
  }
}
</style>
