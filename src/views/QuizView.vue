<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { buscarPerguntas, categoriasInfo } from '@/Data/quizzes'
import Quiz from '@/components/AppQuiz.vue'

const route = useRoute()

const categoria = computed(() => route.params.categoria)
const numero = computed(() => route.params.numero)

const perguntas = computed(() =>
  buscarPerguntas(categoria.value, numero.value)
)

const tituloCategoria = computed(() =>
  categoriasInfo[categoria.value]?.titulo ?? 'Quiz'
)

function aoFinalizarQuiz(resultado) {
  console.log('Pontuação:', resultado.pontuacao, '/', resultado.total)
  console.log('Histórico de respostas:', resultado.historico)
}

console.log(categoria.value)
console.log(numero.value)
console.log(perguntas.value)
</script>

<template>
  <Quiz
    :titulo="`${tituloCategoria} - Quiz ${numero}`"
    :perguntas="perguntas"
    @finalizar="aoFinalizarQuiz"
  />
</template>
