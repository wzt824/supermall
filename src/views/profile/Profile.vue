<template>
  <div class="profile">
    我的
  </div>
</template>

<script>
import { requestAxios } from "../../network/request";
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

  }
}
</script>

<style scoped>

</style>
