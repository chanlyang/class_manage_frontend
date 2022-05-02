<template>
  <div>
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="健康码" prop="healthCode">
        <el-radio-group v-model="ruleForm.healthCode">
          <el-radio-button label="1" text-color="#67C23A">绿</el-radio-button>
          <el-radio-button label="2" text-color="#E6A23C">黄</el-radio-button>
          <el-radio-button label="3" text-color="#F56C6C">红</el-radio-button>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="是否发烧" prop="isFever">
        <el-radio-group v-model="ruleForm.isFever">
          <el-radio label="1">是</el-radio>
          <el-radio label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否咳嗽" prop="isCough">
        <el-radio-group v-model="ruleForm.isCough">
          <el-radio label="1">是</el-radio>
          <el-radio label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="其他不适" prop="otherDiscomfort">
        <el-radio-group v-model="ruleForm.otherDiscomfort">
          <el-radio label="1">是</el-radio>
          <el-radio label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否核酸" prop="isNucleicAcid">
        <el-radio-group v-model="ruleForm.isNucleicAcid">
          <el-radio label="1">是</el-radio>
          <el-radio label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否留校" prop="isOutSchool">
        <el-radio-group v-model="ruleForm.isOutSchool">
          <el-radio label="1">是</el-radio>
          <el-radio label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="疫苗接种" prop="vaccineNum">
        <el-col :span="2">
          <el-input v-model="ruleForm.vaccineNum" size="mini"></el-input>
        </el-col>
        <span class="d-text">针</span>
      </el-form-item>
      <el-form-item label="其他" prop="otherThings">
        <el-col :span="6">
          <el-input type="textarea" v-model="ruleForm.otherThings"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">上报</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { fillDaily } from "@/api/epidemic";

export default {
  name: "DayWirte",
  data() {
    return {
      ruleForm: {
        healthCode: "",
        isFever: 1,
        isCough: 1,
        otherDiscomfort: 1,
        isNucleicAcid: 1,
        vaccineNum: "",
        isOutSchool: "",
        otherThings: "",
      },
    };
  },
  methods: {
    onSubmit() {
      fillDaily(this.ruleForm).then((value) => {
        const { code, message } = value;
        if (code === 200) {
          this.$message({
            message: "每日填报完成",
            type: "success",
          });
          setTimeout(() => {
            this.loading = false;
            this.$router.push({ path: this.redirect || "/home" });
          }, 0.1 * 1000);
        } else {
          this.$message.error("填报失败" + message);
        }
      });
    },
  },
};
</script>

<style lang="less" scope>
.d-text {
  margin-left: 10px;
}
</style>
