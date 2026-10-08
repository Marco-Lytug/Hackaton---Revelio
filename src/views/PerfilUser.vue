<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { conexaoSupabase } from '@/supabase'

const router = useRouter()

/* =========================================================
   ESTADO
========================================================= */

const carregando = ref(true)
const salvando = ref(false)

const editando = ref(false)

const mensagem = ref('')
const erro = ref('')

const usuario = ref({
  nome: '',
  email: '',
  descricao: '',
  foto: '',
  banner: '',
  tipo: ''
})

const nomeEditado = ref('')
const descricaoEditada = ref('')
const fotoEditada = ref('')
const bannerEditado = ref('')

/* =========================================================
   BUSCAR USUÁRIO DO SUPABASE
========================================================= */

async function carregarUsuario() {
  carregando.value = true
  erro.value = ''

  try {
    const {
      data,
      error
    } = await conexaoSupabase.auth.getUser()

    if (error) {
      console.error(
        'Erro ao buscar usuário:',
        error
      )

      erro.value =
        'Não foi possível carregar os dados do perfil.'

      return
    }

    const user = data?.user

    if (!user) {
      router.push('/Login')
      return
    }

    const metadata =
      user.user_metadata || {}

    usuario.value = {
      nome:
        metadata.full_name ||
        metadata.nome ||
        user.email ||
        '',

      email:
        user.email || '',

      descricao:
        metadata.descricao || '',

      foto:
        metadata.foto || '',

      banner:
        metadata.banner || '',

      tipo:
        metadata.tipo || 'aluno'
    }

  } catch (error) {
    console.error(
      'Erro inesperado ao carregar perfil:',
      error
    )

    erro.value =
      'Ocorreu um erro ao carregar seu perfil.'

  } finally {
    carregando.value = false
  }
}

/* =========================================================
   INICIALIZAÇÃO
========================================================= */

onMounted(() => {
  carregarUsuario()
})

/* =========================================================
   ABRIR EDIÇÃO
========================================================= */

function abrirEdicao() {
  nomeEditado.value =
    usuario.value.nome

  descricaoEditada.value =
    usuario.value.descricao

  fotoEditada.value =
    usuario.value.foto

  bannerEditado.value =
    usuario.value.banner

  mensagem.value = ''
  erro.value = ''

  editando.value = true
}

/* =========================================================
   CANCELAR
========================================================= */

function cancelarEdicao() {
  editando.value = false

  mensagem.value = ''
  erro.value = ''
}

/* =========================================================
   SALVAR PERFIL
========================================================= */

async function salvarPerfil() {
  mensagem.value = ''
  erro.value = ''

  if (salvando.value) {
    return
  }

  const nome =
    nomeEditado.value.trim()

  const descricao =
    descricaoEditada.value.trim()

  /* -------------------------
     VALIDAR NOME
  ------------------------- */

  if (!nome) {
    erro.value =
      'Digite seu nome.'

    return
  }

  if (nome.length < 2) {
    erro.value =
      'Digite um nome válido.'

    return
  }

  salvando.value = true

  try {
    const {
      data,
      error
    } =
      await conexaoSupabase.auth.updateUser({
        data: {
          full_name: nome,
          descricao,
          foto: fotoEditada.value,
          banner: bannerEditado.value,
          tipo: usuario.value.tipo
        }
      })

    if (error) {
      console.error(
        'Erro ao atualizar perfil:',
        error
      )

      erro.value =
        obterMensagemErro(error)

      return
    }

    /* -------------------------
       ATUALIZAR TELA
    ------------------------- */

    const userAtualizado =
      data?.user

    if (userAtualizado) {
      usuario.value = {
        nome:
          userAtualizado.user_metadata
            ?.full_name ||
          nome,

        email:
          userAtualizado.email ||
          usuario.value.email,

        descricao:
          userAtualizado.user_metadata
            ?.descricao ||
          descricao,

        foto:
          userAtualizado.user_metadata
            ?.foto ||
          '',

        banner:
          userAtualizado.user_metadata
            ?.banner ||
          '',

        tipo:
          userAtualizado.user_metadata
            ?.tipo ||
          usuario.value.tipo
      }
    } else {
      usuario.value.nome = nome
      usuario.value.descricao = descricao
      usuario.value.foto =
        fotoEditada.value
      usuario.value.banner =
        bannerEditado.value
    }

    mensagem.value =
      'Perfil atualizado com sucesso!'

    editando.value = false

  } catch (error) {
    console.error(
      'Erro inesperado ao salvar perfil:',
      error
    )

    erro.value =
      'Ocorreu um erro inesperado. Tente novamente.'

  } finally {
    salvando.value = false
  }
}

