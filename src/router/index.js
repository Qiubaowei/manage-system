import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/page/Hello'
import Home from '../components/common/Home'
import Login from '@/components/page/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/hello',
      component: Hello
    },
    {
      path: '/home',
      component: Home
    }
  ]
})
