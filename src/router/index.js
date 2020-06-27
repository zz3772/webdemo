import Vue from 'vue'
import Router from 'vue-router'
import TestCase from '@/components/TestCase'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TestCase',
      component: TestCase
    }
  ]
})
