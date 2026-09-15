<template>
  <div class="auth-page">
    <div class="auth-card">
      <nav class="tabs" aria-label="Alternar entre login e cadastro">
        <button
          type="button"
          class="tab-btn"
          :class="{ active: activeTab === 'login' }"
          @click="activeTab = 'login'"
        >
          Entrar
        </button>
        <button
          type="button"
          class="tab-btn"
          :class="{ active: activeTab === 'cadastro' }"
          @click="activeTab = 'cadastro'"
        >
          Criar conta
        </button>
        <span class="tab-indicator" :class="activeTab"></span>
      </nav>

      <!--
        LoginForm e CadastroForm são componentes independentes.
        <component :is="...">  decide qual mostrar, e cada um emite:
        - "switch-tab"  -> pede para o pai trocar de aba
        - "submit"      -> avisa que o formulário foi enviado (simulação local)
      -->
      <transition name="swap" mode="out-in">
        <component
          :is="activeTab === 'login' ? LoginForm : CadastroForm"
          :key="activeTab"
          @switch-tab="activeTab = activeTab === 'login' ? 'cadastro' : 'login'"
          @submit="handleFormSubmit"
        />
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LoginForm from './LoginForm.vue'
import CadastroForm from './CadastroForm.vue'

const activeTab = ref('login') // 'login' | 'cadastro'

function handleFormSubmit(payload) {
  console.info(`[AuthApp] evento "submit" recebido da aba "${activeTab.value}"`, payload)
}
</script>

<style scoped>
/* Variáveis de cor usadas também por LoginForm.vue e CadastroForm.vue
   (herdadas via cascata do DOM, mesmo com "scoped"). */
.auth-page {
  --ink: #14171c;
  --paper: #f4f4f2;
  --surface: #ffffff;
  --muted: #6b7280;
  --border: #e0e1de;
  --accent: #2563eb;
  --accent-soft: #e7edfc;
  --accent-ink: #ffffff;

  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.25rem;
  background: var(--paper);
  color: var(--ink);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
}

.auth-card {
  width: 100%;
  max-width: 23rem;
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 2.25rem 2rem;
}

.tabs {
  position: relative;
  display: flex;
  border-bottom: 1px solid var(--border);
  margin-bottom: 1.75rem;
}

.tab-btn {
  flex: 1;
  padding: 0.7rem 0.5rem;
  background: none;
  border: none;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--muted);
  cursor: pointer;
  transition: color 0.3s ease;
}
.tab-btn.active {
  color: var(--ink);
}

.tab-indicator {
  position: absolute;
  bottom: -1px;
  height: 2px;
  width: 50%;
  background: var(--accent);
  transition: transform 0.3s ease;
}
.tab-indicator.login {
  transform: translateX(0);
}
.tab-indicator.cadastro {
  transform: translateX(100%);
}

/* Transição entre os dois formulários */
.swap-enter-active,
.swap-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}
.swap-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.swap-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
  }
}
</style>
