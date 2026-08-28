<script setup>
import { RouterLink } from 'vue-router'
import { ref, computed } from 'vue'

const CHAVE_STORAGE = 'videosAssistidos_quimica'

const videosAssistidos = ref(
  JSON.parse(localStorage.getItem(CHAVE_STORAGE)) || []
)

const marcarComoAssistido = (numero) => {
  if (!videosAssistidos.value.includes(numero)) {
    videosAssistidos.value.push(numero)

    localStorage.setItem(
      CHAVE_STORAGE,
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


    <div class="video-container">

      <div class="video">
        <h3></h3>
        <video
          controls
          src="/public/videos/quimi1.mp4"
          @ended="marcarComoAssistido(1)"
        ></video>

      </div>


      <div class="video">
        <h3></h3>
        <video
          controls
          src="/public/videos/quimi2.mp4"
          @ended="marcarComoAssistido(2)"
        ></video>

      </div>


      <div class="video">
        <h3></h3>
        <video
          controls
          src="#"
          @ended="marcarComoAssistido(3)"
        ></video>

      </div>


      <div class="video">
        <h3></h3>
        <video
          controls
          src="#"
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
  background: #135F7D;
  background: linear-gradient(152deg, rgba(19, 95, 125, 1) 0%, rgba(130, 185, 207, 1) 50%, rgba(255, 255, 255, 1) 100%);
  padding: 2vw 4vw 2vw 4vw;
  border-radius: 15px;
  border: 2px solid #000000;
  box-shadow: 5px 10px 18px rgba(8, 8, 8, 0.425);
}

.progresso-container {
  width: min(100%, 1000px);
  margin: 0 auto 3rem;
  border: 2px rgb(185, 185, 185) solid;
  padding: 0.5vw 2vw 0.5vw 2vw;
  border-radius: 15px;
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
  margin-bottom: 30px;
  font-weight: bold;
  color: #313131;
}

@media (max-width: 700px) {
  .video-container {
    grid-template-columns: 1fr;
  }
}

</style>
