<script setup>
import LivroLista from '@/components/layout/livros/LivroLista.vue';
import { livrosInfo1Ano, livrosInfo2Ano, livrosInfo3Ano } from '@/Data/livrosInfo.js'
const TodosOsLivros = [
  ...livrosInfo1Ano,
  ...livrosInfo2Ano,
  ...livrosInfo3Ano
]
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
    
  
</template>

<style scoped>

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
  background-color: #187fa8;
  transition: 0.8s;
  color: rgb(230, 230, 230);
}

</style>