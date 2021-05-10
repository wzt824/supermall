<template>
  <div class="goods-item" @click="scrollClick(goodsItem)">
    <img v-lazy="showImgage" alt="" @load="imageLoad">
    <div>
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.orgPrice}}</span>
      <span class="collect" @click="collectClick()"><i class="iconfont icon-shoucang1"></i> {{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  data() {
    return {

    }
  },
  props:{
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed:{
    showImgage(){
      return this.goodsItem.image || this.goodsItem.show.img;
    }
  },
  methods:{
    collectClick(){
      console.log(123);
    },
    scrollClick(data){
      let id = data.iid || data.shop_id;
      if (id !== undefined) return this.$router.push('/detail/'+id)
      // window.open(data.link)
      window.location.href = data.link
    },
    imageLoad(){
      // // 路由思路解决
      // if (this.$route.path.indexOf('/home')) {
      //   this.$bus.$emit("hoemItemImageLoad")
      // }else if (this.$route.path.indexOf('/detail')) {
      //   this.$bus.$emit("detailItemImageLoad")
      // }
      this.$bus.$emit("itemImageLoad")
    }
  }
}
</script>

<style scoped lang="less">
  .goods-item {
    width: 100%;
    font-size: 12px;

    img {
      width: 100%;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    p{
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 5px 0;
      font-size: 14px;
    }

    .price{
      padding-right: 15px;
      color: var(--color-hight-text);
    }
    .iconfont{
      font-size: 12px;
    }

    .icon-shoucang1{
      color: orange;
    }
  }
</style>
