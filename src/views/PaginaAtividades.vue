<script setup>
import AppHeader from '../components/layout/AppHeader.vue'
import { quizzesInfo } from '@/Data/quizInfo.js'
import { quizzesAgro } from '@/Data/quizAgro.js'
import { quizzesQuimi } from '@/Data/quizQuimi.js'

const quizzesInformatica = {
  ...quizzesInfo
}
const quizzesAgropecuaria = {
  ...quizzesAgro
}
const quizzesQuimica = {
  ...quizzesQuimi
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
        <a class="botao" href="#quizzes">Ver Quizzes</a>
      </div>
    </div>
  </section>
  <section class="apresentacao">
    <h3>Seu espaço para aprender sem complicação.
Aqui você encontra atividades, quizzes e testes pensados 
para ajudar nos estudos dos cursos técnicos em Informática, Química e Agropecuária. 
Tudo de forma simples, prática e acessível, para revisar conteúdos, testar conhecimentos
 e ganhar mais confiança no aprendizado, no seu ritmo e quando precisar.</h3>
  </section>

  <section class="titulo" id="quizzes">
    <div>
      <h3>
        Quizzes de Informática
      </h3>
      <p>
        Teste seus conhecimentos com os quizzes voltados para o curso de Informática do IFC Araquari
      </p>
    </div>
  </section>

  <section class="secao-quizzes">
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

  <section class="titulo" id="quizzes">
    <div>
      <h3>
        Quizzes de Agropecuária
      </h3>
      <p>
        Teste seus conhecimentos com os quizzes voltados para o curso de Agropecuária do IFC Araquari
      </p>
    </div>
  </section>

  <section class="secao-quizzes">
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

  <section class="titulo" id="quizzes">
    <div>
      <h3>
        Quizzes de Química
      </h3>
      <p>
 Teste seus conhecimentos com os quizzes voltados para o curso de Química do IFC Araquari
      </p>
    </div>
  </section>

  <section class="secao-quizzes">
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
  background: url(/images/banner_info.jpg) center/cover no-repeat;
  height: 100vh;
  width: 100vw;
  align-items: center;
  display: flex;
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

.secao-quizzes {
  padding: 0 5vw 5vw 5vw;
}

.bloco-categoria h4 {
  font-size: 2.2rem;
  color: #135F7D;
  font-family: "Josefin Sans", sans-serif;
  margin: 20px 0;
}

.grid-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.card-quiz {
  background: #fdfdfd;
  border: 2px solid #135F7D;
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.card-quiz h5 {
  font-size: 1.8rem;
  color: #135F7D;
  font-family: "Josefin Sans", sans-serif;
  margin-bottom: 1rem;
}

.card-quiz p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 1.5rem;
  font-family: "Josefin Sans", sans-serif;
}

.btn-acessar {
  background-color: #135F7D;
  color: white;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.4rem;
  padding: 12px;
  border-radius: 15px;
  text-align: center;
  text-decoration: none;
  border: none;
  transition: 0.3s ease;
}

.btn-acessar:hover {
  background-color: #1a92c2;
  color: white;
}
</style>