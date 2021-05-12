export default {
  cartLength(state){
    return state.cartList.length
  },
  cartList(state){
    return state.cartList
  },
  currentUser(state){
    return state.currentUser
  },
  loginFlag(state){
    return state.loginFlag
  }
}