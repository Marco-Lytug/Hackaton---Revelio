import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/components/layout/HomeView.vue'
import PaginaAgro from '@/views/PaginaAgro.vue'
import PaginaQuimi from '@/views/PaginaQuimi.vue'
import PaginaInfo from '@/views/PaginaInfo.vue'
import PaginaAtividades from '@/views/PaginaAtividades.vue'
import QuizView from '@/views/QuizView.vue'
import SobreNos from '@/views/SobreNos.vue'

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
      path: '/quiz/:curso/:ano/:id',
      name: 'quiz',
      component: QuizView
    },

    {
      path: '/sobre',
      component: SobreNos
    }

  ],
  scrollBehavior() {
    return { top: 0, left: 0 }

  }
})

export default router
