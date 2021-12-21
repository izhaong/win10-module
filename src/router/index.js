/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2021-12-20 09:56:05
 * @LastEditTime: 2021-12-20 20:58:28
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /win10-module/src/router/index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import parentView from '@c/parent-view'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AppList',
    component: parentView,
    redirect: '/app/list'
  },
  {
    path: '/app',
    name: 'AppManage',
    component: parentView,
    children: [
      {
        path: 'list',
        component: () => import(/* webpackChunkName: "app-list" */ '../views/app/list.vue')
      },
      {
        path: 'create',
        component: () => import(/* webpackChunkName: "app-create" */ '../views/app/create')
      }
    ]
  },
  {
    path: '/scene',
    name: 'SceneManage',
    component: parentView,
    children: [
      {
        path: 'list',
        component: () => import(/* webpackChunkName: "scene-list" */ '../views/scene/list')
      },
      {
        path: 'create',
        component: () => import(/* webpackChunkName: "scene-create" */ '../views/scene/create')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
