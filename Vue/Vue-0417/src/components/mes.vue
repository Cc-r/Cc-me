<template>
    <div id="mes">
        <h2>消息页面</h2>
        <div class="content">
			<div class="left-slider">
				<ul class="watch-list">
					<router-link :to="{name:'pinglun'}" tag="li">
						<img src="https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120">
						<span>评论</span>
					</router-link>
					<router-link :to="{name:'jianxin'}" tag="li">
						<img src="https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120">
						<span>简信</span>
					</router-link>
					<router-link :to="{name:'guanzhu'}" tag="li">
						<img src="https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120">
						<span>关注</span>
					</router-link>
				</ul>
			</div>
			<div class="right-slider">
				<h3>展示页</h3>
				<router-view></router-view>
			</div>
		</div>
    </div>
</template>
<script>
// import {message} from '../router/message'
// let mes = [
// 	{
// 		title:'评论',
// 		name:'pinglun'
// 	},
// 	{
// 		title:'简信',
// 		name:'jianxin'
// 	},
// 	{
// 		title:'关注',
// 		name:'guanzhu'
// 	}
// ]
export default {
  name:'mes',
  beforeRouteLeave (to,from,next){//更新路径调用
	console.log('离开组件----beforeRouteLeave ')
	let bl = confirm('确定要离开此组件吗')
	console.log(bl)
	//next()
	if(bl){
		next();
	}
  },
}
</script>
