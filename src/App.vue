<script setup>
import { RouterView } from 'vue-router'
import AppFooter from './components/layout/AppFooter.vue'

</script>

<template>
  <div class="app">
    <main>
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1 1 auto;
}

</style>
