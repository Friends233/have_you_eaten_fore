<!--
 * @Description: 评论列表
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'
import Star from '@/components/Star/index'
import { Goods, UserApp } from './index'

@Component({
  components: {Star}
})
export default class Appraisal extends Vue {
  // 评价的排序标签
  appraisalTags: Array<string> = [
    '味道赞(85)',
    '性价比高(70)',
    '菜品不错(50)',
    '上菜快(70)',
    '到店自提(70)',
    '分量足(68)',
    '回头客(44)',
    '朋友聚餐(20)',
    '价格实惠(7)'
  ]
  appraisals: Array<UserApp> = [
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
  ]

  protected render() {
    return (
      <div class="shop-card-appraisal">
        <h2 class="shop-card-appraisal-total">2158条网友点评</h2>
        <ul class="shop-card-appraisal-tag">
          {this.appraisalTags.map((item) => {
            return <li>{item}</li>
          })}
        </ul>
        <ul class="shop-card-appraisal-content">
          {this.appraisals.map((item: UserApp) => {
            return (
              <li key={item.id}>
                <div>
                  <img src={item.avatar} />
                </div>
                <div>
                  <p class="user-name">{item.name}</p>
                  <div class="mid-line">
                    <star showText={true} num={item.rating} size={'13'}></star>
                    <span class="time">{item.time}</span>
                  </div>
                  <span class="appraisal-content">{item.content}</span>
                  <div class="img-list">
                    {item.imgUrl &&
                      item.imgUrl.map((i: string) => {
                        return (
                          <el-image
                            src={i}
                            preview-src-list={item.imgUrl}></el-image>
                        )
                      })}
                  </div>
                  <div class="like">
                    <el-checkbox text-color="">
                      <span>
                        <i class="el-icon-thumb"></i>点赞
                      </span>
                    </el-checkbox>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
.shop-card-appraisal {
  padding: 0.63rem;
  &-tag {
    &::after {
      content: '';
      display: block;
      clear: both;
    }
    li {
      padding: 5px 0.63rem;
      float: left;
      font-size: 0.88rem;
      line-height: 2.13rem;
      padding: 0 0.63rem;
      border: 1px solid #e5e5e5;
      border-radius: 2px;
      margin: 0 0.63rem 0.63rem 0;
      cursor: pointer;
    }
  }
  &-content {
    margin-top: 1.88rem;
    li {
      display: flex;
      & > div {
        img {
          width: 3.75rem;
        }
        .user-name {
          margin: 5px 0;
          font-size: 1rem;
        }
        .mid-line {
          display: flex;
          justify-content: space-between;
          .time {
            font-size: 0.75rem;
            line-height: 1.25rem;
            color: #999;
          }
        }
        .img-list {
          margin: 0.94rem 0;
          .el-image {
            margin-right: 0.63rem;
            width: 10.3rem;
            height: 10.3rem;
          }
        }
        .like {
          text-align: right;
          margin: 3.13rem 1.25rem 1.25rem 0;
          cursor: pointer;
          ::v-deep .el-checkbox__input {
            display: none;
          }
        }
        &:last-child {
          margin-left: 0.94rem;
          border-bottom: 1px solid #e5e5e5;
        }
      }
    }
  }
}
</style>