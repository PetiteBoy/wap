<template>
  <div class="header-box">
    <div class="back" v-show="backStatus" @click="goBack()">
      <i class="el-icon-arrow-left"></i>
    </div>
    <div class="title">{{title}}</div>
    <div class="mobile" v-show="infoStatus" @click="goInfo()">{{phone}}</div>
  </div>
</template>
<script>
export default {
  name: 'header-box',
  data() {
    return {}
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    backStatus: {
      type: Boolean,
      default: false
    },
    infoStatus: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    phone() {
      return this.$store.state.login.phone
    },
    loginStatus() {
      return this.$store.state.status.loginStatus
    }
  },
  methods: {
    // 返回
    goBack() {
      history.back(-1)
    },
    // 个人信息
    goInfo() {
      let path = ''
      if (this.loginStatus) {
        path = '/self-info'
      } else {
        path = '/login'
      }
      this.$router.push(path)
    }
  },
  mounted() {}
}
</script>
<style>
.header-box {
  position: relative;
  height: 40px;
  padding: 5px;
  background: #cccccc;
}
.back {
  position: absolute;
  top: 8px;
  left: 10px;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  text-decoration: underline;
}
.back .el-icon-arrow-left {
  font-size: 24px;
}
.title {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  text-align: center;
}
.mobile {
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  text-decoration: underline;
}
</style>

