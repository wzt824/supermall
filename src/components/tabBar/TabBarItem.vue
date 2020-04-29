<template>
  <div class="tab-bar-active" :style="activeStyle" @click="itemClick">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      path: String,
      default: "rgb(245,65,65)"
    }
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick: function() {
      this.$router.replace(this.path);
    }
  }
};
</script>

<style scoped>
.tab-bar-active {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.tab-bar-active i {
  font-size: 22px;
  margin-top: 5px;
}
</style>