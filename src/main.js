import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts';
import china from 'echarts/map/json/china.json'
import VueQuillEditor from 'vue-quill-editor'

// 引入富文本编辑器
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'


echarts.registerMap('china', china)
Vue.prototype.$echarts = echarts

Vue.use(Buefy)
Vue.use(ElementUi)
Vue.use(VueQuillEditor) // 富文本编辑器


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
