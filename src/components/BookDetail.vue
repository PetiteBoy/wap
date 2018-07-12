<template>
  <div class="book-detail">
    <Header :title="headerTitle" :back-status="true" :info-status="true"></Header>
    <div class="page-title">
      预约单
    </div>
    <div class="page-main">
      <div class="page-tips">请出示预约信息参加教育</div>
      <div class="user-info page-item">
        <div>预约单号：83771723123</div>
        <div>驾驶人姓名：古龙</div>
        <div>驾驶人手机：1844444422</div>
        <div>驾驶人证件：12883712344</div>
        <div>驾驶证编号：123712364123</div>
      </div>
      <div class="book-info page-item">
        <div>预约场次</div>
        <div>审验教育</div>
        <div>2018-06-10 上午场（8:00-12:00）</div>
        <div class="page-item">
          <el-button type="primary" @click="cancelBook()">取消预约</el-button>
          <el-button type="primary" @click="goBack()">返回</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from './Home/Header.vue'
export default {
  name: 'book-detail',
  data() {
    return {
      // 头部标题
      headerTitle: '预约'
    }
  },
  components: { Header },
  methods: {
    cancelBook() {},
    goBack() {
      this.$router.push('/book-list')
    }
  }
}
</script>
<style>
.user-info {
  text-align: left;
}
.book-info {
  margin-top: 50px;
}
</style>

