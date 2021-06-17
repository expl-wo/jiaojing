import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Detail from '@/components/detail/Detail'
import User from '@/components/user/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }, {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})
