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

@Component({
  components: { EatenHeader, EatenFooter, Star }
})
export default class ShopList extends Vue {
  selectContent: Array<string> = []
  classification: Array<Clf> = [
    {
      id: '1',
      label: '美食分类',
      content: [
        { id: '1', label: '便当简餐', icon: 'el-icon-tableware', color: '#ff8200' },
        { id: '2', label: '汉堡披萨', icon: 'el-icon-potato-strips', color: '#ffb500' },
        { id: '3', label: '奶茶果汁', icon: 'el-icon-ice-drink', color: '#ff4081' },
        { id: '4', label: '粥食面点', icon: 'el-icon-food', color: '#ffb500' },
        { id: '5', label: '米粉汤捞', icon: 'el-icon-food', color: '#03a9f4' },
        { id: '6', label: '川湘菜', icon: 'el-icon-fork-spoon', color: 'red' },
        { id: '7', label: '炸鸡炸串', icon: 'el-icon-chicken', color: '#ffb500' },
        { id: '8', label: '地方菜', icon: 'el-icon-burger', color: '#00bf96' },
        { id: '9', label: '美味面馆', icon: 'el-icon-food', color: '#ffb500' },
        { id: '10', label: '特色小吃', icon: 'el-icon-ice-cream-square', color: '#ff4c52' },
        { id: '11', label: '龙虾烧烤', icon: 'el-icon-watermelon', color: '#ff4c52' },
        { id: '12', label: '香辣火锅', icon: 'el-icon-dish-1', color: 'red' },
        { id: '13', label: '咖啡甜品', icon: 'el-icon-lollipop', color: '#ffb500' },
        { id: '14', label: '日韩料理', icon: 'el-icon-knife-fork', color: '#7bdefc' },
        { id: '15', label: '冬季暖汤', icon: 'el-icon-tableware', color: '#ffb500' }
      ]
    },
    {
      id: '2',
      label: '美食分类',
      content: [
        { id: '1', label: '便当简餐', icon: 'el-icon-tableware', color: '#ff8200' },
        { id: '2', label: '汉堡披萨', icon: 'el-icon-potato-strips', color: '#ffb500' },
        { id: '3', label: '奶茶果汁', icon: 'el-icon-ice-drink', color: '#ff4081' },
        { id: '4', label: '粥食面点', icon: 'el-icon-food', color: '#ffb500' },
        { id: '5', label: '米粉汤捞', icon: 'el-icon-food', color: '#03a9f4' },
        { id: '6', label: '川湘菜', icon: 'el-icon-fork-spoon', color: 'red' },
        { id: '7', label: '炸鸡炸串', icon: 'el-icon-chicken', color: '#ffb500' },
        { id: '8', label: '地方菜', icon: 'el-icon-burger', color: '#00bf96' },
        { id: '9', label: '美味面馆', icon: 'el-icon-food', color: '#ffb500' },
        { id: '10', label: '特色小吃', icon: 'el-icon-ice-cream-square', color: '#ff4c52' },
        { id: '11', label: '龙虾烧烤', icon: 'el-icon-watermelon', color: '#ff4c52' },
        { id: '12', label: '香辣火锅', icon: 'el-icon-dish-1', color: 'red' },
        { id: '13', label: '咖啡甜品', icon: 'el-icon-lollipop', color: '#ffb500' },
        { id: '14', label: '日韩料理', icon: 'el-icon-knife-fork', color: '#7bdefc' },
        { id: '15', label: '冬季暖汤', icon: 'el-icon-tableware', color: '#ffb500' }
      ]
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
                  <p>{item.label}</p>
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
              <a class="is-active" href="#">默认</a>
              <a href="#">销量</a>
              <a href="#">价格</a>
              <a href="#">好评最多</a>
            </div>
            <ul class="shoplist-list-content">
              {this.shoplist.map((item, index) => {
                return (
                  <li key={item.id} onClick={() => this.$router.push({name:'shop'})}>
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
    margin: 20px auto;
    &-classification {
      margin-top: 20px;
      border: 1px solid #e5e5e5;
      background: #fff;
      padding: 0 20px;

      &-select {
        display: flex;
        cursor: pointer;
        padding: 10px 0 10px 20px;
        border-bottom: 1px solid #e5e5e5;
        font-size: 12px;
        .tag-title {
          width: 65px;
          padding-top: 10px;
        }
        .tag-list {
          width: 1152px;
          &-clear {
            margin-left: 10px;
            color: #999;
          }
        }
        .el-tag {
          margin-left: 12px;
          margin-top: 10px;
        }
      }
      &-module {
        display: flex;
        font-size: 14px;
        margin-bottom: 20px;
        p {
          height: 19px;
          margin: 20px 10px;
          text-align: center;
          &:first-child {
            width: 65px;
          }
        }
        .select {
          color: #666;
          cursor: pointer;
          padding: 0 15px;
          border-radius: 10px;
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
          width: 1004px;
          margin-left: 10px;
          border-bottom: 1px solid #e5e5e5;
          padding-bottom: 15px;
          .select {
            margin: 20px 0 0 20px;
            ::v-deep .el-checkbox__input {
              display: none;
            }
            ::v-deep .el-checkbox__label {
              padding: 0;
            }
          }
        }
      }
    }
    &-list {
      background: #fff;
      border: 1px solid #e5e5e5;
      margin-top: 15px;
      padding: 0 20px;
      &-sort {
        width: 100%;
        border-bottom: 1px solid #e5e5e5;
        .is-active {
          color: cadetblue;
        }
        a {
          display: inline-block;
          text-align: center;
          font-size: 14px;
          padding: 15px 25px;
          &:hover {
            color: cadetblue;
          }
        }
      }
      &-content {
        li {
          display: flex;
          position: relative;
          padding: 18px 10px;
          border-bottom: 1px solid #e5e5e5!important;
          cursor: pointer;
          &:hover {
            background-color: #fbfbfb;
          }
          .top {
            background: #fb6433;
            border-radius: 2px;
            position: absolute;
            line-height: 13px;
            width: 20px;
            margin-left: -3px;
            margin-top: 3px;
            text-align: center;
            font-size: 12px;
            color: #fff;
          }
          .right {
            margin-left: 20px;
            .label {
              font-size: 16px;
              color: #222;
            }
            .desc,
            .price {
              color: #666;
              font-size: 12px;
            }
            p {
              margin: 10px 0;
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
</style>
