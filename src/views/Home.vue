<!--
 * @Description: 
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'
import EatenHeader from '@/components/EatenHeader/index'

@Component({
  components: { EatenHeader }
})
export default class HelloWorld extends Vue {
  protected render() {
    return (
      <div>
        <eaten-header></eaten-header>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
</style>