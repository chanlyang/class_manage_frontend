<template>
  <div class="columns py-6">
    <div class="column is-half is-offset-one-quarter">
      <el-card shadow="never">
        <div slot="header" class="has-text-centered has-text-weight-bold">
          学生注册
        </div>
        <div>
          <el-form
            ref="ruleForm"
            v-loading="loading"
            :model="ruleForm"
            status-icon
            :rules="rules"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="学号" prop="userId">
              <el-input v-model="ruleForm.userId" />
            </el-form-item>

            <el-form-item label="姓名" prop="userName">
              <el-input v-model="ruleForm.userName" autocomplete="off" />
            </el-form-item>

            <el-form-item label="性别" prop="sex">
              <el-radio-group v-model="ruleForm.sex">
                <el-radio :label="1">男</el-radio>
                <el-radio :label="2">女</el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item label="头像">
              <el-upload
                ref="upfile"
                action="#"
                :auto-upload="false"
                :on-change="handleChange"
                :show-file-list="false"
                :limit="1"
                accept="image/png,image/gif,image/jpg,image/jpeg"
              >
                <img v-if="avaer" :src="avaer" width="80" height="80" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>

            <el-form-item label="手机号" prop="phone">
              <el-input v-model="ruleForm.phone" autocomplete="off" />
            </el-form-item>

            <el-form-item label="邮箱" prop="email">
              <el-input v-model="ruleForm.email" autocomplete="off" />
            </el-form-item>

            <el-form-item label="密码" prop="pass">
              <el-input
                v-model="ruleForm.pass"
                type="password"
                autocomplete="off"
              />
            </el-form-item>

            <el-form-item label="确认密码" prop="checkPass">
              <el-input
                v-model="ruleForm.checkPass"
                type="password"
                autocomplete="off"
              />
            </el-form-item>

            <el-form-item label="角色" prop="roleId">
              <el-radio-group v-model="ruleForm.roleId">
                <el-radio :label="1">学生</el-radio>
                <el-radio :label="2">教师</el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >立即注册</el-button
              >
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { userRegister } from "@/api/auth/auth";
import { uploadImg } from "@/api/auth/auth";

const validateMobile = (rule, value, callback) => {
  if (!/^1[3456789]\d{9}$/.test(value)) {
    callback(new Error("请输入正确的电话"));
  } else {
    callback();
  }
};

export default {
  name: "Register",
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      loading: false,
      ruleForm: {
        userId: "",
        userName: "",
        sex: "",
        imgUrl: "",
        phone: "",
        pass: "",
        checkPass: "",
        email: "",
        roleId: "",
      },
      avaer: "",
      fileList: [],
      rules: {
        userId: [
          { required: true, message: "请输入学号", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 6 到 10 个字符",
            trigger: "blur",
          },
        ],
        userName: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 6 到 10 个字符",
            trigger: "blur",
          },
        ],
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],
        checkPass: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
          { validator: validatePass, trigger: "blur" },
        ],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        phone: [{ validator: validateMobile, trigger: "blur" }],
        roleId: [{ required: true, message: "请选择角色", trigger: "change" }],
      },
    };
  },
  methods: {
        handleChange(file, fileList) {
      this.fileList = fileList;
      console.log(file);
      //生成本地图片的url，直接src显示,删除或移动后url就失效了
      this.avaer = URL.createObjectURL(file.raw);
      console.log(this.avaer);
      var fd = new FormData();
      fd.append("file", this.fileList[0].raw);
      uploadImg(fd).then((res) => {
        if (res.code === 200) {
          this.ruleForm.imgUrl = res.data;
          console.log(this.ruleForm.imgUrl);
        } else {
          this.$message(res.message);
          return;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true;
          userRegister(this.ruleForm)
            .then((value) => {
              const { code, message } = value;
              if (code === 200) {
                this.$message({
                  message: "账号注册成功",
                  type: "success",
                });
                setTimeout(() => {
                  this.loading = false;
                  this.$router.push({ path: this.redirect || "/login" });
                }, 0.1 * 1000);
              } else {
                this.$message.error("注册失败，" + message);
              }
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style scoped></style>
