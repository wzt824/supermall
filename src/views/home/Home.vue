<template>
  <div class="page">
    <HeaderSearch></HeaderSearch>
    <h1>首页</h1>

    <h3>{{$store.state.profileInfo}}</h3>
    <h2></h2>
  </div>
</template>

<script>
import HeaderSearch from "components/searchBar/SearchBar";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    HeaderSearch
  }
};
</script>

<style scoped lang="scss">
h2 {
  margin: 0;
}
</style>
