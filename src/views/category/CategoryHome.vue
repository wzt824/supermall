<template>
  <div class="page">
    <h1>分类</h1>
    <h3>数值： {{$store.state.counter}} ，奇偶性：{{evenOrAdd}}</h3>
    <button @click="increment">+</button>
    <button @click="incrementTwo(2)">+2</button>
    <button @click="decrement">-</button>
    <button @click="decrementFive(5)">-5</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CategoryHome",
  data() {
    return {
      // counter: 0
    };
  },
  components: {},
  computed: {
    ...mapGetters(["evenOrAdd"]) //返回值：{evenOrAdd(){return this.$store.getters['evenOrAdd']}}
  },

  methods: {
    ...mapActions([
      "increment",
      "decrement",
      "incrementIfAdd",
      "incrementIfReduce",
      "incrementAsync"
    ]),
    incrementTwo(count) {
      this.$store.commit("incrementCounter", count);
    },
    decrementFive(count) {
      this.$store.commit("decrementCounter", count);
    }
  }
};
</script>

<style scoped>
</style>
