<!--
 * @Description: 店铺列表页面
 * @Author: Friends233
-->
<script lang="tsx">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Clf, Shop } from './index'
import { deepClone } from '@/utils'
import Star from '@/components/Star/index'
import EatenHeader from '@/components/EatenHeader/index'
import EatenFooter from '@/components/EatenFooter/index'
import { getSortAll } from '@/api/all'
import { getShopList } from '@/api/home'

@Component({
  components: { EatenHeader, EatenFooter, Star }
})
export default class ShopList extends Vue {
  selectContent: any[] = []
  classification: Array<Clf> = [
    {
      id: '1',
      label: '美食分类',
      content: []
    }
  ]
  shoplist: Array<Shop> = []
  copy: Array<Shop> = []
  idToType: any = {}

  mounted() {
    this.init()
  }

  @Watch('selectContent')
  fn(val: any[]) {
    const typeIds = val.map((item: string) => {
      return this.idToType[item]
    })
    getShopList({ typeIds: typeIds.join(',') }).then((res) => {
      this.shoplist = res.data.map((item: any) => {
        return {
          label: item.name,
          desc: item.address,
          ...item
        }
      })
      this.copy = deepClone(this.shoplist) as any
    })
  }

  async init() {
    const content = await getSortAll()
    this.classification[0].content = content.data
    content.data.forEach((item: any) => {
      this.$set(this.idToType, item.label, item.id)
      this.$set(this.idToType, item.id, item.label)
    })
    if (this.$route.params.typeId) {
      this.selectContent.push(this.idToType[this.$route.params.typeId])
    } else {
      this.selectContent = []
    }
  }

  closeTag(index: number) {
    this.selectContent.splice(index, 1)
  }

  active(index: number) {
    const ref: any = this.$refs
    for (let i = 1; i <= 4; i++) {
      ref['a' + i].className = ''
      console.log(this.$refs['a' + i])
    }
    ref['a' + index].className = 'is-active'
    if (index === 1) {
      this.shoplist = deepClone(this.copy) as any
    } else if (index === 2) {
      this.shoplist.sort((a, b) => {
        return (100 - a.price) * a.rating - (100 - b.price) * b.rating
      })
    } else if (index === 3) {
      this.shoplist.sort((a, b) => {
        return a.price - b.price
      })
    } else if (index === 4) {
      this.shoplist.sort((a, b) => {
        return b.rating - a.rating
      })
    }
  }

  get isChecked(): string {
    return this.selectContent.length === 0 ? 'is-checked' : ''
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
                  <p class={'select ' + this.isChecked} onClick={() => (this.selectContent = [])}>
                    全部
                  </p>
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
              <a ref="a1" onClick={() => this.active(1)} class="is-active" href="#">
                综合
              </a>
              <a ref="a2" onClick={() => this.active(2)} href="#">
                销量
              </a>
              <a ref="a3" onClick={() => this.active(3)} href="#">
                价格
              </a>
              <a ref="a4" onClick={() => this.active(4)} href="#">
                好评最多
              </a>
            </div>
            <ul class="shoplist-list-content">
              {this.shoplist.map((item, index) => {
                return (
                  <li key={item.id} onClick={() => this.$router.push({ name: 'shop', params: { id: item.id } })}>
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
    min-height: 700px;
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
          width: 5.06rem;
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
        width: 9.5rem !important;
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
