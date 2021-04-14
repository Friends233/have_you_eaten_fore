<!--
 * @Description: 页脚
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class EatenFooter extends Vue {
  staticDataOne: Array<string> = ['关于我们', '招贤纳士', '广告服务', '开发助手', 'friends233@foxmail.com', 'hxd吃了吗']

  protected render() {
    return (
      <div class="eaten-footer">
        <p>
          关于我们 招贤纳士 广告服务 开发助手 201706581232 qq1054505137 friends233@foxmail.com
          hxd吃了吗
        </p>
        <p>
          公安备案号11010502030143 京ICP备19004658号 京网文〔2020〕1039-165号 经营性网站备案信息
          北京互联网违法和不良信息举报中心
        </p>
        <p>
          网络110报警服务 中国互联网举报中心 家长监护 Chrome商店下载 ©1999-2021北京创新乐知网络技术有限公司
          版权与免责声明 版权申诉
        </p>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
@import '@/styles/constant.scss';
.eaten-footer {
  width: $bodyWidth;
  margin: 0 auto;
  box-sizing: border-box;
  cursor: pointer;
  border-top: 1px solid #E5E5E5;
  margin-top: 50px;
  p {
    text-align: center;
    &:first-child {
      font-size: 14px;
      text-align: center;
    }
    font-size: 12px;
    color: #999aaa;
  }
}
@media screen and (max-width: 600px) {
  .eaten-footer {
    p {
      font-size: 10px !important;
    }
  }
}
</style>
