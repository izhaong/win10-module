/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2021-12-20 19:43:57
 * @LastEditTime: 2021-12-21 09:25:07
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /win10-module/src/store/modules/scene.js
 */

const state = {
  checkList: []
}

const mutations = {
  SET_CHECKLIST: (state, list) => {
    state.checkList = list
  }
}

const actions = {
  // todo api保存数据
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
