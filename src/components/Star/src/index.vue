<!--
 * @Description: 星星
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Star extends Vue {
  // 星星数量
  @Prop({ default: 5.0, type: Number }) readonly num?: number
  // 星星大小,13、16、24、32
  @Prop({ default: '24', type: String }) readonly size?: string

  get getStar(): Array<string> {
    const ary: Array<string> = []
    const num: number = this.num || 5.0
    for (let i = 0; i < 5; i++) {
      if (i < num && i + 1 > num) {
        ary.push('half')
      } else if (i < num) {
        ary.push('on')
      } else {
        ary.push('off')
      }
    }
    return ary
  }
  protected render() {
    return (
      <div class="star-wrapper">
        {this.getStar.map((item) => {
          return <span class={`star star${this.size} star${item}`}></span>
        })}
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
.star-wrapper {
  height: 24px;
  .star {
    display: inline-block;
    margin-right: 4px;
  }
  .star13 {
    width: 13px;
    height: 13px;
    background-size: 13px 13px;
  }
  .star16 {
    width: 16px;
    height: 16px;
    background-size: 16px 16px;
  }
  .star24 {
    width: 24px;
    height: 24px;
    background-size: 24px 24px;
  }
  .star32 {
    width: 32px;
    height: 32px;
    background-size: 32px 32px;
  }
  .staron {
    background-image: url('./icon/star36_on@3x.png');
  }
  .staroff {
    background-image: url('./icon/star36_off@3x.png');
  }
  .starhalf {
    background-image: url('./icon/star36_half@3x.png');
  }
}
</style>
