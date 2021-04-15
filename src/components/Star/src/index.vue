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
  // 是否显示后面的文案
  @Prop({ default: false, type: Boolean }) readonly showText?: boolean

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
        <span v-show={this.showText}>{this.num}分</span>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
.star-wrapper {
  height: 1.5rem;
  .star {
    display: inline-block;
    margin-right: 4px;
  }
  .star13 {
    width: 0.81rem;
    height: 0.81rem;
    background-size: 0.81rem 0.81rem;
  }
  .star16 {
    width: 1rem;
    height: 1rem;
    background-size: 1rem 1rem;
  }
  .star24 {
    width: 1.5rem;
    height: 1.5rem;
    background-size: 1.5rem 1.5rem;
  }
  .star32 {
    width: 2rem;
    height: 2rem;
    background-size: 2rem 2rem;
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
