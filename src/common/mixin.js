import { debounce } from "common/utils"
import BackTop from 'components/content/backTop/BackTop.vue';

export const itemImgLister = {
  data(){
    return{
      itemImgLister: null,
      debonceRefresh: null
    }
  },
  mounted(){
    // 监听图片是否加载完成
    this.debonceRefresh = debounce(this.$refs.scroll.refresh,50)
    // 对监听的事件进行保存
    this.itemImgLister = ()=>{
      this.debonceRefresh()
    }
    this.$bus.$on("itemImageLoad",this.itemImgLister)
  }
}

export const backTopMixin = {
  data(){
    return{
      isShowBack: false,
    }
  },
  components:{
    BackTop
  },
  methods:{
    // 回到顶部
    backClick(){
      this.$refs.scroll.scrollTo(0, 0)
    },
  }
}