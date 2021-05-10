<template>
  <div class="check-button">
    <i class="iconfont icon-xuanze11" :class="{'icon-xuanze':isChecked}"></i>
  </div>
</template>

<script>
export default {
  name:'CheckButton',
  data() {
    return {

    }
  },
  props:{
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  methods:{
  }
}
</script>

<style scoped lang="less">
  .check-button{
    .iconfont{
      font-size: 20px;
    }
    .icon-xuanze{
      color: var(--color-tint);
    }
  }
</style>
