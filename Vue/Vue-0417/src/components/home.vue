<template>
  <div id="home">
    <h2>发现页面</h2>
    <button @click="clPush">push方法</button>
    <button @click="clReplace">replace方法</button>
  </div>
</template>

<script>
export default {
  name:'home',
  methods:{
    clPush(){
      console.log(1)
      this.$router.push({path:'/mes'})
    },
    clReplace(){
      this.$router.replace({path:'/about'})
    }
  },
  beforeRouteEnter(to,from,next){//进入组件之前调用，早于组件的声明周期钩子函数
    console.log('进入组件调用----beforeRouteEnter')
    next()
  }
}
</script>
