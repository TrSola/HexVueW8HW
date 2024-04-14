import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: 'home',
        name: '首頁',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: 'products',
        name: '產品頁面',
        component: () => import('../views/ProductsView.vue')
      },
      {
        path: 'product/:id',
        name: '單一產品頁面',
        component: () => import('../views/ProductView.vue')
      },
      {
        path: 'cart',
        name: '購物車頁面',
        component: () => import('../views/CartView.vue')
      },
      {
        path: '/checkOut',
        name: '結帳頁面',
        component: () => import('../views/CheckOutView.vue')
      },
      {
        path: '/checkOutSuccess',
        name: '結帳成功頁面',
        component: () => import('../views/CheckOutSuccess.vue')
      }
    ]
  },
  {
    path: '/login',
    name: '登入頁面',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/admin',
    name: '後台首頁',
    component: () => import('../views/dashboard/DashboardView.vue'),
    children: [
      {
        path: 'order',
        name: '訂單頁面',
        component: () => import('../views/dashboard/OrderView.vue')
      },
      {
        path: 'backProducts',
        name: '產品管理頁面',
        component: () => import('../views/dashboard/ProductsView.vue')
      },
      {
        path: 'AdminCoupons',
        name: '優惠券管理頁面',
        component: () => import('../views/dashboard/CouponsView.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
