<template>
  <div class="detail-base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="discount" v-if="goods.discount" :style="{background:goods.discountBgColor}">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" 
            v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailBaseInfo',
  data() {
    return {

    }
  },
  props: {
    goods:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  created(){
    console.log(this.goods);
  }
}
</script>

<style scoped lang="less">
  .detail-base-info{
    padding: 10px;
    border-bottom: 8px solid #eee;

    .info-price{
      padding: 10px 0;
      .new-price{
        color: var(--color-hight-text);
        font-size: 28px;
      }
      .old-price{
        font-size: 12px;
        text-decoration: line-through;
        margin: 0 5px;
        color: #ccc;
      }
      .discount{
        background: var(--color-hight-text);
        color: #fff;
        font-size: 16px;
        padding: 2px 7px;
        border-radius: 20px;
      }
    }

    .info-other{
      display: flex;
      color: #a4a1a1;
      padding: 5px 0 12px;
      font-size: 14px;
      border-bottom: 1px solid #a4a1a1;

      span{
        flex: 1;
        text-align: center;
      }
      :first-child{
        text-align: left;
      }

      :last-child{
        text-align: right;
      }
    }

    .info-service{
      display: flex;
      justify-content: space-between;
      padding: 15px 0;
      font-size: 15px;
      .info-service-item{
        display: flex;
        align-items: center;
        img{
          width: 16px;
          height: 16px;
        }
      }
    }
  }
</style>
