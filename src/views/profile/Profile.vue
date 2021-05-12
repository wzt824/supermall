<template>
  <div class="profile">
    <profile-nav-bar class="nav-bar" />
    <profile-info :user-info="user"/>
    <profile-integral-info/>
    <profile-order-info/>
    <profile-function/>
  </div>
</template>

<script>
import { mapState } from "vuex"

import ProfileFunction from './childComps/ProfileFunction.vue';
import ProfileInfo from './childComps/ProfileInfo.vue';
import ProfileIntegralInfo from './childComps/ProfileIntegralInfo.vue';
import ProfileNavBar from './childComps/ProfileNavBar.vue';
import ProfileOrderInfo from './childComps/ProfileOrderInfo.vue';
export default {
  name:'Pofile',
  data() {
    return {
     
    }
  },
  components: {
    ProfileNavBar,
    ProfileInfo,
    ProfileIntegralInfo,
    ProfileOrderInfo,
    ProfileFunction
  },
  computed:{
    // ...mapState(['token'])
    user () {
      return this.$store.state.currentUser
    }
  },
  created(){
    console.log(this.user);
  }
}
</script>

<style scoped lang="less">
  .profile{
    .nav-bar{
      background: var(--color-tint);
      color: #fff;
    }
  }
</style>
