<script setup>
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const categories = [
  { value: 'theme-info', label: 'Info', class: 'info' },
  { value: 'theme-agro', label: 'Agro', class: 'agro' },
  { value: 'theme-quimica', label: 'Química', class: 'quimica' }
]

const activeTab = ref('login')
const activeTheme = ref('theme-info')
const isProfessor = ref(false)
const loading = ref(false)

const showLoginPassword = ref(false)
const showRegisterPassword = ref(false)

const loginForm = reactive({
  email: '',
  senha: ''
})

const registerForm = reactive({
  nome: '',
  email: '',
  senha: '',
  confirmar: ''
})

const loginFeedback = ref(null)
const registerFeedback = ref(null)

const welcomeText = computed(() =>
  isProfessor.value ? 'Área do professor' : 'Bem-vindo de volta'
)

const titleText = computed(() =>
  activeTab.value === 'login'
    ? 'Acesse sua conta'
    : 'Crie sua conta'
)

const descriptionText = computed(() =>
  activeTab.value === 'login'
    ? 'Entre para continuar sua jornada de aprendizagem.'
    : 'Cadastre-se gratuitamente e comece a aprender.'
)

function switchTab(tab) {
  activeTab.value = tab
  loginFeedback.value = null
  registerFeedback.value = null
  showLoginPassword.value = false
  showRegisterPassword.value = false
}
function handleLogin() {
  loginFeedback.value = null

  const usuario = JSON.parse(localStorage.getItem('usuarioRevelio'))

  if (!usuario) {
    loginFeedback.value = {
      type: 'error',
      message: 'Nenhum usuário cadastrado.'
    }
    return
  }

  if (
    loginForm.email !== usuario.email ||
    loginForm.senha !== usuario.senha
  ) {
    loginFeedback.value = {
      type: 'error',
      message: 'E-mail ou senha incorretos.'
    }
    return
  }

  loginFeedback.value = {
    type: 'success',
    message: `Bem-vindo, ${usuario.nome}!`
  }

  loginForm.senha = ''

  setTimeout(() => {
    router.push('/')
  }, 800)
}

function handleRegister() {
  registerFeedback.value = null

  if (!registerForm.nome || !registerForm.email) {
    registerFeedback.value = {
      type: 'error',
      message: 'Preencha todos os campos.'
    }
    return
  }

  if (registerForm.senha.length < 6) {
    registerFeedback.value = {
      type: 'error',
      message: 'A senha deve ter pelo menos 6 caracteres.'
    }
    return
  }

  if (registerForm.senha !== registerForm.confirmar) {
    registerFeedback.value = {
      type: 'error',
      message: 'As senhas não coincidem.'
    }
    return
  }

  // Salva o usuário no navegador
  const usuario = {
    nome: registerForm.nome,
    email: registerForm.email,
    senha: registerForm.senha
  }

  localStorage.setItem('usuarioRevelio', JSON.stringify(usuario))

  registerFeedback.value = {
    type: 'success',
    message: 'Cadastro realizado com sucesso!'
  }

  registerForm.nome = ''
  registerForm.email = ''
  registerForm.senha = ''
  registerForm.confirmar = ''
}

function forgotPassword() {
  loginFeedback.value = {
    type: 'success',
    message: 'Em breve você poderá recuperar sua senha por e-mail.'
  }
}
</script>


