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
  <main class="pagina">

    <div class="flecha">
      <RouterLink to="/cursos">
        <fa icon="arrow-left" />
        Voltar
      </RouterLink>
    </div>

    <section class="cabecalho">

      <span class="categoria">
        CURSO DE QUÍMICA
      </span>

      <h1>
        Descubra a química
        <span>ao seu redor</span>
      </h1>

      <p>
        Aprenda os principais conceitos da química
        através das aulas e acompanhe seu progresso.
      </p>

    </section>


    <section class="progresso-container">

      <div class="progresso-topo">

        <div>
          <span class="progresso-titulo">
            Progresso do curso
          </span>

          <p>
            {{ videosAssistidos.length }} de 4 vídeos concluídos
          </p>
        </div>

        <strong>
          {{ progresso }}%
        </strong>

      </div>

      <div class="barra">
        <div class="barra-preenchida" :style="{ width: progresso + '%' }"></div>
      </div>

    </section>


    <section class="aulas">

      <div class="titulo-aulas">

        <div>
          <span>AULAS</span>

          <h2>
            Conteúdo do curso
          </h2>
        </div>

        <p>
          4 aulas
        </p>

      </div>


      <div class="video-container">

        <article class="video-card">

          <div class="numero">01</div>

          <div class="video">

            <video controls src="/public/videos/quimi1.mp4" @ended="marcarComoAssistido(1)"></video>

          </div>

          <div class="video-info">

            <span class="aula-label">
              AULA 01
            </span>

            <h3>
              Introdução à Química
            </h3>

            <p>
              Conheça os principais conceitos e fundamentos da química.
            </p>

            <span v-if="videosAssistidos.includes(1)" class="concluido">
              ✓ Concluído
            </span>

          </div>

        </article>


        <article class="video-card">

          <div class="numero">02</div>

          <div class="video">

            <video controls src="/public/videos/quimi2.mp4" @ended="marcarComoAssistido(2)"></video>

          </div>

          <div class="video-info">

            <span class="aula-label">
              AULA 02
            </span>

            <h3>
              Conceitos de Química
            </h3>

            <p>
              Continue seus estudos conhecendo novos conceitos químicos.
            </p>

            <span v-if="videosAssistidos.includes(2)" class="concluido">
              ✓ Concluído
            </span>

          </div>

        </article>


        <article class="video-card">

          <div class="numero">03</div>

          <div class="video">

            <video controls src="/public/videos/quimi2.mp4" @ended="marcarComoAssistido(3)"></video>

          </div>

          <div class="video-info">

            <span class="aula-label">
              AULA 03
            </span>

            <h3>
              Química na prática
            </h3>

            <p>
              Explore novos conteúdos e aplicações da química.
            </p>

            <span v-if="videosAssistidos.includes(3)" class="concluido">
              ✓ Concluído
            </span>

          </div>

        </article>


        <article class="video-card">

          <div class="numero">04</div>

          <div class="video">

            <video controls src="/public/videos/quimi1.mp4" @ended="marcarComoAssistido(4)"></video>

          </div>

          <div class="video-info">

            <span class="aula-label">
              AULA 04
            </span>

            <h3>
              Revisão de Química
            </h3>

            <p>
              Revise os conteúdos apresentados durante o curso.
            </p>

            <span v-if="videosAssistidos.includes(4)" class="concluido">
              ✓ Concluído
            </span>

          </div>

        </article>

      </div>

    </section>

  </main>
</template>


<style scoped>
:global(*) {
  box-sizing: border-box;
}

:global(body) {
  margin: 0;
  min-height: 100vh;
}



