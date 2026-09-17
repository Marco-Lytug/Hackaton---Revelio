<script setup>
import AppHeader from '../components/layout/AppHeader.vue'
import { quizzesInfo } from '@/Data/quizInfo.js'
import { quizzesAgro } from '@/Data/quizAgro.js'
import { quizzesQuimi } from '@/Data/quizQuimi.js'
import AppFooter from '../components/layout/AppFooter.vue'


const quizzesInformatica = {
  ...quizzesInfo
}
const quizzesAgropecuaria = {
  ...quizzesAgro
}
const quizzesQuimica = {
  ...quizzesQuimi
}

function irPara(secao) {
  const elemento = 
  document.getElementById(secao)
  if (elemento) {
    elemento.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

</script>

<template>
  <header>
    <AppHeader></AppHeader>
  </header>

  <section class="banner">
    <div>
      <h1>
        Aqui, você acha <br> atividades diversificadas <br> sobre suas matérias.
      </h1>
      <h3><span>Revelio</span> te ajuda a testar seus conhecimentos!</h3>

      <div>
        <button
        class="botao"
        @click="irPara('consulta-cursos')">
          Ver Quizzes
        </button>
      </div>
    </div>
  </section>
  <section class="apresentacao">
    <h3>Seu espaço para aprender sem complicação.
Aqui você encontra atividades, quizzes e testes pensados 
para ajudar nos estudos dos cursos técnicos em Informática, Química e Agropecuária. 
Tudo de forma simples, prática e acessível, para revisar conteúdos, testar conhecimentos
 e ganhar mais confiança no aprendizado, no seu ritmo e quando precisar.</h3>

 <a class="botao-aprender"
 href="#consulta-cursos">
 Quero Aprender!
</a>
  </section>
  <section id="consulta-cursos"
  class="consulta-cursos">
  <h2>
    Consulta por curso técnico
  </h2>
  <div class="linha-titulo"></div>
    <div class="cards-cursos">

    <a href="#quizzes-info" class="card-curso">
      <img src="/images/iconinfo.png" alt="Informática">

      <h3>Informática</h3>
      <p>Quizzes e atividades</p>
    </a>

    <a href="#quizzes-agro" class="card-curso">
      <img src="/images/iconagro.png" alt="Agropecuária">

      <h3>Agropecuária</h3>
      <p>Quizzes e atividades</p>
    </a>

    <a href="#quizzes-quimica" class="card-curso">
      <img src="/images/iconquimi.png" alt="Química">
    <h3>Química</h3>
      <p>Quizzes e atividades</p>
    </a>
  </div>
  </section>

  <section class="titulo tema-info" id="quizzes-info">
    <div>
      <h3>
        Quizzes de Informática
      </h3>
      <p>
        Teste seus conhecimentos com os quizzes voltados para o curso de Informática do IFC Araquari
      </p>
    </div>
  </section>

  <section class="secao-quizzes
  tema-info">
    <div v-for="categoria in quizzesInformatica" :key="categoria.ano" class="bloco-categoria">
      <h4>{{ categoria.nome }}</h4>
      <div class="grid-cards">
        <div v-for="quiz in categoria.quizzes" :key="quiz.id" class="card-quiz">
          <h5>{{ quiz.titulo }}</h5>
          <p>{{ quiz.descricao }}</p>
          <RouterLink
          :to="{
            name: 'quiz',
            params: {
              curso: 'informatica',
              ano: categoria.ano,
              id: quiz.id
            }
          }"
          class="btn-acessar">
            Fazer Quiz
          </RouterLink>
        </div>
      </div>
    </div>
  </section>

  <section class="titulo tema-agro" id="quizzes-agro">
    <div>
      <h3>
        Quizzes de Agropecuária
      </h3>
      <p>
        Teste seus conhecimentos com os quizzes voltados para o curso de Agropecuária do IFC Araquari
      </p>
    </div>
  </section>

  <section class="secao-quizzes
  tema-agro">
  <div
    v-for="categoria in quizzesAgropecuaria"
    :key="categoria.ano"
    class="bloco-categoria"
  >
    <h4>{{ categoria.nome }}</h4>

    <div class="grid-cards">
      <div
        v-for="quiz in categoria.quizzes"
        :key="quiz.id"
        class="card-quiz"
      >
        <h5>{{ quiz.titulo }}</h5>
        <p>{{ quiz.descricao }}</p>

        <RouterLink
          :to="{
            name: 'quiz',
            params: {
              curso: 'agropecuaria',
              ano: categoria.ano,
              id: quiz.id
            }
          }"
          class="btn-acessar"
        >
          Fazer Quiz
        </RouterLink>
      </div>
    </div>
  </div>
