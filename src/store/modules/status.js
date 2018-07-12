const state = {
  // 用户的登录状态
  loginStatus: false
}
const mutations = {
  UPDATE_LOGIN_STATUS(state, status) {
    state.loginStatus = status
  }
}
const actions = {
  // 更新用户的登录状态
  updateLoginStatus({
    commit
  }, status) {
    commit('UPDATE_LOGIN_STATUS', status)
  }

}
export default {
  state,
  mutations,
  actions
}
