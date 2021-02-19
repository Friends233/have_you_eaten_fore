<!--
 * @Description: 导航栏
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class EatenHeader extends Vue {
  handleSelect(key: string, keyPath: Array<number>) {
    console.log(key, keyPath)
  }

  protected render() {
    return (
      <div class="eaten-header">
        <div class="eaten-header-top">1</div>
        <div class="eaten-header-mid">
          <div class="eaten-header-mid-logo">logo</div>
          <div class="eaten-header-mid-search">search</div>
        </div>
        <el-menu default-active="activeIndex" class="eaten-header-nav" mode="horizontal" onSelect={this.handleSelect}>
          <el-submenu index="1">
            <template slot="title">我的工作台1</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">我的工作台2</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">我的工作台3</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">我的工作台4</template>
            <el-menu-item index="4-1">选项1</el-menu-item>
            <el-menu-item index="4-2">选项2</el-menu-item>
            <el-menu-item index="4-3">选项3</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
</style>