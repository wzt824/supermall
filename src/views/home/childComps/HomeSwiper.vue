<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper';
export default {
  name:'HomeSwiper',
  data() {
    return {
      isLoad: false
    }
  },
  props:{
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper, 
    SwiperItem
  },
  methods:{
    imgLoad(){
      if (!this.isLoad) {
        this.$emit("swiperImgLoad");
        this.isLoad = true
      }
      
    }
  }
}
</script>

<style scoped>

</style>
