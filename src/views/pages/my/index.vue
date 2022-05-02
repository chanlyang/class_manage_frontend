<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="userId" label="学号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="reason" label="开始时间"> </el-table-column>
      <el-table-column prop="startTime" label="结束时间"> </el-table-column>
      <el-table-column prop="endTime" label="状态"> </el-table-column>
      <el-table-column prop="userName" label="审批人"> </el-table-column>
    </el-table>
    <el-pagination
      @current-change="handleCurrentChange"
      layout="prev, pager, next"
      :total="totalCount"
      :current-page="currPage"
      :page-size="pageSize"
    >
    </el-pagination>
  </div>
</template>

<script>
import { myApply } from "@/api/leave";

export default {
  name: "My",
  data() {
    return {
      totalCount: 10,
      pageSize: 5,
      currPage: 1,
      tableData: [
        {
          userId: "",
          name: "",
          reason: "",
          startTime: "2022-05-01",
          endTime: "2022-05-02",
          status: 2,
          userName: "张三",
        },
      ],
    };
  },
  mounted() {
    console.log("细腻");
    this.myHandle();
  },
  methods: {
    myHandle() {
      myApply(this.currPage, this.pageSize).then((res) => {
        const { code, data } = res;
        console.log(data);
        if (code === 200) {
          this.tableData = data.list;
          this.totalCount = data.totalCount;
          this.pageSize = data.pageSize;
          this.currPage = data.currPage;
        }
      });
    },
    handleCurrentChange(newPage) {
      console.log("打印一下" + newPage);
      this.currPage = newPage;
      this.myHandle();
    },
  },
};
</script>

<style></style>
