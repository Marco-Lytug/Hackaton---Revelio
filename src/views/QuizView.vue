<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import {
  buscarPerguntas,
  buscarTituloQuiz
} from '@/Data/quizzes'

import Quiz from '@/components/AppQuiz.vue'
import AppHeader from '@/components/layout/AppHeader.vue'

const route = useRoute()

const curso = computed(() => route.params.curso)
const ano = computed(() => route.params.ano)
const idQuiz = computed(() => route.params.id)

const perguntas = computed(() =>
  buscarPerguntas(
    curso.value,
    ano.value,
    idQuiz.value
  )
)

const tituloQuiz = computed(() =>
  buscarTituloQuiz(
    curso.value,
    ano.value,
    idQuiz.value
  )
)

const temaCurso = computed(() => {

  const temas = {

    informatica: {
      principal: '#135F7D',
      hover: '#1a92c2',
      clara: '#E8F4F8'
    },

    agropecuaria: {
      principal: '#2E7D32',
      hover: '#43A047',
      clara: '#E8F5E9'
    },

    quimica: {
      principal: '#c20044',
      hover: '#FF0D62',
      clara: '#FDE8EF'
    }

  }

  return temas[curso.value] || temas.informatica
})

function aoFinalizarQuiz(resultado) {

  console.log(
    'Pontuação:',
    resultado.pontuacao,
    '/',
    resultado.total
  )
}
</script>


<template>

  <div
    class="quiz-view"
    :style="{
      '--cor-curso': temaCurso.principal,
      '--cor-hover': temaCurso.hover,
      '--cor-clara': temaCurso.clara
    }"
  >

    <AppHeader />


    <section class="quiz-topo">

      <div class="quiz-topo-conteudo">

        <p>
          Atividades • Quiz
        </p>

        <h1>
          {{ tituloQuiz }}
        </h1>

      </div>

    </section>


    <section class="quiz-area">

      <Quiz
        :titulo="tituloQuiz"
        :perguntas="perguntas"
        @finalizar="aoFinalizarQuiz"
      />

    </section>

  </div>

</template>


<style scoped>

.quiz-view {
  width: 100%;
  min-height: 100vh;

  background-color: #f8f8f8;

  font-family: "Josefin Sans", sans-serif;
}


/* TOPO COLORIDO */

.quiz-topo {

  min-height: 270px;

  display: flex;
  align-items: flex-end;

  padding:
    120px
    5vw
    50px;

  background:
    linear-gradient(
      135deg,
      var(--cor-curso),
      var(--cor-hover)
    );

  color: white;
}

.quiz-topo-conteudo {

  width: 100%;
  max-width: 900px;

  margin: 0 auto;
}

.quiz-topo p {

  margin-bottom: 10px;

  opacity: 0.85;

  font-size: 1.1rem;
}

.quiz-topo h1 {

  margin: 0;

  font-size:
    clamp(2rem, 5vw, 3.5rem);
}


/* LOCAL DO QUIZ */

.quiz-area {

  min-height: 600px;

  padding:
    60px
    20px
    250px;

  background:
    linear-gradient(
      to bottom,
      var(--cor-clara),
      #ffffff 300px
    );
}


/* CELULAR */

@media (max-width: 768px) {

  .quiz-topo {

    min-height: 220px;

    padding:
      120px
      20px
      35px;
  }

  .quiz-topo h1 {
    font-size: 2rem;
  }

  .quiz-area {

    padding:
      35px
      14px
      180px;
  }
}

</style>