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
import { queryPageByAccept } from "@/api/notice";

export default {
  name: "PastNotice",
  components: { ContentList },

  data() {
    return {
      activeName: "unaccepted",
      totalCount: 10,
      pageSize: 10,
      currPage: 1,
      tabData: [
        { label: "未接受", name: "unaccepted", type: 1 },
        { label: "已接受", name: "accepted", type: 2 },
      ],
      list: [
        {
          noticeId: 1,
          userName: "",
          title: "",
          content: "",
          createTime: "",
        },
      ],
    };
  },

  methods: {
    noticeHandle() {
      console.log("打印一下试试");
      queryPageByAccept(currPage, pageSize).then((res) => {
        const { code, data } = res;
        console.log(data);
        if (code === 200) {
          this.notice = data.list;
          this.totalCount = data.totalCount;
          this.pageSize = data.pageSize;
          this.currPage = data.currPage;
        }
      });
    },
  },
};
</script>

<style></style>
