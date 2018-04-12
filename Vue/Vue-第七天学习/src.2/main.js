// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false

import store from './store/'

import axios from './axios-plugin';

Vue.use(axios)

//插件 目的就是扩展功能

// 每个组件的实例，都继承了Vue构建的实例
Vue.prototype.abc = 10;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store
})
