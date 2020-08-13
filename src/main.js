import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/tailwind.css'
import VueApexCharts from "vue-apexcharts";
import VueShowdown from 'vue-showdown'

// the second parameter of Vue.use() is optional
Vue.use(VueShowdown, {
  // set default flavor of showdown
  flavor: 'github',
  // set default options of showdown (will override the flavor options)
  options: {
    emoji: false,
  },
})

Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
