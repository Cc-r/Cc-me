<template>
  <div id="app">
    <div id="main">
			<div class="header-box">
				<ul class="nav-list">
            <li>
              <router-link :to="{name:'home'}" exact>发现</router-link>
            </li>
            <li>
              <router-link :to="{name:'about'}">关注</router-link>
            </li>
            <li class="message">
              <router-link :to="{name:'mes'}">消息</router-link>
                <ul class="dropdown-menu">
                    <li>
                      <a href="">评论</a>
                    </li>
                    <li>
                      <a href="">简信</a>
                    </li>
                    <li>
                      <a href="">关注</a>
                    </li>
                </ul>
            </li>
				</ul>
			</div>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <button @click="clGo">go方法</button>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  methods:{
    clGo(){
      this.$router.go(-1)
    }
  }
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
.nav-list .router-link-active{
  background: #ea6f5a;
  color: #fff;
}
.router-link-exact-active{
  background: #f0f0f0;
}
</style>