/* =========================================================
   SELECIONAR FOTO
========================================================= */

function selecionarFoto(event) {
  const arquivo =
    event.target.files?.[0]

  if (!arquivo) {
    return
  }

  /* -------------------------
     VALIDAR TIPO
  ------------------------- */

  if (!arquivo.type.startsWith('image/')) {
    erro.value =
      'Selecione uma imagem válida.'

    event.target.value = ''

    return
  }

  /* -------------------------
     LIMITE DE TAMANHO
     3 MB
  ------------------------- */

  const limite =
    3 * 1024 * 1024

  if (arquivo.size > limite) {
    erro.value =
      'A foto deve ter no máximo 3 MB.'

    event.target.value = ''

    return
  }

  erro.value = ''

  const leitor =
    new FileReader()

  leitor.onload = () => {
    fotoEditada.value =
      leitor.result
  }

  leitor.onerror = () => {
    erro.value =
      'Não foi possível carregar a foto.'
  }

  leitor.readAsDataURL(arquivo)
}

/* =========================================================
   REMOVER FOTO
========================================================= */

function removerFoto() {
  fotoEditada.value = ''
}

/* =========================================================
   SELECIONAR BANNER
========================================================= */

function selecionarBanner(event) {
  const arquivo =
    event.target.files?.[0]

  if (!arquivo) {
    return
  }

  /* -------------------------
     VALIDAR TIPO
  ------------------------- */

  if (!arquivo.type.startsWith('image/')) {
    erro.value =
      'Selecione uma imagem válida.'

    event.target.value = ''

    return
  }

  /* -------------------------
     LIMITE DE TAMANHO
     5 MB
  ------------------------- */

  const limite =
    5 * 1024 * 1024

  if (arquivo.size > limite) {
    erro.value =
      'O banner deve ter no máximo 5 MB.'

    event.target.value = ''

    return
  }

  erro.value = ''

  const leitor =
    new FileReader()

  leitor.onload = () => {
    bannerEditado.value =
      leitor.result
  }

  leitor.onerror = () => {
    erro.value =
      'Não foi possível carregar o banner.'
  }

  leitor.readAsDataURL(arquivo)
}

/* =========================================================
   REMOVER BANNER
========================================================= */

function removerBanner() {
  bannerEditado.value = ''
}

/* =========================================================
   VOLTAR
========================================================= */

function voltar() {
  router.back()
}

/* =========================================================
   ERROS DO SUPABASE
========================================================= */

function obterMensagemErro(error) {
  const mensagemOriginal =
    error?.message?.toLowerCase() || ''

  if (
    mensagemOriginal.includes(
      'network'
    ) ||
    mensagemOriginal.includes(
      'fetch'
    )
  ) {
    return 'Não foi possível conectar ao servidor. Verifique sua internet.'
  }

  if (
    mensagemOriginal.includes(
      'jwt'
    ) ||
    mensagemOriginal.includes(
      'session'
    )
  ) {
    return 'Sua sessão expirou. Faça login novamente.'
  }

  return (
    error?.message ||
    'Não foi possível atualizar seu perfil.'
  )
}
</script>

