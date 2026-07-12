import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/components/layout/HomeView.vue'
import PaginaAgro from '@/views/PaginaAgro.vue'
import PaginaQuimi from '@/views/PaginaQuimi.vue'
import PaginaInfo from '@/views/PaginaInfo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      component: HomeView
    },

    {
      path: '/info',
      component: PaginaInfo
    },

    {
      path: '/agro',
      component: PaginaAgro
    },

    {
      path: '/quimi',
      component: PaginaQuimi
    }
  ]
})

export default router