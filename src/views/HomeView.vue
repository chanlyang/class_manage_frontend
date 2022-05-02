<template>
  <div>
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
    <div class="home">
      <div class="container">
        <div class="leftBox">
          <NumLabel
            v-for="(item, index) in labeList"
            :key="{ index }"
            class=""
            :title="item.title"
            :total="item.total"
          ></NumLabel>
        </div>
        <div class="rightBox">
          <ChinaMap></ChinaMap>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChinaMap from "@/components/ChinaMap.vue";
import NumLabel from "@/components/NumLabel.vue";
//import Footer from "@/components/Layout/Footer";

export default {
  name: "HomeView",
  components: { ChinaMap, NumLabel },
  data() {
    return {
      labeList: [
        {
          title: "现有确诊",
          total: 100,
        },
        {
          title: "无症状",
          total: 100,
        },
        {
          title: "现有重症",
          total: 100,
        },
        {
          title: "累计确诊",
          total: 100,
        },
        {
          title: "累计治愈",
          total: 100,
        },
        {
          title: "累计死亡",
          total: 100,
        },
      ],
    };
  },

  created() {
    //this.fetchBillboard();
  },
  methods: {
    // async fetchBillboard() {
    //   getBillboard().then((value) => {
    //     const { data } = value;
    //     this.notice = data;
    //   });
    // },
  },
};
</script>
<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  .header {
    height: 80px;
    border: 1px solid #eee;
    margin-bottom: 30px;
  }
  .container {
    display: flex;
    .rightBox {
      width: 500px;
      height: 400px;
    }

    .leftBox {
      width: 600px;
      height: 400px;
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