<template>
  <main class="perfil-page">

    <!-- =====================================================
         CARREGANDO
    ====================================================== -->

    <div
      v-if="carregando"
      class="estado-carregando"
    >
      <div class="spinner"></div>

      <p>
        Carregando seu perfil...
      </p>
    </div>

    <!-- =====================================================
         ERRO
    ====================================================== -->

    <div
      v-else-if="erro && !usuario.email"
      class="estado-erro"
    >
      <div class="estado-erro-icon">
        !
      </div>

      <h2>
        Não foi possível carregar o perfil
      </h2>

      <p>
        {{ erro }}
      </p>

      <button
        type="button"
        class="btn-tentar"
        @click="carregarUsuario"
      >
        Tentar novamente
      </button>
    </div>

    <!-- =====================================================
         CONTEÚDO
    ====================================================== -->

    <template v-else>

      <!-- ===================================================
           HEADER
      ==================================================== -->

      <header class="perfil-header">

        <button
          class="btn-voltar"
          type="button"
          @click="voltar"
        >
          <span>←</span>

          Voltar
        </button>

        <div class="header-content">

          <span class="header-label">
            CONTA
          </span>

          <h1>
            Meu perfil
          </h1>

          <p>
            Gerencie suas informações pessoais dentro do Revelio.
          </p>

        </div>

      </header>

      <!-- ===================================================
           MENSAGEM DE SUCESSO
      ==================================================== -->

      <Transition name="feedback">

        <div
          v-if="mensagem"
          class="mensagem-sucesso"
        >
          <span>
            ✓
          </span>

          {{ mensagem }}
        </div>

      </Transition>

      <!-- ===================================================
           MENSAGEM DE ERRO
      ==================================================== -->

      <Transition name="feedback">

        <div
          v-if="erro && usuario.email"
          class="mensagem-erro"
        >
          <span>
            !
          </span>

          {{ erro }}
        </div>

      </Transition>

      <!-- ===================================================
           PERFIL
      ==================================================== -->

      <section
        v-if="!editando"
        class="perfil-area"
      >

        <article class="perfil-card">

          <!-- BANNER -->

          <div
            class="perfil-banner"
            :class="{
              'sem-banner':
                !usuario.banner
            }"
            :style="
              usuario.banner
                ? {
                    backgroundImage:
                      `url(${usuario.banner})`
                  }
                : {}
            "
          >

            <div
              v-if="!usuario.banner"
              class="banner-placeholder"
            >
              <span>
                Revelio
              </span>
            </div>

          </div>

          <!-- PRINCIPAL -->

          <div class="perfil-principal">

            <div class="foto-wrapper">

              <div class="foto-perfil">

                <img
                  v-if="usuario.foto"
                  :src="usuario.foto"
                  :alt="`Foto de perfil de ${usuario.nome}`"
                >

                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle
                    cx="12"
                    cy="8"
                    r="4"
                  />

                  <path
                    d="M5 21a7 7 0 0 1 14 0"
                  />
                </svg>

              </div>

            </div>

            <div class="dados-perfil">

              <span class="perfil-tag">
                {{ usuario.tipo === 'professor'
                  ? 'PROFESSOR'
                  : 'SEU PERFIL'
                }}
              </span>

              <h2>
                {{ usuario.nome }}
              </h2>

              <p class="email-perfil">
                {{ usuario.email }}
              </p>

              <p class="descricao-perfil">

                {{
                  usuario.descricao ||
                  'Você ainda não adicionou uma descrição ao seu perfil.'
                }}

              </p>

              <button
                class="btn-editar"
                type="button"
                @click="abrirEdicao"
              >
                Editar perfil
              </button>

            </div>

          </div>

          <!-- INFORMAÇÕES -->

          <div class="informacoes-conta">

            <div class="informacao">

              <span>
                Nome
              </span>

              <strong>
                {{ usuario.nome }}
              </strong>

            </div>

            <div class="informacao">

              <span>
                E-mail
              </span>

              <strong>
                {{ usuario.email }}
              </strong>

            </div>

            <div class="informacao">

              <span>
                Status
              </span>

              <strong class="status-ativo">
                Ativo
              </strong>

            </div>

          </div>

        </article>

      </section>

      <!-- ===================================================
           EDIÇÃO
      ==================================================== -->

      <section
        v-else
        class="edicao-area"
      >

        <article class="edicao-card">

          <!-- HEADER -->

          <div class="edicao-header">

            <span class="header-label">
              CONFIGURAÇÕES
            </span>

            <h2>
              Editar perfil
            </h2>

            <p>
              Altere suas informações e personalize seu perfil.
            </p>

          </div>

          <div class="edicao-conteudo">

            <!-- =================================================
                 BANNER
            ================================================== -->

            <div class="banner-editor">

              <div
                class="banner-preview"
                :class="{
                  'sem-banner':
                    !bannerEditado
                }"
                :style="
                  bannerEditado
                    ? {
                        backgroundImage:
                          `url(${bannerEditado})`
                      }
                    : {}
                "
              >

                <span v-if="!bannerEditado">
                  Seu banner aparecerá aqui
                </span>

              </div>

              <div class="banner-acoes">

                <label
                  for="banner"
                  class="btn-escolher"
                >
                  Escolher banner
                </label>

                <input
                  id="banner"
                  type="file"
                  accept="image/*"
                  @change="selecionarBanner"
                >

                <button
                  v-if="bannerEditado"
                  type="button"
                  class="btn-remover"
                  @click="removerBanner"
                >
                  Remover banner
                </button>

              </div>

            </div>

            <!-- =================================================
                 FOTO
            ================================================== -->

            <div class="foto-editor">

              <div class="foto-editavel">

                <img
                  v-if="fotoEditada"
                  :src="fotoEditada"
                  alt="Prévia da foto de perfil"
                >

                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >

                  <circle
                    cx="12"
                    cy="8"
                    r="4"
                  />

                  <path
                    d="M5 21a7 7 0 0 1 14 0"
                  />

                </svg>

              </div>

              <div class="foto-opcoes">

                <span>
                  Foto de perfil
                </span>

                <label
                  for="foto"
                  class="btn-escolher"
                >
                  Escolher foto
                </label>

                <input
                  id="foto"
                  type="file"
                  accept="image/*"
                  @change="selecionarFoto"
                >

                <button
                  v-if="fotoEditada"
                  type="button"
                  class="btn-remover"
                  @click="removerFoto"
                >
                  Remover foto
                </button>

              </div>

            </div>

            <!-- =================================================
                 FORMULÁRIO
            ================================================== -->

            <form
              class="perfil-form"
              @submit.prevent="salvarPerfil"
            >

              <!-- NOME -->

              <div class="campo">

                <label for="nome">
                  Nome
                </label>

                <input
                  id="nome"
                  v-model="nomeEditado"
                  type="text"
                  placeholder="Digite seu nome"
                  maxlength="100"
                  :disabled="salvando"
                >

              </div>

              <!-- EMAIL -->

              <div class="campo">

                <label for="email">
                  E-mail
                </label>

                <input
                  id="email"
                  type="email"
                  :value="usuario.email"
                  disabled
                >

                <small>
                  O e-mail da conta não pode ser alterado por aqui.
                </small>

              </div>

              <!-- DESCRIÇÃO -->

              <div class="campo">

                <label for="descricao">
                  Sobre você
                </label>

                <textarea
                  id="descricao"
                  v-model="descricaoEditada"
                  placeholder="Conte um pouco sobre você..."
                  maxlength="500"
                  :disabled="salvando"
                ></textarea>

                <small>
                  Essa informação será exibida no seu perfil.
                </small>

              </div>

              <!-- BOTÕES -->

              <div class="acoes-formulario">

                <button
                  type="submit"
                  class="btn-salvar"
                  :disabled="salvando"
                >

                  <span
                    v-if="salvando"
                    class="spinner pequeno"
                  ></span>

                  {{
                    salvando
                      ? 'Salvando...'
                      : 'Salvar alterações'
                  }}

                </button>

                <button
                  type="button"
                  class="btn-cancelar"
                  :disabled="salvando"
                  @click="cancelarEdicao"
                >
                  Cancelar
                </button>

              </div>

            </form>

          </div>

        </article>

      </section>

    </template>

  </main>
