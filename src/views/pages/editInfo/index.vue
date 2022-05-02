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

      <el-form-item label="姓名" prop="userName">
        <el-col :span="12">
          <el-input v-model="ruleForm.userName"></el-input>
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
import { getUserInfo, updateInfo } from "@/api/auth/auth";

export default {
  name: "EditInfo",
  data() {
    return {
      ruleForm: {
        userId: "",
        userName: "",
        phone: "",
        email: "",
      },
      rules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        email: [{ required: true, message: "请输入邮箱地址", trigger: "blur" }],
        phone: [{ required: true, message: "请输入电话", trigger: "blur" }],
      },
    };
  },
  mounted() {
    console.log("细腻");
    this.userInfo();
  },
  methods: {
    userInfo() {
      getUserInfo().then((res) => {
        const { code, data } = res;
        console.log(data);
        if (code === 200) {
          this.ruleForm = data;
        }
      });
    },
    async submitForm(ruleForm) {
      updateInfo(this.ruleForm).then((value) => {
        const { code, message } = value;
        if (code === 200) {
          this.$message({
            message: "修改成功",
            type: "success",
          });
          setTimeout(() => {
            this.loading = false;
            this.$router.push({ path: this.redirect || "/" });
          }, 0.1 * 1000);
        } else {
          this.$message.error("修改失败" + message);
        }
      });
    },
  },
};
</script>

<style></style>
