<template>
  <div id="app">
    <!-- <user></user> -->
  </div>
</template>

<script>
import {getList} from './server/'
//import user from './components/user'
export default {
  name: 'App'
  // ,
  // components:{
  //   user
  // }
  ,
  created(){
    // this.axios('https://easy-mock.com/mock/5acedaf6739c211717f9fb69/todo_shop/list')
    // .then(function(params) {
    //   console.log(params)
    // })
    getList().then(({data}) => {
        console.log(data)
    })
  }
}
</script>

<style>
</style>
