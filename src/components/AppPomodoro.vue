<template>
  <!-- =====================================================
       BOTÃO FLUTUANTE
  ====================================================== -->
  <button
    class="pomodoro-button"
    @click="abrirPomodoro"
    aria-labdel="Abrir Pomodoro"
  >
<img src="data:image/png;base64,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" alt="external-pomodoro-productivity-flaticons-lineal-color-flat-icons">  </button>
  <Transition name="modal">
    <div
      v-if="modalAberto"
      class="modal-backdrop"
      @click.self="fecharPomodoro"
    >
      <div class="pomodoro-modal">

        <!-- HEADER -->
        <header class="modal-header">
          <div>
            <span class="modal-label">PRODUTIVIDADE</span>
            <h2>Pomodoro</h2>
          </div>

          <button
            class="close-button"
            @click="fecharPomodoro"
            aria-label="Fechar"
          >
            ×
          </button>
        </header>
        <main class="pomodoro-content">
          <div
            class="status"
            :class="{
              foco: modo === 'foco',
              pausa: modo === 'pausa',
              pausado: pausado
            }"
          >
            <span class="status-dot"></span>
            {{ textoStatus }}
          </div>
          <div class="timer-container">
            <div class="timer-circle">
              <span class="timer">
                {{ tempoFormatado }}
              </span>
              <span class="timer-mode">
                {{ modo === 'foco' ? 'FOCO' : 'PAUSA' }}
              </span>
            </div>
          </div>
          <div class="controls">
            <button
              v-if="!rodando"
              class="control-button start"
              @click="iniciar"
            >
              ▶ Iniciar
            </button>
            <button
              v-if="rodando"
              class="control-button pause"
              @click="pausar"
            >
              ❚❚ Pausar
            </button>
            <button
              class="control-button reset"
              @click="resetar"
            >
              ↻ Resetar
            </button>
          </div>
          <section class="settings">
            <div class="settings-title">
              <span>⚙</span>
              Configurações
            </div>
            <div class="settings-grid">
              <label class="setting">
                <span>Tempo de foco</span>
                <div class="input-wrapper">
                  <input
                    v-model.number="configFoco"
                    type="number"
                    min="1"
                    max="180"
                    :disabled="rodando"
                  />
                  <small>min</small>
                </div>
              </label>
              <label class="setting">
                <span>Pausa curta</span>
                <div class="input-wrapper">
                  <input
                    v-model.number="configPausa"
                    type="number"
                    min="1"
                    max="60"
                    :disabled="rodando"
                  />
                  <small>min</small>
                </div>
              </label>
            </div>
            <p class="settings-info">
              As configurações podem ser alteradas quando o timer estiver parado.
            </p>
          </section>
        </main>
      </div>
      <Transition name="alert">
        <div
          v-if="alertaVisivel"
          class="cycle-alert"
        >
          <div class="alert-icon">
            {{ modoAnterior === 'foco' ? '☕' : '🍅' }}
          </div>
          <div class="alert-content">
            <strong>
              {{ mensagemAlerta }}
            </strong>
            <span>
              {{ modoAnterior === 'foco'
                ? 'Aproveite sua pausa.'
                : 'Prepare-se para continuar.' }}
            </span>
          </div>
          <button
            class="alert-close"
            @click="fecharAlerta"
          >
            ×
          </button>
        </div>
      </Transition>
    </div>
  </Transition>
</template>
<script setup>
import {
  ref,
  computed,
  watch,
  onUnmounted
} from 'vue'
const modalAberto = ref(false)

