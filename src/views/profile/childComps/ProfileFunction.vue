<template>
  <div class="function">
    <div class="function-item">
      <i class="iconfont icon-youjian-copy"></i> 我的消息
    </div>
    <div class="function-item">
      <i class="iconfont icon-jifen"></i> 积分商城
    </div>
    <div class="function-item">
      <i class="iconfont icon-huiyuanka"></i> 会员卡
    </div>
    <div class="function-item">
      <i class="iconfont icon-gouwuche"></i> 我的购物车
    </div>
  </div>
</template>

<script>
export default {
  name:'ProfileFunction',
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
  .function{
    margin: 10px;
    border: 1px solid #eee;
    border-radius: 10px;
    color: #666;
    padding: 15px 0;

    .function-item{
      padding: 8px 0;
      border-bottom: 1px dashed #eee;

      i{
        font-size: 20px;
        color: var(--color-hight-text);
        display: inline-block;
        width: 45px;
        text-align: center;
        padding-left: 10px;
      }
    }

    .function-item:first-child{
      padding-top: 0;
    }

    .function-item:last-child{
      border-bottom: none;
      padding-bottom: 0;
    }
  }
</style>
