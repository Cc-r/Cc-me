import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@/components/home.vue'
import About from '@/components/about.vue'
import Mes from '@/components/mes.vue'
import Pinglun from '@/components/mes/pinglun'
import Jianxin from '@/components/mes/jianxin'
import Guanzhu from '@/components/mes/guanzhu'
//import {message} from './message'
let router = new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      name:'home',
      component:Home,
      beforeEnter:(to,from,next) => {//进入路由之前调用
        console.log('Home进来了----beforeEnter')
        next()
      }
    },
    {
      path:'/about/:a?', //params 动态路径参数
      name:'about',
      component:About
    },
    {
      path:'/mes',
      name:'mes',
      component:Mes,
      children:[
        {
          path:'pinglun',
          name:'pinglun',
          component:Pinglun
        },
        {
          path:'jianxin',
          name:'jianxin',
          component:Jianxin
        },
        {
          path:'guanzhu',
          name:'guanzhu',
          component:Guanzhu
        }
      ]
    }
  ]
})
export default router;