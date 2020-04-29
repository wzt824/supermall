<template>
  <div id="tab-header">
    <div id="leftDiv"></div>
    <div id="centerDiv"></div>
    <div id="rightDiv"></div>
  </div>
</template>

<script>
export default {
  name: "SearchBar"
};
</script>

<style scoped>
#tab-header {
  /* position: fixed; */
  left: 0;
  right: 0;
  top: 0;
  height: 40px;
  background-color: #dddddd;
}

#leftDiv {
  width: 15%;
  float: left;
  height: 100%;
  background: lightblue;
}
#centerDiv {
  width: 70%;
  float: left;
  height: 100%;
  background: rgb(243, 169, 100);
}
#rightDiv {
  width: 15%;
  float: left;
  height: 100%;
  background: rgb(147, 243, 118);
}
</style>