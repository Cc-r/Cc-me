<template>
  <div>
    这是user页面
  </div>
</template>

<script>
  import {getUsers} from '../server/'
  export default {
    created(){
      getUsers({
        errorCb(error){
          alert(error)
        }
      }).then(({data}) => {
        console.log(data)
      })
      
       /* this.axios(
         'https://easy-mock.com/mock/5acec1fb07c58f3dfc6b73d0/todo_shop/users',
         {
           method: 'post'
         }
        )
      .then(function({data}){
        console.log(data)
      }) */
    }
  }
</script>