</template>

<style scoped>

/* =========================================================
   BASE
========================================================= */

.perfil-page {
  --accent: #135F7D;
  --accent-dark: #0E4A62;
  --accent-soft: #DCEBF0;

  --cream: #F4E6CC;

  --surface: #FFFFFF;
  --surface-soft: #FAFAF8;

  --text: #222222;
  --muted: #666666;
  --light: #8A8A8A;

  --border: #D8D0C2;

  --success: #3F7D45;
  --error: #B91C1C;

  min-height: 100vh;

  padding: 45px 30px 80px;

  background:
    linear-gradient(
      180deg,
      #FFFFFF 0%,
      #F7F8F8 100%
    );

  color: var(--text);

  font-family:
    "Josefin Sans",
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  animation: entrada 0.5s ease;
}

.perfil-page *,
.perfil-page *::before,
.perfil-page *::after {
  box-sizing: border-box;
}

@keyframes entrada {
  from {
    opacity: 0;
    transform: translateY(12px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}


/* =========================================================
   CARREGANDO
========================================================= */

.estado-carregando {
  min-height: 70vh;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 15px;

  color: var(--muted);
}

.spinner {
  width: 38px;
  height: 38px;

  border: 4px solid var(--accent-soft);
  border-top-color: var(--accent);

  border-radius: 50%;

  animation: girar 0.7s linear infinite;
}

.spinner.pequeno {
  width: 17px;
  height: 17px;

  border-width: 2px;

  border-color: rgba(255,255,255,0.35);
  border-top-color: white;
}

@keyframes girar {
  to {
    transform: rotate(360deg);
  }
}


/* =========================================================
   ESTADO DE ERRO
========================================================= */

.estado-erro {
  min-height: 70vh;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  text-align: center;
}

.estado-erro-icon {
  width: 55px;
  height: 55px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 15px;

  border-radius: 50%;

  background: #fef2f2;
  color: var(--error);

  font-size: 1.5rem;
  font-weight: 800;
}

.estado-erro h2 {
  margin: 0 0 8px;

  font-size: 1.5rem;
}

.estado-erro p {
  max-width: 450px;

  margin: 0 0 20px;

  color: var(--muted);
}

.btn-tentar {
  padding: 12px 24px;

  border: 2px solid var(--accent);
  border-radius: 30px;

  background: var(--accent);
  color: white;

  font-family: inherit;
  font-weight: 700;

  cursor: pointer;
}


/* =========================================================
   HEADER
========================================================= */

.perfil-header {
  width: min(1100px, 100%);

  margin: 0 auto 35px;
}

.btn-voltar {
  display: inline-flex;
  align-items: center;

  gap: 8px;

  padding: 9px 18px;
  margin-bottom: 30px;

  background: transparent;
  color: var(--accent);

  border: 2px solid var(--accent);
  border-radius: 30px;

  font-family: inherit;
  font-size: 1rem;
  font-weight: 700;

  cursor: pointer;

  transition: 0.25s ease;
}

.btn-voltar span {
  font-size: 1.2rem;

  transition: transform 0.25s ease;
}

.btn-voltar:hover {
  background: var(--accent);
  color: white;

  transform: translateX(-2px);
}

.btn-voltar:hover span {
  transform: translateX(-3px);
}

.header-label {
  display: block;

  margin-bottom: 8px;

  color: var(--accent);

  font-size: 0.78rem;
  font-weight: 700;

  letter-spacing: 2px;
}

.header-content h1 {
  margin: 0;

  font-size: clamp(2.3rem, 5vw, 3.5rem);

  line-height: 1.05;
}

.header-content p {
  max-width: 600px;

  margin: 15px 0 0;

  color: var(--muted);

  font-size: 1.05rem;
  line-height: 1.6;
}


/* =========================================================
   MENSAGENS
========================================================= */

.mensagem-sucesso,
.mensagem-erro {
  width: min(1100px, 100%);

  display: flex;
  align-items: center;

  gap: 10px;

  margin: 0 auto 25px;

  padding: 13px 16px;

  border-radius: 14px;

  font-size: 0.9rem;
  font-weight: 600;
}

.mensagem-sucesso {
  background: #f0fdf4;

  border: 2px solid #bbf7d0;

  color: var(--success);
}

.mensagem-erro {
  background: #fef2f2;

  border: 2px solid #fecaca;

  color: var(--error);
}

.mensagem-sucesso span,
.mensagem-erro span {
  width: 23px;
  height: 23px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border-radius: 50%;

  background: currentColor;
  color: white;

  font-size: 0.75rem;
}


/* =========================================================
   PERFIL
========================================================= */

.perfil-area {
  width: min(1100px, 100%);

  margin: 0 auto;
}

.perfil-card {
  overflow: hidden;

  background: var(--surface);

  border: 1px solid var(--border);
  border-radius: 24px;

  box-shadow:
    0 15px 40px rgba(0, 0, 0, 0.07);
}


/* =========================================================
   BANNER
========================================================= */

.perfil-banner {
  position: relative;

  width: 100%;
  height: 250px;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  overflow: hidden;
}

.perfil-banner::after {
  content: "";

  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.02),
      rgba(0, 0, 0, 0.18)
    );
}

