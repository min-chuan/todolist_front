import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/views/login';
import Home from '@/views/home';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    name: Login.name,
    path: '/login',
    component: Login,
  },
  {
    name: Home.name,
    path: '/home',
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
