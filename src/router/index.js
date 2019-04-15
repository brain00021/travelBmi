import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import travel from '@/components/travel'
import bmi from '@/components/bmi'
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'index',
      component: HelloWorld
    },
    {
      path: '/travel',
      name: 'travel',
      component: travel
    },
    {
      path: '/bmivisual',
      name: 'bmivisual',
      component: bmi
    },
  ]
})
