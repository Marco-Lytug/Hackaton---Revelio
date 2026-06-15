<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
  <header>
    <nav>
      <ul>

        <RouterLink to="/">Principal</RouterLink>
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
  width: 75px;
  height: auto;
  position: relative;
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 50px;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 16px;
  display: flex;
  background-color: grey  ;
  justify-content: center;
}

.router-link-active {
  border-radius: 10vw;
  background-color: transparent;
  border: 2px solid #135F7D;


}

a{
  color: white;
  padding: 10px;

}
</style>
