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
          v-for="(opcao, index) in perguntaAtual.alternativas"
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

  width: 100%;
  max-width: 820px;

  margin: 0 auto;

  padding: 2.5rem;

  background: white;

  border:
    2px solid
    var(--cor-curso, #135F7D);

  border-radius: 24px;

  box-shadow:
    0 12px 35px
    rgba(0, 0, 0, 0.10);

  font-family:
    "Josefin Sans",
    sans-serif;
}


/* QUIZ VAZIO */

.quiz-vazio {

  text-align: center;

  color: #555;

  font-size: 1.3rem;

  padding: 3rem 1rem;
}


/* CABEÇALHO */

.quiz-header {
  margin-bottom: 2rem;
}

.quiz-header h2 {

  margin: 0 0 1rem;

  color:
    var(--cor-curso, #135F7D);

  font-size: 2rem;
}


/* PROGRESSO */

.barra-progresso {

  width: 100%;
  height: 9px;

  background: #e8e8e8;

  border-radius: 999px;

  overflow: hidden;

  margin: 0.8rem 0;
}

.barra-progresso-preenchida {

  height: 100%;

  background:
    var(--cor-curso, #135F7D);

  border-radius: 999px;

  transition: width 0.35s ease;
}

.contador {

  font-size: 1rem;

  color: #777;
}


/* PERGUNTA */

.pergunta-bloco {

  margin-top: 2rem;
}

.pergunta-texto {

  font-size: 1.4rem;

  font-weight: 600;

  line-height: 1.5;

  color: #333;

  margin-bottom: 1.5rem;
}


/* ALTERNATIVAS */

.opcoes-lista {

  list-style: none;

  padding: 0;
  margin: 0;

  display: flex;

  flex-direction: column;

  gap: 12px;
}

.opcao {

  padding:
    16px
    18px;

  border:
    2px solid #dddddd;

  border-radius: 14px;

  color: #333;

  background-color: #fff;

  cursor: pointer;

  font-size: 1.05rem;

  line-height: 1.4;

  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease;
}

.opcao:hover {

  border-color:
    var(--cor-curso, #135F7D);

  transform:
    translateX(4px);
}


/* SELECIONADA */

.opcao.selecionada {

  border-color:
    var(--cor-curso, #135F7D);

  background:
    var(--cor-clara, #E8F4F8);
}


/* CORRETA */

.opcao.correta {

  border-color: #2E7D32;

  background: #E8F5E9;

  color: #1B5E20;
}


/* ERRADA */

.opcao.errada {

  border-color: #C62828;

  background: #FFEBEE;

  color: #B71C1C;
}


/* DESABILITADA */

.opcao.desabilitada {

  opacity: 0.6;

  cursor: default;
}


/* BOTÕES */

.quiz-acoes {

  margin-top: 2rem;

  display: flex;

  justify-content: flex-end;
}

.botao {

  min-width: 180px;

  padding:
    13px
    22px;

  border: none;

  border-radius: 14px;

  background:
    var(--cor-curso, #135F7D);

  color: white;

  cursor: pointer;

  font-family:
    "Josefin Sans",
    sans-serif;

  font-size: 1.05rem;

  font-weight: 600;

  transition:
    background-color 0.25s ease,
    transform 0.2s ease;
}

.botao:hover:not(:disabled) {

  background:
    var(--cor-hover, #1a92c2);

  transform:
    translateY(-2px);
}

.botao:disabled {

  opacity: 0.45;

  cursor: not-allowed;
}


/* RESULTADO */

.quiz-resultado {

  text-align: center;

  padding: 2rem 0;
}

.quiz-resultado h2 {

  color:
    var(--cor-curso, #135F7D);

  font-size: 2.5rem;
}

.pontuacao-final {

  font-size: 1.3rem;

  margin: 1.5rem 0 2rem;

  color: #444;
}


/* RESPONSIVO */

@media (max-width: 600px) {

  .quiz {

    padding: 1.4rem;

    border-radius: 18px;
  }

  .quiz-header h2 {
    font-size: 1.6rem;
  }

  .pergunta-texto {
    font-size: 1.2rem;
  }

  .opcao {

    padding: 14px;

    font-size: 1rem;
  }

  .quiz-acoes {
    justify-content: stretch;
  }

  .botao {
    width: 100%;
    min-width: 0;
  }

}
</style>