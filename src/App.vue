<template>
  <div id="app">
    <router-view></router-view>

    <!-- 底部 -->
    <TabBar>
      <TabBarItem path="/home">
        <i slot="item-icon" class="fa fa-home"></i>
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category" activeColor="red">
        <i slot="item-icon" class="fa fa-th-list"></i>
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="/cart" activeColor="orange">
        <i slot="item-icon" class="fa fa-shopping-cart"></i>
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile" activeColor="green">
        <i slot="item-icon" class="fa fa-user"></i>
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from "components/tabBar/TabBar";
import TabBarItem from "components/tabBar/TabBarItem";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style lang="scss">
@import "./assets/css/base.css";
</style>
