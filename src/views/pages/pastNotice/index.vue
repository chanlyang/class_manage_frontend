<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="noticeHandle">
      <el-tab-pane
        v-for="(item, index) in tabData"
        :key="{ index }"
        :label="item.label"
        :name="item.name"
      >
        <ContentList :list="list" :type="item.type"></ContentList>
        <el-pagination
          @current-change="handleCurrentChange"
          layout="prev, pager, next"
          :total="totalCount"
          :current-page="currPage"
          :page-size="pageSize"
        >
        </el-pagination>
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
      activeName: "0",
      totalCount: 10,
      pageSize: 5,
      currPage: 1,
      tabData: [
        { label: "未接受", name: "0", type: 1 },
        { label: "已接受", name: "1", type: 2 },
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
  mounted() {
    this.noticeHandle();
  },
  methods: {
    noticeHandle() {
      console.log("打印一下试试" + this.activeName);
      queryPageByAccept(this.currPage, this.pageSize).then((res) => {
        const { code, data } = res;
        console.log(data);
        if (code === 200) {
          if (this.activeName === "1") {
            this.list = data.list.filter((v) => v.isRead === 1);
          } else {
            this.list = data.list.filter((v) => v.isRead === 0);
          }
          this.totalCount = data.totalCount;
          this.pageSize = data.pageSize;
          this.currPage = data.currPage;
        }
      });
    },
    handleCurrentChange(newPage) {
      console.log("打印一下" + newPage);
      this.currPage = newPage;
      this.noticeHandle();
    },
  },
};
</script>

<style></style>
