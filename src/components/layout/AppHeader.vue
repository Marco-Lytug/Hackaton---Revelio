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
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cupiditate, recusandae amet adipisci sed quos at molestiae laborum laudantium error suscipit sequi ducimus, eos id explicabo autem quo dicta. Saepe!
    </p>
  </div>
</template>

<style scoped>
p {
  font-size: 5rem;
}
img {
  width: 85px;
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
  background-color: rgba(128, 128, 128, 0.95);
  transition: transform 1s ease, opacity 0.5s ease, background-color 0.5s ease;

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
  padding: 10px 40px 10px 40px;
}

a{
  color: white;
  padding: 10px;
  font-size: 1.2rem;
  font-family: "Josefin Slab", serif;
  font-weight: 670;
  transition: 1s;
}
a:hover {
  font-weight: 670;
  transition: 1s;
  border: 1px solid #135F7D;
  padding: 10px 40px 10px 40px;
  border-radius: 10vw;

}

</style>
