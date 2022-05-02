<template>
  <div>
    <div v-if="showNitce" class="s_notice">通知:有异常</div>
    <div class="todaySwrap">
      <div v-for="(item, index) in tabLists" :key="{ index }" class="today-box">
        <div>{{ item.name }}</div>
        <div>{{ item.total }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { todayInfo } from "@/api/epidemic";

export default {
  name: "todayEpidemic",
  data() {
    return {
      tabLists: [
        {
          name: "发烧人数",
          total: 100,
        },
        {
          name: "咳嗽人数",
          total: 200,
        },
        {
          name: "黄码",
          total: 200,
        },
        {
          name: "红码",
          total: 200,
        },
        {
          name: "绿码",
          total: 200,
        },
        {
          name: "疫苗",
          total: 200,
        },
        {
          name: "核酸",
          total: 200,
        },
        {
          name: "离校",
          total: 200,
        },
      ],
      showNitce: true,
    };
  },
  mounted() {
    this.todayEpidemic();
  },
  methods: {
    todayEpidemic() {
      todayInfo().then((res) => {
        const { code, data } = res;
        console.log(data);
        if (code === 200) {
          this.tabLists = data;
        }
      });
    },
  },
};
</script>

<style lang="less" scope>
.s_notice {
  margin-bottom: 10px;
  height: 40px;
  text-align: center;
}
.todaySwrap {
  display: flex;
  flex-wrap: wrap;
  .today-box {
    height: 200px;
    width: 230px;
    background-color: white;
    border-radius: 6px;
    box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
      0 0px 0 1px rgb(10 10 10 / 2%);
    margin-right: 20px;
    margin-bottom: 20px;
    border: 1px solid #fbfbfb;
  }
}
</style>
