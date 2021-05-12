<template>
  <div class="profile-nav-bar">
    <nav-bar>
      <div slot="center" class="title">我的</div>
      <div slot="right" class="set" @click="signOutClick">退出</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  name:'ProfileNavBar',
  data() {
    return {

    }
  },
  components: {
    NavBar
  },
  methods:{
    signOutClick(){
      sessionStorage.removeItem('userInfo')
      sessionStorage.removeItem('token');
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="less">
  .profile-nav-bar{
    .title{
      font-size: 18px;
    }
    .set{
      font-size: 14px;
    }
  }
</style>
