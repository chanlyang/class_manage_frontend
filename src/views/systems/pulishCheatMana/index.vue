<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <div class="btn-cus">
        <el-form-item>
          <el-button type="primary" @click="onPublish">发布</el-button>
        </el-form-item>
      </div>
      <el-form-item label="标题">
        <el-col :span="12">
          <el-input v-model="form.title" placeholder="请输入标题"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="内容">
        <el-col :span="16">
          <quill-editor
            ref="text"
            v-model="form.content"
            class="editor"
            :options="editorOption"
            style="height: 300px"
          />
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { publish } from "@/api/anti";

export default {
  name: "pulishCheatMana",
  data() {
    return {
      form: {
        title: "",
        content: "",
      },
      editorOption: {
        placeholder: "请输入正文",
      },
    };
  },
  methods: {
   async onPublish() {
      console.log("发布");
      publish(this.form).then((value) => {
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

<style lang="less" scoped>
.btn-cus {
  display: flex;
  justify-content: flex-end;
}
</style>