<template>
  <main
    class="auth-page"
    :class="[activeTheme, { 'is-professor': isProfessor }]"
  >

    <!-- ESQUERDA -->
    <section class="brand-side">

      <div class="decor decor-1"></div>
      <div class="decor decor-2"></div>
      <div class="decor decor-3"></div>

      <div class="brand-content">

        <div class="logo-wrapper">
          <img
            src="/images/Revelio.png"
            alt="Logo Revelio"
            class="logo"
          />
        </div>

        <span class="brand-tag">
          Plataforma educacional
        </span>

        <h1 class="brand-title">
          Revelio
        </h1>

        <p class="brand-subtitle">
          Sua plataforma integrada de
          <strong>conhecimento, aprendizagem e gestão.</strong>
        </p>

        <div class="brand-features">

          <div class="feature">
            <span class="feature-icon">✓</span>
            <div>
              <strong>Conteúdo organizado</strong>
              <small>Materiais separados por área</small>
            </div>
          </div>

          <div class="feature">
            <span class="feature-icon">✓</span>
            <div>
              <strong>Aprendizado interativo</strong>
              <small>Quiz, atividades e conteúdos</small>
            </div>
          </div>

          <div class="feature">
            <span class="feature-icon">✓</span>
            <div>
              <strong>Área do professor</strong>
              <small>Ferramentas para acompanhamento</small>
            </div>
          </div>

        </div>
      </div>
    </section>


    <!-- DIREITA -->
    <section class="form-side">

      <div class="form-wrapper">

        <div class="theme-controls">

          <div
            class="category-buttons"
            :class="{ disabled: isProfessor }"
          >
            <button
              v-for="category in categories"
              :key="category.value"
              type="button"
              class="category-btn"
              :class="{
                active:
                  activeTheme === category.value &&
                  !isProfessor
              }"
              :disabled="isProfessor"
              @click="activeTheme = category.value"
            >
              <span
                class="category-dot"
                :class="category.class"
              ></span>

              {{ category.label }}
            </button>
          </div>

          <label class="professor-toggle">
            <input v-model="isProfessor" type="checkbox">

            <span class="toggle">
              <span class="toggle-circle"></span>
            </span>

            <span class="toggle-label">
              Sou Professor
            </span>
          </label>

        </div>


        <!-- CABEÇALHO -->
        <header class="form-header">

          <span class="welcome-label">
            {{ welcomeText }}
          </span>

          <h2>{{ titleText }}</h2>

          <p>{{ descriptionText }}</p>

        </header>


        <!-- FORMULÁRIO -->
        <Transition name="form" mode="out-in">

          <!-- LOGIN -->
          <form
            v-if="activeTab === 'login'"
            key="login"
            class="auth-form"
            @submit.prevent="handleLogin"
          >

            <div class="field">
              <label for="login-email">E-mail</label>

              <div class="input-wrapper">
                <span class="input-icon">@</span>

                <input
                  id="login-email"
                  v-model.trim="loginForm.email"
                  type="email"
                  placeholder="voce@exemplo.com"
                  autocomplete="email"
                  required
                />
              </div>
            </div>


            <div class="field">

              <div class="label-line">
                <label for="login-senha">Senha</label>

                <button
                  type="button"
                  class="forgot-btn"
                  @click="forgotPassword"
                >
                  Esqueceu a senha?
                </button>
              </div>

              <div class="input-wrapper">
                <span class="input-icon">•••</span>

                <input
                  id="login-senha"
                  v-model="loginForm.senha"
                  :type="showLoginPassword ? 'text' : 'password'"
                  placeholder="Digite sua senha"
                  minlength="6"
                  autocomplete="current-password"
                  required
                />

                <button
                  type="button"
                  class="password-btn"
                  @click="showLoginPassword = !showLoginPassword"
                >
                  {{ showLoginPassword ? 'Ocultar' : 'Mostrar' }}
                </button>
                <button class="back-home" @click="router.push('/')">
  ← Voltar ao início
