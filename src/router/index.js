import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/components/layout/HomeView.vue'
import PaginaAgro from '@/views/PaginaAgro.vue'
import PaginaQuimi from '@/views/PaginaQuimi.vue'
import PaginaInfo from '@/views/PaginaInfo.vue'
import PaginaAtividades from '@/views/PaginaAtividades.vue'
import QuizView from '@/views/QuizView.vue'
import PagCursos from '@/views/PagCursos.vue'
import CursoInfo from '@/views/CursoInfo.vue'
import CursoAgro from '@/views/CursoAgro.vue'
import CursoQuimi from '@/views/CursoQuimi.vue'

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
      path: '/quiz/:categoria/:numero',
      name: 'quiz',
      component: QuizView
    },
    {
      path: '/cursos',
      component: PagCursos
    },
    {
          path: '/cursoInfo',
      component: CursoInfo
    },
    {
          path: '/cursoAgro',
      component: CursoAgro
    },
    {
          path: '/cursoQuimi',
      component: CursoQuimi
    }
  ]
})

export default router