function abrirPomodoro() {
  modalAberto.value = true
}
function fecharPomodoro() {
  modalAberto.value = false
}
const configFoco = ref(25)
const configPausa = ref(5)
const modo = ref('foco')
const tempoRestante = ref(configFoco.value * 60)
const rodando = ref(false)
const pausado = ref(false)
let intervalo = null
const alertaVisivel = ref(false)
const mensagemAlerta = ref('')
const modoAnterior = ref('foco')
let timeoutAlerta = null
const tempoFormatado = computed(() => {
  const minutos = Math.floor(tempoRestante.value / 60)
  const segundos = tempoRestante.value % 60
  return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`
})
const textoStatus = computed(() => {
  if (pausado.value) {
    return 'Pausado'
  }
  if (modo.value === 'foco') {
    return 'Em Foco'
  }
  return 'Em Pausa'
})
function iniciar() {
  if (rodando.value) {
    return
  }
  rodando.value = true
  pausado.value = false
  iniciarIntervalo()
}
function iniciarIntervalo() {
  limparIntervalo()
  intervalo = setInterval(() => {
    if (tempoRestante.value > 0) {
      tempoRestante.value--
    } else {
      trocarModo()
    }
  }, 1000)
}
function pausar() {
  rodando.value = false
  pausado.value = true
  limparIntervalo()
}
function resetar() {
  limparIntervalo()
  rodando.value = false
  pausado.value = false
  modo.value = 'foco'
  tempoRestante.value = configFoco.value * 60
  fecharAlerta()
}
function trocarModo() {
  limparIntervalo()
  rodando.value = false
  pausado.value = false
  modoAnterior.value = modo.value
  if (modo.value === 'foco') {
    mensagemAlerta.value =
      'Tempo de foco encerrado! Hora de descansar.'
    modo.value = 'pausa'
    tempoRestante.value = configPausa.value * 60
  }
  else {
    mensagemAlerta.value =
      'Pausa finalizada! Hora de voltar ao foco.'
    modo.value = 'foco'
    tempoRestante.value = configFoco.value * 60
  }
  mostrarAlerta()
}
function mostrarAlerta() {
  alertaVisivel.value = true
  clearTimeout(timeoutAlerta)
  timeoutAlerta = setTimeout(() => {
    alertaVisivel.value = false
  }, 5000)
}
function fecharAlerta() {
  alertaVisivel.value = false
  clearTimeout(timeoutAlerta)
}
function limparIntervalo() {
  if (intervalo !== null) {
    clearInterval(intervalo)
    intervalo = null
  }
}
watch(configFoco, (novoValor) => {
  if (novoValor < 1) {
    configFoco.value = 1
  }
  if (novoValor > 180) {
    configFoco.value = 180
  }
  if (!rodando.value && modo.value === 'foco') {
    tempoRestante.value = configFoco.value * 60
  }
})
watch(configPausa, (novoValor) => {
  if (novoValor < 1) {
    configPausa.value = 1
  }
  if (novoValor > 60) {
    configPausa.value = 60
  }
  if (!rodando.value && modo.value === 'pausa') {
    tempoRestante.value = configPausa.value * 60
  }
})
onUnmounted(() => {

  limparIntervalo()

  clearTimeout(timeoutAlerta)

})
</script>


<style scoped>
.pomodoro-button {
  position: fixed;
  left: 24px;
  bottom: 24px;
  width: 62px;
  height: 62px;
  border: none;
  border-radius: 50%;

  font-size: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 9998;
  box-shadow:
    0 8px 25px rgba(0, 0, 0, 0.18);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}
.pomodoro-button:hover {
  transform: translateY(-5px) scale(1.06);
  box-shadow:
    0 14px 30px rgba(0, 0, 0, 0.25);
}
.pomodoro-button:active {
  transform: scale(0.95);
}
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(10, 12, 18, 0.68);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 9999;
}
.pomodoro-modal {
  width: min(470px, 100%);
  max-height: 90vh;
  overflow-y: auto;
  background: #ffffff;
  border-radius: 24px;
  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.3);
  color: #1f2937;
}
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 26px 18px;
  border-bottom: 1px solid #eeeeee;
}
.modal-label {
  display: block;
  margin-bottom: 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #020592;
}

.modal-header h2 {
  margin: 0;
  font-size: 25px;
  font-weight: 750;
}
.close-button {
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 50%;
  background: #f3f4f6;
  color: #555;
  font-size: 25px;
  line-height: 1;
  cursor: pointer;
  transition: 0.2s;
}
.close-button:hover {
  background: #e5e7eb;
  font-size: 28px;
  transform: rotate(90deg);
}
.pomodoro-content {
  padding: 26px;
}
.status {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 650;
  color: #6b7280;
}


.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #21488f;
}
.status.foco .status-dot {
  background: #4b699c;

  box-shadow:
    0 0 0 4px rgba(239, 68, 68, 0.12);
}
.status.pausa .status-dot {
  background: #10b981;

  box-shadow:
    0 0 0 4px rgba(1, 83, 56, 0.12);
}
.status.pausado .status-dot {
  background: #2e037e;
}
.timer-container {
  display: flex;
  justify-content: center;
  margin: 24px 0;
}
.timer-circle {
  width: 235px;
  height: 235px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 10px solid #173166;
  box-shadow:
    inset 0 0 30px rgba(17, 2, 68, 0.03);
}
.timer {
  font-size: 51px;
  font-weight: 750;
  letter-spacing: -2px;
  font-variant-numeric: tabular-nums;
  color: #020f2c;
}
.timer-mode {
  margin-top: 4px;
  font-size: 11px;
  font-weight: 750;
  letter-spacing: 2px;
  color: #4b699c;
}
.controls {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 28px;
}
.control-button {
  border: none;
  border-radius: 11px;
  padding: 12px 18px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
}
.control-button:hover {
  transform: translateY(-2px);
}
.start {
  background: #06183d;
  color: white;
  box-shadow:
    0 5px 15px rgba(239, 68, 68, 0.25);
}

.start:hover {
  background: #062b74;
}
.pause {
  background: #6052e2;
  color: white;
}
.pause :hover{
  background-color: #4d40c9;
}
.reset {
  background: #f3f4f6;
  color: #062b74;
}
.reset:hover {
  background: #e5e7eb;
}
.settings {
  padding: 18px;
  border-radius: 16px;
  background: #95acda;
  border: 1px solid #edf0f3;
}
.settings-title {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: 750;
}
.settings-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.setting {
  display: flex;
  flex-direction: column;
  gap: 7px;
  font-size: 12px;
  font-weight: 650;
  color: #f1f3f7;
}
.input-wrapper {
  display: flex;
  align-items: center;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 9px;
  overflow: hidden;
}
.input-wrapper input {
  width: 100%;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 14px;
  font-weight: 700;
  color: #111827;
  background: transparent;
}
.input-wrapper input:disabled {
  color: #9ca3af;
  cursor: not-allowed;
}
.input-wrapper small {
  padding-right: 10px;
  color: #9ca3af;
}
.settings-info {
  margin: 12px 0 0;
  font-size: 11px;
  line-height: 1.5;
  color: #9ca3af;
}
.cycle-alert {
  position: fixed;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  width: min(430px, calc(100% - 30px));
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 18px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow:
    0 15px 45px rgba(0, 0, 0, 0.25);
  z-index: 10001;
}
.alert-icon {
  width: 45px;
  height: 45px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: #fef2f2;
  font-size: 23px;
}
.alert-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}
.alert-content strong {
  font-size: 13px;
  line-height: 1.4;
  color: #111827;
}
.alert-content span {
  font-size: 11px;
  color: #091b3f;
}
.alert-close {
  border: none;
  background: transparent;
  color: #5073b1;
  font-size: 20px;
  cursor: pointer;
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}
.modal-enter-active .pomodoro-modal,
.modal-leave-active .pomodoro-modal {
  transition:
    transform 0.25s ease,
    opacity 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .pomodoro-modal,
.modal-leave-to .pomodoro-modal {
  opacity: 0;
  transform: translateY(20px) scale(0.96);
}
.alert-enter-active,
.alert-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.alert-enter-from,
.alert-leave-to {
  opacity: 0;
  transform:
    translate(-50%, -15px);
}
@media (max-width: 500px) {
  .pomodoro-button {
    width: 55px;
    height: 55px;
    left: 16px;
    bottom: 16px;
    font-size: 27px;
  }
  .modal-backdrop {
    padding: 12px;
  }
  .pomodoro-modal {
    border-radius: 20px;
    max-height: 94vh;
  }
  .modal-header {
    padding: 20px;
  }
  .pomodoro-content {
    padding: 20px;
  }

  .timer-circle {
    width: 205px;
    height: 205px;
  }
  .timer {
    font-size: 44px;
  }
  .settings-grid {
    grid-template-columns: 1fr;
  }
  .controls {
    flex-wrap: wrap;
  }
  .control-button {
    flex: 1;
  }
}
</style>
