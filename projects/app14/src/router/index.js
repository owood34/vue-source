import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemPage from '../views/ItemPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/items',
      name: 'List Items',
      component: ItemPage
    },
    {
      path: '/items/:id',
      name: 'Specific Item',
      component: ItemPage
    }
  ]
})

export default router
