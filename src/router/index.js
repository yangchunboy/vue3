import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name:'home',
    component: () => import('../pages/homePage/homePage'),
    meta: {
      keepAlive: false,
      permission: []
    }
  },
  {
    path: '/address',
    name:'address',
    component: () => import('../pages/addressPage/addressPage'),
    meta: {
      keepAlive: false,
      permission: []
    }
  },
  {
    path: '/demo',
    name:'demo',
    component: () => import('../pages/demoPage/demoPage'),
    meta: {
      keepAlive: false,
      permission: []
    }
  },
  {
    path: '/login',
    name:'login',
    component: () => import('../pages/loginPage/loginPage'),
    meta: {
      keepAlive: false,
      permission: []
    }
  },
  {
    path: '/register',
    name:'register',
    component: () => import('../pages/registerPage/registerPage'),
    meta: {
      keepAlive: false,
      permission: []
    }
  },
];


const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

