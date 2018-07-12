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

  getCode(type, phone) {
    return axios.get(`${config.service.host}/verifycode/send/${type}?phone=${phone}`)
  }

  userRegister(params) {
    return axios.post(`${config.service.host}/user/register`, params)
  }

  userLogin(params) {
    return axios.post(`${config.service.host}/user/login`, params)
  }

  userLogout() {
    return axios.post(`${config.service.host}/user/logout`, {
      headers: this.getAuthorization()
    })
  }

  auditQuery(params) {
    return axios.post(`${config.service.host}/user/audit/query`, params)
  }


}


const httpS = new HttpService()

export default httpS
