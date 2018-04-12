<template>
  <div class="shop-cart">
    <!-- 请求购物车数据的时候loding显示 -->
    <div style="text-align:center;" v-show="this.$store.state.shopLoding">
      <img src="@/assets/timg.gif" >
    </div>
    <div class="content"  v-show="!this.$store.state.shopLoding">
      <div class="cart-empty" id="J_cartEmpty" v-show="this.$store.state.loding">
          <h2>您的购物车还是空的！</h2>
          <a href="" class="btn btn-primary btn-shoping J_goShoping">马上去购物</a>
      </div>
      <div class="cart-goods-list">
        <!--购物车表头-->
        <div class="list-head clearfix">
            <div class="col col-check"><i class="iconfont icon-checkbox icon-checkbox-selected">√</i>全选</div>
            <div class="col col-img">&nbsp;</div>
            <div class="col col-name">商品名称</div>
            <div class="col col-price">单价</div>
            <div class="col col-num">数量</div>
            <div class="col col-total">小计</div>
            <div class="col col-action">操作</div>
        </div>
        <!--购物车展示商品信息-->
        <div class="list-body">
          <shop-item-box
            v-for="item in shopList" :key="item.skuId"
            :option="item"
          ></shop-item-box>
        </div>
      </div>
      <!--计算价钱的信息-->
      <shop-info></shop-info>
    </div>
    <recommend v-show="!this.$store.state.shopLoding"></recommend>
  </div>
</template>
<script>
import ShopItemBox from './shopItemBox'
import ShopInfo from './shopInfo'
import recommend from './recommend'

export default {
  components: {
    ShopItemBox,
    ShopInfo,
    recommend
  },
  computed:{
    shopList(){
      return this.$store.state.shopList;
    }
  },
  created(){
    this.$store.dispatch('getListAction');
  }
}
</script>
<style>
 @import url('../assets/css/font.css');
</style>

<style scoped>

.cart-empty {
    height: 273px;
    padding-left: 558px;
    margin: 65px 0 130px;
    background: url(https://s01.mifile.cn/i/cart/cart-empty.png) no-repeat 124px 0;
    color: #b0b0b0;
    overflow: hidden;
}
.btn-primary {
    background: #ff6700;
    border-color: #ff6700;
    color: #fff;
}
.cart-empty h2 {
    margin: 70px 0 15px;
    font-size: 36px;
}
.cart-empty .btn {
    width: 170px;
    height: 48px;
    line-height: 48px;
}

.shop-cart {
  width: 1300px;
  margin: 0px auto;
}
.cart-goods-list {
  background-color: #fff;
}
.list-head {
  height: 70px;
  line-height: 70px;
  padding-right: 26px;
  color: #424242;
  overflow: hidden;
}
.list-body {
  overflow: hidden;
}
.list-head .col {
  float: left;
}
.cart-goods-list .col-check {
  width: 110px;
}
.cart-goods-list .list-head .col-img {
  width: 120px;
}
.cart-goods-list .list-head .col {
  float: left;
}
.cart-goods-list .list-head .col-name {
  width: 380px;
}
.cart-goods-list .col-price {
  width: 75px;
  padding-right: 84px;
  text-align: right;
  color: #424242;
}
.cart-goods-list .col-num {
  width: 150px;
  text-align: center;
  color: #424242;
}
.cart-goods-list .col-total {
  width: 120px;
  padding-right: 81px;
  text-align: right;
}
.cart-goods-list .col-action {
  width: 80px;
  text-align: center;
}

</style>

