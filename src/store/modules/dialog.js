const state = {
  title: '',
  content: '',
  btn: [],
  path: [],
  dialogStatus: false
}

const mutations = {
  UPDATE_DIALOG_STATUS(state, status) {
    state.dialogStatus = status
  },
  UPDATE_DIALOG(state, params) {
    state.title = params.title
    state.content = params.content
    state.btn = params.btn
    state.path = params.path
  }
}
const actions = {
  updateDialogStatus({
    commit
  }, status) {
    commit('UPDATE_DIALOG_STATUS', status)
  },
  updateDialog({
      commit
    },
    params) {
    commit('UPDATE_DIALOG', params)
  }
}
export default {
  state,
  mutations,
  actions
}
