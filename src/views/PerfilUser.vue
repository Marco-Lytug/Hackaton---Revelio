
<script setup>
import { ref } from 'vue'

// Dados do usuário
const usuario = ref({
  nome: 'Nome do Usuário',
  username: 'usuario',
  descricao: 'Essa é a descrição do meu perfil!',
  foto: 'https://via.placeholder.com/150'
})

// Controla se está no modo de edição
const editando = ref(false)

// Dados temporários usados durante a edição
const nomeEditado = ref('')
const usernameEditado = ref('')
const descricaoEditada = ref('')
const fotoEditada = ref('')

// Abre o formulário de edição
function abrirEdicao() {
  nomeEditado.value = usuario.value.nome
  usernameEditado.value = usuario.value.username
  descricaoEditada.value = usuario.value.descricao
  fotoEditada.value = usuario.value.foto

  editando.value = true
}

// Salva as alterações
function salvarPerfil() {
  usuario.value.nome = nomeEditado.value
  usuario.value.username = usernameEditado.value
  usuario.value.descricao = descricaoEditada.value
  usuario.value.foto = fotoEditada.value

  editando.value = false
}

// Cancela as alterações
function cancelarEdicao() {
  editando.value = false
}

// Escolhe uma nova foto
function selecionarFoto(event) {
  const arquivo = event.target.files[0]

  if (!arquivo) return

  fotoEditada.value = URL.createObjectURL(arquivo)
}
</script>


<template>
  <main>

    <!-- ========================= -->
    <!-- VISUALIZAÇÃO DO PERFIL -->
    <!-- ========================= -->

    <section v-if="!editando">

      <img
        :src="usuario.foto"
        :alt="`Foto de perfil de ${usuario.nome}`"
      >

      <h1>{{ usuario.nome }}</h1>

      <p>@{{ usuario.username }}</p>

      <p>{{ usuario.descricao }}</p>

      <button @click="abrirEdicao">
        Editar perfil
      </button>

    </section>


    <!-- ========================= -->
    <!-- EDIÇÃO DO PERFIL -->
    <!-- ========================= -->

    <section v-else>

      <h1>Editar perfil</h1>

      <!-- Foto -->
      <div>
        <img
          :src="fotoEditada"
          alt="Prévia da foto de perfil"
        >

        <input
          type="file"
          accept="image/*"
          @change="selecionarFoto"
        >
      </div>


      <!-- Nome -->
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


      <!-- Username -->
      <div>
        <label for="username">
          Username
        </label>

        <input
          id="username"
          type="text"
          v-model="usernameEditado"
        >
      </div>


      <!-- Descrição -->
      <div>
        <label for="descricao">
          Descrição
        </label>

        <textarea
          id="descricao"
          v-model="descricaoEditada"
        ></textarea>
      </div>


      <!-- Botões -->
      <button @click="salvarPerfil">
        Salvar alterações
      </button>

      <button @click="cancelarEdicao">
        Cancelar
      </button>

    </section>

  </main>
</template>