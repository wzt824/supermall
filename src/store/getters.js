export default {
  evenOrAdd(state) {
    return state.counter % 2 === 0 ? '偶数' : '奇数'
  }
}