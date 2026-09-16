```vue
<script setup>

import { ref } from 'vue'

import { useRouter } from 'vue-router'

const router = useRouter()

const usuarioSalvo = JSON.parse(localStorage.getItem('usuarioRevelio'))

const usuario = ref({
  ...usuarioSalvo,
  nome: usuarioSalvo?.nome || '',
  username: usuarioSalvo?.email || '',
  descricao: usuarioSalvo?.descricao || '',
  foto: usuarioSalvo?.foto || ''
  })

const editando = ref(false)

const nomeEditado = ref('')
const descricaoEditada = ref('')
const fotoEditada = ref('')

function abrirEdicao() {
  nomeEditado.value = usuario.value.nome
  descricaoEditada.value = usuario.value.descricao
  fotoEditada.value = usuario.value.foto
  editando.value = true
}

function removerFoto() {
  fotoEditada.value = ''
}

function salvarPerfil() {
  usuario.value.nome = nomeEditado.value
  usuario.value.descricao = descricaoEditada.value
  usuario.value.foto = fotoEditada.value
  localStorage.setItem(
    'usuarioRevelio',
    JSON.stringify(usuario.value)
  )
  editando.value = false
}

function cancelarEdicao() {
  editando.value = false
}

function voltar() {
  router.back()
}

function selecionarFoto(event) {
  const arquivo = event.target.files[0]
  if (!arquivo) return
  const leitor = new FileReader()
  leitor.onload = () => {
    fotoEditada.value = leitor.result
  }
  leitor.readAsDataURL(arquivo)
}

</script>

<template>
  <main>
    <div class="container-voltar">
      <button class="botao-voltar" @click="voltar">
        ← Voltar
      </button>
    </div>

    <section v-if="!editando">
      <div class="introducao-perfil">
        <h2>Olá, {{ usuario.nome }}!</h2>
        <p>Este é o seu perfil Revelio. Clique em editar caso queira fazer alguma alteração.</p>
      </div>

      <div class="foto-perfil">
        <img
          v-if="usuario.foto"
          :src="usuario.foto"
          :alt="`Foto de perfil de ${usuario.nome}`"
        >

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M17.925 20.056a6 6 0 0 0-11.851.001"/>
          <circle cx="12" cy="11" r="4"/>
          <circle cx="12" cy="12" r="10"/>
        </svg>
      </div>

      <h1>{{ usuario.nome }}</h1>
      <p>@{{ usuario.email }}</p>
      <p>{{ usuario.descricao }}</p>

      <button @click="abrirEdicao">
        Editar perfil
      </button>
    </section>

    <section v-else>
      <h1>Editar perfil</h1>

      <div>
        <img
          v-if="fotoEditada"
          :src="fotoEditada"
          alt="Prévia da foto de perfil"
        >

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M17.925 20.056a6 6 0 0 0-11.851.001"/>
          <circle cx="12" cy="11" r="4"/>
          <circle cx="12" cy="12" r="10"/>
        </svg>

        <input
          type="file"
          accept="image/*"
          @change="selecionarFoto"
        >

        <button
          v-if="fotoEditada"
          type="button"
          class="botao-remover-foto"
          @click="removerFoto"
        >
          Remover foto
        </button>
      </div>

      <div>
        <label for="nome">
          Nome
        </label>

        <input
          id="nome"
          type="text"
          v-model="nomeEditado"
        >
      </div>

      <div class="campo">
        <label for="email">
          Email
        </label>

        <input
          id="email"
          type="email"
          :value="usuario.email"
          disabled
        >
      </div>

      <div>
        <label for="descricao">
          Descrição
        </label>

        <textarea
          id="descricao"
          v-model="descricaoEditada"
        ></textarea>
      </div>

      <button @click="salvarPerfil">
        Salvar alterações
      </button>

      <button @click="cancelarEdicao">
        Cancelar
      </button>
    </section>
  </main>
</template>

<style scoped>

main {
  min-height: 100vh;
  padding: 10vw 5vw;
  background-color: white;
  font-family: "Josefin Sans", sans-serif;
}

main > section:first-of-type {
  width: min(800px, 90%);
  margin: 0 auto;
  padding: 5vw;
  box-sizing: border-box;
  background-color: #F4E6CC;
  border-radius: 4vw;
  text-align: center;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

main > section:last-child svg {
  width: 90px;
  height: 90px;
  color: #135F7D;
}

.introducao-perfil {
  text-align: center;
  margin-bottom: 2rem;
}

.introducao-perfil h2 {
  color: #135F7D;
  font-size: 2.5rem;
  margin: 0 0 0.8rem;
}

.introducao-perfil p {
  color: #555;
  font-size: 1.3rem;
  margin: 0;
}

main > section:first-of-type img {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
  border: 8px solid #135F7D;
  margin-bottom: 1.5rem;
}

main > section:first-of-type h1 {
  color: #135F7D;
  font-size: 3.5rem;
  margin: 0;
  padding: 0;
}

main > section:first-of-type > p {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

main > section:first-of-type > p:nth-of-type(1) {
  color: #555;
  font-size: 1.5rem;
  margin: 0.8rem auto;
}

main > section:first-of-type > p:nth-of-type(2) {
  color: black;
  font-size: 1.5rem;
  max-width: 600px;
  margin: 2rem auto;
  text-align: center;
}

main > section:first-of-type button {
  display: block;
  margin: 0 auto;
}

.foto-perfil {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: white;
  border: 8px solid #135F7D;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #135F7D;
  overflow: hidden;
  margin: 0 auto;
}

.foto-perfil img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.foto-perfil svg {
  width: 90px;
  height: 90px;
}

button {
  background-color: #135F7D;
  color: white;
  border: 5px solid #F4E6CC;
  border-radius: 5vw;
  padding: 1rem 2.5rem;
  font-size: 1.3rem;
  font-family: "Josefin Sans", sans-serif;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background-color: #F4E6CC;
  color: #135F7D;
  border-color: #135F7D;
  transform: translateY(-3px);
}

.botao-remover-foto {
  margin: 0;
  padding: 0.6rem 1.2rem;
  background-color: white;
  color: #135F7D;
  border: 2px solid #135F7D;
  border-radius: 30px;
  font-size: 1rem;
}

.botao-remover-foto:hover {
  margin: 0;
  padding: 0.6rem 1.2rem;
  background-color: #135F7D;
  color: white;
  border-color: #135F7D;
}

main > section:last-child {
  width: min(700px, 90%);
  margin: 0 auto;
  padding: 4vw;
  box-sizing: border-box;
  background-color: #F4E6CC;
  border-radius: 4vw;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

main > section:last-child h1 {
  color: #135F7D;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
}

main > section:last-child > div:first-of-type {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

main > section:last-child img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 6px solid #135F7D;
}

main > section:last-child > div:not(:first-of-type) {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
}

label {
  color: #135F7D;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  border: 3px solid #135F7D;
  border-radius: 15px;
  background-color: white;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.1rem;
  outline: none;
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
  box-shadow: 0 0 0 3px rgba(19, 95, 125, 0.2);
}

input:disabled {
  background-color: #e8e8e8;
  color: #666;
  cursor: not-allowed;
  border-color: #aaa;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

.container-voltar {
  width: min(1300px, 70%);
  margin: 0 auto 2rem;
}

.botao-voltar {
  background-color: transparent;
  color: #135F7D;
  border: 3px solid #135F7D;
  padding: 0.7rem 1.5rem;
  font-size: 1.1rem;
}

.botao-voltar:hover {
  background-color: #135F7D;
  color: white;
  border-color: #135F7D;
}

@media (max-width: 700px) {
  main {
    padding: 25vw 5vw 10vw;
  }

  main > section:first-of-type,
  main > section:last-child {
    padding: 8vw 6vw;
    border-radius: 8vw;
  }

  main > section:first-of-type h1 {
    font-size: 2.5rem;
  }

  main > section:last-child h1 {
    font-size: 2.3rem;
  }

  main > section:first-of-type img {
    width: 140px;
    height: 140px;
  }

  main > section:last-child > button {
    width: 100%;
    margin-bottom: 1rem;
  }

  main > section:last-child > button + button {
    margin-left: 0;
  }
}

</style>