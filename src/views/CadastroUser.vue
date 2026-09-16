<template>
  <form class="formulario-autenticacao" @submit.prevent="enviarFormulario">
    <div class="campo">
      <label for="cad-nome">Nome completo</label>
      <input
        id="cad-nome"
        v-model.trim="formulario.nome"
        type="text"
        autocomplete="name"
        placeholder="Seu nome"
        required
        :disabled="carregando"
      />
    </div>

    <div class="campo">
      <label for="cad-email">E-mail</label>
      <input
        id="cad-email"
        v-model.trim="formulario.email"
        type="email"
        autocomplete="email"
        placeholder="voce@exemplo.com"
        required
        :disabled="carregando"
      />
    </div>

    <div class="linha-campos">
      <div class="campo">
        <label for="cad-senha">Senha</label>
        <input
          id="cad-senha"
          v-model="formulario.senha"
          type="password"
          autocomplete="new-password"
          placeholder="••••••••"
          required
          minlength="6"
          :disabled="carregando"
        />
      </div>

      <div class="campo">
        <label for="cad-confirmar">Confirmar senha</label>
        <input
          id="cad-confirmar"
          v-model="formulario.confirmar"
          type="password"
          autocomplete="new-password"
          placeholder="••••••••"
          required
          minlength="6"
          :disabled="carregando"
        />
      </div>
    </div>

    <p v-if="respostaFeedback" class="retorno-feedback" :class="respostaFeedback.tipo">
      {{ respostaFeedback.mensagem }}
    </p>

    <button type="submit" class="botao-enviar" :disabled="carregando">
      {{ carregando ? 'Criando conta...' : 'Criar conta' }}
    </button>

    <p class="linha-alternar">
      Já tem conta?
      <button type="button" class="link-alternar" :disabled="carregando" @click="$emit('switch-tab')">
        Entrar
      </button>
    </p>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { conexaoSupabase } from '@/supabase' // Conexão com o Supabase

defineEmits(['switch-tab', 'submit'])

const formulario = reactive({ nome: '', email: '', senha: '', confirmar: '' })
const respostaFeedback = ref(null)
const carregando = ref(false)

async function enviarFormulario() {
  respostaFeedback.value = null

  if (formulario.senha !== formulario.confirmar) {
    respostaFeedback.value = { tipo: 'erro', mensagem: 'As senhas não coincidem.' }
    return
  }

  carregando.value = true

  // Cadastro em tempo real no Supabase
  const { data, error } = await conexaoSupabase.auth.signUp({
    email: formulario.email,
    password: formulario.senha,
    options: {
      data: {
        full_name: formulario.nome
      }
    }
  })

  carregando.value = false

  if (error) {
    respostaFeedback.value = { tipo: 'erro', mensagem: error.message }
    return
  }

  respostaFeedback.value = { 
    tipo: 'sucesso', 
    mensagem: 'Cadastro realizado com sucesso! Verifique seu e-mail para confirmar a conta.' 
  }
  
  window.alert(`Cadastro realizado!\nNome: ${formulario.nome}\nPor favor, confirme a conta no seu e-mail antes de fazer o login.`)

  // Limpa o formulário após o sucesso
  formulario.nome = ''
  formulario.email = ''
  formulario.senha = ''
  formulario.confirmar = ''
}
</script>

<style scoped>
.formulario-autenticacao {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
}

.linha-campos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.9rem;
}

.campo {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.campo label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--muted);
}

.campo input {
  padding: 0.65rem 0.8rem;
  font-size: 0.92rem;
  font-family: inherit;
  color: var(--ink);
  background: var(--surface);
  border: 1px solid var(--border);
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}
.campo input:focus-visible {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-soft);
}
.campo input:disabled {
  background: #f1f5f9;
  cursor: not-allowed;
}

.retorno-feedback {
  margin: -0.3rem 0 0;
  font-size: 0.84rem;
  padding: 0.55rem 0.7rem;
  border-left: 3px solid currentColor;
}
.retorno-feedback.sucesso {
  color: #166534;
  background: #eefaf1;
}
.retorno-feedback.erro {
  color: #991b1b;
  background: #fdecec;
}

.botao-enviar {
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
.botao-enviar:hover:not(:disabled) {
  filter: brightness(1.08);
}
.botao-enviar:active:not(:disabled) {
  filter: brightness(0.96);
}
.botao-enviar:disabled {
  background: #cbd5e1;
  border-color: #cbd5e1;
  color: #94a3b8;
  cursor: not-allowed;
}

.linha-alternar {
  margin: 0.2rem 0 0;
  font-size: 0.85rem;
  color: var(--muted);
  text-align: center;
}

.link-alternar {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  font-weight: 600;
  color: var(--accent);
  cursor: pointer;
  transition: color 0.3s ease;
}
.link-alternar:hover:not(:disabled) {
  text-decoration: underline;
}
.link-alternar:disabled {
  color: #94a3b8;
  cursor: not-allowed;
}
</style>
