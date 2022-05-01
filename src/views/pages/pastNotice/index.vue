<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane
        v-for="(item, index) in tabData"
        :key="{ index }"
        :label="item.label"
        :name="item.name"
      >
        <ContentList :list="list" :type="item.type"></ContentList>
        <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ContentList from "./contentList.vue";
export default {
  name: "PastNotice",
  components: { ContentList },

  data() {
    return {
      activeName: "unaccepted",
      tabData: [
        { label: "未接受", name: "unaccepted", type: 1 },
        { label: "已接受", name: "accepted", type: 2 },
      ],
      list: [
        {
          title: "测试标题",
          date: "2022-05-01",
          content: "测试数据",
        },
        {
          title: "测试标题",
          date: "2022-05-01",
          content: "测试数据",
        },
        {
          title: "测试标题",
          date: "2022-05-01",
          content: "测试数据",
        },
      ],
    };
  },

  methods: {
    handleClick() {
      console.log("获取数据");
    },
  },
};
</script>

<style>
</style>