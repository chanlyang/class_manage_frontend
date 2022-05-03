<template>
  <div>
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="title" label="标题" width="180"> </el-table-column>
      <el-table-column prop="userName" label="发布人" width="180">
      </el-table-column>
      <el-table-column prop="createTime" label="时间"> </el-table-column>
      <el-table-column prop="opt" label="操作">
        <template slot-scope="scope">
          <el-row :gutter="20">
            <el-col :span="110">
              <div>
                <el-button
                  size="medium"
                  type="primary"
                  @click="showHtmlContent(scope.$index, scope.row)"
                  >查看内容</el-button
                >
              </div>
            </el-col>
            <el-col :span="6">
              <div v-if="scope.row.isPunch === 0">
                <el-button
                  @click="goPunch(scope.$index, scope.row)"
                  type="warning"
                  >去打卡</el-button
                >
              </div>
            </el-col>
          </el-row>
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
    <el-dialog
      title="内容"
      :visible.sync="dialogVisible1"
      width="60%"
      :before-close="handleClose"
    >
      <div class="cheat-content">
        <dev v-html="contentHtml" class="html-box"></dev>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { pageList, studentPunch, punch } from "@/api/anti";

export default {
  name: "CheatList",
  data() {
    return {
      totalCount: 10,
      pageSize: 10,
      currPage: 1,
      totalCount1: 10,
      pageSize1: 10,
      currPage1: 1,
      dialogVisible: false,
      dialogVisible1: false,
      contentHtml: "",
      list: [
        {
          id: 0,
          title: "",
          userName: "",
          content: "",
          createTime: "",
          isPunch: 0,
        },
      ],
      sList: [
        {
          userId: "",
          userName: "",
          status: 0,
        },
      ],
    };
  },
  mounted() {
    this.antiList();
  },
  methods: {
    antiList() {
      pageList(this.currPage, this.pageSize).then((res) => {
        const { code, data } = res;
        console.log(data);
        if (code === 200) {
          this.list = data.list;
          this.totalCount = data.totalCount;
          this.pageSize = data.pageSize;
          this.currPage = data.currPage;
        }
      });
    },
    showContent(index, row) {
      this.dialogVisible = true;
      studentPunch(this.currPage1, this.pageSize1, row.id).then((res) => {
        const { code, data } = res;
        console.log(data);
        if (code === 200) {
          this.sList = data.list;
          this.totalCount1 = data.totalCount;
          this.pageSize1 = data.pageSize;
          this.currPage1 = data.currPage;
        }
      });
    },
    goPunch(index, row) {
      console.log("测试日志");
      punch(row.id).then((value) => {
        const { code, message } = value;
        this.$message({
          message: "打卡成功",
          type: "success",
        });
        this.antiList();
      });
    },
    showHtmlContent(index, row) {
      this.dialogVisible1 = true;
      this.contentHtml = row.content;
    },
    handleCurrentChange(newPage) {
      console.log("打印一下" + newPage);
      this.currPage = newPage;
      this.antiList();
    },
    handleCurrentChange2(newPage) {
      console.log("打印一下" + newPage);
      this.currPage = newPage;
      this.showContent();
    },
  },
};
</script>

<style></style>
