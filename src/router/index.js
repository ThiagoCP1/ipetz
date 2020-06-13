import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Menu from '../components/PaginaMain.vue'
import Loja from '../components/TelaLoja.vue'
import Compra from '../components/CompraProduto.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'PaginaMain',
    component: Compra
  },
  {
    path: '/loja1',
    name: 'loja',
    component: Loja
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
