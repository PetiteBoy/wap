import Vue from 'vue'
import Router from 'vue-router'
// 首页
import Home from '@/components/Home'
// 登录页
import Login from '@/components/Login'
// 注册页
import Reg from '@/components/Reg'
// 信息提示页
import TestTips from '@/components/TestTips'
// 预约列表页
import BookList from '@/components/BookList'
// 预约详情页
import BookDetail from '@/components/BookDetail'
// 个人信息页
import SelfInfo from '@/components/SelfInfo'
// 体验教育预约页
import BookPra from '@/components/BookPra'
// 审验教育预约页
import BookExam from '@/components/BookExam'
// 满分教育预约页
import BookFullMark from '@/components/BookFullMark'
// 查看审验状态
import AuditQuery from '@/components/AuditQuery'
// 修改信息
import Update from '@/components/Update'

// 测试
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/test-tips',
      name: 'TestTips',
      component: TestTips
    },
    {
      path: '/book-list',
      name: 'BookList',
      component: BookList
    },
    {
      path: '/book-detail',
      name: 'BookDetail',
      component: BookDetail
    },
    {
      path: '/self-info',
      name: 'SelfInfo',
      component: SelfInfo
    },
    {
      path: '/book-pra',
      name: 'BookPra',
      component: BookPra
    },
    {
      path: '/book-exam',
      name: 'BookExam',
      component: BookExam
    }, {
      path: '/book-fullmark',
      name: 'BookFullMark',
      component: BookFullMark
    }, {
      path: '/audit-query',
      name: 'AuditQuery',
      component: AuditQuery
    }, {
      path: '/update',
      name: 'Update',
      component: Update
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
