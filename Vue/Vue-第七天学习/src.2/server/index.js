// 设置请求的接口的函数

import axios from 'axios'

axios.defaults.baseURL = 'https://easy-mock.com/mock/5abdef3d1fc7eb0367395cc9/shop/'

export function getShopList() {
  return axios('/shop-list')
}

export function getRecommend() {
  return axios('/recommend')
}

/* 
  params:
    data 向后端发送的数据 Object
    method: post/get

    {
      data:{
        userName:1,
        age:2
      },
      method:'psot
    }
*/