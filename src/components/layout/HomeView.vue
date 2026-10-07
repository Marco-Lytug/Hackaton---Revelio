<script setup>
import { RouterLink } from 'vue-router'

import {  ref } from 'vue'
import ButtonChild from './ButtonChild.vue'
import AppHeader from '../../components/layout/AppHeader.vue'

import AppFooter from './AppFooter.vue'

import AppPomodoro from '../AppPomodoro.vue'

const mostrarDetalhes = ref(false);


</script>

<template>
  <header>
    <AppHeader></AppHeader>
  </header>
  <AppPomodoro></AppPomodoro>
  <section class="banner">
    <h1>Ache o fim de suas <br> preocupações aqui, na <span>Revelio</span> ! </h1>
  </section>
  <section class="dificuldades">
    <h2>COM DIFICULDADES?</h2>
    <div class="all">
      <div>
        <p>Com a Revelio, podemos te ajudar a <br> melhorar o seu desempenho, com <br> livros e dicas de estudos,
          atividades e <br> videoaulas! Acesse nossa página de livros no botão abaixo, e veja também nossas <RouterLink to="atividades">atividades</RouterLink> ! </p>
      </div>
      <div class="img">
        <img src="/images/GarotoLendo.png" alt="">
      </div>
    </div>
    <ButtonChild @clique="mostrarDetalhes = true">
      NOSSA BIBLIOTECA!
    </ButtonChild>
    <div class="modal" v-show="mostrarDetalhes" @click="mostrarDetalhes = false">
      <div class="cursos">
        <RouterLink class="info" to="/info"><img src="/images/iconinfo.png" alt=""></RouterLink>
        <RouterLink class="agro" to="/agro"><img src="/images/iconagro.png" alt=""></RouterLink>
        <RouterLink class="quimi" to="/quimi"><img src="/images/iconquimi.png" alt=""></RouterLink>
      </div>
    </div>
  </section>



  <section class="help">
    <h2>Help!</h2>
    <div class="all">
      <div>
        <p>Na Help!, ajudaremos você a estudar, aqui temos video aulas e dicas de estudo, aproveite!</p>
      </div>
      <div class="img">
        <img src="/images/help.png" alt="">
      </div>
    </div>
    <RouterLink to="/atividades">AQUI!</RouterLink>
  </section>
  <appFooter></appFooter>
</template>

<style scoped>
.slidesLivros{
  width: 98%;
  padding-bottom: 15vw;
  overflow: hidden;
}

.slidesLivros .imagens {
  display: flex;
}


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

.livros {
  display: flex;

}
.sliders{
  display: flex;
  justify-content: space-around;
}
.banner {
  position: relative;
  background: url(/images/Banner_HomeView.png) center/cover no-repeat;
  animation: fadeIn 2s ease forwards;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
}

div.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  padding: 1rem;
}

