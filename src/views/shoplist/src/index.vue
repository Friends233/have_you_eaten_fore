<!--
 * @Description: 店铺列表页面
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'
import { Clf, Shop } from './index'
import Star from '@/components/Star/index'
import EatenHeader from '@/components/EatenHeader/index'
import EatenFooter from '@/components/EatenFooter/index'
import { getSortAll } from '@/api/all'

@Component({
  components: { EatenHeader, EatenFooter, Star }
})
export default class ShopList extends Vue {
  selectContent: Array<string> = []
  classification: Array<Clf> = [
    {
      id: '1',
      label: '美食分类',
      content: []
    }
  ]
  shoplist: Array<Shop> = [
    {
      id: '1001',
      label: '望京三姐·地桌烤肉（望京店）',
      imgUrl: 'https://img.meituan.net/msmerchant/1f6bfaff2a4651ddef09c408b9b7267778400.jpg@220w_125h_1e_1c',
      rating: 4.6,
      desc: '朝阳区望京西园四区420号楼420-5南侧部分',
      price: 110
    },
    {
      id: '1002',
      label: '望京三姐·地桌烤肉（望京店）',
      imgUrl: 'https://img.meituan.net/msmerchant/1f6bfaff2a4651ddef09c408b9b7267778400.jpg@220w_125h_1e_1c',
      rating: 4.6,
      desc: '朝阳区望京西园四区420号楼420-5南侧部分',
      price: 110
    },
    {
      id: '1003',
      label: '望京三姐·地桌烤肉（望京店）',
      imgUrl: 'https://img.meituan.net/msmerchant/1f6bfaff2a4651ddef09c408b9b7267778400.jpg@220w_125h_1e_1c',
      rating: 4.6,
      desc: '朝阳区望京西园四区420号楼420-5南侧部分',
      price: 110
    }
  ]

  async created() {
    const content = await getSortAll()
    this.classification[0].content = content.data
  }

