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
  <footer >
    <nav>
      <ul>
        <div class="all">
          <div class="img">
            <img src="/images/RevelioFooter.png" alt="">
          </div>
          <div class="left">
            <RouterLink to="/">Principal</RouterLink>
            <RouterLink to="/">Atividades</RouterLink>
            <RouterLink to="/">Extras</RouterLink>
            <RouterLink to="/sobre">Sobre nós</RouterLink>
          </div>
          <div class="right">
            <RouterLink to="/info">Livros de Info</RouterLink>
            <RouterLink to="/quimi">Livros de Quimica</RouterLink>
            <RouterLink to="/agro">Livros de Agro</RouterLink>
            <RouterLink to="/cursos">Cursos</RouterLink>

          </div>
          <div class="texto">
            <p>
              &copy; Revelio, 2026
            </p>
          </div>
        </div>
      </ul>
    </nav>
    <div class="copy">

    </div>
  </footer>
</template>

<style scoped>

.texto{
  position: absolute;
  top: 80%;
  color: #BCB2A0;
  display: flex;
}
.img{
  position: relative;
}

div img{
  position: absolute;
  top: -95%;
}


.all{
  display: flex;
}
.left{
  display: grid;
    margin: 0 0 0 40vw;
    text-align: right;

}
.right{
  display: grid;
}


ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 75px;
}

footer {
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2vw;
  display: flex;
  background-color: #F4E6CC;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: translateY(0);
  opacity: 1;
}

nav {
  display: flex;
  width: 100%;
  border-bottom: 1px solid #BCB2A0;

}

a{
  color: #BCB2A0;
  padding: 10px;
  font-size: 1.5rem;
  transition: 1s;


}
a:hover {
  transition: 0.5s;
    color: #726C60;
  }

</style>
