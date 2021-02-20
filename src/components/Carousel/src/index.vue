<!--
 * @Description: 轮播图
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class EatenHeader extends Vue {
  imgAddress: Array<object> = [
    { id: '1', address: 'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png' },
    { id: '2', address: 'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg' },
    { id: '3', address: 'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg' },
    { id: '4', address: 'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg' }
  ]

  protected render() {
    return (
      <div class="carousel">
        <el-card class="carousel-card-left" shadow="never">从不显示</el-card>
        <el-carousel trigger="click" height="400px">
          {this.imgAddress.map((item: any) => {
            return (
              <el-carousel-item key={item.id}>
                <img width="949" height="400" src={item.address} />
              </el-carousel-item>
            )
          })}
        </el-carousel>
        <el-card class="carousel-card-right" shadow="never">从不显示</el-card>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
@import '@/styles/constant.scss';
.carousel {
  display: flex;
  justify-content: space-between;
  padding: 0 $padding;
  margin-top: 10px;
  .el-carousel {
    width: 865px;
  }
  .el-card {
    width: 228px;
  }
  &-card-left {
    margin-top: -45px;
  }
}
</style>