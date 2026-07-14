<script setup>
import Carroussel from '@/components/layout/Carroussel.vue';
import Slide from '@/components/layout/Slide.vue';
import LivroLista from '@/components/layout/livros/LivroLista.vue';
import { livrosInfo1Ano, livrosInfo2Ano, livrosInfo3Ano } from '@/Data/livrosInfo.js'
import autoresInfo from '@/Data/autores';
import autores from '@/components/layout/autores.vue';

const TodosOsLivros = [
 ...livrosInfo1Ano,
 ...livrosInfo2Ano,
 ...livrosInfo3Ano
];

const CarouselSlides = autoresInfo;

const slidesAutores = [];

for (let i = 0; i < CarouselSlides.length; i += 3) {
  slidesAutores.push(CarouselSlides.slice(i, i + 3));
}
</script>
<template>
    <section class="banner">
        <div>
        <h1>
            Livros destinados ao <br> curso de <br> informática
        </h1>

        <div>
        <a class="botao"  href="#">Ver livros</a>
        </div>

        </div>
    
    </section>

  

    <section class="pesquisa">
      
        <div>
           <LivroLista :livros="TodosOsLivros" />
        </div>
      
    </section>

    <section class="autores">
      <h2>
        Autores
      </h2>
      <p>
        Conheça os nossos principais autores
      </p>

      
      <div class="autores-carrossel">
        <Carroussel class="carousel" v-slot="{currentSlide}">
          <Slide class="autores-lista" v-for="(grupo, index) in slidesAutores" :key="index">
           <div  v-show="currentSlide === index + 1" class="autores-lista"> 
  <autores
      v-for="autor in grupo" :key="autor.id"  :id="autor.id"  :nome="autor.nome" :foto="autor.foto"
    :biografia="autor.biografia"
    :principaisObras="autor.principaisObras"
  />
     </div>
  </Slide>
        </Carroussel>
      </div>
    </section>
    
  
</template>

<style scoped>
.autores-lista {
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
}

.autores{
  text-align: center;
  font-size: 2.8rem;
  font-family: "Josefin Sans", sans-serif;
  padding: 3vw;
  color: #135F7D;
  
}
.autores p{
  color: rgb(70, 70, 70);
  text-align: center;
}
.banner {
  position: relative;
  background: url(/images/banner_info.jpg) center/cover no-repeat;
  animation: fadeIn 2s ease forwards;
  height: 100vh;
  width: 100vw;
  align-items: center;
  display: flex;
  
}

.banner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
}
h1 {
  color: white ;
  z-index: 1;
  font-size: 5rem;
  padding: 2vw;
  font-family: "Josefin Sans", sans-serif;
  margin-left: 3vw;
  position: relative;
  
}
a{
  color: white;
   background-color: #135F7D;
   border-radius: 20px;
   font-family: "Josefin Sans", sans-serif;
   font-size: 2.6rem;
   padding: 18px;
   cursor: pointer;
  position: relative;
  z-index: 1;
  margin-left: 5vw;

}
a:hover{
  background-color: #1a92c2;
  transition: 0.8s;
 color: white;
}



</style>