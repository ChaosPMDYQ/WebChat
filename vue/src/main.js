import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import md5 from 'js-md5'
import './plugins/element.js'

Vue.use(VueAxios, axios)
Vue.config.productionTip = true

Vue.prototype.$md5 = md5

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
