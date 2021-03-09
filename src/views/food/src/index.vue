<!--
 * @Description: 商品详情页面
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'
import EatenHeader from '@/components/EatenHeader/index'
import EatenFooter from '@/components/EatenFooter/index'

@Component({
  components: { EatenHeader, EatenFooter }
})
export default class Food extends Vue {
  visible = false

  protected render() {
    return (
      <el-dialog visible={this.visible} {...{ on: { 'update:visible': (e: any) => (this.visible = e) } }} width="30%">
        <img src="https://img.meituan.net/msmerchant/c344e8b9ab73f43596eac885b790f175148974.jpg@600w_600h_1l" />
        <el-button>加入购物车</el-button>
      </el-dialog>
    )
  }
}
</script>
<style scoped lang="scss">
</style>
