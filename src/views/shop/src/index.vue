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
import { Goods, UserApp } from './index'

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
    { id: '1', name: '寿喜锅2-3人餐', desc: '清淡，好吃美味', sold: '月售104', price: 1.16 },
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

  visible = true
  elTabIndex = 'first'
  protected render() {
    return (
      <div class="shop-wrapper">
        <eaten-header></eaten-header>
        <el-dialog
          lock-scroll={false}
          custom-class="food-dialog"
          modal-append-to-body={false}
          visible={this.visible}
          {...{ on: { 'update:visible': (e: any) => (this.visible = e) } }}
          width="600px">
          <div class="img-backgorund">
            <img src="https://img.meituan.net/msmerchant/c344e8b9ab73f43596eac885b790f175148974.jpg@600w_600h_1l" />
          </div>
          <div class="food-dialog-mid">
            <div>
              <span>月售 4071</span>
              <span>好评率 98%</span>
            </div>
            <div>5.7折</div>
            <div>
              <span class="pri">15.9</span>
              <span class="del">￥27.9</span>
              <span class="other">包装费￥1/份</span>
              <el-button type="primary" size="small" icon="el-icon-plus" round>
                加入购物车
              </el-button>
            </div>
          </div>
          <el-tabs v-model={this.elTabIndex} class="food-dialog-footer">
            <el-tab-pane label="商品信息" name="first">
              商品信息
            </el-tab-pane>
            <el-tab-pane label="评价" class="shop-card-appraisal" name="second">
              <appraisal></appraisal>
            </el-tab-pane>
          </el-tabs>
        </el-dialog>
        <div class="shop">
          <el-breadcrumb class="shop-breadcrumb" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item to={{ name: 'Home' }}>首页</el-breadcrumb-item>
            <el-breadcrumb-item to={{ name: 'shoplist' }}>店铺列表</el-breadcrumb-item>
            <el-breadcrumb-item to={{ name: 'shop' }}>店铺详情</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="shop-header">
            <div class="shop-header-left">
              <div>
                <p class="shop-header-left-title">晓寿司（望京soho店)</p>
                <div>
                  <star num={4.8} size={'16'}></star>
                  <p>4.8分人均￥63</p>
                </div>
              </div>
              <div>
                <p>
                  地址：朝阳区望京街望京soho-T1楼2层1220铺<i class="el-icon-location-information"></i>
                </p>
                <p>电话：010-57076520</p>
                <p>营业时间：周一至周日 10:00-21:00)</p>
              </div>
              <div>
                <ul>
                  <li>
                    <img src="https://p0.meituan.net/codeman/551290739062eda37e52999e2315f50c1887.png" />
                    <p>提供wifi</p>
                  </li>
                  <li>
                    <img src="https://p1.meituan.net/codeman/4b1c5696fe5bf2c4d23fb01659b3e68b1960.png" />
                    <p>停车位</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="shop-header-right">
              <div>
                <img src="https://p1.meituan.net/merchant/5cfc2788fbec889cbf14e6a680a99e3d82463.jpg@380w_214h_1e_1c" />
              </div>
              <div>
                <el-image
                  style="width: 100px; height: 100px"
                  src="https://p1.meituan.net/merchant/5cfc2788fbec889cbf14e6a680a99e3d82463.jpg@380w_214h_1e_1c"
                  preview-src-list={this.srcList}></el-image>
                <el-image
                  style="width: 100px; height: 100px"
                  src="https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg"
                  preview-src-list={this.srcList}></el-image>
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
                          <img src="https://p0.meituan.net/208.126/deal/b1e92804330780f5e84044a8ba94033c53272.jpg@100w_100h_1e_1c" />
                          <div class="shop-card-list-text">
                            <p class="shop-card-list-name">{item.name}</p>
                            <p class="shop-card-list-desc">{item.desc}</p>
                            <p class="shop-card-list-sold">{item.sold}</p>
                          </div>
                          <p class="shop-card-list-price">￥{item.price}</p>
                          <el-button type="primary" icon="el-icon-plus" plain>
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
                        <img width="60" src={item.avatar} />
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
                                  style="width: 140px; height: 140px"
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
  ::v-deep .food-dialog {
    background-color: #f8f8f8;
    .el-dialog__headerbtn {
      left: 20px;
      .el-dialog__close {
        font-size: 25px;
        &::before {
          content: '<';
          display: inline-block;
          width: 28px;
          height: 28px;
          background-color: rgba($color: #000000, $alpha: 0.3);
          border-radius: 50%;
        }
      }
    }
    .el-dialog__body {
      padding: 0;
      .img-backgorund {
        margin-top: -30px;
      }
      .food-dialog-footer {
        width: 550px;
        background-color: white;
        margin: 20px auto;
        border-radius: 6px;
        padding: 0 15px;
      }
      .food-dialog-mid {
        width: 550px;
        background-color: white;
        margin: 10px auto;
        border-radius: 6px;
        padding: 15px;
        & > div {
          &:nth-child(1) {
            span {
              font-size: 13px;
              color: #868a8a;
              &:last-child {
                margin-left: 10px;
              }
            }
          }
          &:nth-child(2) {
            margin: 10px 0;
            color: #f60;
            font-size: 13px;
            border: 1px solid #f60;
            padding: 2px;
            display: inline-block;
            border-radius: 5px;
          }
          &:nth-child(3) {
            & > span {
              margin-right: 6px;
            }
            .pri {
              color: rgb(255, 38, 0);
              font-size: 18px;
              font-weight: 700;
              &::before {
                content: '￥';
                display: inline-block;
                font-size: 13px;
              }
            }
            .del {
              position: relative;
              &::after {
                content: '';
                display: inline-block;
                position: absolute;
                width: 50px;
                border-top: 1px solid #868a8a;
                width: 100%;
                top: 10px;
                left: 2px;
              }
            }
            .other .del {
              font-size: 13px;
              color: #868a8a;
            }
            .el-button {
              float: right;
            }
          }
        }
      }
    }
  }
  .shop {
    width: $bodyWidth;
    margin: 20px auto;
    &-header {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #666;
      background-color: #fff;
      border-radius: 10px;
      padding: 20px 20px 33px;
      border: 1px solid #e5e5e5;
      box-shadow: 0 5px 14px 0 rgb(0 0 0 / 10%);
      &-left {
        flex: 0 0 852px;
        &-title {
          font-size: 26px;
          line-height: 37px;
          margin: 0;
        }
        & > div {
          border-bottom: 1px solid #e5e5e5;
          margin-top: 25px;
          &:nth-child(1) {
            margin-top: 10px;
            & > div {
              display: flex;
              margin: 10px 0;
              p {
                margin: 0;
                font-size: 16px;
              }
            }
          }
          &:nth-child(2) {
            p {
              font-size: 14px;
            }
          }
          &:nth-child(3) {
            border: none;
          }
          ul {
            display: flex;
            margin-top: 10px;
            li {
              margin-right: 20px;
              text-align: center;
              img {
                width: 24px;
                height: 24px;
              }
            }
          }
        }
      }
      &-right {
        flex: 0 0 214px;
      }
    }
    &-card {
      margin-top: 20px;
      ::v-deep .el-tabs__header .el-tabs__item {
        text-align: center;
        width: 120px;
        line-height: 60px;
        height: 60px;
        font-size: 17px;
      }
      ::v-deep .el-tabs__content .el-tabs__item {
        height: 75px;
        line-height: 75px;
        font-size: 16px;
      }
      &-list {
        height: 847px;
        overflow-y: scroll;
        &-name {
          font-size: 16px;
          margin-top: 0;
        }
        &-desc {
          font-size: 14px;
          color: #868a8a;
        }
        &-sold {
          font-size: 12px;
          color: #666;
        }
        &-price {
          font-size: 30px;
          color: #f60;
          width: 300px;
        }
        &-text {
          margin: 0 30px;
          width: 350px;
        }
        li {
          height: 100px;
          display: flex;
          border-bottom: 1px solid #e5e5e5;
          padding: 10px 5px;
          cursor: pointer;
          &:hover {
            background-color: #fbfbfb;
          }
          button {
            height: 40px;
            align-self: center;
            border-radius: 15px;
            margin-left: 50px;
          }
        }
      }
      &-appraisal {
        padding: 10px;
        &-tag {
          &::after {
            content: '';
            display: block;
            clear: both;
          }
          li {
            padding: 5px 10px;
            float: left;
            font-size: 14px;
            line-height: 34px;
            padding: 0 10px;
            border: 1px solid #e5e5e5;
            border-radius: 2px;
            margin: 0 10px 10px 0;
            cursor: pointer;
          }
        }
        &-content {
          margin-top: 30px;
          li {
            display: flex;
            & > div {
              .user-name {
                margin: 5px 0;
                font-size: 16px;
              }
              .mid-line {
                display: flex;
                justify-content: space-between;
                .time {
                  font-size: 12px;
                  line-height: 20px;
                  color: #999;
                }
              }
              .img-list {
                margin: 15px 0;
                .el-image {
                  margin-right: 15px;
                }
              }
              .like {
                text-align: right;
                margin: 50px 20px 20px 0;
                cursor: pointer;
                ::v-deep .el-checkbox__input {
                  display: none;
                }
              }
              &:first-child {
                width: 250px;
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
</style>
