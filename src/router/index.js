import Vue from 'vue'
import Router from 'vue-router'
import PropertiesListing from '@/pages/PropertiesListing'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PropertiesListing',
      component: PropertiesListing
    }
  ]
})
