import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import SignUp from '../views/SignUp'
import Adhesion from '../views/Adhesion'
import AProposDeNous from '../views/AProposDeNous'
import PoemesEtBlogs from '../views/PoemesEtBlogs'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/auth',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/adhesion',
    name: 'Adhesion',
    component: Adhesion
  },
  {
  path: '/AProposDeNous',
  name: 'AProposDeNous',
  component: AProposDeNous
  },
  {
    path: '/PoemesEtBlogs',
    name: 'PoemesEtBlogs',
    component: PoemesEtBlogs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
