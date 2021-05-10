<template>
  <div class="categoryInfoItem">
    {{list.title}}
  </div>
</template>

<script>
export default {
  name:'CategoryInfoItem',
  data() {
    return {

    }
  },
  props: {
    list: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped lang="less">
  .categoryInfoItem{
    width: 100%;
    text-align: center;
    line-height: 50px;
    background: #eee;
    border-bottom: 1.5px solid rgb(255, 251, 251);
    
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>
