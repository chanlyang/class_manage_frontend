<template>
  <div>
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="accountNo" label="学号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="sex" label="性别"> </el-table-column>
      <el-table-column prop="phone" label="手机号"> </el-table-column>
      <el-table-column prop="email" label="email"> </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
  </div>
</template>

<script>
export default {
  name: "StudentList",
  data() {
    return {
      list: [
        {
          accountNo: 111,
          name: "zhansan",
          sex: "男",
          phone: "13614514870",
          email: "1289385390@qq.com",
        },
        {
          accountNo: 111,
          name: "zhansan",
          sex: "女",
          phone: "13614514870",
          email: "1289385390@qq.com",
        },
        {
          accountNo: 111,
          name: "zhansan1",
          sex: "女",
          phone: "13614514870",
          email: "1289385390@qq.com",
        },
        {
          accountNo: 111,
          name: "zhansan2",
          sex: "男",
          phone: "13614514870",
          email: "1289385390@qq.com",
        },
        {
          accountNo: 111,
          name: "zhansan3",
          sex: "男",
          phone: "13614514870",
          email: "1289385390@qq.com",
        },
      ],
    };
  },
};
</script>

<style>
</style>