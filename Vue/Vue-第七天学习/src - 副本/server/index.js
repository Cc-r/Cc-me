import axios from 'axios';

axios.defaults.baseURL = 'https://easy-mock.com/mock/5acedaf6739c211717f9fb69/todo_shop'

export function getList(params){
    return axios('/list',params)
}

// export function getUser(params){
//     return axios('/user',params)
// }