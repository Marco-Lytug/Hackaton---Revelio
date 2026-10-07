












<script setup>
import { RouterLink } from 'vue-router'

/*import { onMounted, onUnmounted, ref } from 'vue'

const isVisible = ref(false)

const checkScroll = () => {
  const scrollPosition = window.scrollY + window.innerHeight
  const documentHeight = document.documentElement.scrollHeight
  isVisible.value = scrollPosition >= documentHeight - 20
}

onMounted(() => {
  checkScroll()
  window.addEventListener('scroll', checkScroll, { passive: true })
  window.addEventListener('resize', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
  window.removeEventListener('resize', checkScroll)
}):class="{ hidden: !isVisible }"*/
</script>

<template>
  <footer>
    <nav aria-label="Navegação do rodapé">
      <div class="all">
        <div class="img">
          <img src="/images/RevelioFooter.png" alt="Revelio">
        </div>
        <div class="left">
          <RouterLink to="/">Principal</RouterLink>
          <RouterLink to="/atividades">Atividades</RouterLink>
          <RouterLink to="/sobre">Sobre nós</RouterLink>
          <RouterLink to="/login">Login</RouterLink>
        </div>
        <div class="right">
          <RouterLink to="/info">Livros de Info</RouterLink>
          <RouterLink to="/quimi">Livros de Quimica</RouterLink>
          <RouterLink to="/agro">Livros de Agro</RouterLink>
          <RouterLink to="/cursos">Cursos</RouterLink>
        </div>
        <div class="texto">
          <p>&copy; Revelio, 2026</p>
        </div>
      </div>
    </nav>
  </footer>
</template>

<style scoped>
.texto {
  grid-column: 1 / -1;
  color: black;
  font-size: 1.25rem;
  text-align: center;
}

.texto p {
  margin: 0;
}

.img {
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
}

.img img {
  display: block;
  width: min(100%, 16rem);
  height: auto;
}

.all {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem 3rem;
  width: 100%;
}

.left,
.right {
  display: grid;
  align-content: start;
  gap: 0.35rem;
}

.left {
  text-align: right;
}

.right {
  text-align: left;
}

footer {
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: clamp(1rem, 3vw, 2.5rem);
  box-sizing: border-box;
  background-color: #f4e6cc;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: translateY(0);
  opacity: 1;
}

nav {
  display: flex;
  width: 100%;
  border-bottom: 1px solid #bcb2a0;
  padding-bottom: 1rem;
}

a {
  color: black;
  padding: 0.45rem 0.6rem;
  font-size: 1.25rem;
  line-height: 1.3;
  transition: color 0.5s ease;
}

a:hover,
a:focus-visible {
  color: #726c60;
}

@media (max-width: 732px) {
  .all {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;
  }

  .img {
    width: 100%;
  }

  .img img {
    width: min(100%, 12rem);
    margin: 0 auto;
  }

  .left,
  .right {
    grid-template-columns: 1fr 1fr;
    text-align: left;
  }

  .left {
    margin: 0;
  }

  .right {
    margin: 0;
  }

  a {
    font-size: 1.05rem;
    padding: 0.4rem;
  }

  .texto {
    text-align: center;
  }
}

@media (max-width: 430px) {
  .left,
  .right {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .left a,
  .right a {
    display: block;
  }
}

@media (prefers-reduced-motion: reduce) {
  footer,
  a {
    transition: none;
  }
}
</style>