</button>
              </div>

            </div>


            <Transition name="feedback">
              <div
                v-if="loginFeedback"
                class="feedback"
                :class="loginFeedback.type"
              >
                <span class="feedback-icon">
                  {{ loginFeedback.type === 'error' ? '!' : '✓' }}
                </span>

                {{ loginFeedback.message }}
              </div>
            </Transition>


            <button
              type="submit"
              class="submit-btn"
              :disabled="loading"
            >
              <span v-if="loading" class="spinner"></span>

              {{ loading ? 'Entrando...' : 'Entrar na conta' }}

              <span v-if="!loading" class="arrow">→</span>
            </button>


            <p class="switch-line">
              Ainda não possui uma conta?

              <button
                type="button"
                class="switch-link"
                @click="switchTab('register')"
              >
                Criar conta
              </button>
            </p>

          </form>


          <!-- CADASTRO -->
          <form
            v-else
            key="register"
            class="auth-form"
            @submit.prevent="handleRegister"
          >

            <div class="field">
              <label for="cad-nome">Nome completo</label>

              <div class="input-wrapper">
                <span class="input-icon">◎</span>

                <input
                  id="cad-nome"
                  v-model.trim="registerForm.nome"
                  type="text"
                  placeholder="Digite seu nome completo"
                  autocomplete="name"
                  required
                />
              </div>
            </div>


            <div class="field">
              <label for="cad-email">E-mail</label>

              <div class="input-wrapper">
                <span class="input-icon">@</span>

                <input
                  id="cad-email"
                  v-model.trim="registerForm.email"
                  type="email"
                  placeholder="voce@exemplo.com"
                  autocomplete="email"
                  required
                />
              </div>
            </div>


            <div class="field-row">

              <div class="field">
                <label for="cad-senha">Senha</label>

                <input
                  id="cad-senha"
                  v-model="registerForm.senha"
                  :type="showRegisterPassword ? 'text' : 'password'"
                  placeholder="••••••••"
                  minlength="6"
                  required
                />
              </div>

              <div class="field">
                <label for="cad-confirmar">Confirmar</label>

                <input
                  id="cad-confirmar"
                  v-model="registerForm.confirmar"
                  :type="showRegisterPassword ? 'text' : 'password'"
                  placeholder="••••••••"
                  minlength="6"
                  required
                />
              </div>

            </div>


            <label class="show-password">
              <input
                v-model="showRegisterPassword"
                type="checkbox"
              />

              Mostrar senha
            </label>
            <button class="back-home" @click="router.push('/')">
  ← Voltar ao início
</button>

            <Transition name="feedback">
              <div
                v-if="registerFeedback"
                class="feedback"
                :class="registerFeedback.type"
              >
                <span class="feedback-icon">
                  {{ registerFeedback.type === 'error' ? '!' : '✓' }}
                </span>

                {{ registerFeedback.message }}
              </div>
            </Transition>


            <button
              type="submit"
              class="submit-btn"
              :disabled="loading"
            >
              <span v-if="loading" class="spinner"></span>

              {{ loading ? 'Criando conta...' : 'Criar minha conta' }}

              <span v-if="!loading" class="arrow">→</span>
            </button>


            <p class="switch-line">
              Já possui uma conta?

              <button
                type="button"
                class="switch-link"
                @click="switchTab('login')"
              >
                Entrar
              </button>
            </p>


          </form>

        </Transition>


        <p class="security-note">
          🔒 Seus dados são tratados com segurança.
        </p>

      </div>
    </section>

  </main>
</template>


<style scoped>

/* =========================
   VARIÁVEIS E BASE
========================= */

.auth-page {
  --accent: #2563eb;
  --accent-dark: #1d4ed8;
  --accent-soft: #dbeafe;

  --bg-left: #0f172a;
  --surface: #ffffff;
  --surface-soft: #f8fafc;

  --ink: #0f172a;
  --muted: #64748b;
  --border: #e2e8f0;

  --success: #15803d;
  --error: #b91c1c;

  min-height: 100vh;
  display: flex;

  background: var(--surface);
  color: var(--ink);

  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}

.auth-page *,
.auth-page *::before,
.auth-page *::after {
  box-sizing: border-box;
}


/* =========================
   TEMAS
========================= */

.theme-info {
  --accent: #2563eb;
  --accent-dark: #1d4ed8;
  --accent-soft: #dbeafe;
}

.theme-agro {
  --accent: #16a34a;
  --accent-dark: #15803d;
  --accent-soft: #dcfce7;
}

.theme-quimica {
  --accent: #800020;
  --accent-dark: #650019;
  --accent-soft: #f8e6e9;
}

