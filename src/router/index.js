import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Front.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'product',
        component: () => import('../views/Products.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('../views/Product.vue'),
      },
      {
        path: 'checkout',
        component: () => import('../views/Checkout.vue'),
        children: [
          {
            path: 'step1',
            component: () => import('../views/Step1.vue'),
          },
        ],
      },
      {
        path: 'login',
        component: () => import('../views/Login.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard/Dashboard.vue'),
    children: [
      {
        path: 'product',
        component: () => import('../views/Dashboard/Dashboard_Products.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
