import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/common/Home'
import Login from '@/components/page/Login'
import Readme from '@/components/page/Readme'

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
      path: '/home',
      component: Home,
      children:[
        {
            path: '/',
            component: Readme
            // component: resolve => require(['../components/page/Readme.vue'], resolve)
        },
      ]
    }
  ]
})
