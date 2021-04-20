<!--
 * @Description: 抵用券
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue,Watch } from 'vue-property-decorator'

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
