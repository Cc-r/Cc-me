<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/about">关于</router-link>
      </li>
      <li>
        <router-link to="/user">用户</router-link>
      </li>
      <li>
        <router-link to="/mes">啦啦</router-link>
      </li>
    </ul>
    <hr>
      <router-view>
        
      </router-view>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'

export default {
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
