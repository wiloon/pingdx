import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import HelloWorld from '../components/HelloWorld.vue'
import CommaToNewLine from '../views/CommaToNewLine.vue'
import Base64 from '../views/Base64.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/compare',
    name: 'Compare',
    component: HelloWorld
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/comma-to-newline',
    name: 'CommaToNewLine',
    component: CommaToNewLine
  },
  {
    path: '/base64',
    name: 'Base64',
    component: Base64
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log('before each, to: ' + to.name)
  if (to.name === 'Base64') {
    next('/compare')
  } else {
    next()
  }
})
export default router
