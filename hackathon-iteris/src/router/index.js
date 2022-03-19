import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ListaView from '../views/ListaView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/LoginView',
    name: 'LoginView',
    component: LoginView
  },
    {
    path: '/listaprodutos',
    name: 'ListaView',
    component: ListaView
  },
  {
    path: '/about',
    name: 'about',

    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