</section>

  <section class="titulo tema-quimica" id="quizzes-quimi">
    <div>
      <h3>
        Quizzes de Química
      </h3>
      <p>
 Teste seus conhecimentos com os quizzes voltados para o curso de Química do IFC Araquari
      </p>
    </div>
  </section>

  <section class="secao-quizzes
  tema-quimica ultima-secao">
  <div
    v-for="categoria in quizzesQuimica"
    :key="categoria.ano"
    class="bloco-categoria"
  >
    <h4>{{ categoria.nome }}</h4>

    <div class="grid-cards">
      <div
        v-for="quiz in categoria.quizzes"
        :key="quiz.id"
        class="card-quiz"
      >
        <h5>{{ quiz.titulo }}</h5>
        <p>{{ quiz.descricao }}</p>

        <RouterLink
          :to="{
            name: 'quiz',
            params: {
              curso: 'quimica',
              ano: categoria.ano,
              id: quiz.id
            }
          }"
          class="btn-acessar"
        >
          Fazer Quiz
        </RouterLink>
      </div>
    </div>
  </div>
</section>
<appFooter></appFooter>
</template>

<style scoped>

.titulo p {
  margin: 3vw;
  font-size: 2.3rem;
  font-family: "Josefin Sans", sans-serif;
  color: #555555;
}

.titulo h3 {
  font-size: 3.5rem;
  color: #135F7D;
  font-family: "Josefin Sans", sans-serif;
  margin: 3vw;
}

.titulo h3::after {
  content: "";
  display: flex;
  width: 700px;
  height: 3px;
  background: #135F7D;
  border-radius: 20px;
}

.banner {
  position: relative;
  background: url(/images/stocksnap-man-2562325_1920.jpg) center/cover no-repeat;
  height: 100vh;
  width: 100vw;
  align-items: center;
  display: flex;
  animation: fadeIn 2s ease forwards;
}

.banner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
}

.banner h1 {
  color: white;
  z-index: 1;
  font-size: 4rem;
  padding: 2vw;
  font-family: "Josefin Sans", sans-serif;
  margin-left: 3vw;
  position: relative;
}

.banner h3 {
  color: white;
  z-index: 1;
  font-size: 2.2rem;
  padding: 0 2vw;
  font-family: "Josefin Sans", sans-serif;
  margin-left: 3vw;
  position: relative;
}

.banner h3 span {
  color: #1a92c2;
}

.banner .botao {
  color: white;
  background-color: #135F7D;
  border-radius: 20px;
  font-family: "Josefin Sans", sans-serif;
  font-size: 2.2rem;
  padding: 15px 25px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  margin-left: 5vw;
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;
}

.banner .botao:hover {
  background-color: #1a92c2;
  transition: 0.8s;
}

/* CORES DOS CURSOS */

.tema-info {
  --cor-curso: #135F7D;
  --cor-hover: #1a92c2;
}

.tema-agro {
  --cor-curso: #2E7D32;
  --cor-hover: #43A047;
}

.tema-quimica {
  --cor-curso: #c20044;
  --cor-hover: #FF0D62;
}


/* TÍTULOS */

.titulo h3 {
  font-size: 3.5rem;
  color: var(--cor-curso);
  font-family: "Josefin Sans", sans-serif;
  margin: 3vw;
}

.titulo h3::after {
  content: "";
  display: block;
  width: 700px;
  max-width: 100%;
  height: 3px;
  margin-top: 10px;
  background: var(--cor-curso);
  border-radius: 20px;
}

