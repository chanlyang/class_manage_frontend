<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">
        <el-col :span="12">
          <el-input v-model="form.title"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="内容">
        <el-col :span="16">
          <el-input type="textarea" v-model="form.content"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onPublish">发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { publicNotice } from "@/api/notice";

export default {
  name: "PublishNotice",
  data() {
    return {
      form: {
        title: "",
        content: "",
      },
    };
  },
  methods: {
   async onPublish() {
      publicNotice(this.form).then((value) => {
        const { code, message } = value;
        if (code === 200) {
          this.$message({
            message: "发布成功",
            type: "success",
          });
          setTimeout(() => {
            this.loading = false;
            this.$router.push({ path: "/sysHome" });
          }, 0.1 * 1000);
        } else {
          this.$message.error("发布失败" + message);
        }
      });
    },
  },
};
</script>

<style></style>
