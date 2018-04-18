import Mes from '@/components/mes'
import Pinglun from '@/components/mes/pinglun'
import Jianxin from '@/components/mes/jianxin'
import Guanzhu from '@/components/mes/guanzhu'

export let message ={
        path:'/mes',
        name:'message',
        component:Mes,
        children:messChildren
}
let messChildren = [
    {
      path:'/pinglun',
      name:'pinglun',
      component:Pinglun
    },
    {
      path:'/jianxin',
      name:'jianxin',
      component:Jianxin
    },
    {
      path:'/guanzhu',
      name:'guanzhu',
      component:Guanzhu
    }
]