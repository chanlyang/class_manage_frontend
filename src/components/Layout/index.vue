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
      <div class="box has-background-warning-light" v-if="token == null || token === ''">
        <h1 class="subtitle has-text-primary">🌟🌟🌟 ✨✨✨欢迎来到班级内部系统主页✨✨✨ 🌟🌟🌟
        您还未登陆，快去登录吧！✨✨✨ 🌟🌟🌟</h1>
      </div>
      <dev class="box has-background-warning-light" v-else>
        <h1 class="subtitle has-text-primary">
        🌟🌟🌟 ✨✨✨欢迎来到班级内部系统主页✨✨✨ 🌟🌟🌟
        快去今日疫情填报和反诈打卡吧 ✨✨✨ 🌟🌟🌟
        </h1>
      </dev>

      <div class="bs-sysMsg" v-if="token == null || token === ''">
        <i class="el-alert__icon el-icon-warning"></i>
        <div class="msg__content">
          <el-carousel
            height="28px"
            direction="vertical"
            indicator-position="none"
            :autoplay="true"
          >
            <el-carousel-item v-for="item in systemMsg" :key="item.id">
              {{ item.title }}
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="bs-sysMsg" v-else>
        <i class="el-alert__icon el-icon-warning"></i>
        <div class="msg__content">
          <el-carousel
            height="28px"
            direction="vertical"
            indicator-position="none"
            :autoplay="true"
          >
            <el-carousel-item v-for="item in notice" :key="item.noticeId">
              {{ item.title }} : {{ item.content }}
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div v-if="token">
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
      </div>
      <div v-else>
        <HomeView></HomeView>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import { getUser, getUserImg } from "@/utils/auth";
import { mapGetters } from "vuex";
import menuTab from "@/router/menu.js";
import components from "@/router/components";
import { queryPageByAccept } from "@/api/notice";
import HomeView from "@/views/HomeView.vue";

export default {
  name: "Layout",
  components: { components, HomeView },
  data() {
    return {
      logoImg: require("@/assets/image/logo.png"),
      userName: getUser(),
      imgUrl: getUserImg(),
      notice: [
        {
          title: "",
          noticeId: "",
          content: "",
        },
      ],
      systemMsg: [
        { id: 1, title: "请登录后查看通知" },
        { id: 2, title: "登录后记得每日疫情填报哦！！" },
        { id: 3, title: "不要忘了反诈学习打卡哦！！！" },
      ],
      tabs: menuTab,
      activeName: "TodayEpidemic",
    };
  },
  computed: {
    ...mapGetters(["token", "user", "imageUrl"]),
  },
  mounted() {
    if (this.token != null && this.token != "") {
      this.queryPageNotice();
    }
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
    queryPageNotice() {
      queryPageByAccept(1, 20).then((res) => {
        const { code, data } = res;
        console.log(data);
        if (code === 200) {
          this.notice = data.list;
        }
      });
    },
    handleClick() {},
  },
};
</script>

<style scoped>
input {
  width: 80%;
  height: 86%;
}

/*轮翻消息*/
.bs-sysMsg {
  position: relative;
  display: flex;
  width: 100%;
  padding: 8px 12px;
  margin-bottom: 10px;
  border-radius: 2px;
  color: #e6a23c;
  background-color: #fdf6ec;
  overflow: hidden;
  opacity: 1;
  align-items: center;
  transition: opacity 0.2s;
}
.bs-sysMsg .msg__content {
  display: table-cell;
  padding: 0 8px;
  width: 100%;
}
.bs-sysMsg .msg__content a.item {
  color: #e6a23c;
  font-size: 14px;
  opacity: 0.75;
}
.bs-sysMsg .msg__content a.item:hover {
  text-decoration: underline;
}
</style>