.perfil-banner.sem-banner {
  background:
    linear-gradient(
      135deg,
      var(--accent),
      var(--accent-dark)
    );
}

.banner-placeholder {
  position: absolute;

  inset: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  color: rgba(255, 255, 255, 0.8);
}

.banner-placeholder span {
  position: relative;

  z-index: 2;

  font-size: 1.2rem;
  font-weight: 600;

  letter-spacing: 2px;
}


/* =========================================================
   PRINCIPAL
========================================================= */

.perfil-principal {
  display: grid;

  grid-template-columns: 250px 1fr;

  gap: 50px;

  align-items: center;

  padding: 45px 55px 50px;
}

.foto-wrapper {
  display: flex;

  justify-content: center;
}

.foto-perfil {
  width: 210px;
  height: 210px;

  display: flex;

  align-items: center;
  justify-content: center;

  overflow: hidden;

  background: var(--accent-soft);

  border: 7px solid var(--surface);

  border-radius: 50%;

  box-shadow:
    0 0 0 5px var(--accent),
    0 15px 30px rgba(0, 0, 0, 0.14);
}

.foto-perfil img {
  width: 100%;
  height: 100%;

  object-fit: cover;
}

.foto-perfil svg {
  width: 85px;
  height: 85px;

  color: var(--accent);
}


