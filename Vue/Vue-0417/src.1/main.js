// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
Vue.config.productionTip = false
Vue.use(VueRouter)
/* eslint-disable no-new */
import Home from './components/home.vue'
import About from './components/about.vue'
import User from './components/user.vue'
import Mes from './components/mes.vue'
import Pinglun from '@/components/erji/pinglun'
import Jianxin from '@/components/erji/jianxin'
import Xiaoxi from '@/components/erji/xiaoxi'
let router = new VueRouter({
  routes:[
    {
      path:'/',
      component:Home
    },
    {
      path:'/about',
      component:About
    },
    {
      path:'/user',
      component:User
    },
    {
      path:'/mes',
      component:Mes,
      children:[
        {
          path:'/pinglun',
          name:'pinglun',
          component:Pinglun
        },
        {
          path:'/jianxin',
          name:'jianxin',
          component:Jianxin
        },
        {
          path:'/xiaoxi',
          name:'xiaoxi',
          component:Xiaoxi
        }
      ]   
    }
  ]
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
