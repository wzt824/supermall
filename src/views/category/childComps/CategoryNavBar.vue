<template>
  <nav-bar class="categoryNavBar">
    <div slot="center">商品分类</div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  name:'CategoryNavBar',
  data() {
    return {

    }
  },
  components: {
    NavBar

  }
}
</script>

<style scoped lang="less">
  .categoryNavBar{
    background: var(--color-tint);
    color: #fff;
  }
</style>
