<template>
  <div class="page">
    <h1>档案</h1>
    <FruitsTable></FruitsTable>
    <button @click="addFruits">添加水果</button>
    <h3>{{$store.state.profileInfo}}</h3>
    <button @click="updateInfo">修改信息</button>
  </div>
</template>

<script>
import FruitsTable from "components/table/FruitsTable";
export default {
  name: "ProfileHome",
  data() {
    return {};
  },
  components: { FruitsTable },
  methods: {
    addFruits() {
      let addFruit = {
        name: "苹果",
        price: 16,
        count: 6
      };
      this.$store.commit("addFruits", addFruit);
    },
    updateInfo() {
      this.$store
        .dispatch("aUpdateInfo", {
          message: "进入actions里的提示信息"
        })
        .then(res => {
          console.log("actions里边的异步已经完成了");
          console.log(res);
        });
    }
  }
};
</script>

<style scoped>
</style>
