<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车<span v-if="cartLength > 0">({{cartLength}})</span></div>
    </nav-bar>
    <cart-list/>
    <cart-bottom-bar class="bottom-bar"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

import { mapGetters } from "vuex"

import CartList from './childComps/CartList.vue'
import CartBottomBar from './childComps/CartBottomBar.vue'
export default {
  name:'Cart',
  data() {
    return {

    }
  },
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },

  computed:{
    ...mapGetters([
      'cartLength'
    ])
  }
}
</script>

<style scoped lang="less">
  .cart{
    height: 100vh;
    position: relative;

    .nav-bar{
      background: var(--color-tint);
      color: #fff;
    }
    .bottom-bar{
      background: #eee;
    }
  }
</style>
