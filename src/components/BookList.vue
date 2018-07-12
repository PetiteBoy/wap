<template>
  <div class="book-list">
    <Header :title="headerTitle" :back-status="true" :info-status="true"></Header>
    <div class="page-title">
      我的预约单
    </div>
    <div class="page-main page-item">
      <div class="list-title">
        <div class="title-row">预约单号</div>
        <div class="title-row">预约类型</div>
        <div class="title-row">场次</div>
      </div>
      <div v-for="(item, index) in bookList" :key="index" class="book-item" @click="goDetail()">
        <div>{{item}}</div>
        <div class="book-item-main">151850106</div>
        <div class="book-item-main">满分教育</div>
        <div class="book-item-main">2018-06-10 上午场（8:00-12:00）</div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from './Home/Header.vue'
export default {
  name: 'book-list',
  data() {
    return {
      // 头部标题
      headerTitle: '教育管理平台',
      bookList: ['', '']
    }
  },
  components: { Header },
  methods: {
    goDetail() {
      this.$router.push('/book-detail')
    }
  }
}
</script>
<style>
.list-title,
.book-item {
  display: flex;
}
.book-item {
  cursor: pointer;
}

.title-row,
.book-item-main {
  flex: 1;
  text-align: center;
}
.book-item-main {
  font-size: 12px;
  margin-top: 10px;
}
</style>
