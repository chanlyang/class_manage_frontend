<template>
  <div>
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="健康码" prop="type">
        <el-checkbox-group v-model="ruleForm.healthCode">
          <el-checkbox label="红" name="type"></el-checkbox>
          <el-checkbox label="黄" name="type"></el-checkbox>
          <el-checkbox label="绿" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="是否发烧">
        <el-radio-group v-model="ruleForm.isfever">
          <el-radio label="是"></el-radio>
          <el-radio label="否"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否咳嗽">
        <el-radio-group v-model="ruleForm.isCough">
          <el-radio label="是"></el-radio>
          <el-radio label="否"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="其他不适">
        <el-radio-group v-model="ruleForm.isDiscomfort">
          <el-radio label="是"></el-radio>
          <el-radio label="否"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否核酸">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="是"></el-radio>
          <el-radio label="否"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否留校">
        <el-radio-group v-model="ruleForm.isStay">
          <el-radio label="是"></el-radio>
          <el-radio label="否"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="疫苗接种">
        <el-col :span="2">
          <el-input v-model="ruleForm.vaccine" size="mini"></el-input>
        </el-col>
        <span class="d-text">针</span>
      </el-form-item>
      <el-form-item label="其他">
        <el-col :span="6">
          <el-input type="textarea" v-model="ruleForm.otherDesc"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">上报</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "DayWirte",
  data() {
    return {
      ruleForm: {
        healthCode: "",
        isfever: 1,
        isCough: 1,
        isDiscomfort: 1,
        isNuacid: 1,
        vaccine: "",
        isStay: "",
        otherDesc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style lang="less" scope>
.d-text {
  margin-left: 10px;
}
</style>