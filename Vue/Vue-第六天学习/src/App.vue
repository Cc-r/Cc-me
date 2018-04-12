<template>
  <div id="app">
    <section class="todoapp">
          <div>
              <todosHeader :list="data" @up-enter="clickEnterHandle"></todosHeader>
              <todosCont :list="data"></todosCont>
              <todosFloor></todosFloor>
          </div>
      </section>
  </div>
</template>

<script>
import todosHeader from './components/todos-header'
import todosCont from './components/todos-cont'
import todosFloor from './components/todos-floor'

export default {
  data(){
    return {
      data:[]
    }
  },
  methods:{
      clickEnterHandle(parmes){
        this.data.push(parmes)
        console.log(this.data)
        //  console.log(parmes)
      }
  },
  name: 'App',  
  components:{
    todosHeader,
    todosCont,
    todosFloor
  }
}
</script>
