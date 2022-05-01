<template>
  <div>
    <div
      class="contentPanel"
      v-for="(item, index) in list"
      :key="`cc_${index}`"
    >
      <div class="left_box">
        <div>主题：{{ item.title }}</div>
        <div>时间：{{ item.date }}</div>
      </div>
      <div class="midd_box">{{ item.content }}</div>
      <div class="right_box" v-if="type === 1">
        <el-button @click="handAccept" type="primary">主要按钮</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConentList",
  props: {
    list: [],
    type: "",
  },
  methods: {
    handAccept() {
      console.log("接受");
    },
  },
};
</script>

<style lang="less" scope>
.contentPanel {
  display: flex;
  height: 130px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0px 0 1px rgb(10 10 10 / 2%);
  border: 1px solid #fbfbfb;
  margin-bottom: 15px;
  .left_box {
    width: 200px;
  }

  .midd_box {
    flex: 1;
  }

  .right_box {
    width: 100px;
  }
}
</style>