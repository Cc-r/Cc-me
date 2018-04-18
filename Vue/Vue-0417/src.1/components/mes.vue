<template>
  <div id="mes">
      <ul>
          <li>
              <router-link :to="{name:'pinglun'}">评论</router-link>
          </li>
          <li>
              <router-link :to="{name:'jianxin'}">简信</router-link>
          </li>
          <li>
              <router-link :to="{name:'xiaoxi'}">消息</router-link>
          </li>
      </ul>
      <div>
          这是二级页面
          <hr>
          <router-view></router-view>
      </div>
  </div>
</template>
