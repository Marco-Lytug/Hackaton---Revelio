<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { buscarPerguntas, buscarTituloQuiz } from '@/Data/quizzes'
import Quiz from '@/components/AppQuiz.vue'

const route = useRoute()
const ano = computed(() => route.params.ano)
const idQuiz = computed(() => route.params.id)

const perguntas = computed(() =>
  buscarPerguntas(ano.value, idQuiz.value)
)
const tituloQuiz = computed(() =>
  buscarTituloQuiz(ano.value, idQuiz.value)
)

function aoFinalizarQuiz(resultado) {
  console.log('Pontuação:', resultado.pontuacao, '/', resultado.total)
  console.log('Histórico de respostas:', resultado.historico)
}

</script>

<template>
  <Quiz
    :titulo="tituloQuiz"
    :perguntas="perguntas"
    @finalizar="aoFinalizarQuiz"
  />
</template>