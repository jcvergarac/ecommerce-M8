import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import CreateNews from '../views/CreateNews.vue'
import NewsDetail from '../views/NewsDetail.vue'

const routes = [

{ path:'/', component:Home },
{ path:'/login', component:Login },
{ path:'/register', component:Register },
{ path:'/create', component:CreateNews },
{ path:'/news/:id', component:NewsDetail }

]

const router = createRouter({

history:createWebHistory(),
routes

})

export default router