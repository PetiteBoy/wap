<template>
  <div class="login">
    <Header :title="headerTitle" :back-status="true"></Header>
    <div class="page-title">
      登录驾驶人用户
    </div>
    <div class="page-main">
      <!-- 获取验证码 -->
      <GetCode :type="'login'"></GetCode>
      <div class="login-btn page-item">
        <el-button type="primary" @click="login()" :disabled="loginBtnStatu">登录</el-button>
      </div>
      <!-- 登录页跳转其他功能 -->
      <div class="login-other">
        <div @click="reg()">注册用户</div>
        <div @click="auditQuery()">查询审核状态</div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from './Home/Header.vue'
import GetCode from '../components/Home/GetCode.vue'
export default {
  name: 'login',
  components: {
    Header,
    GetCode
  },
  data() {
    return {
      headerTitle: '登录'
    }
  },
  computed: {
    apiStatus() {
      return this.$store.state.login.api.status
    },
    apiMsg() {
      return this.$store.state.login.api.msg
    },
    apiType() {
      return this.$store.state.login.api.type
    },
    phone() {
      return this.$store.state.login.verify.phone
    },
    verifyCodeToken() {
      return this.$store.state.login.verify.token
    },
    verifyCode() {
      return this.$store.state.login.verify.code
    },
    loginBtnStatu() {
      if (this.phone && this.verifyCode) {
        return false
      } else {
        return true
      }
    }
  },
  watch: {
    apiStatus() {
      if (this.apiType === 'login') {
        let title = ''
        let content = ''
        let btn = []
        let path = ''
        if (this.apiStatus !== '0x0000') {
          title = '登录失败'
          content = this.apiMsg
          btn = ['知道了']
          path = ['']
          this.$store.dispatch('updateDialog', {
            title,
            content,
            btn,
            path
          })
          this.$store.dispatch('resetApi')
          this.$store.dispatch('updateDialogStatus', true)
        } else {
          this.pageChage('/home')
        }
      }
    }
  },
  methods: {
    // 登录
    login() {
      this.$store.dispatch('userLogin', {
        username: this.phone,
        password: this.verifyCode,
        verifyCodeToken: this.verifyCodeToken
      })
    },
    // 注册
    reg() {
      this.pageChage('/reg')
    },
    // 查询状态
    auditQuery() {
      this.pageChage('/audit-query')
    },
    pageChage(path) {
      this.$router.push(path)
    }
  },
  mounted() {
    this.$store.dispatch('resetApi')
    this.$store.dispatch('resetVerify')
  }
}
</script>
<style>
.login-other {
  margin-top: 50px;
}
.login-other div {
  height: 20px;
  line-height: 20px;
  text-align: right;
  margin-top: 5px;
  cursor: pointer;
}
</style>

