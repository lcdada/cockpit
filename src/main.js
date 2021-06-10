import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import ECharts from 'echarts'
// import * as echarts from 'echarts';
import './utils/rem'
import dataV from '@jiaminghi/data-view'
import axios from "axios";

Vue.use(dataV)


Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
