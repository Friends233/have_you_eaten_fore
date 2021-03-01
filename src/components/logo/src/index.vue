<!--
 * @Description: 
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Logo extends Vue {
  logoImg: string = require('@/assets/logo.png')
  goHome(){
    this.$router.push({name:'Home'})
  }
  protected render() {
    return <img onClick={this.goHome} title="首页" src={this.logoImg} />
  }
}
</script>
<style scoped lang="scss">
img {
  cursor: pointer;
}
</style>

