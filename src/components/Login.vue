<template>
  <div class="login">
    <Header :title="headerTitle" :back-status="true"></Header>
    <div class="page-title">
      登录驾驶人用户
    </div>
    <div class="page-main">
      <div class=" page-item">
        <el-select v-model="idType" placeholder="请选择证件类型">
          <el-option v-for="item in IDList" :key="item.type" :label="item.name" :value="item.type">
          </el-option>
        </el-select>
      </div>
      <div class="page-item">
        <el-input :disabled="!idType" v-model="idNo" placeholder="请输入证件号"></el-input>
      </div>
      <!-- 获取验证码 -->
      <GetCode :type="'login'"></GetCode>
      <div class="login-btn page-item">
        <el-button type="primary" @click="login()" :disabled="loginBtnStatu">登录</el-button>
      </div>

      <div class="login-other">
        <div @click="reg()">注册用户</div>
        <div @click="update()">更换手机</div>
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
      headerTitle: '登录',
      //  证件类别
      idType: '',
      //   证件编号
      idNo: ''
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
    getCodeBtnStatus() {
      return !checkPhone(this.phone)
    },
    IDList() {
      return this.$store.state.data.IDList
    },
    loginBtnStatu() {
      if (this.idType && this.idNo && this.phone && this.verifyCode) {
        return false
      } else {
        return true
      }
    }
  },
  watch: {
    apiStatus() {
      if (this.apiType === 'login') {
        if (this.apiStatus !== '0x0000') {
          alert(this.apiMsg)
          this.$store.dispatch('resetApi')
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
    // 修改信息
    update() {
      this.pageChage('/update')
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

