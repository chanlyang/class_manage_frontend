<template>
  <div>
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="userId" label="学号" width="180">
      </el-table-column>
      <el-table-column prop="userName" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="sex" label="性别"> </el-table-column>
      <el-table-column prop="phone" label="手机号"> </el-table-column>
      <el-table-column prop="email" label="email"> </el-table-column>
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
import { pageList } from "@/api/student";

export default {
  name: "StudentList",
  data() {
    return {
      list: [
        {
          userId: "",
          userName: "",
          sex: "",
          phone: "",
          email: "",
        },
      ],
    };
  },
  mounted() {
    this.userList();
  },
  methods: {
    userList() {
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
    handleCurrentChange(newPage) {
      console.log("打印一下" + newPage);
      this.currPage = newPage;
      this.userList();
    },
  },
};
</script>

<style></style>
