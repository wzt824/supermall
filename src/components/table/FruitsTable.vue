<template>
  <div class="page">
    <table border="1" cellpadding="0" cellspacing="0">
      <caption align="top">水果</caption>
      <thead>
        <tr>
          <th>序号</th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in $store.state.fruits" :key="index">
          <td>{{index+1}}</td>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>{{item.count}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "FruitsTable",
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
</style>
