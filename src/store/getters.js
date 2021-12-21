/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2021-12-20 19:42:36
 * @LastEditTime: 2021-12-21 14:55:44
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /win10-module/src/store/getters.js
 */
const getters = {
  appInfo: state => state.appList.appInfo,
  allComps: state => state.scene.allComps
}
export default getters
