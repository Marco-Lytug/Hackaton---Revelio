<script setup>
import { RouterLink } from 'vue-router'
import { ref, computed } from 'vue'

const CHAVE_STORAGE = 'videosAssistidos_agro'

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
        CURSO DE AGRONEGÓCIO
      </span>

      <h1>
        Aprenda sobre o campo
        <span>e o agronegócio</span>
      </h1>

      <p>
        Conheça conceitos importantes do setor agrícola
        e acompanhe seu progresso durante o curso.
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

        <div
          class="barra-preenchida"
          :style="{ width: progresso + '%' }"
        ></div>

      </div>

    </section>


    <section class="aulas">

      <div class="titulo-aulas">

        <div>

          <span>
            AULAS
          </span>

          <h2>
            Conteúdo do curso
          </h2>

        </div>

        <p>
          4 aulas
        </p>

      </div>


      <div class="video-container">


        <!-- AULA 1 -->

        <article class="video-card">

          <div class="numero">
            01
          </div>

          <div class="video">

            <video
              controls
              src="/public/videos/agro1.mp4"
              @ended="marcarComoAssistido(1)"
            ></video>

          </div>

          <div class="video-info">

            <span class="aula-label">
              AULA 01
            </span>

            <h3>
              Introdução ao Agronegócio
            </h3>

            <p>
              Conheça os principais conceitos relacionados ao agronegócio.
            </p>

            <span
              v-if="videosAssistidos.includes(1)"
              class="concluido"
            >
              ✓ Concluído
            </span>

          </div>

        </article>


        <!-- AULA 2 -->

        <article class="video-card">

          <div class="numero">
            02
          </div>

          <div class="video">

            <video
              controls
              src="/public/videos/agro2.mp4"
              @ended="marcarComoAssistido(2)"
            ></video>

          </div>

          <div class="video-info">

            <span class="aula-label">
              AULA 02
            </span>

            <h3>
              Produção Agrícola
            </h3>

            <p>
              Conheça aspectos importantes da produção agrícola.
            </p>

            <span
              v-if="videosAssistidos.includes(2)"
              class="concluido"
            >
              ✓ Concluído
            </span>

          </div>

        </article>


        <!-- AULA 3 -->

        <article class="video-card">

          <div class="numero">
            03
          </div>

          <div class="video">

            <video
              controls
              src="/public/videos/agro3.mp4"
              @ended="marcarComoAssistido(3)"
            ></video>

          </div>

          <div class="video-info">

            <span class="aula-label">
              AULA 03
            </span>

            <h3>
              Tecnologia no Campo
            </h3>

            <p>
              Veja como a tecnologia pode ser aplicada no setor agrícola.
            </p>

            <span
              v-if="videosAssistidos.includes(3)"
              class="concluido"
            >
              ✓ Concluído
            </span>

          </div>

        </article>


        <!-- AULA 4 -->

        <article class="video-card">

          <div class="numero">
            04
          </div>

          <div class="video">

            <video
              controls
              src="/public/videos/agro4.mp4"
              @ended="marcarComoAssistido(4)"
            ></video>

          </div>

          <div class="video-info">

            <span class="aula-label">
              AULA 04
            </span>

            <h3>
              Futuro do Agronegócio
            </h3>

            <p>
              Conheça tendências e novas possibilidades para o setor.
            </p>

            <span
              v-if="videosAssistidos.includes(4)"
              class="concluido"
            >
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


/* FUNDO SOMENTE DA PÁGINA AGRO */

.pagina {
  width: 100%;

  min-height: 100vh;

  padding: 2rem 4rem 5rem;

  color: white;

  background:
    radial-gradient(
      circle at 10% 10%,
      rgba(74,120,52,0.35),
      transparent 35%
    ),
    radial-gradient(
      circle at 90% 20%,
      rgba(139,111,58,0.25),
      transparent 30%
    ),
    linear-gradient(
      135deg,
      #101c15 0%,
      #193526 45%,
      #26351d 100%
    );

  background-attachment: fixed;
}


/* VOLTAR */

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


/* CABEÇALHO */

.cabecalho {
  width: min(1200px, 100%);

  margin: 0 auto 3rem;
}

.categoria {
  color: #7fbd58;

  font-size: 0.75rem;

  font-weight: bold;

  letter-spacing: 2px;
}

.cabecalho h1 {
  max-width: 700px;

  margin: 12px 0;

  font-size: clamp(2.3rem, 5vw, 4rem);

  line-height: 1.05;

  font-weight: 800;
}

.cabecalho h1 span {
  color: #8bc34a;
}

.cabecalho p {
  max-width: 600px;

  color: #b8c2b7;

  font-size: 1rem;

  line-height: 1.6;
}


/* PROGRESSO */

.progresso-container {
  width: min(1200px, 100%);

  margin: 0 auto 4rem;

  padding: 1.5rem 2rem;

  border: 1px solid rgba(255,255,255,0.12);

  border-radius: 18px;

  background: rgba(255,255,255,0.06);

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

  color: #aab5a8;

  font-size: 0.85rem;
}

.progresso-topo strong {
  color: #8bc34a;

  font-size: 1.5rem;
}

.barra {
  width: 100%;

  height: 10px;

  background: rgba(255,255,255,0.12);

  border-radius: 20px;

  overflow: hidden;
}

.barra-preenchida {
  height: 100%;

  background: linear-gradient(
    90deg,
    #4d8b36,
    #9ccc65
  );

  border-radius: 20px;

  transition: 0.5s;
}


/* AULAS */

.aulas {
  width: min(1200px, 100%);

  margin: 0 auto;
}

.titulo-aulas {
  display: flex;

  align-items: end;

  justify-content: space-between;

  margin-bottom: 2rem;
}

.titulo-aulas span {
  color: #7fbd58;

  font-size: 0.7rem;

  font-weight: bold;

  letter-spacing: 2px;
}

.titulo-aulas h2 {
  margin: 7px 0 0;

  font-size: 2rem;
}

.titulo-aulas p {
  color: #aab5a8;
}


/* GRID */

.video-container {
  width: 100%;

  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 30px;
}


/* CARDS */

.video-card {
  position: relative;

  overflow: hidden;

  border-radius: 18px;

  background: rgba(255,255,255,0.07);

  border: 1px solid rgba(255,255,255,0.1);

  box-shadow: 0 15px 35px rgba(0,0,0,0.3);

  transition: 0.3s;
}

.video-card:hover {
  transform: translateY(-5px);

  background: rgba(255,255,255,0.1);
}

.numero {
  position: absolute;

  top: 15px;
  left: 15px;

  z-index: 2;

  padding: 7px 12px;

  border-radius: 20px;

  background: rgba(12,28,18,0.85);

  font-size: 0.75rem;

  font-weight: bold;
}

.video {
  width: 100%;

  aspect-ratio: 16 / 9;

  background: #0b120d;
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
  color: #8bc34a;

  font-size: 0.7rem;

  font-weight: bold;

  letter-spacing: 1px;
}

.video-info h3 {
  margin: 8px 0;

  color: white;
}

.video-info p {
  color: #aab5a8;

  font-size: 0.85rem;

  line-height: 1.5;
}

.concluido {
  color: #9ccc65;

  font-size: 0.75rem;

  font-weight: bold;
}


/* RESPONSIVO */

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
