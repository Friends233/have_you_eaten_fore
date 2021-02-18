<!--
 * @Description: 
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class HelloWorld extends Vue {

  protected render() {
    return (
      <h1>
      <b-alert show>HelloWorld</b-alert>
      </h1>
    )
  }
}

</script>
<style scoped lang="scss">
</style>