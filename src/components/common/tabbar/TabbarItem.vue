<template>
  <div class="tab_bar_item" @click="barClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else :style="activeStyle"><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name:'TabbarItem',
  data() {
    return {
      // isActive: false
    }
  },
  props:{
    path: String,
    activeColor:{
      type: String,
      default: 'red'
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    },
  },

  methods:{
    barClick(){
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped lang='less'>
  .tab_bar_item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;

    .iconfont{
      display: inline-block;
      margin-top: 7px;
      font-size: 20px;
    }
    img{
      display: inline-block;
      width: 24px;
      height: 24px;
      margin-top: 3px;
    }
  }
</style>
