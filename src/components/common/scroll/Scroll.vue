<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'Scroll',
  data() {
    return {
      scroll: null
    }
  },
  props:{
    probeType: {
      type: Number,
      default: 0
    },
    isDataLonding: { // 用于判断数据是否加载完成
      type: Boolean,
      default: false
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted(){
    let _this = this;
    _this.initScroll()
    // setTimeout(()=>{
    //   _this.initScroll()
    // },1000)
  },
  methods: {
    initScroll(){

      if (!this.$refs.wrapper) {
        return
      }
      // 创建scroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        mouseWheel: true,//开启鼠标滚轮
        // disableMouse: false,//启用鼠标拖动
        // disableTouch: false,//启用手指触摸
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      // 监听滚动的位置
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      })

      // 监听上拉刷新事件
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp');
      })
    },
    scrollTo(x, y, time=300){
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll && this.scroll.refresh();
    },
    getScrollY(){
      return this.scroll ? this.scroll.y : 0;
    }
  },
}
</script>

<style scoped lang="less">

</style>
