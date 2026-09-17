import { createRouter, createWebHistory } from 'vue-router'
import { conexaoSupabase } from '@/supabase'

import HomeView from '@/components/layout/HomeView.vue'
import PaginaAgro from '@/views/PaginaAgro.vue'
import LoginUser from '@/views/LoginUser.vue'
import PaginaQuimi from '@/views/PaginaQuimi.vue'
import PaginaInfo from '@/views/PaginaInfo.vue'
import PaginaAtividades from '@/views/PaginaAtividades.vue'
import QuizView from '@/views/QuizView.vue'
import PagCursos from '@/views/PagCursos.vue'
import CursoInfo from '@/views/CursoInfo.vue'
import CursoAgro from '@/views/CursoAgro.vue'
import CursoQuimi from '@/views/CursoQuimi.vue'
import SobreNos from '@/views/SobreNos.vue'
import PerfilUser from '@/views/PerfilUser.vue'

const routes = [
  {
    path: '/',
    name: 'home',
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
  },

  {
    path: '/sobre',
    component: SobreNos
  },

  {
    path: '/perfilUser',
    component: PerfilUser
  },

  {
    path: '/Login',
    name: 'login',
    component: LoginUser
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  scrollBehavior() {
    return {
      top: 0,
      left: 0
    }
  }
})

/*
|--------------------------------------------------------------------------
| GUARDA DE AUTENTICAÇÃO
|--------------------------------------------------------------------------
*/

router.beforeEach(async (to) => {
  /*
   * Se a pessoa já está indo para o Login,
   * deixa entrar.
   */
  if (to.path === '/Login') {
    return true
  }

  try {
    const { data, error } =
      await conexaoSupabase.auth.getSession()

    if (error) {
      console.error(
        'Erro ao verificar sessão:',
        error
      )

      return {
        path: '/Login'
      }
    }

    const session = data?.session

    /*
     * NÃO está logado:
     * manda para Login.
     */
    if (!session) {
      return {
        path: '/Login',
        query: {
          tab: 'login'
        }
      }
    }

    /*
     * Está logado:
     * permite acessar a página.
     */
    return true

  } catch (error) {
    console.error(
      'Erro inesperado ao verificar autenticação:',
      error
    )

    return {
      path: '/Login'
    }
  }
})

export default router
