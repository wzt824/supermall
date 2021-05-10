<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index" class="recommendList left">
      <a :href="item.link">
        <img :src="item.image" alt="" srcset="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'HomeRecommendView',
  data() {
    return {

    }
  },
  props:{
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
  .recommend{
    overflow: hidden;
    padding-bottom: 10px;
    border-bottom: 8px solid #eee;

    .recommendList {
      width: 25%;
      text-align: center;
      padding: 10px 0;

      img {
        width: 70%;
        height: 70%;
        margin-bottom: 4px;
      }
    }
  }
</style>
