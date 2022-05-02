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
    onPublish() {
      console.log("发布");
    },
  },
};
</script>

<style>
</style>