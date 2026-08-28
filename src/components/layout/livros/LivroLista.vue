<script setup>

import {ref} from 'vue'
import LivroCard from './LivroCard.vue';
import { computed } from 'vue'
const props = defineProps(['livros','lista', 'categorias','tipo'])
const filtro = ref('');
const categoriaInfo = ref('')
const categoriaAgro = ref('')
const categoriaQuimi = ref('')

const todasCategorias = computed(() => 
  categoriaInfo.value ||
  categoriaAgro.value ||
  categoriaQuimi.value
)
const emit = defineEmits(['favoritar'])

function LivroFavoritado(livro) {
  emit('favoritar', livro)
}
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

  else if (todasCategorias.value.trim().length > 0) {
    return props.livros.filter(item =>
      item.categoria.toLowerCase().includes(todasCategorias.value.toLowerCase())
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
  <section class="pesquisa">
<div class="barras">

 <div class="barra-pesquisa"   >

      <input class="input" type="text" placeholder="Pesquisar por título ou por autor" v-model="filtro" />

   <div class="select"  :class="{ ativo: props.categorias === 'info' }"  v-if="props.categorias === 'info'">
       <select name="categoria" id=""   v-model="categoriaInfo">
      <option disabled value ="">Selecione por categoria</option>
      <option value="">Nenhum</option>
      <option value="Algoritmos">Algoritmos</option>
      <option value="Banco de Dados">Banco de Dados</option>
      <option value="Back-End">Back-End</option>
      <option value="CSS">CSS</option>
      <option value="Design">Design</option>
      <option value="Django">Django</option>
      <option value="Front-End">Front-End</option>
      <option value="JavaScript">JavaScript</option>
      <option value="Lógica de Programação">Lógica de Programação</option>
      <option value="Projeto de Software">Projeto de Software</option>
      <option value="Programação">Programação</option>
      <option value="Python">Python</option>
      <option value="Redes">Redes</option>
      <option value="Scrum">Scrum</option>
    

      </select>
    </div>
       
      <div class="select"  :class="{ ativo: props.categorias === 'agro' }" v-if="props.categorias === 'agro'">
       <select name="categoria" id=""  v-model="categoriaAgro">
      <option disabled value ="">Selecione por categoria</option>
      <option value="">Nenhum</option>
      <option value="Adubação e Calagem">Adubação e Calagem</option>
      <option value="Apicultura">Apicultura</option>
      <option value="Citricultura">Citricultura</option>
      <option value="Desenho Técnico">Desenho Técnico</option>
      <option value="Entomologia">Entomologia</option>
      <option value="Irrigação e Drenagem">Irrigação e Drenagem</option>
      <option value="Mecanização">Mecanização</option>
      <option value="Olericultura">Olericultura</option>
      <option value="Paisagismo">Paisagismo</option>
      <option value="Silvicultura">Silvicultura</option>
      <option value="Topografia">Topografia</option>
      <option value="Zootecnia">Zootecnia</option>
      <option value="Agroindústria">Agroindústria</option>
       </select>
      </div>

           <div class="select"  :class="{ ativo: props.categorias === 'quimi' }" v-if="props.categorias === 'quimi'" >
       <select name="categoria" id=""   v-model="categoriaQuimi">
      <option disabled value ="">Selecione por categoria</option>
      <option value="">Nenhum</option>
      <option value="Química Geral">Química Geral</option>
      <option value="Quimica Inorganica">Quimica Inorganica</option>
      <option value="Quimica Organica">Quimica Organica</option>
      <option value="Fisico-Quimica">Fisico-Quimica</option>
      <option value="Quimica Analitica">Quimica Analitica</option>
      <option value="Biotecnologia">Biotecnologia</option>
      <option value="Tratamento de Águas e Efluentes">Tratamento de Águas e Efluentes</option>
      <option value="Quimica Tecnologica">Quimica Tecnologica</option>
      <option value="Operações Unitárias">Operações Unitárias</option>
        </select>
        </div>

       </div>

    <div>
    <p class="mensagem">
      {{ LivroNaoEncontrado() }}
    </p>
    </div>



</div>


 <div class="livro-lista" :class="lista">
          <LivroCard v-for="livros in FiltroAutorTitulo" :key="livros.id"
        class="Livro-card" :id="livros.id"
        :titulo="livros.titulo"  :categoria="livros.categoria"
        :capa="livros.capa" :link="livros.link" :autor="livros.autor" :descricao="livros.descricao"
        @favoritar="LivroFavoritado" :livro="livros" :tipo="props.tipo"
         >
</LivroCard>
</div>
  </section>


</template>

<style scoped>
.select:not(.ativo) {
  display: none;
}
.pesquisa{
  padding: 2.7vw 0 0 0;
}
.barra-pesquisa{
  display: flex;
  gap: 4vw;

}
select {
  padding: 0.8vw;
  border-radius: 16px;
  background: white;
  color: #135F7D;
  font-size: 1.7rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "Josefin Sans", sans-serif;
  outline: none;
  position: relative;
  top: 12%;
   box-shadow: 0 20px 30px rgba(37, 37, 37, 0.2);
}
select:hover {
    transform: scale(1,1);
  box-shadow: 0 20px 20px 0 rgba(20, 20, 20, 0.3);
   outline: none;

}

.espero{
    display:flex;
    justify-content:center;
    gap:30px;
    align-items:stretch;

}
.livro-lista {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px ;
  justify-content: center;
  align-items: center;


}
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
   box-shadow: 0 20px 30px rgba(37, 37, 37, 0.2);
  max-width: 700px;
  display: block;
  width: 100%;
  transition: all 0.3s ease;
  font-size: 1.6rem;
  font-family: "Josefin Sans", sans-serif;
  color: #135F7D;
}
.input::placeholder{
  font-size: 1.7rem;
  font-family: "Josefin Sans", sans-serif;
}
.input:hover{
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  transition: 0.3s all ease;
  transform: scale(1,1);
}
.mensagem {
  color: black;
  font-family: "Josefin Sans", sans-serif;
  margin: 0.75rem 0;
  font-size: 1.8rem;
}
/*PARTE DO CSS RESPONSIVO*/
@media (max-width: 732px) {
 .barra-pesquisa{
  padding: 30px;
  display: block;

 }
 .barra-pesquisa div{
  padding: 15px;
 }
 .barras{
  padding-top: 30px;
 }
 .pesquisa input,.pesquisa select {
    width: 100%;
  }
 .input{
  border-radius: 10px;
  font-size: 1rem;
  padding: 13px;
   box-shadow: 0 20px 30px rgba(37, 37, 37, 0.2);
 }
 .input::placeholder{
  font-size: 1rem;
 }
 select{
  border-radius: 10px;
  font-size: 1rem;
  padding: 10px;
  position: relative;
 }

 .mensagem{
  font-size: 1.2rem;
 }
 .livro-lista{
   grid-template-columns: 1fr;
 }
}

</style>
