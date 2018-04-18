<template>
    <div id="about">
        <h2>关注页面</h2>
        <div class="content">
			<div class="left-slider">
				<ul class="watch-list">
					<li class="active">
						<img src="https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120">
						<span>简友圈</span>
					</li>
					<router-link 
						:to="{name:'about',params:{a:item.id}}"
						v-for="item in user"
						:key="item.id"
						tag="li"
					>
						<img src="https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120">
						<span>{{item.name}}</span>
					</router-link>
				</ul>
			</div>
			<div class="right-slider">
				<h3>展示页</h3>
				<div>
					<p>id:{{userInfo.id || 'xxxx'}}</p>
					<p>姓名:{{userInfo.name || 'xxx'}}</p>
					<p>简介:{{userInfo.jianjie || 'xxx'}}</p>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
let user = [
	{
		id:1,
		name:'leo',
		jianjie:'妙味课堂的leo'
	},
	{
		id:2,
		name:'momo',
		jianjie:'妙味课堂的momo'
	},
	{
		id:3,
		name:'duoduo',
		jianjie:'妙味课堂的duoduo'
	}
]
export default {
  name:'about',
  data(){
	 return {
		user,
		userInfo:{}
	 }
  },
  watch:{
	  // 当切换动态的路径参数时候，组件不会再执行生命周期函数，但是路由信息对象会发生变化，需要监控
	  $route:'fetchUser'
  },
  methods:{
	  fetchUser(id){
		  id = this.$route.params.a;
		  //console.log(id)
		  if(id){			  
			this.userInfo = this.user.find(item => item.id == id);
		  }else{
			this.userInfo = {}
		  }	  
	  }
  },
  created(){
	  // 当前访问的路径的路由信息对象 $route
	  // 路由的实例 $router
	  
	  this.fetchUser();
	  //console.log('执行了')
  }
}
</script>
