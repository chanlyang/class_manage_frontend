<template>
  <div>
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="请假原因">
        <el-col :span="14">
          <el-input
            type="textarea"
            v-model="ruleForm.reason"
            placeholder="请输入请假原因"
          ></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="请假时长">
        <el-col :span="5">
          <el-input
            v-model="ruleForm.applyLongTime"
            size="mini"
            placeholder="请输入请假天数"
          ></el-input>
        </el-col>
        <span class="d-text">天</span>
      </el-form-item>

      <el-form-item label="请假时间">
        <el-col :span="16">
          <el-date-picker
            v-model="ruleForm.vacateDates"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
            format="yyyy-MM-dd HH:mm:ss"
          >
          </el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">请假</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { apply } from "@/api/leave";

export default {
  name: "Vacate",
  data() {
    return {
      ruleForm: {
        reason: "",
        applyLongTime: "",
        startTime: "",
        endTime: "",
        vacateDates: [],
        pickerOptions: {
          shortcuts: [
            {
              text: "最近一周",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit("pick", [start, end]);
              },
            },
            {
              text: "最近一个月",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit("pick", [start, end]);
              },
            },
            {
              text: "最近三个月",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit("pick", [start, end]);
              },
            },
          ],
        },
      },
    };
  },
  methods: {
    async onSubmit() {
      this.ruleForm.startTime = this.ruleForm.vacateDates[0];
      this.ruleForm.endTime = this.ruleForm.vacateDates[1];
      apply(this.ruleForm).then((value) => {
        const { code, message } = value;
        if (code === 200) {
          this.$message({
            message: "请假申请已提交",
            type: "success",
          });
          this.$router.push({ path: this.redirect || "/" });
        } else {
          this.$message.error("请假申请提交失败" + message);
        }
      });
    },
  },
};
</script>

<style lang="less" scope>
.vac-text {
  margin-left: 10px;
}
</style>
