<template>
  <div class="detail-shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span class="shop-title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{shop.sells | sellCountFilter}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{shop.goodsCount}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more':item.isBetter}"><span>{{item.isBetter ? '高' : '低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <span class="enter-shop">进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailShopInfo',
  data() {
    return {

    }
  },
  props: {
    shop:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    sellCountFilter:function(value){
      if (value < 10000) return value;
      return (value/10000).toFixed(2) + '万'
    }
  }
}
</script>

<style scoped lang='less'>
  .detail-shop-info{
    padding: 25px 8px;
    border-bottom: 5px solid #f2f2f8;

    .shop-top{
      line-height: 45px;
      display: flex;
      align-items: center;

      img{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, .1);
      }
      .shop-title{
        margin-left: 10px;
        vertical-align: middle;
      }
    }

    .shop-middle{
      margin-top: 15px;
      display: flex;
      align-items: center;

      .shop-middle-item{
        flex: 1;
      }

      .shop-middle-left{
        display: flex;
        justify-content: space-evenly;
        color: #333;
        text-align: center;
        border-right: 1px solid rgba(0, 0, 0, .1);

        .sells-count,.goods-count{
          font-size: 18px;
        }

        .sells-text,.goods-text{
          margin-top: 10px;
          font-size: 12px;
        }
      }

      .shop-middle-right{
        font-size: 13px;
        color: #333;

        table{
          width: 120px;
          margin-left: 30px;

          td{
            padding: 5px 0;
          }

          .score{
            color: #5ea732;
          }

          .score-better{
            color: #f13e3a!important;
          }

          .better{
            span{
              background: #5ea732;
              color: #fff;
              text-align: center;
            }
          }
          .better-more{
            span{
              background: #f13e3a;
            }
          }
        }
      }
    }

    .shop-bottom{
      font-size: 20px;
      text-align: center;
      .enter-shop{
        display: inline-block;
        width: 40%;
        padding: 8px 0;
        text-align: center;
        border-radius: 7px;
        margin: 10px 0 0;
        background: #eee;
      }
    }
  }
</style>
