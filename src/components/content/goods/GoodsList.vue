<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goods-item="item"
        class="goods-item left"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem"
export default {
  name:'GoodsList',
  data() {
    return {

    }
  },
  props:{
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components:{
    GoodsListItem
  },
  methods:{
  }
}
</script>

<style scoped lang="less">
  .goods{
		box-sizing: border-box;
		column-count: 2;
    column-gap: 10px;
    padding: 10px;
  }
  .goods-item{
    width: 100%;
    margin: 5px 0;
    padding-bottom: 6px;
    text-align: center;
    break-inside: avoid;
    box-shadow: 0 0 3px #ccc;
  }
</style>
