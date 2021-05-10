<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" 
        :key="index" class="tab-control-item" 
        :class="{active: index === currentIndex}"
        @click="tabControlClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabContol',
  data() {
    return {
      currentIndex: 0
    }
  },
  props:{
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods:{
    tabControlClick(index){
      this.currentIndex = index;
      this.$emit('tabClick',this.currentIndex)
    }
  }
}
</script>

<style scoped lang="less">
  .tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background: var(--color-background);

    .tab-control-item {
      flex: 1;
    }

    .active{
      color: var(--color-hight-text);

      span {
        padding: 5px;
        border-bottom: 2px solid var(--color-tint);
      }
    }
  }
</style>