.titulo p {
  margin: 3vw;
  font-size: 2.3rem;
  font-family: "Josefin Sans", sans-serif;
  color: #555555;
}


/* ÁREA DOS QUIZZES */

.secao-quizzes {
  padding: 0 5vw 5vw;
}

.bloco-categoria {
  width: 100%;
  max-width: 1150px;
  margin: 0 auto 60px;
}

.bloco-categoria h4 {
  font-size: 2.2rem;
  color: var(--cor-curso);
  font-family: "Josefin Sans", sans-serif;
  margin: 25px 0;
}


/* GRID CENTRALIZADO */

.grid-cards {
  display: grid;

  grid-template-columns:
    repeat(auto-fit, minmax(260px, 320px));

  justify-content: center;

  gap: 25px;
  width: 100%;
}


/* CARD */

.card-quiz {
  width: 100%;
  min-height: 220px;

  background: #ffffff;

  border: 2px solid var(--cor-curso);
  border-radius: 20px;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.card-quiz:hover {
  transform: translateY(-6px);

  box-shadow:
    0 10px 25px rgba(0, 0, 0, 0.14);
}

.card-quiz h5 {
  font-size: 1.8rem;
  color: var(--cor-curso);

  font-family: "Josefin Sans", sans-serif;

  margin: 0 0 1rem;
}

.card-quiz p {
  font-size: 1.2rem;
  color: #555;

  line-height: 1.5;

  margin-bottom: 1.5rem;

  font-family: "Josefin Sans", sans-serif;

  flex: 1;
}


/* BOTÃO */

.btn-acessar {
  background-color: var(--cor-curso);

  color: white;

  font-family: "Josefin Sans", sans-serif;
  font-size: 1.3rem;

  padding: 13px 18px;

  border-radius: 15px;

  text-align: center;
  text-decoration: none;

  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
}

.btn-acessar:hover {
  background-color: var(--cor-hover);
  color: white;

  transform: translateY(-2px);
}


.apresentacao {
  padding: 5vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.apresentacao h3 {
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.5rem;
  margin-top: 30px;
  margin-right: 60px;
}

.botao-aprender {
  margin-top: 30px;
  background-color: #135F7D;
  color: white;
  padding: 14px 30px;
  border-radius: 25px;
  font-size: 1.5rem;
  font-family: "Josefin Sans", sans-serif;
  text-decoration: none;
  transition: 0.3s ease;
}

.botao-aprender:hover {
  background-color: #1a92c2;
  transform: translateY(-3px);
}

.consulta-cursos {
  padding: 5vw;
  text-align: center;
  background-color: #e7f4f8;
  scroll-margin-top: 100px;
}

.consulta-cursos h2 {
  font-family: "Josefin Sans", sans-serif;
  color: #135F7D;
  font-size: 3rem;
  font-weight: 500;
}

.linha-titulo {
  width: 55%;
  height: 2px;
  background-color: #135F7D;
  margin: 25px auto 50px;
}

.cards-cursos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
  max-width: 1100px;
  margin: auto;
}

.card-curso {
  background-color: white;
  border-radius: 18px;
  padding: 25px;
  text-decoration: none;
  color: #333;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: 0.35s ease;
}

.card-curso:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.18);
}

.card-curso img {
  width: 100%;
  max-width: 220px;
  height: 150px;
  object-fit: contain;
}

.card-curso h3 {
  color: #135F7D;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.6rem;
  margin-top: 15px;
}

.card-curso p {
  color: #555;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.2rem;
}
.ultima-secao{
  padding-bottom: 10vw;
}
#quizzes-info,
#quizzes-agro,
#quizzes-quimica {
  scroll-margin-top: 100px;
}

@keyframes fadeIn {
  from {
    opacity: 0.6;
    transform: scale(1.02);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 732px) {
  .cards-cursos {
    grid-template-columns: 1fr;
  }

  .consulta-cursos h2 {
    font-size: 2rem;
  }

  .linha-titulo {
    width: 80%;
  }
    .ultima-secao {
    padding-bottom: 200px;
  }
}

</style>