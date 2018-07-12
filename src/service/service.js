import axios from 'axios'
import config from '../config/config'
import store from '../store'


class HttpService {

  /**
   * 服务鉴权
   */
  getAuthorization() {
    return {
      authKey: store.state.login.authKey
    }
  }

  // 获取验证码
  getCode(type, phone) {
    return axios.get(`${config.service.host}/verifycode/send/${type}?phone=${phone}`)
  }

  // 用户注册
  userRegister(params) {
    return axios.post(`${config.service.host}/user/register`, params)
  }

  // 用户登录
  userLogin(params) {
    return axios.post(`${config.service.host}/user/login`, params)
  }

  // 用户登出
  userLogout() {
    return axios.post(`${config.service.host}/user/logout`, {
      headers: this.getAuthorization()
    })
  }

  // 查询审验
  auditQuery(params) {
    return axios.post(`${config.service.host}/user/audit/query`, params)
  }

  // 修改用户信息
  registerUpdate(params) {
    return axios.post(`${config.service.host}/user/register/update`, params)
  }

  // 获取用户信息
  getInfo() {
    return axios.post(`${config.service.host}/user/info`, {
      headers: this.getAuthorization()
    })
  }


}


const httpS = new HttpService()

export default httpS
