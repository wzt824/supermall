<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div @click="getCustomer">
        <i class="iconfont icon-kefu"></i>
        <p class="text">客服</p>
      </div>
      <div @click="getShop">
        <i class="iconfont icon-dianpu"></i>
        <p class="text">店铺</p>
      </div>
      <div @click="collectionClick">
        <i class="iconfont icon-shoucang"></i>
        <p class="text">收藏</p>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="car" @click="addToCart">加入购物车</div>
      <div class="buy" @click="addToBuy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailBottomBar',
  data() {
    return {

    }
  },
  methods: {
    addToCart(){
      this.$emit('addCart')
    },
    addToBuy(){
      this.$emit('addBuy')
    },
    collectionClick(){
      this.$emit('collectClick')
    },
    getCustomer(){
      this.$emit('getCustomer')
    },
    getShop(){
      this.$emit('getShop')
    }
  }
}
</script>

<style scoped lang="less">
  .bottom-bar{
    height: 49px;
    width: 100%;
    position: relative;
    bottom: 0;
    background: #fff;
    box-shadow: 0 -1px 1px 1px rgba(100, 100, 100, 0.1);

    display: flex;
    align-items: center;

    .bar-item{
      flex: 1;
      display: flex;
      height: 100%;

      div{
        flex: 1;
        text-align: center;
        
        .text{
          font-size: 15px;
        }

        i{
          display: inline-block;
          padding: 5px 0;
        }
        .icon-kefu{
          color: var(--color-hight-text);
        }
      }

      .car{
        background: #ffe817;
      }
      .buy{
        background: #f69;
        color: #fff;
      }
    }

    .bar-right{
      line-height: 49px;
    }
  }
</style>
