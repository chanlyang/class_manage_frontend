<template>
  <div>
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="健康码">
        <el-switch v-model="ruleForm.ishealthCode"> </el-switch>
      </el-form-item>
      <el-form-item label="发烧人数">
        <el-switch v-model="ruleForm.isFever"> </el-switch>
      </el-form-item>
      <el-form-item label="核酸">
        <el-switch v-model="ruleForm.isNucleicAcid"> </el-switch>
      </el-form-item>
      <el-form-item label="咳嗽人数">
        <el-switch v-model="ruleForm.isCough"> </el-switch>
      </el-form-item>
      <el-form-item label="是否离校">
        <el-switch v-model="ruleForm.isOutSchool"> </el-switch>
      </el-form-item>
      <el-form-item label="其他不适">
        <el-switch v-model="ruleForm.otherDiscomfort"> </el-switch>
      </el-form-item>
      <el-form-item label="疫苗接种">
        <el-switch v-model="ruleForm.vaccineNum"> </el-switch>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit(ruleForm)">发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { publishTodayEpidemic } from "@/api/epidemic";

export default {
  name: "ReleasEpidSummar",
  data() {
    return {
      ruleForm: {
        ishealthCode: false,
        isFever: false,
        isCough: false,
        otherDiscomfort: false,
        isNucleicAcid: false,
        isOutSchool: false,
        vaccineNum: false,
      },
      list: [],
    };
  },
  methods: {
    async onSubmit(ruleForm) {
      if (ruleForm.ishealthCode) {
        this.list.push("healthCode");
      }
      if (ruleForm.isFever) {
        this.list.push("isFever");
      }
      if (ruleForm.isCough) {
        this.list.push("isCough");
      }
      if (ruleForm.otherDiscomfort) {
        this.list.push("otherDiscomfort");
      }
      if (ruleForm.isNucleicAcid) {
        this.list.push("isNucleicAcid");
      }
      if (ruleForm.isOutSchool) {
        this.list.push("isOutSchool");
      }
      if (ruleForm.vaccineNum) {
        this.list.push("vaccineNum");
      }
      publishTodayEpidemic(this.list).then((value) => {
        const { code, message } = value;
        if (code === 200) {
          this.$message({
            message: "发布成功",
            type: "success",
          });
          setTimeout(() => {
            this.loading = false;
            this.$router.push({ path: this.redirect || "/sysHome" });
          }, 0.1 * 100);
        } else {
          this.$message.error("发布失败" + message);
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
