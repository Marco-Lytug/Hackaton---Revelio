<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
  <header>
    <nav>
      <ul>

      <RouterLink to="/">Principa</RouterLink>
      <RouterLink to="/livros">Livros</RouterLink>
       <img src="/public/images/Revelio.png" alt="">
      <RouterLink to="/atividades">Atividades</RouterLink>
      <RouterLink to="/extras">Extras</RouterLink>
      </ul>
    </nav>
  </header>

</template>


<style scoped>
  img {
    width: 65px;
    height: auto;
    position: relative;
  }
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>
