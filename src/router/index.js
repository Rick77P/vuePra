import Vue from 'vue'
import Router from 'vue-router'

import login from '../components/login/login'
import home from '../components/home/home'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path:'/home',
      name:'home',
      component:home
    },
    {
      path:'/library',
      name:'library',
    }
  ]
})
