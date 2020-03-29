import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Projects from '@/views/Projects'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    components: { panel : Home }
  },
  {
    path: '/projects',
    name: 'projects',
    components: { panel: Projects }
  }
]

const router = new VueRouter({
  routes
})

export default router
