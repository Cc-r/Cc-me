import Vue from 'vue'
import Vuex from 'vuex'
import { getShopList, getRecommend} from '@/server/'
// Vuex文件

Vue.use(Vuex);

let store = new Vuex.Store({
  state:{
    shopList: []
  },
  mutations:{
    changeShopList(state,payload){ // {list:[]}
      console.log(payload)
      state.shopList = payload.list;
    }
  },
  actions:{
    getListAction(store){
      // 发送请求
      getShopList().then(({data}) => {
        store.commit('changeShopList',{list:data.data.list})
      })
    }
  }
})

export default store;