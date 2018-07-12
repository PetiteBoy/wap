import httpService from '../../service/service.js'
const state = {
  // 手机号
  phone: '登录',
  // 用户登录之后的token
  authKey: '',
  // 用户的登录状态
  loginStatus: true,
  // 审核状态数据
  auditQueryData: {},
  // 审核状态查询返回的token
  auditQueryToken: '',


  // api
  api: {
    status: '',
    msg: '',
    type: '' // login reg
  },
  // 验证码相关
  verify: {
    code: '',
    token: '',
    phone: ''
  },
  // 登录


}
const mutations = {
  UPDATE_API(state, params) {
    state.api = Object.assign(state.api, params)
  },
  UPDATE_LOGIN_STATUS(state, status) {
    state.loginStatus = status
  },
  GET_VERIFY_DATA(state, data) {
    state.verify = Object.assign(state.verify, data)
  },
  UPDATE_AUDIT_QUERY_STATUS(state, status) {
    state.auditQueryStatus = status
  },
  GET_AUDIT_QUERY_DATA(state, params) {
    state.auditQueryData = Object.assign(state.auditQueryData, params)
  }
}
const actions = {

  // 重置接口状态
  resetApi({
    commit
  }) {
    commit('UPDATE_API', {
      status: '',
      msg: '',
      type: ''
    })
  },
  // 手机验证码状态
  resetVerify({
    commit
  }) {
    commit('GET_VERIFY_DATA', {
      code: '',
      token: '',
      phone: ''
    })
  },
  // 获取验证码
  getCode({
    commit
  }, {
    type,
    phone
  }) {
    httpService.getCode(type, phone).then((res) => {
      let result = res.data
      commit('UPDATE_API', {
        status: result.status,
        msg: result.message,
        type: 'code'
      })
      if (result.data) {
        commit('GET_VERIFY_DATA', result.data)
      }
    }).catch((err => {
      console.log('[httpService-getCode-fail]', err)
    }))
  },
  //   用户注册
  userRegister({
    commit
  }, params) {
    console.log(params)
    httpService.userRegister(params).then((res) => {
      let result = res.data
      commit('UPDATE_API', {
        status: result.status,
        msg: result.message,
        type: 'register'
      })
    }).catch((err => {

      throw err
    }))
  },
  //   用户登录
  userLogin({
    commit
  }, params) {
    httpService.userLogin(params).then((res) => {
      let result = res.data
      commit('UPDATE_API', {
        status: result.status,
        msg: result.message,
        type: 'login'
      })

      // }
    }).catch((err => {
      console.log('[httpService-userLogin-fail]', err)
    }))
  },
  //   用户登出
  userLogout({
    commit
  }) {
    httpService.userLogout().then((res) => {
      commit('UPDATE_LOGIN_STATUS', false)
      console.log('[httpService-userLogout-success]', res)
    }).catch((err => {
      commit('UPDATE_LOGIN_STATUS', true)
      console.log('[httpService-userLogout-fail]', err)
    }))
  },
  //   审核状态查询
  auditQuery({
    commit
  }, params) {
    httpService.auditQuery(params).then((res) => {
      let result = res.data
      commit('UPDATE_API', {
        status: result.status,
        msg: result.message,
        type: 'auditstate'
      })
      // commit('UPDATE_AUDIT_QUERY_STATUS', true)
      // 更新审验数据
      // commit('GET_AUDIT_QUERY_DATA', )
      console.log('[httpService-auditQuery-success]', res)
    }).catch((err => {
      commit('UPDATE_AUDIT_QUERY_STATUS', false)
      console.log('[httpService-auditQuery-fail]', err)
    }))
  },
  //   修改注册用户
  registerUpdate({
    commit
  }, params) {
    httpService.registerUpdate(params).then((res) => {
      let result = res.data
      commit('UPDATE_API', {
        status: result.status,
        msg: result.message,
        type: 'update'
      })
    }).catch(err => {
      console.log('[httpService-registerUpdate-fail]', err)
    })
  }
}
export default {
  state,
  mutations,
  actions
}
