<template>
  <div class="page">
    <h1>购物车</h1>
    <h3>数值： {{$store.state.counter}} ，奇偶性：{{evenOrAdd}}</h3>
    <FruitsTable></FruitsTable>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FruitsTable from "components/table/FruitsTable";
export default {
  name: "CartHome",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["evenOrAdd"]) //返回值：{evenOrAdd(){return this.$store.getters['evenOrAdd']}}
  },
  components: { FruitsTable }
};
</script>

<style scoped>
</style>