/* =========================================================
   DADOS
========================================================= */

.dados-perfil {
  min-width: 0;
}

.perfil-tag {
  color: var(--accent);

  font-size: 0.78rem;
  font-weight: 700;

  letter-spacing: 2px;
}

.dados-perfil h2 {
  margin: 9px 0 4px;

  font-size: clamp(2rem, 4vw, 3rem);

  line-height: 1.1;

  word-break: break-word;
}

.email-perfil {
  margin: 0;

  color: var(--accent);

  font-size: 1rem;
  font-weight: 600;

  word-break: break-word;
}

.descricao-perfil {
  max-width: 620px;

  margin: 20px 0 27px;

  color: var(--muted);

  font-size: 1.05rem;

  line-height: 1.7;
}

.btn-editar {
  padding: 13px 28px;

  background: var(--accent);
  color: white;

  border: 2px solid var(--accent);

  border-radius: 30px;

  font-family: inherit;

  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;

  transition: 0.25s ease;
}

.btn-editar:hover {
  background: var(--cream);
  color: var(--accent);

  transform: translateY(-3px);

  box-shadow:
    0 8px 20px rgba(19, 95, 125, 0.14);
}


/* =========================================================
   INFORMAÇÕES
========================================================= */

.informacoes-conta {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  border-top: 1px solid var(--border);
}

.informacao {
  min-height: 100px;

  display: flex;
  flex-direction: column;

  justify-content: center;

  gap: 7px;

  padding: 20px 30px;
}

.informacao + .informacao {
  border-left: 1px solid var(--border);
}

.informacao span {
  color: var(--light);

  font-size: 0.82rem;
  font-weight: 600;
}

.informacao strong {
  color: var(--text);

  font-size: 1rem;

  word-break: break-word;
}

.informacao .status-ativo {
  color: var(--success);
}


/* =========================================================
   EDIÇÃO
========================================================= */

.edicao-area {
  width: min(850px, 100%);

  margin: 0 auto;
}

.edicao-card {
  overflow: hidden;

  background: var(--surface);

  border: 1px solid var(--border);

  border-radius: 24px;

  box-shadow:
    0 15px 40px rgba(0, 0, 0, 0.07);
}

.edicao-header {
  padding: 35px 45px;

  background: var(--surface-soft);

  border-bottom: 1px solid var(--border);
}

.edicao-header h2 {
  margin: 5px 0 8px;

  font-size: 2rem;
}

.edicao-header p {
  margin: 0;

  color: var(--muted);

  font-size: 1rem;

  line-height: 1.5;
}

.edicao-conteudo {
  padding: 40px 45px 45px;
}


/* =========================================================
   BANNER EDITOR
========================================================= */

