<template>
  <el-container>
    <el-header>
      <header class="header has-background-white has-text-black">
        <b-navbar class="container is-white" :fixed-top="true">
          <template slot="brand">
            <b-navbar-item tag="div">
              <img :src="logoImg" alt="logo" />
            </b-navbar-item>

            <b-navbar-item
              class="is-hidden-desktop"
              tag="router-link"
              :to="{ path: '/' }"
            >
              主页
            </b-navbar-item>
          </template>
          <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
              🌐 主页
            </b-navbar-item>
          </template>

          <template slot="end">
            <b-navbar-item v-if="token == null || token === ''" tag="div">
              <div class="buttons">
                <b-button
                  class="is-light"
                  tag="router-link"
                  :to="{ path: '/register' }"
                >
                  注册
                </b-button>
                <b-button
                  class="is-light"
                  tag="router-link"
                  :to="{ path: '/login' }"
                >
                  登录
                </b-button>
              </div>
            </b-navbar-item>

            <b-navbar-item v-else tag="div">
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
    <el-main>
      <div class="box">通知🔔 {{ notice.content }}</div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane
          v-for="(tab, index) in tabs"
          :label="tab.label"
          :name="tab.name"
          :key="index"
        >
          <component
            v-if="activeName === tab.name"
            :is="tab.component"
            :query="JSON.stringify(tab.query)"
          ></component>
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
import { getUser, getUserImg } from "@/utils/auth";
import { mapGetters } from "vuex";
import menuTab from "@/router/menu.js";
import components from "@/router/components";

export default {
  name: "Layout",
  components: components,
  data() {
    return {
      logoImg: require("@/assets/image/logo.png"),
      userName: getUser(),
      imgUrl: getUserImg(),
      notice: {
        content: "消息通知",
      },
      tabs: menuTab,
      activeName: "TodayEpidemic",
    };
  },
  computed: {
    ...mapGetters(["token", "user", "imageUrl"]),
  },
  methods: {
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

<style scoped>
input {
  width: 80%;
  height: 86%;
}
</style>
