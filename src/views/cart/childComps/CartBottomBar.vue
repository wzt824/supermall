<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-btn" 
                    @click.native="checkClick"
                    :is-checked="isSelectAll"/>
      <span>全选</span>
    </div>
    <div class="price-content">
      <div class="price-bar">
        合计:<span class="price-text">￥<span class="price">{{totalPrice}}</span></span>
      </div>

      <div class="cacluate">
        结算({{checkLength}})
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton.vue'
export default {
  name:'CartBottomBar',
  data() {
    return {

    }
  },
  components: {
    CheckButton
  },
  computed:{
    totalPrice(){
      return this.$store.state.cartList.filter(item=>{
        return item.checked
      }).reduce((preValue,item)=>{
        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    checkLength(){
      return this.$store.state.cartList.filter(item=>item.checked).length
    },
    isSelectAll(){
      if (this.$store.state.cartList.length === 0) return false
      // return !(this.$store.state.cartList.filter(item=>!item.checked).length)
      return !this.$store.state.cartList.find(item=>!item.checked)
    }
  },
  methods:{
    checkClick(){
      if (this.isSelectAll) {
        this.$store.state.cartList.forEach(item => item.checked = false);
      }else{
        this.$store.state.cartList.forEach(item => item.checked = true);
      }
    }
  }
    
}
</script>

<style scoped lang="less">
  .bottom-bar{
    height: 40px;
    background: #eee;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;

    .check-content{
      display: flex;
      align-items: center;

      .check-btn{
        width: 24px;
        height: 24px;
        margin-right: 5px;
      }
    }

    .price-content{
      display: flex;
      align-items: center;
    }

    .price-text{
      
      color: var(--color-hight-text);
      .price{
        font-size: 20px;
      }
    }

    .cacluate{
      background: red;
      padding: 5px 10px;
      border-radius: 16px;
      color: #fff;
      margin-left: 15px;
    }
  }
</style>
