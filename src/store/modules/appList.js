/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2021-12-20 19:43:50
 * @LastEditTime: 2021-12-20 20:13:06
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /win10-module/src/store/modules/appList.js
 */
const state = {
  appInfo: {
    id: undefined,
    name: undefined
  }
}

const mutations = {
  SET_APPINFO: (state, info) => {
    state.appInfo = info
  }
}

const actions = {
  createApp ({ commit, state }) {
    return new Promise((resolve, reject) => {
      // todo 异步请求
      console.log(state.appInfo)
      setTimeout(() => {
        const resData = { id: 1, name: 'test' }
        commit('SET_CREACTEDAPP', resData)
        resolve(resData)
        // reject
      }, 2000)
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
