<template>
  <div>
    <el-row>
      <el-col :span="7">
        <span class="sl-text">健康码</span>
        <el-select v-model="value" placeholder="请选择" @change="pageList1">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option> </el-select
      ></el-col>
      <el-col :span="7">
        <span class="sl-text">是否离校</span>
        <el-radio-group v-model="radio1" @change="pageList2">
          <el-radio label="1">是</el-radio>
          <el-radio label="0">否</el-radio>
        </el-radio-group>
      </el-col>
      <el-col :span="7">
        <span class="sl-text">今日未填报状态</span>
        <el-radio-group v-model="radio2" @change="pageList3">
          <el-radio label="1">是</el-radio>
          <el-radio label="0">否</el-radio>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="userId" label="学号" width="180">
      </el-table-column>
      <el-table-column prop="userName" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="healthCode" label="健康码"> </el-table-column>
      <el-table-column prop="isFever" label="发烧"> </el-table-column>
      <el-table-column prop="isCough" label="咳嗽"> </el-table-column>
      <el-table-column prop="otherDiscomfort" label="其他"> </el-table-column>
      <el-table-column prop="isNucleicAcid" label="核酸"> </el-table-column>
      <el-table-column prop="vaccineNum" label="疫苗接种"> </el-table-column>
      <el-table-column prop="isOutSchool" label="是否离校"> </el-table-column>
      <el-table-column prop="createTime" label="日期"> </el-table-column>
      <el-table-column prop="otherThings" label="其他"> </el-table-column>
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
import { queryFillDaily } from "@/api/epidemic";

export default {
  name: "StudentFillList",
  data() {
    return {
      radio1: "-1",
      radio2: "-1",
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
          label: "红码",
        },
      ],
      value: "请选择健康码",
      list: [
        {
          userId: "",
          userName: "",
          healthCode: "",
          healthCode: "",
          isFever: "",
          isCough: "",
          otherDiscomfort: "",
          isNucleicAcid: "",
          vaccineNum: "",
          isOutSchool: "",
          otherThings: "",
          createTime: "",
        },
      ],
    };
  },
  mounted() {
    this.pageList(-1, -1, -1);
  },
  methods: {
    pageList(healthCode, isOutSchool, noFill) {
      queryFillDaily(
        this.currPage,
        this.pageSize,
        healthCode,
        isOutSchool,
        noFill
      ).then((res) => {
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
    pageList1(healthCode) {
      console.log("healthcode" + healthCode);
      this.pageList(healthCode, -1, -1);
    },
    pageList2(isOutSchool) {
      console.log("isOutSchool" + isOutSchool);
      this.pageList(-1, isOutSchool, -1);
    },
    pageList3(noFill) {
      console.log("noFill" + noFill);
      this.pageList(-1, -1, noFill);
    },
    handleCurrentChange(newPage) {
      console.log("打印一下" + newPage);
      this.currPage = newPage;
      this.pageList(-1, -1, -1);
    },
  },
};
</script>

<style lang="less" scoped>
.sl-text {
  margin-right: 10px;
}
</style>
