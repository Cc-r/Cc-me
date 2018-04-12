//设置请求的接口函数
import axios from 'axios';

axios.defaults.baseURL = 'https://easy-mock.com/mock/5acedaf6739c211717f9fb69/todo_shop/'

export function getShopList(){
    return axios('/shop-list')
}

export function getRecommend(){
    return axios('/recommend')
}