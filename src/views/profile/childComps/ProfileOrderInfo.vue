<template>
  <div class="order-info">
    <div class="flex other-content">
      <div class="other-span">
        <i class="iconfont icon-shoucang"></i>收藏<span>1</span>
      </div>
      <div class="other-span">
        <i class="iconfont icon-daqiyecaigou-dingyue-copy-copy"></i>订阅店铺<span>32</span>
      </div>
      <div class="other-span">
        <i class="iconfont icon-zuji"></i>足迹<span>1</span>
      </div>
    </div>
    <div class="order-content">
      <div class="flex content-header">
        <h3>我的订单</h3>
        <span>查看全部 <i class="iconfont icon-next-copy-copy"></i></span>
      </div>
      <div class="flex content-list">
        <div>
          <p class="iconfont icon-fukuan-copy"></p>
          待付款
        </div>
        <div>
          <p class="iconfont icon-daifahuo-copy"></p>
          待发货
        </div>
        <div>
          <p class="iconfont icon-daishouhuo"></p>
          待收货
        </div>
        <div>
          <p class="iconfont icon-pingjia-copy"></p>
          待评价
        </div>
        <div>
          <p class="iconfont icon-tuikuanshouhou"></p>
          退款/售后
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'ProfileOrderInfo',
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
  .order-info{
    margin: 10px;
    border: 1px solid #eee;
    border-radius: 10px;
    color: #666;
    padding: 15px 0;

    .flex{
      display: flex;
    }

    .other-content{
      justify-content: space-around;
      padding-bottom: 15px;
      text-align: center;
      border-bottom: 1px solid #eee;

      .other-span{
        // border-right: 1px solid #eee;

        i{
          margin-right: 4px;
        }
        span{
          margin-left: 4px;
        }
      }
    }

    .order-content{
      padding: 0 10px;

      .content-header{
        justify-content: space-between;
        align-content: center;
        padding: 10px 0 15px;

        span{
          font-size: 14px;
        }
      }

      .content-list{
        justify-content: space-between;
        align-items: center;
        text-align: center;

        p{
          font-size: 20px;
          font-weight: 600;
          padding: 8px 0;
        }
      }
    }
  }
</style>
