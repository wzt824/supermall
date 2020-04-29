/*
 * 包含多个actions触发去直接更新状态的方法的对象
 */
//引入常量模块
import Vue from "vue"

export default {
  INCREMENT(state) {
    state.counter >= 10 ? 10 : state.counter++;
  },
  //减少mutations
  DECREMENT(state) {
    state.counter >= 1 ? state.counter-- : 0;
  },
  incrementCounter(state, count) {
    state.counter += count;
  },
  decrementCounter(state, count) {
    state.counter -= count;
  },
  addFruits(state, addFruit) {
    state.fruits.push(addFruit)
  },

  updateInfo(state) {
    // 响应式
    state.profileInfo.age = 24;


    // 异步操作不要在mutations里操作
    Vue.set(state.profileInfo, "sex", "男");
  }
}