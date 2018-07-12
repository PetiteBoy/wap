<template>
  <div class="self-info">
    <Header :title="headerTitle" :back-status="true"></Header>
    <div class="page-title">
      个人信息
    </div>
    <div class=" page-main page-item self-info-main">
      <div>手机号码：18511112222</div>
      <div>准驾车型：A1</div>
      <div>驾驶证号：71238d81238</div>
      <div>驾驶证有效期：2018-06-17至2018-06-17</div>
      <div>证件类型：身份证</div>
      <div>证件号码：71238d81238</div>
      <div>注册时间：2018-06-09 22:11:53</div>
      <div>审核状态：已通过/未通过/待审核</div>
      <div>审核时间：2018-06-17 16:07:42</div>
    </div>
    <div class="page-item">
      <el-button type="primary" @click="logout()">退出登录</el-button>
    </div>
  </div>
</template>
<script>
import Header from './Home/Header.vue'
export default {
  name: 'self-info',
  data() {
    return {
      headerTitle: '教育管理平台'
    }
  },
  computed: {
    loginStatus() {
      return this.$store.state.login.loginStatus
    }
  },
  watch: {
    loginStatus() {
      if (!this.loginStatus) {
        this.$router.push('/home')
      }
    }
  },
  components: {
    Header
  },
  methods: {
    logout() {
      this.$store.dispatch('userLogout')
    }
  }
}
</script>
<style>
.self-info-main {
  width: 300px;
  margin: 0 auto;
  font-size: 14px;
  text-align: left;
  margin-top: 20px;
}
.logout {
  text-align: center;
  margin-top: 20px;
}
</style>

