<script setup>
import { RouterView } from 'vue-router'
import AppPomodoro from './components/AppPomodoro.vue';
</script>

<template>
  <div>
    <main>
      <RouterView />
      <AppPomodoro></AppPomodoro>
    </main>

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
