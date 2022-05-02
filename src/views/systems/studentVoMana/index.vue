<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="accountNo" label="学号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="reason" label="原因" width="180">
      </el-table-column>
      <el-table-column prop="startDate" label="开始时间"> </el-table-column>
      <el-table-column prop="endDate" label="结束时间"> </el-table-column>
      <el-table-column prop="opt" label="操作">
        <template slot-scope="scope">
          <div v-if="scope.row.status === 1">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >通过</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >拒绝</el-button
            >
          </div>
          <div v-else>
            {{ scope.row.status === 2 ? "已拒绝" : "已通过" }}
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
  </div>
</template>

<script>
export default {
  name: "StudentVoMana",
  data() {
    return {
      tableData: [
        {
          accountNo: "1001",
          name: "张涛",
          startDate: "2022-05-01",
          endDate: "2022-05-02",
          reason: "运用",
          status: 1,
        },
        {
          accountNo: "1001",
          name: "张涛",
          startDate: "2022-05-01",
          endDate: "2022-05-02",
          reason: "运用",
          status: 1,
        },
        {
          accountNo: "1001",
          name: "张涛",
          startDate: "2022-05-01",
          endDate: "2022-05-02",
          reason: "运用",
          status: 2,
        },
        {
          accountNo: "1001",
          name: "张涛",
          startDate: "2022-05-01",
          endDate: "2022-05-02",
          reason: "运用",
          status: 3,
        },
      ],
    };
  },
};
</script>

<style>
</style>