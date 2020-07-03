import Vue from 'vue'
import Router from 'vue-router'
import TestCase from '@/components/TestCase'
import Demo from '@/components/Demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TestCase',
      component: TestCase
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    }
  ]
})
