<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
  <div class="flecha">
    <RouterLink to="/cursos">
      <fa icon="arrow-left"/> Voltar
    </RouterLink>
  </div>
  <section class="principal">
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

</style>
