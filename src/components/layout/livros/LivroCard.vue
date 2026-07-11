<script setup>
import { ref } from 'vue';
defineProps(['capa', 'titulo', 'descricao','autor', 'id', 'link', 'categoria']);
import ButtonChild from '../ButtonChild.vue';
defineEmits(['fechar'])
const mostrarDetalhes = ref(false)

</script>


<template>
    <div class="livro-card">
         <img :src="capa" alt="Capa do livro" class="capa-livro" />
      
           <ButtonChild class="button-" @clique="mostrarDetalhes = true">
              Ver mais
    </ButtonChild>

    <div class="modal-overlay" v-if="mostrarDetalhes" @click="mostrarDetalhes = false" >
      <div  class="modal"  @click.stop>
       <div class="capa-autor">

         <img :src="capa" alt="Capa do livro" class="capa-livro">
       <p>
        {{ autor }}
       </p>
       </div>

       <div class="descricao">
        <h3>
            {{ titulo }}
        </h3>
        <p>
       {{ descricao }}
        </p>
        

         <a :href="link" target="_blank" rel="noopener noreferrer">Acessar material</a>
         
       </div>
   
        <ButtonChild class="button-" @clique="mostrarDetalhes = false">
        Fechar
      </ButtonChild>
            </div>
        </div>
       
    

    </div>
</template>


<style scoped>


</style>