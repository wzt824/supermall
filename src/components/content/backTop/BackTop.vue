<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="" srcset="">
  </div>
</template>

<script>
export default {
  name:'BackTop',
  data() {
    return {

    }
  },
}
</script>

<style scoped lang="less">
  .back-top{
    position: fixed;
    right: 10px;
    bottom: 55px;
    z-index: 5;

    img {
      width: 45px;
    }
  }
</style>
