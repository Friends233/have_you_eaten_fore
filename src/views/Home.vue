<!--
 * @Description: 
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'
import EatenHeader from '@/components/EatenHeader/index'
import Carousel from '@/components/Carousel/index'

@Component({
  components: { EatenHeader,Carousel }
})
export default class HelloWorld extends Vue {
  protected render() {
    return (
      <div>
        <eaten-header></eaten-header>
        <carousel></carousel>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
</style>