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
function LivroNaoEncontrado (){
  if (filtro.value.trim().length > 0 && FiltroAutorTitulo.value.length == 0){
     return "Ops! Parece que ainda não temos esse livro ou autor"
  }
}
const LivrosExibidos = computed(() => {
  if (filtro.value.trim().length > 0) {
    return LivrosFiltrados.value
  }

  return []
})
</script>

<template>
  
<div class="barras">

 <div class="barra-pesquisa">
      <input type="text" placeholder="Pesquisar por título ou por autor" v-model="filtro" />
       
    </div>
    <p class="mensagem">
      {{ LivroNaoEncontrado() }}
    </p>
    
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

</style>