.is-professor {
  --accent: #111111;
  --accent-dark: #000000;
  --accent-soft: #e5e5e5;
  --bg-left: #050505;
}


/* =========================
   LADO ESQUERDO
========================= */

.brand-side {
  position: relative;
  flex: 1;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4rem;
  overflow: hidden;

  background:
    radial-gradient(
      circle at 15% 20%,
      color-mix(in srgb, var(--accent) 20%, transparent),
      transparent 40%
    ),
    radial-gradient(
      circle at 90% 90%,
      rgba(255, 255, 255, 0.04),
      transparent 35%
    ),
    var(--bg-left);

  color: white;
  transition: background 0.3s ease;
}

.brand-content {
  position: relative;
  z-index: 2;

  width: 100%;
  max-width: 460px;
}


/* =========================
   DECORAÇÕES
========================= */

.decor {
  position: absolute;

  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 50%;

  pointer-events: none;
}

.decor-1 {
  width: 420px;
  height: 420px;

  top: -210px;
  left: -210px;
}

.decor-2 {
  width: 320px;
  height: 320px;

  right: -160px;
  bottom: -160px;
}

.decor-3 {
  width: 180px;
  height: 180px;

  top: 18%;
  right: 8%;

  background: rgba(255, 255, 255, 0.02);
}


/* =========================
   LOGO
========================= */

.logo-wrapper {
  width: 78px;
  height: 78px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 1.5rem;

  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 22px;

  background: rgba(255, 255, 255, 0.05);

  transition:
    transform 0.25s ease,
    background 0.25s ease;
}

.logo-wrapper:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.08);
}

.logo {
  width: 48px;
  height: 48px;

  object-fit: contain;
}


/* =========================
   TEXTOS DA MARCA
========================= */

.brand-tag {
  display: inline-block;

  color: rgba(255, 255, 255, 0.55);

  font-size: 0.68rem;
  font-weight: 800;

  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.brand-title {
  margin: 0.7rem 0 1rem;

  font-size: clamp(3.4rem, 7vw, 5.2rem);
  font-weight: 800;

  line-height: 0.9;
  letter-spacing: -0.07em;
}

.brand-subtitle {
  max-width: 390px;

  margin: 0;

  color: rgba(255, 255, 255, 0.65);

  font-size: 1rem;
  line-height: 1.7;
}

.brand-subtitle strong {
  color: white;
}


/* =========================
   RECURSOS
========================= */

.brand-features {
  display: flex;
  flex-direction: column;

  gap: 1rem;
  margin-top: 3rem;
}

.feature {
  display: flex;
  align-items: center;

  gap: 0.9rem;
}

.feature-icon {
  width: 32px;
  height: 32px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: var(--accent);
  color: white;

  font-weight: bold;
}

.feature strong,
.feature small {
  display: block;
}

.feature strong {
  font-size: 0.88rem;
}

.feature small {
  margin-top: 0.2rem;

  color: rgba(255, 255, 255, 0.45);
  font-size: 0.75rem;
}


/* =========================
   LADO DIREITO
========================= */

.form-side {
  flex: 1;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3rem 4rem;

  background: var(--surface);
}

.form-wrapper {
  width: 100%;
  max-width: 440px;
}


/* =========================
   BOTÃO VOLTAR
========================= */

.back-home {
  display: inline-flex;
  align-items: center;

  gap: 0.4rem;

  margin-bottom: 1.8rem;
  padding: 0;

  border: none;
  background: none;

  color: var(--accent);

  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 700;

  cursor: pointer;

  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.back-home:hover {
  color: var(--accent-dark);
  transform: translateX(-3px);
}


/* =========================
   CONTROLES
========================= */

.theme-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;

  margin-bottom: 2.5rem;
  padding-bottom: 1.25rem;

  border-bottom: 1px solid var(--border);
}

.category-buttons {
  display: flex;
  gap: 0.25rem;

  padding: 0.3rem;

  background: var(--surface-soft);

  border: 1px solid var(--border);
  border-radius: 12px;
}

.category-buttons.disabled {
  opacity: 0.45;
}

.category-btn {
  display: flex;
  align-items: center;

  gap: 0.4rem;
  padding: 0.45rem 0.7rem;

  border: none;
  border-radius: 8px;

  background: transparent;
  color: var(--muted);

  font: 700 0.76rem inherit;

  cursor: pointer;
  transition: 0.2s ease;
}

.category-btn:hover:not(:disabled) {
  background: white;
  color: var(--ink);

  transform: translateY(-1px);
}

.category-btn.active {
  background: white;
  color: var(--accent);

  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.08);
}

