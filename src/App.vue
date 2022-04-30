<template>
  <div class="app">
    <div class="header">登陆，注册</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less" scoped>
.app {
  background: #fff;
  padding-left: 50px;
  padding-right: 50px;
  .header {
    height: 80px;
    line-height: 80px;
  }
}
</style>