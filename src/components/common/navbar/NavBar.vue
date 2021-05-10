<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name:'Navbar',
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang='less'>
.nav-bar {
  height: 44px;
  line-height: 44px;
  display: flex;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, .1);

  .left, .right {
    height: 44px;
    width: 60px;
  }

  .center {
    height: 44px;
    flex: 1;
  }
}
</style>