.pagina {
  width: 100%;
  min-height: 100vh;

  padding: 2rem 4rem 5rem;

  color: white;

  background:
    radial-gradient(circle at 10% 10%,
      rgba(180, 24, 37, 0.35),
      transparent 35%),
    radial-gradient(circle at 90% 20%,
      rgba(87, 15, 10, 0.25),
      transparent 30%),
    linear-gradient(135deg,
      #1d0404 0%,
      #440f0f 45%,
      #971920 100%);

  background-attachment: fixed;
}



.flecha {
  width: min(1200px, 100%);
  margin: 0 auto 4rem;
}

.flecha a {
  color: white;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  opacity: 0.85;
  transition: 0.3s;
}

.flecha a:hover {
  opacity: 1;
  transform: translateX(-4px);
}



.cabecalho {
  width: min(1200px, 100%);
  margin: 0 auto 3rem;
}

.categoria {
  color: #ff020f;
  font-size: 0.75rem;
  font-weight: bold;
  letter-spacing: 2px;
}

.cabecalho h1 {
  max-width: 700px;
  margin: 12px 0;
  font-size: clamp(2.3rem, 5vw, 4rem);
  line-height: 1.05;
}

.cabecalho h1 span {
  color: #ff0000;
}

.cabecalho p {
  max-width: 600px;
  color: #bcb8ca;
  line-height: 1.6;
}



.progresso-container {
  width: min(1200px, 100%);
  margin: 0 auto 4rem;
  padding: 1.5rem 2rem;
  border: 1px solid rgba(255, 0, 0, 0.12);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
}

.progresso-topo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.progresso-titulo {
  font-weight: bold;
}

.progresso-topo p {
  margin: 5px 0 0;
  color: #aaa5b8;
  font-size: 0.85rem;
}

.progresso-topo strong {
  color: #ff0000;

  font-size: 1.5rem;
}

.barra {
  width: 100%;
  height: 10px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  overflow: hidden;
}

.barra-preenchida {
  height: 100%;
  background: linear-gradient(90deg,
      #680606,
      #d60707);
  border-radius: 20px;
  transition: 0.5s;
}



.aulas {
  width: min(1200px, 100%);
  margin: 0 auto;
}

.titulo-aulas {
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 2rem;
}

.titulo-aulas span {
  color: #fd0303;
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 2px;
}

.titulo-aulas h2 {
  margin: 7px 0 0;
  font-size: 3rem;
}

.titulo-aulas p {
  color: #aaa5b8;
}



.video-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 30px;
}



.video-card {
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  background: rgba(196, 12, 12, 0.781);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
  transition: 0.3s;
}


.video-card:hover {
  transform: translateY(-5px);
  background: rgb(83, 4, 4);
}

.numero {
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 2;
  padding: 7px 12px;
  border-radius: 20px;
  background: rgba(53, 7, 7, 0.8);
  font-size: 0.75rem;
  font-weight: bold;
}

.video {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #290cd1;
}

.video video {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.video-info {
  padding: 1.4rem 1.5rem 1.5rem;
}

.aula-label {
  color: #ff0000;
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 1px;
}
.video-info:hover .aula-label {
  color: #ff0000;
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 1px;
  transition: 0.4s;
}

.video-info h3 {
  margin: 8px 0;
  color: rgb(255, 255, 255);

}
.video-info:hover h3 {
  margin: 8px 0;
  font-size: 1.2rem;
  color: rgb(255, 255, 255);
  transition: 0.4s;

}

.video-info p {
  color: #b9b9b9;
  font-size: 0.85rem;
  line-height: 1.5;
}
.video-info:hover p {
  color: #b9b9b9;
  font-size: 0.95rem;
  line-height: 1.5;
  transition: 0.4s;

}

.concluido {
  color: #42b883;
  font-size: 0.75rem;
  font-weight: bold;
}


@media (max-width: 800px) {

  .pagina {
    padding: 1.5rem;
  }

  .video-container {
    grid-template-columns: 1fr;
  }

}


@media (max-width: 500px) {

  .pagina {
    padding: 1.5rem 1rem;
  }

  .progresso-container {
    padding: 1.2rem;
  }

  .titulo-aulas {
    flex-direction: column;

    align-items: flex-start;

    gap: 10px;
  }

}
</style>
