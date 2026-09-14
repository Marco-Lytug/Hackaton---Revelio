<template>
  <form class="auth-form" @submit.prevent="handleSubmit">
    <div class="field">
      <label for="cad-nome">Nome completo</label>
      <input
        id="cad-nome"
        v-model.trim="form.nome"
        type="text"
        autocomplete="name"
        placeholder="Seu nome"
        required
      />
    </div>

    <div class="field">
      <label for="cad-email">E-mail</label>
      <input
        id="cad-email"
        v-model.trim="form.email"
        type="email"
        autocomplete="email"
        placeholder="voce@exemplo.com"
        required
      />
    </div>

    <div class="field-row">
      <div class="field">
        <label for="cad-senha">Senha</label>
        <input
          id="cad-senha"
          v-model="form.senha"
          type="password"
          autocomplete="new-password"
          placeholder="••••••••"
          required
          minlength="6"
        />
      </div>

      <div class="field">
        <label for="cad-confirmar">Confirmar senha</label>
        <input
          id="cad-confirmar"
          v-model="form.confirmar"
          type="password"
          autocomplete="new-password"
          placeholder="••••••••"
          required
          minlength="6"
        />
      </div>
    </div>

    <p v-if="feedback" class="feedback" :class="feedback.type">{{ feedback.message }}</p>

    <button type="submit" class="submit-btn">Criar conta</button>

    <p class="switch-line">
      Já tem conta?
      <button type="button" class="switch-link" @click="$emit('switch-tab')">Entrar</button>
    </p>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'

const emit = defineEmits(['switch-tab', 'submit'])

const form = reactive({ nome: '', email: '', senha: '', confirmar: '' })
const feedback = ref(null)

function handleSubmit() {
  if (form.senha !== form.confirmar) {
    feedback.value = { type: 'error', message: 'As senhas não coincidem.' }
    return
  }

  // Sem chamadas HTTP: apenas simula o cadastro localmente.
  console.info('[Cadastro] nova conta simulada', { nome: form.nome, email: form.email })

  feedback.value = { type: 'success', message: `Cadastro simulado para ${form.nome}.` }
  window.alert(`Cadastro realizado (simulação)\nNome: ${form.nome}\nE-mail: ${form.email}`)

  emit('submit', { nome: form.nome, email: form.email, senha: form.senha })
}
</script>

<style scoped>
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
}

.field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.9rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.field label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--muted);
}

.field input {
  padding: 0.65rem 0.8rem;
  font-size: 0.92rem;
  font-family: inherit;
  color: var(--ink);
  background: var(--surface);
  border: 1px solid var(--border);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.field input:focus-visible {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-soft);
}

.feedback {
  margin: -0.3rem 0 0;
  font-size: 0.84rem;
  padding: 0.55rem 0.7rem;
  border-left: 3px solid currentColor;
}
.feedback.success { color: #166534; background: #eefaf1; }
.feedback.error { color: #991b1b; background: #fdecec; }

.submit-btn {
  margin-top: 0.4rem;
  padding: 0.8rem 1rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--accent-ink);
  background: var(--accent);
  border: 1px solid var(--accent);
  cursor: pointer;
  transition: all 0.3s ease;
}
.submit-btn:hover { filter: brightness(1.08); }
.submit-btn:active { filter: brightness(0.96); }

.switch-line {
  margin: 0.2rem 0 0;
  font-size: 0.85rem;
  color: var(--muted);
  text-align: center;
}

.switch-link {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  font-weight: 600;
  color: var(--accent);
  cursor: pointer;
  transition: color 0.3s ease;
}
.switch-link:hover { text-decoration: underline; }
</style>
