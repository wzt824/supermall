<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tabbar v-if="!$route.meta.showNav"/>
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
  },
  mounted(){
    this.$store.dispatch('userState',JSON.parse(sessionStorage.getItem('userInfo')))
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
