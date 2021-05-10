<template>
  <scroll class="category-list-scroll"
          ref="scroll" :probe-type="3" :pull-up-load="true">
    <category-info-item v-for="(item,index) in leftList"
                        :key="index" :list="item" :class="{isActive:currentIndex === index}"
                        @click.native="categoryClick(item.maitKey,index)"/>
  </scroll>
</template>

<script>
import { itemImgLister } from "common/mixin"

import Scroll from 'components/common/scroll/Scroll.vue'
import CategoryInfoItem from './CategoryInfoItem.vue'
export default {
  name:'CategoryInfo',
  mixins:[itemImgLister],
  data() {
    return {
      currentIndex: 0,
      scrollerHeight: 0
    }
  },
  components: {
    Scroll,
    CategoryInfoItem
  },
  watch:{
    leftList:{ //深度监听，可监听到对象、数组的变化
      handler (newV, oldV) {
        this.$refs.scroll.scroll.refresh();
      },
      deep:true
     }
  },
  props: {
    leftList: {
      type: Array,
      default(){
        return []
      }
    }
  },
  methods:{
    categoryClick(id,index){
      if (index >= 8) {
        this.$refs.scroll.scrollTo(0, this.$refs.scroll.scroll.maxScrollY)
      }else{
        this.$refs.scroll.scrollTo(0, 0)
      }
      this.currentIndex = index;
      this.$emit("maitKeyClick",id)
    }
  }
}
</script>

<style scoped lang="less">
  .category-list-scroll{
    height: 100%;
    overflow: hidden;

    .isActive{
      background: #fff;
      position: relative;

      &::before{
        width: 3px;
        height: 100%;
        background: var(--color-tint);
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        content: '';
      }
    }
  }
</style>
