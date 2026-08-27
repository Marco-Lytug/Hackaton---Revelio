<script setup>
import { RouterLink } from 'vue-router'
import { ref, computed } from 'vue'

const videosAssistidos = ref(
  JSON.parse(localStorage.getItem('videosAssistidos')) || []
)

const marcarComoAssistido = (numero) => {
  if (!videosAssistidos.value.includes(numero)) {
    videosAssistidos.value.push(numero)

    localStorage.setItem(
      'videosAssistidos',
      JSON.stringify(videosAssistidos.value)
    )
  }
}

const progresso = computed(() => {
  return (videosAssistidos.value.length / 4) * 100
})
</script>

<template>

  <div class="flecha">
    <RouterLink to="/cursos">
      <fa icon="arrow-left" /> Voltar
    </RouterLink>
  </div>

  <section class="principal">

    <div class="progresso-container">

      <div class="progresso-info">
        <span>Progresso do curso</span>
        <span>{{ progresso }}%</span>
      </div>

      <div class="barra">
        <div
          class="barra-preenchida"
          :style="{ width: progresso + '%' }"
        ></div>
      </div>

      <p>
        {{ videosAssistidos.length }} de 4 vídeos concluídos
      </p>

    </div>


    <!-- VÍDEOS -->
    <div class="video-container">

      <div class="video">
        <h3>SQL com MySQL</h3>
        <video
          controls
          src="/videos/Curso de SQL com MySQL - Diagrama Entidade Relacionamento (DER) - Aula 1.mp4"
          @ended="marcarComoAssistido(1)"
        ></video>

      </div>


      <div class="video">
        <h3>HTML</h3>
        <video
          controls
          src="/videos/html.mp4"
          @ended="marcarComoAssistido(2)"
        ></video>

      </div>


      <div class="video">
        <h3>Django</h3>
        <video
          controls
          src="/videos/django.mp4"
          @ended="marcarComoAssistido(3)"
        ></video>

      </div>


      <div class="video">
        <h3>Vue 3</h3>
        <video
          controls
          src="/videos/vue3.mp4"
          @ended="marcarComoAssistido(4)"
        ></video>

      </div>

    </div>

  </section>

</template>

<style scoped>

.flecha {
  position: absolute;
  top: 5rem;
  left: 5rem;
  font-size: 1.4rem;
  font-weight: 550;
}

a {
  color: black;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
}

.principal {
  width: min(100%, 1000px);
  margin: 8rem auto 0;
  padding: 0 1.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 30vw;
}

.progresso-container {
  width: min(100%, 1000px);
  margin: 0 auto 3rem;
}

.progresso-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-weight: bold;
}

.barra {
  width: 100%;
  height: 20px;
  background-color: #ddd;
  border-radius: 10px;
  overflow: hidden;
}

.barra-preenchida {
  height: 100%;
  background-color: #42b883;
  border-radius: 10px;
  transition: width 0.5s ease;
}

.progresso-container p {
  margin-top: 8px;
}

.video-container {
  width: min(100%, 1500px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(220px, 1fr));
  gap: 30px;
  justify-items: center;
}

.video {
  width: 100%;
  max-width: 540px;
  text-align: center;
}

.video video {
  width: 100%;
  display: block;
  border-radius: 8px;
}

.video h3 {
  margin-top: 10px;
}

@media (max-width: 700px) {
  .video-container {
    grid-template-columns: 1fr;
  }
}

</style>
