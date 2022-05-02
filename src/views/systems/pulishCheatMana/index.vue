<template>
  <div>
    <div class="btn-cus">
      <el-button type="primary" @click="onPublish">发布</el-button>
    </div>
    <el-form ref="form" :model="form" label-width="80px">
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
  mounted: {
    onPublish() {
      console.log("发布");
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