div.modal .cursos {
  background: #fff;
  padding: 2rem;
  border-radius: 16px;
  display: flex;
  gap: 10rem;
  align-items: center;
  justify-content: center;
  max-width: 90%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

div.modal .cursos .info :hover {
  background: #135F7D;
  padding: 2rem;
  border-radius: 50px;
  display: flex;
  gap: 10rem;
  align-items: center;
  justify-content: center;
  max-width: 90%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

div.modal .cursos .agro :hover {
  background: green;
  padding: 2rem;
  border-radius: 20vw;
  display: flex;
  gap: 10rem;
  align-items: center;
  justify-content: center;
  max-width: 90%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

div.modal .cursos .quimi :hover {
  background: red;
  padding: 2rem;
  border-radius: 50px;
  display: flex;
  gap: 10rem;
  align-items: center;
  justify-content: center;
  max-width: 90%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

div.cursos img {
  width: 30vh;
  height: 30vh;
  object-fit: contain;
  transition: 0.5s;
}

div.cursos img:hover {
  transition: 0.5s;
  width: 35vh;
  height: 35vh;
  object-fit: contain;
}

.banner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
}

.dificuldades {
  background-color: white;
}

.dificuldades h2 {
  color: #135F7D;
  font-size: 5rem;
  padding: 4vw 0 0 4vw;
  font-family: "Josefin Sans", sans-serif;
  animation: spawn;
  animation-timeline: view();
  animation-range: entry 0% 50%;

}

.dificuldades p {
  color: black;
  font-size: 3rem;
  padding: 0 7vw 0 7vw;
  font-family: "Josefin Sans", sans-serif;
  animation: spawn;
  animation-timeline: view();
  animation-range: entry 0% 50%;

}

button {
  background-color: #135F7D;
  color: white;
  border: 6px solid #F4E6CC;
  border-radius: 5vw;
  padding: 2vw;
  font-size: 2rem;
  font-family: "Josefin Sans", sans-serif;
  margin: 0 0 10vw 3vw;
  cursor: pointer;
  transition: 0.5s;

}

button:hover {
  background-color: #F4E6CC;
  color: #135F7D;
  border: 6px solid #135F7D;
  border-radius: 5vw;
  padding: 2vw;
  font-size: 2rem;
  font-family: "Josefin Sans", sans-serif;
  margin: 0 0 15vw 6vw;
  cursor: pointer;
  transition: 0.3s;
}

div {
  display: flex;
  justify-content: space-between;
}

.all {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.img {
  width: 80vh;
  position: relative;
  margin: 0;
  animation: spawn;
  animation-timeline: view();
  animation-range: entry 0% 50%;

}


h1 {
  color: white;
  z-index: 1;
  font-size: 4rem;
  padding: 2vw;
  font-family: "Josefin Sans", sans-serif;

}

h1 span {
  color: #135F7D;
  z-index: 1;
  font-size: 4rem;
  background-color: rgba(255, 255, 255, 0.767);
  border-radius: 15px;
  padding: 10px;
}

.help {
  background-color: white;
  margin: 0 0 20vw 0;
}

.help h2 {
  color: #135F7D;
  font-size: 5rem;
  padding: 4vw 0 0 4vw;
  font-family: "Josefin Sans", sans-serif;
  text-align: center;
  animation: spawn;
  animation-timeline: view();
  animation-range: entry 0% 50%;
  border-bottom: 1px solid #135F7D;
  margin: 0 10vw 0 10vw;
}

.help p {
  color: black;
  font-size: 3rem;
  padding: 0 7vw 0 7vw;
  font-family: "Josefin Sans", sans-serif;
  animation: spawn;
  animation-timeline: view();
  animation-range: entry 0% 50%;

}

.help a {
  background-color: #135F7D;
  color: white;
  border: 6px solid #F4E6CC;
  border-radius: 5vw;
  padding: 2vw 5vw 2vw 5vw;
  font-size: 2.5rem;
  font-family: "Josefin Sans", sans-serif;
  margin: 0 0 10vw 3vw;
  cursor: pointer;
  transition: 0.5s;
  top: 100%;

}

.help a:hover {
  background-color: #F4E6CC;
  color: #135F7D;
  border: 6px solid #135F7D;
  border-radius: 5vw;
  padding: 2vw 5vw 2vw 5vw;
  font-size: 2.5rem;
  font-family: "Josefin Sans", sans-serif;
  margin: 0 0 35vw 6vw;
  cursor: pointer;
  transition: 0.3s;
}

button {
  background-color: #135F7D;
  color: white;
  border: 6px solid #F4E6CC;
  border-radius: 5vw;
  padding: 2vw;
  font-size: 2rem;
  font-family: "Josefin Sans", sans-serif;
  margin: 0 0 10vw 3vw;
  cursor: pointer;
  transition: 0.5s;

}

button:hover {
  background-color: #F4E6CC;
  color: #135F7D;
  border: 6px solid #135F7D;
  border-radius: 5vw;
  padding: 2vw;
  font-size: 2rem;
  font-family: "Josefin Sans", sans-serif;
  margin: 0 0 10vw 6vw;
  cursor: pointer;
  transition: 0.3s;
}

div {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 732px) {
  .banner {
    min-height: 68svh;
    height: auto;
    padding: 6rem 1rem;
    box-sizing: border-box;
  }

  .banner h1 {
    font-size: clamp(2rem, 9vw, 3rem);
    line-height: 1.2;
    padding: 0;
  }

  .banner h1 span {
    font-size: 1.05em;
  }

  .dificuldades h2,
  .help h2 {
    font-size: clamp(2.25rem, 10vw, 3.5rem);
    padding: 2rem 1rem 0;
  }

  .dificuldades p,
  .help p {
    font-size: clamp(1.35rem, 5.6vw, 1.8rem);
    padding: 1rem 1.25rem 0;
    line-height: 1.45;
  }

  .all {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem 0;
  }

  .all > div:first-child {
    text-align: center;
  }

  .img {
    width: min(100%, 26rem);
    max-width: 100%;
  }

  .img img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  button,
  .help a {
    display: inline-flex;
    justify-content: center;
    width: calc(100% - 2.5rem);
    margin: 0 1.25rem 4rem;
    padding: 1rem 1.25rem;
    border-width: 4px;
    border-radius: 1.5rem;
    font-size: 1.5rem;
    box-sizing: border-box;
  }

  .help {
    margin-bottom: 2rem;
  }

  .help h2 {
    margin: 0 1rem;
  }

  .help a {
    width: calc(100% - 2.5rem);
  }

  .modal .cursos {
    flex-direction: column;
    gap: 1rem;
    width: min(90%, 22rem);
    padding: 1.25rem;
  }

  .modal .cursos img {
    width: min(70vw, 8rem);
    height: min(70vw, 8rem);
  }

  .modal .cursos img:hover {
    width: min(70vw, 8rem);
    height: min(70vw, 8rem);
  }

  .modal .cursos .info:hover,
  .modal .cursos .agro:hover,
  .modal .cursos .quimi:hover {
    padding: 0.5rem;
    border-radius: 1rem;
  }
}

@media (max-width: 430px) {
  .dificuldades p br,
  .dificuldades p br + br {
    display: none;
  }

  .dificuldades p {
    font-size: 1.25rem;
  }

  .help h2 {
    padding-top: 1.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .banner,
  .dificuldades p,
  .dificuldades h2,
  .img {
    animation: none;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.98);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes spawn {
  from {
    opacity: 0;
    scale: 0.98;
  }
}

.josefin-sans-uniquifier{
  font-family: "Josefin Sans", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

</style>
