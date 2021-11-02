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
        path: 'about',
        component: () => import('../views/About.vue'),
      },
      {
        path: 'product',
        component: () => import('../views/Product/index.vue'),
        children: [
          {
            path: '',
            component: () => import('../views/Product/components/ProductContent.vue'),
            children: [
              {
                path: '',
                component: () => import('../views/Product/components/content/ProductList.vue'),
              },
              {
                path: ':id',
                component: () => import('../views/Product/components/content/ProductItem.vue'),
              },
            ],
          },
        ],
      },
      {
        path: 'checkout',
        component: () => import('../views/Checkout.vue'),
        children: [
          {
            path: 'step1',
            component: () => import('../views/Step1.vue'),
          },
          {
            path: 'step2',
            component: () => import('../views/Step2.vue'),
          },
          {
            path: 'step3/:orderId',
            component: () => import('../views/Step3.vue'),
          },
        ],
      },
      {
        path: 'login',
        component: () => import('../views/Login.vue'),
      },
      {
        path: 'favorite',
        component: () => import('../views/Favorite.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard/index.vue'),
    children: [
      {
        path: 'product',
        component: () => import('../views/Dashboard/Dashboard_Products.vue'),
      },
      {
        path: 'order',
        component: () => import('../views/Dashboard/Dashboard_Orders/Dashboard_Orders.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // linkActiveClass: 'active',
  scrollBehavior() {
    return { top: 0, left: 0 };
  },
});

export default router;
