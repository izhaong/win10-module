/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2021-12-20 10:35:04
 * @LastEditTime: 2021-12-21 14:45:27
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /win10-module/src/plugins/axios.js
 */
'use strict'

import Vue from 'vue'
import axios from 'axios'
import { Message } from 'element-ui'

const config = {
  baseURL: process.env.VUE_APP_BASE_API || '',
  timeout: 60 * 1000, // Timeout÷
  withCredentials: true, // Check cross-site Access-Control
  headers: {
    'Accept-Language': 'zh-CN',
    Authorization: 'Bearer ae82de39-0b26-419b-b863-53e159091dac'
  }
}

console.log(process.env.VUE_APP_BASE_API)
const _axios = axios.create(config)

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // eslint-disable-next-line prefer-promise-reject-errors
    if (+response.status !== 200) { return Promise.reject('连接服务器出错') }
    if (+response.data?.code !== 0) {
      const message = response.data?.msg || '失败～'
      Message({
        message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(message)
    } else {
      return response.data.data
    }
  },
  function (error) {
    Message({
      message: '失败～',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

const install = (Vue, options) => {
  Vue.axios = _axios
  window.axios = _axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get () {
        return _axios
      }
    },
    $axios: {
      get () {
        return _axios
      }
    }
  })
}

Vue.use(install)

export default { install }
