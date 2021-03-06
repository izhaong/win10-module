/*
 * @Author: ไปฒ็<izhaong@outlook.com>๐ถ๐ถ๐ถ
 * @Date: 2021-12-20 09:56:05
 * @LastEditTime: 2021-12-20 19:56:48
 * @LastEditors: ไปฒ็<izhaong@outlook.com>๐ถ๐ถ๐ถ
 * @Description:
 * @FilePath: /win10-module/src/store/index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const modulesFiles = require.context('./modules', true, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
  modules,
  getters
})

export default store
