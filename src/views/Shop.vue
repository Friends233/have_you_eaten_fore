<!--
 * @Description: 店铺详情页面
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'
import Star from '@/components/Star/index'
import EatenHeader from '@/components/EatenHeader/index'
import EatenFooter from '@/components/EatenFooter/index'

interface Goods {
  id?: string;
  name?: string;
  desc?: string;
  sold?: string;
  price?: number;
}

@Component({
  components: { EatenHeader, EatenFooter, Star }
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
  // 评价的图片列表
  appraisalImg: Array<string> = [
    'https://p0.meituan.net/shaitu/c1c9fcf5b6105e68aa3eab70ac27ef03884501.jpg',
    'https://p0.meituan.net/shaitu/b47d954c79fb2ac797bb71226170d0995057150.jpg',
    'https://p0.meituan.net/shaitu/bb45ac8e7fbf4016028030f42acb6c1e799653.jpg'
  ]
  checkboxGroup1 = []

  protected render() {
    return (
      <div class="shop-wrapper">
        <eaten-header></eaten-header>
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
                        <li key={item.id}>
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
                <li>
                  <div>
                    <img width="60" src="https://www.dpfile.com/ugc/user/anonymous.png" />
                  </div>
                  <div>
                    <p class="user-name">a***1</p>
                    <div class="mid-line">
                      <star num={4.8} size={'13'}></star>
                      <span class="time">2021年2月21日</span>
                    </div>
                    <span class="appraisal-content">
                      吃的很饱，寿司很好吃，海带丝也很好吃， 凑字数
                      孟子曰：天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为，所以动心忍性，增益其所不能。太史公曰：古者富贵而名摩灭，不可胜记，唯倜傥非常之人称焉。盖文王拘而演《周易》；仲尼厄而作《春秋》；屈原放逐，乃赋《离骚》；左丘失明，厥有《国语》；孙子膑脚，《兵法》修列；不韦迁蜀，世传《吕览》；韩非囚秦，《说难》《孤愤》；《诗》三百篇，大底圣贤发愤之所为作也。
                    </span>
                    <div class="img-list">
                      {this.appraisalImg.map((i) => {
                        return (
                          <el-image
                            style="width: 140px; height: 140px"
                            src={i}
                            preview-src-list={this.appraisalImg}></el-image>
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
