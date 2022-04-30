<template>
  <div class="labelBox">
    <div class="l-title">{{ title }}</div>
    <div class="l-total">{{ total }}</div>
  </div>
</template>

<script>
export default {
  name: "NumLabel",
  props: {
    title: String,
    total: Number,
  },
};
</script>

<style lang="less" scope>
.labelBox {
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  background-color: white;
  border-radius: 6px;
  -webkit-box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0px 0 1px rgb(10 10 10 / 2%);
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0px 0 1px rgb(10 10 10 / 2%);
  color: #4a4a4a;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 5px;
  .l-title {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ddd;
    font-size: 20px;
    font-weight: 700px;
  }
  .l-total {
    flex: 1;
  }
}
</style>