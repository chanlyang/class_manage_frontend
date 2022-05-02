<template>
  <el-container>
    <el-header>
      <header class="header has-background-white has-text-black">
        <b-navbar class="container is-white" :fixed-top="true">
          <template slot="brand">
            <b-navbar-item tag="div">
              <img :src="logoImg" alt="logo" />
            </b-navbar-item>
          </template>
          <template slot="end">
             <b-navbar-item tag="div">
              <b-navbar-item tag="div">
                <img
                  :src="'http://127.0.0.1:8088' + imgUrl"
                  alt="headUrl"
                  style="height: 80px; border-radius: 30%"
                />
              </b-navbar-item>

              <b-navbar-item tag="div">
                {{ userName }}
              </b-navbar-item>

              <b-navbar-item tag="a" @click="logout">
                👋 退出登录
              </b-navbar-item>
            </b-navbar-item>
          </template>
        </b-navbar>
      </header>
    </el-header>
    <el-main class="sys-mian">
      <el-tabs
        class="custom-tabs"
        tab-position="left"
        v-model="activeName"
        @tab-click="handleClick"
      >
        <el-tab-pane
          class="c-tab-item"
          v-for="(tab, index) in tabs"
          :label="tab.label"
          :name="tab.name"
          :key="index"
        >
          <div class="sys-el-container">
            <component
              v-if="activeName === tab.name"
              :is="tab.component"
              :query="JSON.stringify(tab.query)"
            ></component>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
import { getUser, getUserImg } from "@/utils/auth";
import menuTab from "@/router/sysMenu.js";
import components from "@/router/components";

export default {
  name: "Layout",
  components: components,
  data() {
    return {
      logoImg: require("@/assets/image/logo.png"),
      userName: getUser(),
      imgUrl: getUserImg(),
      tabs: menuTab,
      activeName: "TodayEpidemic",
    };
  },

  methods: {
    handleClick(targetName) {
      const { index } = targetName;
      console.log(index);
    },
    async logout() {
      this.$store.dispatch("user/logout").then(() => {
        this.$message.info("退出登录成功");
        setTimeout(() => {
          this.$router.push({ path: this.redirect || "/" });
        }, 500);
      });
    },
  },
};
</script>

<style lang="less">
.sys-mian {
  border: 1px solid #eee;
  padding: 0;
  margin: 30px 50px;
  height: 600px;
  .custom-tabs {
    height: 598px;

    .el-tabs__item {
      height: 60px !important;
      border-bottom: 1px solid #eee;
      line-height: 60px;
    }
    .el-tabs__active-bar {
      height: 60px !important;
    }
  }
}

.sys-el-container {
  padding: 20px;
  height: 600px;
  overflow: auto;
}
</style>