  closeTag(index: number) {
    this.selectContent.splice(index, 1)
  }
  protected render() {
    return (
      <div class="shoplist-wrapper">
        <eaten-header></eaten-header>
        <div class="shoplist">
          <el-breadcrumb class="shoplist-breadcrumb" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item to={{ name: 'Home' }}>首页</el-breadcrumb-item>
            <el-breadcrumb-item to={{ name: 'shoplist' }}>店铺列表</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="shoplist-classification">
            <div v-show={this.selectContent.length !== 0} class="shoplist-classification-select">
              <p class="tag-title">已选条件</p>
              <div class="tag-list">
                {this.selectContent.map((item, index) => {
                  return (
                    <el-tag onClose={() => this.closeTag(index)} key={index} closable>
                      {item}
                    </el-tag>
                  )
                })}
                <a href="#" class="tag-list-clear" onClick={() => (this.selectContent = [])}>
                  清除全部
                </a>
              </div>
            </div>
            {this.classification.map((item) => {
              return (
                <div class="shoplist-classification-module">
                  <p class="none-600">{item.label}</p>
                  <p class="select is-checked">全部</p>
                  <el-checkbox-group v-model={this.selectContent}>
                    {item.content &&
                      item.content.map((i) => {
                        return (
                          <el-checkbox class="select" label={i.label} key={i.id}>
                            {i.label}
                          </el-checkbox>
                        )
                      })}
                  </el-checkbox-group>
                </div>
              )
            })}
          </div>
          <div class="shoplist-list">
            <div class="shoplist-list-sort">
              <a class="is-active" href="#">
                综合
              </a>
              <a href="#">销量</a>
              <a href="#">价格</a>
              <a href="#">好评最多</a>
            </div>
            <ul class="shoplist-list-content">
              {this.shoplist.map((item, index) => {
                return (
                  <li key={item.id} onClick={() => this.$router.push({ name: 'shop' })}>
                    <div class="top">{index + 1}</div>
                    <div class="left">
                      <img src={item.imgUrl} />
                    </div>
                    <div class="right">
                      <p class="label">{item.label}</p>
                      <star showText={true} num={item.rating} size={'13'}></star>
                      <p class="desc">{item.desc}</p>
                      <p class="price">人均￥{item.price}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
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
.shoplist-wrapper {
  .shoplist {
    width: $bodyWidth;
    margin: 1.25rem auto;
    &-classification {
      margin-top: 1.25rem;
      border: 1px solid #e5e5e5;
      background: #fff;
      padding: 0 1.25rem;

      &-select {
        display: flex;
        cursor: pointer;
        padding: 0.63rem 0 0.63rem 1.25rem;
        border-bottom: 1px solid #e5e5e5;
        font-size: 0.75rem;
        .tag-title {
          width: 4.06rem;
          padding-top: 0.63rem;
        }
        .tag-list {
          width: 72rem;
          &-clear {
            margin-left: 0.63rem;
            color: #999;
          }
        }
        .el-tag {
          margin-left: 0.75rem;
          margin-top: 0.63rem;
          height: 2rem;
          padding: 0 0.63rem;
          line-height: 1.88rem;
          font-size: 0.75rem;
        }
      }
      &-module {
        display: flex;
        font-size: 0.88rem;
        margin-bottom: 1.25rem;
        p {
          height: 1.19rem;
          margin: 1.25rem 0.63rem;
          text-align: center;
          &:first-child {
            width: 4.06rem;
          }
        }
        .select {
          color: #666;
          cursor: pointer;
          padding: 0 0.94rem;
          border-radius: 0.63rem;
        }
        ::v-deep .is-checked {
          background: #409eff;
          color: #fff !important;
          .el-checkbox__label {
            color: #fff !important;
          }
        }
        .el-checkbox-group {
          display: flex;
          flex-wrap: wrap;
          width: 62.75rem;
          margin-left: 0.63rem;
          border-bottom: 1px solid #e5e5e5;
          padding-bottom: 0.94rem;
          .select {
            margin: 1.25rem 0 0 1.25rem;
            ::v-deep .el-checkbox__input {
              display: none;
            }
            ::v-deep .el-checkbox__label {
              padding: 0;
              font-size: 0.88rem;
            }
          }
        }
      }
    }
    &-list {
      background: #fff;
      border: 1px solid #e5e5e5;
      margin-top: 0.94rem;
      padding: 0 1.25rem;
      &-sort {
        width: 100%;
        border-bottom: 1px solid #e5e5e5;
        .is-active {
          color: cadetblue;
        }
        a {
          display: inline-block;
          text-align: center;
          font-size: 0.88rem;
          padding: 0.94rem 1.56rem;
          &:hover {
            color: cadetblue;
          }
        }
      }
      &-content {
        li {
          display: flex;
          position: relative;
          padding: 1.13rem 0.63rem;
          border-bottom: 1px solid #e5e5e5 !important;
          cursor: pointer;
          &:hover {
            background-color: #fbfbfb;
          }
          .top {
            background: #fb6433;
            border-radius: 2px;
            position: absolute;
            line-height: 0.81rem;
            width: 1.25rem;
            margin-left: -3px;
            margin-top: 3px;
            text-align: center;
            font-size: 0.75rem;
            color: #fff;
          }
          .left {
            width: 19%;
            img {
              width: 100%;
            }
          }
          .right {
            margin-left: 1.25rem;
            .label {
              font-size: 1rem;
              color: #222;
            }
            .desc,
            .price {
              color: #666;
              font-size: 0.75rem;
            }
            p {
              margin: 0.63rem 0;
              &:first-child {
                margin-top: 0;
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .shoplist-wrapper {
    .shoplist {
      width: $bodyMiniWidth;
      .tag-title {
        width: 9.06rem !important;
      }
      .shoplist-list-content {
        .left {
          width: 134px !important;
        }
      }
    }
  }
}
</style>
