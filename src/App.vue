<script setup>
import { RouterView } from 'vue-router'

</script>

<template>
  <div>
    <main>
      <RouterView />

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
