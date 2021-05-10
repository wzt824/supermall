<template>
  <div class="list-item">
    <div class="item-selector"> 
      <check-button @click.native="checkedChange" :is-checked="product.checked"></check-button>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="info-title">{{product.title}}</div>
      <div class="info-desc">{{product.desc}}</div>
      <div class="info-bottom">
        <div class="bottom-price">{{product.price}}</div>
        <div class="bottom-count">
          <button class="btn" @click="subCount">-</button>
          <span class="btn-count">{{product.count}}</span>
          <button class="btn" @click="addCount">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton.vue'
export default {
  components: { CheckButton },
  name:'CartListItem',
  data() {
    return {

    }
  },
  props: {
    product:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    checkedChange(){
      this.product.checked = !this.product.checked;
    },
    addCount(){
      this.$store.dispatch('addCart',this.product)
    },
    subCount(){
      this.$store.dispatch('subCart',this.product)
    }
  }
}
</script>

<style scoped lang="less">
  .list-item{
    width: 100%;
    display: flex;
    font-size: 14px;
    padding: 5px;
    align-items: center;
    border-bottom: 1px solid #ccc;

    .item-selector{
      width: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .item-img{
      padding: 5px;
      img{
        width: 80px;
        height: 100px;
        display: block;
        border-radius: 5px;
      }
    }
    .item-info{
      font-size: 17px;
      color: #333;
      padding: 5px 10px;
      position: relative;
      overflow: hidden;
      .info-title, .info-desc{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .info-desc{
        font-size: 14px;
        color: #666;
        margin-top: 15px;
      }

      .info-bottom{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 10px 0 0;

        .btn{
          width: 24px;
          height: 24px;
        }

        .btn-count{
          padding: 0 10px;
          font-size: 18px;
          font-weight: 500;
        }
      }
    }
  }
</style>
