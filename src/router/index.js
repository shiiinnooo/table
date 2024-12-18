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
        component: () => import('../views/Product/Index.vue'),
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
        component: () => import('../views/Checkout/Index.vue'),
        children: [
          {
            path: 'step1',
            component: () => import('../views/Checkout/components/Step1.vue'),
          },
          {
            path: 'step2',
            component: () => import('../views/Checkout/components/Step2.vue'),
          },
          {
            path: 'step3/:orderId',
            component: () => import('../views/Checkout/components/Step3.vue'),
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
    component: () => import('../views/Dashboard/Index.vue'),
    children: [
      {
        path: 'product',
        component: () => import('../views/Dashboard/Product/Index.vue'),
      },
      {
        path: 'order',
        component: () => import('../views/Dashboard/Order/Index.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior(to, from) {
    if (to.path === '/product' && from.path === '/') {
      return { left: 0, top: 0 };
    }
    return { left: 0, top: 0 };
  },
});

export default router;
