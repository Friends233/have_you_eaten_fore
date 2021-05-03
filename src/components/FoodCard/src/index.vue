<!--
 * @Description: 食物卡片
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Food from '@/views/food'
import { UserApp, GoodDetails } from './index'
import { getFood } from '@/api/all'

@Component({
  components: { Food }
})
export default class FoodCard extends Vue {
  [x: string]: any
  @Prop() card!: any

  visible = false

  foodVal: { appraisalTags?: string[]; appraisals?: UserApp[]; goodD?: GoodDetails } = {
    // 评价的排序标签
    appraisalTags: [
      '味道赞(85)',
      '性价比高(70)',
      '菜品不错(50)',
      '上菜快(70)',
      '到店自提(70)',
      '分量足(68)',
      '回头客(44)',
      '朋友聚餐(20)',
      '价格实惠(7)'
    ],
    appraisals: [
      {
        id: '133',
        name: 'haole',
        rating: 4.8,
        content:
          '吃的很饱，寿司很好吃，海带丝也很好吃， 凑字数 孟子曰：天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为，所以动心忍性，增益其所不能。太史公曰：古者富贵而名摩灭，不可胜记，唯倜傥非常之人称焉。盖文王拘而演《周易》；仲尼厄而作《春秋》；屈原放逐，乃赋《离骚》；左丘失明，厥有《国语》；孙子膑脚，《兵法》修列；不韦迁蜀，世传《吕览》；韩非囚秦，《说难》《孤愤》；《诗》三百篇，大底圣贤发愤之所为作也。',
        time: '2021年2月21日',
        avatar: 'https://www.dpfile.com/ugc/user/anonymous.png',
        imgUrl: [
          'https://p0.meituan.net/shaitu/c1c9fcf5b6105e68aa3eab70ac27ef03884501.jpg',
          'https://p0.meituan.net/shaitu/b47d954c79fb2ac797bb71226170d0995057150.jpg',
          'https://p0.meituan.net/shaitu/bb45ac8e7fbf4016028030f42acb6c1e799653.jpg'
        ]
      },
      {
        id: '2333',
        name: 'haole',
        rating: 4.8,
        content:
          '吃的很饱，寿司很好吃，海带丝也很好吃， 凑字数 孟子曰：天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为，所以动心忍性，增益其所不能。太史公曰：古者富贵而名摩灭，不可胜记，唯倜傥非常之人称焉。盖文王拘而演《周易》；仲尼厄而作《春秋》；屈原放逐，乃赋《离骚》；左丘失明，厥有《国语》；孙子膑脚，《兵法》修列；不韦迁蜀，世传《吕览》；韩非囚秦，《说难》《孤愤》；《诗》三百篇，大底圣贤发愤之所为作也。',
        time: '2021年2月21日',
        avatar: 'https://www.dpfile.com/ugc/user/anonymous.png',
        imgUrl: [
          'https://p0.meituan.net/shaitu/c1c9fcf5b6105e68aa3eab70ac27ef03884501.jpg',
          'https://p0.meituan.net/shaitu/b47d954c79fb2ac797bb71226170d0995057150.jpg',
          'https://p0.meituan.net/shaitu/bb45ac8e7fbf4016028030f42acb6c1e799653.jpg'
        ]
      },
      {
        id: '3333',
        name: 'haole',
        rating: 4.8,
        content:
          '吃的很饱，寿司很好吃，海带丝也很好吃， 凑字数 孟子曰：天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为，所以动心忍性，增益其所不能。太史公曰：古者富贵而名摩灭，不可胜记，唯倜傥非常之人称焉。盖文王拘而演《周易》；仲尼厄而作《春秋》；屈原放逐，乃赋《离骚》；左丘失明，厥有《国语》；孙子膑脚，《兵法》修列；不韦迁蜀，世传《吕览》；韩非囚秦，《说难》《孤愤》；《诗》三百篇，大底圣贤发愤之所为作也。',
        time: '2021年2月21日',
        avatar: 'https://www.dpfile.com/ugc/user/anonymous.png',
        imgUrl: [
          'https://p0.meituan.net/shaitu/c1c9fcf5b6105e68aa3eab70ac27ef03884501.jpg',
          'https://p0.meituan.net/shaitu/b47d954c79fb2ac797bb71226170d0995057150.jpg',
          'https://p0.meituan.net/shaitu/bb45ac8e7fbf4016028030f42acb6c1e799653.jpg'
        ]
      }
    ],
    // 商品详情
    goodD: {}
  }

  async viewFood(item: any) {
    try {
      const data: any = await getFood(item.id)
      this.$set(this.foodVal, 'goodD', { ...data.data })
      console.log(this.foodVal.goodD)
      this.visible = true
    } catch (err) {
      console.log(err)
    }
  }

  shopping(e: any) {
    e.stopPropagation()
    this.$showCart(this.card.id, true)
  }

  protected render() {
    return (
      <div>
        <el-card body-style={'padding: 0;'}>
          <img src={this.card.imgUrl} onClick={() => this.viewFood(this.card)} />
          <div class="el-card-text" onClick={() => this.viewFood(this.card)}>
            <span class="el-card-text-title">{this.card.name}</span>
            <div class="el-card-text-location">{this.card.desc}</div>
            <div class="el-card-text-price">￥{this.card.price}起</div>
            <div class="el-card-text-bottom">
              <el-button type="text" onClick={this.shopping}>
                <i class="el-icon-plus"></i>
                加入购物车
              </el-button>
            </div>
          </div>
          <food v-model={this.foodVal} show={this.visible} onHideView={(e: any) => (this.visible = e)}></food>
        </el-card>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
.el-card {
  // width: 233px;
  width: 100%;
  cursor: pointer;
  ::v-deep .el-card__body {
    > img {
      width: 14.56rem;
    }
  }
  &-text {
    padding-left: 0.63rem;
    margin-top: 0.63rem;
    &-title {
      font-size: 1.13rem;
    }
    &-location {
      font-size: 0.75rem;
      color: #999999;
      width: 100%;
      height: 1.13rem;
      line-height: 1.13rem;
    }
    &-price {
      margin-top: 5px;
      color: #ff6600;
      font-size: 1rem;
      font-weight: 700;
    }
    &-bottom {
      text-align: right;
      .el-button {
        padding: 0.63rem 0.94rem;
      }
    }
  }
}
</style>
