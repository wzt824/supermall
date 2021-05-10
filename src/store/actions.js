
import {
  ADD_COUNTER, 
  ADD_TO_CART,
  SUB_COUNTER, 
  SUB_TO_CART
} from "./mutations-types"

export default {
  addCart(context, payload){
    // 判断商品是否存在，若是存在则进行数量的变化，反之则添加
    return new Promise((resolve, reject)=>{
      let product = context.state.cartList.find(item => item.iid === payload.iid)
      if (product) {
        context.commit(ADD_COUNTER,product)
        resolve("添加成功，当前商品数量+1")
      }else{
        payload.count = 1
        context.commit(ADD_TO_CART,payload)
        resolve("成功添加新商品")
      }
    })
  },
  subCart(context, payload){
    return new Promise((resolve, reject)=>{
      let product = context.state.cartList.find(item => item.iid === payload.iid)
      if (product.count === 1) {
        context.state.cartList.forEach((item,index) => {
          if (product.iid === item.iid) {
            context.commit(SUB_TO_CART,index)
            resolve("商品移除成功")
          }
        });
      }else{
        context.commit(SUB_COUNTER,product)
        resolve("当前商品数量-1")
      }
    })
  }
}