.banner-editor {
  margin-bottom: 35px;
}

.banner-preview {
  width: 100%;
  height: 190px;

  display: flex;

  align-items: center;
  justify-content: center;

  margin-bottom: 15px;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  background-color: var(--accent-soft);

  border: 2px solid var(--border);

  border-radius: 16px;

  overflow: hidden;

  color: var(--muted);
}

.banner-preview.sem-banner {
  background:
    linear-gradient(
      135deg,
      var(--accent),
      var(--accent-dark)
    );

  color: white;
}

.banner-acoes {
  display: flex;

  align-items: center;

  flex-wrap: wrap;

  gap: 10px;
}

.banner-acoes input[type="file"] {
  display: none;
}


/* =========================================================
   FOTO EDITOR
========================================================= */

.foto-editor {
  display: flex;

  align-items: center;

  gap: 25px;

  padding: 25px;

  margin-bottom: 35px;

  background: var(--surface-soft);

  border: 1px solid var(--border);

  border-radius: 18px;
}

.foto-editavel {
  flex-shrink: 0;

  width: 120px;
  height: 120px;

  display: flex;

  align-items: center;
  justify-content: center;

  overflow: hidden;

  background: var(--accent-soft);

  border: 5px solid var(--accent);

  border-radius: 50%;
}

.foto-editavel img {
  width: 100%;
  height: 100%;

  object-fit: cover;
}

.foto-editavel svg {
  width: 55px;
  height: 55px;

  color: var(--accent);
}

.foto-opcoes {
  display: flex;

  align-items: center;

  flex-wrap: wrap;

  gap: 10px;
}

.foto-opcoes span {
  width: 100%;

  margin-bottom: 2px;

  color: var(--text);

  font-size: 0.95rem;
  font-weight: 600;
}

.foto-opcoes input[type="file"] {
  display: none;
}


/* =========================================================
   BOTÕES DE IMAGEM
========================================================= */

.btn-escolher {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  padding: 10px 18px;

  background: var(--accent);
  color: white;

  border: 2px solid var(--accent);

  border-radius: 30px;

  font-family: inherit;

  font-size: 0.9rem;
  font-weight: 600;

  cursor: pointer;

  transition: 0.25s ease;
}

.btn-escolher:hover {
  background: var(--cream);
  color: var(--accent);
}

.btn-remover {
  padding: 9px 16px;

  background: white;
  color: var(--accent);

  border: 2px solid var(--accent);

  border-radius: 30px;

  font-family: inherit;

  font-size: 0.9rem;
  font-weight: 600;

  cursor: pointer;

  transition: 0.25s ease;
}

.btn-remover:hover {
  background: var(--accent);
  color: white;
}


/* =========================================================
   FORM
========================================================= */

.perfil-form {
  display: flex;

  flex-direction: column;

  gap: 24px;
}

.campo {
  display: flex;

  flex-direction: column;

  gap: 8px;
}

.campo label {
  color: var(--text);

  font-size: 0.95rem;
  font-weight: 600;
}

