<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import ButtonChild from './ButtonChild.vue'
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

const abrirMenu = ref(false)
const abrirLivros = ref(false)
</script>

<template>
 <header :class="{ hidden: isHidden, transparent: isTop }">

  <nav class="desktop-nav">
    <ul class="principal">
      <li><RouterLink to="/">Principal</RouterLink></li>

      <li class="nav-item">
        <RouterLink class="livro" to="#">Livros</RouterLink>

        <ul class="mais">
          <li class="verde">
            <RouterLink to="/agro">Livros - Agro</RouterLink>
          </li>
          <li class="azul">
            <RouterLink to="/info">Livros - Info</RouterLink>
          </li>
          <li class="vermelho">
            <RouterLink to="/quimi">Livros - Quimi</RouterLink>
          </li>
        </ul>
      </li>

      <li><img src="/images/Revelio.png"></li>
        <li class="nav-item">
          <RouterLink to="/atividades">Atividades</RouterLink>
          <ul class="mais">
            <li>
              <RouterLink to="/cursos">Cursos</RouterLink>
            </li>
          </ul>
        </li>
      <li>
        <RouterLink to="/extras">Extras</RouterLink>

        <ul class="mais">
          <li>
            <RouterLink to="/sobre">Sobre nós</RouterLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>


  <nav class="mobile-nav">
    <ButtonChild class="hamburguer"  @clique="abrirMenu = !abrirMenu"
    >
      ☰
    </ButtonChild>

    <Transition name="modal-tudo">
      <div v-if="abrirMenu"   class="modal-nav"  @click="abrirMenu = false"
      >
        <ul class="menu-mobile" @click.stop>

          <li>
            <RouterLink to="/">Principal</RouterLink>
          </li>

          <li>
            <a @click.prevent="abrirLivros = !abrirLivros">
              Livros
            </a>

            <ul class="abriu" v-show="abrirLivros">
              <li>
                <RouterLink to="/agro">Agro</RouterLink>
              </li>
              <li>
                <RouterLink to="/info">Info</RouterLink>
              </li>
              <li>
                <RouterLink to="/quimi">Química</RouterLink>
              </li>
            </ul>
          </li>

          <li>
            <RouterLink to="/atividades">Atividades</RouterLink>
          </li>
          <li>
            <RouterLink to="/extras">Extras</RouterLink>
          </li>

        </ul>
      </div>
    </Transition>
  </nav>

</header>
</template>

<style scoped>
.desktop-nav {
    display: block;
}

.mobile-nav {
    display: none;
}
p {
  font-size: 5rem;
}

img {
  width: 100px;
  height: auto;
  position: relative;

}

.principal {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 75px;
}

li img {
  display: block;
}

header {
  position: fixed;
  width: 100%;
  z-index: 100;
  padding: 10px;
  display: flex;
  justify-content: center;
  background-color: black;
  transition: transform 0.25s ease, opacity 0.25s ease, background-color 0.25s ease;
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


a {
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
.nav-item {
  position: relative;
}
.nav-item::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 15px;
}

.mais li {
  list-style: none;
  border: none;
}

.mais {
   display: none;
  flex-direction: column;
  display: none;
  position: absolute;
  top: calc(100% + 15px);
  left: 0;
   list-style-type: none;
  background-color: rgba(0, 0, 0, 0.95);
  border-radius: 15px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  z-index: 20;
  min-width: 220px;
  margin: 2px;
  padding: 10px 0;
  list-style: none;
  border: none;

}

.nav-item:hover .mais,
.mais.ativo {
  display: block;
}
@keyframes pop {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }

}

.nav-item:hover .mais{
  display: block;
}

.mais a {
  display: block;
  padding: 10px 16px;
  border-radius: 8px;
}

.mais .azul:hover {
  background-color: rgb(0, 183, 255);
  transition: 0.5s;
  border-radius: 8px;
  border: none;
}
.mais .verde:hover {
  background-color: green;
  transition: 0.5s;
  border-radius: 8px;
  border: none;


}
.mais .vermelho:hover {
  background-color: red;
  transition: 0.5s;
  border-radius: 8px;
  border: none;


}

.livros {
  display: none;
}

.julius-sans-one-regular {
  font-family: "Julius Sans One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.hamburguer {
  display: none;
  font-size: 24px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}
@media (max-width: 732px){
 ul .abriu{
    animation: abrir 0.3s ease ;
    display: block;
    justify-content: center;
  }
  @keyframes abrir{
    from {
      opacity: 0;
      transform: translateY(20%);
    }
    to{
      opacity: 1;
      transform: translate(0);
    }
  }
   .desktop-nav {
        display: none;
    }

    .mobile-nav {
        display: block;
    }
  .modal-tudo-enter-from{
    opacity: 0;
    transform: translateX(-40%);
  }
  .modal-tudo-enter-active{
      transition: transform 0.6s ease, opacity 0.4s ease;
  }
  .modal-tudo-enter-to{
    transform: translateX(0);
    opacity: 1;
  }
  .modal-tudo-leave-from{
     transform: translateX(0);
    opacity: 1;
  }
  .modal-tudo-leave-active{
     transition: transform 0.6s ease, opacity 0.4s ease;
  }
  .modal-tudo-leave-to{
    opacity: 0;
    transform: translateX(-50%);
  }


  header{
    padding: 40px;
    background: rgba(0, 0, 0, 0.788);
  }

  .hamburguer {
    display: block;
    position:absolute;
    left:20px;
    top:50%;
    transform:translateY(-50%);
    margin: 8px;
    font-size: 2.4rem;
  }

   .principal {
   display: none;
  }
  .modal-nav{
     position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 20px rgba( 0, 0, 0, 0.1);
    display: flex;
  justify-content: flex-start;
  align-items: stretch;
  z-index: 1000;

  }
  .menu-mobile{
  position: relative;
  width: 100%;
  max-width: 140px;
  height: 100%;
  background: rgba(0, 0, 0, 0.788);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
   padding: 30px;
  }
  .menu-mobile li a{
    font-size: 1.1rem;

  }

  .menu-mobile li{
    list-style: none;
    line-height: 50px;
    margin-bottom: 20px;
  }

}
</style>
