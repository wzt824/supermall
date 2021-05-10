<template>
  <div class="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-contol ref="tabContol" v-show="isTabFixed"
                class="tab-contol-fixed"
                :titles="['流行', '新款', '精选']" 
                @tabClick="tabClick"></tab-contol>
    <scroll class="content-scroll" 
            ref="scroll" 
            :probe-type="3" :pull-up-load="true"
            @pullingUp="loadMore"
            @scroll="contentScroll">
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-feature-view></home-feature-view>
      <tab-contol ref="tabContolScroll"
                  :titles="['流行', '新款', '精选']" 
                  @tabClick="tabClick"></tab-contol>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top v-show="isShowBack" @click.native="backClick"></back-top>
  </div>
</template>

<script>
import { getHomeBannerData, getHomeGoods } from "network/homeApi";
import { itemImgLister, backTopMixin } from "common/mixin"

import NavBar from 'components/common/navbar/NavBar.vue';
import Scroll from 'components/common/scroll/Scroll.vue';
import TabContol from 'components/content/tabContol/TabContol.vue';
import GoodsList from 'components/content/goods/GoodsList.vue';

import HomeSwiper from './childComps/HomeSwiper.vue';
import HomeRecommendView from './childComps/HomeRecommendView.vue';
import HomeFeatureView from './childComps/HomeFeatureView.vue';
export default {
  name:'Home',
  mixins:[itemImgLister, backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, total: 0, list: []},
        'new': {page: 0, total: 0, list: []},
        'sell': {page: 0, total: 0, list: []}
      },
      currentType: 'pop',
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    }
  },
  components: { 
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    TabContol,
    GoodsList,
    Scroll
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list;
    }
  },
  created(){
    // 获取首页轮播图数据
    this.getHomeDatas();
    // 获取首页流行、新款、精选数据
    this.getHomeGoodData('pop');
    this.getHomeGoodData('new');
    this.getHomeGoodData('sell');
  },

  mounted(){},

  activated(){
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },

  deactivated(){
    // 保存Y值
    this.saveY = this.$refs.scroll.getScrollY();
    // 取消全局监听事件
    this.$bus.$off('itemImageLoad', this.itemImgLister)
  },


  methods: {
    /**
     * 事件监听相关方法
     */
    // tab切换
    tabClick(index){
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
      this.$refs.tabContol.currentIndex = index;
      this.$refs.tabContolScroll.currentIndex = index;
    },

    contentScroll(pos){
      // 判断返回顶部按钮是否展示
      this.isShowBack = (-pos.y) > 600;

      // tabContol是否需要吸顶
      this.isTabFixed = (-pos.y) > this.tabOffsetTop
    },

    // 加载更多
    loadMore(){
      this.getHomeGoodData(this.currentType);
      this.$refs.scroll.refresh()
      // this.$refs.scroll.scroll.finishPullUp()
    },

    // 判断banner图片是否加载完成
    swiperImgLoad(){
      // 获取tabContol的tabOffsetTop
      this.tabOffsetTop = this.$refs.tabContolScroll.$el.offsetTop;
    },




    /**
     * 网络请求相关方法
     */
    async getHomeDatas(){
      let res = await getHomeBannerData()
      if (res.success) {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      }
    },

    async getHomeGoodData(type){
      const page = this.goods[type].page + 1;
      let data = {
        type: type,
        page: page
      }
      let res = await getHomeGoods(data);
      this.goods[type].total = res.data.total
      this.goods[type].list.push(...res.data.list);
      this.goods[type].page += 1;

      // 完成上拉加载
      this.$refs.scroll.finishPullUp()

    }
  }
}
</script>

<style scoped lang="less">
.home{
  height: 100vh;
  position: relative;

  .nav-bar{
    background: var(--color-tint);
    color: #fff;
  }

  .tab-contol-fixed{
    position: absolute;
    left: 0;
    right: 0;
    top: 42px;
    z-index: 12;
  }

  .content-scroll{
    // height: calc(100% - 93px);
    overflow: hidden;
    position: absolute;
    top: 43px;
    bottom: 50px;
    left: 0;
    right: 0;
  }
}
</style>
