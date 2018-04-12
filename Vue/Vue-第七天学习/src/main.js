// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import axios from 'axios'
import store from './store/'
Vue.config.productionTip = false
//Vue.use(Vuex)

/* eslint-disable no-new */
Vue.use({
    install(vue){
      vue.prototype.axios = axios
    }
})
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store
})
