<template>
  <div>
    <div class="header">
      <div class="left-box">今日学习:已打卡</div>
      <div class="cheat-title">{{ title }}</div>
      <div class="right-box">时间:{{ date }}</div>
    </div>

    <div class="cheat-content">
      {{ contentHtml }}
    </div>
  </div>
</template>

<script>
export default {
  name: "StudyCheat",
  data() {
    return {
      date: "2022-05-01",
      title: "标题",
      contentHtml: "内容，富文本可能有图标",
    };
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