<template>
  <div>
    <scroll class="subCategory-list-scroll"
            @scroll="contentScroll"
            ref="scroll" :probe-type="3" :pull-up-load="true">
      <goods-list ref="subList" :goods="subList"/>
    </scroll>
    <back-top v-show="isShowBack" @click.native="backClick"/>
  </div>
</template>

<script>
import { itemImgLister, backTopMixin } from "common/mixin"

import GoodsList from 'components/content/goods/GoodsList.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import BackTop from 'components/content/backTop/BackTop.vue'
export default {
  name:'CategorySubCategory',
  mixins:[itemImgLister, backTopMixin],
  data() {
    return {
      
    }
  },
  components: {
    GoodsList,
    Scroll,
    BackTop
  },
  watch:{
    subList:{ //深度监听，可监听到对象、数组的变化
      handler (newV, oldV) {
        this.$refs.scroll.scrollTo(0, 0)
        this.$refs.scroll.refresh();
      },
      deep:true
     }
  },
  props:{
    subList:{
      type: Array,
      default(){
        return []
      }
    }
  },
  methods:{
    contentScroll(pos){
      // 判断返回顶部按钮是否展示
      this.isShowBack = (-pos.y) > 600;
    }
  }
}
</script>

<style scoped lang="less">
  .subCategory-list-scroll{
    height: 100%;
    overflow: hidden;
  }
</style>
