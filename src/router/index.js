/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2021-12-20 09:56:05
 * @LastEditTime: 2021-12-20 11:24:14
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /win10-module/src/router/index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AppList',
    component: () => import(/* webpackChunkName: "app-list" */ '../views/app/list.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
