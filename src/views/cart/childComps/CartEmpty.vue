<template>
  <div class="cart-empty">
    <i class="iconfont icon-gouwuche-copy"></i>
    <h5>购物车居然是空的</h5>
    <p>再忙，也要记得买点什么犒劳自己~</p>
    <button @click="backIndex">去逛逛</button>
  </div>
</template>

<script>
export default {
  name:'CartEmpty',
  data() {
    return {

    }
  },
  methods: {
    backIndex(){
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped lang="less">
  .cart-empty{
    text-align: center;
    margin-top: 20%;
    touch-action: none;
    i{
      font-size: 80px;
      background: #eee;
      color: rgba(0, 0, 0, .6);
      border-radius: 50%;
    }

    h5{
      font-size: 20px;
      line-height: 2;
      margin-top: 10px;
    }

    p{
      color: var(--color-text);
    }

    button{
      background: var(--color-tint);
      padding: 10px 25px;
      margin-top: 20px;
      outline: none;
      border: none;
      color: #fff;
      border-radius: 3px;
      font-size: 17px;
      box-shadow: 0 0 6px 1px var(--color-hight-text);
    }
  }
</style>
