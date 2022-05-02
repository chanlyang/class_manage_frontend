<template>
  <div>
    <el-row>
      <el-col :span="7">
        <span class="sl-text">健康码</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option> </el-select
      ></el-col>
      <el-col :span="7">
        <span class="sl-text">是否密接</span>
        <el-radio v-model="isMijie" label="1">是</el-radio>
        <el-radio v-model="isMijie" label="2">否</el-radio>
      </el-col>
      <el-col :span="7">
        <span class="sl-text">今日状态</span>
        <el-radio v-model="isShBao" label="1">是</el-radio>
        <el-radio v-model="isShBao" label="2">否</el-radio>
      </el-col>
    </el-row>
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="accountNo" label="学号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="heleathCode" label="健康码"> </el-table-column>
      <el-table-column prop="fas" label="发烧"> </el-table-column>
      <el-table-column prop="kes" label="咳嗽"> </el-table-column>
      <el-table-column prop="hes" label="核酸"> </el-table-column>
      <el-table-column prop="mijie" label="是否上报"> </el-table-column>
      <el-table-column prop="date" label="日期"> </el-table-column>
      <el-table-column prop="ortherDesc" label="其他"> </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
  </div>
</template>

<script>
export default {
  name: "StudentFillList",
  data() {
    return {
      isMijie: false,
      isShBao: false,
      options: [
        {
          value: "1",
          label: "绿码",
        },
        {
          value: "2",
          label: "黄码",
        },
        {
          value: "3",
          label: "绿码",
        },
      ],
      value: "请选择健康码",
      list: [
        {
          accountNo: 123,
          name: "zhangsan",
          heleathCode: "红码",
          fas: "是",
          kes: "是",
          hes: "是",
          mijie: "否",
          date: "2022-05-02",
          ortherDesc: "其他",
        },
        {
          accountNo: 123,
          name: "zhangsan",
          heleathCode: "红码",
          fas: "是",
          kes: "是",
          hes: "是",
          mijie: "否",
          date: "2022-05-02",
          ortherDesc: "其他",
        },
        {
          accountNo: 123,
          name: "zhangsan",
          heleathCode: "红码",
          fas: "是",
          kes: "是",
          hes: "是",
          mijie: "否",
          date: "2022-05-02",
          ortherDesc: "其他",
        },
        {
          accountNo: 123,
          name: "zhangsan",
          heleathCode: "红码",
          fas: "是",
          kes: "是",
          hes: "是",
          mijie: "否",
          date: "2022-05-02",
          ortherDesc: "其他",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.sl-text {
  margin-right: 10px;
}
</style>