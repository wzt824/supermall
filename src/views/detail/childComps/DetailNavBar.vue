<template>
  <div class="detailNavBar">
    <nav-bar>
      <div slot="left" class="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in title" :key="index" 
        class="title-item" :class="{active:index === currentIndex}"
        @click="titleClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  name:'DetailNavBar',
  data() {
    return {
      title:[ '商品','参数','评论','推荐' ],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods:{
    backClick(){
      this.$router.back()
    },
    titleClick(index){
      this.currentIndex = index;
      this.$emit('titleClick',index)
    }
  }

}
</script>

<style scoped lang="less">
  .left{
    img{
      margin-top: 10px;
    }
  }
  .title{
    display: flex;
    // font-size: 13px;

    .title-item{
      flex: 1;
    }

    .active{
      color: var(--color-hight-text);
    }
  }
</style>
