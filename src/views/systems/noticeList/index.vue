<template>
  <div>
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="title" label="标题" width="180"> </el-table-column>
      <el-table-column prop="content" label="内容" width="180">
      </el-table-column>
      <el-table-column prop="createTime" label="时间"> </el-table-column>
      <el-table-column prop="opt" label="操作">
        <template slot-scope="scope">
          <div>
            <el-button
              size="mini"
              type="primary"
              @click="showContent(scope.$index, scope.row)"
              >查看</el-button
            >
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

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose"
    >
      <el-table :data="sList" style="width: 100%">
        <el-table-column prop="userId" label="学号" width="180">
        </el-table-column>
        <el-table-column prop="userName" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="status" label="学习状态">
          <template slot-scope="scope">
            <div>
              {{ scope.row.status === 1 ? "已读" : "未读" }}
            </div>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @current-change="handleCurrentChange2"
        layout="prev, pager, next"
        :total="totalCount1"
        :current-page="currPage1"
        :page-size="pageSize1"
      >
      </el-pagination>
    </el-dialog>
  </div>
</template>

<script>
import { pageNotice, acceptUser } from "@/api/notice";

export default {
  name: "NoticeList",
  data() {
    return {
      totalCount: 10,
      pageSize: 10,
      currPage: 1,
      totalCount1: 10,
      pageSize1: 10,
      currPage1: 1,
      dialogVisible: false,
      list: [
        {
          id: "",
          title: "",
          content: "",
          createTime: "",
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
    this.noticeList();
  },
  methods: {
    noticeList() {
      pageNotice(this.currPage, this.pageSize).then((res) => {
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
      console.log("查看详情");
      this.dialogVisible = true;
      console.log("通知id" + row.id);
      acceptUser(this.currPage1, this.pageSize1, row.id).then((res) => {
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
    handleCurrentChange(newPage) {
      console.log("打印一下" + newPage);
      this.currPage = newPage;
      this.noticeList();
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
