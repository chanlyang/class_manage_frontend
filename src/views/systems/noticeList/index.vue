<template>
  <div>
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="title" label="标题" width="180"> </el-table-column>
      <el-table-column prop="content" label="内容" width="180">
      </el-table-column>
      <el-table-column prop="date" label="时间"> </el-table-column>
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
    <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose"
    >
      <el-table :data="studentList" style="width: 100%">
        <el-table-column prop="accountNo" label="学号" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="status" label="学习状态">
          <template slot-scope="scope">
            <div>
              {{ scope.row.status === 1 ? "已读" : "未读" }}
            </div>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "NoticeList",
  data() {
    return {
      dialogVisible: false,
      list: [
        {
          title: "测试",
          content: "测试内容",
          date: "2022-05-01",
        },
        {
          title: "测试",
          content: "测试内容",
          date: "2022-05-01",
        },
        {
          title: "测试",
          content: "测试内容",
          date: "2022-05-01",
        },
      ],
      studentList: [
        {
          name: "张三",
          accountNo: 1001,
          status: 1,
        },
        {
          name: "张三",
          accountNo: 1001,
          status: 1,
        },
      ],
    };
  },
  methods: {
    showContent() {
      console.log("查看详情");
      this.dialogVisible = true;
    },
  },
};
</script>

<style>
</style>