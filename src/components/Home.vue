<template>
  <div class="home-box">
    <Header :title="headerTitle" :info-status="true"></Header>
    <Banner></Banner>
    <div class="home-list">
      <div class="home-list-one">
        <div class="home-item" @click="goSub('1','/book-fullmark')">满分教育预约</div>
        <div class="home-item" @click="goSub('1','/book-exam')">审验教育预约</div>
        <div class="home-item" @click="goSub('3','/book-pra')">敬请期待</div>
        <div class="home-item" @click="goSub('3','/book-fullmark')">敬请期待</div>
      </div>
      <div class="home-list-two">
        <div class="home-item" @click="goSub('1','/self-info')">个人信息</div>
        <div class="home-item" @click="goSub('1','/book-list')">我的预约单</div>
        <div class="home-item" @click="goSub('2','/audit-query')">审核状态查询</div>
        <div class="home-item" @click="goSub('3','')">敬请期待</div>
      </div>

    </div>
  </div>
</template>
<script>
import Header from './Home/Header.vue'
import Banner from './Home/Banner.vue'

export default {
  name: 'home-box',
  data() {
    return {
      // 头部标题
      headerTitle: '教育管理平台'
    }
  },
  computed: {
    loginStatus() {
      return this.$store.state.login.loginStatus
    }
  },
  components: {
    Header,
    Banner
  },
  methods: {
    goSub(type, path) {
      if (type === '1') {
        // 如果用户未登录
        if (this.loginStatus) {
          this.$router.push(path)
        } else {
          this.$router.push('/login')
        }
      }

      if (type === '2') {
        this.$router.push(path)
      }
    }
  },
  mounted() {
    let type = 'register'
    let phone = '15010626364'
    this.$store.dispatch('getCode', {
      type,
      phone
    })
  }
}
</script>
<style>
.home-list {
  display: flex;
  flex-direction: column;
  height: 200px;
}
.home-list-one,
.home-list-two {
  flex: 1;
  display: flex;
  height: 100px;
}
.home-item {
  flex: 1;
  text-align: center;
  border: 1px solid #eee;
  cursor: pointer;
}
</style>

