<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name:'Toast',
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message="默认文字", duration=2000){
      this.isShow = true;
      this.message = message;

      setTimeout(()=>{
        this.isShow = false;
        this.message = '';
      },duration)
    }
  }
}
</script>

<style scoped lang="less">
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 999;
    transform: translate(-50%,-50%);

    padding: 10px 15px;
    color: #fff;
    background: rgba(0, 0, 0, .7);
    text-align: center;
  }
</style>
