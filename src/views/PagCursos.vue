<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flecha">
    <RouterLink to="/">
      <fa icon="arrow-left"/> Voltar
    </RouterLink>
  </div>
  <section class="principal">
    <ul>
      <li class="info"><RouterLink to="/CursoInfo">Cursos Info</RouterLink></li>
      <li class="agro"><RouterLink to="/CursoAgro">Cursos Agro</RouterLink></li>
      <li class="quimi"><RouterLink to="/CursoQuimi">Cursos Quimi</RouterLink></li>
    </ul>
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
.principal {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

li {
  font-size: 1.3rem;
  padding: 2vw 3vw;
  transition: 0.8s;
}
li:hover{

  border: 1px rgb(109, 108, 108) solid;
  border-radius: 15px;
  background-color: rgb(245, 248, 247);
  padding: 3vw 4vw;
  transition: 0.8s;
}
a {
  color: black;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
}
.info:hover{
border-color: #135F7D;
background-color: #2484aa69;
}
.agro:hover{
  border-color: #2E7D32;
  background-color: #2bd8336c;
}
.quimi:hover{
  border-color: red;
  background-color: rgba(235, 53, 53, 0.329);
}
</style>
