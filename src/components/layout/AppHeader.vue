<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

const isHidden = ref(false)
const isTop = ref(true)
const lastScrollY = ref(0)

const handleScroll = () => {
  const currentScrollY = window.pageYOffset || document.documentElement.scrollTop
  isTop.value = currentScrollY <= 0

  if (currentScrollY > lastScrollY.value && currentScrollY > 50) {
    isHidden.value = true
  } else if (currentScrollY < lastScrollY.value) {
    isHidden.value = false
  }

  lastScrollY.value = currentScrollY
}

onMounted(() => {
  lastScrollY.value = window.pageYOffset || document.documentElement.scrollTop
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="{ hidden: isHidden, transparent: isTop }">
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
  <div>
  </div>
</template>

<style scoped>
p {
  font-size: 5rem;
}
img {
  width: 100px;
  height: auto;
  position: relative;

}

ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 75px;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 16px;
  display: flex;
  justify-content: center;
  background-color: black;
  transition: transform 0.25s ease, opacity 0.25s ease, background-color 0.25s ease;

  /*backdrop-filter: blur(10px);*/
}

header.transparent {
  background-color: transparent;
}

header.hidden {
  transform: translateY(-100%);
  opacity: 0;
  pointer-events: none;
}

.router-link-active {
  border-radius: 10vw;
  background-color: transparent;
  border: 1px solid #135F7D;
  box-shadow: 2px solid black;
  padding: 20px 40px 20px 40px;
}

a{
  color: white;
  padding: 20px;
  font-size: 1.4rem;
  font-weight: 300;
  transition: 1s;
    font-family: "Julius Sans One", sans-serif;

}



a:hover {
  transition: 1s;
  border: 1px solid #135F7D;
  padding: 20px 40px 20px 40px;
  border-radius: 10vw;



}
.julius-sans-one-regular {
  font-family: "Julius Sans One", sans-serif;
  font-weight: 400;
  font-style: normal;
}




</style>
