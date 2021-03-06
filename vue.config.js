/*
 * @Author: ไปฒ็<izhaong@outlook.com>๐ถ๐ถ๐ถ
 * @Date: 2021-12-20 10:04:48
 * @LastEditTime: 2021-12-20 11:17:10
 * @LastEditors: ไปฒ็<izhaong@outlook.com>๐ถ๐ถ๐ถ
 * @Description:
 * @FilePath: /win10-module/vue.config.js
 */

const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  devServer: {
    port: 8090,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        '@c': resolve('src/components')
      }
    }
  }
}
