<template>
    <header class="header" >
        <h1>todos</h1>
        <input 
            class="new-todo" 
            placeholder="请输入内容" 
            @keyup.13="upenter"
        />
    </header>
</template>
<script>
    export default{
        name:'todos-header',
        props:{
            list:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods:{
            upenter(){   
                let newTodo = document.querySelector(".new-todo")         
                this.$emit('up-enter',{title:newTodo.value,checked:false})
                console.log(newTodo.value)
                newTodo.value = ''
                
            },
            checked(){
                this.$emit('checked')
            }
        }     
    }
</script>