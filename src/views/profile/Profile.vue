<template>
  <div class="profile">
    <profile-nav-bar class="nav-bar" />
    <profile-info/>
    <profile-integral-info/>
    <profile-order-info/>
    <profile-function/>
  </div>
</template>

<script>
import { requestAxios } from "../../network/request";
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
  created(){
    requestAxios({
      url: '/home/multidata'
    }).then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
    });
  },
  components: {
    ProfileNavBar,
    ProfileInfo,
    ProfileIntegralInfo,
    ProfileOrderInfo,
    ProfileFunction

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
