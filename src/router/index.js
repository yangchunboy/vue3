import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name:'home',
    component: () => import('@pages/home/index'),
    meta: {
      keepAlive: false,
      permission: []
    }
  },
  {
    path: '/login',
    name:'login',
    component: () => import('@pages/login/index'),
    meta: {
      keepAlive: false,
      permission: []
    }
  }
];


const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

