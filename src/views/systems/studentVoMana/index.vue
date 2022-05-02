<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="userId" label="学号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="reason" label="原因" width="180">
      </el-table-column>
      <el-table-column prop="startTime" label="开始时间"> </el-table-column>
      <el-table-column prop="endTime" label="结束时间"> </el-table-column>
      <el-table-column prop="opt" label="操作">
        <template slot-scope="scope">
          <div v-if="scope.row.status === '0'">
            <el-button size="mini" @click="handleEdit(1, scope.row)"
              >通过</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleEdit(2, scope.row)"
              >拒绝</el-button
            >
          </div>
          <div v-else>
            {{ scope.row.status === "2" ? "已拒绝" : "已通过" }}
          </div>
        </template>
      </el-table-column>
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
import { pageList, approval } from "@/api/leave";

export default {
  name: "StudentVoMana",
  data() {
    return {
      totalCount: 10,
      pageSize: 10,
      currPage: 1,
      tableData: [
        {
          leaveId: 0,
          userId: "",
          name: "",
          startTime: "",
          endTime: "",
          reason: "",
          status: "",
        },
      ],
    };
  },
  mounted() {
    this.leaveList();
  },
  methods: {
    leaveList() {
      pageList(this.currPage, this.pageSize).then((res) => {
        const { code, data } = res;
        console.log(data);
        if (code === 200) {
          this.tableData = data.list;
          console.info(this.tableData);
          this.totalCount = data.totalCount;
          this.pageSize = data.pageSize;
          this.currPage = data.currPage;
        }
      });
    },
    handleCurrentChange(newPage) {
      console.log("打印一下" + newPage);
      this.currPage = newPage;
      this.leaveList();
    },
    handleEdit(state, row) {
      console.log("测试" + state + row.leaveId);
      approval(state, row.leaveId).then((res) => {
        const { code, data } = res;
        if (code === 200) {
          this.$message({
            message: "请假申请已审批",
            type: "success",
          });
          this.leaveList();
        } else {
          this.$message.error("审批失败" + message);
        }
      });
    },
  },
};
</script>

<style></style>