.category-btn:disabled {
  cursor: not-allowed;
}

.category-dot {
  width: 7px;
  height: 7px;

  border-radius: 50%;
}

.category-dot.info {
  background: #2563eb;
}

.category-dot.agro {
  background: #16a34a;
}

.category-dot.quimica {
  background: #800020;
}


/* =========================
   PROFESSOR
========================= */

.professor-toggle {
  display: flex;
  align-items: center;

  gap: 0.55rem;

  cursor: pointer;
  user-select: none;
}

.professor-toggle input {
  position: absolute;
  opacity: 0;
}

.toggle {
  width: 40px;
  height: 22px;

  padding: 2px;

  display: flex;
  align-items: center;

  border-radius: 999px;

  background: #cbd5e1;
  transition: background 0.25s ease;
}

.toggle-circle {
  width: 18px;
  height: 18px;

  border-radius: 50%;

  background: white;

  transition: transform 0.25s ease;
}

.professor-toggle input:checked + .toggle {
  background: var(--accent);
}

.professor-toggle input:checked + .toggle .toggle-circle {
  transform: translateX(18px);
}

.toggle-label {
  font-size: 0.76rem;
  font-weight: 700;
}


/* =========================
   CABEÇALHO
========================= */

.form-header {
  margin-bottom: 2rem;
}

.welcome-label {
  color: var(--accent);

  font-size: 0.68rem;
  font-weight: 800;

  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.form-header h2 {
  margin: 0.55rem 0 0;

  font-size: 2rem;
  font-weight: 800;

  line-height: 1.15;
}

.form-header p {
  margin-top: 0.7rem;

  color: var(--muted);

  font-size: 0.88rem;
  line-height: 1.6;
}


/* =========================
   FORMULÁRIO
========================= */

.auth-form {
  display: flex;
  flex-direction: column;

  gap: 1.35rem;
}

.field {
  display: flex;
  flex-direction: column;

  gap: 0.45rem;
}

.field label {
  font-size: 0.76rem;
  font-weight: 700;
}

.label-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
}


/* =========================
   INPUTS
========================= */

.input-wrapper {
  position: relative;

  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;

  left: 1rem;

  color: #94a3b8;
  pointer-events: none;
}

.field input {
  width: 100%;
  height: 50px;

  padding: 0 1rem 0 2.5rem;

  border: 1px solid var(--border);
  border-radius: 11px;

  outline: none;

  background: var(--surface-soft);
  color: var(--ink);

  font: 0.86rem inherit;

  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;
}

.field input:hover {
  border-color: #cbd5e1;
}

.field input:focus {
  background: white;

  border-color: var(--accent);

  box-shadow:
    0 0 0 4px var(--accent-soft);
}


/* CAMPOS DO CADASTRO */

.field-row {
  display: grid;

  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
}

.field-row .field input {
  padding-left: 1rem;
}


/* =========================
   LINKS
========================= */

.forgot-btn,
.switch-link {
  padding: 0;

  border: none;
  background: none;

  color: var(--accent);

  font: 700 0.7rem inherit;

  cursor: pointer;
}

.switch-link {
  font-size: inherit;
}

.forgot-btn:hover,
.switch-link:hover {
  text-decoration: underline;
}


/* =========================
   MOSTRAR SENHA
========================= */
.show-password {
  display: inline-flex;
  align-items: center;
  gap: .5rem;

  width: fit-content;

  color: var(--muted);
  font-size: .75rem;
  font-weight: 500;

  cursor: pointer;
  user-select: none;
}

