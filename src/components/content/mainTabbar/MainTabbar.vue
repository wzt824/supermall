<template>
  <tabbar>
    <tabbar-item path='/home' activeColor='red'>
      <i slot="item-icon" class="iconfont icon-yemian-copy"></i>
      <i slot="item-icon-active" class="iconfont icon-yemian-copy"></i>
      <div slot="item-text">首页</div>
    </tabbar-item>
    <tabbar-item path='/category' activeColor='blue'>
      <i slot="item-icon" class="iconfont icon-fenlei1"></i>
      <i slot="item-icon-active" class="iconfont icon-fenlei1"></i>
      <div slot="item-text">分类</div>
    </tabbar-item>
    <tabbar-item path='/cart' activeColor='orange'>
      <i slot="item-icon" class="iconfont icon-gouwuche"></i>
      <i slot="item-icon-active" class="iconfont icon-gouwuche"></i>
      <div slot="item-text">购物车</div>
    </tabbar-item>
    <tabbar-item path='/profile' activeColor='skyblue'>
      <i slot="item-icon" class="iconfont icon-wode"></i>
      <i slot="item-icon-active" class="iconfont icon-wode"></i>
      <div slot="item-text">我的</div>
    </tabbar-item>
  </tabbar>
</template>

<script>
import Tabbar from 'components/common/tabbar/Tabbar.vue'
import TabbarItem from 'components/common/tabbar/TabbarItem.vue'

export default {
  name:'MainTabbar',
  data() {
    return {

    }
  },
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style scoped>

</style>
