<template>
  <div class="cart-list">
    <scroll class="list-scroll"
            ref="scroll" 
            :probe-type="3" :pull-up-load="true">
      <div v-if="cartLength > 0">
        <cart-list-item  v-for="(item,index) in cartList" :key="index" :product="item"/>
      </div>
      <cart-empty v-else/>
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import Scroll from 'components/common/scroll/Scroll.vue'
import CartListItem from './CartListItem.vue'
import CartEmpty from './CartEmpty.vue'
export default {
  name:'CartList',
  data() {
    return {

    }
  },
  computed:{
    ...mapGetters([
      'cartList',
      'cartLength'
    ])
  },
  components: { 
    Scroll,
    CartListItem,
    CartEmpty 
  },
  activated(){
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped lang="less">
  .cart-list{
    height: calc(100% - 133px);

    .list-scroll{
      height: 100%;
      overflow: hidden;
    }
  }
</style>
