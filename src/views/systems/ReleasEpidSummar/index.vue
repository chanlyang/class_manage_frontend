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

      <el-form-item>
        <el-button type="primary" @click="onSubmit">发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
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
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("发布");
    },
  },
};
</script>

<style lang="less" scope>
.d-text {
  margin-left: 10px;
}
</style>
