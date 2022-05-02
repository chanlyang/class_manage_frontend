<template>
  <div>
    <Layout></Layout>
    <!-- <div class="home">
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
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src

import { getNotice } from "@/api/notice";
import ChinaMap from "@/components/ChinaMap.vue";
import NumLabel from "@/components/NumLabel.vue";
import Layout from "@/components/Layout";
//import Footer from "@/components/Layout/Footer";

export default {
  name: "HomeView",
  components: { ChinaMap, NumLabel, Layout },
  data() {
    return {
      notice: {
        content: "",
      },
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
    console.log(123);
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
