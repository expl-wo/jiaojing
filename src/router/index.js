import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Auto from '@/components/auto/Auto.vue'
import User from '@/components/user/User'
import DoorPage from '@/components/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'doorPage',
      component: DoorPage,
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/auto',
      name: 'auto',
      component: Auto
    }, {
      path: '/user',
      name: 'user',
      component: User
    }, {
      path: '*',
      name: 'doorPage',
      component: DoorPage
    }
  ]
})
