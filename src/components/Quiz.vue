<script setup>
import { ref, computed } from 'vue'
const props = defineProps({
  perguntas: {
    type: Array,
    required: true,
  },
  titulo: {
    type: String,
    default: 'Quiz',
  },
})

const emit = defineEmits(['finalizar'])

const perguntaAtualIndex = ref(0)
const opcaoSelecionada = ref(null)
const respostaConfirmada = ref(false)
const pontuacao = ref(0)
const quizFinalizado = ref(false)
const historicoRespostas = ref([])

const totalPerguntas = computed(() => props.perguntas.length)

const perguntaAtual = computed(() => props.perguntas[perguntaAtualIndex.value])

const progresso = computed(() => {
  if (totalPerguntas.value === 0) return 0
  return Math.round(((perguntaAtualIndex.value + 1) / totalPerguntas.value) * 100)
})

const ehUltimaPergunta = computed(() => perguntaAtualIndex.value === totalPerguntas.value - 1)

function selecionarOpcao(indexOpcao) {

  if (respostaConfirmada.value) return
  opcaoSelecionada.value = indexOpcao
}

function confirmarResposta() {
  if (opcaoSelecionada.value === null || respostaConfirmada.value) return

  respostaConfirmada.value = true

  const acertou = opcaoSelecionada.value === perguntaAtual.value.respostaCorreta
  if (acertou) pontuacao.value++

  historicoRespostas.value.push({
    perguntaId: perguntaAtual.value.id ?? perguntaAtualIndex.value,
    opcaoSelecionada: opcaoSelecionada.value,
    correta: acertou,
  })
}

function proximaPergunta() {
  if (!respostaConfirmada.value) return

  if (ehUltimaPergunta.value) {
    finalizarQuiz()
    return
  }

  perguntaAtualIndex.value++
  opcaoSelecionada.value = null
  respostaConfirmada.value = false
}

function finalizarQuiz() {
  quizFinalizado.value = true
  emit('finalizar', {
    pontuacao: pontuacao.value,
    total: totalPerguntas.value,
    historico: historicoRespostas.value,
  })
}

function reiniciarQuiz() {
  perguntaAtualIndex.value = 0
  opcaoSelecionada.value = null
  respostaConfirmada.value = false
  pontuacao.value = 0
  quizFinalizado.value = false
  historicoRespostas.value = []
}

// Classe visual de cada opção, dependendo do estado (selecionada / correta / errada)
function classeOpcao(indexOpcao) {
  if (!respostaConfirmada.value) {
    return opcaoSelecionada.value === indexOpcao ? 'opcao selecionada' : 'opcao'
  }

  const eACorreta = indexOpcao === perguntaAtual.value.respostaCorreta
  const eASelecionada = indexOpcao === opcaoSelecionada.value

  if (eACorreta) return 'opcao correta'
  if (eASelecionada && !eACorreta) return 'opcao errada'
  return 'opcao desabilitada'
}
</script>

<template>
  <div class="quiz">
    <!-- Estado: sem perguntas recebidas -->
    <div v-if="totalPerguntas === 0" class="quiz-vazio">
      Nenhuma pergunta foi carregada para este quiz.
    </div>

    <!-- Estado: quiz em andamento -->
    <div v-else-if="!quizFinalizado" class="quiz-conteudo">
      <header class="quiz-header">
        <h2>{{ titulo }}</h2>
        <div class="barra-progresso">
          <div class="barra-progresso-preenchida" :style="{ width: progresso + '%' }" />
        </div>
        <span class="contador">Pergunta {{ perguntaAtualIndex + 1 }} de {{ totalPerguntas }}</span>
      </header>

      <section class="pergunta-bloco">
        <p class="pergunta-texto">{{ perguntaAtual.pergunta }}</p>

        <ul class="opcoes-lista">
          <li
            v-for="(opcao, index) in perguntaAtual.opcoes"
            :key="index"
            :class="classeOpcao(index)"
            @click="selecionarOpcao(index)"
          >
            {{ opcao }}
          </li>
        </ul>
      </section>

      <footer class="quiz-acoes">
        <button
          v-if="!respostaConfirmada"
          class="botao botao-confirmar"
          :disabled="opcaoSelecionada === null"
          @click="confirmarResposta"
        >
          Confirmar resposta
        </button>

        <button v-else class="botao botao-avancar" @click="proximaPergunta">
          {{ ehUltimaPergunta ? 'Ver resultado' : 'Próxima pergunta' }}
        </button>
      </footer>
    </div>

    <!-- Estado: quiz finalizado -->
    <div v-else class="quiz-resultado">
      <h2>Resultado</h2>
      <p class="pontuacao-final">Você acertou {{ pontuacao }} de {{ totalPerguntas }} perguntas.</p>
      <button class="botao botao-reiniciar" @click="reiniciarQuiz">Refazer quiz</button>
    </div>
  </div>
</template>

<style scoped>
.quiz {
  max-width: 640px;
  margin: 0 auto;
  padding: 1.5rem;
}

.quiz-vazio {
  text-align: center;
  opacity: 0.7;
}

.quiz-header {
  margin-bottom: 1.5rem;
}

.barra-progresso {
  width: 100%;
  height: 6px;
  background: #e5e5e5;
  border-radius: 999px;
  overflow: hidden;
  margin: 0.5rem 0;
}

.barra-progresso-preenchida {
  height: 100%;
  background: currentColor;
  transition: width 0.3s ease;
}

.contador {
  font-size: 0.85rem;
  opacity: 0.7;
}

.pergunta-texto {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.opcoes-lista {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.opcao {
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.opcao:hover {
  border-color: #888;
}

.opcao.selecionada {
  border-color: #333;
  background: #f2f2f2;
}

.opcao.correta {
  border-color: #2e7d32;
  background: #e8f5e9;
}

.opcao.errada {
  border-color: #c62828;
  background: #ffebee;
}

.opcao.desabilitada {
  opacity: 0.6;
  cursor: default;
}

.quiz-acoes {
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-end;
}

.botao {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}

.botao:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.quiz-resultado {
  text-align: center;
}

.pontuacao-final {
  font-size: 1.1rem;
  margin: 1rem 0;
}
</style>