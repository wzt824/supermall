<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tabbar/>
  </div>
</template>

<script>
import MainTabbar from 'components/content/mainTabbar/MainTabbar.vue'

export default {
  name:'App',
  data() {
    return {

    }
  },
  components: {
    MainTabbar
  }
}
</script>

<style scoped lang='less'>
@import url("assets/css/base.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #272727;
}
</style>
