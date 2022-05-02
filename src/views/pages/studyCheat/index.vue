<template>
  <div>
    <div class="header">
      <div class="left-box">
        今日学习:
        <dev class="right" v-if="status === 0">
          <el-button type="primary" @click="onSubmit">打卡</el-button>
        </dev>
      </div>
      <div class="cheat-title">{{ title }}</div>
      <div class="right-box">时间:{{ date }}</div>
    </div>
    <div class="cheat-content">
      {{ contentHtml }}
    </div>
    <dev>
      <el-form-item> </el-form-item>
    </dev>
  </div>
</template>

<script>
import { info, punch } from "@/api/anti";

export default {
  name: "StudyCheat",
  data() {
    return {
      anitId : 1,
      status: 1,
      date: "",
      title: "",
      contentHtml: "",
    };
  },
  mounted() {
    this.todayInfo();
  },
  methods: {
    todayInfo() {
      info().then((res) => {
        const { code, data } = res;
        console.log(data);
        if (code === 200) {
          this.anitId = data.id;
          this.status = data.isPunch;
          this.date = data.createTime;
          this.title = data.title;
          this.contentHtml = data.content;
        }
      });
    },
     onSubmit() {
      punch(this.anitId).then((value) => {
        const { code, message } = value;
        alert(message);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  .left-box {
    width: 150px;
  }
  .right-box {
    width: 100px;
  }
  .cheat-title {
    font-size: 22px;
    font-weight: 700px;
    flex: 1;
    display: flex;
    justify-content: center;
  }
}

.cheat-content {
  height: 400px;
  border: 1px solid #eee;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
