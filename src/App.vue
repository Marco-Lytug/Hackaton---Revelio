<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import HomeView from './components/layout/HomeView.vue';
</script>

<template>
  <div>
    <AppHeader />
    <main>
      <RouterView />
      <HomeView />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>


</style>
