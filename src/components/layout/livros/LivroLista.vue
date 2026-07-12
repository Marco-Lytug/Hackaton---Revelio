<script setup>

import {ref} from 'vue'
import LivroCard from './LivroCard.vue';
import { computed } from 'vue'
const props = defineProps(['livros'])
const filtro = ref('');
 // else if (categoria.value.trim().length > 0){
        // return produtosExibidos.value.filter(item => 
    //  item.categoria.toLowerCase().includes(categorias.value.toLowerCase())
  //  )
const LivrosFiltrados = computed(() => { 
  if (filtro.value.trim().length > 0) {
  return  props.livros.filter(item => 
    item.autor.toLowerCase().includes(filtro.value.toLowerCase()) ||
      item.titulo.toLowerCase().includes(filtro.value.toLowerCase())
    )
  }
  else {
    return [];
  }
})

const LivrosExibidos = computed(() => {
  if (filtro.value.trim().length > 0) {
    return LivrosFiltrados.value
  }

  return []
})

const FiltroAutorTitulo = computed(() => { 
  if (filtro.value.trim().length > 0) {

    return LivrosExibidos.value.filter(item => 
      item.autor.toLowerCase().includes(filtro.value.toLowerCase()) ||
      item.titulo.toLowerCase().includes(filtro.value.toLowerCase())
    )
  }
  else {
    return []
  }
  
    
})


function LivroNaoEncontrado (){
  if (filtro.value.trim().length > 0 && FiltroAutorTitulo.value.length == 0){
     return "Ops! Parece que ainda não temos esse livro ou autor"
  }
}

</script>

<template>
  
<div class="barras">

 <div class="barra-pesquisa">
     
      <input class="input" type="text" placeholder="Pesquisar por título ou por autor" v-model="filtro" />
       </div>
    

    <div>
    <p class="mensagem">
      {{ LivroNaoEncontrado() }}
    </p>
    </div>

</div>
   

 <div class="livro-lista" >
          <LivroCard v-for="livros in FiltroAutorTitulo" :key="livros.id"
        class="Livro-card" :id="livros.id"
        :titulo="livros.titulo"  :categoria="livros.categoria"
        :capa="livros.capa" :link="livros.link" :autor="livros.autor" :descricao="livros.descricao">
</LivroCard>
</div>
  
</template>

<style scoped>

.barras{
  
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1.5rem 0;
}
.barra-pesquisa{
  background-color: #135F7D;
  padding: 4vw;
  display: flex;
  justify-content: center;
 width: 100%;
  
}
.input {
  border-radius: 20px;
  padding: 1.4vw;
  border: none;
  outline: none;
   box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  display: block;
  width: 100%;
  transition: all 0.3s ease;
  font-size: 1.6rem;
  font-family: "Josefin Sans", sans-serif;
  color: #135F7D;
}
.input  input,::placeholder{
  font-size: 1.7rem;
  font-family: "Josefin Sans", sans-serif;
}
.input:hover{
 
  transform: scale(1.001,1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

}
.mensagem {
  color: black;
  font-family: "Josefin Sans", sans-serif;
  margin: 0.75rem 0;
  font-size: 1.8rem;
}


</style>