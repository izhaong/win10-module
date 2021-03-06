/*
 * @Author: ไปฒ็<izhaong@outlook.com>๐ถ๐ถ๐ถ
 * @Date: 2021-12-20 09:56:05
 * @LastEditTime: 2021-12-20 14:23:22
 * @LastEditors: ไปฒ็<izhaong@outlook.com>๐ถ๐ถ๐ถ
 * @Description:
 * @FilePath: /win10-module/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './plugins/axios'

import './styles'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
