import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'HomeView',
  //   component: () => import("@/views/pages/home/index.vue")
  // },
  {
    path: '/',
    name: 'home',
    component: () => import("@/views/pages/home/index.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/auth/Register"),
    meta: { title: "注册" },
  },
  // 登录
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/auth/Login"),
    meta: { title: "登录" },
  },
  {
    path: "/studentHome",
    name: 'studentHome',
    component: () => import("@/views/pages/studentHome"),
    meta: { title: "学生首页" },
  },
  {
    path: "/sysHome",
    name: 'sysHome',
    component: () => import("@/views/systems/home/index.vue"),
    meta: { title: "管理系统" },
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/error/404"),
    meta: { title: "404-NotFound" },
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true,
  },

]

const router = new VueRouter({
  routes,
})

export default router
