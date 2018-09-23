import Vue from 'vue'
import Router from 'vue-router'
import PropertiesListing from '@/pages/PropertiesListing'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PropertiesListing',
      component: PropertiesListing
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
