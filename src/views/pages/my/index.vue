<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="学号" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="开始时间"> </el-table-column>
      <el-table-column prop="address" label="结束时间"> </el-table-column>
      <el-table-column prop="address" label="状态"> </el-table-column>
      <el-table-column prop="address" label="审批人"> </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
  </div>
</template>

<script>
export default {
  name: "My",
  data() {
    return {
      tableData: [
        {
          accountNo: "1001",
          name: "王小虎",
          startDate: "2022-05-01",
          endDate: "2022-05-02",
          status: 2,
          audtPerson: "张三",
        },
        {
          accountNo: "1001",
          name: "王小虎",
          startDate: "2022-05-01",
          endDate: "2022-05-02",
          status: 2,
          audtPerson: "张三",
        },
        {
          accountNo: "1001",
          name: "王小虎",
          startDate: "2022-05-01",
          endDate: "2022-05-02",
          status: 2,
          audtPerson: "张三",
        },
        {
          accountNo: "1001",
          name: "王小虎",
          startDate: "2022-05-01",
          endDate: "2022-05-02",
          status: 2,
          audtPerson: "张三",
        },
      ],
    };
  },
};
</script>

<style>
</style>