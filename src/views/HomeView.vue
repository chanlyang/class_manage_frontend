<template>
  <div>
    <div class="box" > 
      通知🔔 {{billboard}}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data() {
    return{
      billboard: '版本更新'
    } 
  }
}
</script>
