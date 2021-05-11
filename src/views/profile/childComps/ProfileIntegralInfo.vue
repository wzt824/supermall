<template>
  <div class="integral-info">
    <div>
      <p><b>0.00</b>元</p>
      <p>我的余额</p>
    </div>
    <div>
      <p><b>0</b>个</p>
      <p>我的优惠</p>
    </div>
    <div>
      <p><b>0</b>分</p>
      <p>我的积分</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'ProfileIntegralInfo',
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
  .integral-info{
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: 10px 0 15px;
    margin: 10px;
    border: 1px solid #eee;
    border-radius: 10px;
    color: #666;

    b{
      font-size: 24px;
      color: red;
      line-height: 1.5;
    }
  }
</style>
