import { createRouter, createWebHistory } from 'vue-router'
import { conexaoSupabase } from '@/supabase'
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
import SobreNos from '@/views/SobreNos.vue'
import LoginUser from '@/views/LoginUser.vue'
import CadastroUser from '@/views/CadastroUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      component: HomeView,
    },

    {
      path: '/info',
      component: PaginaInfo,
    },

    {
      path: '/agro',
      component: PaginaAgro,
    },

    {
      path: '/quimi',
      component: PaginaQuimi,
    },
    {
      path: '/atividades',
      component: PaginaAtividades,
    },
    {
      path: '/quiz/:curso/:ano/:id',
      name: 'quiz',
      component: QuizView,
    },
    {
      path: '/cursos',
      component: PagCursos,
    },
    {
      path: '/cursoInfo',
      component: CursoInfo,
    },
    {
      path: '/cursoAgro',
      component: CursoAgro,
    },
    {
      path: '/cursoQuimi',
      component: CursoQuimi,
    },
    {
      path: '/sobre',
      component: SobreNos,
    },
    {
      path: '/Login',
      component: LoginUser,
    },
    {
      path: '/Cadastro',
      component: CadastroUser,
    },
  ],
  scrollBehavior() {
    return { top: 0, left: 0 }
  },
})

export default router
// Redireciona para o cadastro/login antes de entrar na Home, a menos que:
// se a pessoa já tenha uma sessão real no Supabase (já é usuária), ou
// se a pessoa já tenha optado por pular o cadastro antes (marca no navegador)
router.beforeEach(async (to) => {
  if (to.path !== '/') return true

  const { data } = await conexaoSupabase.auth.getSession()
  const cadastroPulado = localStorage.getItem('cadastroPulado')

  if (!data.session && !cadastroPulado) {
    return { path: '/Login', query: { tab: 'register' } }
  }

  return true
})