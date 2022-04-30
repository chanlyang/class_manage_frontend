<template>
  <div>
    <div class="box" > 
      通知🔔 {{notice.content}}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import {getNotice} from '@/api/notice'

export default {
  name: 'HomeView',
  data() {
    return{
      notice: {
        content: ''
      }
    } 
  },

  created(){
    this.fetchBillboard();
  },
 methods: {
    async fetchBillboard() {
      getBillboard().then((value) => {
        const { data } = value;
        this.notice = data;
      });
    },
  },
};
</script>
