<template>
  <div class="container">
     <div class="header">这个是提醒你的，一会删掉就行，退出登录我已经搞了，下拉我的之后不用再弄退出登录了，用户登录完之后roleId我已经拿到了，你看看怎么跳转吧</div> 

    <router-view />
  </div>
</template>

<style></style>

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
