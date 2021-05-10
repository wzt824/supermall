<template>
  <div id="detail">
    <detail-nav-bar class="detail-bav-bar" ref="nav" @titleClick="titleClick"/>
    <scroll ref="scroll" :probe-type="3" 
            class="detail-scroll" :pull-up-load="true" @scroll="contentScroll">
      <detail-swiper :topImages="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info ref="params" :params-info="paramsInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommend" :goods="recommends"/>
    </scroll>
    <back-top v-show="isShowBack" @click.native="backClick"></back-top>
    <detail-bottom-bar class="detail-bottom-bar"
                       @addCart="addShopToCart" @addBuy="addShopToBuy"/>
  </div>
</template>

<script>
import { getDetails, getRecommend, Goods, Shop, GoodsParam } from "network/detailApi"
import { itemImgLister, backTopMixin } from "common/mixin"
import { debounce } from "common/utils"
import { mapActions } from "vuex"

import Scroll from 'components/common/scroll/Scroll.vue';
import GoodsList from 'components/content/goods/GoodsList.vue';

import DetailNavBar from './childComps/DetailNavBar.vue';
import DetailSwiper from './childComps/DetailSwiper.vue';
import DetailBaseInfo from './childComps/DetailBaseInfo.vue';
import DetailShopInfo from './childComps/DetailShopInfo.vue';
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue';
import DetailParamInfo from './childComps/DetailParamInfo.vue';
import DetailCommentInfo from './childComps/DetailCommentInfo.vue';
import DetailBottomBar from './childComps/DetailBottomBar.vue';

export default {
  name:'Detail',
  mixins:[itemImgLister, backTopMixin],
  data() {
    return {
      goodsId: null,
      topImages: [], // swiper数据
      goods: {}, // 物品信息
      shop: {}, // 商铺信息
      detailInfo: {}, // 物品详细信息
      paramsInfo: {}, // 物品参数信息
      commentInfo: {}, // 评论信息
      recommends: [], // 推荐信息
      themeTopYs: [],
      getThemeTopYFun: null,
      currentIndex: 0
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar
  },
  created(){
    this.goodsId = this.$route.params.id;
    this.getDetail(this.goodsId)
    this.getRecommends()
    this.getThemeTopYFun = debounce(()=>{
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop-44)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop-44)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop-44)
      this.themeTopYs.push(Number.MAX_VALUE)
    },200)
  },

  mounted(){
    // this.themeTopYs.push(0)
    // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
    // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
    // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
    // console.log(this.themeTopYs);
  },
  updated(){
    // this.themeTopYs = []
    // this.themeTopYs.push(0)
    // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
    // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
    // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
    // console.log(this.themeTopYs);
  },
  destoryed(){
    this.$bus.$off('itemImageLoad', this.itemImgLister)
  },
  methods:{

    ...mapActions(['addCart']),

    imageLoad(){
      // 从混入里获取
      this.debonceRefresh()

      this.getThemeTopYFun()
    },

    titleClick(index){
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index],500)
    },

    contentScroll(pos){
      // 获取y值
      const posY = -pos.y;
      // 与themeTopYs值进行对比
      
      for (let i = 0,len = this.themeTopYs.length; i < len-1; i++) {
        // 方法一
        // if (this.currentIndex !== i && ((i < len-1 && posY >= this.themeTopYs[i] && posY < this.themeTopYs[i+1]) || (i === len-1 && posY >= this.themeTopYs[i]))) {
        //   this.currentIndex = i;
        //   this.$refs.nav.currentIndex = this.currentIndex;
        // }

        // 方法二：添加一个最大边界值Number.MAX_VALUE
        if (this.currentIndex !== i && (posY >= this.themeTopYs[i] && posY < this.themeTopYs[i+1])) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }

      // 判断返回顶部按钮是否展示
      this.isShowBack = (-pos.y) > 600;
    },

    addShopToCart(){
      // 获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.goodsId;
      // 将商品添加到购物车(Vuex)
      // this.$store.dispatch('addCart',product).then(res=>{
      //   console.log(res);
      // })
      this.addCart(product).then(res=>{
        // this.isToastShow = true;
        // this.test = res;

        // setTimeout(()=>{
        //   this.isToastShow = false;
        //   this.test = '';
        // },2000)
        this.$toast.show(res,2000)
      })
    },

    addShopToBuy(){
      console.log("购买");
    },

    // 获取数据
    async getDetail(id){
      let param = {
        iid: id,
      }
      let res = await getDetails(param);
      const data = res.result;
      this.topImages = data.itemInfo.topImages
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      this.shop = new Shop(data.shopInfo)
      this.detailInfo = data.detailInfo;
      this.paramsInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list[0]
      }
 
    },

    // 获取推荐数据
    async getRecommends(){
      let res = await getRecommend();
      if (res.success) {
        this.recommends = res.data.list;
      }
    }
  }
}
</script>

<style scoped lang="less">
  #detail{
    position: relative;
    z-index: 10;
    background: #fff;
    height: 100vh;

    .detail-bav-bar{
      background-color: #fff;
      position: relative;
      top: 0;
      left: 0;
      right: 0;
      z-index: 11;
    }

    .detail-scroll{
      height: calc(100% - 93px);
    }
  }
</style>
