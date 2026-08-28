import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/components/layout/HomeView.vue'
import PaginaAgro from '@/views/PaginaAgro.vue'
import PaginaQuimi from '@/views/PaginaQuimi.vue'
import PaginaInfo from '@/views/PaginaInfo.vue'
import PaginaAtividades from '@/views/PaginaAtividades.vue'
import QuizView from '@/views/QuizView.vue'

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
    },
    {
      path: '/atividades',
      component: PaginaAtividades
    },
    {
      path: '/quiz/:ano/:id',
      name: 'quiz',
      component: QuizView
    }

  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, left: 0 }
    
  }
})

export default router
