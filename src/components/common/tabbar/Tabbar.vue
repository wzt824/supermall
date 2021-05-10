<template>
  <div id="tab_bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'Tabbar',
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang='less'>
  #tab_bar{
    width: 100%;
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #f6f6f6;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .1);
  }
</style>
