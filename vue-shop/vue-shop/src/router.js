import { createRouter, createWebHistory } from 'vue-router'

import ProductList from './pages/ProductList.vue'
import UserCard from './pages/UserCard.vue'
import ShopAdmin from './pages/ShopAdmin.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: ProductList },
    { path: '/card', component: UserCard },
    { path: '/admin', component: ShopAdmin }
  ]
})

export default router
