<!--
 * @Description: 店铺详情页面
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'
import Star from '@/components/Star/index'
import EatenHeader from '@/components/EatenHeader/index'
import EatenFooter from '@/components/EatenFooter/index'

@Component({
  components: { EatenHeader, EatenFooter, Star }
})
export default class Shop extends Vue {
  srcList: Array<string> = [
    'https://p1.meituan.net/merchant/5cfc2788fbec889cbf14e6a680a99e3d82463.jpg@380w_214h_1e_1c',
    'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
    'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
  ]

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
          &:nth-child(1)  {
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
          &:nth-child(3)  {
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
  }
}
</style>
