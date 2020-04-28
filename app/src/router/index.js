import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Projects from '@/views/Projects'
import Resources from '@/views/Resources'

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
  },
  {
    path: '/resources',
    name: 'resources',
    components: { panel: Resources }
  }

]

const router = new VueRouter({
  routes
})

export default router
