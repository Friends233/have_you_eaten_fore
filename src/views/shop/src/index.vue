<!--
 * @Description: 店铺详情页面
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'
import Star from '@/components/Star/index'
import EatenHeader from '@/components/EatenHeader/index'
import EatenFooter from '@/components/EatenFooter/index'
import Appraisal from '@/components/Appraisal/index'
import Food from '@/views/food'
import { Goods, UserApp, GoodDetails, Shops } from './index'

@Component({
  components: { EatenHeader, EatenFooter, Star, Food, Appraisal }
})
export default class Shop extends Vue {
  // 卡片的图片列表
  srcList: Array<string> = [
    'https://p1.meituan.net/merchant/5cfc2788fbec889cbf14e6a680a99e3d82463.jpg@380w_214h_1e_1c',
    'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
    'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
  ]
  // 点餐的商品列表
  goodsList: Array<Goods> = [
    {
      id: '1',
      name: '寿喜锅2-3人餐',
      desc: '清淡，好吃美味',
      sold: '月售104',
      price: 1.16,
      url: '//p0.meituan.net/208.126/deal/b1e92804330780f5e84044a8ba94033c53272.jpg@100w_100h_1e_1c'
    },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' },
    { id: '10' }
  ]
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
    goodD: {
      desc: '或许已经没有比一顿寿司更美味的食物了',
      material: '大米',
      taste: '微辣，中辣，特辣',
      priceDescription: '',
      monthlySale: 4071,
      favorableRate: 98,
      discount: 0.57,
      price: 27.9,
      packagingCosts: 2
    }
  }

  // 评价的排序标签
  appraisalTags = [
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
  appraisals = [
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

  shop: Shops = {
    name: '晓寿司（望京soho店)',
    rating: 4.8,
    price: 63,
    address: '朝阳区望京街望京soho-T1楼2层1220铺',
    phoneNumber: '010-57076520',
    business: '周一至周日 10:00-21:00',
    desc: ['wifi', 'stop'],
    coverImg: [
      'https://p1.meituan.net/merchant/5cfc2788fbec889cbf14e6a680a99e3d82463.jpg@380w_214h_1e_1c',
      'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
      'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
    ]
  }
  visible = false
  elTabIndex = 'first'

  addShoppingCart(item: any, e: any) {
    console.log(item, e, '加入购物车')
    e.stopPropagation()
  }

  protected render() {
    return (
      <div class="shop-wrapper">
        <eaten-header></eaten-header>
        <food v-model={this.foodVal} show={this.visible} onHideView={(e: any) => (this.visible = e)}></food>
        <div class="shop">
          <el-breadcrumb class="shop-breadcrumb" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item to={{ name: 'Home' }}>首页</el-breadcrumb-item>
            <el-breadcrumb-item to={{ name: 'shoplist' }}>店铺列表</el-breadcrumb-item>
            <el-breadcrumb-item to={{ name: 'shop' }}>店铺详情</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="shop-header">
            <div class="shop-header-left">
              <div>
                <p class="shop-header-left-title">{this.shop.name}</p>
                <div>
                  <star num={this.shop.rating} size={'16'}></star>
                  <p>
                    {this.shop.rating}分人均￥{this.shop.price}
                  </p>
                </div>
              </div>
              <div>
                <p>
                  地址：{this.shop.address}
                  <i class="el-icon-location-information"></i>
                </p>
                <p>电话：{this.shop.phoneNumber}</p>
                <p>营业时间：{this.shop.business}</p>
              </div>
              <div>
                <ul>
                  {this.shop.desc?.includes('wifi') && (
                    <li>
                      <img src="https://p0.meituan.net/codeman/551290739062eda37e52999e2315f50c1887.png" />
                      <p>提供wifi</p>
                    </li>
                  )}
                  {this.shop.desc?.includes('stop') && (
                    <li>
                      <img src="https://p1.meituan.net/codeman/4b1c5696fe5bf2c4d23fb01659b3e68b1960.png" />
                      <p>停车位</p>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div class="shop-header-right none-600">
              <div>
                <img src={this.shop.coverImg && this.shop.coverImg[0]} />
              </div>
              <div>
                {this.shop.coverImg &&
                  this.shop.coverImg.map((item) => {
                    return (
                      <el-image
                        style="width: 100px; height: 100px"
                        src={item}
                        preview-src-list={this.srcList}></el-image>
                    )
                  })}
              </div>
            </div>
          </div>
          <el-tabs class="shop-card" type="border-card">
            <el-tab-pane label="点餐">
              <el-tabs tab-position="left">
                <el-tab-pane label="热销">
                  <ul class="shop-card-list">
                    {this.goodsList.map((item) => {
                      return (
                        <li onClick={() => (this.visible = true)} key={item.id}>
                          <img src={item.url} />
                          <div class="shop-card-list-text">
                            <p class="shop-card-list-name">{item.name}</p>
                            <p class="shop-card-list-desc">{item.desc}</p>
                            <p class="shop-card-list-sold">{item.sold}</p>
                          </div>
                          <p class="shop-card-list-price">￥{item.price}</p>
                          <a class="none" onClick={(e: any) => this.addShoppingCart(item, e)}>
                            加入购物车
                          </a>
                          <el-button
                            onClick={(e: any) => this.addShoppingCart(item, e)}
                            class="none-600"
                            type="primary"
                            icon="el-icon-plus"
                            plain>
                            加入购物车
                          </el-button>
                        </li>
                      )
                    })}
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="优惠"></el-tab-pane>
                <el-tab-pane label="单人套餐">
                  <span slot="label">
                    <i class="el-icon-fork-spoon"></i>单人套餐
                  </span>
                </el-tab-pane>
                <el-tab-pane label="团队订餐"></el-tab-pane>
                <el-tab-pane label="小吃饮料">
                  <span slot="label">
                    <i class="el-icon-cold-drink"></i>小吃饮料
                  </span>
                </el-tab-pane>
                <el-tab-pane label="超值满减"></el-tab-pane>
              </el-tabs>
            </el-tab-pane>
            <el-tab-pane class="shop-card-appraisal" label="评价">
              <Appraisal></Appraisal>
            </el-tab-pane>
            <el-tab-pane label="商家信息">商家信息</el-tab-pane>
            <el-tab-pane label="店铺管理">店铺管理</el-tab-pane>
          </el-tabs>
        </div>
        <eaten-footer></eaten-footer>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
@import '@/styles/constant.scss';
.shop-wrapper {
  .shop {
    width: $bodyWidth;
    margin: 1.25rem auto;
    &-header {
      margin-top: 1.25rem;
      display: flex;
      justify-content: space-between;
      font-size: 0.75rem;
      color: #666;
      background-color: #fff;
      border-radius: 0.63rem;
      padding: 1.25rem 1.25rem 2.06rem;
      border: 1px solid #e5e5e5;
      box-shadow: 0 5px 0.88rem 0 rgb(0 0 0 / 10%);
      &-left {
        flex: 0 0 53.25rem;
        &-title {
          font-size: 1.63rem;
          line-height: 2.31rem;
          margin: 0;
        }
        & > div {
          border-bottom: 1px solid #e5e5e5;
          margin-top: 1.56rem;
          width: 90%;
          &:nth-child(1) {
            margin-top: 0.63rem;
            & > div {
              display: flex;
              margin: 0.63rem 0;
              p {
                margin: 0;
                font-size: 1rem;
              }
            }
          }
          &:nth-child(2) {
            p {
              font-size: 0.88rem;
            }
          }
          &:nth-child(3) {
            border: none;
          }
          ul {
            display: flex;
            margin-top: 0.63rem;
            li {
              margin-right: 1.25rem;
              text-align: center;
              img {
                width: 1.5rem;
                height: 1.5rem;
              }
            }
          }
        }
      }
      &-right {
        flex: 0 0 20.88rem;
      }
    }
    &-card {
      margin-top: 1.25rem;
      ::v-deep .el-tabs__header .el-tabs__item {
        text-align: center;
        width: 11.25rem;
        line-height: 3.75rem;
        height: 3.75rem;
        font-size: 1.06rem;
      }
      ::v-deep .el-tabs__content .el-tabs__item {
        height: 4.69rem;
        line-height: 4.69rem;
        font-size: 1rem;
      }
      &-list {
        height: 52.94rem;
        overflow-y: scroll;
        img {
          width: 6.25rem;
        }
        li {
          position: relative;
          > a {
            position: absolute;
            right: 8px;
            bottom: 20px;
            font-size: 9px;
            color: #409eff;
          }
        }
        &-name {
          font-size: 1rem;
          margin-top: 0;
        }
        &-desc {
          font-size: 0.88rem;
          color: #868a8a;
        }
        &-sold {
          font-size: 0.75rem;
          color: #666;
        }
        &-price {
          font-size: 1.88rem;
          color: #f60;
          width: 18.75rem;
          position: relative;
        }
        &-text {
          margin: 0 1.88rem;
          width: 33.13rem;
        }
        li {
          height: 6.25rem;
          display: flex;
          border-bottom: 1px solid #e5e5e5;
          padding: 0.63rem 5px;
          cursor: pointer;
          &:hover {
            background-color: #fbfbfb;
          }
          button {
            height: 2.5rem;
            align-self: center;
            border-radius: 0.94rem;
            margin-left: 3.13rem;
          }
        }
      }
      &-appraisal {
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
                  margin-right: 0.94rem;
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
              &:first-child {
                width: 23.13rem;
              }
              &:last-child {
                border-bottom: 1px solid #e5e5e5;
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .shop-wrapper {
    .shop {
      width: $bodyMiniWidth;
      &-header {
        &-left {
          flex: 1;
        }
      }
      &-card {
        margin-top: 1.25rem;
        ::v-deep .el-tabs__header .el-tabs__item {
          text-align: center;
          width: 8.25rem !important;
        }
        &-list {
          img {
            width: 5.25rem;
            height: 5.25rem;
          }
          &-price {
            font-size: 1rem;
            color: #f60;
            width: 18.75rem;
          }
        }
      }
    }
  }
}
</style>
