<template>
  <div class="category">
    <category-nav-bar class="category-nav-bar"/>
    <div class="category-content">
      <category-info class="left-content" :left-list="categoryList" @maitKeyClick="getMaitKey"/>
      <category-sub-category class="right-content" :sub-list="subCategoryList"/>
    </div>
  </div>
</template>

<script>
import { getCategory, getSubCategory } from "network/categoryApi"

import CategoryInfo from './childComps/CategoryInfo.vue'
import CategoryNavBar from './childComps/CategoryNavBar.vue'
import CategorySubCategory from './childComps/CategorySubCategory.vue'
export default {
  name:'Category',
  data() {
    return {
      categoryList: [],
      firstMaitKey: '',
      subCategoryList: []
    }
  },
  components: { 
    CategoryNavBar,
    CategoryInfo,
    CategorySubCategory 
  },
  created(){
    this.getCategorys();
  },
  methods:{
    getMaitKey(id){
      this.firstMaitKey = id;
    this.getSubCategorys(this.firstMaitKey)
    },

    /**
     * 网络请求相关方法
     */
    async getCategorys(){
      let res = await getCategory();
      this.categoryList = res.data.category.list;
      this.firstMaitKey = this.categoryList[0].maitKey;

      this.getSubCategorys(this.firstMaitKey)
    },
    async getSubCategorys(id){
      if(id=='') return this.$toast.show('数据请求失败',2000);
      let params = {
        maitKey: id
      }
      let res = await getSubCategory(params);
      this.subCategoryList = res.data.list;
    },
  },
}
</script>

<style scoped lang="less">
  .category{
    position: relative;
    height: 100vh;

    .category-content{
      display: flex;
      height: calc(100% - 49px - 44px);

      .left-content{
        height: 100%;
        overflow: hidden;
        width: 90px;
      }
      .right-content{
        height: 100%;
        overflow: hidden;
        flex: 1;
      }
    }
  }
</style>