.show-password input {
  width: 15px;
  height: 15px;

  margin: 0;

  padding: 0;

  accent-color: var(--accent);

  cursor: pointer;
  box-shadow: none;
}

.show-password input:focus {
  box-shadow: none;
  outline: none;
}

.show-password:hover {
  color: var(--ink);
}
/* =========================
   FEEDBACK
========================= */

.feedback {
  display: flex;
  align-items: center;

  gap: 0.65rem;
  padding: 0.8rem;

  border-radius: 10px;

  font-size: 0.76rem;
}

.feedback.error {
  color: var(--error);
  background: #fef2f2;

  border: 1px solid #fecaca;
}

.feedback.success {
  color: var(--success);
  background: #f0fdf4;

  border: 1px solid #bbf7d0;
}

.feedback-icon {
  width: 21px;
  height: 21px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: currentColor;
  color: white;

  font-size: 0.7rem;
}


/* =========================
   BOTÃO PRINCIPAL
========================= */

.submit-btn {
  width: 100%;
  min-height: 51px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.6rem;

  border: none;
  border-radius: 11px;

  background: var(--accent);
  color: white;

  font: 800 0.84rem inherit;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.submit-btn:hover:not(:disabled) {
  background: var(--accent-dark);

  transform: translateY(-2px);

  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.12);
}

.submit-btn:active:not(:disabled) {
  transform: translateY(0);
}

.submit-btn:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.arrow {
  font-size: 1.05rem;

  transition: transform 0.2s ease;
}

.submit-btn:hover:not(:disabled) .arrow {
  transform: translateX(4px);
}


/* =========================
   LOADING
========================= */

.spinner {
  width: 16px;
  height: 16px;

  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: white;

  border-radius: 50%;

  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}


/* =========================
   RODAPÉ
========================= */

.switch-line {
  margin: 0;

  color: var(--muted);

  text-align: center;
  font-size: 0.76rem;
}

.security-note {
  margin-top: 1.8rem;

  color: #94a3b8;

  text-align: center;
  font-size: 0.67rem;
}


/* =========================
   TRANSIÇÕES
========================= */

.form-enter-active,
.form-leave-active,
.feedback-enter-active,
.feedback-leave-active {
  transition: 0.25s ease;
}

.form-enter-from,
.form-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

.feedback-enter-from,
.feedback-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}


/* =========================
   FOCO
========================= */

button:focus-visible,
input:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}


/* =========================
   RESPONSIVO
========================= */

@media (max-width: 900px) {

  .auth-page {
    flex-direction: column;
  }

  .brand-side {
    min-height: auto;
    padding: 3rem 2rem;
  }

  .brand-content {
    max-width: 600px;
    text-align: center;
  }

  .logo-wrapper {
    margin-right: auto;
    margin-left: auto;
  }

  .brand-subtitle {
    margin-right: auto;
    margin-left: auto;
  }

  .brand-features {
    display: none;
  }

  .form-side {
    min-height: auto;
    padding: 3rem 2rem;
  }
}


@media (max-width: 600px) {

  .brand-side {
    padding: 2.5rem 1.5rem;
  }

  .brand-title {
    font-size: 3.2rem;
  }

  .form-side {
    padding: 2rem 1.25rem 3rem;
  }

  .theme-controls {
    flex-direction: column;
    align-items: stretch;
  }

  .category-buttons {
    width: 100%;
  }

  .category-btn {
    flex: 1;
    justify-content: center;
  }

  .professor-toggle {
    align-self: flex-end;
  }

  .form-header h2 {
    font-size: 1.7rem;
  }
}


@media (max-width: 430px) {

  .brand-title {
    font-size: 2.8rem;
  }

  .field-row {
    grid-template-columns: 1fr;
  }

  .category-btn {
    padding: 0.45rem 0.5rem;
    font-size: 0.7rem;
  }

  .form-side {
    padding: 2rem 1rem 3rem;
  }
}

</style>
