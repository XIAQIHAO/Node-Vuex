import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloHome from '@/components/HelloHime'
import UserList from '@/components/UserList'
import Swiper from '@/components/Swiper'
import animate from '@/components/animate'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/HelloHome',
      name:"HelloHome",
      component:HelloHome
    },
    {
      path:'/UserList',
      name:"UserList",
      component:UserList
    },
    {
      path:"/Swiper",
      name:"Swiper",
      component:Swiper
    },
    {
      path:'/animate',
      name:'animate',
      component:animate
    }
  ]
})
