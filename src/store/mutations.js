
import {
  ADD_COUNTER, 
  ADD_TO_CART,
  SUB_COUNTER, 
  SUB_TO_CART
} from "./mutations-types"

export default { // 设计原则是做单一的事
  [ADD_COUNTER](state, payload){
    payload.count ++
  },
  [ADD_TO_CART](state, payload){
    payload.checked = true;
    state.cartList.push(payload)
  },
  [SUB_COUNTER](state, payload){
    payload.count --
  },
  [SUB_TO_CART](state, payload){
    state.cartList.splice(payload,1)
  }
}