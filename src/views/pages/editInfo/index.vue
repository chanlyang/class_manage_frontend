<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="学号">
        <el-col :span="12">
          <el-input v-model="ruleForm.userId" disabled></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="姓名" prop="name">
        <el-col :span="12">
          <el-input v-model="ruleForm.name"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-col :span="12">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="email" prop="email">
        <el-col :span="12">
          <el-input v-model="ruleForm.email"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "EditInfo",
  data() {
    return {
      ruleForm: {
        userId: "1001",
        name: "张三",
        phone: "13614514870",
        email: "1289385390@qq.com",
      },
      rules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        email: [{ required: true, message: "请输入邮箱地址", trigger: "blur" }],
        phone: [{ required: true, message: "请输入电话", trigger: "blur" }],
      },
    };
  },
};
</script>

<style>
</style>