.campo input,
.campo textarea {
  width: 100%;

  padding: 14px 16px;

  background: white;
  color: var(--text);

  border: 2px solid var(--border);

  border-radius: 14px;

  outline: none;

  font-family: inherit;
  font-size: 1rem;

  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.campo input {
  min-height: 50px;
}

.campo textarea {
  min-height: 145px;

  resize: vertical;

  line-height: 1.6;
}

.campo input:hover,
.campo textarea:hover {
  border-color: #B9B0A1;
}

.campo input:focus,
.campo textarea:focus {
  border-color: var(--accent);

  box-shadow:
    0 0 0 4px rgba(19, 95, 125, 0.10);
}

.campo input:disabled {
  background: #F0F0F0;

  color: #777;

  border-color: #D0D0D0;

  cursor: not-allowed;
}

.campo small {
  color: var(--light);

  font-size: 0.82rem;
}


/* =========================================================
   AÇÕES
========================================================= */

.acoes-formulario {
  display: flex;

  gap: 12px;

  padding-top: 8px;
}

.btn-salvar,
.btn-cancelar {
  min-height: 48px;

  padding: 12px 25px;

  border-radius: 30px;

  font-family: inherit;

  font-size: 0.95rem;
  font-weight: 600;

  cursor: pointer;

  transition: 0.25s ease;
}

.btn-salvar {
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 8px;

  background: var(--accent);
  color: white;

  border: 2px solid var(--accent);
}

.btn-salvar:hover:not(:disabled) {
  background: var(--cream);
  color: var(--accent);

  transform: translateY(-2px);
}

.btn-cancelar {
  background: transparent;

  color: var(--accent);

  border: 2px solid var(--accent);
}

.btn-cancelar:hover:not(:disabled) {
  background: var(--accent);

  color: white;
}

.btn-salvar:disabled,
.btn-cancelar:disabled {
  opacity: 0.6;

  cursor: not-allowed;
}


/* =========================================================
   TRANSIÇÕES
========================================================= */

.feedback-enter-active,
.feedback-leave-active {
  transition: 0.25s ease;
}

.feedback-enter-from,
.feedback-leave-to {
  opacity: 0;

  transform: translateY(-5px);
}


/* =========================================================
   FOCO
========================================================= */

button:focus-visible,
label:focus-visible,
input:focus-visible,
textarea:focus-visible {
  outline: 3px solid rgba(19, 95, 125, 0.20);

  outline-offset: 3px;
}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 900px) {

  .perfil-page {
    padding: 35px 20px 60px;
  }

  .perfil-principal {
    grid-template-columns: 200px 1fr;

    gap: 35px;

    padding: 40px;
  }

  .foto-perfil {
    width: 175px;
    height: 175px;
  }

  .informacoes-conta {
    grid-template-columns: 1fr;
  }

  .informacao {
    min-height: 75px;

    align-items: center;

    text-align: center;
  }

  .informacao + .informacao {
    border-left: none;

    border-top: 1px solid var(--border);
  }
}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 650px) {

  .perfil-page {
    padding: 25px 15px 45px;
  }

  .perfil-header {
    margin-bottom: 25px;
  }

  .btn-voltar {
    margin-bottom: 25px;
  }

  .perfil-banner {
    height: 180px;
  }

  .perfil-principal {
    display: flex;

    flex-direction: column;

    gap: 25px;

    padding: 35px 25px 40px;

    text-align: center;
  }

  .foto-perfil {
    width: 155px;
    height: 155px;
  }

  .dados-perfil {
    width: 100%;
  }

  .descricao-perfil {
    margin-left: auto;
    margin-right: auto;
  }

  .btn-editar {
    width: 100%;
  }

  .edicao-header {
    padding: 30px 25px;
  }

  .edicao-conteudo {
    padding: 30px 25px;
  }

  .foto-editor {
    flex-direction: column;

    text-align: center;
  }

  .foto-opcoes {
    justify-content: center;
  }

  .banner-acoes {
    justify-content: center;
  }

  .acoes-formulario {
    flex-direction: column;
  }

  .btn-salvar,
  .btn-cancelar {
    width: 100%;
  }
}


/* =========================================================
   MOBILE PEQUENO
========================================================= */

@media (max-width: 430px) {

  .perfil-page {
    padding: 20px 12px 35px;
  }

  .header-content h1 {
    font-size: 2.2rem;
  }

  .header-content p {
    font-size: 0.95rem;
  }

  .perfil-banner {
    height: 150px;
  }

  .perfil-principal {
    padding: 30px 18px 35px;
  }

  .foto-perfil {
    width: 135px;
    height: 135px;
  }

  .dados-perfil h2 {
    font-size: 1.9rem;
  }

  .descricao-perfil {
    font-size: 0.95rem;
  }

  .edicao-header {
    padding: 25px 20px;
  }

  .edicao-conteudo {
    padding: 25px 18px;
  }

  .banner-preview {
    height: 130px;
  }

  .banner-acoes,
  .foto-opcoes {
    flex-direction: column;

    align-items: stretch;
  }

  .btn-escolher,
  .btn-remover {
    width: 100%;

    text-align: center;
  }

  .foto-editor {
    padding: 20px 15px;
  }
}


/* =========================================================
   REDUZIR ANIMAÇÕES
========================================================= */

@media (prefers-reduced-motion: reduce) {

  .perfil-page {
    animation: none;
  }

  * {
    transition: none !important;
  }
}
</style>
