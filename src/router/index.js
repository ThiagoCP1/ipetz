import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Menu from '../components/PaginaMain.vue'
import Loja from '../components/TelaLoja.vue'
import Compra from '../components/CompraProduto.vue'
import Lojista from '../components/TelaLojista.vue'
import Perfil from '../components/Perfil.vue'
import Produtos from '../components/produtos'
import Modal from '../components/modal.vue'
import Pedidos from '../components/MeusPedidos.vue'

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
    component: Menu
  },
    {
      path: '/loja/:id',
      name: 'loja',
      component: Loja
    },
    {
      path: '/comprar/:id',
      name: 'loja',
      component: Compra
    },
    {
      path: '/gerenciarlojista',
      name: 'gerenciarlojista',
      component: Lojista
    },
    {
      path: '/produtos',
      name: 'produto',
      component: Produtos
    },
  {
    path: '/Produtos',
    name: 'Tag',
    component: Produtos
  },
  {
    path: '/Pedidos',
    name: 'MeusPedidos',
    component: Pedidos
  },
    {
      path: '/perfil',
      name: 'perfil',
      component: Perfil
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
