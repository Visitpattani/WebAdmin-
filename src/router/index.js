import Vue from 'vue'
import VueFire from 'vuefire'
import RatingBoard from '@/components/Board'
import Login from '@/components/Login'
import HelloWorld from '@/components/HelloWorld'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Signup from '@/components/Signup'
import Pinmap from '@/components/Pinmap'
import {Layout}  from 'bootstrap-vue/es/components';
import firebase from 'firebase';
Vue.use(Router)
Vue.use(Layout)
Vue.use(VueFire)
Vue.use(BootstrapVue)
let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      
    },{
      path:'/login',
      name:'Login',
      component:Login
    }
    ,{
      path:'/rating',
      name:'RatingBoard',
      component:RatingBoard,
      
    }
    ,{
      path:'/signup',
      name:'SignUp',
      component:Signup
    }
    ,{
      path:'/map',
      name:'Map',
      component:Pinmap
    }
  ]
})/*
router.beforeEach((to,from,next)=>{
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if(requiresAuth && !currentUser) next('login')
  else if(!requiresAuth && currentUser) next('hello')
  else next()
})*//*
router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requireAuth = to.matched.some(record => record.meta.requireAuth);

  if(requireAuth && !currentUser) next('login')
  else if(!requireAuth && currentUser) next('rating')
  else next()
})*/
export default router