// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'lib-flexible'
import echarts from "echarts"
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import 'lib-flexible'

Vue.prototype.$echarts = echarts
Vue.use(ViewUI)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
