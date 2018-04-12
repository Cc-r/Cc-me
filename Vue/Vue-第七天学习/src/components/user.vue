<template>
    
</template>
<script>
//import {getUser} from '../server'
export default{
    created(){
        // getUser().then(({data}) => {
        //     console.log(data)
        // })
        
        this.axios('https://easy-mock.com/mock/5acedaf6739c211717f9fb69/todo_shop/user')
        .then(function(params) {
            console.log(params)
        })
    }
}
    
</script>