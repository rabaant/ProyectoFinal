import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store/index.js'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
   
    component: () => import(/* webpackChunkName: "register" */ '../components/registerComp.vue')
  },
  {
    path: '/login',
    name: 'login',
   
    component: () => import(/* webpackChunkName: "login" */ '../components/loginComp.vue')
  },
  {
    path: '/characters',
    name: 'characters',
   
    component: () => import(/* webpackChunkName: "characters" */ '../views/CharactersView.vue'),
    beforeEnter :(to, from, next) => {
      if (store.state.logged==false)
        next('/login');
      else next();
    }
  },
  {
    path: '/comics',
    name: 'comics',
   
    component: () => import(/* webpackChunkName: "comics" */ '../views/ComicsView.vue'),
    beforeEnter :(to, from, next) => {
      if (store.state.logged==false)
        next('/login');
      else next();
    }
  },
  {
    path: '/character/:id',
    name: 'character',
   
    component: () => import(/* webpackChunkName: "character" */ '../components/characterComp.vue'),
    beforeEnter :(to, from, next) => {
      if (store.state.logged==false)
        next('/login');
      else next();
    }
  },
  /*{
    path: '/comic/:url',
    name: 'comic',
    
    component: () => import(/* webpackChunkName: "comic"  '../components/comicComp.vue'),
    beforeEnter :(to, from, next) => {
      if (store.state.logged==false)
        next('/login');
      else next();
    }
  },*/
  {
    path: '/comic/:id',
    name: 'comic',
    
    component: () => import(/* webpackChunkName: "comicId" */ '../components/comicComp.vue'),
    beforeEnter :(to, from, next) => {
      if (store.state.logged==false)
        next('/login');
      else next();
    }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
