<template>
  <div class="app">
    <div class="header">
      <div @click="dialogVisible = true">注册</div>
    </div>

    <router-view></router-view>
    <el-dialog
      title="注册新用户"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <div>
        <el-form :model="form" :rules="rules" ref="form" label-width="80px">
          <el-form-item label="学号" prop="accountNo">
            <el-input
              v-model="form.accountNo"
              placeholder="请输入学号"
            ></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="phone">
            <el-input
              v-model="form.phone"
              placeholder="请输入手机号"
            ></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="form.sex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="form.password"
              placeholder="请输入密码"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="passwordOk">
            <el-input
              v-model="form.passwordOk"
              placeholder="请确认密码"
              show-password
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="resetForm('form')"> 重置 </el-button>
        <el-button type="primary" @click="submitForm('form')">提交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<style>
</style>


<script>
export default {
  name: "App",
  data() {
    return {
      dialogVisible: false,
      form: {
        accountNo: "",
        name: "",
        phone: "",
        emial: "",
        password: "",
        passwordOk: false,
        sex: "男",
      },
      rules: {
        accountNo: [
          { required: true, message: "请输入学号", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { min: 0, max: 11, message: "", trigger: "blur" },
        ],
        emial: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        passwordOk: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    handleClose(done) {
      done();
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          dialogVisible = false;
          console.log("提交成功");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.app {
  background: #fff;
  padding-left: 50px;
  padding-right: 50px;
  .header {
    height: 80px;
    line-height: 80px;
  }
}
</style>
