<script setup>
import { RouterLink } from 'vue-router'
import { ref, computed } from 'vue'

const CHAVE_STORAGE = 'videosAssistidos_programacao'

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
      <div>
        <span class="categoria">
          CURSO DE PROGRAMAÇÃO
        </span>

        <h1>
          Aprenda programação
          <span>do zero</span>
        </h1>

        <p>
          Assista às aulas e acompanhe seu progresso
          enquanto aprende novas tecnologias.
        </p>
      </div>
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

          <div class="numero">
            01
          </div>

          <div class="video">

            <video
              controls
              src="/videos/Curso de SQL com MySQL - Diagrama Entidade Relacionamento (DER) - Aula 1.mp4"
              @ended="marcarComoAssistido(1)"
            ></video>

          </div>

          <div class="video-info">

            <span class="aula-label">
              AULA 01
            </span>

            <h3>
              Diagrama Entidade Relacionamento
            </h3>

            <p>
              Aprenda os conceitos básicos de banco de dados e DER.
            </p>

            <span
              v-if="videosAssistidos.includes(1)"
              class="concluido"
            >
              ✓ Concluído
            </span>

          </div>

        </article>

        <article class="video-card">

          <div class="numero">
            02
          </div>

          <div class="video">

            <video
              controls
              src="/videos/html.mp4"
              @ended="marcarComoAssistido(2)"
            ></video>

          </div>

          <div class="video-info">

            <span class="aula-label">
              AULA 02
            </span>

            <h3>
              Introdução ao HTML
            </h3>

            <p>
              Aprenda a criar páginas utilizando HTML.
            </p>

            <span
              v-if="videosAssistidos.includes(2)"
              class="concluido"
            >
              ✓ Concluído
            </span>

          </div>

        </article>

        <article class="video-card">

          <div class="numero">
            03
          </div>

          <div class="video">

            <video
              controls
              src="/videos/django.mp4"
              @ended="marcarComoAssistido(3)"
            ></video>

          </div>

          <div class="video-info">

            <span class="aula-label">
              AULA 03
            </span>

            <h3>
              Introdução ao Django
            </h3>

            <p>
              Conheça o framework Django e seus principais conceitos.
            </p>

            <span
              v-if="videosAssistidos.includes(3)"
              class="concluido"
            >
              ✓ Concluído
            </span>

          </div>

        </article>

        <article class="video-card">

          <div class="numero">
            04
          </div>

          <div class="video">

            <video
              controls
              src="/videos/vue3.mp4"
              @ended="marcarComoAssistido(4)"
            ></video>

          </div>

          <div class="video-info">

            <span class="aula-label">
              AULA 04
            </span>

            <h3>
              Introdução ao Vue 3
            </h3>

            <p>
              Aprenda os primeiros conceitos do Vue 3.
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

:global(html) {
  scroll-behavior: smooth;
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
    radial-gradient(
      circle at 10% 10%,
      rgba(84, 53, 150, 0.35),
      transparent 35%
    ),
    radial-gradient(
      circle at 90% 20%,
      rgba(19, 95, 125, 0.35),
      transparent 30%
    ),
    linear-gradient(
      135deg,
      #17132d 0%,
      #241b46 45%,
      #182e42 100%
    );

  background-attachment: fixed;
}



.flecha {
  width: min(1200px, 100%);
  margin: 0 auto 4rem;
}
.flecha a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 10px;
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
  color: #a78bfa;
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
  color: #a78bfa;
}

.cabecalho p {
  max-width: 600px;
  color: #bcb8ca;
  font-size: 1rem;
  line-height: 1.6;
}



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
  color: #aaa5b8;
  font-size: 0.85rem;
}

.progresso-topo strong {
  color: #a78bfa;
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
    #7650e8,
    #a78bfa
  );
  border-radius: 20px;
  transition: width 0.5s ease;
}



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
  color: #a78bfa;
  font-size: 0.7rem;
  letter-spacing: 2px;
  font-weight: bold;
}

.titulo-aulas h2 {
  margin: 7px 0 0;
  font-size: 2rem;
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
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 15px 35px rgba(0,0,0,0.25);
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
  background: rgba(20,15,40,0.8);
  font-size: 0.75rem;
  font-weight: bold;
}

.video {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #0e0c19;
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
  color: #a78bfa;
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.video-info h3 {
  margin: 8px 0;
  color: white;
  font-size: 1.2rem;
}

.video-info p {
  color: #aaa5b8;
  font-size: 0.85rem;
  line-height: 1.5;
}

.concluido {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 20px;
  background: rgba(66,184,131,0.15);
  color: #42b883;
  font-size: 0.75rem;
  font-weight: bold;
}



@media (max-width: 800px) {
  .pagina {
    padding: 1.5rem 1.5rem 4rem;
  }
  .video-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 500px) {
  .pagina {
    padding: 1.5rem 1rem 3rem;
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
