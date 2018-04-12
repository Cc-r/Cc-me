
import Vue from 'vue'
import Vuex from 'vuex'
import {getShopList,getRecommend} from '@/server'
//Vuex 文件
Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        shopList: [],
        RecommendList:[],
        loding:true,
        shopLoding:true,
        RecommendLoding:true
    },
    mutations:{
        changeShopList(state,payload){
            console.log(payload)
            state.shopList = payload.list;
            state.loding = false
            if(payload.list){
                state.shopLoding = false;               
            }
        },
        changeRecommendList(state,payload){
            state.RecommendList = payload.list;
            if(payload.list){
                state.RecommendLoding = false;
            }
        }
    },
    actions:{
        getListAction(store){
            //发送请求
            getShopList().then(({data}) => {
                store.commit('changeShopList',{list:data.data.list})
            })
        },
        getRecommendAction(store){
            getRecommend().then(({data}) => {
                store.commit('changeRecommendList',{list:data.data.list})
            })
        }
    }
})

export default store