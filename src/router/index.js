import Vue from 'vue'
import Router from 'vue-router'
import PropertiesListing from '@/pages/PropertiesListing'
import Login from '@/pages/Login'
import SingleProperty from '@/pages/SingleProperty'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'PropertiesListing',
      component: PropertiesListing
    },
    {
      path: '/:id',
      name: 'SingleProperty',
      component: SingleProperty
    }
  ]
})
