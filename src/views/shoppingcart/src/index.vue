<!--
 * @Description: 购物车
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class ShoppingCart extends Vue {
  private visible = false

  handleClose(){
    console.log("close")
  }

  protected render() {
    return (
      <div>
      <button onClick={()=>this.visible = true}>打开</button>
        <el-drawer
          title="购物车"
          visible={this.visible}
          {...{ on: { 'update:visible': (e: any) => (this.visible = e) } }}
          onBeforeClose={this.handleClose}>
          <span>购物车</span>
        </el-drawer>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
@import '@/styles/constant.scss';
</style>
